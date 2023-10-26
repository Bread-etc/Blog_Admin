// 通用参数类型
export type Result<T> = {
  code: number;
  message: string;
  data: T;
};

// // 用户信息
// export interface UserInfo {

// };

// 登录参数
export interface Login {
  code: number;
  message: string;
  data: {
    user: {
      account: string;
      password: string;
    }
  };
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
};

