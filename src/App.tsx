import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import history from "./utils/history";
import urls from "./global/constants/UrlConstants";
import withClearCache from "./ClearCache";
import { Box, ThemeProvider } from "@mui/material";
import PageNotFound from "./screens/PageNotFound/PageNotFound";
import Notifications from "./utils/notifications";
import LandingPage from "./screens/LandingPage/LandingPage";
// import Layout from "./screens/Shared/Layout/Layout";
import { theme, themes } from "./utils/styles";
import { logOutAction } from "./redux/authSlice";
import { store } from "./utils/store";
import strings from "./global/constants/StringConstants";
import { isTruthy, openErrorNotification } from "./helpers/methods";
import notifiers from "./global/constants/NotificationConstants";
import CustomLoader from "./global/components/CustomLoader/CustomLoader";
import Login from "./screens/LandingPage/components/Login/Login";
import ForgotPassword from "./screens/LandingPage/components/ForgotPassword/ForgotPassword";
import ResetPassword from "./screens/LandingPage/components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Router>
          <Routes>
            <Route path={urls.landingViewPath} element={<LandingPage />} />
            <Route path={urls.loginViewPath} element={<LandingPage />} />
            <Route
              path={urls.forgotPasswordViewPath}
              element={<LandingPage />}
            />
            <Route
              path={urls.changePasswordViewPath}
              element={<LandingPage />}
            />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

// const MainApp:React.FC = () => {
//   const customHistory = createBrowserHistory();
//   const navigate = useNavigate();
//   useEffect(() => {
//     const handleStorageChange = (event:any) => {
//       if (event.key === null) {
//         if (isTruthy(store.getState().auth.userRole)) {
//           store.dispatch(logOutAction());
//           localStorage.clear();
//           sessionStorage.clear();
//           navigate(urls.landingViewPath);
//         }
//       }
//     };
//     window.addEventListener(strings.EVENT_TYPE, handleStorageChange);
//     return () => {
//       window.removeEventListener(strings.EVENT_TYPE, handleStorageChange);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [store.getState().auth.userRole]);

//   // return (
//   //   <>
//   //     {/* <ThemeProvider theme={themes}>
//   //       <Box> */}
//   //         <Router>
//   //           <Routes>
//   //             {/* <Route
//   //               path={urls.landingViewPath}
//   //               element={<LandingPage />}
//   //             /> */}
//   //             <Route
//   //               path={urls.loginViewPath}
//   //               element={<Login />}
//   //             />
//   //             <Route
//   //               path={urls.forgotPasswordViewPath}
//   //               element={<ForgotPassword />}
//   //             />
//   //             {/* <Route
//   //               path={urls.changePasswordViewPath}
//   //               element={<chang />}
//   //             /> */}
//   //             <Route
//   //               path="*"
//   //               element={<PageNotFound />}
//   //             />
//   //           </Routes>
//   //           {/* <Layout/> */}
//   //         </Router>
//   //         <Box
//   //           sx={{
//   //             cursor: "pointer",
//   //             position: "absolute",
//   //             right: "20px",
//   //             bottom: "10px",
//   //             [theme.breakpoints.down("sm")]: {
//   //               bottom: "20px",
//   //             },
//   //           }}
//   //         >
//   //         </Box>
//   //         {/* <Notifications />
//   //       </Box>
//   //     </ThemeProvider> */}
//   //   </>
//   // );
//   return(
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login/>}/>
//         <Route path="/login" element={<ForgotPassword/>}/>
//       </Routes>
//     </Router>
//   )
// };

// const ClearCacheComponent = withClearCache(MainApp);

export default App;
