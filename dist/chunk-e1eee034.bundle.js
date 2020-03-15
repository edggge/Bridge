(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1eee034"],{"324d":function(t,e,a){"use strict";var i=a("b59c"),n=a.n(i);n.a},"51e9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.identity?a("section",{staticClass:"digital panel-pad limiter"},[t._m(0),a("br"),a("br"),a("br"),a("br"),t.savedSinceChanges?t._e():a("figure",{staticClass:"unsaved-changes"},[t._v("You have unsaved changes.")]),a("figure",{staticClass:"id-name"},[t._v("Digital name "),t.usingIdentity?t._e():a("span",{staticClass:"unverified"},[t._v("(unregistered)")])]),a("section",{staticClass:"flex"},[a("Input",{attrs:{disabled:!0,text:t.identityName},on:{changed:function(e){return t.changeIdentityName(e)}}}),a("Button",{staticStyle:{flex:"0 0 auto"},attrs:{icon:"fal fa-id-badge",primary:"1",text:"Manage"},nativeOn:{click:function(e){return t.manageIdentity(e)}}})],1),a("br"),a("Input",{attrs:{focus:t.focusEmail,"red-label":t.invalidEmail,label:t.invalidEmail?"Please enter a valid email address":"Email address",text:t.identity.personal.email},on:{changed:function(e){return t.changeEmail(e)}}}),a("br"),a("br"),a("figure",{staticClass:"line"}),a("br"),a("br"),a("section",{staticClass:"avatar"},[a("section",{staticClass:"details"},[a("figure",{staticClass:"title"},[t._v("Avatar")]),a("figure",{staticClass:"description"},[t._v("Applications you're interacting with can choose to display this image.")]),t.avatar?a("Button",{attrs:{primary:"1",text:"Remove"},nativeOn:{click:function(e){return t.removeAvatar(e)}}}):t._e(),a("Button",{attrs:{icon:"fas fa-camera-retro",primary:"1",text:t.avatar?"Change":"Choose an image"},nativeOn:{click:function(e){return t.uploadAvatar(e)}}})],1),a("figure",{staticClass:"image",style:"background-image:url('"+t.avatar+"')"},[t.avatar?t._e():a("i",{staticClass:"fas fa-camera-retro"})])]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"panel-head"},[a("figure",{staticClass:"title"},[t._v("Digital Identity")]),a("figure",{staticClass:"description"},[t._v("Your digital identity defines your online presence. It is primarily used for third party applications.")])])}],r=(a("8e6e"),a("ac6a"),a("456d"),a("28a5"),a("7f7f"),a("6b54"),a("bd86")),s=(a("96cf"),a("3b8d")),o=a("2f62"),l=(a("118f"),a("7823")),c=a.n(l),d=a("21f8"),u=a("4b59"),f=a("aa3c");a("4de1"),a("20cb"),a("17e3"),a("1f17");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var m=null,b={data:function(){return{identity:null,loaded:!1,saved:!0,focusEmail:!1}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.identity=this.scatter.keychain.identities[0].clone(),setTimeout(function(){e.loaded=!0},1e3);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:g({},Object(o["d"])(["scatter"]),{},Object(o["c"])(["avatars"]),{invalidEmail:function(){return!this.identity.personal.email||!this.identity.personal.email.length||this.identity.personal.email&&this.identity.personal.email.length&&!/\S+@\S+\.\S+/.test(this.identity.personal.email)},avatar:function(){if(this.identity)return this.avatars[this.identity.id]},usingIdentity:function(){return!!this.identity&&this.identity.ridl.toString().indexOf("::")>-1},identityName:function(){return this.identity?this.usingIdentity?"".concat(this.identity.name,"@scatter"):this.identity.name:""},savedSinceChanges:function(){return this.saved&&!m}}),methods:g({manageIdentity:function(){var t=this;this.focusEmail=!1,this.$nextTick(function(){if(t.invalidEmail)return t.focusEmail=!0,d["a"].push(u["a"].snackbar("Please enter a valid email before managing your identity."));d["a"].push(u["a"].manageIdentity(function(){t.identity=t.scatter.keychain.identities[0].clone()}))})},changeEmail:function(t){this.identity.personal.email=t,this.save()},save:function(){var t=this;this.name;this.saved=!1,clearTimeout(m),m=setTimeout(function(){if(!t.loaded)return clearTimeout(m),m=null,void(t.saved=!0);t.invalidEmail||(c.a.updateIdentity(t.identity),t.saved=!0,clearTimeout(m),m=null)},500)},removeAvatar:function(){var t=this.scatter.clone();delete t.keychain.avatars[this.identity.id],this[f["SET_SCATTER"]](t)},uploadAvatar:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,n,r,s,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.wallet.storage.getFileLocation(["jpg","png","jpeg"]);case 2:if(e=t.sent,e&&e.length){t.next=5;break}return t.abrupt("return");case 5:return e=e[0],a=e.split("."),a=a[a.length-1],t.next=10,window.wallet.storage.openFile(e,{encoding:"base64"});case 10:if(i=t.sent,i){t.next=13;break}return t.abrupt("return",d["a"].push(Popup.snackbar("Error converting image file.")));case 13:n=document.createElement("canvas"),r=n.getContext("2d"),s=new Image,s.onload=function(t){var e=function(){var t=Math.min(350/s.width,350/s.height);return{width:Math.round(s.width*t),height:Math.round(s.height*t)}};n.height=e().height,n.width=e().width,r.drawImage(s,0,0,s.width,s.height,0,0,e().width,e().height);var i=new Image;i.src=n.toDataURL("image/".concat(a));var l=o.scatter.clone();l.keychain.avatars[o.identity.id]=i.src,o[f["SET_SCATTER"]](l)},s.src="data:image/".concat(a,";base64, ").concat(i);case 18:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},Object(o["b"])([f["SET_SCATTER"]]))},h=b,v=(a("324d"),a("2877")),x=Object(v["a"])(h,i,n,!1,null,"325fb720",null);e["default"]=x.exports},b59c:function(t,e,a){var i=a("e8d2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("40d5f410",i,!0,{sourceMap:!1,shadowMode:!1})},e8d2:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".digital .unsaved-changes[data-v-325fb720]{position:fixed;bottom:100px;left:10px;z-index:2;background:#00a8ff;color:#fff;border-radius:4px;font-size:11px;padding:5px 10px}.digital .id-name[data-v-325fb720]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;font-size:14px;font-family:Poppins,sans-serif;margin-bottom:7px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.digital .id-name .unverified[data-v-325fb720]{margin-left:5px;font-size:11px;font-weight:700;color:#999}.digital .claim-username[data-v-325fb720]{margin-top:-10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.digital .claim-username .description[data-v-325fb720]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:13px;color:#00a8ff;margin-right:25px}.digital .claim-username .description.red[data-v-325fb720]{color:red}.digital .claim-username .description.grey[data-v-325fb720]{color:#999}.digital .claim-username button[data-v-325fb720]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin-left:5px}.digital .avatar[data-v-325fb720]{display:grid;grid-template-columns:auto 150px}.digital .avatar button[data-v-325fb720]{display:inline-block}.digital .avatar button[data-v-325fb720]:not(:first-child){margin-right:5px}.digital .avatar .image[data-v-325fb720]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:150px;height:100px;border-radius:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:24px;background-color:#00a8ff;color:#fff}.digital .avatar .details[data-v-325fb720]{text-align:left}.digital .avatar .details .title[data-v-325fb720]{font-size:16px;font-weight:700}.digital .avatar .details .description[data-v-325fb720]{margin-top:5px;font-size:11px;color:#999}.digital .avatar .details button[data-v-325fb720]{margin-top:10px}",""])}}]);