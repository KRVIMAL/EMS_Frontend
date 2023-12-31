import {
  Box,
  InputLabel,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import customInputStyles from "./CustomInput.styles";

interface inputRangeTypes {
  minLength: number;
  maxLength: number;
}
interface CustomProps {
  label?: string;
  placeHolder?: string;
  value?: string | number;
  onChange?: any;
  type?: string;
  name?: string;
  select?: boolean;
  onKeyPress?: any;
  InputProps?: any;
  error?: any;
  required?: boolean;
  InputLabelProps?: any;
  id?: string;
  sx?: SxProps;
  disabled?: boolean;
  propsToInputElement?: inputRangeTypes;
  onClick?: Function;
  helperText?: string;
  onBlur?: Function;
  customMargin?: string;
}

const CustomInput = (props: CustomProps) => {
  const classes = customInputStyles;
  const styles = props.sx ?? classes.textField;
  const { error = null } = props;

  return (
    <Box>
      <Box mb={props?.customMargin ? props?.customMargin : "5px"}>
        <Stack direction="row" spacing={1}>
          {props.required && (
            <Typography sx={classes.commentAsterisk}>*</Typography>
          )}
          <InputLabel sx={classes.nameField}>
            <Typography variant="h5">{props.label}</Typography>
          </InputLabel>
        </Stack>
      </Box>
      <TextField
        sx={styles}
        variant="outlined"
        id={props.id}
        placeholder={props.placeHolder}
        type={props.type}
        name={props.name}
        select={props.select}
        value={props.value}
        InputProps={props.InputProps}
        inputProps={props.propsToInputElement}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        required={props.required}
        onClick={props?.onClick}
        onBlur={props?.onBlur}
        {...(error && { error: true, helperText: error })}
        disabled={props.disabled}
        helperText={props.helperText}
      />
    </Box>
  );
};
export default CustomInput;
