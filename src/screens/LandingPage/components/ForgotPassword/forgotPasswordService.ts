import urls from "../../../../global/constants/UrlConstants";
import { ForgotPasswordDetailsTypes } from "../../../../models/interfaces";
import { getCallParams, makeCall } from "../../../../utils/service";

export async function resetPwd(user: ForgotPasswordDetailsTypes) {
  try {
    const callParams = await getCallParams("POST", user);
    const response: any = await makeCall(urls.RESET_PASSWORD, callParams);
    return response;
  } catch (error: any) {
    throw error;
  }
}
