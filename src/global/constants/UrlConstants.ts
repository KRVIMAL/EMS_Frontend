import { StringConstants } from "./StringConstants";

class UrlConstants extends StringConstants {
  url_prod = "https://services.softsages.com";
  // url_dev = "https://api-uat.softsages.com";
  // core_url_dev = "https://api-uat.softsages.com";
  url_dev = "http://localhost:6010";
  core_url_dev = "http://localhost:6040";

  url = this.PROD ? this.url_prod : this.url_dev;
  coreUrl = this.PROD ? this.url_prod : this.core_url_dev;

  // Base Folders
  CORE = "core";
  ERP = "erp";
  auth = "auth";

  // View Paths
  landingViewPath = "/";
  loginViewPath = "/login";
  forgotPasswordViewPath = "/forgot-password";
  changePasswordViewPath = "/changepwd";
  dashboardViewPath = "/dashboard";
  personalDetailsViewPath="/personaldetails";

  employeesViewPath = "/employees";
 

  addEmployeeViewPath = `${this.employeesViewPath}/add`;
  editEmployeeViewPath = `${this.employeesViewPath}/edit`;
  viewEmployeeViewPath = `${this.employeesViewPath}/view`;
  
  settingsViewPath = "/settings";
  addUsersViewPath = `${this.settingsViewPath}/users/add`;
  editUsersViewPath = `${this.settingsViewPath}/users/edit`;

  // Auth
  LOGIN = `${this.coreUrl}/${this.CORE}/public/user/login`;
  RESET_PASSWORD = `${this.coreUrl}/${this.CORE}/public/user/pwd/reset`;
  UPDATE_PASSWORD = `${this.coreUrl}/${this.CORE}/secure/user/pwd/update`;
  VERIFY_TEMP_PASSWORD = `${this.coreUrl}/${this.CORE}/public/user/pwd/verify`;

  // Endpoint
  REFRESHTOKEN = `${this.url}/auth/refreshToken`;



  //Account User Details
  EMPLOYEE_DETAILS = `${this.url}/${this.ERP}/employee/id`;


  // Employee
  EMPLOYEE = `${this.url}/${this.ERP}/employee/fetch/metrics/status`;
  EMPLOYEE_ACTIVE = `${this.url}/${this.ERP}/employee/fetch/active`;
  EMPLOYEE_ACTIVE_SEARCH = `${this.url}/${this.ERP}/employee/fetch/search/status/Active`;
  EMPLOYEE_INACTIVE = `${this.url}/${this.ERP}/employee/fetch/terminated`;
  EMPLOYEE_INACTIVE_SEARCH = `${this.url}/${this.ERP}/employee/fetch/search/status/Inactive`;
  ADD_EMPLOYEE = `${this.url}/${this.ERP}/employee/add`;
  UPDATE_EMPLOYEE = `${this.url}/${this.ERP}/employee/update`;
  // delete
  DELETE_EMPLOYEE = `${this.url}/${this.ERP}/employee/delete`;

  //Employee-subContexts
  EMPLOYEE_TYPE = `${this.url}/${this.ERP}/employee/fetch/types`;
  
  //VIEW PROFILE
  VIEW_BILLING_DETAILS = `${this.url}/${this.ERP}/contract/fetch/resource`;
  VIEW_BILLING_HISTORY = `${this.url}/${this.ERP}/contract/fetch/audit/resource`;
  VIEW_EMPLOYEE = `${this.url}/${this.ERP}/employee/fetch/self/id`;
  VIEW_CLIENT = `${this.url}/${this.ERP}/client/fetch/self/id`;
  HR_SERVICE = `${this.url}/${this.ERP}`;
  

  //USERS
  GET_USERS = `${this.coreUrl}/${this.CORE}/secure/users/limit/10/page`;  
  GET_USERS_COUNT = `${this.coreUrl}/${this.CORE}/secure/users/count`;
  GET_USER_SEARCH = `${this.coreUrl}/${this.CORE}/secure/user/search/limit/10`;
  GET_USER_SEARCH_COUNT = `${this.coreUrl}/${this.CORE}/secure/user/search/count`;
  ADD_USER = `${this.coreUrl}/${this.CORE}/secure/user/add`;
  UPDATE_USER = `${this.coreUrl}/${this.CORE}/secure/user/update`;


  //ROLES MANAGEMENT
  GET_RESOURCES_BY_DOMAIN = `${this.coreUrl}/${this.CORE}/secure/user/resources`;
  GET_ROLES_BY_DOMAIN = `${this.coreUrl}/${this.CORE}/roles`;
  GET_ROLES_BY_DOMAIN_COUNT = `${this.coreUrl}/${this.CORE}/roles/count`;
  GET_ROLES_SEARCH = `${this.coreUrl}/${this.CORE}/secure/user/roles/search/limit`;
  GET_ROLES_SEARCH_COUNT = `${this.coreUrl}/${this.CORE}/roles/count/search`;
  ADD_ROLE = `${this.coreUrl}/${this.CORE}/secure/user/role/add`;
  UPDATE_ROLE = `${this.coreUrl}/${this.CORE}/role/update`;

}
let urls = new UrlConstants();
export default urls;
