function params() {
    const search = window.location.search;
    search = search.substr(1, search.length);
    const res = {};
    if (!search) return res;
    search.split('&').map(item => {
        const [key, value] = item.split('=');
        res[key] = decodeURIComponent(value);
    });
    return res;
}

function urlParam() {
    const param = {};
    location.search.replace(/([^&=?]+)=([^&]+)/g, (m, $1, $2) => param[$1] = $2);
    return param;
}