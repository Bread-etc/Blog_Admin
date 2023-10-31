// 加密和解密
import JSEncrypt from "jsencrypt";

// 实例化RSA
const rsa = new JSEncrypt();


/**
 * 公钥加密 用户密码(user.password)
 * 
 * @param content 
 * @param publicKey 
 */
export function encrypt(content: string, publicKey: string) {
    // 设置公钥
    rsa.setPublicKey(publicKey);

    // 使用公钥加密
    const encrypt = rsa.encrypt(content);
    return encrypt;
}
