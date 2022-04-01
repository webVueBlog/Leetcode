function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function() {
            if ((this.status = 200)) {
                callback(JSON.parse(this.response));
            } else {
                throw new error('失败');
            }
        };
        xhr.onload = function() {
            reject();
        };
    });
}