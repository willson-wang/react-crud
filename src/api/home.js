import { jsonp } from '../utils/request';

export function getRecommandList (url, param = {}) {
    console.log('jsonp', jsonp);
    return jsonp(url, param);
}