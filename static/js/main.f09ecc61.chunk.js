(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){"use strict";a.r(t),a.d(t,"data",function(){return n});var n={header:{name:"Steven Huynh",content:"I am a full-stack web developer, athlete, chef, gamer and nerd.",quote:{author:"Bill Gates",content:'"Software is a great combination between artistry and engineering."'},button:"Find Out More"},about:{title:"About",content:"I enjoy making code functional, connecting dots, seeing the logic flow, and bringing the contents to life. My journey so far \nincludes attending Hack Reactor in San Francisco and completing Udacity's Full-Stack Developer and React Nanodegree.",icons:["fa-react","fa-html5","fa-css3-alt","fa-python","fa-js-square","fa-node-js","fa-aws"],button:"See Projects"},contact:{linkedin:"https://www.linkedin.com/in/stevenhuynh17/",github:"https://github.com/stevenhuynh17",email:"stevenhuynh17@gmail.com"},featured:{name:"BART Station Locator",img:"img/bart.png",description:["Front end project that utilizes Google Maps and BART API to display all station locations in the Bay Area","Users can find local attractions, food, and shopping nearby each station through the Yelp API"],badges:["Knockout.js","googlemaps-api","bart-api","yelp-api","javaScript","html5","ccs3"]},projects:[{name:"BART Station Locator",img:"img/bart.png",description:["Front end project that utilizes Google Maps and BART API to display all station locations in the Bay Area","Users can find local attractions, food, and shopping nearby each station through the Yelp API"],badges:["Knockout.js","googlemaps-api","bart-api","yelp-api","javaScript","html5","ccs3"]},{name:"Car Catalog",img:"img/carCatalog.png",description:["Full-stack project using Python, Flask, SQLAlchemy and deployed through AWS Lightsail","Users login via OAuth with their Google accounts to perform CRUD functions on their respective brands and/or models"],badges:["Python","Flask","SQLAlchemy","OAuth","AWS","html5","ccs3"]},{name:"Nearby News",img:"img/nearbyNews.jpeg",description:["Full-stack team project utilizing React, Node.js/Express, MySQL, Watson API and deployed through AWS EC2","Users search news based on the location input where results are displayed in GIFs with visual cues to indicate a sentiment rating"],badges:["React","Node.js","Express","MySQL","AWS","watson-api","javaScript","html5","ccs3"]},{name:"Mobile Flashcards",img:"img/flashcards/1.png",description:["Front-end project built with React Native, Redux and rendered through Expo","Users get a daily notifcation to study and perform CRUD functions with subjects through AsyncStorage"],badges:["react-native","redux","android","ios","javaScript","html5","ccs3"]},{name:"Would You Rather?",img:"img/choiceGame/1.png",description:["Front-end project built with React, Redux and associated libraries","Centralized state management through Redux and navigation between pages with react-router","Users can login to participate in the polls and perform CRUD functions"],badges:["react","redux","javaScript","html5","ccs3"]},{name:"Geostashing",img:"img/geoStashing.jpeg",description:["Full-stack team project utilizing React, Node.js/Express, and Postgres SQL","Users can look up random items, transaction occurs online while the seller can stash the sold item in an obscure location"],badges:["react","node-js","express","postgres-sql","javaScript","html5","ccs3"]}]}},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),s=a(8);o.a.render(c.a.createElement(s.default,null),document.getElementById("root"))},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=a(9),p=a(10),u=a(11),d=a(14),f=a(16),g=a(17),h=(a(21),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).scrollToMyRef=function(e,t){e.preventDefault(),window.scrollTo({top:t.current.offsetTop,behavior:"smooth"})},a.about=l.a.createRef(),a.header=l.a.createRef(),a.projects=l.a.createRef(),a.contact=l.a.createRef(),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.about,t=this.header,a=this.projects,n=this.contact;console.log(e);var c={about:e,header:t,projects:a,contact:n};return l.a.createElement("div",{id:"page-top"},l.a.createElement(m.default,{scroll:this.scrollToMyRef,sections:c}),l.a.createElement(p.default,{refProp:t,scroll:this.scrollToMyRef,section:e}),l.a.createElement(u.default,{refProp:e,scroll:this.scrollToMyRef,section:a}),l.a.createElement(d.default,{refProp:a}),l.a.createElement(f.default,{refProp:n}),l.a.createElement(g.default,null))}}]),t}(i.Component));t.default=h},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={hide:null},a.navbarCollapse=function(e){window.pageYOffset>100?a.setState({hide:!0}):a.setState({hide:!1})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.navbarCollapse),this.setState({hide:!1})}},{key:"render",value:function(){var e=this,t=this.state.hide?"navbar navbar-expand-lg navbar-light fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-light fixed-top",a=this.props.scroll,n=this.props.sections,c=n.about,r=n.header,o=n.projects,s=n.contact;return l.a.createElement("nav",{className:t,id:"mainNav",onScroll:this.navbarCollapse},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",onClick:function(){return e.props.scroll(r)}},"Home"),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item",onClick:function(e){return a(e,c)}},l.a.createElement("a",{className:"nav-link",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item",onClick:function(e){return a(e,o)}},l.a.createElement("a",{className:"nav-link",href:"#projects"},"Projects")),l.a.createElement("li",{className:"nav-item",onClick:function(e){return a(e,s)}},l.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact"))))))}}]),t}(i.Component);t.default=m},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=a(6),p=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=m.data.header,t=e.name,a=e.content,n=e.quote,c=e.button,r=this.props,o=r.refProp,s=r.scroll,i=r.section;return l.a.createElement("header",{className:"masthead",ref:o},l.a.createElement("div",{className:"container d-flex h-100 align-items-center"},l.a.createElement("div",{className:"mx-auto text-center"},l.a.createElement("h1",{className:"mx-auto my-0 text-uppercase"},t),l.a.createElement("h2",{className:"text-white-50 mx-auto mt-2 mb-5"},a),l.a.createElement("p",{className:"text-white-50"},l.a.createElement("i",null,n.content)),l.a.createElement("p",{className:"text-white-50 mx-auto mt-2 mb-5"},"- ",n.author),l.a.createElement("button",{onClick:function(e){return s(e,i)},className:"btn btn-primary"},c))))}}]),t}(i.Component);t.default=p},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=a(12),p=a(13),u=a(6),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=u.data.about,t=e.title,a=e.content,n=e.icons,c=e.button,r=this.props,o=r.refProp,s=r.scroll,i=r.section;return l.a.createElement("section",{id:"about",className:"about-section",ref:o},l.a.createElement("div",{className:"container text-center d-flex h-100 align-items-center"},l.a.createElement("section",null,l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("h2",{className:"text-white mb-4"},t),l.a.createElement("p",{className:"text-white-50"},a)),l.a.createElement("div",{className:"mb-5"},l.a.createElement(m.default,null),n.map(function(e){return l.a.createElement("i",{key:e,className:"fab fa-4x mx-3 text-white-50 "+e})}),l.a.createElement(p.default,null)),l.a.createElement("button",{onClick:function(e){return s(e,i)},className:"btn btn-primary"},c))))}}]),t}(i.Component);t.default=d},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{"aria-labelledby":"simpleicons-redux-icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"4em",height:"4em",className:"mx-2 text-white-50"},l.a.createElement("path",{d:"M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031z"}),l.a.createElement("path",{d:"M21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03z"}),l.a.createElement("path",{d:"M6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z"}))}}]),t}(i.Component);t.default=m},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("svg",{version:"1.1",viewBox:"0 0 32 32",width:"4em",height:"4em",className:"mx-2"},l.a.createElement("title",null),l.a.createElement("desc",null),l.a.createElement("defs",null),l.a.createElement("g",{fill:"none",fillRule:"evenodd",id:"Page-1",stroke:"none",strokeWidth:"1"},l.a.createElement("g",{fill:"rgba(255,255,255,.8)",id:"icon-89-document-file-sql"},l.a.createElement("path",{d:"M20.6756443,22.8827511 C20.463169,22.9587282 20.2340236,23 19.9951185,23 L19.0048815,23 C17.8938998,23 17,22.1019194 17,20.9940809 L17,18.0059191 C17,16.8865548 17.897616,16 19.0048815,16 L19.9951185,16 C21.1061002,16 22,16.8980806 22,18.0059191 L22,20.9940809 C22,21.4993595 21.8171018,21.9572008 21.5145823,22.3074755 L22.267767,23.0606602 L21.5606602,23.767767 L20.6756443,22.8827511 L20.6756443,22.8827511 L20.6756443,22.8827511 Z M19.7928932,22 L18.9989566,22 C18.4426603,22 18,21.5523709 18,21.0001925 L18,17.9998075 C18,17.4437166 18.4472481,17 18.9989566,17 L20.0010434,17 C20.5573397,17 21,17.4476291 21,17.9998075 L21,21.0001925 C21,21.2246463 20.9271364,21.4307925 20.8039499,21.5968431 L19.4393398,20.232233 L18.732233,20.9393398 L19.7928932,22 L19.7928932,22 L19.7928932,22 Z M21,13 L21,10 L21,10 L15,3 L4.00276013,3 C2.89666625,3 2,3.89833832 2,5.00732994 L2,27.9926701 C2,29.1012878 2.89092539,30 3.99742191,30 L19.0025781,30 C20.1057238,30 21,29.1017876 21,28.0092049 L21,26 L27.9931517,26 C29.6537881,26 31,24.6577357 31,23.0012144 L31,15.9987856 C31,14.3426021 29.6640085,13 27.9931517,13 L21,13 L21,13 L21,13 Z M20,26 L20,28.0066023 C20,28.5550537 19.5523026,29 19.0000398,29 L3.9999602,29 C3.45470893,29 3,28.5543187 3,28.004543 L3,4.99545703 C3,4.45526288 3.44573523,4 3.9955775,4 L14,4 L14,8.99408095 C14,10.1134452 14.8944962,11 15.9979131,11 L20,11 L20,13 L11.0068483,13 C9.34621185,13 8,14.3422643 8,15.9987856 L8,23.0012144 C8,24.6573979 9.33599155,26 11.0068483,26 L20,26 L20,26 L20,26 Z M15,4.5 L15,8.99121523 C15,9.54835167 15.4506511,10 15.9967388,10 L19.6999512,10 L15,4.5 L15,4.5 Z M10.9945615,14 C9.89299558,14 9,14.9001762 9,15.992017 L9,23.007983 C9,24.1081436 9.90234375,25 10.9945615,25 L28.0054385,25 C29.1070044,25 30,24.0998238 30,23.007983 L30,15.992017 C30,14.8918564 29.0976562,14 28.0054385,14 L10.9945615,14 L10.9945615,14 Z M13.0048815,16 C11.897616,16 11,16.8877296 11,18 C11,19.1045695 11.8877296,20 13,20 L13.9906311,20 C14.5480902,20 15,20.4438648 15,21 C15,21.5522847 14.5573397,22 14.0010434,22 L12.9989566,22 C12.4472481,22 12,21.543716 12,21.0044713 L12,20.9931641 L11,20.9931641 L11,20.998921 C11,22.1040864 11.8938998,23 13.0048815,23 L13.9951185,23 C15.102384,23 16,22.1122704 16,21 C16,19.8954305 15.1122704,19 14,19 L13.0093689,19 C12.4519098,19 12,18.5561352 12,18 C12,17.4477153 12.4426603,17 12.9989566,17 L14.0010434,17 C14.5527519,17 15,17.453186 15,18 L16,18 C16,16.8954305 15.1061002,16 13.9951185,16 L13.0048815,16 L13.0048815,16 Z M28,22 L28,23 L23,23 L23,16 L24,16 L24,22 L28,22 L28,22 Z",id:"document-file-sql"}))))}}]),t}(i.Component);t.default=m},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=a(15),p=a(6),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).renderBadges=function(e){return e.map(function(e){return l.a.createElement("span",{key:e,className:"badge badge-pill badge-secondary"},e)})},a.renderDescription=function(e){return e.map(function(e,t){return l.a.createElement("li",{key:t},e)})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.renderBadges,this.renderDescription,p.data.featured;var e=p.data.projects,t=this.props.refProp;return l.a.createElement("section",{className:"p-0",id:"projects",ref:t},l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement(m.default,{projects:e})))}}]),t}(i.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=(a(18),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects;e.renderBadges,e.renderDescription;return console.log(t),l.a.createElement("div",{className:"row no-gutters popup-gallery"},t.map(function(e){var t=e.name,n=e.img;e.description,e.badges;return l.a.createElement("div",{className:"col-lg-4 col-sm-6 project",key:t},l.a.createElement("a",{className:"portfolio-box",href:"img/portfolio/fullsize/1.jpg"},l.a.createElement("img",{className:"img-fluid",src:a(20)("./"+n),alt:""}),l.a.createElement("div",{className:"portfolio-box-caption"},l.a.createElement("div",{className:"portfolio-box-caption-content"},l.a.createElement("div",{className:"project-category text-faded"},"Category"),l.a.createElement("div",{className:"project-name"},t)))))}))}}]),t}(i.Component));t.default=m},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=a(6),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={copied:!1},a.copyToClipboard=function(e){var t=e.target.value;navigator.clipboard.writeText(t).then(function(){console.log("copied!"),a.setState({copied:!0})})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.copied,t=m.data.contact,a=t.linkedin,n=t.github,c=t.email,r=this.props.refProp;return l.a.createElement("section",{className:"contact-section bg-black",id:"contact",ref:r},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-5 mb-3 mb-md-0"},l.a.createElement("div",{className:"card py-4 h-100"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("i",{className:"fas fa-envelope text-primary mb-2"}),l.a.createElement("h4",{className:"text-uppercase m-0"},"Email"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("div",{className:"small text-black-50"},l.a.createElement("button",{type:"button",className:"btn-email",value:c,onClick:this.copyToClipboard},e?"Copied to clipboard!":c)),l.a.createElement("div",{className:"social d-flex justify-content-center"},l.a.createElement("a",{href:n,target:"_blank",className:"mx-2"},l.a.createElement("i",{className:"fab fa-github fa-2x"})),l.a.createElement("a",{href:a,target:"_blank",className:"mx-2"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"})))))))))}}]),t}(i.Component);t.default=p},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"bg-black small text-center text-white-50"},l.a.createElement("div",{className:"container"},"Copyright \xa9 Steven Huynh 2018"))}}]),t}(i.Component);t.default=m},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),s=a(5),i=a(0),l=a.n(i),m=function(e){function t(){var e,c;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),m=0;m<s;m++)i[m]=arguments[m];return(c=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).createImages=function(e){if(Array.isArray(e))return e.map(function(e,t){console.log(t);var n=0===t?"carousel-item active":"carousel-item";return l.a.createElement("div",{className:n,key:t},l.a.createElement("img",{className:"d-block w-100 carousel",src:a(20)("./"+e)}))})},c}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.images;return l.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},this.createImages(e)),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))}}]),t}(i.Component);t.default=m},,function(e,t,a){var n={"./":7,"./App":8,"./App.js":8,"./archive/bg-masthead.jpg":28,"./archive/grayscale.min.css":29,"./components/About":11,"./components/About.js":11,"./components/Carousel":18,"./components/Carousel.js":18,"./components/Contact":16,"./components/Contact.js":16,"./components/Footer":17,"./components/Footer.js":17,"./components/Header":10,"./components/Header.js":10,"./components/Navigation":9,"./components/Navigation.js":9,"./components/Project":15,"./components/Project.js":15,"./components/ProjectList":14,"./components/ProjectList.js":14,"./components/SVG/ReduxIcon":12,"./components/SVG/ReduxIcon.js":12,"./components/SVG/SQLIcon":13,"./components/SVG/SQLIcon.js":13,"./css/grayscale.css":21,"./img/abandoned-forest-hd-wallpaper-34950.jpg":32,"./img/bart.png":33,"./img/bg-signup.jpg":34,"./img/book-computer-design.jpg":35,"./img/carCatalog.png":36,"./img/choiceGame/1.png":37,"./img/choiceGame/2.png":38,"./img/choiceGame/3.png":39,"./img/close-up-laptop.jpg":40,"./img/demo-image-01.jpg":41,"./img/demo-image-02.jpg":42,"./img/favicon.ico":43,"./img/flashcards/1.png":44,"./img/flashcards/2.png":45,"./img/flashcards/3.png":46,"./img/flashcards/4.png":47,"./img/forest.jpg":48,"./img/geoStashing.jpeg":49,"./img/illuminated-light-light-bulb.jpg":50,"./img/laptop.jpg":51,"./img/lightbulb.jpg":52,"./img/nearbyNews.jpeg":53,"./img/railroad.jpg":54,"./index":7,"./index.js":7,"./utils/data":6,"./utils/data.js":6};function c(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=20},function(e,t,a){},,function(e,t,a){e.exports=a(7)},,,,,function(e,t,a){e.exports=a.p+"static/media/bg-masthead.4c6b4862.jpg"},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/abandoned-forest-hd-wallpaper-34950.785dcb62.jpg"},function(e,t,a){e.exports=a.p+"static/media/bart.0ce5a1e9.png"},function(e,t,a){e.exports=a.p+"static/media/bg-signup.5ac05903.jpg"},function(e,t,a){e.exports=a.p+"static/media/book-computer-design.e06fab6d.jpg"},function(e,t,a){e.exports=a.p+"static/media/carCatalog.160da8cd.png"},function(e,t,a){e.exports=a.p+"static/media/1.c6634afe.png"},function(e,t,a){e.exports=a.p+"static/media/2.47bf26fc.png"},function(e,t,a){e.exports=a.p+"static/media/3.28cf9a3d.png"},function(e,t,a){e.exports=a.p+"static/media/close-up-laptop.45fffff3.jpg"},function(e,t,a){e.exports=a.p+"static/media/demo-image-01.2cf5985b.jpg"},function(e,t,a){e.exports=a.p+"static/media/demo-image-02.d2e55529.jpg"},function(e,t,a){e.exports=a.p+"static/media/favicon.fb871342.ico"},function(e,t,a){e.exports=a.p+"static/media/1.960da51a.png"},function(e,t,a){e.exports=a.p+"static/media/2.7bc1a98b.png"},function(e,t,a){e.exports=a.p+"static/media/3.e9802bf9.png"},function(e,t,a){e.exports=a.p+"static/media/4.35b30ac5.png"},function(e,t,a){e.exports=a.p+"static/media/forest.ff9eb222.jpg"},function(e,t,a){e.exports=a.p+"static/media/geoStashing.16401e21.jpeg"},function(e,t,a){e.exports=a.p+"static/media/illuminated-light-light-bulb.0ebf748f.jpg"},function(e,t,a){e.exports=a.p+"static/media/laptop.a1f31fae.jpg"},function(e,t,a){e.exports=a.p+"static/media/lightbulb.a3ce0246.jpg"},function(e,t,a){e.exports=a.p+"static/media/nearbyNews.4b9c36fd.jpeg"},function(e,t,a){e.exports=a.p+"static/media/railroad.785dcb62.jpg"}],[[23,2,1]]]);
//# sourceMappingURL=main.f09ecc61.chunk.js.map