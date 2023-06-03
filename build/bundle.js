var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function u(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t){return document.createElement(t)}function i(){return t=" ",document.createTextNode(t);var t}let a;function d(t){a=t}const p=[],y=[];let v=[];const f=[],m=Promise.resolve();let k=!1;function b(t){v.push(t)}const h=new Set;let $=0;function g(){if(0!==$)return;const t=a;do{try{for(;$<p.length;){const t=p[$];$++,d(t),x(t.$$)}}catch(t){throw p.length=0,$=0,t}for(d(null),p.length=0,$=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];h.has(n)||(h.add(n),n())}v.length=0}while(p.length);for(;f.length;)f.pop()();k=!1,h.clear(),d(t)}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const w=new Set;function _(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];v.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),v=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function F(t,n){-1===t.$$.dirty[0]&&(p.push(t),k||(k=!0,m.then(g)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(l,s,r,i,p,y,v,f=[-1]){const m=a;d(l);const k=l.$$={fragment:null,ctx:[],props:y,update:t,not_equal:p,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:s.target||m.$$.root};v&&v(k.root);let h=!1;if(k.ctx=r?r(l,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return k.ctx&&p(k.ctx[t],k.ctx[t]=o)&&(!k.skip_bound&&k.bound[t]&&k.bound[t](o),h&&F(l,t)),n})):[],k.update(),h=!0,o(k.before_update),k.fragment=!!i&&i(k.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);k.fragment&&k.fragment.l(t),t.forEach(c)}else k.fragment&&k.fragment.c();s.intro&&(($=l.$$.fragment)&&$.i&&(w.delete($),$.i(x))),function(t,e,l,s){const{fragment:c,after_update:r}=t.$$;c&&c.m(e,l),s||b((()=>{const e=t.$$.on_mount.map(n).filter(u);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),r.forEach(b)}(l,s.target,s.anchor,s.customElement),g()}var $,x;d(m)}class B{$destroy(){_(this,1),this.$destroy=t}$on(n,e){if(!u(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(n){let e,o,u;return{c(){e=r("h1"),e.innerHTML="<center>Simple Calculator</center>",o=i(),u=r("body"),u.innerHTML='<table id="calcu" class="svelte-l4aiud"><tr><td colspan="3"><input type="text" id="result" class="svelte-l4aiud"/></td> \n            \n            <td><input type="button" value="c" onclick="clr()" class="svelte-l4aiud"/></td></tr> \n        <tr><td><input type="button" value="1" onclick="dis(&#39;1&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="2" onclick="dis(&#39;2&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="3" onclick="dis(&#39;3&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="/" onclick="dis(&#39;/&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td></tr> \n        <tr><td><input type="button" value="4" onclick="dis(&#39;4&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="5" onclick="dis(&#39;5&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="6" onclick="dis(&#39;6&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="*" onclick="dis(&#39;*&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td></tr> \n        <tr><td><input type="button" value="7" onclick="dis(&#39;7&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="8" onclick="dis(&#39;8&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="9" onclick="dis(&#39;9&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="-" onclick="dis(&#39;-&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td></tr> \n        <tr><td><input type="button" value="0" onclick="dis(&#39;0&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            <td><input type="button" value="." onclick="dis(&#39;.&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td> \n            \n            <td><input type="button" value="=" onclick="solve()" class="svelte-l4aiud"/></td> \n  \n            <td><input type="button" value="+" onclick="dis(&#39;+&#39;)" onkeydown="myFunction(event)" class="svelte-l4aiud"/></td></tr></table> \n  \n    <script>// Function to display input\n        function dis(val) {\n            document.getElementById("result").value += val\n        }\n  \n        function myFunction(event) {\n            if (event.key == \'0\' || event.key == \'1\' \n                || event.key == \'2\' || event.key == \'3\'\n                || event.key == \'4\' || event.key == \'5\' \n                || event.key == \'6\' || event.key == \'7\'\n                || event.key == \'8\' || event.key == \'9\' \n                || event.key == \'+\' || event.key == \'-\'\n                || event.key == \'*\' || event.key == \'/\')\n                document.getElementById("result").value += event.key;\n        }\n  \n        var cal = document.getElementById("calcu");\n        cal.onkeyup = function (event) {\n            if (event.keyCode === 13) {\n                console.log("Enter");\n                let x = document.getElementById("result").value\n                console.log(x);\n                solve();\n            }\n        }\n  \n       function solve() {\n    let expression = document.getElementById("result").value;\n    let result = evaluateExpression(expression);\n    document.getElementById("result").value = result;\n}\n\nfunction evaluateExpression(expression) {\n    // Split the expression into numbers and operators\n    let numbers = expression.split(/\\+|\\-|\\*|\\//g);\n    let operators = expression.replace(/[0-9]|\\./g, "").split("");\n\n    // Perform the calculations\n    let result = parseFloat(numbers[0]);\n    for (let i = 0; i < operators.length; i++) {\n        let number = parseFloat(numbers[i + 1]);\n        let operator = operators[i];\n\n        switch (operator) {\n            case "+":\n                result += number;\n                break;\n            case "-":\n                result -= number;\n                break;\n            case "*":\n                result *= number;\n                break;\n            case "/":\n                result /= number;\n                break;\n        }\n    }\n\n    return result.toString();\n}\n        function clr() {\n            document.getElementById("result").value = ""\n        }<\/script>'},m(t,n){s(t,e,n),s(t,o,n),s(t,u,n)},p:t,i:t,o:t,d(t){t&&c(e),t&&c(o),t&&c(u)}}}return new class extends B{constructor(t){super(),E(this,t,null,I,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
