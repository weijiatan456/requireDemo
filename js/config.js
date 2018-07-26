require.config({
    paths: {
        "jquery": "jquery",
        "base": "base",
        "lazy": "jquery.lazyload.min"
    },
    shim: {
        // jQuery的插件,非AMD规范
        'lazy': {
            deps:['jquery'],
            exports: 'lazyload'
        }
    }
});

// 那些不是AMD模块的js文件，只要在这里引入了就可以在回调函数中使用
require(["jquery","sevent","lazy"],function($, sevent, lazyload) {
    $(function() {
        $("img.lazy").lazyload({
            effect : "fadeIn",
            threshold : 100
        });
        sevent.Sevent();
    });
});