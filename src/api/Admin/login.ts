import { http } from '../../utils/request';
import type { Login } from '../types';

// 发送post请求到/login
export function Login(username: string, encryptedPassword: any) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('encryptedPassword', encryptedPassword);
    return http.post<Login>('/login', formData);
};