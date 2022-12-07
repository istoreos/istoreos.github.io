(function () {
    var mobilePage = false;
    if (location.pathname === '/mobile' || location.pathname.startsWith('/mobile/')) {
        mobilePage = true;
    }
    var mobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
    if (mobile != mobilePage) {
        var path = mobile ? ('/mobile' + location.pathname) : (location.pathname.substr(7));
        if (path.length === 0) {
            path = '/';
        }
        location.pathname = path;
    }
})();