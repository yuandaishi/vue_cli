// https://eslint.org/docs/user-guide/configuring

// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   env: {
//     browser: true,
//   },
//   extends: [
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     'plugin:vue/essential', 
//     // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//     'standard'
//   ],
//   // required to lint *.vue files
//   plugins: [
//     'vue'
//   ],
//   // add your custom rules here
//   rules: {
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
//   }
// }

module.exports = {
    "env": {
        "browser": true, 
        "commonjs": true,
        "es6": true
    }, 
    "extends": "eslint:recommended",//启用推荐规则
    "parserOptions": {
        "sourceType": "script" //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    },
    "rules": {//自定义规则
        "indent": ["warn", 4],//强制使用一致的缩进,4个空格
        "quotes": ["warn", "single"],//强制使用一致的反勾号、双引号或单引号
        "default-case":"warn",//要求 switch 语句中有 default 分支
        "eqeqeq":"warn",//要求使用 === 和 !==
        "no-empty-function":"warn",//禁止出现空函数
    }
};