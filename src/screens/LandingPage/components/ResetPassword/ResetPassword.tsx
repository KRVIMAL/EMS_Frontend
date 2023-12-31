import React, { useEffect, useRef } from "react";
import Work360Logo from "../../../../assets/images/Work360Logo.svg";
import {
  Box,
  FormHelperText,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../../../utils/styles";
import CustomInput from "../../../../global/components/CustomInput/CustomInput";
import { useState } from "react";
import { updatePwd, verifyTempPwd } from "../../landingPageService";
import urls from "../../../../global/constants/UrlConstants";
import {
  isTruthy,
  openErrorNotification,
  openSuccessNotification,
} from "../../../../helpers/methods";
import notifiers from "../../../../global/constants/NotificationConstants";
import history from "../../../../utils/history";
import { RestPasswordFields } from "../../../../models/interfaces";
import Visibility from "../../../../assets/icons/Visibility.svg";
import VisibilityOff from "../../../../assets/icons/VisibilityOff.svg";
import ResetPasswordStyle from "./ResetPassword.style";
import { useLocation } from "react-router-dom";
import { resetPasswordValidation } from "./ResetPasswordValidation";
import strings from "../../../../global/constants/StringConstants";
import CustomButton from "../../../../global/components/CustomButton/CustomButton";
import ReCAPTCHA from "react-google-recaptcha";
import { getCustomError } from "../../../../utils/customError";

const ResetPassword = () => {
  const classes = ResetPasswordStyle;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [user, setUser] = useState<any>();
  const context = new URLSearchParams(useLocation().search).get("context");
  const reRef = useRef<ReCAPTCHA>(null);
  const siteKeyReCaptch = strings.siteKey;

  const [formFields, setFormFields] = useState<any>({
    NewPassword: {
      value: "",
      error: "",
    },
    ConfirmPassword: {
      value: "",
      error: "",
    },
  } as unknown as RestPasswordFields);
  const emailRegex = strings.regexPassword;
  const handleOnChangeInputField = (event: React.ChangeEvent<any>) => {
    setFormFields({
      ...formFields,
      [event.target.name]: {
        ...formFields[event.target.name],
        value: event.target.value,
      },
    });
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(showConfirmPassword);
  };

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowConfirmPassword(!showConfirmPassword);
    event.preventDefault();
  };
  const handleClickShowNewPassword = () => {
    setShowNewPassword(showNewPassword);
  };
  const handleMouseDownNewPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowNewPassword(!showNewPassword);
    event.preventDefault();
  };
  useEffect(() => {
    verifyPwd(context);
  }, []);

  const verifyPwd = async (authToken: any) => {
    const userData: any = {
      authToken: authToken,
    };

    try {
      const response: any = await verifyTempPwd(userData);
      setUser(response);
    } catch (error: any) {
      setIsLoading(false);
      getCustomError(error);
    }
  };

  const getWork360Logo = () => {
    return (
      <>
        <Box sx={classes.logoBox}>
          <img
            src={Work360Logo}
            alt="Work360Logo"
            style={{ height: "65px", paddingBottom: "10px" }}
          />
        </Box>
        <Box>
          <Typography variant="h1" sx={classes.welcomeText}>
            Welcome
            <Typography variant="h1" sx={classes.work360Text}>
              to Work360!
            </Typography>
          </Typography>
        </Box>
        <Typography variant="h4" sx={classes.loginBoxText}>
        Ecosystem to manage global work360 data
        </Typography>
      </>
    );
  };

  const getLabel = () => {
    return (
      <Stack alignItems={{ xs: "center", md: "flex-start", lg: "flex-start" }}>
        <Typography variant="h1" sx={classes.signInText}>
          Reset Password
        </Typography>
      </Stack>
    );
  };

  const checkValidation = () => {
    const { isValid, errors }: { isValid: boolean; errors: any } =
      resetPasswordValidation(formFields);
    setFormFields({ ...errors });
    return isValid;
  };

  const updatePassword = async () => {
    try {
      user.pwd = formFields.NewPassword.value;
      const authToken = user.authToken;
      const token: any = await reRef.current?.executeAsync();
      reRef.current && reRef.current.reset();
      const captchaToken = token;
      user.captchaToken = captchaToken;
      await updatePwd(user, authToken);
      openSuccessNotification("Your password has been changed successfully!");
      history.push(urls.loginViewPath);
    } catch (error: any) {
      getCustomError(error);
    }
  };

  const handleResetPassword = async () => {
    if (formFields.ConfirmPassword.value !== formFields.NewPassword.value) {
      openErrorNotification("New Password and Confirm Password is not same");
    } else {
      try {
        if (
          checkValidation() &&
          emailRegex.test(formFields.ConfirmPassword.value) &&
          emailRegex.test(formFields.NewPassword.value) &&
          isTruthy(formFields.NewPassword.value.length > 7) &&
          isTruthy(formFields.ConfirmPassword.value.length > 7) &&
          formFields.NewPassword.value === formFields.ConfirmPassword.value
        ) {
          setIsLoading(true);
          updatePassword();
        }
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        getCustomError(error);
      }
    }
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleResetPassword();
    }
  };
  const getButton = () => {
    return (
      <Box>
        <CustomButton
          label={strings.submit}
          buttonType="primaryBtn"
          onClick={() => handleResetPassword()}
          disabled={isLoading}
          loading={isLoading}
          customClasses={classes.loginBtn}
        />
      </Box>
    );
  };
  const getLoginInput = () => {
    return (
      <>
        <Box sx={classes.customInput}>
          <Box>
            <CustomInput
              required
              placeHolder="Enter Your New Password"
              type={showNewPassword ? "text" : "password"}
              name="NewPassword"
              label="New Password"
              onChange={handleOnChangeInputField}
              value={formFields.NewPassword.value}
              onKeyPress={handleKeypress}
              error={
                !isTruthy(formFields.NewPassword.value) &&
                formFields.NewPassword.error
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownNewPassword}
                      edge="end"
                    >
                      {showNewPassword ? (
                        <img
                          src={Visibility}
                          style={{ margin: "8px" }}
                          alt="Visibility"
                        />
                      ) : (
                        <img
                          src={VisibilityOff}
                          style={{ margin: "8px" }}
                          alt="VisibilityOff"
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {!emailRegex.test(formFields.NewPassword.value) &&
            formFields.NewPassword.value.length > 0 ? (
              <FormHelperText error>
                Password should includes Upper and Special Character [e.g.
                Abc@1234 ] and length should be greater then 7
              </FormHelperText>
            ) : !isTruthy(formFields.NewPassword.value) &&
              formFields.NewPassword.error ? (
              <FormHelperText error>
                {formFields.NewPassword.error}
              </FormHelperText>
            ) : (
              ""
            )}
          </Box>
          <Box mt={4}>
            <CustomInput
              required
              placeHolder="Confirm Your New Password"
              type={showConfirmPassword ? "text" : "password"}
              name="ConfirmPassword"
              label="Confirm Password"
              onChange={handleOnChangeInputField}
              value={formFields.ConfirmPassword.value}
              onKeyPress={handleKeypress}
              error={
                !isTruthy(formFields.ConfirmPassword.value) &&
                formFields.ConfirmPassword.error
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <img
                          src={Visibility}
                          style={{ margin: "8px" }}
                          alt="Visibility"
                        />
                      ) : (
                        <img
                          src={VisibilityOff}
                          style={{ margin: "8px" }}
                          alt="VisibilityOff"
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {!emailRegex.test(formFields.ConfirmPassword.value) &&
            formFields.ConfirmPassword.value.length > 0 ? (
              <FormHelperText error>
                {" "}
                Password should includes Upper and Special Character [e.g.
                Abc@1234 ] and length should be greater then 7
              </FormHelperText>
            ) : !isTruthy(formFields.ConfirmPassword.value) &&
              formFields.ConfirmPassword.error ? (
              <FormHelperText error>
                {formFields.ConfirmPassword.error}
              </FormHelperText>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </>
    );
  };
  const getYear = () => {
    return new Date().getFullYear();
  };

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
  const getFooter = () => {
    return (
      <Box sx={classes.footer}>
        {isDesktop && (
          <Typography sx={classes.footerText}>
            &copy; {getYear()} Cricbuzz.com
          </Typography>
        )}
      </Box>
    );
  };

  const getLoginPage = () => {
    return (
      <Box>
        {ReCaptchaComponent(siteKeyReCaptch)}
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={classes.loginBox}
        >
          {getWork360Logo()}
          {getLabel()}
          {getLoginInput()}
          {getButton()}
          {getFooter()}
        </Stack>
      </Box>
    );
  };
  return getLoginPage();
};
export default ResetPassword;
