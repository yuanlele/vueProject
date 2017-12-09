import moment from 'moment';
import Vue from 'vue';

//过滤器，格式化日期
Vue.filter('fmtdate',(date,fmrstr)=> {
    return moment(date).format(fmrstr);
})