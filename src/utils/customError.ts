import notifiers from "../global/constants/NotificationConstants";
import urls from "../global/constants/UrlConstants";
import { openErrorNotification } from "../helpers/methods";
import { logOutAction } from "../redux/authSlice";
import history from "./history";
import { store } from "./store";

export function getCustomError(error: any) {
  switch (true) {
    case typeof error !== "string":
      if (error?.status === 403) {
        store.dispatch(logOutAction());
        return history.push(urls.landingViewPath);
      }
      if (error.status === 500) {
        return openErrorNotification(notifiers.OOPS);
      }
      if (error.code === 406) {
        return openErrorNotification(error.message);
      }
      break;
    default:
      return openErrorNotification(notifiers.SORRY);
  }
}
