const CONFIG = {
    // 开发环境配置
    development: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'https://b2c.rageframe.com/api', // 后台接口请求地址
        hostUrl: 'http://master.yllook.com', // H5地址(前端运行地址)
        weixinAppId: 'wxc850b66e6063c3f4' // 微信公众号appid
    },
    // 生产环境配置
    production: {
        assetsPath: '/static', // 静态资源路径
        baseUrl: 'https://www.yllook.com/api', // 后台接口请求地址
        hostUrl: 'http://master.yllook.com', // H5地址(前端运行地址)
        weixinAppId: 'wxc850b66e6063c3f4' // 微信公众号appid
    }

};
export default CONFIG[process.env.NODE_ENV];
