export interface ForgotPasswordFields {
  [key: string]: {
    value: string;
    error: string;
  };
}

export interface ForgotPasswordDetailsTypes {
  email: string;
  captchaToken:string
}

export interface LoginFields {
  email: string;
  password: string;
}

export interface RestPasswordFields {
  NewPassword: string;
  ConfirmPassword: string;
}

export interface FormattedResources {
  [key: string]: string[];
}

export interface Resources {
  name: string;
  path:string;
  permissions: string[];
}