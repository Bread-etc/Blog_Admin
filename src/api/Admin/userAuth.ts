import { http } from '../../utils/request';
import type { Login } from '../types';

// 发送post请求到/admin/userAuth
export function getUserAuth(query: Object) {
    return http.post<Login>('/admin/userAuth', { "userInfo": query });
};