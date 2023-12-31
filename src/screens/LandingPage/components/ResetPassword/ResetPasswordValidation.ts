import strings from "../../../../global/constants/StringConstants";

const emailRegex = strings.regexPassword;
export const resetPasswordValidation = (formFields: any) => {
  let errors = formFields;
  let isValid = true;
  const NewPassword = formFields.NewPassword.value;
  const ConfirmPassword = formFields.ConfirmPassword.value;
  if (!NewPassword && !ConfirmPassword) {
    errors.NewPassword.error = "New Password is required!";
    errors.ConfirmPassword.error = "Confirm Password is required!";
  }
  if (!NewPassword) {
    errors.NewPassword.error = "New Password is required!";
    isValid = false;
  }
  if (!ConfirmPassword) {
    errors.ConfirmPassword.error = "Confirm Password is required!";
    isValid = false;
  }

  return { isValid, errors };
};
