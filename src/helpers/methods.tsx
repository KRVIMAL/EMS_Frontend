import { Box } from "@mui/material";
import strings from "../global/constants/StringConstants";
import { globalEmitter } from "../utils/emitter";
import history from "../utils/history";
import { store } from "../utils/store";
import { logOutAction } from "../redux/authSlice";
import { Resources } from "../models/interfaces";
import urls from "../global/constants/UrlConstants";
import Tickets from "../assets/icons/Tickets.svg";
import ActiveTickets from "../assets/icons/ActiveTickets.svg";
import notifiers from "../global/constants/NotificationConstants";

const methodsContext = this;

export const isTruthy = (value: any, shouldCheckByType: boolean = true) => {
  const validatedByType = shouldCheckByType
    ? customValidatorByType(value)
    : true;

  if (value !== null && value !== undefined && validatedByType) {
    return true;
  }
  return false;
};

const customValidatorByType = (value: any) => {
  if (value !== undefined && value !== null) {
    const type = typeof value;
    switch (type) {
      case "string":
        return value.trim() !== "";
      case "object":
        if (Array.isArray(value)) {
          return value.length > 0;
        } else {
          return Object.keys(value).length > 0;
        }
      default:
        return true;
    }
  }
};

export const compareStrings = (string1: string, string2: string) => {
  if (!(isTruthy(string1) || isTruthy(string2))) {
    return true;
  } else {
    if (string1 && string2) {
      if (string1.toLowerCase() === string2.toLowerCase()) {
        return true;
      }
    }
  }
  return false;
};

export const getGreetings = () => {
  const date = new Date();
  let hours = date.getHours();
  let status =
    hours < 12
      ? "Good Morning"
      : hours <= 18 && hours >= 12
      ? "Good Afternoon"
      : "Good Evening";

  return status;
};

export const openInfoNotification = (message: any, title: string = "Info") => {
  globalEmitter.emit(strings.notification, {
    type: strings.info,
    message: message,
    title: title,
  });
};

export const openSuccessNotification = (
  message: any,
  title: string = "Success"
) => {
  globalEmitter.emit(strings.notification, {
    type: strings.success,
    message: message,
    title: title,
  });
};

export const openWarningNotification = (
  message: any,
  title: string = "Warning"
) => {
  globalEmitter.emit(strings.notification, {
    type: strings.warning,
    message: message,
    title: title,
  });
};

export const openErrorNotification = (
  message: string,
  title: string = "Error"
) => {
  globalEmitter.emit(strings.notification, {
    type: strings.error,
    message: message,
    title: title,
  });
};

export const openErrorNotificationWithGenericError = (
  errorMessage: string,
  title: string = "Error"
) => {
  const messageToDisplay = isTruthy(errorMessage) ? errorMessage : notifiers.GENERIC_ERROR;
  openErrorNotification(messageToDisplay, title);
};

export function debounce(func: Function, wait: number) {
  let timeout: any;
  return function (...args: any) {
    const context = methodsContext;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export function debounceEventHandler(func: Function, wait: number) {
  const debounced = debounce(func, wait);
  return function (event: any) {
    event.persist();
    return debounced(event);
  };
}

export const getFormattedNumbers = (value: string) => {
  const matches = value.match(/\d+/g);
  let number = "";
  if (matches !== null) {
    matches.forEach((match) => {
      number += match;
    });
  }
  if (number.length === 10) {
    value = number.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return { number: number, maskedNumber: value };
};

export const getFileExtension = (fileName: string) => {
  const ext = /^.+\.([^.]+)$/.exec(fileName);
  return ext === null ? "" : ext[1];
};

export const validatePhoneNumber = (mobile: string) => {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(mobile);
};

export const tableRowRightAlign = (value: any) => {
  return (
    <Box component="span" sx={{ textAlign: "right", display: "block" }}>
      {value}
    </Box>
  );
};

const isPathExitsInResources = (resources: Resources[]) => {
  return resources.map((items: Resources) => {
    if (!items.path) {
      return { ...items, path: items.name.toLowerCase() };
    } else {
      return items;
    }
  });
};

export const convertResourceToObjectFormat = (resources: Resources[]) => {
  const rolePermissions: { [key: string]: string[] } = {};
  const updatedResources = isPathExitsInResources(resources);
  updatedResources.forEach((resource: Resources) => {
    const { path, permissions } = resource;
    if (!rolePermissions[path]) {
      rolePermissions[path] = [];
    }
    rolePermissions[path].push(...permissions);
  });

  return rolePermissions;
};

export const doesResourcesExistInLocalStorage = (resources: Resources[]) => {
  if (!isTruthy(resources)) {
    store.dispatch(logOutAction());
    history.push(urls.loginViewPath);
    return false;
  }
  return true;
};

