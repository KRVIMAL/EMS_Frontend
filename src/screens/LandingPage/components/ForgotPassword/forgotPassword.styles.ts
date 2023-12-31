import {
  boldFont,
  centerItemFlex,
  getRelativeFontSize,
  mediumFont,
  primaryColor,
  primaryColorBlack,
  primaryColorPurple,
  theme,
} from "../../../../utils/styles";

const forgotPasswordStyles = {
    mainBox:{
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
        }
  },
  text: {
    ...boldFont,
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.125rem",
    },
  },
  customButtonStyle : {
    marginTop: theme.spacing(2),
        borderRadius  :"10px",
        minWidth: "100%"
  },
  backToLoginStyle: {
    cursor: "pointer",
    width: "100px",
  },
  errorStyle:{
    marginLeft:"14px",
  }
};

export default forgotPasswordStyles;