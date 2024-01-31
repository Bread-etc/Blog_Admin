import { http } from '../../utils/request';
import type { Article } from '../types';

// 发送 get 请求,获取数据库中文章列表
export function getData() {
    console.log("获取数据列表成功");
    return http.get<Article>('/dataTable/get');
}