(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SmileTiles"],{4479:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",[r("v-row",[r("v-col",{staticClass:"col-12 col-lg-4"},[r("v-card",[r("v-card-title",[t._v("Smile Tiles")]),r("v-card-text",[r("p",[t._v("This demo explores the "),r("code",[t._v("handsfree.head.pointer.state")]),t._v(" property to handle clicking on tiles.")]),r("h3",{staticClass:"mb-3"},[t._v("How to Play")]),r("ul",[r("li",[t._v("Click on the black tiles to start or increase the timer")]),r("li",[t._v("Click on white tiles to restart")]),r("li",[t._v("Beat my high score of 80 😎")])])]),r("v-card-actions",[r("v-btn",{staticClass:"primary",attrs:{block:"",href:"https://dev.to/heyozramos/handsfree-js-a-web-based-face-pointer-24m1"}},[t._v("View the overview tutorial")])],1)],1),r("v-card",{staticClass:"mt-5"},[r("v-card-text",[r("blockquote",{staticClass:"twitter-tweet"},[r("p",{attrs:{lang:"en",dir:"ltr"}},[t._v('Made a game called "Smile Tiles" to test the accuracy of Handsfree.js over time: '),r("a",{attrs:{href:"https://t.co/MaJAScHViH"}},[t._v("https://t.co/MaJAScHViH")]),r("br"),r("br"),t._v("- Click Start Webcam on top right"),r("br"),t._v("- Smile/smirk to click"),r("br"),t._v("- Black tiles increase score/time"),r("br"),t._v("- White tiles resets everything"),r("br"),r("br"),t._v("Day 4 of "),r("a",{attrs:{href:"https://twitter.com/hashtag/100DaysofMLCode?src=hash&ref_src=twsrc%5Etfw"}},[t._v("#100DaysofMLCode")]),t._v(" and "),r("a",{attrs:{href:"https://twitter.com/hashtag/100DaysofCode?src=hash&ref_src=twsrc%5Etfw"}},[t._v("#100DaysofCode")]),t._v(" "),r("a",{attrs:{href:"https://t.co/4Q5Em2WoN4"}},[t._v("pic.twitter.com/4Q5Em2WoN4")])]),t._v("— Oz Ramos (@HeyOzRamos) "),r("a",{attrs:{href:"https://twitter.com/HeyOzRamos/status/1192585358506000385?ref_src=twsrc%5Etfw"}},[t._v("November 7, 2019")])])])],1)],1),r("v-col",{staticClass:"col-12 col-lg-8"},[r("v-card",{attrs:{color:t.backgroundColor}},[r("v-card-text",[r("v-layout",{attrs:{wrap:""}},[r("v-row",[r("v-col",{staticClass:"col-12 col-sm-4"},[r("v-card",[r("v-card-title",[t._v("Best: "+t._s(t.score.best))])],1)],1),r("v-col",{staticClass:"col-12 col-sm-4"},[r("v-card",[r("v-card-title",[t._v("Score: "+t._s(t.score.current))])],1)],1),r("v-col",{staticClass:"col-12 col-sm-4"},[r("v-card",[r("v-card-title",[t._v("Time: "+t._s(t.currentTime))])],1)],1)],1)],1),r("v-layout",[r("v-row",[r("v-col",{staticClass:"md-6"})],1)],1),r("v-card",{staticStyle:{"max-width":"500px",margin:"auto"},attrs:{color:"indigo lighten-2"}},[r("v-card-text",[r("v-layout",[r("v-row",{attrs:{dense:""}},t._l(16,(function(e){return r("v-col",{key:e,staticClass:"col-3"},[r("v-card",{ref:"tile",refInFor:!0,staticStyle:{height:"80px"},attrs:{color:t._f("tileColor")(t.tiles[e-1],e)},on:{click:function(r){return t.clickedTile(e-1)}}},[t.tiles[e-1]>1?r("v-card-title",{staticStyle:{color:"#fff","text-align":"center"}},[t._v(t._s(t.tiles[e-1]))]):t._e()],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],a=(r("a4d3"),r("4de4"),r("a630"),r("e439"),r("dbb4"),r("b64b"),r("3ca3"),r("159b"),r("ade3")),c=r("2ef0"),o=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={filters:{tileColor:function(t){var e="white";return t&&(e="black"),e}},computed:n({backgroundColor:function(){return this.score.current?"indigo":"pink darken-3"},currentTime:function(){return this.timer>0?this.timer:0}},Object(o["b"])(["isTracking"])),watch:{timer:function(){this.timer<0&&(this.score.current=0)}},data:function(){return{tiles:Array.from({length:16},(function(){return 0})),timerInterval:null,timer:0,score:{current:0,best:0}}},mounted:function(){var t=this;this.$store.dispatch("loadScripts",["https://platform.twitter.com/widgets.js"]),this.timerInterval=setInterval((function(){t.timer-=1}),100);for(var e=0;e<3;e++)this.setRandomTile()},beforeDestroy:function(){clearInterval(this.timerInterval)},methods:{clickedTile:Object(c["debounce"])((function(t){"mouseDown"!==this.$store.state.handsfree.head.pointer.state&&this.isTracking||(this.updateScore(t),this.tiles[t]>0&&(this.$set(this.tiles,t,this.tiles[t]-1),0===this.tiles[t]&&this.setRandomTile(t)))}),100,{leading:!0}),updateScore:function(t){0===this.tiles[t]?(this.score.current=0,this.timer=0):this.tiles[t]&&(this.score.current+=10,this.timer<0?this.timer=20:this.timer+=9),this.score.current>this.score.best&&(this.score.best=this.score.current)},setRandomTile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=Object(c["random"])(0,15);if(this.tiles[e]||t===e)return this.setRandomTile(t);var r=100*Math.random();r<90?this.$set(this.tiles,e,1):this.$set(this.tiles,e,3)}}},v=h,d=r("2877"),u=r("6544"),f=r.n(u),m=r("8336"),b=r("b0af"),p=r("99d9"),w=r("62ad"),_=r("a523"),y=r("a722"),g=r("0fd9"),C=Object(d["a"])(v,s,i,!1,null,null,null);e["default"]=C.exports;f()(C,{VBtn:m["a"],VCard:b["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:w["a"],VContainer:_["a"],VLayout:y["a"],VRow:g["a"]})}}]);
//# sourceMappingURL=SmileTiles.6e8e19cd.js.map