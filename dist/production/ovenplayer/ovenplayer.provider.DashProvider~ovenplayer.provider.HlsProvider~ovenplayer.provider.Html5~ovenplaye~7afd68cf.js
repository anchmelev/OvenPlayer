/*! For license information please see ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!(!e||!e.isDynamic)&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceIndex()===o)return o;return r}},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(376)),o=l(n(93)),a=l(n(379)),i=n(374),u=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("CORE loaded. ");var l={};(0,o.default)(l);var s=e.element,c=null,g=null,E=!1;e.adTagUrl&&((c=(0,r.default)(s,l,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),g=(0,a.default)(s,e.mse,l,c?c.videoEndedCallback:null),s.playbackRate=s.defaultPlaybackRate=t.getPlaybackRate();var d=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=s.src,i=document.createElement("source");i.src=o.file,i.src!==a?(s.src=o.file,a&&s.load()):0===r&&s.currentTime>0&&l.seek(r),r>0&&(l.seek(r),t.isAutoStart()||l.play()),t.isAutoStart()&&l.play()}};return l.getName=function(){return e.name},l.canSeek=function(){return e.canSeek},l.setCanSeek=function(t){e.canSeek=t},l.isSeeking=function(){return e.seeking},l.setSeeking=function(t){e.seeking=t},l.setState=function(t){if(e.state!==t){var n=e.state;if(n===u.STATE_AD_PLAYING&&(t===u.STATE_ERROR||t===u.STATE_IDLE))return!1;if(c&&c.isAutoPlaySupportCheckTime());else{switch(t){case u.STATE_COMPLETE:l.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:l.trigger(u.PLAYER_PAUSE,{prevState:e.state,newstate:u.STATE_PAUSED});break;case u.STATE_AD_PAUSED:l.trigger(u.PLAYER_PAUSE,{prevState:e.state,newstate:u.STATE_AD_PAUSED});break;case u.STATE_PLAYING:l.trigger(u.PLAYER_PLAY,{prevState:e.state,newstate:u.STATE_PLAYING});case u.STATE_AD_PLAYING:l.trigger(u.PLAYER_PLAY,{prevState:e.state,newstate:u.STATE_AD_PLAYING})}e.state=t,l.trigger(u.PLAYER_STATE,{prevstate:n,newstate:e.state})}}},l.getState=function(){return e.state},l.setBuffer=function(t){e.buffer=t},l.getBuffer=function(){return e.buffer},l.getDuration=function(){return s.duration===1/0||(0,i.separateLive)(e.mse)?1/0:s.duration},l.getPosition=function(){return s?s.currentTime:0},l.setVolume=function(e){if(!s)return!1;s.volume=e/100},l.getVolume=function(){return s?100*s.volume:0},l.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,l.trigger(u.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,l.trigger(u.CONTENT_MUTE,{mute:s.muted})),s.muted)},l.getMute=function(){return!!s&&s.muted},l.preload=function(n,r){return e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),d(r||0),new Promise(function(e,n){t.isMute()&&l.setMute(!0),t.getVolume()&&l.setVolume(t.getVolume()),e()})},l.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),d(e.sources.starttime||0)},l.play=function(){if(!s)return!1;if(E)return!1;if(E=!0,l.getState()!==u.STATE_PLAYING)if(c&&c.isActive()||c&&!c.started())c.play().then(function(e){E=!1}).catch(function(e){E=!1,console.log(e)});else{var e=s.play();void 0!==e?e.then(function(){E=!1}).catch(function(e){"Safari"!==t.getBrowser().browser&&"iOS"!==t.getBrowser().os&&"Android"!==t.getBrowser().os||(s.muted=!0),setTimeout(function(){E=!1,l.play()},100)}):E=!1}},l.pause=function(){if(!s)return!1;l.getState()===u.STATE_PLAYING?s.pause():l.getState()===u.STATE_AD_PLAYING&&c.pause()},l.seek=function(e){if(!s)return!1;s.currentTime=e},l.setPlaybackRate=function(e){return!!s&&(l.trigger(u.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},l.getPlaybackRate=function(){return s?s.playbackRate:0},l.getSources=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},l.getCurrentSource=function(){return e.currentSource},l.setCurrentSource=function(n,r){return e.currentSource!==n&&(n>-1&&e.sources&&e.sources.length>n?(OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,l.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceIndex(n),l.pause(),l.setState(u.STATE_IDLE),r&&d(s.currentTime||0),e.currentSource):void 0)},l.getQualityLevels=function(){return s?e.qualityLevels:[]},l.getCurrentQuality=function(){return s?e.currentQuality:null},l.setCurrentQuality=function(e){},l.isAutoQuality=function(){},l.setAutoQuality=function(e){},l.getFramerate=function(){return e.framerate},l.setFramerate=function(t){return e.framerate=t},l.seekFrame=function(t){var n=e.framerate,r=(s.currentTime*n+t)/n;r+=1e-5,l.pause(),l.seek(r)},l.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);l.pause(),l.setState(u.STATE_IDLE)},l.destroy=function(){if(!s)return!1;l.stop(),g.destroy(),c&&c.destroy(),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(e){var t=l[e];return function(){return t.apply(l,arguments)}},l}},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(377)),o=i(n(7)),a=(n(374),n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,i,u){var l="",s="",c={},g=!1,E={started:!1,active:!1,isVideoEnded:!1,checkAutoplayStart:!0},d=null,f=null,A=null,T=null,v=null,S=null,y=null,p=!1,m=!1;try{var _=function(){OvenPlayerConsole.log("AutoPlay Support : ","autoplayAllowed",p,"autoplayRequiresMuted",m),(y=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,y.setAdWillAutoPlay(p),y.setAdWillPlayMuted(m),m&&t.trigger(a.PLAYER_WARNING,{message:a.WARN_MSG_MUTEDPLAY,timer:1e4,iconClass:a.UI_ICONS.volume_mute,onClickCallback:function(){t.setMute(!1)}}),y.adTagUrl=i,T.requestAds(y)};return l=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,s=google.ima.AdErrorEvent.Type.AD_ERROR,google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),d=function(e){console.log(e.getError().getVastErrorCode(),e.getError().getMessage());var n=e.getError().getInnerError();n&&console.log(n.getErrorCode(),n.getMessage()),v&&v.destroy(),t.trigger(a.STATE_AD_ERROR,{code:e.getError().getVastErrorCode(),message:e.getError().getMessage()}),E.active=!1,E.started=!0,t.play()},f=function(n){var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,v=n.getAdsManager(e,o),S=(0,r.default)(v,t,E,d),t.on(a.CONTENT_VOLUME,function(e){e.mute?v.setVolume(0):v.setVolume(e.volume/100)},c),g=!0},A=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(T=new google.ima.AdsLoader(A)).addEventListener(l,f,!1),T.addEventListener(s,d,!1),function(){if(!e.play)return p=!0,m=!1,E.checkAutoplayStart=!1,_(),!1;var t=e.play();void 0!==t?t.then(function(){e.pause(),p=!0,m=!1,E.checkAutoplayStart=!1,_()}).catch(function(){e.muted=!0;var t=e.play();void 0!==t&&t.then(function(){e.pause(),p=!0,m=!0,E.checkAutoplayStart=!1,_()}).catch(function(){e.muted=!1,p=!1,m=!1,E.checkAutoplayStart=!1,_()})}):(e.pause(),p=!0,m=!1,E.checkAutoplayStart=!1,_())}(),c.isActive=function(){return E.active},c.started=function(){return E.started},c.play=function(){if(E.started)return new Promise(function(e,t){try{v.resume(),e()}catch(e){t(e)}});var e=0;return new Promise(function(t,r){!function o(){e++,g?n.isAutoStart()&&!p?(p=!0,E.started=!1,r(new Error("autoplayNotAllowed"))):(A.initialize(),v.init("100%","100%",google.ima.ViewMode.NORMAL),v.start(),E.started=!0,t()):e<300?setTimeout(o,100):r(new Error("admanagerLoadingTimeout"))}()})},c.pause=function(){v.pause()},c.videoEndedCallback=function(e){!S||!S.isAllAdComplete()&&S.isLinearAd()?(E.isVideoEnded=!0,T.contentComplete()):e()},c.isAutoPlaySupportCheckTime=function(){return E.checkAutoplayStart},c.destroy=function(){T&&(T.removeEventListener(l,f),T.removeEventListener(s,d)),v&&v.destroy(),A&&A.destroy(),S&&S.destroy();var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(a.CONTENT_VOLUME,null,c)},c}catch(e){return null}}},377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(7));var r=n(1);t.default=function(e,t,n,o){var a={},i={},u=null,l=google.ima.AdEvent.Type.AD_BUFFERING,s=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,c=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,g=google.ima.AdErrorEvent.Type.AD_ERROR,E=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,d=google.ima.AdEvent.Type.CLICK,f=google.ima.AdEvent.Type.SKIPPED,A=google.ima.AdEvent.Type.COMPLETE,T=google.ima.AdEvent.Type.FIRST_QUARTILE,v=google.ima.AdEvent.Type.LOADED,S=google.ima.AdEvent.Type.MIDPOINT,y=google.ima.AdEvent.Type.PAUSED,p=google.ima.AdEvent.Type.RESUMED,m=google.ima.AdEvent.Type.STARTED,_=google.ima.AdEvent.Type.USER_CLOSE,P=google.ima.AdEvent.Type.THIRD_QUARTILE,L=!1,O=null;return i[s]=function(e){OvenPlayerConsole.log(e.type),n.started&&(n.active=!0,t.pause())},i[c]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,!n.started||0!==t.getPosition()&&n.isVideoEnded||t.play()},i[g]=o,i[E]=function(e){OvenPlayerConsole.log(e.type),L=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},i[d]=function(e){OvenPlayerConsole.log(e.type)},i[T]=function(e){OvenPlayerConsole.log(e.type)},i[l]=function(e){OvenPlayerConsole.log("AD_BUFFERING",e.type)},i[v]=function(n){OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),a=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:a.isLinear()})},i[S]=function(e){OvenPlayerConsole.log(e.type)},i[y]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},i[p]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},i[m]=function(o){OvenPlayerConsole.log(o.type);var a=o.getAd();O=a;var i={isLinear:a.isLinear(),duration:a.getDuration(),skipTimeOffset:a.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,i),a.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,u=setInterval(function(){var n=e.getRemainingTime(),o=a.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:a.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},i[A]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},i[f]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},i[_]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(u),t.trigger(r.STATE_AD_COMPLETE)},i[P]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(i).forEach(function(t){e.removeEventListener(t,i[t]),e.addEventListener(t,i[t])}),a.setAdCompleteCallback=function(e){},a.isAllAdComplete=function(){return L},a.isLinearAd=function(){return!O||O.isLinear()},a.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(i).forEach(function(t){e.removeEventListener(t,i[t])})},a}},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(374);t.default=function(e,t,n,a){var i={};OvenPlayerConsole.log("EventListener loaded.",e,n);var u={},l=-1,s=e;return i.canplay=function(){n.setCanSeek(!0),n.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},i.durationchange=function(){i.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},i.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),n.getState()!==r.STATE_IDLE&&n.getState()!==r.STATE_COMPLETE&&(a?a(function(){n.setState(r.STATE_COMPLETE)}):n.setState(r.STATE_COMPLETE))},i.loadeddata=function(){},i.loadedmetadata=function(){var e=s.duration===1/0||(0,o.separateLive)(t),a=n.getSources(),i=n.getCurrentSource(),u=i>-1?a[i].type:"",l={duration:e?1/0:s.duration,type:u};OvenPlayerConsole.log("EventListener : on loadedmetadata",l),n.trigger(r.CONTENT_META,l)},i.pause=function(){return n.getState()!==r.STATE_COMPLETE&&n.getState()!==r.STATE_ERROR&&!s.ended&&!s.error&&s.currentTime!==s.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void n.setState(r.STATE_PAUSED))},i.play=function(){l=-1,s.paused||n.getState()===r.STATE_PLAYING||n.setState(r.STATE_LOADING)},i.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),l<0&&n.setState(r.STATE_PLAYING)},i.progress=function(){var e=s.buffered;if(!e)return!1;var t=s.duration,o=s.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/t,0,1);n.setBuffer(100*a),n.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:t}),OvenPlayerConsole.log("EventListener : on progress",100*a)},i.timeupdate=function(){var e=s.currentTime,t=s.duration;isNaN(t)||(t>9e15&&(t=1/0),n.isSeeking()||s.paused||n.getState()!==r.STATE_STALLED&&n.getState()!==r.STATE_LOADING&&n.getState()!==r.STATE_AD_PLAYING||function(e,t){return e.toFixed(2)===t.toFixed(2)}(l,e)||(l=-1,n.setState(r.STATE_PLAYING)),(n.getState()===r.STATE_PLAYING||n.isSeeking())&&n.trigger(r.CONTENT_TIME,{position:e,duration:t}))},i.seeking=function(){n.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",s.currentTime),n.trigger(r.CONTENT_SEEK,{position:s.currentTime})},i.seeked=function(){n.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),n.setSeeking(!1),n.trigger(r.CONTENT_SEEKED))},i.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},i.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",n.getState()),n.isSeeking()?n.setState(r.STATE_LOADING):n.getState()===r.STATE_PLAYING&&(l=s.currentTime,n.setState(r.STATE_STALLED))},i.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*s.volume)),n.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*s.volume),mute:s.muted})},i.error=function(){var e=s.error&&s.error.code||0,t={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NEWWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",t),(0,o.errorTrigger)(r.ERRORS[t],n)},Object.keys(i).forEach(function(e){s.removeEventListener(e,i[e]),s.addEventListener(e,i[e])}),u.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(i).forEach(function(e){s.removeEventListener(e,i[e])})},u}}}]);