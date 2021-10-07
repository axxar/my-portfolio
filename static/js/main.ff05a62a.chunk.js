(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{24:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),l=i(11),c=i.n(l),n=(i(24),i(3)),r=i(1);function o(){return Object(r.jsx)("section",{id:"about",children:Object(r.jsxs)("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items-center",children:[Object(r.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(r.jsxs)("p",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-white",children:["Hi, I'm\xa0",Object(r.jsx)(n.a,{type:"highlight",color:"#0002c9",iterations:1,padding:[10,10],show:!0,animationDelay:800,animationDuration:1e3,children:"Akshar"}),Object(r.jsx)("br",{}),"I love to build amazing apps and sites."]}),Object(r.jsx)("p",{className:"mb-8 leading-relaxed",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?"}),Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)("a",{href:"#contact",className:"inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg",children:"Work With Me"}),Object(r.jsx)("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",children:"See My Past Work"})]})]}),Object(r.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(r.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"./miles-morales.jpg"})})]})})}var m=i(4);function d(){var e=a.a.useState(""),t=Object(m.a)(e,2),i=t[0],s=t[1],l=a.a.useState(""),c=Object(m.a)(l,2),n=c[0],o=c[1],d=a.a.useState(""),x=Object(m.a)(d,2),b=x[0],j=x[1];return Object(r.jsx)("section",{id:"contact",className:"relative",children:Object(r.jsxs)("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap",children:[Object(r.jsxs)("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative",children:[Object(r.jsx)("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",frameBorder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}),Object(r.jsxs)("div",{className:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md",children:[Object(r.jsxs)("div",{className:"lg:w-1/2 px-6",children:[Object(r.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"ADDRESS"}),Object(r.jsxs)("p",{className:"mt-1",children:["97 Warren St. ",Object(r.jsx)("br",{}),"New York, NY 10007"]})]}),Object(r.jsxs)("div",{className:"lg:w-1/2 px-6 mt-4 lg:mt-0",children:[Object(r.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"EMAIL"}),Object(r.jsx)("a",{className:"text-indigo-400 leading-relaxed",children:"reedbarger@email.com"}),Object(r.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4",children:"PHONE"}),Object(r.jsx)("p",{className:"leading-relaxed",children:"123-456-7890"})]})]})]}),Object(r.jsxs)("form",{netlify:!0,name:"contact",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"contact",name:i,email:n,message:b},Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Message sent!")})).catch((function(e){return alert(e)}))},className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0",children:[Object(r.jsx)("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font",children:"Hire Me"}),Object(r.jsx)("p",{className:"leading-relaxed mb-5",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum suscipit officia aspernatur veritatis. Asperiores, aliquid?"}),Object(r.jsxs)("div",{className:"relative mb-4",children:[Object(r.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400",children:"Name"}),Object(r.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"relative mb-4",children:[Object(r.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"relative mb-4",children:[Object(r.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400",children:"Message"}),Object(r.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function(e){return j(e.target.value)}})]}),Object(r.jsx)("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Submit"})]})]})})}var x=i(2),b=[{title:"React Reserve",subtitle:"MERN Stack",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./project-1.gif",link:"https://reactbootcamp.com"},{title:"React Tracks",subtitle:"React and Python",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./project-2.gif",link:"https://reedbarger.com"},{title:"DevChat",subtitle:"React and Firebase",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./project-3.gif",link:"https://jsbootcamp.com"},{title:"Epic Todo App",subtitle:"React Hooks",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",image:"./project-4.gif",link:"https://pythonbootcamp.com"}],j=["Skill 1","Skill 2","Skill 3"],u=[{quote:"*t quote",image:"*t image",name:"*t name",company:"*t company"}];function h(){return Object(r.jsx)("section",{id:"projects",className:"text-gray-400 bg-gray-900 body-font",children:Object(r.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40",children:[Object(r.jsxs)("div",{className:"flex flex-col w-full mb-20",children:[Object(r.jsx)(x.d,{className:"mx-auto inline-block w-10 mb-4"}),Object(r.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white",children:"Apps I've Built"}),Object(r.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore."})]}),Object(r.jsx)("div",{className:"flex flex-wrap -m-4",children:b.map((function(e){return Object(r.jsx)("a",{href:e.link,className:"sm:w-1/2 w-100 p-4",children:Object(r.jsxs)("div",{className:"flex relative",children:[Object(r.jsx)("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:e.image}),Object(r.jsxs)("div",{className:"px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100",children:[Object(r.jsx)("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1",children:e.subtitle}),Object(r.jsx)("h1",{className:"title-font text-lg font-medium text-white mb-3",children:e.title}),Object(r.jsx)("p",{className:"leading-relaxed",children:e.description})]})]})},e.image)}))})]})})}function p(){return Object(r.jsx)("section",{id:"skills",children:Object(r.jsxs)("div",{className:"container px-5 py-10 mx-auto",children:[Object(r.jsxs)("div",{className:"text-center mb-20",children:[Object(r.jsx)(x.c,{className:"w-10 inline-block mb-4"}),Object(r.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4",children:"Skills & Technologies"}),Object(r.jsx)("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est."})]}),Object(r.jsx)("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2",children:j.map((function(e){return Object(r.jsx)("div",{className:"p-2 sm:w-1/2 w-full",children:Object(r.jsxs)("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center",children:[Object(r.jsx)(x.b,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),Object(r.jsx)("span",{className:"title-font font-medium text-white",children:e})]})},e)}))})]})})}function g(){return Object(r.jsx)("section",{id:"testimonials",children:Object(r.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center",children:[Object(r.jsx)(x.f,{className:"w-10 inline-block mb-4"}),Object(r.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-12",children:"Client Testimonials"}),Object(r.jsx)("div",{className:"flex flex-wrap m-4",children:u.map((function(e){return Object(r.jsx)("div",{className:"p-4 md:w-1/2 w-full",children:Object(r.jsxs)("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded",children:[Object(r.jsx)(x.e,{className:"block w-8 text-gray-500 mb-4"}),Object(r.jsx)("p",{className:"leading-relaxed mb-6",children:e.quote}),Object(r.jsxs)("div",{className:"inline-flex items-center",children:[Object(r.jsx)("img",{alt:"testimonial",src:e.image,className:"w-12 rounded-full flex-shrink-0 object-cover object-center"}),Object(r.jsxs)("span",{className:"flex-grow flex flex-col pl-4",children:[Object(r.jsx)("span",{className:"title-font font-medium text-white",children:e.name}),Object(r.jsx)("span",{className:"text-gray-500 text-sm uppercase",children:e.company})]})]})]})})}))})]})})}var f=i(7),O=function(){return Object(r.jsx)("div",{className:"bg-gray-800 md:sticky top-0 z-10",children:Object(r.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(r.jsx)("a",{className:"title-font font-medium text-white mb-4 md:mb-0",children:Object(r.jsx)(f.Link,{to:"about",spy:!0,smooth:!0,offset:-50,duration:500,className:"ml-3 text-xl",children:"Akshar P."})}),Object(r.jsxs)("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base justify-center",children:[Object(r.jsx)(f.Link,{to:"projects",spy:!0,smooth:!0,offset:-50,duration:500,className:"mx-5 text-gray-400 hover:text-white",children:Object(r.jsx)(n.a,{type:"bracket",padding:[2,4],brackets:["left","right"],color:"#FFFFFF",iterations:1,show:!0,animationDelay:800,animationDuration:1e3,children:"Past Work"})}),Object(r.jsx)(f.Link,{to:"skills",spy:!0,smooth:!0,offset:-50,duration:500,className:"mx-5 text-gray-400 hover:text-white",children:Object(r.jsx)(n.a,{type:"bracket",padding:[2,4],brackets:["left","right"],color:"#FFFFFF",iterations:1,show:!0,animationDelay:800,animationDuration:1e3,children:"Skills"})}),Object(r.jsx)(f.Link,{to:"testimonials",spy:!0,smooth:!0,offset:-50,duration:500,className:"mx-5 text-gray-400 hover:text-white",children:Object(r.jsx)(n.a,{type:"bracket",padding:[2,4],brackets:["left","right"],color:"#FFFFFF",iterations:1,show:!0,animationDelay:800,animationDuration:1e3,children:"Testimonials"})})]}),Object(r.jsx)(n.a,{type:"circle",padding:5,color:"#FFFFFF",iterations:3,show:!0,animationDelay:800,animationDuration:1e3,children:Object(r.jsxs)("a",{href:"#contact",className:"inline-flex items-center text-gray-400 bg-gray-800 border-0 py-1 px-3 text-base mt-4 md:mt-0 hover:text-white",children:["Hire Me",Object(r.jsx)(x.a,{className:"w-4 h-4 ml-1"})]})})]})})},y=function(e){var t=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{}),Object(r.jsx)("main",{className:"text-gray-400 bg-gray-900 body-font",children:t})]})};var w=function(){return Object(r.jsxs)(y,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(h,{}),Object(r.jsx)(p,{}),Object(r.jsx)(g,{}),Object(r.jsx)(d,{})]})};c.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ff05a62a.chunk.js.map