import { Box } from "@mui/material";
import customIconStyles from "./CustomIcon.styles";

interface CustomProps {
  icon: any;
  text?: string | JSX.Element;
  size?: string;
  color?: string;
  margin?: string;
  onClick?: any;

}

const CustomIcon = (props: CustomProps) => {
  const classes = customIconStyles;

  const margin = props.margin ? { margin: props.margin } : {};
  const size = props.size ? { fontSize: props.size } : {};
  const color = props.color ? { color: props.color } : {};
  const onClick = props.onClick ? { onClick: props.onClick } : {};


  const customStyles = {
    customStyledBox: {
      ...margin,
      ...color,
      ...size,
    },
  } as const;

  return (
    <Box
      sx={[classes.centerAlignedBox, customStyles.customStyledBox]}
      {...onClick}
    >
      <Box sx={classes.centerAlignedBox}>{props.icon}</Box>
      {props.text ? <Box display="inline-block">{props.text}</Box> : null}
    </Box>
  );
};

export default CustomIcon;
