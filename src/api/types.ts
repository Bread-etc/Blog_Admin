// 通用参数类型
export type Result<T> = {
  code: number;
  message: string;
  data: T;
};
