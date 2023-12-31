import {
  primaryBorderColor,
  centerItemFlex,
  customButtonStyle,
  primaryColor,
  primaryColorBlack,
  primaryColorPurple,
  regularFont,
} from "../../../utils/styles";

const customButtonStyles = {
  btnStyle: {
    ...regularFont,
    ...customButtonStyle,
    ...centerItemFlex,
    maxWidth: "100px",
    color: primaryColorBlack,
    border: "1px solid",
    borderColor: primaryBorderColor,
    borderRadius: "12px",
    "&": {
      height: "40px",
      boxShadow: "none",
      [`@media screen and (max-width: ${1370}px)`]: {
        height: "35px",
      },
    },
  },
  loading: {
    ...centerItemFlex,
    color: primaryColorPurple,
  },
  primaryBtn: {
    color: primaryColor,
    background: primaryColorPurple,
    borderColor: primaryColorPurple,
    "&:hover": {
      background: primaryColorPurple,
    },
    "&.Mui-disabled":{color:"#828282 !important",backgroundColor:"#6842EF"}
  },
  secondaryBtn: {
    background: primaryColor,
    color: "#828282",
    "&:hover": {
      background: primaryColor,
    },
      },
  addBox: {
    color: "#FFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  hideButton: {
    display: 'none'
  },
} as const;

export default customButtonStyles;
