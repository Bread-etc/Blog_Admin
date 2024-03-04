import { http } from '../../utils/request';
import type { article } from '../types';

// 发送 get 请求,获取数据库中文章列表
export function getData() {
    return http.get<article[]>("/api/dataTable/get");
}