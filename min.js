var hyperStyle=function(){"use strict";var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){t=t?t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),e.getAttributeNode("style"));return t.value="",e.setAttributeNode(t),r(t,!0)}(e,t):r(e.style,!1)};function a(e,t,r){return t+"-"+r.toLowerCase()}function r(o,i){var u,s;return function(e){var t,r,n;switch(typeof e){case"object":if(e){if("object"===u){if(!i&&s!==e)for(r in s)r in e||(o[r]="")}else i?o.value="":o.cssText="";for(r in t=i?{}:o,e)n="number"!=typeof(n=e[r])||c.test(r)?n:n+"px",!i&&/^--/.test(r)?t.setProperty(r,n):t[r]=n;u="object",i?o.value=function(e){var t,r=[];for(t in e)r.push(t.replace(f,a),":",e[t],";");return r.join("")}(s=t):s=e;break}default:s!=e&&(u="string",s=e,i?o.value=e||"":o.cssText=e||"")}}}}();