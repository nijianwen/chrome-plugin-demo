"use strict";var default_options={};function $(t){return document.getElementById(t)}var uglify_options,default_options_text,last_input,$options=$("options"),$out=$("out"),$in=$("in"),$error=$("error"),$stats=$("stats"),$body=document.body,$btn_options=$("btn-options"),$btn_options_save=$("btn-options-save"),$cb_as_i_type=$("cb-as-i-type");function hide(t){for(var o=t.split(" "),e=" "+$body.className+" ",n=0;n<o.length;n++)for(;0<=e.indexOf(" "+o[n]+" ");)e=e.replace(" "+o[n]+" "," ");$body.className=e.replace(/^\s+|\s+$/g,"")}function show(t){$body.className+=" "+t}function show_options(){show("s-options"),hide("s-input")}function get_options(t){return new Function("return ("+(t||$options.value)+");")()}function set_options(){var t=uglify_options;try{uglify_options=get_options();try{default_options_text===$options.value?localStorage.removeItem("uglify-options"):localStorage.setItem("uglify-options",$options.value)}catch(t){}return go(!0),show("s-input"),hide("s-options"),!0}catch(o){return o instanceof JS_Parse_Error?(show_error(o,$in.value),!0):(uglify_options=t,show_error(o),!1)}}function reset_options(){$options.value=default_options_text,set_options()}function set_options_ait(){try{$cb_as_i_type.checked?localStorage.removeItem("uglify-options-disable-ait"):localStorage.setItem("uglify-options-disable-ait",1)}catch(t){}}function set_options_initial(){default_options_text=$options.textContent||$options.innerText,default_options=get_options(default_options_text);try{var t=localStorage.getItem("uglify-options");t&&($options.value=t),$cb_as_i_type.checked=!localStorage.getItem("uglify-options-disable-ait")}catch(t){}try{uglify_options=get_options()}catch(t){$options.value=default_options_text,uglify_options=default_options}}function encodeHTML(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function go(t){function o(){if(e&&e!==$in.textContent){var t=minify(e,uglify_options);if(t.error)throw t.error;hide("s-info s-error"),show("s-output"),$out.value=t.code||"/* no output! */",$stats.innerHTML=t.code.length+" bytes, saved "+(100*(1-t.code.length/e.length)||0).toFixed(2)+"%"}else go_to_start()}var e=$in.value;if(last_input=e,!0===t)o();else try{o()}catch(t){show_error(t,e)}}$("header-link").onclick=go_to_start,$("btn-go").onclick=go,$btn_options.onclick=show_options,$btn_options_save.onclick=set_options,$("btn-options-reset").onclick=reset_options,$in.oninput=$in.onkeyup=$in.onblur=$in.onfocus=go_ait,$cb_as_i_type.onclick=set_options_ait,$out.onfocus=select_text,set_options_initial();var ait_timeout,ait_last_duration=50;function go_ait(){if($cb_as_i_type.checked){var t=$in.value;t===last_input||(last_input=t,clearTimeout(ait_timeout),ait_timeout=setTimeout(function(){var t=new Date;go(),ait_last_duration=new Date-t},ait_last_duration))}}function show_error(t,o){if(console.error("Error",t),hide("s-info s-output"),show("s-error"),t instanceof JS_Parse_Error){var e=o.split("\n"),n=e[t.line-1];t="Parse error: <strong>"+encodeHTML(t.message)+"</strong>\n<small>Line "+t.line+", column "+(t.col+1)+"</small>\n\n"+(e[t.line-2]?t.line-1+": "+encodeHTML(e[t.line-2])+"\n":"")+t.line+": "+encodeHTML(n.substr(0,t.col))+"<mark>"+encodeHTML(n.substr(t.col,1)||" ")+"</mark>"+encodeHTML(n.substr(t.col+1))+"\n"+(e[t.line]?t.line+1+": "+encodeHTML(e[t.line]):"")}else t=t instanceof Error?t.name+": <strong>"+encodeHTML(t.message)+"</strong>":"<strong>"+encodeHTML(t)+"</strong>";$error.innerHTML=t}function go_to_start(){return clearTimeout(ait_timeout),hide("s-options s-error s-output"),show("s-input s-info"),!1}function select_text(){var t=this;return t.select(),t.onmouseup=t.onkeyup=function(){return t.onmouseup=t.onkeyup=null,t.scrollTop=0,!1},!1}