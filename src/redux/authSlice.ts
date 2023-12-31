import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import strings from "../global/constants/StringConstants";
import { RootState } from "../utils/store";
import { FormattedResources } from "../models/interfaces";
// import { doesLoggedInUserHasAccess } from "../utils/AuthorizationManager";

export interface AuthState {
  authenticated: boolean;
  accessToken: string;
  loading: boolean;
  userName: string;
  userRole: string;
  userType: string;
  userEmail: string;
  userId: string;
  userAccount: string;
  hideAppDrawer: boolean;
  clientId: any;
  resources: FormattedResources;
  hardReloadFlag:string;
}

const initialState: AuthState = {
  authenticated: false,
  accessToken: "",
  loading: false,
  userName: "",
  userRole: "",
  userType: "",
  userEmail: "",
  userId: "",
  userAccount: "",
  hideAppDrawer: false,
  clientId: "",
  resources: {} as FormattedResources,
  hardReloadFlag:"worksages-2.0.1-release",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (
      state,
      action: PayloadAction<{
        authenticated: boolean;
        accessToken: string;
        userName: string;
        userRole: string;
        userEmail: string;
        userAccount: string;
        resources:FormattedResources;
      }>
    ) => {
      state.authenticated = action.payload.authenticated;
      state.accessToken = action.payload.accessToken;
      state.userName = action.payload.userName;
      state.userRole = action.payload.userRole;
      state.userEmail = action.payload.userEmail;
      state.userAccount = action.payload.userAccount;
      state.hideAppDrawer = false;
      state.resources = action.payload.resources;
    },
    addLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logOutAction: (state, action: {}) => {     
      localStorage.clear();
      sessionStorage.clear();
      if ("caches" in window) {
        // Clear cache storage
        caches.keys().then(function (cacheNames) {
          cacheNames.forEach(function (cacheName) {
            caches.delete(cacheName);
          });
        });
      }
      if ("cookies" in window) {
        // Clear cookies
        let cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
          document.cookie =
            name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
      }
      state.authenticated = false;
      state.loading = false;
      state.accessToken = "";
      state.userName = "";
      state.userEmail = "";
      state.hideAppDrawer = false;
      state.userType = "";
      state.userRole = "";
      state.userId = "";
      state.userAccount = "";
      state.clientId = "";
      state.resources = {};
    },
    addUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    addUserType: (state, action: PayloadAction<string>) => {
      state.userType = action.payload;
    },
    makeAppDrawerHide: (state, action: PayloadAction<boolean>) => {
      state.hideAppDrawer = action.payload;
    },
    addClientId: (state, action: PayloadAction<string>) => {
      state.clientId = action.payload;
    },
    addHardReloadFlag: (state, action: PayloadAction<string>) => {
      state.hardReloadFlag = action.payload;
    },
  },
});

export const {
  loginAction,
  logOutAction,
  addLoading,
  addUserId,
  makeAppDrawerHide,
  addClientId,
  addHardReloadFlag,
} = authSlice.actions;
export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectEmail = (state: RootState) => state.auth.userEmail;
export const selectUserName = (state: RootState) => state.auth.userName;
export const selectRole = (state: RootState) => state.auth.userRole;
export const selectResources = (state: RootState) => state.auth.resources;
export const isUserRole = (state: RootState) =>
  state.auth.userRole === strings.CONSULTANT ||
  state.auth.userRole === strings.EMPLOYEE ||
  state.auth.userRole === strings.OPERATIONS;
export const selectType = (state: RootState) => state.auth.userType;
export const selectId = (state: RootState) => state.auth.userId;
export const selectHideAppDrawer = (state: RootState) =>
  state.auth.hideAppDrawer;

export const selectClientId = (state: RootState) => state.auth.clientId;
export const selectHardReloadFlag = (state: RootState) => state.auth.hardReloadFlag;

// export const isVendorRole = () => doesLoggedInUserHasAccess(
//   strings.selfPermission,
//   strings.PERMISSION_VENDOR
// ) && doesLoggedInUserHasAccess(
//   strings.selfPermission,
//   strings.PERMISSION_BILL
// )

export default authSlice.reducer;
