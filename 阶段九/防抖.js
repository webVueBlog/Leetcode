function debounce(fun, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(fun, wait);
    }
}