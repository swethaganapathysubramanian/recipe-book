(this.webpackJsonprecipebook=this.webpackJsonprecipebook||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"recipe_recipe__2a3VJ",pulse:"recipe_pulse__3hdUZ",image:"recipe_image__1y6xn"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),l=(a(12),a(2)),o=a.n(l),s=a(6),u=a(1),m=(a(14),a(3)),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients,i=e.source;return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",{className:"recipetitle"},t),c.a.createElement("p",null,"Calories: ",parseInt(a)," Kcal"),c.a.createElement("img",{src:n,alt:"",className:p.a.image}),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("a",{href:i,target:"_blank"},"Get the recipe !!")),c.a.createElement("br",null))},h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),m=l[0],p=l[1],h=Object(n.useState)("Nachos"),b=Object(u.a)(h,2),E=b[0],d=b[1];Object(n.useEffect)((function(){g()}),[E]);var g=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("ce9f6c88","&app_key=").concat("a12fadf3ac37e652207889c19825025b"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"}," ",c.a.createElement("br",null),"Recipe Book - Search Any Recipe"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(m),p("")},className:"search-form"},c.a.createElement("input",{type:"text",className:"search-bar",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"search-button"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,source:e.recipe.url})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.554e8e78.chunk.js.map