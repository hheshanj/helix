import{j as L,b as se,h as A,d as W,n as oe,c as le,y as Q,r as fe,z as ue,s as $,g as z,i as F,C as de,A as ce,D as B,F as he,G as j,J as ve,K as w,M as Y,O as re,P as ge,Q as pe,R as _e,S as V,T as me,U as be,V as we,W as ee,X as Se,Y as ae,Z as ie,a0 as K,a1 as Ee,a2 as Te,a3 as ye,m as Me,a4 as te,u as ke,a5 as De}from"./BtMtoYAL.js";function Ne(e,a){return a}function Ce(e,a,i){for(var d=[],c=a.length,o,l=a.length,h=0;h<c;h++){let m=a[h];ie(m,()=>{if(o){if(o.pending.delete(m),o.done.add(m),o.pending.size===0){var u=e.outrogroups;U(V(o.done)),u.delete(o),u.size===0&&(e.outrogroups=null)}}else l-=1},!1)}if(l===0){var r=d.length===0&&i!==null;if(r){var f=i,t=f.parentNode;Te(t),t.append(f),e.items.clear()}U(a,!r)}else o={pending:new Set(a),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function U(e,a=!0){for(var i=0;i<e.length;i++)ye(e[i],a)}var ne;function He(e,a,i,d,c,o=null){var l=e,h=new Map,r=(a&te)!==0;if(r){var f=e;l=A?W(oe(f)):f.appendChild(L())}A&&le();var t=null,m=pe(()=>{var s=i();return _e(s)?s:s==null?[]:V(s)}),u,v=!0;function y(){n.fallback=t,xe(n,u,l,a,d),t!==null&&(u.length===0?(t.f&w)===0?ae(t):(t.f^=w,N(t,null,l)):ie(t,()=>{t=null}))}var k=se(()=>{u=Q(m);var s=u.length;let D=!1;if(A){var C=fe(l)===ue;C!==(s===0)&&(l=$(),W(l),z(!1),D=!0)}for(var p=new Set,M=ve,x=ge(),g=0;g<s;g+=1){A&&F.nodeType===de&&F.data===ce&&(l=F,D=!0,z(!1));var S=u[g],E=d(S,g);if(B){var O=d(S,g);E!==O&&he(String(g),String(E),String(O))}var _=v?null:h.get(E);_?(_.v&&j(_.v,S),_.i&&j(_.i,g),x&&M.unskip_effect(_.e)):(_=Ae(h,v?l:ne??(ne=L()),S,E,g,c,a,i),v||(_.e.f|=w),h.set(E,_)),p.add(E)}if(s===0&&o&&!t&&(v?t=Y(()=>o(l)):(t=Y(()=>o(ne??(ne=L()))),t.f|=w)),s>p.size&&(B?Oe(u,d):re("","","")),A&&s>0&&W($()),!v)if(x){for(const[H,R]of h)p.has(H)||M.skip_effect(R.e);M.oncommit(y),M.ondiscard(()=>{})}else y();D&&z(!0),Q(m)}),n={effect:k,items:h,outrogroups:null,fallback:t};v=!1,A&&(l=F)}function I(e){for(;e!==null&&(e.f&Ee)===0;)e=e.next;return e}function xe(e,a,i,d,c){var O,_,H,R,q,G,J,X,Z;var o=(d&De)!==0,l=a.length,h=e.items,r=I(e.effect.first),f,t=null,m,u=[],v=[],y,k,n,s;if(o)for(s=0;s<l;s+=1)y=a[s],k=c(y,s),n=h.get(k).e,(n.f&w)===0&&((_=(O=n.nodes)==null?void 0:O.a)==null||_.measure(),(m??(m=new Set)).add(n));for(s=0;s<l;s+=1){if(y=a[s],k=c(y,s),n=h.get(k).e,e.outrogroups!==null)for(const b of e.outrogroups)b.pending.delete(n),b.done.delete(n);if((n.f&w)!==0)if(n.f^=w,n===r)N(n,null,i);else{var D=t?t.next:r;n===e.effect.last&&(e.effect.last=n.prev),n.prev&&(n.prev.next=n.next),n.next&&(n.next.prev=n.prev),T(e,t,n),T(e,n,D),N(n,D,i),t=n,u=[],v=[],r=I(t.next);continue}if((n.f&K)!==0&&(ae(n),o&&((R=(H=n.nodes)==null?void 0:H.a)==null||R.unfix(),(m??(m=new Set)).delete(n))),n!==r){if(f!==void 0&&f.has(n)){if(u.length<v.length){var C=v[0],p;t=C.prev;var M=u[0],x=u[u.length-1];for(p=0;p<u.length;p+=1)N(u[p],C,i);for(p=0;p<v.length;p+=1)f.delete(v[p]);T(e,M.prev,x.next),T(e,t,M),T(e,x,C),r=C,t=x,s-=1,u=[],v=[]}else f.delete(n),N(n,r,i),T(e,n.prev,n.next),T(e,n,t===null?e.effect.first:t.next),T(e,t,n),t=n;continue}for(u=[],v=[];r!==null&&r!==n;)(f??(f=new Set)).add(r),v.push(r),r=I(r.next);if(r===null)continue}(n.f&w)===0&&u.push(n),t=n,r=I(n.next)}if(e.outrogroups!==null){for(const b of e.outrogroups)b.pending.size===0&&(U(V(b.done)),(q=e.outrogroups)==null||q.delete(b));e.outrogroups.size===0&&(e.outrogroups=null)}if(r!==null||f!==void 0){var g=[];if(f!==void 0)for(n of f)(n.f&K)===0&&g.push(n);for(;r!==null;)(r.f&K)===0&&r!==e.fallback&&g.push(r),r=I(r.next);var S=g.length;if(S>0){var E=(d&te)!==0&&l===0?i:null;if(o){for(s=0;s<S;s+=1)(J=(G=g[s].nodes)==null?void 0:G.a)==null||J.measure();for(s=0;s<S;s+=1)(Z=(X=g[s].nodes)==null?void 0:X.a)==null||Z.fix()}Ce(e,g,E)}}o&&ke(()=>{var b,P;if(m!==void 0)for(n of m)(P=(b=n.nodes)==null?void 0:b.a)==null||P.apply()})}function Ae(e,a,i,d,c,o,l,h){var r=(l&me)!==0?(l&be)===0?we(i,!1,!1):ee(i):null,f=(l&Se)!==0?ee(c):null;return B&&r&&(r.trace=()=>{h()[(f==null?void 0:f.v)??c]}),{v:r,i:f,e:Y(()=>(o(a,r??i,f??c,h),()=>{e.delete(d)}))}}function N(e,a,i){if(e.nodes)for(var d=e.nodes.start,c=e.nodes.end,o=a&&(a.f&w)===0?a.nodes.start:i;d!==null;){var l=Me(d);if(o.before(d),d===c)return;d=l}}function T(e,a,i){a===null?e.effect.first=i:a.next=i,i===null?e.effect.last=a:i.prev=a}function Oe(e,a){const i=new Map,d=e.length;for(let c=0;c<d;c++){const o=a(e[c],c);if(i.has(o)){const l=String(i.get(o)),h=String(c);let r=String(o);r.startsWith("[object ")&&(r=null),re(l,h,r)}i.set(o,c)}}const Re=`---\r
title: "Hello World: SvelteKit + Material You"\r
description: "Welcome to my blog built with SvelteKit, Tailwind CSS, and Material Design 3 aesthetics. Fast, modern, and beautifully dark."\r
date: "2026-02-24"\r
tags: ["sveltekit", "design", "web"]\r
---\r
\r
# Building a Modern Blog\r
\r
This is the inaugural post on a blog built with **SvelteKit** and styled using a custom **Material Design 3** system on top of Tailwind CSS.\r
\r
## Why SvelteKit?\r
\r
SvelteKit is an exceptional framework for building fast, content-heavy websites:\r
\r
- **Zero runtime overhead** — Svelte compiles your components to vanilla JS at build time\r
- **Static Site Generation** — with \`adapter-static\`, the entire site ships as pure HTML\r
- **File-based routing** — pages live where you'd expect them\r
- **Markdown support** — via \`mdsvex\`, writing content is as simple as creating a \`.md\` file\r
\r
## Why Material Design 3?\r
\r
Material You (M3) brings a refined design language with:\r
\r
- **Tonal surfaces** — subtle elevation through color rather than heavy shadows\r
- **Dynamic palettes** — a cohesive color system built from a single seed color\r
- **High border radii** — everything feels soft and approachable\r
\r
> The combination of SvelteKit's performance and M3's aesthetics creates something that's both fast and beautiful.\r
\r
## What's Next?\r
\r
I'll be writing about web development, design systems, and the tools I use daily. Stay tuned!\r
`,Fe=`---\r
title: "Optimizing for OLED: The Case for True Black"\r
description: "Why #000000 matters for OLED screens and how to build a dark theme that takes full advantage of pixel-off black."\r
date: "2026-02-23"\r
tags: ["design", "css", "performance"]\r
---\r
\r
# The OLED Advantage\r
\r
On an OLED display, black pixels are literally **turned off**. This means a true \`#000000\` background:\r
\r
- Uses zero power for those pixels\r
- Creates infinite contrast ratios\r
- Makes colors appear more vibrant\r
\r
## Designing with Tonal Surfaces\r
\r
Material Design 3 introduces the concept of **tonal containers** — instead of using drop shadows to show elevation, you use progressively lighter surface colors:\r
\r
- \`surface\` — \`#000000\` (OLED black)\r
- \`surface-container\` — \`#1c1b1f\`\r
- \`surface-container-high\` — \`#252529\`\r
- \`surface-container-highest\` — \`#302f33\`\r
\r
This creates a subtle sense of depth without relying on shadows that disappear on dark backgrounds.\r
\r
## Typography Matters\r
\r
Using \`Roboto Flex\` with its variable font axes gives us fine-grained control over:\r
\r
- **Weight** — from 100 to 1000\r
- **Width** — condensed to expanded\r
- **Optical sizing** — automatic adjustments for readability at any scale\r
\r
The result is typography that looks crisp on any screen density.\r
`;export{Fe as _,Re as a,He as e,Ne as i};
