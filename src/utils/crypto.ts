// 引入JSEncrypt来实现数据RSA加密
import JSEncrypt from "jsencrypt";

// 公钥
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDw/IbyO/S8BmMXAUIAf9m0PV/' +
                  '7jkSxXuHh77mhaOYnaWO1/iUj8telrsBTFU2U0s71+RwR4vbNjX8ceo1W32a535s' +
                  'H9c+KzeBM8rKRSu+6j9lQ8yRY1KFKjVGueFQ5V6pkV0oJuRHrbrWOiKMbh1ceX/V' +
                  'B465HzLtaxt6BuAAcCQIDAQAB';
// 私钥
const privateKey = 'MIICXQIBAAKBgQDw/IbyO/S8BmMXAUIAf9m0PV/7jkSxXuHh77mhaOYnaWO1/iU' +
                   'j8telrsBTFU2U0s71+RwR4vbNjX8ceo1W32a535sH9c+KzeBM8rKRSu+6j9lQ8yR' +
                   'Y1KFKjVGueFQ5V6pkV0oJuRHrbrWOiKMbh1ceX/VB465HzLtaxt6BuAAcCQIDAQA' +
                   'BAoGBAIrK1inTMCvOfel09v90ovz00EAAez2wiOXofIAi+1M9lojtu5RNu7eXwvr' +
                   'W7RzGoR33gBwpHL3cPZY4Wwjql61djOm3kzuZAZzxVEqSOC226/BpzFAcb9OhJJU' +
                   '2kFeK0YX3OQlylqko2u1S93ClPxTrErSrMelEAG2PrVg04MoBAkEA/2hCUP9Rsy0' +
                   'ANXjyuo84lfwJzJ9rpsf+tIia6i38h7MC8Ww0jGZjBLxZ3Ua6kyvctss2dJCB3KG' +
                   'bbxX6CGRvQQJBAPGLs1JEAqB15/6UCR/3yeHDITK8coyNH4mzpgTszAw/WXiXtJS' +
                   '+m0dqsZSrL3+89fEIWgdV5p2pwpkEQ1T2QskCQHl7Wa+1AWM8EFFeyfU6kiukyfR' +
                   'uD4IwtlGgeC7S2L6iws+aLBRrzsU94XCCZ9QAlObNGYWwBlSu+YOI7Hh5bQECQB2' +
                   'qa7ax1aTBdmHE6q37b9cDcSNbE7KBbpsp7jzynEjwyttNvob6NfX6e57nu2iz23z' +
                   'j6rK18SHyBI1ogaCAskkCQQDUyPHeeYYSCQJ+NQdEtvOWJrvkzmDdUDJb3xVFS9K' +
                   'GfvvMkqTApK0No5gfqGKLUUF7Ug80i1E7jdnX1GQ7braR';
// 最大加密长度
const MAX_ENCRYPT_BLOCK = 117;
// 最大解密长度
const MAX_DECRYPT_BLOCK = 128;

/**
 * 
 * @description RSA加密(支持长字符加密)
 * 
 */
export async function encryptedData (data: any) {
    // 创建实例
    const encrypt = new JSEncrypt();
    // 设置公钥
    encrypt.setPublicKey(
        `------BEGIN PUBLIC KEY------${publicKey}------END PUBLIC KEY------`
    );
    let bufTmp = '';
    let hexTmp: any = '';
    let result = '';

    // 将数据转为JSON字符串
    const buffer = JSON.stringify(data);
    let offSet = 0;
    const inputLen = buffer.length;
    while(inputLen - offSet > 0) {
        if(inputLen - offSet > 0) {
            bufTmp = buffer.slice(offSet, offSet + MAX_ENCRYPT_BLOCK);
        } else {
            bufTmp = buffer.slice(offSet, inputLen);
        };

        // 对数据进行加密
        hexTmp = encrypt.encrypt(bufTmp.toString());
        result += hexTmp;
        offSet += MAX_ENCRYPT_BLOCK;
    }
    return btoa(result);
};

/**
 * @description RSA解密(支持长字符解密)
 * @param data
 * @returns {PromiseLike<ArrayBuffer>}
 */
export function decryptedData (data: any) {
    const decrypt = new JSEncrypt();
    // 设置私钥
    decrypt.setPrivateKey(
        `------BEGIN RSA PRIVATE KEY------${privateKey}------END RSA PRIVATE KEY`
    );
    let bufTmp = '';
    let hexTmp: any = '';
    let result = '';
    // 通过使用atob解码数据 如果使用Buffer.from(),则使用Buffer.from()解码
    const buffer = atob(data);
    let offSet = 0;
    const inputLen = buffer.length;
    while(inputLen - offSet > 0) {
        if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
            bufTmp = buffer.slice(offSet, offSet + MAX_DECRYPT_BLOCK);
        } else {
            bufTmp = buffer.slice(offSet, inputLen);
        }

        // 对数据解码
        hexTmp = decrypt.decrypt(bufTmp);
        result += hexTmp;
        offSet += MAX_DECRYPT_BLOCK;
    }
    return JSON.parse(result); 
}