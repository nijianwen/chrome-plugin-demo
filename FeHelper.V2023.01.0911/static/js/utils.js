window.baidu={namespace:{register:function(e){for(var t=/^[_$a-z]+[_$a-z0-9]*/i,n=e.split("."),i=[window],r=0;r<n.length;r++){if(!t.test(n[r]))throw new Error("Invalid namespace:"+n[r]);i[r+1]=i[r][n[r]],void 0===i[r+1]&&(i[r+1]=new Object)}}}},String.prototype.getBytes=function(){var e=this.replace(/\n/g,"xx").replace(/\t/g,"x");return encodeURIComponent(e).replace(/%[A-Z0-9][A-Z0-9]/g,"x").length},String.prototype.trim=function(){return this.replace(/^\s*|\s*$/g,"")},Date.prototype.format=function(e){let t=function(e,t){let n="",i=e<0,r=String(Math.abs(e));return r.length<t&&(n=new Array(t-r.length+1).join("0")),(i?"-":"")+n+r};if("string"!=typeof e)return this.toString();let n=function(t,n){e=e.replace(t,n)},i=this.getFullYear(),r=this.getMonth()+1,o=this.getDate(),s=this.getHours(),l=this.getMinutes(),g=this.getSeconds(),a=this.getMilliseconds();return n(/yyyy/g,t(i,4)),n(/yy/g,t(parseInt(i.toString().slice(2),10),2)),n(/MM/g,t(r,2)),n(/M/g,r),n(/dd/g,t(o,2)),n(/d/g,o),n(/HH/g,t(s,2)),n(/H/g,s),n(/hh/g,t(s%12,2)),n(/h/g,s%12),n(/mm/g,t(l,2)),n(/m/g,l),n(/ss/g,t(g,2)),n(/s/g,g),n(/SSS/g,t(a,3)),n(/S/g,a),e},window.toast=function(e){window.clearTimeout(window.feHelperAlertMsgTid);let t=document.querySelector("#fehelper_alertmsg");if(t)t.querySelector("p").innerHTML=e,t.style.display="block";else{let n=document.createElement("div");n.innerHTML='<div id="fehelper_alertmsg" style="position:fixed;top:5px;right:5px;z-index:1000000"><p style="background:#000;display:inline-block;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:14px;border-radius:4px;">'+e+"</p></div>",t=n.childNodes[0],document.body.appendChild(t)}window.feHelperAlertMsgTid=window.setTimeout(function(){t.style.display="none"},3e3)},window.getCurrAbsPath=function(){let e,t=/((?:http|https|file|chrome-extension):\/\/.*?\/[^:]+)(?::\d+)?:\d+/;try{a.b()}catch(t){e=t.fileName||t.sourceURL||t.stack||t.stacktrace}if(e)return t.exec(e)[1]};