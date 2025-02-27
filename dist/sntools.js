(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SNTools", [], factory);
	else if(typeof exports === 'object')
		exports["SNTools"] = factory();
	else
		root["SNTools"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 484:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ 285:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,r,i){var o=i&&i.toUpperCase();return r||n[i]||t[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,n){return e||n.slice(1)})})},n=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,o=/\d*[^\s\d-_:/()]+/,s={};var a=function(t){return function(e){this[t]=+e}},f=[/[+-]\d\d:?(\d\d)?/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=s[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[o,function(t){this.afternoon=h(t,!1)}],a:[o,function(t){this.afternoon=h(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,a("seconds")],ss:[i,a("seconds")],m:[i,a("minutes")],mm:[i,a("minutes")],H:[i,a("hours")],h:[i,a("hours")],HH:[i,a("hours")],hh:[i,a("hours")],D:[i,a("day")],DD:[r,a("day")],Do:[o,function(t){var e=s.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[i,a("month")],MM:[r,a("month")],MMM:[o,function(t){var e=u("months"),n=(u("monthsShort")||e.map(function(t){return t.substr(0,3)})).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};var c=function(t,r,i){try{var o=function(t){for(var r=(t=e(t,s&&s.formats)).match(n),i=r.length,o=0;o<i;o+=1){var a=r[o],f=d[a],u=f&&f[0],h=f&&f[1];r[o]=h?{regex:u,parser:h}:a.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,o=0;n<i;n+=1){var s=r[n];if("string"==typeof s)o+=s.length;else{var a=s.regex,f=s.parser,u=t.substr(o),h=a.exec(u)[0];f.call(e,h),t=t.replace(h,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}(r)(t),a=o.year,f=o.month,u=o.day,h=o.hours,c=o.minutes,m=o.seconds,l=o.milliseconds,M=o.zone,Y=new Date,v=u||(a||f?1:Y.getDate()),p=a||Y.getFullYear(),D=0;a&&!f||(D=f>0?f-1:Y.getMonth());var y=h||0,L=c||0,g=m||0,$=l||0;return M?new Date(Date.UTC(p,D,v,y,L,g,$+60*M.offset*1e3)):i?new Date(Date.UTC(p,D,v,y,L,g,$)):new Date(p,D,v,y,L,g,$)}catch(t){return new Date("")}};return function(t,e,n){n.p.customParseFormat=!0;var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var a=o[1];if("string"==typeof a){var f=!0===o[2],u=!0===o[3],h=f||u,d=o[2];u&&(d=o[2]),s=this.$locale(),!f&&d&&(s=n.Ls[d]),this.$d=c(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!==this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var m=a.length,l=1;l<=m;l+=1){o[1]=a[l-1];var M=n.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}l===m&&(this.$d=new Date(""))}else i.call(this,t)}}});


/***/ }),

/***/ 178:
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,function(){"use strict";return function(t,i,e){var s=i.prototype;e.utc=function(t){return new i({date:t,utc:!0,args:arguments})},s.utc=function(t){var i=e(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),"minute"):i},s.local=function(){return e(this.toDate(),{locale:this.$L,utc:!1})};var f=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),f.call(this,t)};var n=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else n.call(this)};var u=s.utcOffset;s.utcOffset=function(t,i){var e=this.$utils().u;if(e(t))return this.$u?0:e(this.$offset)?u.call(this):this.$offset;var s=Math.abs(t)<=16?60*t:t,f=this;if(i)return f.$offset=s,f.$u=0===t,f;if(0!==t){var n=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(f=this.local().add(s+n,"minute")).$offset=s,f.$x.$localOffset=n}else f=this.utc();return f};var o=s.format;s.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return o.call(this,i)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var r=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():r.call(this)};var a=s.diff;s.diff=function(t,i,s){if(t&&this.$u===t.$u)return a.call(this,t,i,s);var f=this.local(),n=e(t).local();return a.call(f,n,i,s)}}});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tools": () => (/* binding */ Tools)
/* harmony export */ });
const dayjs = __webpack_require__(484);

const customParseFormat = __webpack_require__(285);

const utc = __webpack_require__(178);

dayjs.extend(customParseFormat);
dayjs.extend(utc);
const dateFormat = 'YYYYMMDDTHHmmss';
class Tools {
  generateUUID() {
    const crypto = window.crypto || window.msCrypto;

    if (crypto) {
      const buf = new Uint32Array(4);
      crypto.getRandomValues(buf);
      let idx = -1;
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        idx++;
        const r = buf[idx >> 3] >> idx % 8 * 4 & 15;
        const v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    } else {
      let date = new Date().getTime();

      if (window.performance && typeof window.performance.now === 'function') {
        date += performance.now(); //use high-precision timer if available
      }

      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (date + Math.random() * 16) % 16 | 0;
        date = Math.floor(date / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }
  }

  strip(html) {
    if (typeof html !== 'string') {
      return '';
    }

    const tmp = document.implementation.createHTMLDocument('New').body;
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  loadXMLString(string, type) {
    let xmlDoc;

    if (window.DOMParser) {
      const parser = new DOMParser();
      xmlDoc = parser.parseFromString(string, `text/${type}`);
    } else {
      // Internet Explorer
      xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
      xmlDoc.async = false;
      xmlDoc.loadXML(string);
    }

    return xmlDoc;
  }

  downloadSNData(data, filename) {
    let textFile = null;

    const makeTextFile = function (text) {
      let data = new Blob([text], {
        type: 'text/json'
      }); // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.

      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }

      textFile = window.URL.createObjectURL(data); // returns a URL you can use as a href

      return textFile;
    };

    const file = makeTextFile(JSON.stringify(data, null, 2
    /* pretty print */
    ));
    const link = document.createElement('a');
    link.setAttribute('download', filename);
    link.href = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  convertENEXDatatoSN(data, stripHTML = false, defaultTagName = 'evernote') {
    const xmlDoc = this.loadXMLString(data, 'xml');
    const xmlNotes = xmlDoc.getElementsByTagName('note');
    const notes = [];
    const tags = [];
    let defaultTag;

    if (defaultTagName) {
      defaultTag = {
        uuid: this.generateUUID(),
        content_type: 'Tag',
        content: {
          title: defaultTagName,
          references: []
        }
      };
    }

    function findTag(title) {
      return tags.filter(function (tag) {
        return tag.content.title == title;
      })[0];
    }

    function addTag(tag) {
      tags.push(tag);
    }

    for (const [index, xmlNote] of [...xmlNotes].entries()) {
      const title = xmlNote.getElementsByTagName('title')[0].textContent;
      const created = xmlNote.getElementsByTagName('created')[0].textContent;
      const updatedNodes = xmlNote.getElementsByTagName('updated');
      const updated = updatedNodes.length ? updatedNodes[0].textContent : null;
      const contentNode = xmlNote.getElementsByTagName('content')[0];
      let contentXmlString;
      /** Find the node with the content */

      for (const node of contentNode.childNodes) {
        if (node instanceof CDATASection) {
          contentXmlString = node.nodeValue;
          break;
        }
      }

      const contentXml = this.loadXMLString(contentXmlString, 'html');
      let contentHTML = contentXml.getElementsByTagName('en-note')[0].innerHTML;

      if (stripHTML) {
        contentHTML = contentHTML.replace(/<\/div>/g, '</div>\n');
        contentHTML = contentHTML.replace(/<li[^>]*>/g, '\n');
        contentHTML = contentHTML.trim();
      }

      const text = stripHTML ? this.strip(contentHTML) : contentHTML;
      const note = {
        created_at: dayjs.utc(created, dateFormat).toDate(),
        updated_at: updated ? dayjs.utc(updated, dateFormat).toDate() : dayjs.utc(created, dateFormat).toDate(),
        uuid: this.generateUUID(),
        content_type: 'Note',
        content: {
          title: !title ? `Imported note ${index + 1} from Evernote` : title,
          text,
          references: []
        }
      };
      this.setClientUpdatedAt(note, note.updated_at);

      if (defaultTag) {
        defaultTag.content.references.push({
          content_type: 'Note',
          uuid: note.uuid
        });
      }

      const xmlTags = xmlNote.getElementsByTagName('tag');

      for (const tagXml of xmlTags) {
        const tagName = tagXml.childNodes[0].nodeValue;
        let tag = findTag(tagName);

        if (!tag) {
          tag = {
            uuid: this.generateUUID(),
            content_type: 'Tag',
            created_at: new Date(),
            updated_at: new Date(),
            content: {
              title: tagName,
              references: []
            }
          };
          addTag(tag);
        }

        note.content.references.push({
          content_type: tag.content_type,
          uuid: tag.uuid
        });
        tag.content.references.push({
          content_type: note.content_type,
          uuid: note.uuid
        });
      }

      notes.push(note);
    }

    let allItems = notes.concat(tags);

    if (defaultTag) {
      allItems.push(defaultTag);
    }

    let itemsData = {
      items: allItems
    };
    return itemsData;
  }

  convertGKeepNotes(rawNotes, stripHTML = false) {
    const finalNotes = [];

    for (const [index, note] of rawNotes.entries()) {
      var _element$getElementsB;

      const jsonNoteContent = this.parseJsonGKeepNote(note.content);

      if (jsonNoteContent) {
        finalNotes.push(jsonNoteContent);
        continue;
      } // Parse note html


      const element = document.createElement('html');
      element.innerHTML = note.content; // Try to get note content

      let content;

      try {
        const contentElement = element.getElementsByClassName('content')[0]; // Replace <br> with \n so line breaks get recognised

        contentElement.innerHTML = contentElement.innerHTML.replace(/<br>/g, '\n'); // Get note content, removing newline from todo lists

        if (stripHTML) {
          content = contentElement.textContent;
        } else {
          content = contentElement.innerHTML;
        }
      } catch (e) {
        // Invalid note, continue
        console.log(note.name, 'is an invalid note (no content)');
        continue;
      }

      let title = (_element$getElementsB = element.getElementsByClassName('title')[0]) === null || _element$getElementsB === void 0 ? void 0 : _element$getElementsB.textContent;

      if (!title) {
        title = `Imported note ${index + 1} from Google Keep`;
      } // Try to find creation date, usually before div.content or div.title


      const date = this.getDateFromGKeepNote(true, note.content) || this.getDateFromGKeepNote(false, note.content) || new Date();
      const noteResult = {
        created_at: date,
        updated_at: date,
        uuid: this.generateUUID(),
        content_type: 'Note',
        content: {
          title,
          text: content,
          references: []
        }
      };
      this.setClientUpdatedAt(noteResult, date);
      finalNotes.push(noteResult);
    }

    return {
      'items': finalNotes
    };
  }

  getDateFromGKeepNote(withTitle, note) {
    let regex;

    if (withTitle) {
      regex = /.*(?=<\/div>\n<div class="title">)/;
    } else {
      regex = /.*(?=<\/div>\n\n<div class="content">)/;
    }

    const dateString = regex.exec(note); // Check if string exists at all

    if (dateString && dateString[0]) {
      const parsedDate = dayjs.utc(dateString).toDate(); // Check if string is valid date

      if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
      }
    }

    return false;
  }

  parseJsonGKeepNote(content) {
    try {
      const parsed = JSON.parse(content);
      const date = dayjs(parsed.userEditedTimestampUsec / 1000).toDate();
      return {
        created_at: date,
        updated_at: date,
        uuid: this.generateUUID(),
        content_type: 'Note',
        content: {
          title: parsed.title,
          text: parsed.textContent,
          references: [],
          appData: {
            'org.standardnotes.sn': {
              'client_updated_at': date,
              archived: Boolean(parsed.isArchived),
              trashed: Boolean(parsed.isTrashed),
              pinned: Boolean(parsed.isPinned)
            }
          }
        }
      };
    } catch (e) {
      return null;
    }
  }

  setClientUpdatedAt(item, date) {
    item.content.appData = {
      'org.standardnotes.sn': {
        'client_updated_at': date
      }
    };
  }

  convertPlaintextFiles(files, completion) {
    let index = 0;
    const processedData = [];
    const dateString = new Date().toLocaleDateString().replace(/\//g, '-');
    const defaultTag = {
      uuid: this.generateUUID(),
      content_type: 'Tag',
      content: {
        title: `${dateString}-import`,
        references: []
      }
    };
    processedData.push(defaultTag);

    const readNext = function () {
      const file = files[index];
      index++;
      const reader = new FileReader();

      reader.onload = function (e) {
        const data = e.target.result;
        const note = {
          created_at: new Date(file.lastModified),
          updated_at: new Date(file.lastModified),
          uuid: this.generateUUID(),
          content_type: 'Note',
          content: {
            title: file.name.split('.')[0],
            text: data,
            references: []
          }
        };
        this.setClientUpdatedAt(note, note.updated_at);
        processedData.push(note);
        defaultTag.content.references.push({
          content_type: 'Note',
          uuid: note.uuid
        });

        if (index < files.length) {
          readNext();
        } else {
          completion({
            items: processedData
          });
        }
      }.bind(this);

      reader.readAsText(file);
    }.bind(this);

    readNext();
  }

  convertAegisFile(file) {
    const processedData = [];
    const dateString = new Date().toLocaleDateString().replace(/\//g, "-");
    const defaultTag = {
      uuid: this.generateUUID(),
      content_type: "Tag",
      content: {
        title: `${dateString}-import`,
        references: []
      }
    };
    processedData.push(defaultTag);
    const data = this.parseJsonAegis(file.content);
    const note = {
      created_at: new Date(file.lastModified),
      updated_at: new Date(file.lastModified),
      uuid: this.generateUUID(),
      content_type: "Note",
      content: {
        title: file.name.split(".")[0],
        text: data,
        references: []
      }
    };
    this.setClientUpdatedAt(note, note.updated_at);
    processedData.push(note);
    defaultTag.content.references.push({
      content_type: "Note",
      uuid: note.uuid
    });
    return {
      items: processedData
    };
  }

  parseJsonAegis(file) {
    try {
      const json = JSON.parse(file);
      const entries = json.db.entries.map(entry => {
        return {
          service: entry.issuer,
          account: entry.name,
          secret: entry.info.secret,
          notes: entry.note
        };
      });
      return JSON.stringify(entries);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  convertSimplenoteFiles(rawNotes) {
    const finalNotes = [];

    for (const note of rawNotes) {
      const jsonNoteContent = this.parseJsonSimplenote(note);

      if (jsonNoteContent) {
        finalNotes.push(...jsonNoteContent);
        continue;
      }
    }

    return {
      'items': finalNotes
    };
  }

  parseJsonSimplenote(note) {
    const processParsedNotes = (notes, trashed = false) => {
      return notes.reverse().map(noteItem => {
        const createDate = dayjs.utc(noteItem.creationDate, dateFormat).toDate();
        const updateDate = dayjs.utc(noteItem.lastModified, dateFormat).toDate();
        const noteContent = noteItem.content.split('\r\n');
        let title;
        let content;

        if (noteContent.length === 2 && noteContent[1].length > 0) {
          title = noteContent[0];
          content = noteContent[1];
        } else {
          title = note.name.split('.')[0];
          content = noteItem.content;
        }

        return {
          created_at: createDate,
          updated_at: updateDate,
          uuid: this.generateUUID(),
          content_type: 'Note',
          content: {
            title,
            text: content,
            references: [],
            appData: {
              'org.standardnotes.sn': {
                'client_updated_at': updateDate,
                trashed
              }
            }
          }
        };
      });
    };

    try {
      const parsed = JSON.parse(note.content);
      const activeNotes = processParsedNotes(parsed.activeNotes);
      const trashedNotes = processParsedNotes(parsed.trashedNotes, true);
      return [...activeNotes, ...trashedNotes];
    } catch (e) {
      return null;
    }
  }

}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});