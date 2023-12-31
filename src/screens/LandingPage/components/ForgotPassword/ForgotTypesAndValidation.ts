export const forgotPasswordValidation = (forgotUserData: any) => {
    const errors = forgotUserData;
    let isValid = true;
    let emailValue = forgotUserData.email.value;
    if (!emailValue) {
      errors.email.error = "Please enter email";
      isValid = false;
    }
    return { isValid, errors };
  };
  