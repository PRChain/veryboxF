"use strict";(self.webpackChunkverybox_tools=self.webpackChunkverybox_tools||[]).push([[442],{17201:function(e,t,r){r.d(t,{Z:function(){return u}});var i=r(47313),n=r(82315),o=r(18104),a=r(11198),s=r(69791),l=r(62111),d=r(46417);function c(e){return(0,d.jsx)(s.Z,{...e,direction:"right"})}function u(e){const t=(0,l.Z)(),[r,s]=i.useState([]),[u,p]=i.useState(!1),[m,g]=i.useState(void 0),[h,v]=i.useState(void 0);i.useEffect((()=>{v((()=>c)),r.length&&!m?(g({...r[0]}),s((e=>e.slice(1))),p(!0)):r.length&&m&&u&&p(!1)}),[r,m,u]);const f=(e,t)=>{"clickaway"!==t&&p(!1)};return i.useEffect((()=>{s((t=>[...t,{message:e.msg,key:(new Date).getTime()}]))}),[e.nonce]),(0,d.jsx)("div",{style:{background:t.palette.secondary.main},children:(0,d.jsx)(n.Z,{open:u,autoHideDuration:4e3,onClose:f,TransitionComponent:h,TransitionProps:{onExited:()=>{g(void 0)}},message:m?m.message:void 0,action:(0,d.jsx)(i.Fragment,{children:(0,d.jsx)(o.Z,{"aria-label":"close",color:"inherit",sx:{p:.5},onClick:f,children:(0,d.jsx)(a.Z,{})})})},m?m.key:void 0)})}},36442:function(e,t,r){r.r(t);var i=r(47313),n=r(81962),o=r(82937),a=r(10383),s=r(91294),l=r(74897),d=r(36368),c=r(33497),u=r(32703),p=r(17201),m=r(24240),g=r(12274),h=r(46417);t.default=function(){const{t:e}=(0,m.$)(),[t,r]=(0,i.useState)([]),[v,f]=(0,i.useState)("NotSelected"),[Z,b]=(0,i.useState)(""),[x,y]=(0,i.useState)(""),[P,S]=(0,i.useState)(""),[j,w]=i.useState(!1),k=e=>{let t=e.treeRoot;S(t);let r='["'+e.sign.join('","')+'"]';y(r)};(0,i.useEffect)((()=>{(()=>{const e=Object.keys(g.g);if(e.length>0){let t=[];e.forEach(((e,r)=>{t.push((0,h.jsx)(n.Z,{value:e,children:e},r))})),r(t)}})()}),[]);const[I,$]=(0,i.useState)({isOpen:!1,msg:"",nonce:""}),[C,R]=(0,i.useState)({}),F=()=>{const e=L(v);var t,r;return t="selectedProject",r=!e,R((e=>({...e,[t]:r}))),!!e||($({isOpen:!0,msg:"Project required",nonce:parseInt(1e4*Math.random())}),!1)},L=()=>"NotSelected"!=v;return(0,h.jsx)(c.Z,{title:e("getMerkleSign.title"),children:(0,h.jsx)(o.ZP,{container:!0,spacing:2,children:(0,h.jsx)(o.ZP,{item:!0,xs:12,children:(0,h.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,h.jsx)(o.ZP,{item:!0,xs:8,children:(0,h.jsxs)(a.Z,{fullWidth:!0,children:[(0,h.jsx)(s.Z,{id:"selectedProjectLabel",size:"small",children:"Project"}),(0,h.jsxs)(l.Z,{id:"selectedProject",label:"Project",labelId:"selectedProjectLabel",size:"small",value:v,onChange:e=>{f(e.target.value)},error:C.selectedProject,children:[(0,h.jsx)(n.Z,{value:"NotSelected",children:"Not Selected"},99999),t]})]})}),(0,h.jsx)(o.ZP,{item:!0,xs:6,children:(0,h.jsx)(d.Z,{fullWidth:!0,id:"address",label:"address",variant:"outlined",size:"small",value:Z,onChange:e=>{b(e.target.value)}})}),(0,h.jsx)(o.ZP,{item:!0,xs:2,children:(0,h.jsx)(o.ZP,{container:!0,spacing:2,children:(0,h.jsx)(o.ZP,{item:!0,xs:12,children:(0,h.jsx)(u.Z,{onClick:async e=>{let t;F(),w(!0),"NotSelected"!=v&&(t=await(0,g.t)(v,Z),t&&t.sign&&t.sign.length>0&&k(t)),w(!1)},loading:j,variant:"contained",children:(0,h.jsx)("span",{children:"Get Sign"})})})})}),(0,h.jsx)(o.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.ZP,{container:!0,spacing:2,children:(0,h.jsx)(o.ZP,{item:!0,xs:9,children:(0,h.jsx)(d.Z,{style:{fontSize:8},fullWidth:!0,id:"pk",label:"Sign:( use this )",multiline:!0,rows:6,disabled:!0,value:x})})})}),(0,h.jsx)(o.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.ZP,{container:!0,spacing:2,children:(0,h.jsx)(o.ZP,{item:!0,xs:9,children:(0,h.jsx)(d.Z,{style:{fontSize:8},fullWidth:!0,id:"pk",label:"TreeRoot:",multiline:!0,rows:6,disabled:!0,value:P})})})}),(0,h.jsx)(o.ZP,{item:!0,xs:12,style:{display:I.isOpen?" ":"none"},children:(0,h.jsx)(p.Z,{msg:I.msg,nonce:I.nonce})},I.msg)]})})})})}},12274:function(e,t,r){r.d(t,{t:function(){return o},g:function(){return i}});const i={"0x954055d4483cfde798631b19611ec8cba920bfb7":{name:"Test",twitter:"",url:"http://localhost:3001/sign",params:["address"],method:"get"}},n=r(31881).default,o=async(e,t)=>{if("0x954055d4483cfde798631b19611ec8cba920bfb7"===e){return await a(e,t)}},a=async(e,t)=>{const r=i[e].url;return await n.get(r,{params:{address:t}}).then((function(e){return{treeRoot:e.data.result.root?e.data.result.root:"",sign:e.data.result.s?e.data.result.s:[]}})).catch((function(e){return{treeRoot:"",sign:[]}}))}},32703:function(e,t,r){r.d(t,{Z:function(){return x}});var i=r(63366),n=r(87462),o=r(47313),a=r(28170),s=r(18677),l=r(21921),d=r(42379),c=r(53010),u=r(605),p=r(34207),m=r(32298);function g(e){return(0,m.Z)("MuiLoadingButton",e)}var h=(0,r(77430).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),v=r(46417);const f=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${h.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${h.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((e=>{let{ownerState:t,theme:r}=e;return(0,n.Z)({[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),[`&.${h.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0,marginLeft:-8}})})),b=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,a.Z)(r.loadingPosition)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===r.loadingPosition&&("outlined"===r.variant||"contained"===r.variant)&&{left:"small"===r.size?10:14},"start"===r.loadingPosition&&"text"===r.variant&&{left:6},"center"===r.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===r.loadingPosition&&("outlined"===r.variant||"contained"===r.variant)&&{right:"small"===r.size?10:14},"end"===r.loadingPosition&&"text"===r.variant&&{right:6},"start"===r.loadingPosition&&r.fullWidth&&{position:"relative",left:-10},"end"===r.loadingPosition&&r.fullWidth&&{position:"relative",right:-10})}));var x=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiLoadingButton"}),{children:o,disabled:d=!1,id:u,loading:m=!1,loadingIndicator:h,loadingPosition:x="center",variant:y="text"}=r,P=(0,i.Z)(r,f),S=(0,s.Z)(u),j=null!=h?h:(0,v.jsx)(p.Z,{"aria-labelledby":S,color:"inherit",size:16}),w=(0,n.Z)({},r,{disabled:d,loading:m,loadingIndicator:j,loadingPosition:x,variant:y}),k=(e=>{const{loading:t,loadingPosition:r,classes:i}=e,o={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,a.Z)(r)}`],endIcon:[t&&`endIconLoading${(0,a.Z)(r)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,a.Z)(r)}`]},s=(0,l.Z)(o,g,i);return(0,n.Z)({},i,s)})(w),I=m?(0,v.jsx)(b,{className:k.loadingIndicator,ownerState:w,children:j}):null;return(0,v.jsxs)(Z,(0,n.Z)({disabled:d||m,id:S,ref:t},P,{variant:y,classes:k,ownerState:w,children:["end"===w.loadingPosition?o:I,"end"===w.loadingPosition?I:o]}))}))},34207:function(e,t,r){r.d(t,{Z:function(){return $}});var i=r(63366),n=r(87462),o=r(47313),a=r(83061),s=r(21921),l=r(30686),d=r(28170),c=r(53010),u=r(42379),p=r(77430),m=r(32298);function g(e){return(0,m.Z)("MuiCircularProgress",e)}(0,p.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=r(46417);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,Z,b,x,y=e=>e;const P=44,S=(0,l.F4)(f||(f=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,l.F4)(Z||(Z=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,d.Z)(r.color)}`]]}})((e=>{let{ownerState:t,theme:r}=e;return(0,n.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:(r.vars||r).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,l.iv)(b||(b=y`
      animation: ${0} 1.4s linear infinite;
    `),S)})),k=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),I=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,d.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:r}=e;return(0,n.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,l.iv)(x||(x=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j)}));var $=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:u=!1,size:p=40,style:m,thickness:f=3.6,value:Z=0,variant:b="indeterminate"}=r,x=(0,i.Z)(r,v),y=(0,n.Z)({},r,{color:l,disableShrink:u,size:p,thickness:f,value:Z,variant:b}),S=(e=>{const{classes:t,variant:r,color:i,disableShrink:n}=e,o={root:["root",r,`color${(0,d.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,d.Z)(r)}`,n&&"circleDisableShrink"]};return(0,s.Z)(o,g,t)})(y),j={},$={},C={};if("determinate"===b){const e=2*Math.PI*((P-f)/2);j.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(Z),j.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,$.transform="rotate(-90deg)"}return(0,h.jsx)(w,(0,n.Z)({className:(0,a.Z)(S.root,o),style:(0,n.Z)({width:p,height:p},$,m),ownerState:y,ref:t,role:"progressbar"},C,x,{children:(0,h.jsx)(k,{className:S.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(I,{className:S.circle,style:j,ownerState:y,cx:P,cy:P,r:(P-f)/2,fill:"none",strokeWidth:f})})}))}))},81962:function(e,t,r){r.d(t,{Z:function(){return w}});var i=r(63366),n=r(87462),o=r(47313),a=r(83061),s=r(21921),l=r(17551),d=r(42379),c=r(53010),u=r(80315),p=r(56456),m=r(49926),g=r(2995),h=r(92310),v=r(55170),f=r(16206),Z=r(77430),b=r(32298);function x(e){return(0,b.Z)("MuiMenuItem",e)}var y=(0,Z.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),P=r(46417);const S=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],j=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${y.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${y.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${y.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${y.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${h.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${h.Z.inset}`]:{marginLeft:52},[`& .${f.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${f.Z.inset}`]:{paddingLeft:36},[`& .${v.Z.root}`]:{minWidth:36}},!r.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},r.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${v.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var w=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:p=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:f,role:Z="menuitem",tabIndex:b,className:y}=r,w=(0,i.Z)(r,S),k=o.useContext(u.Z),I={dense:p||k.dense||!1,disableGutters:v},$=o.useRef(null);(0,m.Z)((()=>{l&&$.current&&$.current.focus()}),[l]);const C=(0,n.Z)({},r,{dense:I.dense,divider:h,disableGutters:v}),R=(e=>{const{disabled:t,dense:r,divider:i,disableGutters:o,selected:a,classes:l}=e,d={root:["root",r&&"dense",t&&"disabled",!o&&"gutters",i&&"divider",a&&"selected"]},c=(0,s.Z)(d,x,l);return(0,n.Z)({},l,c)})(r),F=(0,g.Z)($,t);let L;return r.disabled||(L=void 0!==b?b:-1),(0,P.jsx)(u.Z.Provider,{value:I,children:(0,P.jsx)(j,(0,n.Z)({ref:F,role:Z,tabIndex:L,component:d,focusVisibleClassName:(0,a.Z)(R.focusVisible,f),className:(0,a.Z)(R.root,y)},w,{ownerState:C,classes:R}))})}))},36368:function(e,t,r){r.d(t,{Z:function(){return M}});var i=r(87462),n=r(63366),o=r(47313),a=r(83061),s=r(21921),l=r(33362),d=r(42379),c=r(53010),u=r(22449),p=r(31731),m=r(42318),g=r(91294),h=r(10383),v=r(67223),f=r(11736),Z=r(28170),b=r(77430),x=r(32298);function y(e){return(0,x.Z)("MuiFormHelperText",e)}var P,S=(0,b.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),j=r(46417);const w=["children","className","component","disabled","error","filled","focused","margin","required","variant"],k=(0,d.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${(0,Z.Z)(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({color:(t.vars||t).palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${S.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${S.error}`]:{color:(t.vars||t).palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})}));var I=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiFormHelperText"}),{children:o,className:l,component:d="p"}=r,u=(0,n.Z)(r,w),p=(0,f.Z)(),m=(0,v.Z)({props:r,muiFormControl:p,states:["variant","size","disabled","error","filled","focused","required"]}),g=(0,i.Z)({},r,{component:d,contained:"filled"===m.variant||"outlined"===m.variant,variant:m.variant,size:m.size,disabled:m.disabled,error:m.error,filled:m.filled,focused:m.focused,required:m.required}),h=(e=>{const{classes:t,contained:r,size:i,disabled:n,error:o,filled:a,focused:l,required:d}=e,c={root:["root",n&&"disabled",o&&"error",i&&`size${(0,Z.Z)(i)}`,r&&"contained",l&&"focused",a&&"filled",d&&"required"]};return(0,s.Z)(c,y,t)})(g);return(0,j.jsx)(k,(0,i.Z)({as:d,ownerState:g,className:(0,a.Z)(h.root,l),ref:t},u,{children:" "===o?P||(P=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):o}))})),$=r(74897);function C(e){return(0,x.Z)("MuiTextField",e)}(0,b.Z)("MuiTextField",["root"]);const R=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],F={standard:u.Z,filled:p.Z,outlined:m.Z},L=(0,d.ZP)(h.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({});var M=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTextField"}),{autoComplete:o,autoFocus:d=!1,children:u,className:p,color:m="primary",defaultValue:h,disabled:v=!1,error:f=!1,FormHelperTextProps:Z,fullWidth:b=!1,helperText:x,id:y,InputLabelProps:P,inputProps:S,InputProps:w,inputRef:k,label:M,maxRows:z,minRows:N,multiline:T=!1,name:O,onBlur:q,onChange:B,onFocus:W,placeholder:E,required:D=!1,rows:H,select:V=!1,SelectProps:G,type:_,value:A,variant:J="outlined"}=r,K=(0,n.Z)(r,R),Q=(0,i.Z)({},r,{autoFocus:d,color:m,disabled:v,error:f,fullWidth:b,multiline:T,required:D,select:V,variant:J}),U=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},C,t)})(Q);const X={};"outlined"===J&&(P&&"undefined"!==typeof P.shrink&&(X.notched=P.shrink),X.label=M),V&&(G&&G.native||(X.id=void 0),X["aria-describedby"]=void 0);const Y=(0,l.Z)(y),ee=x&&Y?`${Y}-helper-text`:void 0,te=M&&Y?`${Y}-label`:void 0,re=F[J],ie=(0,j.jsx)(re,(0,i.Z)({"aria-describedby":ee,autoComplete:o,autoFocus:d,defaultValue:h,fullWidth:b,multiline:T,name:O,rows:H,maxRows:z,minRows:N,type:_,value:A,id:Y,inputRef:k,onBlur:q,onChange:B,onFocus:W,placeholder:E,inputProps:S},X,w));return(0,j.jsxs)(L,(0,i.Z)({className:(0,a.Z)(U.root,p),disabled:v,error:f,fullWidth:b,ref:t,required:D,color:m,variant:J,ownerState:Q},K,{children:[null!=M&&""!==M&&(0,j.jsx)(g.Z,(0,i.Z)({htmlFor:Y,id:te},P,{children:M})),V?(0,j.jsx)($.Z,(0,i.Z)({"aria-describedby":ee,id:Y,labelId:te,value:A,input:ie},G,{children:u})):ie,x&&(0,j.jsx)(I,(0,i.Z)({id:ee},Z,{children:x}))]}))}))}}]);