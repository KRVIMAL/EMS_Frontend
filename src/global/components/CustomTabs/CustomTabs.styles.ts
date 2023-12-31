import {
  boldFont,
  getRelativeFontSize,
  mediumFont,
  primaryActiveTabBgColor,
  primaryColorPurple,
  regularFont,
  theme,
} from "../../../utils/styles";

const customTabsStyles = {
  headerBox: {
    background: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {},
  },
  mainBox: {
    padding: "15px 30px",
  },
  customTabsText: {
    ...boldFont,
  },
  outerTabBox: {
    marginTop: "10px",
    borderBottom: "none",
  },
  [`@media screen and (max-width: ${1390}px)`]: {
    marginTop: "5px",
  },
  tab: {
    "& .MuiButtonBase-root-MuiTab-root": {
      padding: "12px 2px",
    },
  },
  tabBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
    borderRadius: "10px",
    height: "40px",
    width: "100%",
    [`@media screen and (max-width: ${1390}px)`]: {
      height: "30px",
    },
  },
  active: {
    backgroundColor: primaryActiveTabBgColor,
    color: primaryColorPurple,
    textDecoration: "none",
    ...mediumFont
  },
  inActive: {
    backgroundColor: "#F9F9F9",
    color: "#828282",
  },
  tabText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...regularFont,
    margin: theme.spacing(1),
    textTransform: "none",
  },
  counts: {
    ...regularFont,
    opacity: "0.5",
    marginRight: theme.spacing(1),
    fontSize: getRelativeFontSize(2),
    letterSpacing: "0px",
  },

  searchIcon: {
    marginLeft: theme.spacing(1),
  },
  input: {
    border: "1px solid #E7E7E7",
  },
  outerBox: {
    background: primaryColorPurple,
    borderRadius: "10px",
    width: "95px",
  },
  btnBox: {
    color: "white",
    textTransform: "none",
    justifyContent: "space-between",
  },
  addBox: {
    background: "#4F31BC",
    width: "32px",
    height: "32px",
    borderRadius: "10px",
    color: "#FFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default customTabsStyles;
