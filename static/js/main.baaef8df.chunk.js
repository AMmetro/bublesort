(this.webpackJsonpbublesort=this.webpackJsonpbublesort||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),s=n(7),c=n.n(s),i=(n(13),n(8)),o=n(2),u=n(3),b=n(5),j=n(4),l=(n(14),n(0)),h=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"chartWrapper",children:this.props.randomArray&&this.props.randomArray.map((function(t,e){return Object(l.jsx)("div",{className:"char",style:{height:t,bottom:t},children:Object(l.jsx)("span",{style:{fontSize:10},children:t})})}))})}}]),n}(a.a.Component),p=(n(16),n(17),n.p+"static/media/buble.b19a8653.png"),d=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"headerWrapper",children:[Object(l.jsx)("h1",{children:" Bubble sort "}),Object(l.jsx)("img",{src:p,className:"imgBubble"})]})}}]),n}(a.a.Component),f=(n(18),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"footerWrapper",children:[Object(l.jsx)("span",{className:"InfoStatus",children:this.props.status}),Object(l.jsx)("button",{className:"button",onClick:this.props.startSort,children:"Start sort"}),Object(l.jsx)("button",{className:"button",onClick:this.props.newSet,children:"New Set"})]})}}]),n}(a.a.Component)),O=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).componentDidMount=function(){r.generateArray()},r.generateArray=function(){for(var t=[],e=0;e<20;e++)t.push(Math.round(200*Math.random()));r.setState({arr:t}),r.setState({iteration:20})},r.startSort=function(){r.setState({status:"in progress"});var t=Object(i.a)(r.state.arr),e=[],n=setInterval((function(){a()}),300),a=function(){e=function(t){for(var e=0;e<t.length;e++)if(t[e]>t[e+1]){var n=t[e];t[e]=t[e+1],t[e+1]=n}return t}(t);var a=r.state.iteration-1;r.setState({arr:e}),r.setState({iteration:a}),0==a&&(clearTimeout(n),r.setState({status:"Solved"}))}},r.state={arr:[],status:"Not solved",iteration:20},r}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(h,{randomArray:this.state.arr}),Object(l.jsx)(f,{startSort:this.startSort,newSet:this.generateArray,status:this.state.status})]})}}]),n}(a.a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),s(t),c(t)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.baaef8df.chunk.js.map