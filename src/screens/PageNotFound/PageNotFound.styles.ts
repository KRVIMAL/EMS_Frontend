import { boldFont, getRelativeFontSize, primaryColor } from "../../utils/styles";

const PageNotFoundStyles = {
  mainContainer: {
    backgroundColor: primaryColor,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    margin:"auto",
    height:"100%"
  },
  fontSize: {
    ...boldFont,
    fontSize: getRelativeFontSize(10),
    textAlign:"center"
  },
  homeBtn:{
    whiteSpace:"noWrap" 
  }
} as const;

export default PageNotFoundStyles;
