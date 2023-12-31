import { Typography, Box, FormHelperText } from "@mui/material";
import { useRef, useState } from "react";
import CustomInput from "../../../../global/components/CustomInput/CustomInput";
import notifiers from "../../../../global/constants/NotificationConstants";
import urls from "../../../../global/constants/UrlConstants";
import {
  isTruthy,
  openErrorNotification,
  openSuccessNotification,
} from "../../../../helpers/methods";
import {
  ForgotPasswordDetailsTypes,
  ForgotPasswordFields,
} from "../../../../models/interfaces";
import forgotPasswordStyles from "./forgotPassword.styles";
import { resetPwd } from "./forgotPasswordService";
import strings from "../../../../global/constants/StringConstants";
import { forgotPasswordValidation } from "./ForgotTypesAndValidation";
import CustomButton from "../../../../global/components/CustomButton/CustomButton";
import ReCAPTCHA from "react-google-recaptcha";
import history from "../../../../utils/history";
import { getCustomError } from "../../../../utils/customError";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  console.log("inside forgot password");
  const classes = forgotPasswordStyles;
  const emailRegex = strings.regex;
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState<any>({
    email: {
      value: "",
      error: "",
    },
  } as ForgotPasswordFields);
  const reRef = useRef<ReCAPTCHA>(null);
  const siteKeyReCaptch = strings.siteKey;
  const navigate = useNavigate();
  const ReCaptchaComponent = (siteKeyReCaptchaCode: string) => {
    const currentURL = window.location.href;
    const isProdEnvironment = (url: string) => {
      if (url.includes(strings.WORK360_UAT_URL) || url.includes(strings.LOCALHOST_URL)) {
        return false;
      } else {
        return true;
      }
    };
    const isProd = isProdEnvironment(currentURL);
    return (
      <>
        {isProd && (
          <ReCAPTCHA
            sitekey={siteKeyReCaptchaCode}
            size="invisible"
            ref={reRef}
          />
        )}
      </>
    );
  };

  const handleOnChangeInputField = (event: React.ChangeEvent<any>) => {
    setFormFields({
      ...formFields,
      [event.target.name]: {
        ...formFields[event.target.name],
        value: event.target.value,
      },
    });
  };

  const checkValidation = () => {
    const { isValid, errors }: { isValid: boolean; errors: any } =
      forgotPasswordValidation(formFields);
    setFormFields({ ...errors });
    return isValid;
  };

  const handleResetPassword = async () => {
    if (
      checkValidation() &&
      emailRegex.test(formFields.email.value) &&
      isTruthy(formFields.email.value)
    ) {
      try {
        setIsLoading(true);
        const token: any = await reRef.current?.executeAsync();
        reRef.current && reRef.current.reset();
        const captchaToken = token;
        const user: ForgotPasswordDetailsTypes = {
          email: formFields.email.value,
          captchaToken: captchaToken,
        };
        const response = await resetPwd(user);
        openSuccessNotification(
          isTruthy(response.value)
            ? response.value
            : "We have sent you an email with your password reset link."
        );
        history.push(urls.landingViewPath);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        getCustomError(error);
      }
    }
  };

  const getLabel = () => {
    return (
      <Box>
        <Typography variant="h1" sx={classes.text}>
          Reset Password
        </Typography>
      </Box>
    );
  };

  const getInputField = () => {
    return (
      <Box mt={3}>
        <CustomInput
          required
          placeHolder="Enter Email"
          type="email"
          name="email"
          label="Email"
          onChange={handleOnChangeInputField}
          value={formFields.email.value}
          error={!isTruthy(formFields.email.value) && formFields.email.error}
        />
        {!emailRegex.test(formFields.email.value) &&
        formFields.email.value.length > 0 ? (
          <FormHelperText error sx={classes.errorStyle}>The input is not valid E-mail!</FormHelperText>
        ) : !isTruthy(formFields.email.value) && formFields.email.error ? (
          <FormHelperText error sx={classes.errorStyle}>{formFields.email.error}</FormHelperText>
        ) : (
          ""
        )}
      </Box>
    );
  };

  const handleBackButton = () => {
    navigate(urls.loginViewPath);
  };

  const getButton = () => {
    return (
      <Box>
        <CustomButton
          label="Submit"
          onClick={() => handleResetPassword()}
          disabled={isLoading}
          loading={isLoading}
          buttonType="primaryBtn"
          customClasses={classes.customButtonStyle}
        />
        <Box display="flex" justifyContent={"center"}>
          <Typography
            sx={classes.backToLoginStyle}
            variant="body1"
            onClick={handleBackButton}
            mt={1}
          >
            Back To Login
          </Typography>
        </Box>
      </Box>
    );
  };

  const getForgotPasswordPage = () => {
    return (
      <>
        {ReCaptchaComponent(siteKeyReCaptch)}
        <Box sx={classes.mainBox}>
          {getLabel()}
          {getInputField()}
          {getButton()}
        </Box>
      </>
    );
  };
  return getForgotPasswordPage();
};

export default ForgotPassword;
