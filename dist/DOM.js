export var DOM;
(function (DOM) {
    function add(obj) {
        document.body.appendChild(obj.dom);
    }
    DOM.add = add;
    function remove(obj) {
        document.body.removeChild(obj.dom);
    }
    DOM.remove = remove;
    function onResize(handler) {
        handler();
        window.addEventListener('resize', handler);
    }
    DOM.onResize = onResize;
})(DOM || (DOM = {}));
