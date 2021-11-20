module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        "semi": [2, "always"],
        "id-length": [2, { max: 25 }],
        "max-len": [2, { code: 70 }],
        "max-lines-per-function": [2, { max: 50 }],
        "no-console": [1]
    }
};
