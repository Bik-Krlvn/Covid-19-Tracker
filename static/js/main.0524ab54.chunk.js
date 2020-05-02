(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{108:function(e,t,a){e.exports=a(257)},113:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l);a(113),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(8),o=a(14),i=a.n(o),m=function(){return r.a.createElement("footer",{className:"footer pt-0"},r.a.createElement("div",{className:"row align-items-center justify-content-lg-between"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"copyright text-center  text-lg-left  text-muted"},"\xa9 2020"," ",r.a.createElement("a",{href:"https://www.creative-tim.com",className:"font-weight-bold ml-1"},"Covid-19-Tracker"))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("ul",{className:"nav nav-footer justify-content-center justify-content-lg-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#!",className:"nav-link"},"Powered by Infordas Ghana Limited")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html",className:"nav-link"},"Sources")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/Bik-Krlvn/Covid-19-Tracker/blob/develop/LICENSE",className:"nav-link"},"MIT License"))))))},u=a(97),d=a.n(u),p=function(e){var t=e.count,a=e.icon,n=e.gradient,l=e.title,c=e.date;return(r.a.createElement("div",{className:"col-xl-4 col-md-6"},r.a.createElement("div",{className:"card card-stats"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",{className:"card-title text-uppercase text-muted mb-0"},l),r.a.createElement("span",{className:"h2 font-weight-bold mb-0"},r.a.createElement(d.a,{start:0,end:t,duration:2.5,separator:","}))),r.a.createElement("div",{className:"col-auto"},r.a.createElement("div",{className:n},r.a.createElement("i",{className:a})))),r.a.createElement("p",{className:"mt-3 mb-0 text-sm"},r.a.createElement("span",{className:"text-success mr-2"},r.a.createElement("i",{className:"fa fa-arrow-up"})),r.a.createElement("span",{className:"text-nowrap"},"Since ",new Date(c).toDateString()))))))};p.defaultProps={count:0,icon:"ni ni-chart-pie-35",gradient:"icon icon-shape bg-gradient-orange text-white rounded-circle shadow"};var h,v=p,f=function(e){var t=e.confirmed,a=e.recovered,n=e.deaths,l=e.lastUpdate;return(r.a.createElement("div",{className:"row"},r.a.createElement(v,{title:"Confirmed Cases",icon:"ni ni-atom",count:t&&t.value||0,gradient:"icon icon-shape bg-gradient-red text-white rounded-circle shadow",date:l}),r.a.createElement(v,{title:"Recovered",icon:"ni ni-chart-pie-35",count:a&&a.value||0,gradient:"icon icon-shape bg-gradient-orange text-white rounded-circle shadow",date:l}),r.a.createElement(v,{title:"Deaths",icon:"ni ni-ambulance",count:n&&n.value||0,gradient:"icon icon-shape bg-gradient-blue text-white rounded-circle shadow",date:l})))},E=a(11),b=a.n(E),g=a(13),N=a(25),y=a.n(N),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(){var t=Object(g.a)(b.a.mark((function t(a,n){var r,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=null===e?"/":"countries/".concat(e),t.next=4,y.a.get(r);case 4:l=t.sent,a(l.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}())},x=function(){var e=Object(s.useDispatch)(),t=Object(s.useSelector)((function(e){return e.country.selectedCountry})),a=Object(s.useSelector)((function(e){return e.stats.confirmed})),r=Object(s.useSelector)((function(e){return e.stats.recovered})),l=Object(s.useSelector)((function(e){return e.stats.deaths})),c=Object(s.useSelector)((function(e){return e.stats.lastUpdate}));return Object(n.useEffect)((function(){!function(){return e((a=t,function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(a);case 3:n=e.sent,t({type:"GET_TOTAL_COUNTRY_COUNT",payload:n}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o.toastr.error("oops","Sorry something went wrong"),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var a}()}),[e,t]),{confirmed:a,recovered:r,deaths:l,lastUpdate:c}},k=function(){var e=x(),t=e.confirmed,a=e.recovered,n=e.deaths,l=e.lastUpdate;return(r.a.createElement(f,{confirmed:t,recovered:a,deaths:n,lastUpdate:l}))},C=a(44),O=a(106),j=function(e){var t=e.country,a=e.OnCountryClick;return r.a.createElement("div",{className:"list-group list-group-flush"},r.a.createElement("a",{href:"#!",onClick:function(){a(t.name)},className:"list-group-item list-group-item-action flex-column align-items-start py-4 px-4"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col "},r.a.createElement("h4",{className:"mb-0"},t.name),r.a.createElement("span",{className:"text-success"},"\u25cf"),r.a.createElement("small",null,t.iso2)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary"},"Plot")))))},T=function(e,t){var a=Object(n.useState)(1),r=Object(C.a)(a,2),l=r[0],c=r[1],s=Math.ceil(e.length/t);return{next:function(){c((function(e){return Math.min(e+1,s)}))},prev:function(){c((function(e){return Math.ceil(e-1,1)}))},jump:function(e){var t=Math.max(1,e);c((function(e){return Math.min(t,s)}))},currentData:function(){var a=(l-1)*t,n=a+t;return e.slice(a,n)},currentPage:l,maxPage:s}},S=function(e){return function(){var t=Object(g.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SELECTED_COUNTRY",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=Object(s.useDispatch)();return{onSearchCountry:function(t){return e(S(t))}}},I=function(e){var t=e.countries,a=e.handleClickAction,l=T(t,5),c=l.currentData,s=l.next,o=l.currentPage,i=l.prev,m=l.jump,u=Object(n.useState)(""),d=Object(C.a)(u,2),p=d[0],h=d[1],v=D().onSearchCountry,f=c();return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-transparent"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("h6",{className:"text-uppercase text-muted ls-1 mb-1"},"Countries"),r.a.createElement("h5",{className:"h3 mb-0"},"Available"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group mb-0"},r.a.createElement("div",{className:"input-group input-group-lg input-group-flush"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("span",{className:"fas fa-search"}))),r.a.createElement("div",{className:"form-control"},r.a.createElement(O.a,{onKeyDown:function(e){if(13===e.keyCode&&p.length){var t="Global"===p[0].name?null:p[0];v(t)}},id:"country_opt",placeholder:"search country",labelKey:function(e){return"".concat(e.name)},options:t,onChange:function(e){h((function(t){return e}))},selected:p})))))))),r.a.createElement("div",{className:"card-body"},f&&f.map((function(e,t){return r.a.createElement(j,{key:"".concat(e.iso2,"_").concat(t),country:e,OnCountryClick:a})}))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination justify-content-end mb-0"},r.a.createElement("li",{className:"page-item ".concat(o>1?"enable":"disabled")},r.a.createElement("a",{className:"page-link",href:"#!",tabIndex:-1,onClick:function(){return i()}},r.a.createElement("i",{className:"fas fa-angle-left"}),r.a.createElement("span",{className:"sr-only"},"Previous"))),[1,2,3,4,5,6,7].map((function(e,t){return r.a.createElement("li",{className:"page-item ".concat(o===e?"active":""),key:t},r.a.createElement("a",{className:"page-link",href:"#!",onClick:function(){return m(e)}},e))})),r.a.createElement("li",{className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#!",onClick:function(){return s()}},r.a.createElement("i",{className:"fas fa-angle-right"}),r.a.createElement("span",{className:"sr-only"},"Next")))))))},G=function(){var e=Object(s.useDispatch)(),t=Object(s.useSelector)((function(e){return e.country.countries}));return Object(n.useEffect)((function(){e(function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(g.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/countries");case 3:n=e.sent,t(n.data.countries),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}());case 3:a=e.sent,t({type:"GET_COUNTRIES",payload:a}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o.toastr.error("Oops","something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),{countries:t,onCountryClick:function(t){t&&"Global"===t&&(t=null),e(S(t))}}},U=function(){var e=G(),t=e.countries,a=e.onCountryClick;return(r.a.createElement("div",null,r.a.createElement(I,{countries:t,handleClickAction:a})))},_=a(63),A=function(e){var t=e.items,a=e.subItem,n=a.confirmed,l=a.recovered,c=a.deaths,s=a.currentCountry,o=0===t.length?null:r.a.createElement(_.b,{data:{labels:t.map((function(e){return e.date})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Confirmed",borderColor:"#36A2EB",fill:!0},{data:t.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#FF6384",fill:!0,backgroundColor:"rgba(205,0,0,0.5)"}]}}),i=l?r.a.createElement(_.a,{data:{labels:["Confirmed Cases","Recovered","Deaths"],datasets:[{label:"People",data:[n.value,l.value,c.value],backgroundColor:["rgba(5, 155, 255,0.5)","rgba(34, 206, 206,0.5)","rgba(255, 61, 103,0.5)"]}]},options:{title:{display:!0,text:"Country: ".concat(s),fontColor:"white"},legend:{display:!1}}}):null;return r.a.createElement("div",null,s?i:o)},L=function(e){var t=e.items,a=e.selectedCountry,n=a.currentCountry,l=n?"":"active",c="active"===l?"":"active";return r.a.createElement("div",{className:"card bg-default"},r.a.createElement("div",{className:"card-header bg-transparent"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("h6",{className:"text-light text-uppercase ls-1 mb-1"},"Overview"),r.a.createElement("h5",{className:"h3 text-white mb-0"},"Graph")),r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"nav nav-pills justify-content-end"},r.a.createElement("li",{className:"nav-item mr-2 mr-md-0"},r.a.createElement("a",{href:"##",className:"nav-link py-2 px-3 ".concat(l),"data-toggle":"tab"},r.a.createElement("span",{className:"d-none d-md-block"},"Global"),r.a.createElement("span",{className:"d-md-none"},"G"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"##",className:"nav-link py-2 px-3 ".concat(c),"data-toggle":"tab"},r.a.createElement("span",{className:"d-none d-md-block"},null===n?"Country":n),r.a.createElement("span",{className:"d-md-none"},"C"))))))),r.a.createElement("div",{className:"card-body"},r.a.createElement(A,{items:t,subItem:a})))},P=function(){var e=Object(s.useDispatch)(),t=Object(s.useSelector)((function(e){return e.graph.global}));return Object(n.useEffect)((function(){e(function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(g.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/daily");case 3:n=e.sent,r=n.data.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}());case 3:a=e.sent,t({type:"GET_GLOBAL_DAILY",payload:a}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o.toastr.error("oops","something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),{globalData:t}},R=function(){return{currentCountry:Object(s.useSelector)((function(e){return e.country.selectedCountry})),confirmed:Object(s.useSelector)((function(e){return e.stats.confirmed})),recovered:Object(s.useSelector)((function(e){return e.stats.recovered})),deaths:Object(s.useSelector)((function(e){return e.stats.deaths}))}},M=function(){var e=P().globalData,t=R(),a={currentCountry:t.currentCountry,confirmed:t.confirmed,deaths:t.deaths,recovered:t.recovered};return r.a.createElement(L,{items:e,selectedCountry:a})},B=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"h3 mb-0"},"Basic protective measures against the new coronavirus")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"timeline timeline-one-side","data-timeline-content":"axis","data-timeline-axis-style":"dashed"},r.a.createElement("div",{className:"timeline-block"},r.a.createElement("span",{className:"timeline-step badge-success"},r.a.createElement("i",{className:"ni ni-bell-55"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("div",{className:"d-flex justify-content-between pt-1"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted text-sm font-weight-bold"},"Know how it spreads"))),r.a.createElement("ul",null,r.a.createElement("li",null,"There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19)."),r.a.createElement("li",null,"The best way to prevent illness is to avoid being exposed to this virus."),r.a.createElement("li",null,"The virus is thought to spread mainly from person-to-person",r.a.createElement("ul",null,r.a.createElement("li",null,"Between people who are in close contact with one another (within about 6 feet)."),r.a.createElement("li",null,"Through respiratory droplets produced when an infected person coughs, sneezes or talks."),r.a.createElement("li",null,"These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs."),r.a.createElement("li",null,"Some recent studies have suggested that COVID-19 may be spread by people who are not showing symptoms.")))))),r.a.createElement("div",{className:"timeline-block"},r.a.createElement("span",{className:"timeline-step badge-danger"},r.a.createElement("i",{className:"ni ni-atom"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("div",{className:"d-flex justify-content-between pt-1"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted text-sm font-weight-bold"},"Cover your mouth and nose with a cloth face cover when around others"))),r.a.createElement("ul",null,r.a.createElement("li",null,"You could spread COVID-19 to others even if you do not feel sick."),r.a.createElement("li",null,"Everyone should wear a cloth face cover when they have to go out in public, for example to the grocery store or to pick up other necessities.",r.a.createElement("ul",null,r.a.createElement("li",null,"Cloth face coverings should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance."))),r.a.createElement("li",null,"The cloth face cover is meant to protect other people in case you are infected."),r.a.createElement("li",null,"Do NOT use a facemask meant for a healthcare worker."),r.a.createElement("li",null,"Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.")))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"timeline timeline-one-side","data-timeline-content":"axis","data-timeline-axis-style":"dashed"},r.a.createElement("div",{className:"timeline-block"},r.a.createElement("span",{className:"timeline-step badge-success"},r.a.createElement("i",{className:"ni ni-bell-55"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("div",{className:"d-flex justify-content-between pt-1"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted text-sm font-weight-bold"},"Wash your hands often"))),r.a.createElement("ul",null,r.a.createElement("li",null,"Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing."),r.a.createElement("li",null,"If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry."),r.a.createElement("li",null,"Avoid touching your eyes, nose, and mouth with unwashed hands.")))),r.a.createElement("div",{className:"timeline-block"},r.a.createElement("span",{className:"timeline-step badge-danger"},r.a.createElement("i",{className:"ni ni-atom"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("div",{className:"d-flex justify-content-between pt-1"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted text-sm font-weight-bold"},"Avoid close contact"))),r.a.createElement("ul",null,r.a.createElement("li",null,"Avoid close contact with people who are sick"),r.a.createElement("li",null,"Stay home as much as possible."),r.a.createElement("li",null,"Put distance between yourself and other people.",r.a.createElement("ul",null,r.a.createElement("li",null,"Remember that some people without symptoms may be able to spread virus."),r.a.createElement("li",null,"Keeping distance from others is especially important for people who are at higher risk of getting very sick.")))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"timeline timeline-one-side","data-timeline-content":"axis","data-timeline-axis-style":"dashed"},r.a.createElement("div",{className:"timeline-block"},r.a.createElement("span",{className:"timeline-step badge-success"},r.a.createElement("i",{className:"ni ni-bell-55"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("div",{className:"d-flex justify-content-between pt-1"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted text-sm font-weight-bold"},"Clean and disinfect"))),r.a.createElement("ul",null,r.a.createElement("li",null,"Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks."),r.a.createElement("li",null,"If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection."),r.a.createElement("li",null,"Then, use a household disinfectant. Most common EPA-registered household disinfectantsexternal will work.")))),r.a.createElement("div",{className:"timeline-block"},r.a.createElement("span",{className:"timeline-step badge-danger"},r.a.createElement("i",{className:"ni ni-atom"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("div",{className:"d-flex justify-content-between pt-1"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-muted text-sm font-weight-bold"},"Cover coughs and sneezes"))),r.a.createElement("ul",null,r.a.createElement("li",null,"If you are in a private setting and do not have on your cloth face covering, remember to always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow."),r.a.createElement("li",null,"Throw used tissues in the trash."),r.a.createElement("li",null,"Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol."))))))))))},Y=function(){var e=R().currentCountry;return(r.a.createElement("div",{className:"main-content",id:"panel"},r.a.createElement("nav",{className:"navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom"},r.a.createElement("div",{className:"container-fluid"})),r.a.createElement("div",{className:"header bg-primary pb-6"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"header-body"},r.a.createElement("div",{className:"row align-items-center py-4"},r.a.createElement("div",{className:"col-lg-6 col-7"},r.a.createElement("h6",{className:"h2 text-white d-inline-block mb-0"},r.a.createElement("i",{className:"fa fa-flag"})," Country: ",null===e?"Global":e))),r.a.createElement(k,null)))),r.a.createElement("div",{className:"container-fluid mt--6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-8"},r.a.createElement(M,null)),r.a.createElement("div",{className:"col-xl-4"},r.a.createElement(U,null))),r.a.createElement(B,null),r.a.createElement(m,null))))},z=a(19),K=a(104),W=a(105),V=a(17),F=a(21),J=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,r=n.type,l=n.payload,c=t[r];return c?c(a,l):a}},q=J({confirmed:null,recovered:null,deaths:null,lastUpdate:null},Object(V.a)({},"GET_TOTAL_COUNTRY_COUNT",(function(e,t){return Object(F.a)({},e,{},t)}))),$=a(107),H=J({countries:[{name:"Global",iso2:"Gl",iso3:"none"}],selectedCountry:null},(h={},Object(V.a)(h,"GET_COUNTRIES",(function(e,t){return Object(F.a)({},e,{countries:Object($.a)(e.countries.concat(t))})})),Object(V.a)(h,"SELECTED_COUNTRY",(function(e,t){return Object(F.a)({},e,{selectedCountry:t||null})})),h)),Q=J({global:[]},Object(V.a)({},"GET_GLOBAL_DAILY",(function(e,t){return Object(F.a)({},e,{global:t})}))),X=Object(z.combineReducers)({toastr:o.reducer,stats:q,country:H,graph:Q}),Z=(a(256),function(){var e=function(e){var t=[W.a],a=[z.applyMiddleware.apply(void 0,t)],n=K.composeWithDevTools.apply(void 0,a);return Object(z.createStore)(X,e,n)}();return(r.a.createElement(s.Provider,{store:e},r.a.createElement(i.a,{timeOut:4e3,newestOnTop:!1,preventDuplicates:!0,position:"top-right",transitionIn:"fadeIn",transitionOut:"fadeOut"}),r.a.createElement(Y,null)))});y.a.defaults.baseURL="https://covid19.mathdro.id/api",c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.0524ab54.chunk.js.map