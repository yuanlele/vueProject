import Vue from 'vue';

//引用axios;
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8899/api/';
//让所有实例都共享
Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

//全局引用mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
//引用样式
import 'mint-ui/lib/style.css';

//引用mui的css
import '../../statics/css/mui.css'

