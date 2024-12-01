var href = new URL(window.location.href);
var pathName = new URL(href).pathname;
var split = pathName.split('/');
var photoId = split[split.length - 1];
var resourceKey = 'VisionVideoDetailPhoto:' + photoId;
var visionVideoDetailPhoto = window.__APOLLO_STATE__.defaultClient[resourceKey];
var photoUrl = visionVideoDetailPhoto.photoUrl;
console.log(1111, href, pathName, split);
console.log(2222, photoId, resourceKey, visionVideoDetailPhoto);
console.log(3333, photoUrl)

// 通过postMessage调用content-script
function invokeContentScript(code) {
    window.postMessage({ cmd: 'invoke', code: code, message: { photoId, photoUrl } }, '*');
}
// 发送普通消息到content-script
// function sendMessageToContentScriptByPostMessage(data) {
//     window.postMessage({ cmd: 'message', data: data }, '*');
// }

// 通过DOM事件发送消息给content-script
(function() {
    var customEvent = document.createEvent('Event');
    customEvent.initEvent('myCustomEvent', true, true);
    // 通过事件发送消息给content-script
    function sendMessageToContentScriptByEvent(data) {
        data = data || '你好，我是injected-script!';
        var hiddenDiv = document.getElementById('myCustomEventDiv');
        hiddenDiv.innerText = data
        hiddenDiv.dispatchEvent(customEvent);
    }
    window.sendMessageToContentScriptByEvent = sendMessageToContentScriptByEvent;
})();