import {
  boldFont,
  centerItemFlex,
  primaryActiveTabBgColor,
  primaryColorBlack,
  regularFamily,
  regularFont,
  theme,
} from "../../utils/styles";

const landingPageStyles = {
  mainBox: {
    height: "100vh",
  },
  loginImgBox: {
    ...centerItemFlex,
    background: primaryActiveTabBgColor,
    // height:"100vh",
    width: "100%",
  },
  imgStyle: {
    [`@media screen and (max-width: ${1390}px)`]: {
      "& img": {
        width: "600px",
      },
    },
  },
  loginImgText: {
    ...boldFont,
    marginTop: theme.spacing(5),
  },
  subtitleText: {
    ...regularFont,
    marginTop: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("xl")]: {
      fontFamily: regularFamily,
    },
  },
  eyeIcon: {
    color: primaryColorBlack,
    marginRight: theme.spacing(1),
  },
} as const;

export default landingPageStyles;
