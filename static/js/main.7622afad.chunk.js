(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(3),o=s.n(n),r=s(4),i=s(5),c=s(7),a=s(6),l=s(1),h=s.n(l),p=(s(12),s(13),s(0)),d=function(e){var t=e.goods;return Object(p.jsx)("ul",{className:"goods-list",children:t.map((function(e){return Object(p.jsx)("li",{className:"goods-list__item",children:e},e)}))})},u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(c.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={goods:u,isShowGoods:!1,isReversed:!1,isSortedByLength:!1,isSortedByAlphabet:!1,minWordsLength:1},e.listOpener=function(){e.setState({isShowGoods:!0})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByLength=function(){e.setState({isSortedByLength:!0,isSortedByAlphabet:!1,isReversed:!1})},e.sortByAlphabet=function(){e.setState({isSortedByLength:!1,isSortedByAlphabet:!0,isReversed:!1})},e.reset=function(){e.setState({isReversed:!1,isSortedByLength:!1,isSortedByAlphabet:!1,minWordsLength:1})},e.setLength=function(t){e.setState({minWordsLength:Number(t.target.value)})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.goods,s=e.isShowGoods,n=e.isReversed,o=e.isSortedByLength,r=e.isSortedByAlphabet,i=e.minWordsLength,c=t.filter((function(e){return e.length>=i}));return o&&c.sort((function(e,t){return e.length-t.length})),r&&c.sort((function(e,t){return e.localeCompare(t)})),n&&c.reverse(),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"App__title",children:"Goods"}),Object(p.jsx)("div",{className:"App__start-container",children:!s&&Object(p.jsx)("button",{className:"App__start-button",type:"button",onClick:this.listOpener,children:"Start"})}),s&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"App__button",onClick:this.reverse,type:"button",children:"Reverse"}),Object(p.jsx)("button",{className:"App__button",onClick:this.sortByLength,type:"button",children:"Sort by length"}),Object(p.jsx)("button",{className:"App__button",onClick:this.sortByAlphabet,type:"button",children:"Sort by alphabet"}),Object(p.jsx)("button",{className:"App__button App__button--reset",onClick:this.reset,type:"button",children:"Reset"}),Object(p.jsxs)("div",{className:"App__wrapper",children:[Object(p.jsx)(d,{goods:c}),Object(p.jsx)("label",{className:"App__goods",children:Object(p.jsx)("select",{className:"App__goods-select",name:"select",onChange:this.setLength,value:i,children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(p.jsx)("option",{className:"App__option",value:e,children:e},e)}))})})]})]})]})}}]),s}(h.a.Component),j=b;o.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7622afad.chunk.js.map