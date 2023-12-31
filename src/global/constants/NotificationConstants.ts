import { StringConstants } from "./StringConstants";

class NotificationConstants extends StringConstants {
  GENERIC_ERROR = "Something went wrong! Please try again";
  OOPS = "Oops! Something went wrong. Please refresh the page and try again.";
  SORRY =
    "Sorry, we are experiencing technical difficulties. Please raise this help desk ticket.";
  DOCUMENT = "Please upload document.";
  UnAuthorized= "You are not authorized to access Work360. Please contact the administrator or reset your password."

}

let notifiers = new NotificationConstants();
export default notifiers;
