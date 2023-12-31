import urls from "../../global/constants/UrlConstants";
import {
  makeCall,
  getCallParams,
  getNoAuthCallParams,
  getAccessToken,
} from "../../utils/service";

export async function login(email: string, password: string,captcha:any) {
  const body = {
    email: email,
    pwd: password,
    captchaToken:captcha
  };
  try {
    const callParams = await getCallParams("POST", body);
    const response: any = await makeCall(urls.LOGIN, callParams);
    return response;
  } catch (error: any) {
    throw error;
  }
}

export async function updatePwd(user: any, token:string) {
  try {

    const callParams = await getAccessToken("POST", user, token);
    const response: any = await makeCall(urls.UPDATE_PASSWORD, callParams);
    return response;
  } catch (error: any) {
    throw error;
  }
}

export async function verifyTempPwd(user: any) {
  try {
    const callParams = getNoAuthCallParams("POST", user);
    const response: any = await makeCall(urls.VERIFY_TEMP_PASSWORD, callParams);
    return response;
  } catch (error: any) {
    throw error;
  }
}
