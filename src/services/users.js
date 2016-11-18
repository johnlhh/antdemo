import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`);
}

export async function create(params) {
  return request('/api/users', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function remove(params) {
  return request('/api/users', {
    method: 'delete',
    body: qs.stringify(params),
  });
}

export async function update(params) {
  return request('/api/users', {
    method: 'put',
    body: qs.stringify(params),
  });
}


export async function testGet(params) {

  return request('http://192.168.9.217:8080/elasticsearch/test/v1.0/mock1.do', {
    method: 'POST',
    mode:'cors',
    cache: 'default',
   /* headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers':'token,Access-Control-Allow-Origin,Access-Control-Allow-Methods,Access-Control-Max-Age,authorization',
      'token': 'Cl5bxjcUt+gDtIDJY4wDgZKNoYdMcgjKQQKXga/UKtmpfniucZTeKaf5mUjsm7uc'
    },*/
    body:qs.stringify(params),
  });
}

