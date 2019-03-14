(function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
  
    // adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();
  
    // set 1rem = viewWidth / 10
    function setRemUnit () {
        var rem = docEl.clientWidth / 10;
        // 增加一个判断
        (rem>50)&&(rem=50);

        docEl.style.fontSize = rem + 'px'
        docEl.style.fontSize = rem + 'px'
    }
  
    setRemUnit()
  
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })
  
    // detect 0.5px supports
    //1px问题用伪类和transform实现
    // if (dpr >= 2) {
    //     var fakeBody = document.createElement('body')
    //     var testElement = document.createElement('div')
    //     testElement.style.border = '.5px solid transparent'
    //     fakeBody.appendChild(testElement)
    //     docEl.appendChild(fakeBody)
    //     if (testElement.offsetHeight === 1) {
    //         docEl.classList.add('hairlines')
    //     }
    //     docEl.removeChild(fakeBody)
    // }


    // 禁用微信字体放大缩小功能
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
        //IE浏览器，非W3C规范
        document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
        }
    }
    function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }
    // IOSactive效果生效
    document.addEventListener('touchstart', function () {}); 

}(window, document))
  