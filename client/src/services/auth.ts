import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import type { APILoginDataInterface } from '../lib/interface/auth';

export const setToken = ({ jwt_token }: { jwt_token: string }): void => {
  const copherAccessToken = CryptoJS.AES.encrypt(JSON.stringify(jwt_token), 'jwt_token');
  //   const rememberMe = getRememberMe();
  Cookies.set('jwt_token', copherAccessToken.toString(), {
    // expires: rememberMe ? 30 : 1,
    expires: 1,
  });
};

export const getToken = (): string | null => {
  const sessi = Cookies.get('jwt_token');
  if (!sessi) return null;
  const bytes = CryptoJS.AES.decrypt(sessi, 'jwt_token');
  try {
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    console.log('error', err);
    return null;
  }
};

export const setUserInfo = ({ user_data }: { user_data: APILoginDataInterface }): void => {
  const cipherUserInfo = CryptoJS.AES.encrypt(JSON.stringify(user_data), 'user_info');
  //   const rememberMe = getRememberMe();
  Cookies.set('user_info', cipherUserInfo.toString(), {
    // expires: rememberMe ? 30 : 1,
    expires: 1,
  });
};

export const getUserInfo = (): APILoginDataInterface | null => {
  const sessi = Cookies.get('user_info');
  if (!sessi) return null;
  const bytes = CryptoJS.AES.decrypt(sessi, 'user_info');
  try {
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    console.log('error', err);
    return null;
  }
};

export const logout = () => {
  Cookies.remove('user_info');
  Cookies.remove('jwt_token');
  localStorage.removeItem('user_info');
  localStorage.removeItem('jwt_token');
};
