(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(6),c=n(11),i=n(7),s=n(12),l=n(0),o=n.n(l),u=n(8),m=n.n(u),d=(n(19),n(2)),p=n(9),h=n(10);d.b.add(h.a);var y=function(e){return o.a.createElement("div",null,e.recipeList.map(function(e,t){return o.a.createElement(k,{name:e.name,key:t})}))},k=function(e){return o.a.createElement("div",{className:"recipe"},e.name)},g=function(e){return o.a.createElement("form",null,o.a.createElement("input",{onChange:e.handleChange,placeholder:"Search Text Here"}),o.a.createElement("button",{onClick:e.selectRecipes},"SEARCH"))},v=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,e.selectedRecipe.name),o.a.createElement("h2",null,"Ingredients:"),o.a.createElement("ul",null,e.selectedRecipe.ingredients.map(function(e){return o.a.createElement("li",null,e)})))},E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={recipeList:[{id:1,name:"Roasted turkey",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:2,name:"Fried pork",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:3,name:"Beef rice",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:4,name:"Lamb rice",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:5,name:"Turkey salad",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:6,name:"Cesar salad",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:7,name:"Duck soup",ingredients:["duck","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]},{id:8,name:"Beef pizza",ingredients:["turkey","mustard","greens","celery","potato"],instructions:["pre-heat over to 350","tickle the turkey","cut some celery"]}],searchVal:"",selectedRecipes:[]},n.handleChange=function(e){n.setState({searchVal:e.target.value})},n.selectRecipes=function(e){e.preventDefault();var t=n.state.recipeList.filter(function(e){return-1!==e.name.toLowerCase().indexOf(n.state.searchVal)});n.setState({selectedRecipes:t})},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement("div",{id:"topbar",className:"row"},o.a.createElement(p.a,{className:"fa-2x",icon:"utensils"}),o.a.createElement("h1",null,"RecipeApp")),o.a.createElement("div",{id:"content",className:"row"},o.a.createElement("div",{id:"left-pane",classname:"col"},o.a.createElement(g,{handleChange:this.handleChange,selectRecipes:this.selectRecipes,value:this.state.searchVal}),o.a.createElement(y,{recipeList:this.state.selectedRecipes})),o.a.createElement("div",{id:"right-pane",className:"col"},this.state.selectedRecipes.length>0?o.a.createElement(v,{selectedRecipe:this.state.selectedRecipes[0]}):o.a.createElement("div",null," "))))}}]),t}(o.a.Component);m.a.render(o.a.createElement(E,null),document.getElementById("root"))},19:function(e,t,n){}},[[13,2,1]]]);
//# sourceMappingURL=main.c24a727b.chunk.js.map