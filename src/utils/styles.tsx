import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import Radio, { RadioProps } from "@mui/material/Radio";
import { Theme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { CSSProperties } from "react";

interface BootstrapInputProps {
  theme: Theme;
}

const primaryColor = "#FFFFFF";
const primaryBackgroundColor = "#F0F0F0";
const borderColor = "rgba(0, 0, 0, 0.12)";
const borderStyle = "1px solid " + borderColor;
const infoTextColor = "#888888";
const defaultFontSize = 14;
const defaultBoxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
const drawerWidth = 300;
const primaryColorBlue = "#24CBC7";
const primaryColorPurple = "#6842EF";
const primaryColorYellow = "#FFD600";
const primaryColorBlack = "#202730";
const primaryActiveTabBgColor = "#F0ECFF";
const primaryInactiveTabBgColor = "#F9F9F9";
const primaryColorOrange = "#D64430";
const primaryColorGreen = "#39906D";
// const PrimaryBorderColor = "#ced4da";
const primaryBorderColor = "#E7E7E7";

const borderRadius = "30px";

const blueAsteriskColor = "#24CBC7";
// for responsive
const boldFamily = "MyriadPro_Bold";
const regularFamily = "MyriadPro_Regular";
const proLightFamily = "TT_Norms_Pro_Light";
const mediumFamily = "MyriadPro_Medium";
const digitalMonoFamily = "Digital-7 Mono";

const sansSerifFamily = "Roboto, Helvetica, Arial, sans-serif !important";

const mainContainer: CSSProperties = {
  margin: "30px",
};

const lightFont = {
  fontFamily: "MyriadPro_Light",
  fontWeight: 900,
  fontStyle: "normal",
};

const boldFont = {
  fontFamily: "MyriadPro_Bold",
  fontWeight: 700,
};

const mediumFont = {
  fontFamily: "MyriadPro_Medium",
  fontWeight: 500,
};

const regularFont = {
  fontFamily: "MyriadPro_Regular",
  fontWeight: 400,
};

const digitalFont = {
  fontFamily: "Digital-7 Mono",
  fontWeight: 400,
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "MyriadPro_Light",
      "MyriadPro_Bold",
      "MyriadPro_Medium",
      "MyriadPro_Regular",
      "sans-serif",
      "Digital-7 Mono",
    ].join(","),
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [raleway],
  //     },
  //   },
  // },
});

const getRelativeFontSize = (value: number = 0) => {
  let size = defaultFontSize + value;
  return size + "px";
};

const customButtonStyle = {
  borderRadius: borderRadius,
  border: "none",
  fontSize: getRelativeFontSize(),
  textAlign: "center",
  backgroundColor: primaryColor,
  padding: "10px 15px",
  boxShadow: "none",
  color: "white",
  cursor: "pointer",
  textTransform: "none",
};

const customTextFieldStyle = {
  borderRadius: borderRadius,
  position: "relative",
  border: "none",
  fontSize: getRelativeFontSize(2),
  backgroundColor: primaryBackgroundColor,
  padding: "10px 15px",
  boxShadow: "none",
  width: "100%",
};
export const breakpoints: any = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    lg2: 1326,
    xl: 1536,
  },
};
const customTypography = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "MyriadPro_Light",
      "MyriadPro_Bold",
      "MyriadPro_Medium",
      "MyriadPro_Regular",
      "sans-serif",
      "Digital-7 Mono",
    ].join(","),
  },
  // for heading 24.8px to 20.8px
  h1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1.30rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1.30rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1.45rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.50rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.625rem",
      fontFamily: boldFamily,
    },
  },
  // for 22px
  h2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "1.188rem",
      fontFamily: boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "1.188rem",
      fontFamily: boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1.1.25rem",
      fontFamily: boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1.313rem",
      fontFamily: boldFamily,
      lineHeight: "1.5",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.375rem",
      fontFamily: boldFamily,
      lineHeight: "1.5",
    },
  },
  // for table header 17.008px
  h3: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.938rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.938rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "1rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "1rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1.063rem",
      fontFamily: boldFamily,
    },
  },
  // for table row 16px
  h4: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.91rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.92rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.94rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.94rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1rem",
      fontFamily: boldFamily,
    },
  },
  h5: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.75rem",
      fontFamily: mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.75rem",
      fontFamily: mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.781rem",
      fontFamily: mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.813rem",
      fontFamily: mediumFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.875rem",
      fontFamily: mediumFamily,
    },
  },
  // for 12px to 9px
  h6: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.563rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.563rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.625rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.75rem",
      fontFamily: boldFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.75rem",
      fontFamily: boldFamily,
    },
  },
  // for normal text 14px
  body1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.844rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.875rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.906rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.938rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "1rem",
      fontFamily: regularFamily,
    },
  },
  // stepper  14px
  body2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.813rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.844rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.875rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.906rem",
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.938rem",
      fontFamily: regularFamily,
    },
  },
  // for 13px
  subtitle1: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.75rem",
      lineHeight: 1.2,
      fontFamily: regularFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.75rem",
      fontFamily: regularFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.813rem",
      fontFamily: regularFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.813rem",
      fontFamily: regularFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.813rem",
      lineHeight: 1.2,
      fontFamily: regularFamily,
    },
  },
  subtitle2: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.80rem",
      lineHeight: 1.2,
      fontFamily: proLightFamily,
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.82rem",
      fontFamily: proLightFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.86rem",
      fontFamily: proLightFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.88rem",
      fontFamily: proLightFamily,
      lineHeight: 1.2,
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.92rem",
      lineHeight: 1.2,
      fontFamily: proLightFamily,
    },
  },
  // for button 16px
  button: {
    [`@media screen and (min-width: ${breakpoints.values.xs}px)`]: {
      fontSize: "0.875rem",
      fontFamily: regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: "0.875rem",
      fontFamily: regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: "0.813rem",
      fontFamily: regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
      fontSize: "0.875rem",
      fontFamily: regularFamily,
      textTransform: "capitalize",
    },
    [`@media screen and (min-width: ${breakpoints.values.xl}px)`]: {
      fontSize: "0.938rem",
      fontFamily: regularFamily,
      textTransform: "capitalize",
    },
  },
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "TT_Norms_Pro_Regular",
    "TT_Norms_Pro_Thin",
    "TT_Norms_Pro_Bold",
    "TT_Norms_Pro_Light",
    "TT_Norms_Pro_Medium",
    "sans-serif",
  ].join(","),
};
const themes = createTheme({
  // breakpoints,
  typography: {
    ...customTypography,
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [raleway],
    //     },
    //   },
    // },
  },
});
const headingText = {
  display: "inline-block",
  fontSize: getRelativeFontSize(8),
};

const centerItemFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const centerItemAbsolute = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

// const CustomInput = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "label + &": {
//         marginTop: theme.spacing(3),
//       },
//       backgroundColor: theme.palette.common.white,
//       border: "1px solid #ced4da",
//       borderRadius: "10px",
//       padding: "0 5px",
//     },
//     input: {
//       position: "relative",
//       fontSize: getRelativeFontSize(),
//       width: "100%",
//       padding: "10px 12px",
//     },
//   })
// )(InputBase);

// const TealSwitch = withStyles({
//   switchBase: {
//     color: "grey",
//     "&$checked": {
//       color: primaryColor,
//       "& + $track": {
//         backgroundColor: primaryColor,
//       },
//     },
//     "&$checked + $track": {
//       color: primaryColor,
//     },
//   },
//   track: { backgroundColor: "grey" },
//   checked: {},
// })(Switch);

// const CustomCheckbox = withStyles({
//   root: {
//     color: primaryColor,
//     "&$checked": {
//       color: primaryColor,
//     },
//   },
//   checked: {},
// })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

// const TealRadio = withStyles({
//   root: {
//     color: primaryColor,
//     "&$checked": {
//       color: primaryColor,
//     },
//   },
//   checked: {},
// })((props: RadioProps) => <Radio color="default" {...props} />);

// export const BootstrapInput = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "label + &": {
//         marginTop: theme.spacing(3),
//       },
//       backgroundColor: theme.palette.common.white,
//       border: "1px solid",
//       borderColor: primaryBorderColor,
//       borderRadius: "10px",
//       padding: "0 5px",
//       width: "100%",
//       transition: theme.transitions.create([
//         "border-color",
//         "background-color",
//         "box-shadow",
//       ]),
//     },
//     input: {
//       position: "relative",
//       fontSize: getRelativeFontSize(),
//       width: "100%",
//       padding: "10px 12px",
//       [`@media screen and (max-width: ${1370}px)`]: {
//         padding: "10px 12px",
//       },
//     },
//   })
// )(InputBase);
const CustomInput = styled(InputBase)(({ theme }) => ({
  label: {
    marginTop: theme.spacing(3),
  },
  backgroundColor: theme.palette.common.white,
  border: "1px solid #ced4da",
  borderRadius: "10px",
  padding: "0 5px",
  input: {
    position: "relative",
    fontSize: getRelativeFontSize(),
    width: "100%",
    padding: "10px 12px",
  },
}));

// TealSwitch
const TealSwitch = styled(Switch)(({ theme }) => ({
  switchBase: {
    color: "grey",
    "&$checked": {
      color: primaryColor,
      "& + $track": {
        backgroundColor: primaryColor,
      },
    },
    "&$checked + $track": {
      color: primaryColor,
    },
  },
  track: { backgroundColor: "grey" },
  checked: {},
}));

// CustomCheckbox
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
}));

// TealRadio
const TealRadio = styled(Radio)(({ theme }) => ({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
}));

// BootstrapInput
export const BootstrapInput = styled(InputBase)<BootstrapInputProps>(
  ({ theme }) => ({
    label: {
      marginTop: theme.spacing(3),
    },
    backgroundColor: theme.palette.common.white,
    border: "1px solid",
    borderColor: primaryBorderColor,
    borderRadius: "10px",
    padding: "0 5px",
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
      [`@media screen and (max-width: ${1370}px)`]: {
        padding: "10px 12px",
      },
    },
  })
);

export {
  borderRadius,
  primaryColor,
  primaryBackgroundColor,
  borderColor,
  borderStyle,
  infoTextColor,
  primaryColorBlue,
  primaryColorPurple,
  primaryColorYellow,
  primaryColorBlack,
  primaryActiveTabBgColor,
  primaryInactiveTabBgColor,
  primaryColorGreen,
  primaryColorOrange,
  defaultBoxShadow,
  customButtonStyle,
  themes,
  customTextFieldStyle,
  headingText,
  centerItemFlex,
  centerItemAbsolute,
  CustomInput,
  TealSwitch,
  CustomCheckbox,
  TealRadio,
  regularFont,
  boldFont,
  mediumFont,
  lightFont,
  getRelativeFontSize,
  theme,
  drawerWidth,
  mainContainer,
  blueAsteriskColor,
  digitalFont,
  primaryBorderColor,
  sansSerifFamily,
  digitalMonoFamily,
  mediumFamily,
  proLightFamily,
  regularFamily,
  boldFamily,
};
