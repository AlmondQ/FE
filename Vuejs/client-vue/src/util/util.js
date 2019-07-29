const baseUrl = 'http://localhost:8333';
import axios from 'axios';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
});

/**
 * 
 * @param {string} url 
 * @param {Object} params
 * @returns {function}
 */

export function get (url, params) {
    const param = [];
    if (params) {
        Object.keys(params).forEach((key) => {
            param.push(`${key}=${params[key]}`)
        });
        url = url + '?' + param.join('&');
    }
    return instance.get(url);
};

/**
 * 
 * @param {string} url 
 * @param {Object} params 
 * @returns {function}
 */
export function post (url, params) {
    return instance.post(url, params);
}