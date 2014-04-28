/*
 * Wallpaper v3.1.11 - 2014-04-22
 * A jQuery plugin for smooth-scaling image and video backgrounds. Part of the Formstone Library.
 * http://formstone.it/wallpaper/
 *
 * Copyright 2014 Ben Plum; MIT Licensed
 */

!function(a,b){"use strict";function c(b){var c=a.extend({},A,b);q=a("body"),r=p(),s=r!==!1,s||(r="transitionend.wallpaper");for(var e=a(this),f=0,g=e.length;g>f;f++)d.apply(e.eq(f),[a.extend({},c)]);return q.hasClass("wallpaper-inititalized")||(q.addClass("wallpaper-inititalized"),t.on("resize.wallpaper",c,l)),e}function d(b){var c=a(this);if(!c.hasClass("wallpaper")){a.extend(b,c.data("wallpaper-options")),c.addClass("wallpaper").append('<div class="wallpaper-container"></div>'),b.guid="wallpaper-"+w++,b.youTubeGuid=0,b.$target=c,b.$container=b.$target.find(".wallpaper-container"),b.$target.data("wallpaper",b).on("resize.wallpaper",b,k);var d=b.source;b.source=null,e(d,b,!0),b.onReady.call()}}function e(a,b,c){if(b.source!==a){if(b.source=a,b.isYouTube=!1,"string"==typeof a){var d=a.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);d&&d.length>=1&&(b.isYouTube=!0,b.videoId=d[1])}b.isYouTube?(b.playing=!1,b.playerReady=!1,b.posterLoaded=!1,h(a,b,c)):"object"!=typeof a||a.fallback?f(a,b,!1,c):g(a,b,c)}else b.$target.trigger("wallpaper.loaded"),b.onLoad.call(b.$target)}function f(c,d,e,f){var g=a('<div class="wallpaper-media wallpaper-image'+(f!==!0?" animated":"")+'"><img /></div>'),h=g.find("img"),j=c;if("object"==typeof c){var l=[];g.addClass("wallpaper-responsive");for(var n in c)if(c.hasOwnProperty(n)){var p="fallback"===n?"(min-width: 0px)":n;if(p){var q=b.matchMedia(p.replace(1/0,"100000px"));q.addListener(m),l.push({mq:q,source:c[n]}),q.matches&&(j=c[n])}}g.data("wallpaper-matches",l)}h.one("load.wallpaper",function(){v&&g.addClass("native").css({backgroundImage:"url("+j+")"}),g.on(r,function(b){o(b),a(b.target).is(g)&&(g.off(r),e||i(d))}),setTimeout(function(){g.css({opacity:1})},0),k({data:d}),(!e||f)&&(d.$target.trigger("wallpaper.loaded"),d.onLoad.call(d.$target))}).attr("src",j),d.$container.append(g),u=a(".wallpaper-responsive"),(h[0].complete||4===h[0].readyState)&&h.trigger("load.wallpaper")}function g(b,c,d){if(c.source.poster&&(f(c.source.poster,c,!0,!0),d=!1),!z){var e='<div class="wallpaper-media wallpaper-video'+(d!==!0?" animated":"")+'">';e+="<video",c.loop&&(e+=" loop"),c.mute&&(e+=" muted"),e+=">",c.source.webm&&(e+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(e+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(e+='<source src="'+c.source.ogg+'" type="video/ogg" />'),e+="</video>",e+="</div>";var g=a(e),h=g.find("video");h.one("loadedmetadata.wallpaper",function(){g.on(r,function(b){o(b),a(b.target).is(g)&&(g.off(r),i(c))}),setTimeout(function(){g.css({opacity:1})},0),k({data:c}),c.$target.trigger("wallpaper.loaded"),c.onLoad.call(c.$target),c.hoverPlay?c.$target.on("mouseover.boxer",B.play).on("mouseout.boxer",B.pause):c.autoPlay&&this.play()}),c.$container.append(g)}}function h(c,d,e){if(!d.videoId){var g=c.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);d.videoId=g[1]}if(d.posterLoaded||(d.poster||(d.poster="http://img.youtube.com/vi/"+d.videoId+"/0.jpg"),d.posterLoaded=!0,f(d.poster,d,!0,e),e=!1),!z)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="https://www.youtube.com/iframe_api"></script>'),x){var h=d.guid+"_"+d.youTubeGuid++,j="";j+='<div class="wallpaper-media wallpaper-embed'+(e!==!0?" animated":"")+'">',j+='<iframe id="'+h+'" type="text/html" src="',j+="https://www.youtube.com/embed/"+d.videoId+"/",j+="?controls=0&rel=0&showinfo=0&wmode=transparent&enablejsapi=1&version=3&playerapiid="+h,d.loop&&(j+="&loop=1"),j+="&autoplay=1",j+="&origin="+b.location.protocol+"//"+b.location.host,j+='" frameborder="0" allowfullscreen></iframe>',j+="</div>";var l=a(j);d.$container.append(l),d.player&&(d.oldPlayer=d.player,d.player=null),d.player=new b.YT.Player(h,{events:{onReady:function(){d.playerReady=!0,d.player.setPlaybackQuality("highres"),d.mute&&d.player.mute(),d.hoverPlay?d.$target.on("mouseover.boxer",B.play).on("mouseout.boxer",B.pause):d.autoPlay&&d.player.playVideo(),d.$target.find(".wallpaper-embed").addClass("ready")},onStateChange:function(c){d.playing||c.data!==b.YT.PlayerState.PLAYING?d.loop&&d.playing&&c.data===b.YT.PlayerState.ENDED&&d.player.playVideo():(d.playing=!0,(d.hoverPlay||!d.autoPlay)&&d.player.pauseVideo(),d.$target.trigger("wallpaper.loaded"),d.onLoad.call(d.$target),l.on(r,function(b){o(b),a(b.target).is(l)&&(l.off(r),i(d))}),l.css({opacity:1}))}}}),k({data:d})}else y.push({source:c,data:d})}function i(a){var b=a.$container.find(".wallpaper-media");b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function j(b){var c=b.$container.find(".wallpaper-media");c.length>=1&&c.on(r,function(d){o(d),a(d.target).is(c)&&(a(this).remove(),delete b.source)}).css({opacity:0})}function k(a){o(a);for(var b=a.data,c=b.$container.find(".wallpaper-media"),d=0,e=c.length;e>d;d++){var f=c.eq(d),g=b.isYouTube?"iframe":f.find("video").length?"video":"img",h=f.find(g);if(h.length&&("img"!==g||!b.nativeSupport)){var i=b.$target.outerWidth(),j=b.$target.outerHeight(),k=n(b,h);b.width=k.naturalWidth,b.height=k.naturalHeight,b.left=0,b.top=0;var l=b.isYouTube?b.embedRatio:b.width/b.height;b.height=j,b.width=b.height*l,b.width<i&&(b.width=i,b.height=b.width/l),b.left=-(b.width-i)/2,b.top=-(b.height-j)/2,f.css({height:b.height,width:b.width,left:b.left,top:b.top})}}}function l(){a(".wallpaper").each(function(){var b=a(this).data("wallpaper");k({data:b})})}function m(){u.each(function(){for(var b=a(this),c=(b.find("img"),b.parents(".wallpaper").data("wallpaper")),d=b.data("wallpaper-matches"),e=0,g=0,h=d.length;h>g;g++)if(d.hasOwnProperty(g)){var i=d[g].mq;i&&i.matches&&(e=g)}f(d[e].source,c,!1,!0),b.trigger("change.wallpaper")})}function n(a,b){if(a.isYouTube)return{naturalHeight:500,naturalWidth:500/a.embedRatio};if(b.is("img")){var c=b[0];if("undefined"!=typeof c.naturalHeight)return{naturalHeight:c.naturalHeight,naturalWidth:c.naturalWidth};var d=new Image;return d.src=c.src,{naturalHeight:d.height,naturalWidth:d.width}}return{naturalHeight:b[0].videoHeight,naturalWidth:b[0].videoWidth}}function o(a){a.preventDefault&&(a.stopPropagation(),a.preventDefault())}function p(){var a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},b=document.createElement("div");for(var c in a)if(a.hasOwnProperty(c)&&c in b.style)return a[c]+".wallpaper";return!1}var q,r,s,t=a(b),u=null,v="backgroundSize"in document.documentElement.style,w=0,x=!1,y=[],z=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(b.navigator.userAgent||b.navigator.vendor||b.opera),A={autoPlay:!0,embedRatio:1.777777,hoverPlay:!1,loop:!0,mute:!0,onLoad:a.noop,onReady:a.noop,source:null},B={defaults:function(b){return A=a.extend(A,b||{}),a(this)},destroy:function(){var b=a(this).each(function(){var b=a(this).data("wallpaper");b&&(b.$container.remove(),b.$target.removeClass("wallpaper").off(".boxer").data("wallpaper",null))});return a(".wallpaper").length<1&&(q.removeClass("wallpaper-inititalized"),t.off(".wallpaper")),b},load:function(b){return a(this).each(function(){var c=a(this).data("wallpaper");c&&("object"==typeof b&&b.poster&&(c.poster=b.poster,b=b.source),e(b,c))})},pause:function(){return a(this).each(function(){var b=a(this).data("wallpaper");if(b)if(b.isYouTube&&b.playerReady)b.player.pauseVideo();else{var c=b.$container.find("video");c.length&&c[0].pause()}})},play:function(){return a(this).each(function(){var b=a(this).data("wallpaper");if(b)if(b.isYouTube&&b.playerReady)b.player.playVideo();else{var c=b.$container.find("video");c.length&&c[0].play()}})},stop:function(){B.pause.apply(this)},unload:function(){return a(this).each(function(){var b=a(this).data("wallpaper");b&&j(b)})}};b.onYouTubeIframeAPIReady=function(){x=!0;for(var a in y)y.hasOwnProperty(a)&&h(y[a].source,y[a].data);y=[]},a.fn.wallpaper=function(a){return B[a]?B[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a.wallpaper=function(a){"defaults"===a&&B.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);