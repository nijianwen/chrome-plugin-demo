var hrefUrl = new URL(window.location.href);
var pathName = hrefUrl.pathname;
var split = pathName.split('/');
console.log(1111, hrefUrl, pathName, split);

if (window.location.href.indexOf('www.kuaishou.com') > 0) { //快手单视频文件识别和后台下载
    var photoId = split[split.length - 1];
    var resourceKey = 'VisionVideoDetailPhoto:' + photoId;
    var visionVideoDetailPhoto = window.__APOLLO_STATE__.defaultClient[resourceKey];
    var photoUrl = visionVideoDetailPhoto.photoUrl;
    var photoUrlObj = new URL(photoUrl);
    if (photoUrlObj.pathname.lastIndexOf('.mp4')) {
        // console.log(2222, photoId, resourceKey, visionVideoDetailPhoto);
        console.log(3333, '识别到结尾为mp4的资源：', photoId, photoUrlObj)
        window.postMessage({ cmd: 'invoke', code: 'sendMessageToBackground', message: { photoId, photoUrl, suffix: '.mp4' } }, '*');
    } else {
        console.log(4444, '无需要下载的资源');
    }
}


// 通过postMessage调用content-script
// function invokeContentScript(photoId, photoUrl) {
//     window.postMessage({ cmd: 'invoke', code: 'sendMessageToBackground', message: { photoId, photoUrl } }, '*');
// }

// 发送普通消息到content-script
// function sendMessageToContentScriptByPostMessage(data) {
//     window.postMessage({ cmd: 'message', data: data }, '*');
// }

// 通过DOM事件发送消息给content-script
// (function() {
//     var customEvent = document.createEvent('Event');
//     customEvent.initEvent('myCustomEvent', true, true);
//     // 通过事件发送消息给content-script
//     function sendMessageToContentScriptByEvent(data) {
//         data = data || '你好，我是injected-script!';
//         var hiddenDiv = document.getElementById('myCustomEventDiv');
//         hiddenDiv.innerText = data
//         hiddenDiv.dispatchEvent(customEvent);
//     }
//     window.sendMessageToContentScriptByEvent = sendMessageToContentScriptByEvent;
// })();