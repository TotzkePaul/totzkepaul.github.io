import{S as n,P as o,W as e,T as a,M as i,a as t,b as s,A as r,c as w,B as d,d as c,e as l,f as p}from"./vendor.2f812ffc.js";const m=new n,f=new o(75,window.innerWidth/window.innerHeight,.1,1e3),u=new e({canvas:document.querySelector("#bg")});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),f.position.setZ(30),f.position.setX(-3),u.render(m,f);const g=new a(10,3,16,100),h=new i({color:16737095}),y=new t(g,h);m.add(y);const b=new s(16777215);b.position.set(5,5,5);const j=new r(16777215);m.add(b,j),Array(200).fill().forEach((function(){const n=new l(.25,24,24),o=new i({color:16777215}),e=new t(n,o),[a,s,r]=Array(3).fill().map((()=>p.randFloatSpread(100)));e.position.set(a,s,r),m.add(e)}));const v=(new w).load("space.jpg");m.background=v;const z=(new w).load("paul.jpg"),S=new t(new d(3,3,3),new c({map:z}));m.add(S);const x=(new w).load("moon.jpg"),A=(new w).load("normal.jpg"),P=new t(new l(3,32,32),new i({map:x,normalMap:A}));m.add(P),P.position.z=30,P.position.setX(-10),S.position.z=-5,S.position.x=2;let R=0;function W(){S.rotation.y+=.01,S.rotation.z+=.01,f.position.z=-.01*R,f.position.x=-2e-4*R,f.rotation.y=-2e-4*R,R-=10}switch(new URLSearchParams(window.location.search).get("mode")){case"i":window.moveCamera=W;break;default:document.body.onscroll=W,W(),setInterval((function(){W()}),1e3/30)}!function n(){requestAnimationFrame(n),u.render(m,f)}();
