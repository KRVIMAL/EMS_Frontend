import { Box, Button, SxProps, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import customButtonStyles from "./CustomButton.styles";
import { primaryColorBlack } from "../../../utils/styles";
import { doesLoggedInUserHasAccess } from "../../../utils/AuthorizationManager";

interface CustomProps {
  label: string;
  onClick: Function;
  loading?: boolean;
  customClasses?: any;
  buttonType?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  disabled?: boolean;
  moduleName?: string;
}

const CustomButton = (props: CustomProps) => {
  const getCustomCss = () => {
    switch (props.buttonType) {
      case "primaryBtn":
        return classes.primaryBtn;
      case "secondaryBtn":
        return classes.secondaryBtn;
      default:
        return {};
    }
  };

  const classes = customButtonStyles;
  const buttonType = getCustomCss();
  const appliedClass = {
    ...classes.btnStyle,
    ...buttonType,
    ...(props.customClasses ?? {}),
  };
  const processing = props.loading ? props.loading : false;
  return (
    <Button
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={
        props.moduleName
          ? doesLoggedInUserHasAccess(
              props.label.toLocaleLowerCase(),
              props?.moduleName.toLocaleLowerCase() ?? ""
            )
            ? [appliedClass]
            : classes.hideButton
          : [appliedClass]
      }
      onClick={(event) => props.onClick(event)}
      disabled={props.loading ?? props.disabled}
    >
      {processing ? (
        <Box sx={classes.loading}>
          <CircularProgress size={20} sx={{ color: primaryColorBlack }} />
        </Box>
      ) : (
        <Typography sx={{ lineHeight: "initial" }} variant="button">
          {props.label}
        </Typography>
      )}
    </Button>
  );
};

export default CustomButton;
