(this.webpackJsonpswageditor=this.webpackJsonpswageditor||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a.n(r),c=(a(13),a(14),a(3)),s=a(4),m=a(5),i=a(7),d=a(6),u=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={player:0,frame:0,position:"top",px:0,py:0,canvasY:400,canvasX:400,start:!0,rounded:!1,cornerValue:0,customSize:!1,scaleSize:100,backgroundColor:"pink",textColor:"white"},e.imageSize={"Logo cover":{x:500,y:500},"Instagram Post":{x:1080,y:1080},"Phone Wallpaper":{x:1080,y:1920},"Social Media":{x:1080,y:1080},"Desktop Wallpaper":{x:1920,y:1080},"Facebook Cover":{x:2050,y:780},custom:{x:500,y:500}},e.handle=function(t){var a=t.target,n=a.name,o=a.value;"position"!==n&&(o=10*parseInt(o)+500),e.setState(Object(c.a)({},n,o),(function(){e.playerUpdate()}))},e.sizehandle=function(t){if("custom"!==(t=t.target.value)){var a=e.imageSize[t];e.setState({canvasY:a.y,canvasX:a.x,scaleSize:(a.x>600||a.y>600)&&50})}else e.setState({customSize:!0})},e.customSizeHandle=function(){var t=document.getElementById("customX").value,a=document.getElementById("customY").value;e.setState({canvasX:t<60?500:t,canvasY:a<60?500:a,customSize:!1})},e.handleFrame=function(t){var a=t.target,n=a.name,o=a.value;document.getElementById(n).src="./assests/img/background/bg (".concat(o,").png"),e.setState({frame:o})},e.playerUpdate=function(){var t,a,n=e.state,o=n.position,r=n.canvasY,l=n.canvasX,c=20*Math.min(l,r)/100,s=l-c,m=r-c;"top"===o?(t=s/2,a=0):"left"===o?(t=0,a=m/2):"right"===o?(t=s,a=m/2):"bottom"===o?(t=s/2,a=m):"topLeft"===o?(t=0,a=0):"topRight"===o?(t=s,a=0):"bottomLeft"===o?(t=0,a=m):"bottomRight"===o?(t=s,a=m):"center"===o&&(t=s/2,a=m/2),e.setState({px:t,py:a})},e.clearCanvas=function(){var t=e.state,a=t.canvasX,n=t.canvasY;document.getElementById("backgroundCanvas").getContext("2d").clearRect(0,0,a,n)},e.playerSelect=function(t){var a=t.target,n=a.name,o=a.value;document.getElementById(n).src="./assests/img/players/player (".concat(o,").svg"),e.setState({player:o})},e.download_img=function(t){e.addBackground();var a=document.getElementById("backgroundCanvas").toDataURL("image/png");t.target.href=a},e.roundedCorner=function(){var t=e.state,a=t.canvasX,n=t.canvasY,o=document.getElementById("backgroundCanvas").getContext("2d");return o.beginPath(),o.arc(a/2,n/2,a/2,0,2*Math.PI),o.clip(),o.closePath(),!0},e.addBackground=function(){var t=e.state,a=t.canvasX,n=t.canvasY,o=t.rounded;e.clearCanvas();var r=document.getElementById("backgroundCanvas").getContext("2d"),l=document.getElementById("backgoundImg");return o&&e.roundedCorner(),"#"!==l.src.charAt(l.src.length-1)&&r.drawImage(l,0,0,a,n),r.imageSmoothingEnabled=!1,e.addFrame(),!0},e.addFrame=function(){var t=e.state,a=t.canvasX,n=t.canvasY,o=document.getElementById("backgroundCanvas").getContext("2d"),r=document.getElementById("frameImg");return"#"!==r.src.charAt(r.src.length-1)&&o.drawImage(r,0,0,a,n),e.addPlayer(),!0},e.addPlayer=function(){var t=e.state,a=t.px,n=t.py,o=t.canvasX,r=t.canvasY,l=document.getElementById("backgroundCanvas").getContext("2d"),c=document.getElementById("playerImg"),s=c.src.charAt(c.src.length-1),m=20*Math.min(o,r)/100;return"#"!==s&&l.drawImage(c,a,n,m,m),!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.clearCanvas();var e=this.state,t=e.canvasX,a=e.canvasY,n=document.getElementById("backgroundCanvas");n.width=t,n.height=a,console.log("assa")}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.canvasX,a=e.canvasY,n=e.start,o=document.getElementById("backgroundCanvas");o.width=t,o.height=a,n&&this.setState({start:!1}),this.addBackground()}},{key:"imageImportFunction",value:function(e,t){var a=document.getElementById(e);if(a.files&&a.files[0]){var n=new FileReader;n.onload=function(e){document.getElementById(t).src=e.target.result},n.readAsDataURL(a.files[0])}}},{key:"render",value:function(){var e=this,t=this.state,a=t.start,n=t.customSize,r=t.scaleSize,l=[{backgroundColor:t.backgroundColor,color:t.textColor}];return o.a.createElement("div",null,o.a.createElement("div",{className:"p-4 px-2 w-screen min-h-screen relative text-center",style:l[0]},o.a.createElement("section",{className:"flex justify-center p-4 py-6"},o.a.createElement("img",{src:"./assests/aliando-rocky.regular.png"})),o.a.createElement("section",{className:"flex flex-col md:flex-row flex-wrap justify-center"},o.a.createElement("section",{className:"flex justify-between bg-red-400"},o.a.createElement("span",{className:"bg-red-600 p-3 w-full"},"Select a file"),o.a.createElement("label",{className:"bg-red-400 hoverBg flex flex-col items-center px-4 py-2 bg-transparent  cursor-pointer outline-none focus:outline-none  hover:text-blue-100"},o.a.createElement("svg",{className:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})),o.a.createElement("input",{className:"hidden",type:"file",id:"backgrounduploade",onChange:function(){e.imageImportFunction("backgrounduploade","backgoundImg")}}),o.a.createElement("img",{id:"backgoundImg",src:"#",alt:"Your background",className:"hidden"}))),o.a.createElement("section",{className:"flex justify-between bg-red-400"},o.a.createElement("span",{className:"bg-red-600 p-3"},"Players"),o.a.createElement("select",{onChange:this.playerSelect,name:"playerImg",className:" bg-red-400 p-3"},o.a.createElement("option",{value:"1"},"Bhuvneshwar "),o.a.createElement("option",{value:"2"},"Hardik"),o.a.createElement("option",{value:"3"},"Hardik-2"),o.a.createElement("option",{value:"4"},"Jasprit"),o.a.createElement("option",{value:"5"},"Kieron "),o.a.createElement("option",{value:"6"},"Rohit "),o.a.createElement("option",{value:"7"},"Rohit-2"),o.a.createElement("option",{value:"8"},"Shikhar "),o.a.createElement("option",{value:"9"},"Virat "),o.a.createElement("option",{value:"10"},"Yuvraj ")),o.a.createElement("div",{className:"flex bg-red-400 hoverBg"},o.a.createElement("label",{className:"flex flex-col items-center px-4 py-2  bg-transparent  cursor-pointer outline-none focus:outline-none  hover:text-blue-100"},o.a.createElement("svg",{className:"w-8 h-8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"})),o.a.createElement("input",{className:"hidden",type:"file",id:"playerUploade",onChange:function(){e.imageImportFunction("playerUploade","playerImg")}}))),o.a.createElement("img",{id:"playerImg",src:"./assests/img/players/player (1).svg",alt:"Your Player",className:"hidden"})),o.a.createElement("section",{className:"flex justify-between bg-red-400"},o.a.createElement("span",{className:"bg-red-600 p-3 w-40"},"Swag frames"),o.a.createElement("select",{onChange:this.handleFrame,name:"frameImg",className:" bg-red-400  p-3 select:bg-red-600 customselect"},o.a.createElement("option",{value:"1"},"Frame1"),o.a.createElement("option",{value:"2"},"Frame2")),o.a.createElement("div",{className:" flex"},o.a.createElement("img",{id:"frameImg",src:"./assests/img/background/bg (1).png",alt:"Your frame",className:"hidden"}))),o.a.createElement("section",{className:"flex justify-between bg-red-400"},o.a.createElement("span",{className:"bg-red-600 p-3 w-40"},"Player Position"),o.a.createElement("select",{onChange:this.handle,name:"position",className:"bg-red-400  p-3 select:bg-red-600 customselect"},o.a.createElement("option",{value:"top"},"Top"),o.a.createElement("option",{value:"left"},"Left"),o.a.createElement("option",{value:"right"},"Right"),o.a.createElement("option",{value:"bottom"},"Bottom"),o.a.createElement("option",{value:"topLeft"},"TopLeft"),o.a.createElement("option",{value:"topRight"},"TopRight"),o.a.createElement("option",{value:"bottomLeft"},"BottomLeft"),o.a.createElement("option",{value:"bottomRight"},"BottomRight"),o.a.createElement("option",{value:"center"},"Center"))),o.a.createElement("section",{className:"flex justify-between bg-red-400"},o.a.createElement("span",{className:"bg-red-600 p-3"},"Post type"),o.a.createElement("select",{onChange:this.sizehandle,name:"position",className:"bg-red-400 p-3"},o.a.createElement("option",{value:"Logo cover"},"Logo"),o.a.createElement("option",{value:"Instagram Post"},"Instagram Post"),o.a.createElement("option",{value:"Phone Wallpaper"},"Phone Wallpaper"),o.a.createElement("option",{value:"Social Media"},"Social Media"),o.a.createElement("option",{value:"Desktop Wallpaper"},"Desktop Wallpaper"),o.a.createElement("option",{value:"Facebook Cover"},"Facebook Cover"),o.a.createElement("option",{value:"custom"},"custom")))),o.a.createElement("section",{className:"my-4 text-left ml-4 ml-12"},o.a.createElement("a",{className:"bg-red-600 px-4 py-2 hover:shadow-lg hoverBg",id:"download",onClick:this.download_img,download:"myImage.jpg",href:"#"},"Download"),o.a.createElement("input",{className:"bg-red-400 font-sm  p-2 hover:shadow-lg hoverBg",type:"button",onClick:function(){a&&e.setState({start:!1}),e.addBackground()},value:a?"Add Design":"Update Design"})),o.a.createElement("section",{id:"canvas",className:"relative overflow-scroll mx-auto transform md:scale-".concat(r),style:{maxWidth:"100%",width:"fit-content",transformOrigin:"0 0"}},o.a.createElement("canvas",{className:"border-2",id:"backgroundCanvas",style:{zIndex:1,top:"100px"}},"This text is displayed if your browser does not support HTML5 Canvas."))),n&&o.a.createElement("div",{className:"absolute bg-white py-2 px-6 top-0 mx-auto  text-black z-50",style:{transform:"translate(-50%, 0px)",marginLeft:"50%"}},o.a.createElement("div",{className:"relative"},o.a.createElement("p",{className:"text-center font-medium text-gray-500"},"Custom dimensions"),o.a.createElement("span",{className:"absolute font-medium right-0 text-gray-600 top-0 cursor-pointer",onClick:function(){return e.setState({customSize:!1})}},"X")),o.a.createElement("div",{className:"flex "},o.a.createElement("span",{className:"border-2 m-2  p-2 rounded"},o.a.createElement("input",{type:"number",placeholder:"width",className:"w-full",style:{width:"70px",height:"30px"},id:"customX"})),o.a.createElement("span",{className:"border-2 m-2  p-2 rounded"},o.a.createElement("input",{type:"number",placeholder:"height",className:"w-full",style:{width:"70px",height:"30px"},id:"customY"})),o.a.createElement("span",{className:"  border-2 m-2 p-3 font-medium rounded"},"px")),o.a.createElement("div",{className:"w-full"},o.a.createElement("input",{type:"button",value:"Submit",className:"border-2 bg-red-600 px-3 py-1  w-full m-2 text-white my-4 rounded",onClick:function(){e.customSizeHandle()}}))))}}]),a}(n.Component);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.be10fa2d.chunk.js.map