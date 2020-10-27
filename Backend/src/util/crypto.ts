import { createCipher, createDecipher } from 'crypto';

export const Crypto_old = {
    encrypt: function (password: string) {
        var mykey = createCipher(process.env.CIPHER_ALGO, process.env.CIPHER_KEY_2);
        var mystr = mykey.update(password, 'utf8', 'hex')
        mystr += mykey.final('hex');
        return mystr
    },

    decrypt: function (hashpassword: NodeJS.ArrayBufferView) {
        var mykey = createDecipher(process.env.CIPHER_ALGO, process.env.CIPHER_KEY_2);
        var mystr = mykey.update(hashpassword, 'hex', 'utf8')
        mystr += mykey.final('utf8');
        return mystr
    }
};

export const Crypto = {
    encrypt: function (password: string, algorithm: string, key: string) {
        var mykey = createCipher(algorithm, key);
        var mystr = mykey.update(password, 'utf8', 'hex')
        mystr += mykey.final('hex');
        return mystr
    },

    decrypt: function (hashpassword: NodeJS.ArrayBufferView, algorithm: string, key: string) {
        var mykey = createDecipher(algorithm, key);
        var mystr = mykey.update(hashpassword, 'hex', 'utf8')
        mystr += mykey.final('utf8');
        return mystr
    }
}
