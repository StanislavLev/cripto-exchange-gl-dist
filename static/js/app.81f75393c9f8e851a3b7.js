webpackJsonp([1],{"4gKV":function(e,t){},"8XxQ":function(e,t){},FxNT:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n=a("Xxa5"),s=a.n(n),c=a("exGp"),i=a.n(c),o={name:"Exchange",data:function(){return{exchanges:ccxt.exchanges,exchangeSearch:""}},methods:{findPair:function(e){var t=this;i()(s.a.mark(function a(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new ccxt[e]).enableRateLimit=!0,t.prev=2,t.next=5,r.loadMarkets();case 5:f.$emit("exchangeChosen",r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),f.$emit("exchangeChosenErr","Failed to fetch the exchange info, please try another one.");case 11:case"end":return t.stop()}},a,t,[[2,8]])}))()}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"height100"},[a("div",{staticClass:"header-container"},[a("h2",{staticClass:"text-center"},[e._v("Exchange")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.exchangeSearch,expression:"exchangeSearch"}],attrs:{type:"text",placeholder:"Type an exchange name"},domProps:{value:e.exchangeSearch},on:{input:function(t){t.target.composing||(e.exchangeSearch=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"items-container"},[a("ul",e._l(e.exchanges,function(t){return a("li",{directives:[{name:"show",rawName:"v-show",value:-1!=t.toLowerCase().indexOf(e.exchangeSearch.toLowerCase()),expression:"exchange.toLowerCase().indexOf(exchangeSearch.toLowerCase())!=-1"}],on:{click:function(a){e.findPair(t)}}},[e._v(e._s(t))])}))])])},staticRenderFns:[]};var h=a("VU/8")(o,l,!1,function(e){a("4gKV")},"data-v-d325546a",null).exports,d={name:"Pair",data:function(){return{errMsg:"",currExchange:{},pairSearch:""}},methods:{findTrades:function(e,t){f.$emit("PairChosen",e,t)}},created:function(){var e=this;f.$on("exchangeChosen",function(t){e.currExchange=t,e.errMsg=""}),f.$on("exchangeChosenErr",function(t){e.errMsg=t,e.currExchange={}})}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"height100"},[a("div",{staticClass:"header-container"},[a("h2",{staticClass:"text-center"},[e._v("Pair "),a("small",[e._v("for: "+e._s(e.currExchange.id))])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pairSearch,expression:"pairSearch"}],attrs:{type:"text",placeholder:"Type a pair name"},domProps:{value:e.pairSearch},on:{input:function(t){t.target.composing||(e.pairSearch=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"items-container"},[a("h4",{directives:[{name:"show",rawName:"v-show",value:!e.currExchange.symbols&&!e.errMsg,expression:"!currExchange.symbols && !errMsg"}],staticClass:"text-center"},[e._v("Chose an exchange")]),e._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:e.errMsg,expression:"errMsg"}],staticClass:"text-center"},[e._v(e._s(e.errMsg))]),e._v(" "),a("ul",e._l(e.currExchange.symbols,function(t){return a("li",{directives:[{name:"show",rawName:"v-show",value:-1!=t.toLowerCase().indexOf(e.pairSearch.toLowerCase()),expression:"pair.toLowerCase().indexOf(pairSearch.toLowerCase())!=-1"}],on:{click:function(a){e.findTrades(e.currExchange,t)}}},[e._v(e._s(t))])}))])])},staticRenderFns:[]};var u=a("VU/8")(d,v,!1,function(e){a("FxNT")},"data-v-640a2899",null).exports,p={name:"Trades",data:function(){return{dateNow:new Date,errMsg:"",exchange:{},pair:"",allTrades:[],limit:20,fetchTradesInterval:void 0}},created:function(){var e=this;f.$on("PairChosen",function(t,a){e.allTrades=[],e.errMsg="",e.exchange=t,e.pair=a;e.fetchTradesInterval&&clearInterval(e.fetchTradesInterval),e.fetchTradesInterval=setInterval(i()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.exchange.has.fetchTrades){a.next=14;break}return a.prev=1,a.next=4,t.fetchTrades(e.pair,void 0,e.limit);case 4:e.allTrades=a.sent,0==e.allTrades.length?e.errMsg="There is no data available.":e.allTrades.reverse(),e.dateNow=new Date,a.next=14;break;case 9:a.prev=9,a.t0=a.catch(1),e.errMsg="Failed to fetch the trades info, please try another pair or exchange.",e.allTrades=[],e.fetchTradesInterval&&clearInterval(e.fetchTradesInterval);case 14:case"end":return a.stop()}},a,e,[[1,9]])})),2e3)}),f.$on("exchangeChosenErr",function(t){e.exchange={},e.pair="",e.allTrades=[],e.errMsg="",e.fetchTradesInterval&&clearInterval(e.fetchTradesInterval)})}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"height100"},[a("div",{staticClass:"header-container"},[a("h2",{staticClass:"text-center"},[e._v("Trades "),a("small",[a("sup",[e._v("live")]),e._v(" : "+e._s(e.exchange.id)+" ( "+e._s(e.pair)+" )")])]),e._v(" "),a("p",{staticClass:"text-center"},[e._v("Last update: "+e._s(e.dateNow.getUTCHours())+" : "+e._s(e.dateNow.getUTCMinutes())+" : "+e._s(e.dateNow.getUTCSeconds())+" (UTC)")])]),e._v(" "),a("div",{staticClass:"items-container"},[a("h4",{directives:[{name:"show",rawName:"v-show",value:e.errMsg,expression:"errMsg"}]},[e._v(e._s(e.errMsg))]),e._v(" "),a("table",{directives:[{name:"show",rawName:"v-show",value:!e.errMsg,expression:"!errMsg"}],staticClass:"table table-borderless text-center"},[a("thead",[a("tr",[e._m(0),e._v(" "),a("th",[a("h4",[e._v("Price("+e._s(e.pair.slice(e.pair.indexOf("/")+1))+"):")])]),e._v(" "),e._m(1)])]),e._v(" "),a("tbody",e._l(e.allTrades,function(t){return a("tr",[a("td",[e._v(e._s(t.amount))]),e._v(" "),a("td",[e._v(e._s(t.price))]),e._v(" "),a("td",[e._v(e._s(t.datetime.slice(0,t.datetime.indexOf(".")).replace("T"," / ")))])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("th",[t("h4",[this._v("Size:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("th",[t("h4",[this._v("Date / Time (UTC):")])])}]};var x=a("VU/8")(p,m,!1,function(e){a("8XxQ")},"data-v-77365ea4",null).exports;a.d(t,"bus",function(){return f}),r.a.config.productionTip=!1;var f=new r.a,g=new GoldenLayout({content:[{type:"row",content:[{title:"Exchange",type:"component",componentName:"template",isClosable:!1,componentState:{id:"exchange",vueTemplate:h}},{title:"Pair",type:"component",componentName:"template",isClosable:!1,componentState:{id:"pair",vueTemplate:u}},{title:"Trades",type:"component",componentName:"template",isClosable:!1,componentState:{id:"trades",vueTemplate:x}}]}]});g.registerComponent("template",function(e,t){var a='<div id="'+t.id+'"></div>';e.getElement().html(a),setTimeout(function(){new r.a({el:"#"+t.id,render:function(e){return e(t.vueTemplate)}})})}),g.init()}},["NHnr"]);
//# sourceMappingURL=app.81f75393c9f8e851a3b7.js.map