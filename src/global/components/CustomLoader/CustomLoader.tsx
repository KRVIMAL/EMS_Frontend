import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Polygon1 from "../../../assets/icons/Polygon1.svg";
import Polygon2 from "../../../assets/icons/Polygon2.svg";
import Polygon3 from "../../../assets/icons/Polygon3.svg";
import { Box, Stack, Typography } from "@mui/material";
import { isTruthy } from "../../../helpers/methods";
import CustomLoaderStyles from "./CustomLoader.styles";
import { boldFont, centerItemFlex } from "../../../utils/styles";
import strings from "../../constants/StringConstants";

interface CustomProps {
  loadingText?: string;
  orgText?: string;
  background?: string;
}
const CustomLoader = (props?: CustomProps) => {
  const classes = CustomLoaderStyles;
  return (
    <Backdrop
      sx={{
        color: "black",
        background: props!.background ? props?.background : "rgba(0,0,1,0.8)",
        zIndex: (theme) => theme.zIndex.tooltip,
      }}
      open={true}
    >
      <Box sx={{ ...centerItemFlex }}>
        <Stack sx={classes.outerBox}>
          <Box sx={classes.rotationStyle} display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center">
              <img alt="Polygon1" src={Polygon1} />
            </Box>
            <Box>
              <img alt="Polygon2" src={Polygon2} />
              <img alt="Polygon3" src={Polygon3} />
            </Box>
          </Box>
          <Typography
            sx={{
              ...boldFont,
              fontSize: "1.1rem",
              textAlign: "center",
              color: " #828282",
            }}
          >
            {props?.loadingText ? props.loadingText : strings.LOADING_TEXT}
          </Typography>
          {isTruthy(props?.orgText) && (
            <Typography
              sx={{
                ...boldFont,
                fontSize: "1.1rem",
                textAlign: "center",
                color: " #828282",
              }}
            >
              {props?.orgText}
            </Typography>
          )}
        </Stack>
      </Box>
    </Backdrop>
  );
};

export default CustomLoader;
