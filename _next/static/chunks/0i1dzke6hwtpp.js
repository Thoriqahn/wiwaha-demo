(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,546361,e=>{"use strict";var t=e.i(208359),r=e.i(138580),a=e.i(497625),i=e.i(832841);function s(e,t,r,a,o=1){let n=s=>(0,i.kanvas)(e,t,(e,t,n)=>{e.fillStyle="warna"===s?r.kertas:"tinggi"===s?"#808080":"rgb(0,215,0)",e.fillRect(0,0,t,n),"foil"!==s&&(0,i.seratKertas)(e,t,n,"tinggi"===s?2.5:1,o),e.textAlign="center",e.textBaseline="alphabetic",a(e,t,n,a=>{let i;if("warna"===s)if("tinta"===a)i=r.tinta;else{let a=e.createLinearGradient(0,0,t,n);a.addColorStop(0,r.emas[0]),a.addColorStop(.5,r.emas[1]),a.addColorStop(1,r.emas[0]),i=a}else i="tinggi"===s?"tinta"===a?"#4a4a4a":"#b0b0b0":"tinta"===a?"rgb(0,215,0)":"rgb(0,56,255)";e.fillStyle=i,e.strokeStyle=i},s)}),l=(0,i.teksturDari)(n("warna"));return{warna:l,normal:(0,i.normalDari)(n("tinggi"),1.6),foil:(0,i.teksturDari)(n("foil"),!1)}}let o=(e,r=t.FrontSide)=>new t.MeshStandardMaterial({map:e.warna,normalMap:e.normal,normalScale:new t.Vector2(.9,.9),roughnessMap:e.foil,metalnessMap:e.foil,roughness:1,metalness:1,envMapIntensity:1.15,side:r});function n(e,t,r,a){for(let[i,s]of(a("foil"),e.lineWidth=4,e.strokeRect(26,26,t-52,r-52),e.lineWidth=1.4,e.strokeRect(40,40,t-80,r-80),[[40,40],[t-40,40],[40,r-40],[t-40,r-40]]))e.beginPath(),e.moveTo(i,s-12),e.lineTo(i+12,s),e.lineTo(i,s+12),e.lineTo(i-12,s),e.closePath(),e.fill()}function l(e,t,r,a=140){e.lineWidth=1.6,e.beginPath(),e.moveTo(t-a/2,r),e.lineTo(t-14,r),e.moveTo(t+14,r),e.lineTo(t+a/2,r),e.stroke(),e.beginPath(),e.moveTo(t,r-9),e.lineTo(t+9,r),e.lineTo(t,r+9),e.lineTo(t-9,r),e.closePath(),e.fill()}async function u(e,t,a,o){let u={kertas:a,tinta:e.palet.ink,emas:t},h=`${e.nama1} & ${e.nama2}`,d=(e.nama1[0]??"")+(e.nama2[0]??""),f=e.qrSvg?await (0,i.muatSvg)(e.qrSvg):null,c=s(672,1024,u,(t,a,s,o)=>{n(t,a,s,o),o("tinta"),(0,i.teksRenggang)(t,"UNDANGAN PERNIKAHAN",a/2,190,20,e.hurufIsi,.32),o("foil"),t.lineWidth=3,t.beginPath(),t.arc(a/2,s/2-30,128,0,2*Math.PI),t.stroke(),t.lineWidth=1.2,t.beginPath(),t.arc(a/2,s/2-30,112,0,2*Math.PI),t.stroke(),e.logo?(0,r.gambarLogoKanvas)(t,e.logo,a/2,s/2-30,200,{teks:d,huruf:e.hurufJudul}):(0,i.teksPas)(t,d,a/2,s/2+8,190,112,e.hurufJudul),(0,i.teksPas)(t,h,a/2,s-250,a-140,58,e.hurufJudul),o("tinta"),e.tanggal&&(0,i.teksRenggang)(t,e.tanggal.toUpperCase(),a/2,s-185,17,e.hurufIsi,.16)},1),p=s(672,1024,u,(t,r,a,s)=>{n(t,r,a,s),s("tinta"),(0,i.teksRenggang)(t,"MEMPELAI",r/2,190,22,e.hurufIsi,.4),s("foil"),l(t,r/2,232),(0,i.teksPas)(t,e.nama1,r/2,a/2-70,r-120,96,e.hurufJudul),(0,i.teksPas)(t,"&",r/2,a/2+20,120,60,e.hurufJudul),(0,i.teksPas)(t,e.nama2,r/2,a/2+130,r-120,96,e.hurufJudul),l(t,r/2,a-210)},2),g=s(672,1024,u,(t,r,a,s)=>{n(t,r,a,s),s("tinta"),t.font=`italic 400 26px ${e.hurufIsi}`,t.fillText("islam"===e.tataCara?"Bismillahirrahmanirrahim":"Dengan penuh sukacita",r/2,175),e.tamu&&((0,i.teksRenggang)(t,"KEPADA YTH.",r/2,262,17,e.hurufIsi,.3),s("foil"),(0,i.teksPas)(t,e.tamu,r/2,312,r-140,40,e.hurufJudul)),s("foil"),l(t,r/2,372,200),(0,i.teksPas)(t,e.nama1,r/2,a/2+60,r-120,104,e.hurufJudul),(0,i.teksPas)(t,"&",r/2,a/2+140,120,56,e.hurufJudul),(0,i.teksPas)(t,e.nama2,r/2,a/2+250,r-120,104,e.hurufJudul),s("tinta"),e.tanggal&&(0,i.teksRenggang)(t,e.tanggal.toUpperCase(),r/2,a-120,18,e.hurufIsi,.16)},3),m=s(672,1024,u,(t,r,a,s)=>{n(t,r,a,s),s("tinta"),(0,i.teksRenggang)(t,"RANGKAIAN ACARA",r/2,190,20,e.hurufIsi,.32),s("foil"),l(t,r/2,232);let o=e.acara.slice(0,3),u=o.length>2?230:290;o.forEach((a,o)=>{let n=340+o*u;s("foil"),(0,i.teksPas)(t,a.nama,r/2,n,r-130,58,e.hurufJudul),s("tinta"),(0,i.teksPas)(t,a.tanggal??"Tanggal menyusul",r/2,n+50,r-130,25,e.hurufIsi),a.jam&&(0,i.teksPas)(t,a.jam,r/2,n+86,r-130,23,e.hurufIsi),a.tempat&&(0,i.teksPas)(t,a.tempat,r/2,n+124,r-130,25,e.hurufIsi,"600")}),o.length||(0,i.teksPas)(t,"Detail acara menyusul",r/2,a/2,r-130,30,e.hurufIsi)},4),v=s(672,1024,u,(t,r,s,o)=>{n(t,r,s,o),o("foil"),t.beginPath(),t.arc(r/2,s/2-110,62,Math.PI,0),t.lineTo(r/2,s/2+20),t.closePath(),t.fill(),t.fillStyle=a,t.beginPath(),t.arc(r/2,s/2-110,24,0,2*Math.PI),t.fill(),o("tinta"),(0,i.teksRenggang)(t,"LOKASI ACARA",r/2,s/2+110,20,e.hurufIsi,.32);let l=e.acara.find(e=>e.tempat)?.tempat;o("foil"),l&&(0,i.teksPas)(t,l,r/2,s/2+180,r-130,46,e.hurufJudul)},5),M=s(672,1024,u,(t,r,a,s,o)=>{n(t,r,a,s),s("tinta"),(0,i.teksRenggang)(t,"GUEST PASS",r/2,190,24,e.hurufIsi,.4),f&&"warna"===o?(t.fillStyle="#ffffff",t.fillRect(r/2-200,a/2-230,400,400),t.drawImage(f,r/2-188,a/2-218,376,376)):f||(s("foil"),l(t,r/2,a/2-30,260)),s("foil"),e.tamu&&(0,i.teksPas)(t,e.tamu,r/2,a-230,r-130,48,e.hurufJudul),s("tinta"),(0,i.teksRenggang)(t,"TUNJUKKAN SAAT DATANG",r/2,a-170,15,e.hurufIsi,.26)},6),w=s(1024,672,u,(t,r,a,s)=>{s("foil"),t.lineWidth=5,t.strokeRect(22,22,r-44,a-44),s("tinta"),(0,i.teksRenggang)(t,e.tamu?"KEPADA YTH.":"UNDANGAN UNTUK",r/2,a-235,22,e.hurufIsi,.32),s("foil"),(0,i.teksPas)(t,e.tamu??"Tamu Undangan",r/2,a-160,r-260,76,e.hurufJudul),s("tinta"),(0,i.teksPas)(t,h,r/2,a-92,r-260,30,e.hurufIsi)},7),b=s(1024,672,u,(e,t,r,a)=>{a("foil"),e.lineWidth=5,e.beginPath(),e.moveTo(22,22),e.lineTo(t-22,22),e.stroke()},8),T=s(1024,672,{kertas:o,tinta:o,emas:t},(e,t,r,a)=>{a("foil"),e.lineWidth=2.2;for(let a=0;a<=r+96;a+=96)for(let r=0;r<=t+96;r+=96){for(let t=0;t<4;t++)e.save(),e.translate(r,a),e.rotate(t*Math.PI/2+Math.PI/4),e.beginPath(),e.ellipse(0,-24.96,11.52,23.04,0,0,2*Math.PI),e.stroke(),e.restore();e.beginPath(),e.arc(r,a,.05*96,0,2*Math.PI),e.fill()}},9),C=(0,i.kanvas)(256,256,(t,a,s)=>{let o=t.createRadialGradient(a/2,s/2,0,a/2,s/2,a/2);o.addColorStop(0,"#9a9a9a"),o.addColorStop(.75,"#7a7a7a"),o.addColorStop(1,"#303030"),t.fillStyle=o,t.fillRect(0,0,a,s),t.strokeStyle="#404040",t.lineWidth=9,t.beginPath(),t.arc(a/2,s/2,.34*a,0,2*Math.PI),t.stroke(),t.fillStyle="#e6e6e6",t.textAlign="center",t.textBaseline="middle",e.logo?(0,r.gambarLogoKanvas)(t,e.logo,a/2,s/2,.56*a,{teks:d,huruf:e.hurufJudul}):(0,i.teksPas)(t,d,a/2,s/2+4,.5*a,92,e.hurufJudul,"700")});return{sampul:c,mempelai:p,tengah:g,acara:m,lokasi:v,pass:M,amplop:w,flapLuar:b,liner:T,cap:(0,i.normalDari)(C,4)}}function h(e,t,r,a,i){let s=e.attributes.position,o=e.attributes.uv;for(let e=0;e<s.count;e++)o.setXY(e,(s.getX(e)-t)/a,(s.getY(e)-r)/i);return o.needsUpdate=!0,e}function d(e,r,a){let i=new t.Group,s=new t.Mesh(a,e),o=new t.Mesh(a,r);return o.rotation.y=Math.PI,o.position.z=-.003,i.add(s,o),i}let f=async(e,r)=>{let s=r.palet,n=(0,i.siapkan)(e,s,{fov:38,bloom:{kuat:.6,radius:.55,ambang:.78},eksposur:.92,kabut:.028});if(!n)return null;let{scene:l,kamera:f,malam:c}=n,p=(0,i.diHP)(),g=c.emas.clone().lerp(new t.Color("#7a5320"),.35).getStyle(),m=c.emas.clone().lerp(new t.Color("#fff1c8"),.35).getStyle(),v=c.kertas.getStyle(),M=c.aksen.clone().lerp(new t.Color("#120806"),.45).getStyle(),w=await u(r,[g,m],v,M),b=new t.HemisphereLight(new t.Color("#fff1dc"),new t.Color("#1a0d08"),.25),T=new t.DirectionalLight(new t.Color("#ffd9a8"),.4);T.position.set(-2.5,3.5,5);let C=new t.DirectionalLight(new t.Color("#a8bcff"),.6);C.position.set(3.5,1.2,-3);let x=new t.PointLight(new t.Color("#ffb070"),0,14,1.6);x.position.set(1.8,1.2,3.5),l.add(b,T,C,x);let S=new t.Mesh(new t.PlaneGeometry(1,1),new t.MeshBasicMaterial({map:(0,i.teksturKanvas)(256,256,(e,r,a)=>{let i=e.createRadialGradient(r/2,a/2,0,r/2,a/2,r/2);i.addColorStop(0,c.latar2.clone().lerp(new t.Color("#ffcf8a"),.1).getStyle()),i.addColorStop(.45,c.latar2.clone().lerp(c.latar,.5).getStyle()),i.addColorStop(1,c.latar.getStyle()),e.fillStyle=i,e.fillRect(0,0,r,a)}),fog:!1,depthWrite:!1}));for(let e of(S.position.set(0,.6,-14),S.scale.set(34,26,1),l.add(S),(0,i.bokeh)(["#ffcf8a","#ffe2b0",c.emas],{x:22,y:14,z:[-12,-5]},66)))l.add(e);let P=(0,i.partikel)(p?160:320,"#ffd890",{x:9,y:7,z:[-4,3]},.035,.85);l.add(P);let _=new t.Group,y=new t.MeshStandardMaterial({map:w.flapLuar.warna,normalMap:w.flapLuar.normal,normalScale:new t.Vector2(.6,.6),roughnessMap:w.flapLuar.foil,metalnessMap:w.flapLuar.foil,roughness:1,metalness:1,envMapIntensity:1}),R=new t.Mesh(new t.PlaneGeometry(3.2,2.1),o(w.liner));R.position.z=-.002;let A=new t.Shape;A.moveTo(-1.6,-2.1/2),A.lineTo(1.6,-2.1/2),A.lineTo(1.6,1.05),A.lineTo(0,-.084),A.lineTo(-1.6,1.05),A.closePath();let k=new t.Mesh(h(new t.ShapeGeometry(A),-1.6,-2.1/2,3.2,2.1),o(w.amplop,t.DoubleSide));k.position.z=.06;let I=new t.Shape;I.moveTo(-1.6,0),I.lineTo(1.6,0),I.lineTo(0,-1.302),I.closePath();let B=h(new t.ShapeGeometry(I),-1.6,-1.302,3.2,1.302),U=new t.Group;U.position.set(0,1.05,.064);let D=new t.Mesh(B,y),E=new t.Mesh(B,o(w.liner));E.rotation.y=Math.PI,E.position.z=-.002,U.add(D,E);let N=c.aksen.clone().lerp(new t.Color("#5a0d10"),.55),F=[];for(let e=0;e<=12;e++){let r=e/12*(Math.PI/2);F.push(new t.Vector2(.33*Math.sin(r)+.02*(12===e),.06*Math.cos(r)))}F.push(new t.Vector2(.36,-.01),new t.Vector2(.3,-.02));let G=new t.MeshPhysicalMaterial({color:N,roughness:.32,clearcoat:.8,clearcoatRoughness:.25,normalMap:w.cap,normalScale:new t.Vector2(1.4,1.4),envMapIntensity:1.3,side:t.DoubleSide}),O=e=>{let r=new t.LatheGeometry(F,28,e*Math.PI,Math.PI);r.rotateX(Math.PI/2);let a=r.attributes.position,i=r.attributes.uv;for(let e=0;e<a.count;e++)i.setXY(e,a.getX(e)/.72+.5,a.getY(e)/.72+.5);return new t.Mesh(r,G)},z=new t.Group;z.position.set(0,-.212,.1);let W=O(0),L=O(1);z.add(W,L);let H=new Float32Array(270),V=[];for(let e=0;e<90;e++){let e=Math.random()*Math.PI*2,r=.5+1.4*Math.random();V.push(new t.Vector3(Math.cos(e)*r,Math.sin(e)*r+.3,.4+1.2*Math.random()))}let K=new t.BufferGeometry;K.setAttribute("position",new t.BufferAttribute(H,3));let Q=new t.Points(K,new t.PointsMaterial({color:new t.Color("#ffd27a").multiplyScalar(2),size:.045,transparent:!0,opacity:0,depthWrite:!1,blending:t.AdditiveBlending,map:P.material.map}));Q.position.copy(z.position),_.add(R,k,U,z,Q),l.add(_);let J=new t.Group,$=new t.PlaneGeometry(1.25,1.9),j=d(o(w.tengah),o(w.pass),$),X=new t.Group;X.position.set(-1.25/2,0,.014);let Y=d(o(w.mempelai),o(w.sampul),$);Y.position.x=-1.25/2,X.add(Y);let q=new t.Group;q.position.set(.625,0,.007);let Z=d(o(w.acara),o(w.lokasi),$);Z.position.x=.625,q.add(Z),J.add(j,X,q),l.add(J);let ee=new t.Mesh(new t.PlaneGeometry(1,1),new t.MeshBasicMaterial({map:(0,i.teksturKanvas)(256,256,(e,t,r)=>{let a=e.createRadialGradient(t/2,r/2,0,t/2,r/2,t/2);a.addColorStop(0,"rgba(0,0,0,0.65)"),a.addColorStop(.6,"rgba(0,0,0,0.25)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(0,0,t,r)}),transparent:!0,depthWrite:!1}));l.add(ee);let et=p?45:90,er=new t.InstancedMesh(function(){let e=new t.PlaneGeometry(.055,.07,2,2),r=e.attributes.position;for(let e=0;e<r.count;e++){let t=r.getX(e),a=r.getY(e);r.setZ(e,t*t*5+a*a*2)}return e.computeVertexNormals(),e}(),new t.MeshStandardMaterial({color:c.emas.clone().lerp(new t.Color("#fff0c0"),.25),emissive:c.emas.clone(),emissiveIntensity:.4,metalness:1,roughness:.32,envMapIntensity:1.6,side:t.DoubleSide}),et),ea=Array.from({length:et},()=>({x:(Math.random()-.5)*7,y:9*Math.random(),z:-2.5+5*Math.random(),v:.18+.25*Math.random(),f:Math.random()*Math.PI*2,r:new t.Vector3(3*Math.random(),3*Math.random(),3*Math.random())}));l.add(er);let ei=new t.Object3D,es=0,eo=new t.Vector3;return{update(e,t){es+=t;let r=e.ceritaHalus,i=(0,a.easeInOutCubic)(e.buka),s=f.aspect,o=(0,a.lerp)(7.4,4.5,i),l=(0,a.lerp)(o,6.1,(0,a.easeInOutCubic)((0,a.seg)(r,.28,.4)))+1.2*(0,a.easeInOutCubic)((0,a.seg)(r,.86,1)),u=Math.sin(Math.PI*(0,a.seg)(r,.28,.55))*(6*Math.PI/180),h=.05*Math.sin(.35*es);f.position.set(h+(0,a.lerp)(-.9,0,i),(0,a.lerp)(-.6,.25,i)+.8*Math.sin(u)+.03*Math.sin(.5*es),l),eo.set(0,(0,a.lerp)(-.2,.05,i),0),f.lookAt(eo),f.rotation.z+=.4*u+.004*Math.sin(.27*es);let d=2*l*Math.tan(f.fov*Math.PI/360),c=d*s,p=Math.min(1,.84*c/3.2),g=.18*d*(0,a.easeInOutCubic)((0,a.seg)(r,.12,.34)),m=(0,a.easeInOutCubic)((0,a.seg)(r,.28,.35)),v=(0,a.easeInOutCubic)((0,a.seg)(r,.34,.4)),M=.05*Math.sin(1.2*es)*(1-(0,a.seg)(r,.2,.3));_.position.set(0,g+M-3.2*v,0),_.scale.setScalar(p),_.rotation.set(-.08*(1-i)+.02*Math.sin(.5*es),.06*Math.sin(.4*es)*(1-v),0),_.visible=v<.999;let w=(0,a.seg)(r,.08,.16),S=(0,a.easeOutCubic)(w);W.position.set(-(.55*S),-w*w*1.4,.4*S),W.rotation.set(1.1*S,0,.9*S),L.position.set(.55*S,-w*w*1.6,.35*S),L.rotation.set(.9*S,0,-(1.2*S)),z.visible=w<.995;let y=K.attributes.position;for(let e=0;e<90;e++){let t=V[e];y.setXYZ(e,t.x*(0,a.expoOut)(w)*.9,t.y*(0,a.expoOut)(w)*.9-w*w*.8,t.z*(0,a.expoOut)(w)*.6)}y.needsUpdate=!0,Q.material.opacity=w>0&&w<1?Math.sin(Math.PI*w):0;let R=(0,a.easeInOutCubic)((0,a.seg)(r,.16,.28));U.rotation.x=-Math.PI*R,U.position.z=R>.55?-.03:.064;let A=(0,a.lerp)(1.25,3.75,(0,a.easeInOutCubic)((0,a.seg)(r,.4,.7)))-(0,a.lerp)(0,2.5,(0,a.easeInOutCubic)((0,a.seg)(r,.88,.98))),k=Math.min(1.2,.86*c/Math.max(A,1.25),.38*d/1.9),I=(0,a.lerp)(p,k,v),B=(0,a.easeInOutCubic)((0,a.seg)(r,.86,1));J.scale.setScalar((0,a.lerp)(I,.82*I,B));let D=_.position.y+(0,a.lerp)(-.05,1.9320000000000002,m)*p;J.position.set(0,(0,a.lerp)(D,g+.05,v)+.025*Math.sin(.9*es)*v,(0,a.lerp)(.012*p,.35,v));let E=(0,a.easeInOutCubic)((0,a.seg)(r,.88,.98));X.rotation.y=Math.PI*(1-(0,a.easeInOutCubic)((0,a.seg)(r,.4,.55))+E),q.rotation.y=-Math.PI*(1-(0,a.easeInOutCubic)((0,a.seg)(r,.55,.7))+E);let N=(0,a.seg)(r,.4,.55)-(0,a.seg)(r,.55,.7);J.position.x+=1.25*N*.5*J.scale.x,J.rotation.y=Math.PI*(0,a.easeInOutCubic)((0,a.seg)(r,.7,.85))+Math.PI*(0,a.easeInOutCubic)((0,a.seg)(r,.86,.95))+.05*Math.sin(.45*es),J.rotation.x=-.05+.02*Math.sin(.6*es),J.rotation.z=(0,a.lerp)(0,-.08,B);let F=Math.abs(Math.cos(J.rotation.y));ee.position.set(J.position.x+.1*J.scale.x,J.position.y-.16*J.scale.x,J.position.z-.3),ee.scale.set(1.4*Math.max(A,1.25)*J.scale.x*Math.max(.3,F),2.565*J.scale.x,1),ee.material.opacity=.9*v;let G=(0,a.seg)(r,.06,.2)*(1-.6*(0,a.seg)(r,.5,.7))+.35*(0,a.seg)(r,.86,1);er.visible=G>.01;for(let e=0;e<et;e++){let t=ea[e],r=4.5-(t.y+es*t.v)%9;ei.position.set(t.x+.35*Math.sin(.6*es+t.f),r+.5*g,t.z),ei.rotation.set(t.r.x+.7*es,t.r.y+.5*es,t.r.z+Math.sin(es+t.f)),ei.scale.setScalar(G),ei.updateMatrix(),er.setMatrixAt(e,ei.matrix)}er.instanceMatrix.needsUpdate=!0;let O=(0,a.clamp)(.25+.75*i*(.55+.45*(0,a.seg)(r,.05,.6))-.15*(0,a.seg)(r,.72,.85));T.intensity=(0,a.lerp)(.35,1.7,O),b.intensity=(0,a.lerp)(.18,.55,O),C.intensity=(0,a.lerp)(.4,1.4,i),x.intensity=3.5*(0,a.seg)(r,.8,1)+1.5*i,n.aturBloom(.35+.2*(0,a.seg)(r,.4,.7)+.1*(0,a.seg)(r,.86,1)),P.rotation.y=.015*es,P.position.y=.15*Math.sin(.2*es),n.render(t)},ukur:n.ukur,hemat(){n.hemat(),er.count=Math.floor(et/2)},info:n.info,hancurkan:n.hancurkan}};e.s(["buat",0,f])},832841,e=>{"use strict";var t=e.i(208359),r=e.i(427919);let a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var i=t;class s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let o=new i.OrthographicCamera(-1,1,1,-1,0,1);class n extends i.BufferGeometry{constructor(){super(),this.setAttribute("position",new i.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new i.Float32BufferAttribute([0,2,0,0,2,0],2))}}let l=new n;class u{constructor(e){this._mesh=new i.Mesh(l,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class h extends s{constructor(e,r="tDiffuse"){super(),this.textureID=r,this.uniforms=null,this.material=null,e instanceof t.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=t.UniformsUtils.clone(e.uniforms),this.material=new t.ShaderMaterial({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new u(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class d extends s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let a,i,s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(a=0,i=1):(a=1,i=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,0xffffffff),o.buffers.stencil.setClear(i),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,0xffffffff),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class f extends s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class c{constructor(e,r){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===r){const a=e.getSize(new t.Vector2);this._width=a.width,this._height=a.height,(r=new t.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:t.HalfFloatType})).texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new h(a),this.copyPass.material.blending=t.NoBlending,this.timer=new t.Timer}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,a=this.passes.length;t<a;t++){let a=this.passes[t];if(!1!==a.enabled){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==d&&(a instanceof d?r=!0:a instanceof f&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let r=this.renderer.getSize(new t.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}let p={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class g extends s{constructor(){super(),this.isOutputPass=!0,this.uniforms=t.UniformsUtils.clone(p.uniforms),this.material=new t.RawShaderMaterial({name:p.name,uniforms:this.uniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this._fsQuad=new u(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,r,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},t.ColorManagement.getTransfer(this._outputColorSpace)===t.SRGBTransfer&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===t.LinearToneMapping?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===t.ReinhardToneMapping?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===t.CineonToneMapping?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===t.ACESFilmicToneMapping?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===t.AgXToneMapping?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===t.NeutralToneMapping?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===t.CustomToneMapping&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class m extends s{constructor(e,r,a=null,i=null,s=null){super(),this.scene=e,this.camera=r,this.overrideMaterial=a,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t.Color}render(e,t,r){let a,i,s=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(i=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(a),null!==this.overrideMaterial&&(this.scene.overrideMaterial=i),e.autoClear=s}}let v={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t.Color(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class M extends s{constructor(e,r=1,i,s){super(),this.strength=r,this.radius=i,this.threshold=s,this.resolution=void 0!==e?new t.Vector2(e.x,e.y):new t.Vector2(256,256),this.clearColor=new t.Color(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);this.renderTargetBright=new t.WebGLRenderTarget(o,n,{type:t.HalfFloatType,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){const r=new t.WebGLRenderTarget(o,n,{type:t.HalfFloatType,depthBuffer:!1});r.texture.name="UnrealBloomPass.h"+e,r.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(r);const a=new t.WebGLRenderTarget(o,n,{type:t.HalfFloatType,depthBuffer:!1});a.texture.name="UnrealBloomPass.v"+e,a.texture.generateMipmaps=!1,this.renderTargetsVertical.push(a),o=Math.round(o/2),n=Math.round(n/2)}this.highPassUniforms=t.UniformsUtils.clone(v.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new t.ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];o=Math.round(this.resolution.x/2),n=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new t.Vector2(1/o,1/n),o=Math.round(o/2),n=Math.round(n/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1),new t.Vector3(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=t.UniformsUtils.clone(a.uniforms),this.blendMaterial=new t.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,premultipliedAlpha:!0,blending:t.AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t.Color,this._oldClearAlpha=1,this._basic=new t.MeshBasicMaterial,this._fsQuad=new u(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,r){let a=Math.round(e/2),i=Math.round(r/2);this.renderTargetBright.setSize(a,i);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(a,i),this.renderTargetsVertical[e].setSize(a,i),this.separableBlurMaterials[e].uniforms.invSize.value=new t.Vector2(1/a,1/i),a=Math.round(a/2),i=Math.round(i/2)}render(e,t,r,a,i){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this._fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[t].uniforms.direction.value=M.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=M.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[t];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let r=[],a=e/3;for(let t=0;t<e;t++)r.push(.39894*Math.exp(-.5*t*t/(a*a))/a);let i=[],s=[];for(let t=1;t<e;t+=2){let a=r[t],o=t+1<e?r[t+1]:0,n=a+o;i.push((t*a+(t+1)*o)/n),s.push(n)}return new t.ShaderMaterial({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new t.Vector2(.5,.5)},direction:{value:new t.Vector2(.5,.5)},centerWeight:{value:r[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new t.ShaderMaterial({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}M.BlurDirectionX=new t.Vector2(1,0),M.BlurDirectionY=new t.Vector2(0,1),globalThis.__wiwahaThree=!0;let w=()=>window.innerWidth<768||matchMedia("(pointer: coarse)").matches,b={uniforms:{tDiffuse:{value:null},uWaktu:{value:0},uGrain:{value:.045},uHangat:{value:new t.Color("#2a1408")}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uWaktu; uniform float uGrain; uniform vec3 uHangat;
    varying vec2 vUv;
    float acak(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // angkat bagian gelap ke arah hangat (gaya film), lalu grain halus
      c.rgb = c.rgb + uHangat * (1.0 - smoothstep(0.0, 0.35, c.rgb));
      float n = acak(vUv * vec2(1920.0, 1080.0) + uWaktu * 60.0) - 0.5;
      c.rgb += n * uGrain;
      gl_FragColor = c;
    }`};function T(e,t,r){let a=Math.min(1,1024/Math.max(e,t)),i=document.createElement("canvas");return i.width=Math.round(e*a),i.height=Math.round(t*a),r(i.getContext("2d",{willReadFrequently:!0}),i.width,i.height),i}function C(e,r=!0){let a=new t.CanvasTexture(e);return a.colorSpace=r?t.SRGBColorSpace:t.NoColorSpace,a.anisotropy=8,a}function x(e,t,r){return C(T(e,t,r))}e.s(["bokeh",0,function(e,r,a=60){let i=x(128,128,(e,t,r)=>{let a=e.createRadialGradient(t/2,r/2,0,t/2,r/2,t/2);a.addColorStop(0,"rgba(255,255,255,0.55)"),a.addColorStop(.72,"rgba(255,255,255,0.4)"),a.addColorStop(.86,"rgba(255,255,255,0.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,t,r)}),s=[];for(let[o,n]of[.35,.6,1].entries()){let l=Math.round(a/3*(w()?.7:1)),u=new Float32Array(3*l);for(let e=0;e<l;e++)u[3*e]=(Math.random()-.5)*r.x,u[3*e+1]=(Math.random()-.5)*r.y,u[3*e+2]=r.z[0]+Math.random()*(r.z[1]-r.z[0]);let h=new t.BufferGeometry;h.setAttribute("position",new t.BufferAttribute(u,3)),s.push(new t.Points(h,new t.PointsMaterial({color:new t.Color(e[o%e.length]),size:n,map:i,transparent:!0,opacity:.35,depthWrite:!1,blending:t.AdditiveBlending,fog:!1})))}return s},"diHP",0,w,"kanvas",0,T,"muatSvg",0,function(e){return new Promise(t=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>t(null),r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`})},"normalDari",0,function(e,t=2){let r=e.width,a=e.height,i=e.getContext("2d").getImageData(0,0,r,a).data,s=document.createElement("canvas");s.width=r,s.height=a;let o=s.getContext("2d"),n=o.createImageData(r,a),l=(e,t)=>i[((t+a)%a*r+(e+r)%r)*4]/255;for(let e=0;e<a;e++)for(let a=0;a<r;a++){let i=(l(a+1,e)-l(a-1,e))*t,s=(l(a,e+1)-l(a,e-1))*t,o=1/Math.sqrt(i*i+s*s+1),u=(e*r+a)*4;n.data[u]=(-i*o*.5+.5)*255,n.data[u+1]=(s*o*.5+.5)*255,n.data[u+2]=(.5*o+.5)*255,n.data[u+3]=255}return o.putImageData(n,0,0),C(s,!1)},"partikel",0,function(e,r,a,i=.05,s=.7){let o=Math.min(e,w()?300:e),n=new Float32Array(3*o);for(let e=0;e<o;e++)n[3*e]=(Math.random()-.5)*a.x,n[3*e+1]=(Math.random()-.5)*a.y,n[3*e+2]=a.z[0]+Math.random()*(a.z[1]-a.z[0]);let l=new t.BufferGeometry;l.setAttribute("position",new t.BufferAttribute(n,3));let u=new t.PointsMaterial({color:new t.Color(r),size:i,map:x(64,64,(e,t,r)=>{let a=e.createRadialGradient(t/2,r/2,0,t/2,r/2,t/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.35,"rgba(255,255,255,0.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,t,r)}),transparent:!0,opacity:s,depthWrite:!1,blending:t.AdditiveBlending,fog:!1});return new t.Points(l,u)},"seratKertas",0,function(e,t,r,a=1,i=1){let s=9301*i+49297,o=()=>(s=(9301*s+49297)%233280)/233280;for(let i=0;i<t*r/90;i++){let i=o()*t,s=o()*r,n=o()*Math.PI,l=2+9*o();e.strokeStyle=`rgba(${.5>o()?"0,0,0":"255,255,255"},${.035*a})`,e.lineWidth=.6,e.beginPath(),e.moveTo(i,s),e.lineTo(i+Math.cos(n)*l,s+Math.sin(n)*l),e.stroke()}},"siapkan",0,function(e,a,i={}){var s,o,n;let l,u,d,f,p,v,T,C,x=function(){let e=new URLSearchParams(window.location.search).get("kualitas");if("tinggi"===e||"sedang"===e)return e;if(!w())return"tinggi";let t=navigator,r=t.deviceMemory;return(void 0===r||r>=6)&&(t.hardwareConcurrency??8)>=6?"tinggi":"sedang"}();try{l=new r.WebGLRenderer({antialias:"sedang"===x,alpha:!1,powerPreference:"high-performance"})}catch{return null}let S=(d=(u=new t.Color(a.ink)).clone().lerp(new t.Color("#050302"),.72),{latar:d,latar2:new t.Color(a.ac).lerp(new t.Color("#0b0605"),.62),emas:new t.Color(a.ac2).lerp(new t.Color("#f4dca0"),.2),kertas:new t.Color(a.sf).lerp(new t.Color("#fffaf0"),.35),aksen:new t.Color(a.ac),tinta:u});l.outputColorSpace=t.SRGBColorSpace,l.toneMapping=t.ACESFilmicToneMapping,l.toneMappingExposure=i.eksposur??1;let P=Math.min(window.devicePixelRatio||1,"tinggi"===x?2:1.5);l.setPixelRatio(P),l.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),l.setClearColor(S.latar,1),e.appendChild(l.domElement);let _=new t.Scene;_.background=S.latar.clone(),_.fog=new t.FogExp2(S.latar.clone(),i.kabut??.045);let y=(s=l,o=new t.Color("#ffd9a8"),n=new t.Color("#9fb4ff"),f=new t.Scene,p=new t.Mesh(new t.BoxGeometry(20,20,20),new t.MeshBasicMaterial({color:new t.Color("#0c0907"),side:t.BackSide})),f.add(p),(v=(e,r,a,i,s,o,n)=>{let l=new t.Mesh(new t.PlaneGeometry(e,r),new t.MeshBasicMaterial({color:a.clone().multiplyScalar(i),side:t.BackSide}));l.position.set(s,o,n),l.lookAt(0,0,0),f.add(l)})(8,4,o,5,-4,7,4),v(3,9,n,1.6,9,1,-2),v(10,2,o,1.2,0,-8,3),C=(T=new r.PMREMGenerator(s)).fromScene(f,.035).texture,T.dispose(),f.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()}),C);_.environment=y;let R=new t.PerspectiveCamera(i.fov??45,(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),.05,120),A=null,k=null,I=null,B=null;if("tinggi"===x){B=new t.WebGLRenderTarget((e.clientWidth||window.innerWidth)*P,(e.clientHeight||window.innerHeight)*P,{type:t.HalfFloatType,samples:4}),(A=new c(l,B)).setPixelRatio(P),A.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),A.addPass(new m(_,R));let r=i.bloom??{kuat:.55,radius:.6,ambang:.82};k=new M(new t.Vector2(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),r.kuat,r.radius,r.ambang),A.addPass(k),A.addPass(new g),I=new h(b),A.addPass(I)}let U=0,D=()=>{l.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),A?.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),R.aspect=(e.clientWidth||window.innerWidth)/(e.clientHeight||window.innerHeight),R.updateProjectionMatrix()};return{renderer:l,scene:_,kamera:R,kualitas:x,malam:S,ukur:D,aturBloom(e){k&&(k.strength=e)},render(e){U+=e,A&&I?(I.uniforms.uWaktu.value=U%100,A.render(e)):l.render(_,R)},hemat(){A?.dispose(),B?.dispose(),A=null,I=null,P=1,l.setPixelRatio(1),D()},info:()=>({drawCalls:l.info.render.calls,segitiga:l.info.render.triangles,pixelRatio:l.getPixelRatio(),kualitas:A?"tinggi":"sedang"}),hancurkan(){A?.dispose(),B?.dispose(),y.dispose(),function(e,t){let r=new Set;for(let t of(e.traverse(e=>{for(let t of(e.geometry?.dispose(),Array.isArray(e.material)?e.material:e.material?[e.material]:[])){for(let e of Object.values(t))e&&e.isTexture&&r.add(e);t.dispose()}}),r))t.dispose();t.dispose(),t.forceContextLoss(),t.domElement.remove()}(_,l)}}},"teksPas",0,function(e,t,r,a,i,s,o,n="400"){let l=s;for(e.font=`${n} ${l}px ${o}`;l>8&&e.measureText(t).width>i;)l-=2,e.font=`${n} ${l}px ${o}`;e.fillText(t,r,a)},"teksRenggang",0,function(e,t,r,a,i,s,o=.3,n="500"){e.font=`${n} ${i}px ${s}`;let l=[...t],u=r-(l.reduce((t,r)=>t+e.measureText(r).width,0)+o*i*(l.length-1))/2,h=e.textAlign;for(let t of(e.textAlign="left",l))e.fillText(t,u,a),u+=e.measureText(t).width+o*i;e.textAlign=h},"teksturDari",0,C,"teksturKanvas",0,x,"ulang",0,function(e,r,a){return e.wrapS=e.wrapT=t.RepeatWrapping,e.repeat.set(r,a),e}],832841)}]);