import Settings from"../options/settings.js";export default{inject:function(e,t,s){chrome.tabs.query({currentWindow:!0},a=>{a.some(a=>a.id===e&&(Settings.getOptions(a=>{t.hasOwnProperty("allFrames")||(t.allFrames="true"===String(a.CONTENT_SCRIPT_ALLOW_ALL_FRAMES)),t.js="try{"+t.js+";}catch(e){};",t.files&&t.files.length?t.files.join(",").indexOf(".css")>-1?chrome.scripting.insertCSS({target:{tabId:e,allFrames:t.allFrames},files:t.files},function(){s&&s.apply(this,arguments)}):chrome.scripting.executeScript({target:{tabId:e,allFrames:t.allFrames},files:t.files},function(){chrome.scripting.executeScript({target:{tabId:e,allFrames:t.allFrames},func:function(e){evalCore.getEvalInstance(window)(e)},args:[t.js]},function(){s&&s.apply(this,arguments)})}):t.css?chrome.scripting.executeScript({target:{tabId:e,allFrames:t.allFrames},css:t.css},function(){s&&s.apply(this,arguments)}):chrome.scripting.executeScript({target:{tabId:e,allFrames:t.allFrames},func:function(e){evalCore.getEvalInstance(window)(e)},args:[t.js]},function(){s&&s.apply(this,arguments)})}),!0))})}};