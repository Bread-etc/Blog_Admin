// 通用参数类型
export type Result<T> = {
  code: number;
  message: string;
  data: T;
};

// 登录参数
export interface Login {
  code: number;
  message: string;
  data: {
    user: {
      username: string;
      encryptedPassword: string;
    }
  };
};

