let DynamicTool={init:()=>{let t=new URL(location.href).searchParams.get("tool");t?import("../background/awesome.js").then(e=>{((t,e)=>{e.getToolTpl(t).then(t=>{if(!t)return void(confirm("检测到当前指定的工具还未安装，这就去设置页面安装工具！")?location.replace("../options/index.html"):window.close());document.write(t),DarkModeMgr.turnLightAuto();let o=document.querySelectorAll("dynamic[data-source]");if(!o.length)return;let n=[],l=[];for(let t=0;t<o.length;t++){let e=o[t],i=e.getAttribute("data-type"),a=(e.getAttribute("data-source")||"").split(",").map(t=>{if(-1!==t.indexOf("?")){let e=t.split("?");e.pop(),t=e.join("")}return t});"js"===i?n=n.concat(a):l=l.concat(a)}Promise.all([e.StorageMgr.get(l),e.StorageMgr.get(n)]).then(t=>{if(document.body.style.display="block",(l=l.map(e=>t[0][e]).join(" ")).length){let t=document.createElement("style");t.textContent=l,document.head.appendChild(t)}(n=n.map(e=>t[1][e]).join(";")).length&&window.evalCore.getEvalInstance(window)(n)})})})(t,e.default)}):location.replace("../options/index.html")}};DynamicTool.init();