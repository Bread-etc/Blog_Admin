import { http } from '../../utils/request';

// 发送get请求请求 公钥PublicKey
export function getPublicKey() {
    return http.get<string>('/api/getPublicKey');
}