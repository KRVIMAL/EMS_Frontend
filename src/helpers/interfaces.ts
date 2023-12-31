export interface userResourceType {
  name: string;
  permissions: Array<any>;
}

export interface resourceType {
  name: string;
  permissions: Array<any>;
}
export interface AddUserFields {
  account: string;
  firstName?: string;
  lastName?: string;
  email: any;
  name: string;
  contactNo: string;
  roleIds: any[];
}

export interface managerProps {
  managerId: string;
  managerName: string;
  managerEmail: string;
}
export interface convertManagerDataPropsTypes {
  id: string;
  name: string;
  primaryEmail: {
    value: string;
  };
}