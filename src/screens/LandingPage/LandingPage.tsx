import landingPageStyles from "./LandingPage.styles";
import loginImg from "../../assets/images/LoginImg.svg";
import { Grid, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../utils/styles";
import { useAppSelector } from "../../utils/hooks";
import {
  logOutAction,
  selectAuthenticated,
  selectResources,
} from "../../redux/authSlice";
import urls from "../../global/constants/UrlConstants";
import history from "../../utils/history";
import strings from "../../global/constants/StringConstants";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import {
  GenerateMainMenu,
  MainMenusTypes,
  accountAdminUserSpecificPermission,
  appAdminUserSpecificPermission,
  appAndAccountAdminCommonUserSpecificPermission,
} from "../../utils/AuthorizationManager";
import { openErrorNotification } from "../../helpers/methods";
import { store } from "../../utils/store";
import notifiers from "../../global/constants/NotificationConstants";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

interface CustomProps {
  location?: Location;
}

const LandingPage = (props: CustomProps) => {
  const classes = landingPageStyles;
  const isAuthenticated = useAppSelector(selectAuthenticated);
  const resources = useAppSelector(selectResources);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1].toLowerCase();
  console.log({currentPath});
  const staticImageComponent = () => {
    return (
      <Stack direction="column" alignItems="center">
        <Box sx={classes.imgStyle}>
          <img src={loginImg} alt="loginImg" />
        </Box>
        <Typography variant="h1" sx={classes.loginImgText}>
        Work360 Management
        </Typography>
        <Typography variant="h4" sx={classes.subtitleText}>
        Integrated management solutions for talent acquisition, client relations, <br />
        and vendor partnership
        </Typography>
      </Stack>
    );
  };

  const getComponentBasedOnURL = () => {
    const location = currentPath;
    console.log({location});
    switch (location) {
      case strings.LOGIN: {
        return <Login />;
      }
      case strings.FORGOTPASSWORD: {
        return <ForgotPassword />;
      }

      case strings.CHANGE_PASSWORD: {
        return <ResetPassword />;
      }
      default: {
        return <Login />;
      }
    }
  };

  const getLandingPage = () => {
    return (
      <Grid container sx={classes.mainBox}>
        {isDesktop && (
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            sx={classes.loginImgBox}
          >
            {staticImageComponent()}
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          {getComponentBasedOnURL()}
        </Grid>
      </Grid>
    );
  };
  if (isAuthenticated) {
    const menus: MainMenusTypes[] = GenerateMainMenu();
    if (menus?.length > 0) {
      history.push(menus[0].key);
    } else {
      store.dispatch(logOutAction());
      openErrorNotification(notifiers.GENERIC_ERROR);
      history.push(urls.landingViewPath);
    }
    return null;
  } else {
    return getLandingPage();
  }
};

export default LandingPage;
