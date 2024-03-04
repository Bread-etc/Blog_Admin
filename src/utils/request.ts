import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useMessage } from "naive-ui";
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: "https://admin.hastur23.top/",
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 一般请求拦截里面加token,用于后端的验证
        const token = localStorage.getItem('token') as string;
        if (token) {
            config.headers!.Authorization = token;
        }

        return config;
    },
    (error: AxiosError) => {
        // alert(error.message);
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { code, message, data } = response.data;
        // 根据自定义错误码判断请求是否成功
        if (code === 200) {
            return data;
        } else {
            // 处理业务错误
            return Promise.reject(new Error(message));
        }
    },
    (error: AxiosError) => {
        const mess = useMessage();
        // 处理HTTP网络错误
        let message = '';
        // HTTP 状态码
        const status = error.status;
        switch(status) {
            case 400:
                message = '请求错误(400)';
                break;
            case 401:
                message = 'token失效，请重新登录(401)';
                // 此处可用触发退出的action (清空storage并跳转登录页)
                break;
            case 403:
                message = '拒绝访问(403)';
                break;
            case 404:
                message = '请求资源不存在(404)';
                break;
            case 500:
                message = '服务端发生错误(500)';
                break;
            case 501:
                message = '服务未实现(501)';
                break;
            case 502:
                message = '网络错误(502)';
                break;
            case 503:
                message = '服务不可用(503)';
                break;
            case 504:
                message = '网络超时(504)';
                break;
            case 505:
                message = 'HTTP版本不受支持(505)';
                break;
            default:
                message = `连接出错${status}!`;
        }

        // alert(message);
        mess.warning(message);
        return Promise.reject(error);
    }
);

// 导出封装的请求方法
export const http = {
    get<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
        return service.get(url, config);
    },

    post<T=any>(url: string, data?: object | FormData, config?: AxiosRequestConfig) : Promise<T> {
        if (data instanceof FormData) {
            config = {
                ...config,
                headers: {
                    ...config?.headers,
                    'Content-Type': 'multipart/form-data',
                }
            };
        }
        return service.post(url, data, config);
    },

    put<T=any>(url: string, data?: object, config?: AxiosRequestConfig) : Promise<T> {
        return service.put(url, data, config);
    },

    delete<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
        return service.delete(url, config)
    }
};

export default service;
