const checkStatus = (response) => {
    // console.log('checkStatus',response);
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(url, options) {
    const defaultOptions = {
        credentials: 'include',
        method: 'POST',
    };
    const newOptions = {
        ...defaultOptions,
        ...options,
    };
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
        newOptions.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Connection: 'close',
            ...newOptions.headers,
        };
        newOptions.body = JSON.stringify(newOptions.body);
    }

    return fetch(url, newOptions)
        .then(checkStatus)
        .then(response => response.json())
        .catch((error) => {
            if (error.code) {
                console.log(error.message);
            }
            if ('stack' in error && 'message' in error) {
                console.log(error.message);
            }
            return error;
        });
}
