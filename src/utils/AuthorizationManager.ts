import strings from "../global/constants/StringConstants";
import { store } from "./store";
import { FormattedResources } from "../models/interfaces";
export interface MainMenusTypes {
  icon: string;
  activeIcon: string;
  text: string;
  key: string;
  link: string;
  pageName: string;
  accessToResource: string[];
  permissions: string[];
  sidebarMapping: SideBarMapping[];
}

export type SideBarMapping = {
  resource: string;
  permissions: string[];
  allPermissionRequired: boolean;
};

const MainMenus=[
  
] as unknown as MainMenusTypes[];
export const GenerateMainMenu = (mainMenus: MainMenusTypes[] = MainMenus) => {
  const resources = store?.getState()?.auth?.resources;
  const generatedMenu: MainMenusTypes[] = [];
  mainMenus?.forEach((menu: MainMenusTypes) => {
    const hasAccess = menu?.sidebarMapping?.some(
      (sideBarAccess: SideBarMapping) => {
        if (
          resources[strings?.APP]?.includes(strings?.adminPermission) ||
          resources[strings?.ACCOUNT]?.includes(strings?.adminPermission)
        ) {
          return true;
        }

        if (!resources?.hasOwnProperty(sideBarAccess?.resource)) {
          return false;
        }

        const permissions = resources[sideBarAccess?.resource];
        const hasAllPermissions = sideBarAccess?.permissions?.every(
          (indPermission: string) => permissions?.includes(indPermission)
        );

        if (sideBarAccess?.allPermissionRequired && hasAllPermissions) {
          return true;
        }

        return sideBarAccess?.permissions?.some((indPermission: string) =>
          permissions?.includes(indPermission)
        );
      }
    );

    if (hasAccess) {
      generatedMenu?.push(menu);
    }
  });

  return generatedMenu;
};

export const doesUserHasAccessToMenuItem = (
  componentName: string,
  userMenu: MainMenusTypes[]
) => {
  const menus = GenerateMainMenu()?.map((menu: MainMenusTypes) => menu?.text);
  const resources = store?.getState()?.auth?.resources;
  return true;
};

export const doesLoggedInUserHasAccess = (
  buttonName: string,
  resourceName: string
) => {
  const resources: FormattedResources =
    store?.getState()?.auth?.resources ?? [];
  if (resources?.hasOwnProperty(resourceName)) {
    if (resources[resourceName]?.indexOf(buttonName) !== -1) {
      return true;
    }
  }
  return false;
};

export const appAdminUserSpecificPermission = () => {
  const resources: FormattedResources =
    store?.getState()?.auth?.resources ?? [];
  if (resources?.hasOwnProperty(strings?.APP?.toLocaleLowerCase())) {
    if (
      resources[strings?.APP?.toLocaleLowerCase()]?.indexOf(
        strings?.adminPermission?.toLocaleLowerCase()
      ) !== -1
    ) {
      return true;
    }
  }
  return false;
};
export const accountAdminUserSpecificPermission = () => {
  const resources: FormattedResources =
    store?.getState()?.auth?.resources ?? [];
  if (resources?.hasOwnProperty(strings?.ACCOUNT?.toLocaleLowerCase())) {
    if (
      resources[strings?.ACCOUNT?.toLocaleLowerCase()]?.indexOf(
        strings?.adminPermission?.toLocaleLowerCase()
      ) !== -1
    ) {
      return true;
    }
  }
  return false;
};
export const appAndAccountAdminCommonUserSpecificPermission = () => {
  const resources: FormattedResources =
    store?.getState()?.auth?.resources ?? [];
  if (
    resources?.hasOwnProperty(strings?.ACCOUNT?.toLocaleLowerCase()) &&
    resources?.hasOwnProperty(strings?.APP?.toLocaleLowerCase())
  ) {
    if (
      resources[strings?.ACCOUNT?.toLocaleLowerCase()]?.indexOf(
        strings?.adminPermission?.toLocaleLowerCase()
      ) !== -1 &&
      resources[strings?.APP?.toLocaleLowerCase()]?.indexOf(
        strings?.adminPermission?.toLocaleLowerCase()
      ) !== -1
    ) {
      return true;
    }
  }
  return false;
};
export const appOrAccountAdminCommonUserSpecificPermission = () => {
  const resources: FormattedResources =
    store?.getState()?.auth?.resources ?? [];
  if (
    resources?.hasOwnProperty(strings?.ACCOUNT?.toLocaleLowerCase()) ||
    resources?.hasOwnProperty(strings?.APP?.toLocaleLowerCase())
  ) {
    if (
      resources[strings?.ACCOUNT?.toLocaleLowerCase()]?.indexOf(
        strings?.adminPermission?.toLocaleLowerCase()
      ) !== -1 ||
      resources[strings?.APP?.toLocaleLowerCase()]?.indexOf(
        strings?.adminPermission?.toLocaleLowerCase()
      ) !== -1
    ) {
      return true;
    }
  }
  return false;
};
export const doesLoggedInUserHasAccessToResource = (
  buttonName: string,
  resourceName: string
) => {
  if (
    [
      doesLoggedInUserHasAccess(buttonName, resourceName),
      appAdminUserSpecificPermission(),
      accountAdminUserSpecificPermission(),
      appAndAccountAdminCommonUserSpecificPermission(),
      appOrAccountAdminCommonUserSpecificPermission(),
    ].includes(true)
  ) {
    return true;
  }
  return false;
};
