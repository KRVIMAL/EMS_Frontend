import React, { useRef } from "react";
import Work360Logo from "../../../../assets/images/Work360Logo.svg";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { theme } from "../../../../utils/styles";
import CustomInput from "../../../../global/components/CustomInput/CustomInput";
import { useState, useEffect } from "react";
import { loginAction } from "../../../../redux/authSlice";
import { login } from "../../landingPageService";
import urls from "../../../../global/constants/UrlConstants";
import {
  convertResourceToObjectFormat,
  isTruthy,
  openErrorNotification,
} from "../../../../helpers/methods";
import notifiers from "../../../../global/constants/NotificationConstants";
import history from "../../../../utils/history";
import { LoginFields } from "../../../../models/interfaces";
import loginStyles from "./Login.styles";
import Visibility from "../../../../assets/icons/Visibility.svg";
import VisibilityOff from "../../../../assets/icons/VisibilityOff.svg";
import strings from "../../../../global/constants/StringConstants";
import CustomButton from "../../../../global/components/CustomButton/CustomButton";
import { tabTitle } from "../../../../utils/tabTitle";
import { useAppDispatch } from "../../../../utils/hooks";
import ReCAPTCHA from "react-google-recaptcha";
import { getCustomError } from "../../../../utils/customError";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const classes = loginStyles;
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const reRef = useRef<ReCAPTCHA>(null);
  const siteKeyReCaptch = strings.siteKey;
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  } as LoginFields);

  const [validation, setValidation] = useState({
    email: "",
    password: "",
  } as LoginFields);
  const navigate = useNavigate();
  const handleOnChangeInputField = (event: React.ChangeEvent<any>) => {
    const value = event.target.value;
    setFormFields({
      ...formFields,
      [event.target.name]: value,
    });
    setValidation({
      ...validation,
      [event.target.name]: "",
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setShowPassword(!showPassword);
    event.preventDefault();
  };

  useEffect(() => {
    const host = window.location.hostname;
    if (host.includes("demo")) {
      setFormFields({
        email: "workforce.demo@softsages.com",
        password: "sswfdemo@1234",
      });
    }
  }, []);

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
      <Stack alignItems={{ xs: "center", lg: "flex-start" }}>
        <Typography variant="h1" sx={classes.signInText}>
          Sign In
        </Typography>
      </Stack>
    );
  };

  const getLoginInput = () => {
    return (
      <>
        <Box sx={classes.customInput}>
          <Box>
            <CustomInput
              required
              placeHolder="Enter Email"
              type="email"
              name="email"
              label="Email"
              onChange={handleOnChangeInputField}
              value={formFields.email}
              onKeyPress={handleKeypress}
              error={isTruthy(validation.email)}
              helperText={validation.email}
            />
          </Box>
          <Box mt={4}>
            <CustomInput
              required
              placeHolder="Enter Password"
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              onChange={handleOnChangeInputField}
              value={formFields.password}
              onKeyPress={handleKeypress}
              error={!isTruthy(formFields.password) && validation.password}
              helperText={validation.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
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
          </Box>
        </Box>
      </>
    );
  };

  const loginValidation = (loginUserData: any) => {
    let errors = loginUserData;
    const email = formFields.email;
    const password = formFields.password;
    const emailRegex = strings.regex;
    let isValid = true;

    if (!email && !password) {
      errors.email = "Email is required";
      errors.password = "Password is required";
      isValid = false;
    } else if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter valid E-mail!";
      isValid = false;
    }

    return { isValid, errors };
  };

  const handleValidation = () => {
    const { isValid, errors } = loginValidation(validation);
    setValidation({ ...errors });
    return isValid;
  };

  const handleLogin = async () => {
    try {
      if (handleValidation()) {
        setIsLoading(true);
        const email = formFields.email;
        const password = formFields.password;
        const token: any = await reRef.current?.executeAsync();
        reRef.current && reRef.current.reset();
        const captchaToken = token;
        const user = await login(email, password, captchaToken);
        const formattedResources = convertResourceToObjectFormat(
          user.resources
        );

        if (isTruthy(formattedResources)) {
          dispatch(
            loginAction({
              authenticated: true,
              accessToken: user.authToken,
              userName: user.name,
              userRole: user.role,
              userAccount: user.account,
              userEmail: user.email,
              resources: formattedResources,
            })
          );
          setIsLoading(false);
        } else {
          openErrorNotification("Something went wrong.");
        }
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      getCustomError(error);
    }
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  const getButton = () => {
    return (
      <Box>
        <CustomButton
          label="Sign In"
          buttonType="primaryBtn"
          onClick={() => handleLogin()}
          disabled={isLoading}
          loading={isLoading}
          customClasses={classes.customButtonStyle}
        />
      </Box>
    );
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
  const getForgotPassword = () => {
    return (
      <Box mt={2}>
        <Stack direction="row" justifyContent="end" alignItems="center">
          <Typography
            variant="h5"
            sx={classes.forgotText}
            onClick={() => navigate(urls.forgotPasswordViewPath)}
          >
            Forgot Password?
          </Typography>
        </Stack>
      </Box>
    );
  };

  const getYear = () => {
    return new Date().getFullYear();
  };

  const getFooter = () => {
    return (
      <Box sx={classes.footer}>
        {isDesktop && (
          <Typography variant="subtitle1" sx={classes.footerText}>
            &copy; {getYear()} Cricbuzz.com
          </Typography>
        )}
      </Box>
    );
  };

  const getLoginPage = () => {
    tabTitle(strings.Work360);
    return (
      <Box>
        <Stack
          direction="column"
          justifyContent="flex-start"
          sx={classes.loginBox}
        >
          {getWork360Logo()}
          {getLabel()}
          {getLoginInput()}
          {getForgotPassword()}
          {getButton()}
          {getFooter()}
        </Stack>
      </Box>
    );
  };
  return (
    <>
      {ReCaptchaComponent(siteKeyReCaptch)}
      {getLoginPage()}
    </>
  );
};
export default Login;
