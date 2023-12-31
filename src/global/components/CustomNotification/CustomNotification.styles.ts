import { getRelativeFontSize } from "../../../utils/styles";

const customNotificationStyles = {
  iconBlock: {
    height: "100%",
    width: "10%",
    display: "flex",
    alignItems: "flex-start",
  },
  notificationTitle: {
    fontSize: getRelativeFontSize(4),
  },
  messageBox: {
    paddingTop: "5px",
    fontSize: getRelativeFontSize(1),
    wordBreak: "break-word",
  },
  messageContainer: {
    width: "80%",
  },
  closeNotification: {
    cursor: "pointer",
  },
} as const;

export default customNotificationStyles;
