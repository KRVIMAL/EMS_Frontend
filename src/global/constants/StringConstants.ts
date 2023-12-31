export class StringConstants {
  PROD = false;

  //contentTypes
  applicationJSON = { "Content-Type": "application/json" };
  fileJSON = { "Content-Type": "text/csv" };
  multipartForm = {};

  workforce = "workforce";
  WorkSages = "WorkSages";
  Work360 = "Work360";
  Unregistered = "Unregistered";
  SOFTSAGES = "Softsages";
  WORK360_UAT_URL = "https://staff-uat.work360.app/";
  LOCALHOST_URL = "http://localhost:3000/";

  notification = "notification";
  error = "error";
  success = "success";
  warning = "warning";
  info = "info";
  autoHideDuration = 600 * 1000; //in milliseconds
  URL_KEY = "AatkODe3kQmUqUXXVxwuq0TIyZ-z1GWPMJ1HhyxRins=";

  //date
  am = "AM";
  pm = "PM";

  LOGIN = "login";
  REGISTER = "register";
  FORGOTPASSWORD = "forgot-password";
  CHANGE_PASSWORD = "changepwd";

  // Time-Out
  SEARCH_TIME_OUT = 1000;

  // tabs name
  active = "Active";
  terminated = "Terminated";
  inactive = "Inactive";
  blacklist = "Blacklist";
  onboarding = "Onboarding";
  projectOver = "ProjectOver";
  hired = "Hired";
  generated = "Generated";
  sent = "Sent";
  paid = "Paid";
  due = "Due";
  overdue = "Overdue";
  partially_paid = "PartiallyPaid";
  saved = "saved";
  myLeaves = "My Leaves";
  allLeaves = "All Leaves";
  teamLeaves = "Team Leaves";
  leaveRequest = "Leave Request";
  assignedToMe = "Assigned To Me";
  raisedByMe = "Raised By Me";
  completedTickets = "Completed Tickets";
  openTickets = "Open Tickets";
  currentManpower = "Current Manpower";
  leaveHistory = "Leave History";
  leaveSummary = "Leave Summary";
  pending_submission = "Pending Submission";
  pending_approval = "Pending Approval";
  approved_timesheets = "Approved";
  onBoard = "Onboard";
  vendorBill = "Bills";
  pendingInvoice = "Pending Invoice";
  summary = "Summary";
  unpaid = "Unpaid";
  unpaidInvoices = "Unpaid";
  paymentStatus = "Payment Status";
  incentive = "Incentive";
  onBoarding = "Onboarding";
  activeConsultant = "Active Consultants";
  joined = "Joined";
  exit = "Exit";
  general = "General";
  timesheets = "Timesheets";
  documents = "Documents";
  vendorDetails = "VendorDetails";
  task = "Task";
  leaves = "Leaves";
  appraisal = "Appraisal";
  invoices = "Invoices";
  sendInactiveEmailsFrom = "sendInactiveEmailsFrom";
  currentMonthLeaveSummary = "Current Month Leave Summary";
  ADD_EDIT_USER_DOCUMENT = "addUserDocument";
  VIEW_USER_DOCUMENT = "userDocuments";
  ADD_SIGNER = " Add Signer";
  BACK = "Back";
  DONE = "Done";
  SIGN = "Sign";
  users = "Users";
  roleManagement = "Roles";
  rolesTable = "Roles Table";
  createRole = "Create Role";
  editRole = "Edit Role";
  //recruitment
  Approved = "Approved";
  Rejected = "Rejected";
  Pending = "Pending";

  //Teams
  teamConsultant = "TeamConsultant";
  teamVendor = "TeamVendor";
  teamClient = "TeamClient";

  // Resource name
  RESOURCE_APP = "app";
  RESOURCE_ACCOUNT = "account";
  RESOURCE_TIMESHEET = "timesheet";
  RESOURCE_DOCUMENT = "document";
  RESOURCE_ENTITY = "entity";
  RESOURCE_EMPLOYEE = "employee";
  RESOURCE_VENDOR = "vendor";
  RESOURCE_INVOICE = "invoice";
  RESOURCE_BILL = "bill";

  // permission
  PERMISSION_FETCH = "fetch";
  PERMISSION_UPLOAD = "upload";
  PERMISSION_SELF = "self";
  PERMISSION_DELETE = "delete";

  //roles

  ACCOUNT_ADMIN = "Account Admin";
  ADMIN = "Admin";
  ACCOUNTS = "Accounts";
  OPERATIONS = "Operations";
  HR = "HR";
  PROCESS_ADMIN = "Process Admin";
  CONSULTANT = "Consultant";
  EMPLOYEE = "Employee";
  ATS_ADMIN = "Bench Admin";
  ATS_USER = "Bench Recruiter";
  SECURITY_SALES = "Security Sales";
  SOFTWARE_SALES = "Software Sales";

  //PAGES

  DASHBOARD = "Dashboard";
  PERSONALDETAILS = "Personal Details";
  APPRAISALCYCLE = "Appraisal Cycle";
  VIEWAPPRAISALCYCLE = "View Appraisal Cycle";
  MYAPPRAISAL = "My Appraisal";
  EMPLOYEEAPPRAISAL = "Employee Appraisal";
  PERSONALTIMESHEET = "PersonalTimesheet";
  CONSULTANT_TIMESHEET = "ConsultantTimesheet";
  VIEW_VENDOR_BILL = "ViewVendorBill";
  CONSULTANTS = "Consultants";
  EDITCONSULTANTS = "Edit Consultants";
  CANDIDATES = "Candidates";
  JOBPOSTINGS = "Jobpostings";
  EMPLOYEES = "Employees";
  EDITEMPLOYEE = "Edit Employee ";
  CLIENTS = "Clients";
  VENDORS = "Vendors";
  EDIT_VENDORS = "Edit Vendors";
  TIMESHEETS = "Timesheet";
  INVOICES = "Invoices";
  INVOICE = "Invoice";
  INCENTIVE = "Incentive";
  SOFTWARE_DEV_INVOICES = "Software Development Invoice";
  BILLS = "Bills";
  LEAVES = "Leaves";
  TICKETS = "Tickets";
  REPORTS = "Reports";
  MANPOWER = "ManPower";
  ONBOARD = "Onboard";
  CONSULTANTS_REPORT = "Consultants Report";
  INVOICE_REPORT = "Invoice Reports";
  BUSINESS = "Business";
  E_SIGNATURE = "E-Signature";
  INK_FREE="Ink Free";
  SIGN_DOCUMENT = "Sign Document";
  SIGN_REQUEST_LIST = "Sign Request List";
  Documents = "Documents";
  VENDOR_CONSULTANTS = "MyConsultants";
  VENDOR_BILLS = "MyBills";
  VENDOR_PERSONAL_DETAILS = "VendorPersonalDetails";
  VENDOR_PERSONAL_DOCUMENT = "VendorPersonalDocument";
  ATS_CONSULTANT = "Consultant";
  ATS_SUBMISSION = "Submissions";
  ATS_ONBOARDING = "AtsOnboarding";
  ONBOARDING = "Onboarding";
  ADD_CONSULTANT = "Add Consultant";
  EDIT_CONSULTANT = "Edit Consultant";
  ADD_EMPLOYEE = "Add Employee";
  EDIT_EMPLOYEE = "Edit Employee";
  ADD_CLIENT = "Add Client";
  EDIT_CLIENT = "Edit Client";
  ADD_VENDOR = "Add Vendor";
  EDIT_VENDOR = "Edit Vendor";
  VIEW_TIMESHEET = "View Timesheet";
  ADD_DOCUMENT = "Add Document";
  EDIT_DOCUMENT = "Edit Document";
  ADD_ATS_SUBMISSION = "Add Submission";
  EDIT_ATS_SUBMISSION = "Edit Submission";
  ADD_ATS_ONBOARDING = "Add Ats Onboarding";
  EDIT_ATS_ONBOARDING = "Edit Ats Onboarding";
  VIEW = "View";
  REQUEST_SIGN = "RequestSign";
  RECRUITMENT = "Recruitment";
  EDIT_Dev_ONBOARDING = "Edit Invoice.";
  ADD_Dev_ONBOARDING = "ADD Invoice.";
  BILL = "Bill";
  SOFTWARE_INVOICES = "Software Invoices";
  EDIT_SOFTWARE_INVOICE = "Edit Software Invoice";
  ADD_SOFTWARE_INVOICE = "Add Software Invoice";
  //Buttons
  add = "Add";
  export = "Export";
  delete = "Delete";
  send = "Send";
  attach_timesheet = "Attach TimeSheet";
  re_generate = "Re-Generate";
  send_to_employees = "Send To Employees";
  approve = "Approve";
  mark_paid = "Mark Paid";
  upload_prohance_report = "Upload Prohance Report";
  update_leaves = "Update Leaves";
  leave_summary = "Leave Summary";
  re_sent = "Re-Send";
  edit = "Edit";
  save = "Save";
  moveToConsultant = "Move to Bench Marketing";
  view = "View";
  download = "Download";
  next = "Next";
  previous = "Previous";
  addLineItems = "Add Item";
  reSubmit = "ReSubmit";
  no = "No";
  unapprove = "Unapprove";
  //File types
  CSV = "csv";

  //Leave_Status
  submitted = "Submitted";
  approved = "Approved";
  rejected = "Rejected";
  reject = "Reject";
  submit = "Submit";
  cancel = "Cancel";
  approve_leave = "APPROVE LEAVE";
  reject_leave = "REJECT LEAVE";
  //Leave_RadioButtons
  halfDayLeave = "halfDayLeave";
  oneDayLeave = "oneDayLeave";
  moreThanOneDayLeave = "moreThanOneDayLeave";
  //LeaveTypes
  first_half = "First Half";
  second_half = "Second Half";
  full_day = "Full Day";

  //report/manPower
  level = "Level";
  confirmed = "Confirmed";
  probation_end_date = "Probation End Date";
  on_probation = "On Probation";
  department_name = "Department Name";

  //consultant workstatus
  GC = "GC";

  //consultant
  CONSULTANT_TYPE = "Consultant";
  CONSULTANT_STATUS = "Hired";
  C2C_CONSULTANT = "Contractor (C2C)";
  PAYMENT_TERMS = "Payment Terms";
  INVOICE_FREQUENCY = "Invoice Frequency";
  emergencyName = "Emergency Contact Name";
  emergencyContact = "Emergency Contact Number";
  emergencyRelation = "Emergency Contact Relation";
  INVOICEFREQENCY = "Invoice Frequency";
  INACTIVE = "Inactive";
  ACTIVE = "Active";
  W2REFERRAL = "(W2) Referral Employee";
  OTHERGENDER = "Prefer not to disclose";
  CLIENT = "Client";
  VENDOR = "Vendor";
  FULL = "full";
  LIST = "list";
  //additional information /consultant metadata input fields types
  TEXTBOX = "TEXTBOX";
  CONTACTNUMBER = "CONTACTNUMBER";
  NUMBER = "NUMBER";
  RADIOBUTTON = "RADIOBUTTON";
  DATEPICKER = "DATEPICKER";
  DROPDOWN = "DROPDOWN";
  DOCUMENT_SET = "documentSet";
  DOCUMENT_SETUP = "documentSetup";
  RANGE_PICKER = "RANGEPICKER";
  INVOICE_SCHEDULE = "Invoice Schedule";
  VALUE = "value";

  //Consultant timeSheet tabs
  UNSUBMITTED = "unsubmitted";
  CREATED = "Created";
  ALL = "ALL";
  CREATE = "Create";
  DUE = "Due";
  OVERDUE = "Overdue";
  SUBMITTED = "Submitted";
  APPROVED = "Approved";
  SAVED = "Saved";

  //file types
  jpeg = ".jpeg";
  JPEG = ".JPEG";
  JPG = "JPG";
  jpg = ".jpg";
  png = ".png";
  PNG = ".PNG";
  gif = ".gif";
  bmp = ".bmp";
  tiff = ".tiff";
  pdf = ".pdf";
  PDF = ".PDF";
  doc = ".doc";
  docx = ".docx";
  txt = ".txt";
  xls = ".xls";
  xlsx = ".xlsx";
  FileUrlPrefix = `https://view.officeapps.live.com/op/embed.aspx?src=`;
  Invalid_TimeSheet = `Invalid Timesheet`;
  Invalid_date = "Invalid date";
  //ticket
  reAssign = "REASSIGN";
  title = "Title";
  Open = "Open";
  Claimed = "Claimed";
  Complete = "Complete";
  PROCESS_OPERATIONS = "Operations Process";

  //cards
  consultantLink = "/consultants";
  employeeLink = "/employees";
  vendorLink = "/vendors";
  clientLink = "/clients";
  benchLink = "/bench/consultant";

  Timesheet_InitialHours = "00:00";
  //consultant document
  DOCUMENTS = "Documents";
  CANDIDATE_1099 = "1099_Candidate";

  //Invoice Collapse types
  itemInformation = "Item Information";
  QUANTITY = "QUANTITY";
  RATE = "RATE";
  AMOUNT = "AMOUNT";

  //pagination count for  table pagination
  PAGINATION_COUNT = 10;
  DATE_FORMAT = "MMM DD YYYY";
  YEAR_FORMAT = "YYYY";
  Month = "month";
  Year_Constant = "1999";
  Date_Format = "MM-DD-YYYY";

  //invoice frequency types
  SCHEDULE = "Schedule";
  WEEKLY = "Weekly";
  BIWEEKLY = "BiWeekly";
  SEMIMONTHYLY = "SemiMonthly";
  SEMIWEEKLY = "SemiWeekly";
  MONTHLY = "Monthly";

  //Full time w2 consultant
  IMMIGRATION = "Immigration";

  //Email validation Regex
  regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,100}$/;

  //send email in inactive mode of consultant
  SEND_EMAILS = "sendEmails";

  //client type
  DIRECT_END_CLIENT = "Direct (End) Client";
  END_CLIENT = "End Client";

  //Employee
  DEPARTMENT_NAME = "Department Name";
  SOFTWARE_DEVELOPMENT = "Software Development";
  startDate = "startDate";
  endDate = "endDate";
  fromDate = "fromDate";
  toDate = "toDate";

  TIER_1_VENDOR = "Tier 1 Vendor";
  BENCH = "Bench";
  PERSON = "Person";

  //countries
  UNITED_STATE = "United States";
  INDIA = "India";
  CANADA = "Canada";
  PAGENOTFOUND = "pageNotFound";
  BACK_TO_HOME = "Back To Home";
  STATE = "state";
  CITY = "city";

  // Consultant Billing Details Input Fields
  PROJECT_HOURLY_RATE = "projectHourlyRate";
  EMPLOYEE_HOURLY_RATE = "employeeHourlyRate";
  VENDOR_DISCOUNT_AMT = "vendorDiscountAmt";
  VENDOR_DISCOUNT_RATE = "vendorDiscountRate";
  MARGIN_AMT = "marginAmt";
  DISCOUNT_AMT = "discountAmt";
  DISCOUNT_RATE = "discountRate";
  ContractExpiryDate = "Contract Expiry Date";

  LOADING_TEXT = "Please Wait!!";
  //authorization errors
  AUTHORIZATION_ERROR = "Unauthorized";
  // user access control

  APP = "app";
  adminPermission = "admin";
  ACCOUNT = "account";
  fetchPermission = "fetch";
  addPermission = "add";
  onBoardPermission = "onboard";
  updatePermission = "update";
  updateStatusPermission = "updateStatus";
  uploadPermission = "upload";
  deletePermission = "delete";
  PERMISSION_METRICS = "metrics";
  exportPermission = "export";
  selfPermission = "self";
  viewPermission = "view";
  employeeContractPermission = "contract";
  listPermission = "list";
  //timesheet user permissions

  USERS_MANAGEMENT = "Users Management";
  ROLES_MANAGEMENT = "Roles Management";
  savePermission = "save";
  submitPermission = "submit";
  approvePermission = "approve";
  updatepermission = "resubmit";
  rejectPermission = "reject";
  unapprovePermission = "unapprove";
  ignorePermission = "ignore";
  submitOnboarding = "hire";
  activatePermission = "activate";

  //invoice permissions
  sendPermission = "send";
  markPaidPermission = "markPaid";
  attachTimesheetPermission = "attachTimesheet";

  //bills permissions
  generateBillPermission = "generate";

  //dashboard permission control
  PERMISSION_TIMESHEET = "timesheet";
  PERMISSION_CONTRACT = "contract";
  PERMISSION_CONSULTANT = "consultant";
  PERMISSION_WORKFLOW = "workflow";
  PERMISSION_DOCUMENT = "document";
  PERMISSION_CLIENT = "client";
  PERMISSION_BILL = "bill";
  PERMISSION_VENDOR = "vendor";
  PERMISSION_INVOICE = "invoice";
  PERMISSION_SOFTWARE_INVOICE = "softwareInvoice";
  PERMISSION_SECURITY_INVOICE = "securityInvoice";
  PERMISSION_SUPPORT = "support";
  PERMISSION_ENTITY = "entity";
  PERMISSION_EMPLOYEE = "employee";
  PERMISSION_APPRAISAL = "appraisal";
  PERMISSION_SUPPORT_TICKET = "support";
  PERMISSION_TICKET = "ticket";
  PERMISSION_BENCH = "bench";
  BENCH_CONSULTENT = "benchConsultant";
  BENCH_SUBMISSION = "benchSubmission";
  PERMISSION_BENCH_ONBOARDING = "onboard";
  MY_TEMPLATES = "My_Templates";

  //Business reports
  BUSINESS_PERMISSION = "business";

  //consultant permission
  PERMISSION_ONBOARDING = "onboard";

  //token not found error message
  TOKEN_INVALID_ERROR = "Forbidden";
  EVENT_TYPE = "storage";

  //eSignature
  signature = "Signature";
  text = "Text";
  email = "Email";
  name = "Name";
  initials = "Initials";
  dateSigned = "Date Signed";
  siteKey = "6LcfPTQiAAAAAEiV_UD6vAZCy2RkJ1heocnrPFSq";

  //ticketPriorities
  low = "Low";
  medium = "Medium";
  high = "High";
  MYREQUESTS = "My Requests";
  CREATE_REQUEST = "Create Requests";
  signed = "Signed";

  CED = "Contract Expiry Date";
  CSD = "Contract Signed Date";
  DashBoardEmployeeData = [
    {
      name: "Sent",
      count: 0,
    },
    {
      name: "Paid",
      count: 0,
    },
    {
      name: "Overdue",
      count: 0,
    },
    {
      name: "Generated",
      count: 0,
    },
    {
      name: "PartiallyPaid",
      count: 0,
    },
    {
      name: "InReview",
      count: 0,
    },
  ];
}
let strings = new StringConstants();
export default strings;
