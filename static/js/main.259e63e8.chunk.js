(this["webpackJsonpcoord-checker"]=this["webpackJsonpcoord-checker"]||[]).push([[0],{188:function(e,t,n){},189:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(26),r=n.n(i),o=(n(188),n(189),n(46)),s=n(6),l=n(137),j=n(144),d=n(247),u=n(250),b=n(242),O=n(241),x=n(240),h=n(234),p=n(251),m=n(245),v=n(200),f=n(239),g=n(252),y=n(18);function S(e){var t=a.useState(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],r=a.useState(!1),S=Object(o.a)(r,2),w=S[0],k=S[1],C=a.useState(!1),P=Object(o.a)(C,2),M=P[0],N=P[1],E=a.useState("Copied"),L=Object(o.a)(E,2),X=L[0],z=L[1],Y=a.useState(""),B=Object(o.a)(Y,2),F=B[0],G=B[1],T=a.useState([]),D=Object(o.a)(T,2),R=D[0],q=D[1],I=[["EPSG:3857","WGS 84 / Pseudo-Mercator",[85.06,-180,-85.06,180]]];var J=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(e)}};function V(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e.curProj&&t)return n&&(l.a.defs(t,n),Object(j.a)(l.a)),Object(s.t)(e.extent,e.curProj,t)}var W=function(t,n,a,c){return Object(y.jsxs)("div",{children:[Object(y.jsx)(h.a,{children:Object(y.jsx)(p.a,{title:t,placement:"left",children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"item-head",children:[Object(y.jsx)("span",{className:"prim",children:n}),Object(y.jsxs)("span",{className:"quick-icons",children:[Object(y.jsx)(f.a,{onClick:function(){return function(e,t){console.log("copy",t),navigator.clipboard.writeText(t),z("Copied "+e),N(!0)}(n,a)},style:{padding:0,fontSize:"17px"},children:Object(y.jsx)("i",{className:"icon-copy",style:{paddingLeft:5}})}),Object(y.jsx)(f.a,{onClick:function(){return e.reproject(n,c)},style:{padding:0,fontSize:"17px"},children:Object(y.jsx)("i",{className:"icon-globe",style:{paddingLeft:5}})})]})]}),Object(y.jsx)("p",{className:"secnd",children:"[".concat(a.join(", "),"]")})]})})}),Object(y.jsx)(x.a,{})]},n)};return Object(y.jsxs)("div",{className:"coord-trans-butt",children:[Object(y.jsx)(b.a,{variant:"contained",color:"primary",style:{marginLeft:10},onClick:J(!0),children:"Translate coordinates"}),Object(y.jsxs)(u.a,{anchor:"right",open:c,onClose:J(!1),children:[Object(y.jsxs)("div",{style:{margin:10},children:[Object(y.jsx)("i",{className:"material-icons",style:{marginRight:10},children:"search"}),Object(y.jsx)(m.a,{id:"project-search",size:"small",placeholder:"3857",style:{width:150},value:F,onChange:function(e){var t;G(e.target.value),t=e.target.value,fetch("https://epsg.io/?format=json&q="+t).then((function(e){return e.json()})).then((function(e){var t=e.results;if(t&&t.length>0){console.log("results.length",t);for(var n=[],a=0;a<t.length;a++){var c=t[a];if(c){var i=c.code,r=c.name,o=c.proj4,s=c.bbox;i&&i.length>0&&o&&o.length>0&&s&&4===s.length&&n.push({code:i,name:r,proj4def:o,bbox:s})}}q(n)}else q([]);k(!0)}))}})]}),Object(y.jsx)(v.a,{variant:"caption",display:"block",gutterBottom:!0,style:{marginLeft:10},children:"Result extent: [xMin, yMax, xMax, yMin]"}),Object(y.jsx)(d.a,{sx:{width:250},children:Object(y.jsx)(O.a,{children:w?0!==R.length?R.map((function(e,t){return W(e.name,"EPSG:"+e.code,V("EPSG:"+e.code,e.proj4def),e.bbox)})):Object(y.jsx)(h.a,{children:Object(y.jsx)("div",{className:"secnd",children:" No projection found. "})}):I.map((function(e,t){return W(e[1],e[0],V(e[0]),e[2])}))})}),Object(y.jsx)(g.a,{open:M,autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&N(!1)},message:X})]})]})}n(197);var w=n(151),k=n(150),C=n(70),P=n(154),M=n(109),N=n(110),E=n(152),L=n(63),X=n(2),z=n(153),Y=n(68),B=n(244),F=n(248);var G=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(o.a)(i,2),l=r[0],j=r[1],u=Object(a.useState)("EPSG:4326"),O=Object(o.a)(u,2),x=O[0],h=O[1],p=Object(a.useState)("Create BBox"),f=Object(o.a)(p,2),g=f[0],G=f[1],T=Object(a.useState)(-64.4136974478633),D=Object(o.a)(T,2),R=D[0],q=D[1],I=Object(a.useState)(45.9488267828191),J=Object(o.a)(I,2),V=J[0],W=J[1],A=Object(a.useState)(0),H=Object(o.a)(A,2),U=H[0],K=H[1],Q=Object(a.useState)(0),Z=Object(o.a)(Q,2),$=Z[0],_=Z[1],ee=Object(a.useState)(new z.a({strokeStyle:new Y.a({color:"rgba(255,120,0,0.9)",width:2,lineDash:[.5,4]}),showLabels:!0,wrapX:!1})),te=Object(o.a)(ee,1)[0],ne=Object(a.useRef)();function ae(e){var t,a;t=[e.minX,e.minY],a=[e.maxX,e.maxY];var c={type:"FeatureCollection",crs:{type:"name",properties:{name:x}},features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[t[0],a[1]],[a[0],a[1]],[a[0],t[1]],[t[0],t[1]],[t[0],a[1]]]]}}]},i=new M.a({source:new N.a({features:(new E.a).readFeatures(c)})});n.removeLayer(l),n.addLayer(i),j(i);var r=Object(L.b)(i.getSource().getExtent());r.scale(3),n.getView().fit(r,{size:n.getSize()})}Object(a.useEffect)((function(){var e=new M.a({source:new N.a}),t=new k.a({layers:[new P.a({source:new w.a}),e],target:ne.current,view:new C.a({projection:"EPSG:4326",center:[0,0],zoom:2})});t.on("click",ce),c(t),j(e)}),[]),Object(a.useEffect)((function(){l&&ae({minX:R,maxY:V,maxX:U,minY:$})}),[x]);var ce=function(e){console.log(e.coordinate)};return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{ref:ne,className:"map"}),Object(y.jsx)(S,{curProj:x,extent:[R,$,U,V],minX:R,maxX:U,minY:$,maxY:V,reproject:function(e,t){var a=Object(s.k)(e),c=Object(s.m)("EPSG:4326",a),i=[t[1],t[2],t[3],t[0]];a.setWorldExtent(i),t[1]>t[3]&&(i=[t[1],t[2],t[3]+360,t[0]]);var r=Object(X.a)(i,c,void 0,8);a.setExtent(r);var o=new C.a({projection:a});n.setView(o),o.fit(r);var l=Object(s.t)([R,V,U,$],x,e);q(l[0]),_(l[1]),K(l[2]),W(l[3]),h(e)}}),Object(y.jsx)("div",{className:"bot-bar",children:Object(y.jsxs)("div",{className:"coords-input",children:[Object(y.jsx)(v.a,{variant:"body1",gutterBottom:!0,component:"div",children:x}),Object(y.jsxs)(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},flexDirection:"row",display:"flex"},autoComplete:"off",width:"500",children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(m.a,{id:"outlined-basic",label:"Min X",variant:"outlined",size:"small",value:R,inputProps:{inputMode:"numeric",pattern:"-?[0-9]*.[0-9]*"},onChange:function(e){e.target.validity.valid?q(e.target.value):console.log("error")}}),Object(y.jsx)(m.a,{id:"outlined-basic",label:"Max Y",variant:"outlined",size:"small",value:V,inputProps:{inputMode:"numeric",pattern:"-?[0-9]*.[0-9]*"},onChange:function(e){e.target.validity.valid?W(e.target.value):console.log("error")}})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{children:[Object(y.jsx)(m.a,{id:"outlined-basic",label:"Max X",variant:"outlined",size:"small",value:U,inputProps:{inputMode:"numeric",pattern:"-?[0-9]*.[0-9]*"},onChange:function(e){e.target.validity.valid?K(e.target.value):console.log("error")}}),Object(y.jsx)(m.a,{id:"outlined-basic",label:"Min Y",variant:"outlined",size:"small",value:$,inputProps:{inputMode:"numeric",pattern:"-?[0-9]*.[0-9]*"},onChange:function(e){e.target.validity.valid?_(e.target.value):console.log("error")}})]})]}),Object(y.jsx)(b.a,{variant:"contained",color:"primary",style:{marginLeft:10},onClick:function(){!function(e){var t="";Object.keys(e).forEach((function(n){""!==e[n]||0===e[n]?e[n]=Number(e[n]):t+="".concat(n," ")})),""===t?(ae(e),G("Update BBox")):alert(t+"isn't looking right.")}({minX:R,maxY:V,maxX:U,minY:$})},children:g}),Object(y.jsx)(B.a,{style:{paddingLeft:30},control:Object(y.jsx)(F.a,{color:"default",onChange:function(e){e.target.checked?n.addLayer(te):n.removeLayer(te)}}),label:"Graticule"})]})]})})]})};var T=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(G,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),D()}},[[198,1,2]]]);
//# sourceMappingURL=main.259e63e8.chunk.js.map