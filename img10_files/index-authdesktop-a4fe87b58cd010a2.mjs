(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50011],{898813:(e,t,n)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/homefeed"]=function(){return n(601898).Z}},569622:(e,t,n)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/index"]=function(){return n(601898).Z}},77377:(e,t,n)=>{(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/notifications"]=function(){return n(601898).Z}},220465:(e,t,n)=>{n.d(t,{ZP:()=>_});var i=n(667294),s=n(966338),r=n(618446),o=n.n(r),c=n(764990),a=n(123159),u=n(332611),d=n(780280),p=n(785893);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const x={shouldUsePlacedExperience:!0,dispatchMountActionDuringSSR:!1,isAdvertiserPlacement:!1},_=(e,t={},n)=>r=>{const _=function(e){return t=>({experience:t.experiences[e],experiencesMulti:t.experiencesMulti?t.experiencesMulti[e]:void 0})}(e);n={...x,...n};const m=function(e,t,n=!0,r=!0,x=!1,_){class m extends i.Component{constructor(e){super(e),l(this,"state",{extraContext:void 0}),l(this,"setExtraContextState",(e=>{o()(this.state.extraContext,e)||this.setState({extraContext:e})}))}componentDidMount(){this.dispatchPlacementMount()}componentDidUpdate(n,i){const{dispatch:s,experience:r,requestContext:c}=this.props;let a=i.extraContext,d=this.state.extraContext||t||{};"function"==typeof t&&(a=t(n,i.extraContext||{}),d=t(this.props,this.state.extraContext||{})),d&&Object.keys(d).length>0&&!o()(a,d)&&s((0,u.pz)([e],c.isBot,d)),!r||n.experience&&r.id===n.experience.id||s((0,u.kd)(e,d))}componentWillUnmount(){this.props.unmountPlacement(e)}dispatchPlacementMount(){const n="function"==typeof t?t(this.props,this.state.extraContext||{}):{...t},i=x&&null!=n&&n.advertiser_id?{advertiserId:n.advertiser_id}:void 0;this.props.mountPlacement(e,n,i)}render(){const{experience:e,experiencesMulti:t}=this.props,n={[x?"advertiserExperience":"experience"]:(0,c.E3)(e)?e:null};return(0,p.jsx)(_,{...this.props,setPlacementExtraContext:this.setExtraContextState,...n,experiencesMulti:t})}}function h(e){const t=(0,d.B)(),n=(0,s.useDispatch)(),{mountPlacement:i,unmountPlacement:r}=(0,a.M)();return(0,p.jsx)(m,{...e,dispatch:n,mountPlacement:i,requestContext:t,unmountPlacement:r})}return h.displayName=`withPlacement(${_.displayName||_.name||"Component"})`,h}(e,t,n.shouldUsePlacedExperience,n.dispatchMountActionDuringSSR,n.isAdvertiserPlacement,r);return(0,s.connect)(_)(m)}},45970:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(785893);function s(e){const{resourceDependencies:t=(()=>[])}=e;return function(e){function n(t){return(0,i.jsx)(e,{...t})}return n.WrappedComponent=e,n.displayName="StaticRouteData",n.getResourceDependencies=t,n}}},81636:(e,t,n)=>{n.d(t,{Q:()=>c,Z:()=>a});var i=n(667294),s=n(112690),r=n(780280),o=n(385740);function c(e,t){const{setViewContextData:n}=(0,o.sV)(),{requestIdentifier:c}=(0,r.B)(),a=(0,s.Z)();(0,i.useEffect)((()=>{var t;e&&(n({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),a({...e,event_type:13,request_identifier:c}))}),[t])}function a(e){const{children:t,log:n}=e;return c(n),t||null}},385740:(e,t,n)=>{n.d(t,{BE:()=>u,Ih:()=>d,SU:()=>p,sV:()=>c});var i=n(667294),s=n(425288),r=n(785893);const{Provider:o,useHook:c}=(0,s.Z)("View");let a;function u(){return a}function d({children:e,initialState:t={}}){const[n,s]=(0,i.useState)(t),c=(0,i.useMemo)((()=>({clearViewContextData:()=>{a={},s({})},setViewContextData:e=>{a={...a,...e},s((t=>({...t,...e})))}})),[]);return(0,r.jsx)(i.Fragment,{children:(0,r.jsx)(o,{value:{viewContextData:n,...c},children:e})})}function p(){const{viewContextData:e}=c();return e}},601898:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(667294),s=n(797803),r=n(319915),o=n(126098),c=n(335972),a=n(947599),u=n(922192),d=n(19121),p=n(220465),l=n(883119),x=n(708206),_=n(622096),m=n(30287),h=n(826067),f=n(217468),w=n(479301),P=n(81636),D=n(45970),v=n(925927),E=n(785893);const S=(0,i.lazy)((()=>n.e(89870).then(n.bind(n,386884)))),A=(0,i.lazy)((()=>Promise.all([n.e(66562),n.e(94817)]).then(n.bind(n,481592)))),j=(0,i.lazy)((()=>n.e(6094).then(n.bind(n,481980)))),C=(0,i.lazy)((()=>Promise.all([n.e(5558),n.e(52700),n.e(32961),n.e(18195)]).then(n.bind(n,880934))));function Z({experience:e,isPostRenux:t}){const o=(0,v.TH)(),{params:c}=(0,v.$B)(),{conversationOpen:u,dropdownOpen:p}=(0,w.Z5)();(0,P.Q)({view_type:1,view_parameter:92});const{conversation_id:x,tab:_}=(0,h.mB)(o.search),m=c.conversation_id||x;(0,i.useEffect)((()=>{m&&u(m)}),[m]),(0,i.useEffect)((()=>{"inbox"===_&&p()}),[_]),(0,i.useEffect)((()=>{const e=document.getElementById("rum-config");null!==e&&(window.pinterest_rum_client_config=JSON.parse(e.textContent),n.e(4442).then(n.bind(n,819202)).then((e=>{e.default()})))}),[]);const D=(0,d.Z)(),Z=D.isAuth?D.email:"",g=(0,f.tc)("m10n_measurement_pinterest_tag_us")().anyEnabled;(0,i.useEffect)((()=>{g&&window.pintrk("track","pagevisit",{lead_type:"Pinterest homefeed",em:Z})}),[g,Z]);const O=null==e?void 0:e.experience_id,y=10105===O,b=500278===O;return[500787,500894].includes(O)?(0,E.jsx)(r.Z,{name:"SafeSuspense_AuthHomePage_ExperienceBizNuxFullscreenContainer",children:(0,E.jsx)(a.Z,{children:(0,E.jsx)(A,{fromBizHub:!0,placementId:11,experienceId:500787})})}):(0,E.jsxs)(l.xu,{children:[(0,E.jsx)(r.Z,{name:"SafeSuspense_AuthHomePage_ExperiencesBeforeHomefeed",children:(0,E.jsx)(a.Z,{children:(0,E.jsx)(C,{experience:e,isNux:y})})}),y||b?(0,E.jsx)(r.Z,{name:"SafeSuspense_AuthHomePage_BackgroundPinImages",children:(0,E.jsx)(a.Z,{children:(0,E.jsx)(S,{inNux:y,inRenux:!y,isFlexible:!0})})}):(0,E.jsx)(s.Z,{experience:e,isPostRenux:t}),(0,E.jsx)(r.Z,{name:"SafeSuspense_AuthHomePage_ExperiencesAfterHomefeed",children:(0,E.jsx)(a.Z,{children:(0,E.jsx)(j,{})})})]})}const g=(0,x.compose)((0,D.Z)({resourceDependencies:(e,t)=>[{name:"UserHomefeedResource",options:(0,u.Z)({viewerIsPartner:e.user.is_partner,staticFeed:Object.prototype.hasOwnProperty.call(t,"pwt_performance_testing"),inNewsHub:!1})}]}),(0,p.ZP)(11,((e,t)=>({using_pwa:(0,m.So)(window),completed_mini_renux:"true"===(0,_.qn)("completedMiniRenux"),chrome_push_subscription:(0,o.Z)()}))))((function(e){const{experience:t}=e,n=null==t?void 0:t.experience_id,s=10105===n,r=[500787,500894].includes(n),o=500278===n,a=(e=>{const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{t.current=e})),Boolean(t.current&&!e)})(o);return s||r||o?(0,E.jsx)(Z,{...e,isPostRenux:a}):(0,E.jsx)(c.Z,{surface:"homefeed",measureGridVisuallyComplete:!0,children:(0,E.jsx)(Z,{...e,isPostRenux:a})})}))}},e=>{e.O(0,[50011],(()=>{[97270,69965,77638,92982,48035,5035,25848,43473,22347,22538,1593].map(e.E)}),5),e.O(0,[50011],(()=>{[97270,69965,77638,92982,48035,5035,25848,43473,22347,22538,1593].map(e.E)}),5),e.O(0,[50011],(()=>{[97270,69965,77638,92982,48035,5035,25848,43473,22347,22538,1593].map(e.E)}),5);var t=t=>e(e.s=t);e.O(0,[97270,83119,67631,66113,62015,25927,40199,48358,54372,87072,88273,58150,26255,48719,69853,76532,45847,4646,54077,29635,40605,35957,46539],(()=>(t(569622),t(898813),t(77377))));e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/index-authdesktop-a4fe87b58cd010a2.mjs.map