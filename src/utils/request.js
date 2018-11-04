import axios from 'axios';
import qs from 'qs';
import Jsonp from 'jsonp';

const instance = axios.create({
    timeout: 3000
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    console.log('response', response);
    return response;
}, function (error) {
    return Promise.reject(error);
});

function addParams (url = '') {
    let token = 'wks';
    let timetap = +new Date();
    let paramsStr = url.indexOf('?') > -1 ? qs.stringify({...qs.parse(url.split('?')[1]), token, timetap}) : `?${qs.stringify({token, timetap})}`;
    return `${url}${paramsStr}`;
}

function addBaseUrl (url) {
    if (/^\/api/.test(url)) {
        return `${url}`;
    }
    return url;
}

export function post (url, params = {}) {
    return new Promise(() => {
        if (!url) return Promise.reject('url 不能为空');
        return instance.post(addBaseUrl(addParams(url)), params);
    });
}

export function get (url, params = {}) {
    return new Promise(() => {
        if (!url) return Promise.reject('url 不能为空');
        return instance.get(addBaseUrl(addParams(url)), {params});
    });
}

export function jsonp (url, param = {}) {
    return new Promise((resolve, reject) => {
        let defaultParams = {
            tag: '__all__',
            ac: 'wap',
            count: 20,
            format: 'json_raw',
            as: 'A1452B6DE5EA693',
            cp: '5BD5BAF609037E1',
            _signature: 'U73oeQAACGjsyxmf0CeH1FO96G',
            i: (+new Date()).toString().slice(0, 10)
        };
        let params = {...defaultParams, ...param};
        // 注意这里的参数需要直接放到url后面，而不是直接放到第二个参数的param内，直接放第二个参数的param内会触发corb，data内拿到的数据为null
        Jsonp(`${url}?${qs.stringify(params)}`, null, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}