(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5561:(e,t,s)=>{Promise.resolve().then(s.bind(s,7020))},7020:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k});var l=s(7437),a=s(936),r=s.n(a);s(5214);var i=s(7138),n=s(2084),c=s(5699),o=s(2265),d=s(613),x=s(6356),h=s(9824);function u(e){let{openLoginDialog:t}=e,[s,a]=(0,o.useState)(null),[r,u]=(0,o.useState)(!1),m=(0,o.useRef)(null),p=e=>{m.current&&!m.current.contains(e.target)&&u(!1)};return(0,o.useEffect)(()=>{(async()=>{let{data:{user:e}}=await d.O.auth.getUser();a(e)})();let{data:e}=d.O.auth.onAuthStateChange((e,t)=>{a((null==t?void 0:t.user)||null)});return document.addEventListener("mousedown",p),()=>{null==e||e.subscription.unsubscribe(),document.removeEventListener("mousedown",p)}},[]),(0,l.jsx)("nav",{className:"fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md z-20",children:(0,l.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,l.jsx)(i.default,{href:"/",children:(0,l.jsx)("div",{className:"flex-shrink-0",children:(0,l.jsx)("img",{src:"JamportSquare.png",alt:"",width:50,height:50,className:"h-10 w-10 object-cover rounded-md shadow-brand hover:shadow-brand-hover"})})}),(0,l.jsxs)("div",{className:"hidden md:flex space-x-8 items-center",children:[(0,l.jsx)(i.default,{href:"/features",className:"text-gray-400 hover:text-white",children:"Features"}),(0,l.jsx)(i.default,{href:"/pricing",className:"text-gray-400 hover:text-white",children:"Pricing"}),(0,l.jsx)(i.default,{href:"/how-it-works",className:"text-gray-400 hover:text-white",children:"How it works"}),(0,l.jsx)(i.default,{href:"/about",className:"text-gray-400 hover:text-white",children:"About us"}),(0,l.jsx)(i.default,{href:"/support",className:"text-gray-400 hover:text-white",children:"Support"}),(0,l.jsx)("div",{className:"border-l border-gray-400 h-6 mx-2"}),!s&&(0,l.jsx)(n.Button,{className:"rounded text-gray-400 py-2 px-1 outline-slate-100 outline-4 hover:text-white",onClick:t,children:"Login"}),s?(0,l.jsxs)(c.J2,{className:"relative",ref:m,children:[(0,l.jsxs)(c.O7,{className:"flex items-center space-x-2 text-white bg-zinc-800 rounded-3xl p-2 outline-none",onClick:()=>{u(!r)},children:[(0,l.jsx)(x.sdR,{className:"text-2xl"}),(0,l.jsx)("span",{children:s.email}),(0,l.jsx)(x.Ix0,{className:"text-2xl transform transition-transform ".concat(r?"rotate-180":"rotate-0")})]}),(0,l.jsx)(c.Hi,{transition:!0,className:"absolute z-10 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg divide-y divide-gray-200 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsxs)(i.default,{href:"/app",className:"flex justify-between rounded-lg py-2 px-3 transition hover:bg-zinc-700 items-center",children:[(0,l.jsx)("p",{className:"text-gray-200",children:"Open App"}),(0,l.jsx)(h.yxV,{className:"text-gray-200"})]}),(0,l.jsx)(i.default,{href:"/account",className:"block rounded-lg py-2 px-3 transition hover:bg-zinc-700",children:(0,l.jsx)("p",{className:" text-gray-200",children:"Account"})}),(0,l.jsx)("button",{className:"block w-full text-left rounded-lg py-2 px-3 transition hover:bg-zinc-700",onClick:async()=>{let{error:e}=await d.O.auth.signOut();e?console.error("Error logging out:",e):window.location.href="/"},children:(0,l.jsx)("p",{className:" text-red-600",children:"Logout"})})]})})]}):(0,l.jsx)(n.Button,{className:"rounded bg-jamportBrandColor py-2 px-4 text-sm text-white",children:"Register"})]}),(0,l.jsx)("div",{className:"md:hidden",children:(0,l.jsx)("button",{className:"text-gray-800 focus:outline-none"})})]})})})}var m=s(1942),p=s(3872);function j(){return(0,l.jsx)("footer",{className:"text-gray-400 py-10",children:(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsxs)("div",{className:"flex flex-wrap -mx-4 justify-center",children:[(0,l.jsxs)("div",{className:"w-full sm:w-1/2 md:w-1/4 px-4 mb-6 text-center",children:[(0,l.jsx)("h3",{className:"text-white text-lg font-semibold mb-4",children:"Solutions"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/solutions/solution1",children:"Solution 1"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/solutions/solution2",children:"Solution 2"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/solutions/solution3",children:"Solution 3"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/solutions/solution4",children:"Solution 4"})})]})]}),(0,l.jsxs)("div",{className:"w-full sm:w-1/2 md:w-1/4 px-4 mb-6 text-center",children:[(0,l.jsx)("h3",{className:"text-white text-lg font-semibold mb-4",children:"Support"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/support/contact",children:"Contact"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/support/help-center",children:"Help Center"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/support/faq",children:"FAQ"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/support/community",children:"Community"})})]})]}),(0,l.jsxs)("div",{className:"w-full sm:w-1/2 md:w-1/4 px-4 mb-6 text-center",children:[(0,l.jsx)("h3",{className:"text-white text-lg font-semibold mb-4",children:"Company"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/company/about",children:"About Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/company/careers",children:"Careers"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/company/blog",children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/company/press",children:"Press"})})]})]}),(0,l.jsxs)("div",{className:"w-full sm:w-1/2 md:w-1/4 px-4 mb-6 text-center",children:[(0,l.jsx)("h3",{className:"text-white text-lg font-semibold mb-4",children:"Legal"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/legal/privacy-policy",children:"Privacy Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/legal/terms-of-service",children:"Terms of Service"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/legal/cookie-policy",children:"Cookie Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/legal/accessibility",children:"Accessibility"})})]})]})]}),(0,l.jsxs)("div",{className:"mt-8 flex justify-center space-x-6",children:[(0,l.jsx)("a",{href:"https://www.youtube.com/@jamportmusic",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(m.V2E,{className:"text-gray-400 hover:text-white text-2xl"})}),(0,l.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(m.Am9,{className:"text-gray-400 hover:text-white text-2xl"})}),(0,l.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(p.LCd,{className:"text-gray-400 hover:text-white text-2xl"})}),(0,l.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(m.Zf_,{className:"text-gray-400 hover:text-white text-2xl"})}),(0,l.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(m.ltd,{className:"text-gray-400 hover:text-white text-2xl"})})]}),(0,l.jsxs)("div",{className:"mt-8 text-center text-gray-500 text-sm",children:["\xa9 ",new Date().getFullYear()," Jamport. All rights reserved."]})]})})}var f=s(5250),g=s(2040),w=s(5097),y=s(1826);let v=e=>{let{isOpen:t,closeModal:s}=e,[a,r]=(0,o.useState)(""),[i,n]=(0,o.useState)(""),[c,x]=(0,o.useState)(""),[h,u]=(0,o.useState)({email:"",password:"",captcha:""}),m=()=>{let e=!0,t={email:"",password:"",captcha:""};return a?/\S+@\S+\.\S+/.test(a)||(t.email="Email is invalid",e=!1):(t.email="Email is required",e=!1),i?i.length<6&&(t.password="Password must be at least 6 characters",e=!1):(t.password="Password is required",e=!1),c||(t.captcha="Please complete the CAPTCHA",e=!1),u(t),e},p=async()=>{if(m()){let{error:e}=await d.O.auth.signInWithPassword({email:a,password:i,options:{captchaToken:c}});e?alert(e.message):s()}};return(0,l.jsx)(f.u,{appear:!0,show:t,as:o.Fragment,children:(0,l.jsxs)(g.Vq,{as:"div",className:"relative z-50",onClose:s,children:[(0,l.jsx)(f.x,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl"})}),(0,l.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,l.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,l.jsx)(f.x,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,l.jsxs)(g.EM,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all relative",children:[(0,l.jsx)("button",{className:"absolute top-4 right-4 rounded-full text-gray-400 text-xl p-2 hover:text-white",onClick:s,children:(0,l.jsx)(w.bjh,{})}),(0,l.jsx)(g.$N,{as:"h3",className:"text-lg font-medium leading-6 text-white",children:"Login"}),(0,l.jsxs)("div",{className:"mt-2",children:[(0,l.jsx)("input",{type:"email",placeholder:"Email",value:a,onChange:e=>r(e.target.value),className:"w-full p-2 mt-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-jamportBrandColor"}),h.email&&(0,l.jsx)("p",{className:"text-red-500 text-sm",children:h.email}),(0,l.jsx)("input",{type:"password",placeholder:"Password",value:i,onChange:e=>n(e.target.value),className:"w-full p-2 mt-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-jamportBrandColor"}),h.password&&(0,l.jsx)("p",{className:"text-red-500 text-sm",children:h.password})]}),(0,l.jsx)(y.Nc,{siteKey:"0x4AAAAAAA04HsVFkYznUOsC",className:"w-full mt-2",onSuccess:e=>x(e)}),h.captcha&&(0,l.jsx)("p",{className:"text-red-500 text-sm",children:h.captcha}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)("button",{type:"button",className:"w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-jamportBrandColor",onClick:p,children:"Login"})})]})})})})]})})},b={title:"JAMPORT",description:"Built for Artists, by Artists"};var N=s(7449),C=s.n(N);function k(e){let{children:t}=e,[s,a]=(0,o.useState)(!1);return(0,l.jsxs)("html",{lang:"en",children:[(0,l.jsxs)(C(),{children:[(0,l.jsx)("title",{children:String(b.title)}),(0,l.jsx)("meta",{name:"description",content:String(b.description)})]}),(0,l.jsx)("body",{className:r().className,children:(0,l.jsxs)("main",{children:[(0,l.jsx)(v,{isOpen:s,closeModal:()=>a(!1)}),(0,l.jsx)(u,{openLoginDialog:()=>a(!0)}),t,(0,l.jsx)(j,{})]})})]})}},613:(e,t,s)=>{"use strict";s.d(t,{O:()=>l});let l=(0,s(4593).eI)("https://yvxsyzutjyhvraoojtsa.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eHN5enV0anlodnJhb29qdHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzMTMwMTQsImV4cCI6MjA0Mzg4OTAxNH0.xWfDmn-u_JEF2tRoKRcp3h2pHH5gvWVqQhC43XWXARM")},5214:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[351,699,706,51,452,240,142,235,895,141,130,215,744],()=>t(5561)),_N_E=e.O()}]);