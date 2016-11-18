import { login } from '../services/login';
import { parse } from 'qs';

export default {

  namespace: 'login',

  state: {
    flag:false,
    message:'',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(login, parse(payload));
      if (data) {
        if(data.flag){

        }else{

        }
      }
    },
  },

  reducers: {
    loginSuccess(state) {
      return { ...state};
    },
  },

};
