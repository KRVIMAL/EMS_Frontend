import React, { useState, useEffect } from "react";
import packageJson from "../package.json";
import { store } from "./utils/store";
import { addHardReloadFlag, logOutAction } from "./redux/authSlice";
import notifiers from "./global/constants/NotificationConstants";
import { isTruthy, openErrorNotification } from "./helpers/methods";

const buildDateGreaterThan = (latestDate: any, currentDate: any) => {
  const latestDateTime = new Date(latestDate);
  const currentDateTime = new Date(currentDate);

  if (latestDateTime.getTime() > currentDateTime.getTime()) {
    return true;
  } else {
    return false;
  }
};

// will implement in future
export const requiresLocalStorageClear = () => {
  const hardReloadFlag = store.getState().auth.hardReloadFlag;
  if (
    !isTruthy(hardReloadFlag) ||
    (isTruthy(hardReloadFlag) && hardReloadFlag !== "worksages-2.0.1-release")
  ) {
    store.dispatch(logOutAction());
    return true;
  }
  return false;
};
const withClearCache = (Component: any) => {
  const ClearCacheComponent = (props: any) => {
    const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);
    useEffect(() => {
      fetch(`/meta.json?${new Date().getTime()}`, { cache: "no-cache" })
        .then((response) => response.json())
        .then((meta) => {
          const latestVersionDate = meta.buildDate;
          const currentVersionDate = packageJson?.buildDate;
          const shouldForceRefresh = buildDateGreaterThan(
            latestVersionDate,
            currentVersionDate
          );
          if (shouldForceRefresh) {
            setIsLatestBuildDate(false);
            refreshCacheAndReload();
          } else {
            setIsLatestBuildDate(true);
          }
        });
    }, []);

    const refreshCacheAndReload = async () => {
      if (caches) {
        // Service worker cache should be cleared with caches.delete()
        const names = await caches.keys();
        await Promise.all(names.map((name) => caches.delete(name)));
      }
      //will implement in future
      if (requiresLocalStorageClear()) {
        store.dispatch(addHardReloadFlag("worksages-2.0.1-release"));
      }
      window.location.reload();
    };

    return <>{isLatestBuildDate ? <Component {...props} /> : null}</>;
  };

  return ClearCacheComponent;
};

export default withClearCache;
