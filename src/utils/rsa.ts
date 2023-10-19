// 引入JSEncrypt来实现数据RSA加密
import JSEncrypt from "jsencrypt";
// 引入encryptlong来实现数据RSA加密
import Encrypt from "encryptlong";

// 公钥Key
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDw/IbyO/S8BmMXAUIAf9m0PV/' +
                  '7jkSxXuHh77mhaOYnaWO1/iUj8telrsBTFU2U0s71+RwR4vbNjX8ceo1W32a535s' +
                  'H9c+KzeBM8rKRSu+6j9lQ8yRY1KFKjVGueFQ5V6pkV0oJuRHrbrWOiKMbh1ceX/V' +
                  'B465HzLtaxt6BuAAcCQIDAQAB';
// 私钥Key
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

export default {
    // JSEncrypt加密
    rsaPublicData(data: any) {
        var jsencrypt = new JSEncrypt();
        jsencrypt.setPublicKey(publicKey);
        // 如果是对象/数组,需要先试用JSON.stringify转换为字符串
        var result = jsencrypt.encrypt(data);
        return result;
    },
    // JSEncrypt解密
    rsaPrivateData(data: any) {
        var jsencrypt = new JSEncrypt();
        jsencrypt.setPrivateKey(privateKey);
        // 如果是对象/数组,需要先试用JSON.stringify转换为字符串
        var result = jsencrypt.decrypt(data);
        return result;
    },
    // 加密
    encrypt(data: any) {
        const PUBLIC_KEY = publicKey;
        var encryptor = new Encrypt();
        encryptor.setPublicKey(PUBLIC_KEY);
        // 如果是对象/数组,需要先试用JSON.stringify转换为字符串
        const result = encryptor.encryptlong(data);
        return result;
    },
    // 解密
    decrypt(data: any) {
        const PRIVATE_KEY = privateKey;
        var encryptor = new Encrypt();
        encryptor.setPrivateKey(PRIVATE_KEY);
        // 如果是对象/数组,需要先试用JSON.stringify转换为字符串
        var result = encryptor.decryptlong(data);
        return result;
    }
}