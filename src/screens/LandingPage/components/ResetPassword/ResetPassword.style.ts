import {
  boldFont,
  centerItemFlex,
  getRelativeFontSize,
  mediumFont,
  primaryColorBlack,
  primaryColorPurple,
  regularFont,
  theme,
} from "../../../../utils/styles";

const ResetPasswordStyle = {
  logoBox: {
    display: "flex",
    alignItems: "center",
    [`@media screen and (max-width: ${1370}px)`]: {
      '& img' :  {
        width :  "50px",
        height :"auto",
      }
    }
  },
  loginBox: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  },
  welcomeText: {
    ...boldFont,
    display: "flex",
    alignItems: "center",
    color: primaryColorPurple,
    marginTop: theme.spacing(4),
    fontSize: getRelativeFontSize(17),
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(8),
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: getRelativeFontSize(10),
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.938rem",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.875rem",
    },
    [`@media screen and (max-width:${1370}px)`]:{
      fontSize: "1.5rem",
      marginTop: theme.spacing(2),
    },
    
  },
  work360Text: {
    ...boldFont,
    color: primaryColorBlack,
    marginLeft: theme.spacing(1),
    fontSize: getRelativeFontSize(17),
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(8),
      marginLeft: theme.spacing(0.5),
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: getRelativeFontSize(10),
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.938rem",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.875rem",
    },
    [`@media screen and (max-width:${1370}px)`]:{
      fontSize: "1.5rem",
    },
  },
  loginBoxText: {
    ...mediumFont,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: getRelativeFontSize(3),
    },
  },
  signInText: {
    ...boldFont,
    color: primaryColorBlack,
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(7),
    },
    [theme.breakpoints.down("xl")]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.125rem",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.125rem",
    },
    [`@media screen and (max-width:${1370}px)`]:{
      marginTop: theme.spacing(2),
    },
  },
  customInput: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("xl")]: {
      marginTop: theme.spacing(3),
    },
  },
  loginBtn: {
    borderRadius: "10px",
    marginTop: theme.spacing(4),
    minWidth: "100%",
  },
  checkBox: {
    color: primaryColorPurple,
    marginLeft: theme.spacing(-1),
    "&.Mui-checked": {
      color: primaryColorPurple,
    },
  },
  rememberMeText: {
    ...regularFont,
    color: primaryColorBlack,
    fontSize: getRelativeFontSize(),
  },
  forgotText: {
    ...mediumFont,
    cursor: "pointer",
    color: primaryColorBlack,
    fontSize: getRelativeFontSize(),
  },
  footer: {
    ...centerItemFlex,
    width: "27vw",
    position: "fixed",
    bottom: 10,
    color: primaryColorBlack,
    marginBottom: 1,
  },
  footerText: {
    ...mediumFont,
    fontSize: getRelativeFontSize(-1),
    [theme.breakpoints.down("xl")]: {
      fontSize: getRelativeFontSize(-2),
    },
  },
  loader: {
    ...centerItemFlex,
    color: primaryColorPurple,
  },
} as const;

export default ResetPasswordStyle;
