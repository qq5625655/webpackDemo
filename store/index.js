import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // Env: process.env.NODE_ENV,
        Customer_NeedInfo_Enumerate:{
            /**
            *1---服务状态
            *2---证照类别
            *3---商户类别
            *4---是否生效
            *5---行业
            *6---规模
            *7---上市情况
            *8---客户来源
            *9---渠道
            *10---服务等级
            *11---社交账号类型
             */
        },
        Jurisdiction_List:{
            // '商户管理', 'master'
            // '商户管理', 'custmanager'
            // '商户列表', 'custmanager:list'
            // '创建商户', 'custmanager:add'
            // '商户详情', 'custmanager:detail'
            // '修改商户信息', 'custmanager:update'
            // '商户认证审核', 'custcheck'
            // '认证列表', 'custcheck:list'
            // '认证详情', 'custcheck:detail'
            // '失效', 'custmanager:invalid'
            // '终止合作', 'custmanager:cooperation'
            // '批量修改', 'custmanager:batchoperate'
            // '发送密码', 'custmanager:sendpassword'
            // '密码框展示', 'custmanager:passwordinput'
            // '导出', 'customer:export'
            // '渠道管理', 'channel:list'
            // '创建渠道', 'channel:add'
            // '商户详情账户管理', 'custmanager:detail:accountmanage'
            // '商户详情账户新增绑定', 'custmanager:detail:accountmanage:binduser'
            // '商户详情账户解除绑定', 'custmanager:detail:accountmanage:unbinduser'
        },
        User:{
            name:'',
            id:'',
        },
    },
    getters:{
    },
    mutations: {
        //触发父级不好调用的函数
        // updateCustomerNeedInfoEnumerate(state,obj){
        //     state.Customer_NeedInfo_Enumerate = obj
        // },
        // getJurisdiction(state,arrJurisdictionList){
        //     if (arrJurisdictionList && Array.isArray(arrJurisdictionList)){
        //         arrJurisdictionList.forEach(val => {
        //             state.Jurisdiction_List[val] = true;
        //         });
        //     }
        // },
    },
    actions:{
        
    }
})
 
