import Vue from 'vue';
import App from './App';
import store from '@/store';
import uView from 'uview-ui';

// 引入全局配置
import $mAssetsPath from '@/config/assets.config.js';
import $mConfig from '@/config/index.config.js';
import $mRoutesConfig from '@/config/routes.config.js';
import $mFormRule from '@/config/formRule.config.js';
import $mConstDataConfig from '@/config/constData.config.js';
import $mSettingConfig from '@/config/setting.config.js';

// 引入全局方法
import { http } from '@/utils/request';
import $mGraceChecker from '@/utils/graceChecker';
import $mHelper from '@/utils/helper';
import $mRouter from '@/utils/router';

// 挂载全局自定义方法
Vue.prototype.$mStore = store;
Vue.prototype.$http = http;
Vue.prototype.$mConfig = $mConfig;
Vue.prototype.$mAssetsPath = $mAssetsPath;
Vue.prototype.$mFormRule = $mFormRule;
Vue.prototype.$mRoutesConfig = $mRoutesConfig;
Vue.prototype.$mConstDataConfig = $mConstDataConfig;
Vue.prototype.$mSettingConfig = $mSettingConfig;
Vue.prototype.$mGraceChecker = $mGraceChecker;
Vue.prototype.$mHelper = $mHelper;
Vue.prototype.$mRouter = $mRouter;

if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false;
}

// 路由导航
$mRouter.beforeEach((navType, to) => {
  if (to.route === undefined) {
    throw '路由钩子函数中没有找到to对象，路由信息:' + JSON.stringify(to);
  }
  if (to.route === $mRoutesConfig.login.path && store.getters.hasLogin) {
    uni.reLaunch({
      url: $mHelper.objParseUrlAndParam($mRoutesConfig.main.path)
    });
    return;
  }
  // 过滤需要权限的页面
  if (to.route.requiresAuth) {
    if (store.getters.hasLogin) {
      // 已经登录
      uni[navType]({
        url: $mHelper.objParseUrlAndParam(to.route.path, to.query)
      });
    } else {
      // 登录成功后的重定向地址和参数
      const query = {
        redirectUrl: to.route.path,
        ...to.query
      };
      // 没有登录 是否强制登录?
      if (store.state.forcedLogin) {
        uni.redirectTo({
          url: $mHelper.objParseUrlAndParam($mRoutesConfig.login.path, query)
        });
      } else {
        uni.navigateTo({
          url: $mHelper.objParseUrlAndParam($mRoutesConfig.login.path, query)
        });
      }
    }
  } else {
    uni[navType]({
      url: $mHelper.objParseUrlAndParam(to.route, to.query)
    });
  }
});

Vue.use(uView);

App.mpType = 'app';

const app = new Vue({
  store,
  ...App
});
app.$mount();
