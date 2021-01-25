(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{76:function(e,c,n){},77:function(e,c,n){},91:function(e,c,n){"use strict";n.r(c);var s=n(5),t=n(2),a=n.n(t),r=n(66),l=n.n(r),i=(n(76),n(77),n(23)),u=n(31),j=n(10),h=n.p+"static/media/spacex.f74fc60d.jpg",o=n(39),m=n(40),b=n.n(m),d=n(41),x=n.n(d);var O=function(e){var c=e.launch,n=c.flight_number,t=c.mission_name,a=c.launch_date_local,r=c.launch_success;return Object(s.jsx)("div",{className:"card card-body mb-3",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-9",children:[Object(s.jsxs)("h5",{children:["Mission:"," ",Object(s.jsx)("span",{className:b()({"text-success":r,"text-danger":!r}),children:t})]}),Object(s.jsxs)("p",{children:["Date: ",Object(s.jsx)(x.a,{format:"DD/MM/YYYY HH:mm",children:a})]})]}),Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsx)(u.b,{to:"/launch/".concat(n),className:"btn btn-secondary",children:"Launch Details"})})]})})};var g=function(){return Object(s.jsxs)("div",{className:"my-3",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Succeed"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Failed"]})]})},p=n(102);function _(){var e=Object(o.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return _=function(){return e},e}var f=Object(i.gql)(_());var N=function(){var e=Object(i.useQuery)(f),c=e.loading,n=e.error,t=e.data;return c?Object(s.jsx)(p.a,{}):(n&&console.log(n),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(s.jsx)(g,{}),t.launches.map((function(e){return Object(s.jsx)(O,{launch:e},e.flight_number)})),Object(s.jsx)("button",{className:"btn btn-primary",children:"Read More"})]}))};function v(){var e=Object(o.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return v=function(){return e},e}var y=Object(i.gql)(v());var k=function(e){var c=e.match.params.flight_number;c=parseInt(c);var n=Object(i.useQuery)(y,{variables:{flight_number:c}}),t=n.loading,a=n.error,r=n.data;if(t)return Object(s.jsx)(p.a,{});a&&console.log("Error while fetching",a);var l=r.launch,j=l.mission_name,h=l.launch_success,o=l.launch_year,m=l.launch_date_local,d=l.rocket,O=d.rocket_id,g=d.rocket_name,_=d.rocket_type;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{className:"display-3 my-3",children:[Object(s.jsx)("span",{className:"text-dark",children:"Mission:"}),j]}),Object(s.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(s.jsxs)("ul",{className:"list-group",children:[Object(s.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",r.launch.flight_number]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Launced Year: ",o]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Launched at: ",Object(s.jsx)(x.a,{format:"DD/MM/YYYY",children:m})]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Launch Succeed:"," ",Object(s.jsx)("span",{className:b()({"text-success":h,"text-danger":!h}),children:h?"Yes":"No"})]})]}),Object(s.jsx)("h4",{className:"my-3 ",children:"Rocket Details"}),Object(s.jsxs)("ul",{className:"list-group",children:[Object(s.jsxs)("li",{className:"list-group-item",children:["Rocket Number: ",O]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",g]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",_]})]}),Object(s.jsx)(u.b,{to:"/",className:"btn btn-primary mt-3",children:"Back"})]})},L=new i.ApolloClient({uri:"/graphql",cache:new i.InMemoryCache});var Y=function(){return Object(s.jsx)(i.ApolloProvider,{client:L,children:Object(s.jsx)(u.a,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("img",{src:h,alt:"spacex_logo",style:{width:300,height:120,display:"block",margin:"auto"}}),Object(s.jsx)(j.a,{exact:!0,path:"/",component:N}),Object(s.jsx)(j.a,{exact:!0,path:"/launch/:flight_number",component:k})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(c){var n=c.getCLS,s=c.getFID,t=c.getFCP,a=c.getLCP,r=c.getTTFB;n(e),s(e),t(e),a(e),r(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(Y,{})}),document.getElementById("root")),D()}},[[91,1,2]]]);
//# sourceMappingURL=main.1f7f5afd.chunk.js.map