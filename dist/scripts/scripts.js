function setCookie(e,t,o){if(o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);var a="; expires="+n.toGMTString()}else var a="";var t=e+"="+t+a+"; path=/";document.cookie=t,console.log("Set cookie : "+t)}function getCookie(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var a=o[n];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t)){var r=a.substring(t.length,a.length);return console.log("Get cookie : "+t+" value: "+r),r}}return null}function getRoomTypeString(e){var t="";return"salon"==e&&(t="Salon"),"lounge"==e&&(t="Salon"),"chambre"==e&&(t="Chambre"),"bedroom"==e&&(t="Chambre"),"cuisine"==e&&(t="Cuisine"),"kitchen"==e&&(t="Cuisine"),"bureau"==e&&(t="Bureau"),"office"==e&&(t="Bureau"),"sam"==e&&(t="Salle a manger"),"diningroom"==e&&(t="Salle a manger"),"cave"==e&&(t="Cave"),"cellar"==e&&(t="Cave"),"divers"==e&&(t="Divers"),"various"==e&&(t="Divers"),"misc"==e&&(t="Divers"),"exterieur"==e&&(t="Exterieur"),"outside"==e&&(t="Exterieur"),"sdb"==e&&(t="Salle de bain"),"bathroom"==e&&(t="Salle de bain"),"hall"==e&&(t="Couloir"),"couloir"==e&&(t="Couloir"),"corridor"==e&&(t="Couloir"),"garage"==e&&(t="Garage"),"Internal"==e&&(t="Internal Room"),t}function getRoomTypeIcon(e){return"salon"==e&&(rname="room_salon.png"),"lounge"==e&&(rname="room_salon.png"),"chambre"==e&&(rname="room_chambre.png"),"bedroom"==e&&(rname="room_chambre.png"),"cuisine"==e&&(rname="room_cuisine.png"),"kitchen"==e&&(rname="room_cuisine.png"),"bureau"==e&&(rname="room_bureau.png"),"office"==e&&(rname="room_bureau.png"),"sam"==e&&(rname="room_sam.png"),"diningroom"==e&&(rname="room_sam.png"),"cave"==e&&(rname="room_cave.png"),"cellar"==e&&(rname="room_cave.png"),"divers"==e&&(rname="room.png"),"various"==e&&(rname="room.png"),"misc"==e&&(rname="room.png"),"exterieur"==e&&(rname="room_exterieur.png"),"outside"==e&&(rname="room_exterieur.png"),"sdb"==e&&(rname="room_sdb.png"),"bathroom"==e&&(rname="room_sdb.png"),"hall"==e&&(rname="room_corridor.png"),"couloir"==e&&(rname="room_corridor.png"),"corridor"==e&&(rname="room_corridor.png"),"garage"==e&&(rname="room_garage.png"),"Internal"==e?rname="room.png":"room.png"==rname,rname}!function(e,t){"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof module&&module.exports?module.exports=t():e.ReconnectingWebSocket=t()}(this,function(){function e(t,o,n){function a(e,t){var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!1,!1,t),o}var r={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3};n||(n={});for(var i in r)"undefined"!=typeof n[i]?this[i]=n[i]:this[i]=r[i];this.url=t,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var c,s=this,l=!1,u=!1,m=document.createElement("div");m.addEventListener("open",function(e){s.onopen(e)}),m.addEventListener("close",function(e){s.onclose(e)}),m.addEventListener("connecting",function(e){s.onconnecting(e)}),m.addEventListener("message",function(e){s.onmessage(e)}),m.addEventListener("error",function(e){s.onerror(e)}),this.addEventListener=m.addEventListener.bind(m),this.removeEventListener=m.removeEventListener.bind(m),this.dispatchEvent=m.dispatchEvent.bind(m),this.open=function(t){c=new WebSocket(s.url,o||[]),t||m.dispatchEvent(a("connecting")),(s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",s.url);var n=c,r=setTimeout(function(){(s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",s.url),u=!0,n.close(),u=!1},s.timeoutInterval);c.onopen=function(o){clearTimeout(r),(s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onopen",s.url),s.protocol=c.protocol,s.readyState=WebSocket.OPEN,s.reconnectAttempts=0;var n=a("open");n.isReconnect=t,t=!1,m.dispatchEvent(n)},c.onclose=function(o){if(clearTimeout(r),c=null,l)s.readyState=WebSocket.CLOSED,m.dispatchEvent(a("close"));else{s.readyState=WebSocket.CONNECTING;var n=a("connecting");n.code=o.code,n.reason=o.reason,n.wasClean=o.wasClean,m.dispatchEvent(n),t||u||((s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onclose",s.url),m.dispatchEvent(a("close")));var r=s.reconnectInterval*Math.pow(s.reconnectDecay,s.reconnectAttempts);setTimeout(function(){s.reconnectAttempts++,s.open(!0)},r>s.maxReconnectInterval?s.maxReconnectInterval:r)}},c.onmessage=function(t){(s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",s.url,t.data);var o=a("message");o.data=t.data,m.dispatchEvent(o)},c.onerror=function(t){(s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","onerror",s.url,t),m.dispatchEvent(a("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(t){if(c)return(s.debug||e.debugAll)&&console.debug("ReconnectingWebSocket","send",s.url,t),c.send(t);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(e,t){"undefined"==typeof e&&(e=1e3),l=!0,c&&c.close(e,t)},this.refresh=function(){c&&c.close()}}return e.prototype.onopen=function(e){},e.prototype.onclose=function(e){},e.prototype.onconnecting=function(e){},e.prototype.onmessage=function(e){},e.prototype.onerror=function(e){},e.debugAll=!1,e.CONNECTING=WebSocket.CONNECTING,e.OPEN=WebSocket.OPEN,e.CLOSING=WebSocket.CLOSING,e.CLOSED=WebSocket.CLOSED,e}),"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(e){return this.slice(0,e.length)==e}),"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(e){return this.slice(-e.length)==e}),angular.module("calaosApp",["ngSanitize","ui.router","ngDialog","farbtastic"]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/home"),e.state("login",{url:"/login",templateUrl:"views/login.html",data:{requireLogin:!1}}).state("home",{"abstract":!0,url:"/home",template:'<div ui-view class="fade"></div>',data:{requireLogin:!0}}).state("home.list",{url:"",templateUrl:"views/home.html"}).state("home.room",{url:"/{roomId:int}",templateUrl:"views/room.html",controller:"RoomCtrl"}).state("audio",{"abstract":!0,url:"/audio",template:'<div ui-view class="fade"></div>',data:{requireLogin:!0}}).state("audio.list",{url:"",templateUrl:"views/audiolist.html"}).state("audio.player",{url:"/{playerId}",templateUrl:"views/audio_player.html"}).state("security",{"abstract":!0,url:"/security",template:'<div ui-view class="fade"></div>',data:{requireLogin:!0}}).state("security.list",{url:"",templateUrl:"views/cameralist.html"}).state("security.camera",{url:"/{cameraId:int}",templateUrl:"views/camera.html"})}]).run(["$rootScope","$location","$timeout","CalaosApp","$state",function(e,t,o,n,a){e.$state=a,e.$on("$stateChangeStart",function(e,o,a){var r=o.data.requireLogin;r&&!n.isAuth()&&(console.log("not logged in, redirect"),t.path("/login"))})}]).config(["$sceDelegateProvider",function(e){e.resourceUrlWhitelist(["self","http://127.0.0.1:5454/**"])}]),angular.module("calaosApp").directive("calaosCamera",["$timeout",function(e){return{restrict:"AE",replace:!0,template:"<div></div>",link:function(t,o,n){var a=document.createElement("canvas");a.width=o.width(),a.height=o.height(),o.append(a);var r=a.getContext("2d"),i=new Image;i.src=n.src;var c=function(){a.width=a.width,i.width*i.height>0&&r.drawImage(i,0,0,a.width,a.height)},s=function(t){c(),e(function(){i.src=n.src+"&"+(new Date).getTime()},10)};i.onload=s}}}]),angular.module("calaosApp").factory("CalaosApp",["$rootScope","$state","$timeout",function(e,t,o){var n=!1,a=!1,r=!1,i=!1,c="",s="",l={},u=[],m=[],p=[],g={isConnected:function(){return n},isAuth:function(){return r},hasAuthFailed:function(){return i},isLoading:function(){return a},getHomeData:function(){return l},getSortedHomeByRow:function(){return u},getSortedCameraByRow:function(){return m},send:function(e){angular.isString(e)?f.send(e):angular.isObject(e)&&f.send(JSON.stringify(e))},setState:function(e,t){g.send({msg:"set_state",data:{id:e.id,value:t}})},signIn:function(e,t){a=!0,i=!1,r=!1,c=e,s=t,console.log("Trying to sign in with "+c),n&&g.send({msg:"login",data:{cn_user:c,cn_pass:s}})},signOut:function(){a=!1,i=!1,r=!1,c="",s="",l="",u=""}},d=function(e){if("login"!=e.msg||r){if("get_home"==e.msg){l=e.data,l.home.sort(function(e,t){return t.hits-e.hits}),u=[];for(var n=[],d=0;d<l.home.length;d++){if(l.home[d].icon=getRoomTypeIcon(l.home[d].type),l.home[d].roomId=d,l.home[d].items)for(var h=0;h<l.home[d].items.length;h++)p[l.home[d].items[h].id]=l.home[d].items[h],"temp"!=l.home[d].items[h].gui_type||l.home[d].hasTemp||(l.home[d].hasTemp=!0,l.home[d].temp=l.home[d].items[h]);n.push(d),n.length>=3&&(u.push(n),n=[])}n.length>0&&u.push(n),m=[];for(var n=[],d=0;d<l.cameras.length;d++){l.cameras[d].cameraId=d;var f="";if(""!==calaosDevConfig.calaosServerHost){var v=calaosDevConfig.calaosServerHost;v.startsWith("ws://")&&(v=v.slice(5,v.length)),f="http://"+v.slice(0,v.indexOf("/"))+"/api"}else{var b=window.location.protocol+"//";b+=window.location.hostname+":"+window.location.port+"/api",f=b}f+="?cn_user="+encodeURIComponent(c),f+="&cn_pass="+encodeURIComponent(s),f+="&action=camera",f+="&type=get_picture",f+="&id="+encodeURIComponent(l.cameras[d].id),l.cameras[d].cam_src=f,n.push(d),n.length>=3&&(m.push(n),n=[])}n.length>0&&m.push(n),a=!1,o(function(){t.go("home.list")},1500)}else if("event"==e.msg){var C=e.data;console.debug("Received event: ",C),"io_changed"==C.type_str&&p.hasOwnProperty(C.data.id)?(C.data.hasOwnProperty("state")&&(p[C.data.id].state=C.data.state),C.data.hasOwnProperty("name")&&(p[C.data.id].name=C.data.name)):console.debug("Event not implemented!")}}else"true"!==e.data.success?(i=!0,r=!1):(r=!0,g.send({msg:"get_home"}))},h=function(){if(""!==calaosDevConfig.calaosServerHost)return calaosDevConfig.calaosServerHost;var e="http:"===window.location.protocol?"ws://":"wss://";return e+=window.location.hostname+":"+window.location.port+"/api",console.log("Connecting to "+e),e},f=new ReconnectingWebSocket(h());return f.onopen=function(){console.log("websocket open"),e.$apply(function(){n=!0}),i||g.send({msg:"login",data:{cn_user:c,cn_pass:s}})},f.onclose=function(){console.log("websocket closed"),e.$apply(function(){n=!1,a=!1})},f.onerror=function(){console.log("websocket error"),e.$apply(function(){n=!1,o(function(){g.signOut(),t.go("login")},200)})},f.onmessage=function(t){var o=t.data;e.$apply(function(){d(JSON.parse(o))})},g}]),angular.module("calaosApp").controller("MainCtrl",["$scope","$state","CalaosApp","$window",function(e,t,o,n){e.CalaosApp=o,e.signOut=function(){o.signOut(),t.go("login")},e.goBack=function(){n.history.back()},e.canGoBack=function(){return t.is("home.room")||t.is("audio.player")||t.is("security.camera")?!0:!1}}]),angular.module("calaosApp").controller("LoginCtrl",["$scope","$state","CalaosApp",function(e,t,o){e.sign_in=function(){o.signIn(e.cn_user,e.cn_pass)}}]),angular.module("calaosApp").controller("HomeCtrl",["$scope","$state","CalaosApp",function(e,t,o){e.homeByRow=o.getSortedHomeByRow(),e.homeRaw=o.getHomeData().home}]),angular.module("calaosApp").controller("RoomCtrl",["$scope","$state","$stateParams","CalaosApp",function(e,t,o,n){var a=n.getHomeData().home;e.room={name:"",icon:"",items:[]},o.roomId<0||o.roomId>=a.length?(console.log("unkown room "+o.roomId),t.go("home")):e.room=a[o.roomId]}]),angular.module("calaosApp").controller("LightDimmerCtrl",["$scope","CalaosApp",function(e,t){var o=function(t){e.percent_value=0,e.bool_status=!1,isNaN(parseInt(t.state))?"set "==t.state.substr(0,4)?e.percent_value=parseInt(t.state.substr(4,t.state.length-4)):"true"==t.state?e.percent_value=100:"false"==t.state&&(e.percent_value=0):e.percent_value=parseInt(t.state),e.bool_status=e.percent_value>0?!0:!1,e.percent_value_rw=e.percent_value};e.changeValueDimmer=function(o){var n="set "+e.percent_value_rw;t.setState(o,n)},o(e.item),e.$watch("item",function(){o(e.item)},!0)}]),angular.module("calaosApp").controller("LightRGBCtrl",["$scope","CalaosApp","ngDialog","$rootScope",function(e,t,o,n){var a=function(t){e.color="0"==t.state?"#000":t.state,console.log("updateState color: "+e.color),e.bool_status="0"==t.state||"#000000"==t.state?!1:!0};e.colorPicker=function(){console.log("ColorPicker click"),o.open({template:"views/color-picker.html",controller:"ColorPickerCtrl",className:"ngdialog-theme-default",closeByDocument:!1,scope:e})},a(e.item),e.$watch("item",function(){a(e.item)},!0)}]),angular.module("calaosApp").controller("ColorPickerCtrl",["$scope","CalaosApp","ngDialog",function(e,t,o){console.log("currentColor: "+e.color),e.close=function(){o.close()},e.validColor=function(){console.log("Valid color clicked"),o.close(),t.setState(e.item,"set "+e.color)}}]),angular.module("calaosApp").controller("VarStringCtrl",["$scope","CalaosApp","ngDialog",function(e,t,o){var n=function(t){console.log(t),e.display_text=""==t.state?t.name:t.state,e.text=t.state};e.dialogText=function(){o.open({template:"views/dialog-text.html",controller:"StringDialogCtrl",className:"ngdialog-theme-default",closeByDocument:!1,scope:e})},n(e.item),e.$watch("item",function(){n(e.item)},!0)}]),angular.module("calaosApp").controller("StringDialogCtrl",["$scope","CalaosApp","ngDialog",function(e,t,o){e.close=function(){o.close()},e.validText=function(){o.close(),t.setState(e.item,e.text)}}]),angular.module("calaosApp").controller("ShutterCtrl",["$scope","CalaosApp","ngDialog",function(e,t,o){var n=function(t){if("shutter"==t.gui_type)e.shutter_state="true"==t.state;else if("shutter_smart"==t.gui_type){var o="0";t.state.startsWith("stop")?o=t.state.substring(5):t.state.startsWith("up")?o=t.state.substring(3):t.state.startsWith("down")&&(o=t.state.substring(5));parseInt(o);e.shutter_state=100>o}};n(e.item),e.$watch("item",function(){n(e.item)},!0)}]),angular.module("calaosApp").controller("AudioListCtrl",["$scope","$state","CalaosApp",function(e,t,o){e.audioRaw=o.getHomeData().audio}]),angular.module("calaosApp").controller("AudioPlayerCtrl",["$scope","$state","CalaosApp",function(e,t,o){}]),angular.module("calaosApp").controller("CameraListCtrl",["$scope","$state","CalaosApp",function(e,t,o){e.cameraSorted=o.getSortedCameraByRow(),e.cameras=o.getHomeData().cameras}]),angular.module("calaosApp").controller("CameraSingleCtrl",["$scope","$state","$stateParams","CalaosApp","$timeout",function(e,t,o,n,a){e.cameras=n.getHomeData().cameras,o.cameraId<0||o.cameraId>=e.cameras.length?(console.log("unkown camera "+o.cameraId),t.go("security.list")):e.camera=e.cameras[o.cameraId]}]);