"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(e,r,t){t.r(r);var n=t(861),i=t(439),a=t(757),s=t.n(a),c=t(709),u=t(791),A=t(689),f=t(799),p=t(184);r.default=function(){var e=(0,u.useState)([]),r=(0,i.Z)(e,2),t=r[0],a=r[1],o=(0,A.UO)().movieId;return(0,u.useEffect)((function(){try{var e=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.IQ)(o);case 2:r=e.sent,t=r.cast,a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(r){}}),[o]),(0,p.jsxs)(p.Fragment,{children:[0===t.length&&"We don`t have any cast for this movie",t.length>0&&(0,p.jsx)("ul",{children:t.map((function(e){var r=e.name,t=e.id,n=e.character,i=e.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500"+i:f,alt:r,width:300}),(0,p.jsx)("h3",{children:r}),(0,p.jsxs)("p",{children:["Character:",n]})]},t)}))})]})}},709:function(e,r,t){t.d(r,{IQ:function(){return A},Jh:function(){return f},NV:function(){return p},Zh:function(){return c},sq:function(){return u}});var n=t(861),i=t(757),a=t.n(i),s=t(340),c=function(){var e=(0,n.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=fed317ab3be0f2b7619ff5ef4eb716b2");case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=fed317ab3be0f2b7619ff5ef4eb716b2"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),A=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=fed317ab3be0f2b7619ff5ef4eb716b2"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=fed317ab3be0f2b7619ff5ef4eb716b2"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=fed317ab3be0f2b7619ff5ef4eb716b2",{params:{query:r}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},799:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=541.f1da02bb.chunk.js.map