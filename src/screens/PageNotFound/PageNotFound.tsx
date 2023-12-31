import { Box, Typography } from "@mui/material";
import PageNotFoundStyles from "./PageNotFound.styles";
import PageNotFoundImage from "../../assets/images/PageNotFoundImage.svg";
import strings from "../../global/constants/StringConstants";
import urls from "../../global/constants/UrlConstants";
import { useAppSelector } from "../../utils/hooks";
import { selectAuthenticated, selectResources } from "../../redux/authSlice";
import history from "../../utils/history";
import {
  accountAdminUserSpecificPermission,
  appAdminUserSpecificPermission,
  appAndAccountAdminCommonUserSpecificPermission,
} from "../../utils/AuthorizationManager";
import CustomButton from "../../global/components/CustomButton/CustomButton";
const PageNotFound = () => {
  const classes = PageNotFoundStyles;
  const isAuthenticated = useAppSelector(selectAuthenticated);

  const getBody = () => {
    const redirectPage = () => {
      history.push(
        selectResources.hasOwnProperty(strings.PERMISSION_ENTITY) ||
          appAdminUserSpecificPermission() ||
          accountAdminUserSpecificPermission() ||
          appAndAccountAdminCommonUserSpecificPermission()
          ? urls.dashboardViewPath
          : urls.personalDetailsViewPath
      );
    };

    const handleBackToHome = () => {
      if (isAuthenticated) {
        redirectPage();
        return null;
      } else {
        return urls.landingViewPath;
      }
    };

    return (
      <Box sx={classes.mainContainer}>
        <Box>
          <img src={PageNotFoundImage} alt="Page not found image" />
        </Box>
        <Box>
          <Typography sx={classes.fontSize}>
            Oops!! It looks like something went wrong.
          </Typography>
          <Typography>
            Page Not Found. This doesn’t exist or was removed! We suggest you
            back to home.
          </Typography>
        </Box>
        <Box mt={2}>
          <CustomButton
            label={strings.BACK_TO_HOME}
            buttonType="primaryBtn"
            customClasses={classes.homeBtn}
            onClick={handleBackToHome}
          />
        </Box>
      </Box>
    );
  };

  return <>{getBody()}</>;
};

export default PageNotFound;
