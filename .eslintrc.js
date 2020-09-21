module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },

    extends: ['eslint:recommended', 'plugin:vue/essential'],

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        uni: true
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parser: 'babel-eslint'
    },

    plugins: ['vue'],
    /*
        0 或’off’：  关闭规则。
        1 或’warn’： 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）。
        2 或’error’：打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)。
     */
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "no-var": 2, //禁用var，用let和const代替
        "array-bracket-spacing": [2, "never"],	//是否允许非空数组里面有多余的空格
        "semi": [2, "always"], // 语句强制分号结尾
        "no-undef": 1,	//不能有未定义的变量
        'indent': [0, 2], // 缩进风格 - 开启缩进2格
        "quotes": [1, "single"],	//引号类型 - 单引号
        "valid-jsdoc": 0,	//jsdoc规则
        "eqeqeq": 2,	//必须使用全等
        "no-multi-spaces": 1,	//不能用多余的空格
        "no-dupe-keys": 2,	//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2,	//函数参数不能重复
        "no-duplicate-case": 2,	//switch中的case标签不能重复
        'no-throw-literal': 0,	//禁止抛出字面量错误 throw "error";
        "no-empty": 2,	//块语句中的内容不能为空
        'space-before-function-paren': [0, 'always'],//函数定义时括号前面需要有空格
        'no-irregular-whitespace': 0,//不能有不规则的空格
        "no-tabs": 0,
        "dot-notation": 0, //获取对象属性的时候使用点号
        'one-var': 0, // 禁用连续声明
        'prefer-const': 0  // 优先使用const
    },

    root: true,

    extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/standard']
};
