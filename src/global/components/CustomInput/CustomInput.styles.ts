import {
  blueAsteriskColor,
  boldFont,
  getRelativeFontSize,
  primaryBorderColor,
  primaryColor,
  primaryColorBlack,
  regularFont,
  sansSerifFamily,
} from "../../../utils/styles";

const customInputStyles = {
  textField: {
    border: "none",
    width: "100%",
    "& .MuiInputBase-input": {
      position: "relative",
      fontSize: "15px",
      fontFamily: sansSerifFamily,
      background: primaryColor,
      padding: "12px 12px",
      border: "none",
      "&::placeholder": {
        ...regularFont,
        fontSize: getRelativeFontSize(2),
      },
      [`@media screen and (max-width: ${1370}px)`]: {
        padding: "10px 12px",
      }
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      "&.Mui-focused fieldset": {
        borderColor: "#24CBC7",
      },
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      borderColor: primaryBorderColor,
    }
  },
  nameField: {
    ...boldFont,
    fontSize: getRelativeFontSize(),
    color: primaryColorBlack,
    marginBottom: "3px",
    wordSpacing: "2px",
  },
  commentAsterisk: {
    color: blueAsteriskColor,
    ...regularFont,
  },
} as const;

export default customInputStyles;