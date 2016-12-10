/*!
 * stuQuery v1.0.4
 */
var eventcache={};function S(g){function d(m,e){var s=new Array();var q,r,p,n,l,o;if(e.indexOf(":eq")>=0){q=e.split(" ");for(p=0;p<q.length;p++){if(p==0){o=i(m,q[p])}else{r=new Array();for(n=0;n<o.length;n++){r=r.concat(i(o[n],q[p]))}o=r.splice(0)}}}else{o=m.querySelectorAll(e)}for(l=0;l<o.length;l++){s.push(o[l])}return s}function i(q,p){var o=-1;var n=new Array();if(p.indexOf(":eq")>0){var l=p.replace(/(.*)\:eq\(([0-9]+)\)/,"$1 $2").split(" ");p=l[0];o=parseInt(l[1])}if(p[0]=="."){els=q.getElementsByClassName(p.substr(1))}else{if(p[0]=="#"){els=q.getElementById(p.substr(1))}else{els=q.getElementsByTagName(p)}}if(!els){els=[]}if(els.nodeName&&els.nodeName=="SELECT"){n.push(els)}else{if(typeof els.length!=="number"){els=[els]}for(k=0;k<els.length;k++){n.push(els[k])}if(o>=0&&n.length>0){if(o<n.length){n=[n[o]]}else{n=[]}}}return n}function c(o,n){var l=false;if(n[0]=="."){n=n.substr(1);for(var m=0;m<o.classList.length;m++){if(o.classList[m]==n){return true}}}else{if(n[0]=="#"){if(o.id==n.substr(1)){return true}}else{if(o.tagName==n.toUpperCase()){return true}}}return false}function f(e){var m;if(typeof e==="string"){this.e=d(document,e)}else{if(typeof e==="object"){this.e=(typeof e.length=="number")?e:[e]}}for(var l in this.e){this[l]=this.e[l]}this.length=(this.e?this.e.length:0);return this}f.prototype.ready=function(e){/in/.test(document.readyState)?setTimeout("S(document).ready("+e+")",9):e()};f.prototype.html=function(l){if(typeof l==="number"){l=""+l}if(typeof l!=="string"&&this.length==1){return this[0].innerHTML}if(typeof l==="string"){for(var e=0;e<this.length;e++){this[e].innerHTML=l}}return this};f.prototype.append=function(l){if(!l&&this.length==1){return this[0].innerHTML}if(l){for(var e=0;e<this.length;e++){this[e].innerHTML+=l}}return this};f.prototype.prepend=function(l){if(!l&&this.length==1){return this[0].innerHTML}if(l){for(var m=0;m<this.length;m++){this[m].innerHTML=l+this[m].innerHTML}}return this};f.prototype.before=function(n){var m,p,o,l;for(m=0;m<this.length;m++){p=document.createElement("div");p.innerHTML=n;o=p.childNodes;for(l=0;l<o.length;l++){this[m].parentNode.insertBefore(o[l],this[m])}}return this};f.prototype.after=function(l){for(var e=0;e<this.length;e++){this[e].insertAdjacentHTML("afterend",l)}return this};function b(e,m){if(e&&e.length>0){for(var l=0;l<e.length;l++){if(e[l].node==m){return{success:true,match:l}}}}return{success:false}}function j(p,n,m,l,o){if(!eventcache[n]){eventcache[n]=new Array()}eventcache[n].push({node:p,fn:m,fn2:l,data:o})}function h(n){if(eventcache[n.type]){var l=b(eventcache[n.type],n.currentTarget);if(l.success){if(l.match.data){n.data=eventcache[n.type][l.match].data}return{fn:eventcache[n.type][l.match].fn,data:n}}}return function(){return{fn:""}}}f.prototype.off=function(n){if(typeof Element.prototype.removeEventListener!=="function"){Element.prototype.removeEventListener=function(t,q){if(!oListeners.hasOwnProperty(t)){return}var p=oListeners[t];for(var m=-1,o=0;o<p.aEls.length;o++){if(p.aEls[o]===this){m=o;break}}if(m===-1){return}for(var s=0,r=p.aEvts[m];s<r.length;s++){if(r[s]===q){r.splice(s,1)}}}}for(var l=0;l<this.length;l++){var e=b(eventcache[n],this.e[l]);if(e.success){this[l].removeEventListener(n,eventcache[n][e.match].fn2,false);eventcache[n].splice(e.match,1)}}return this};f.prototype.on=function(n,o,m){n=n||window.event;this.cache=[4,5,6];if(typeof o==="function"&&!m){m=o;o=""}if(typeof m!=="function"){return this}if(this.length>0){var p=this;var e=function(q){var r=h({currentTarget:this,type:n,data:o,originalEvent:q,preventDefault:function(){if(q.preventDefault){q.preventDefault()}},stopPropagation:function(){if(q.stopImmediatePropagation){q.stopImmediatePropagation()}if(q.stopPropagation){q.stopPropagation()}if(q.cancelBubble!=null){q.cancelBubble=true}}});if(typeof r.fn==="function"){return r.fn.call(p,r.data)}};for(var l=0;l<this.length;l++){j(this[l],n,m,e,o);if(this[l].addEventListener){this[l].addEventListener(n,e,false)}else{if(this[l].attachEvent){this[l].attachEvent(n,e)}}}}return this};f.prototype.trigger=function(n){var m;if(document.createEvent){m=document.createEvent("HTMLEvents");m.initEvent(n,true,true)}else{m=document.createEventObject();m.eventType=n}m.eventName=n;for(var l=0;l<this.length;l++){if(document.createEvent){this[l].dispatchEvent(m)}else{this[l].fireEvent("on"+m.eventType,m)}}return this};f.prototype.focus=function(){if(this.length==1){this[0].focus()}return this};f.prototype.blur=function(){if(this.length==1){this[0].blur()}return this};f.prototype.remove=function(){if(this.length<1){return this}for(var e=this.length-1;e>=0;e--){if(!this[e]){return}if(typeof this[e].remove==="function"){this[e].remove()}else{if(typeof this[e].parentElement.removeChild==="function"){this[e].parentElement.removeChild(this[e])}}}return this};f.prototype.hasClass=function(l){var e=true;for(var m=0;m<this.length;m++){if(!this[m].className.match(new RegExp("(\\s|^)"+l+"(\\s|$)"))){e=false}}return e};f.prototype.toggleClass=function(e){for(var l=0;l<this.length;l++){if(this[l].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this[l].className=this[l].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"")}else{this[l].className=(this[l].className+" "+e).replace(/^ /,"")}}return this};f.prototype.addClass=function(e){for(var l=0;l<this.length;l++){if(!this[l].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this[l].className=(this[l].className+" "+e).replace(/^ /,"")}}return this};f.prototype.removeClass=function(e){for(var l=0;l<this.length;l++){while(this[l].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this[l].className=this[l].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"").replace(/^ /,"")}}return this};f.prototype.css=function(n){var p;for(var m=0;m<this.length;m++){p={};var o=this[m].getAttribute("style");if(o){var r=this[m].getAttribute("style").split(";");for(var l=0;l<r.length;l++){var q=r[l].split(":");if(q.length==2){p[q[0]]=q[1]}}}if(typeof n==="object"){for(key in n){p[key]=n[key]}var e="";for(key in p){if(e){e+=";"}if(p[key]){e+=key+":"+p[key]}}this[m].setAttribute("style",e)}}if(this.length==1&&typeof n==="string"){return p[n]}return this};f.prototype.parent=function(){var l=[];for(var e=0;e<this.length;e++){l.push(this[e].parentElement)}return S(l)};f.prototype.children=function(n){if(typeof n==="string"){var e=[];for(var l=0;l<this.length;l++){for(var m=0;m<this[l].children.length;m++){if(c(this[l].children[m],n)){e.push(this[l].children[m])}}}return S(e)}else{for(var l=0;l<this.length;l++){this[l]=(this[l].children.length>n?this[l].children[n]:this[l])}return this}};f.prototype.find=function(l){var n=[];var e=new Array();for(var m=0;m<this.length;m++){e=e.concat(d(this[m],l))}return S(e)};function a(q,e,r,l){var p=[];for(var o=0;o<q.length;o++){p.push(q[o].getAttribute(e));var n=false;for(var m in l){if(typeof r===l[m]){n=true}}if(n){if(r){q[o].setAttribute(e,r)}else{q[o].removeAttribute(e)}}}if(p.length==1){p=p[0]}if(typeof r==="undefined"){return p}else{return q}}f.prototype.attr=function(e,l){return a(this,e,l,["string","number"])};f.prototype.prop=function(e,l){return a(this,e,l,["boolean"])};f.prototype.clone=function(){var e=document.createElement("div");e.appendChild(this[0].cloneNode(true));return e.innerHTML};f.prototype.replaceWith=function(l){var m=document.createElement("span");m.innerHTML=l;var n=S(this.e);for(var e=0;e<this.length;e++){n[0].parentNode.replaceChild(m,n[0])}return n};f.prototype.ajax=function(n,m){if(typeof n!=="string"){return false}if(!m){m={}}m.url=n+(typeof m.cache==="boolean"&&!m.cache?"?"+(new Date()).valueOf():"");var p=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");p.addEventListener("load",e);p.addEventListener("error",l);function e(q){if(p.status===200){m.header=p.getAllResponseHeaders();if(typeof m.complete==="function"){m.complete.call((m["this"]?m["this"]:this),(m.dataType=="json")?JSON.parse(p.responseText):p.responseText,m)}}else{l(q)}}function l(q){if(typeof m.error==="function"){m.error.call((m["this"]?m["this"]:this),q,m)}}try{p.open("GET",n)}catch(o){l(o)}try{p.send()}catch(o){l(o)}return this};f.prototype.loadJSON=function(l,m,e){if(!e){e={}}e.dataType="json";e.complete=m;this.ajax(l,e);return this};return new f(g)};

var filestoload = 0;
var filesloaded = 0;
var loadedfns = [];

S(document).ready(function(){
	// If we have SSI includes in the page, these haven't been 
	// processed by the server so fake it with Javascript.
	var html = document.documentElement.outerHTML;
	var matches = html.match(/<!-- ?#include virtual="([^\"]+)" ?-->/g);
	if(matches && matches.length > 0){
		filesloaded = 0;
		for(var i = 0; i < matches.length; i++){
			var file = matches[i].replace(/<!-- ?#include virtual="([^\"]+)" ?-->/,function(m,s){ return s; })
			filestoload++;
			S(document).ajax(file,{
				'file':file,
				'match':matches[i],
				'complete': function(d,b){
					filesloaded++;
					if(b.file=="nav.txt"){
						S('.page').before(d);
					}else if(b.file=="head.txt"){
						var js = document.createElement('script');
						js.setAttribute('type', 'text/javascript');
						var loc = (location.href.indexOf("/people/")>=0) ? "search.js" : (location.href.indexOf("/shows/")>=0 ? "../people/search.js" : "people/search.js");
						js.setAttribute('src', loc);
						js.onerror = function(e){ console.log('here',e); }
						document.getElementsByTagName('head')[0].appendChild(js);
					}
				},
				'error': function(e){ console.log(e) }
			});
		}
	}
	
	function offset(el){
		var rect = el.getBoundingClientRect();
		return {
			top: rect.top + document.body.scrollTop,
			left: rect.left + document.body.scrollLeft
		}
	}

	if(S('.main').e.length > 0){
		S(document).on('scroll',function(e){
			var main = S('.main');
			if(S('.header').e.length==0){
				var tr = S('.main tr:eq(0)');
				var str = tr.html();
				str = str.replace("Comedy panel shows","");
				S('body').append('<div class="header"><table>'+str+'</table></div>');
			}
			var head = S('.header');

			if(head.e.length == 1 && main.e.length == 1){
				var o = offset(main.e[0]);
				if(document.body.scrollTop > o.top && document.body.scrollTop < o.top+main.e[0].offsetHeight) head.css({'display':'block'})
				else head.css({'display':'none'});
			}
		});
	}
});