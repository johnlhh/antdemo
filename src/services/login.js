import request from '../utils/request';
import qs from 'qs';


export async function login(params) {
  return request('http://192.168.9.217:8080/elasticsearch/user/v1.0/login.do', {
    method: 'post',
    mode:'cors',
    cache: 'default',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:qs.stringify(params),
  });
}

