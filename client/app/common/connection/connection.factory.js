const HTTP = new WeakMap();
const Q = new WeakMap();
const TIMEOUT = new WeakMap()

const PLAIN_TEXT_HEADERS = {
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'text/plain',
    'dataType': 'text/plain',
    'Access-Control-Allow-Credentials': 'true'
};

export class ConnectionService {
    constructor($http, $q, $timeout) {
        HTTP.set(this, $http);
        Q.set(this, $q);
        TIMEOUT.set(this, $timeout);
        this.headers = '*'
    }

    _objValidate(obj) {
        if (typeof obj === 'object') {
            return true
        } else {
            this.msg = 'expecting an object';
            return false;
        }
    }

    _checkIfHtml(data) {
        let testIfHtml = /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i;
        return testIfHtml.test(data);
    }

    sendHttp(obj, getHeaders) {
        let loaderInvoker,loaderRemover;
        if (obj.method !== 'HEAD') {
            loaderInvoker = TIMEOUT.get(this)(() => {
                loaderRemover = 'yossi'
            }, 800);
        }

        this.msg = null;
        let deferred = Q.get(this).defer();
        let successFunction = (response, status, headers) => {
            if (this._checkIfHtml(response)) {
                deferred.reject();
            }
            if (_.get(response, 'redirect')) {
                window.location = response.redirect;
            } else {
                if (getHeaders) {
                    deferred.resolve({res: response, headers: headers});
                } else {
                    deferred.resolve(response);
                }
            }
        };

        let errorFunction = (error, status) => {
            let errorMsg = _.isObject(error) && error.error ? error.error : _.isString(error) ? error : 'ERROR';
            if (status >= 500) {
                if (this._checkIfHtml(error) || !error) {
                } else {
                }
            }
            deferred.reject(error, status);
        };
        if (this._objValidate(obj)) {
            let currentHeader = _.cloneDeep(this.headers);
            if (_.isEqual(_.toLower(obj.method), 'delete') && !_.isEmpty(obj.data)) {
                currentHeader['Content-Type'] = 'application/json';
            }

            HTTP.get(this)({
                method: obj.method,
                url: obj.url,
                data: JSON.stringify(obj.data),
                withCredentials: true,
                headers: currentHeader
            })
                .success(successFunction)
                .error(errorFunction);
        } else {
            deferred.reject(this.msg);
        }
        let promise = deferred.promise;
        if (loaderInvoker) {
            promise.finally(() => {
                TIMEOUT.get(this).cancel(loaderInvoker);
            });
        }
        return promise;
    }

    sendPlainText({method, url, data, withCredentials = false}) {
      return HTTP.get(this)({
            method: method,
            url: url,
            data: data,
            withCredentials: withCredentials,
            headers: {'Content-Type':'application/json'}
        });
    }

    static ConnectionFactory($http, $q, $timeout) {
        return new ConnectionService($http, $q, $timeout);
    }
}
ConnectionService.ConnectionFactory.$inject = ['$http', '$q', '$timeout'];

export default ConnectionService.ConnectionFactory;







