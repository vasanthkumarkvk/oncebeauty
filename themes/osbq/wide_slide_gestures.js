!function(e){
	function t(e,t){
		if(!e)return[];
		for(var a=[],n=new RegExp("(^| )"+t+"( |\\d|$)"),s=e.getElementsByTagName("*"),r=0,o=s.length;o>r;r++)
			n.test(s[r].className)&&a.push(s[r]);
		return a
	}
	
	function a(e,t){
		var a=new RegExp("(^|\\s)"+t+"(\\s|$)","g");
		return a.test(e.className)||(e.className=(e.className+" "+t).replace(/\s+/g," ").replace(/(^ | $)/g,"")),e
	}
	
	function n(e,t){
		var a=new RegExp("(^|\\s)"+t+"(\\s|$)","g");
		return e.className=e.className.replace(a,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,""),e
	}
	
	function s(e,t){
		for(var a in t)
		e.style[a]=t[a]
	}
	
	function r(e,t,a){
		if(e){
			t=t.split(" ");
			for(var n in t)e.addEventListener(t[n],a,!1)
		}
	}
	
	function o(o){
		a(o,"cs_handle");
		var i=t(o.getElementsByTagName("ul")[0],"img"),
				c=e.createElement("div"),
				l=e.createElement("div");
		a(l,"cs_gestures"),
		l.appendChild(c),
		o.appendChild(l),
		c.appendChild(a(i[i.length-1].getElementsByTagName("img")[0].cloneNode(),"cs_first_img"));
		
		for(var p in i)
			c.appendChild(i[p].getElementsByTagName("img")[0].cloneNode());
			c.appendChild(a(i[0].getElementsByTagName("img")[0].cloneNode(),"cs_last_img"));
			
		var d=t(o,"cs_anchor slide"),
				m=0,
				g=0,
				f=300,
				u=15,
				h=0,
				v=o.clientWidth;
				r(o,
					"mousedown touchstart",
					function(e){
						if(!/cs_play_pause|cs_arrowprev|cs_arrownext|cs_bullets|cs_thumb/g.test(e.target.parentNode.className)&&!/cs_bullets/g.test(e.target.parentNode.parentNode.className)){
							m=(e.touches?e.touches[0]:e).pageX,g=0,e.stopPropagation(),
							v=o.clientWidth;
							for(var t in d)if(d[t].checked){h=t;break}a(o,"cs_grab"),d[h].checked=!0,s(c,{WebkitTransition:"",transition:"",WebkitTransform:"translate3d("+-v*h+"px,0px,0px)",transform:"translate3d("+-v*h+"px,0px,0px)"})}}),r(e,"mousemove touchmove",function(e){if(m){var t=(e.touches?e.touches[0]:e).pageX;e.preventDefault(),e.stopPropagation(),g=t-m>=v?v+m:-v>=t-m?-v+m:t,a(l,"cs_show"),s(c,{WebkitTransform:"translate3d("+(-v*h+g-m)+"px,0px,0px)",transform:"translate3d("+(-v*h+g-m)+"px,0px,0px)"})}}),r(e,"mouseup touchend",function(e){if(m){g&&(e.preventDefault(),e.stopPropagation()),n(o,"cs_grab");var t=m-g,a=0;if(g&&Math.max(t,-1*t)>u){for(var r in d)if(d[r].checked){t>0&&r<d.length-1?h=1*r+1:0>t&&r>0?h=1*r-1:0>t?(a=-1,h=d.length-1):(a=d.length,h=0);break}d[h].checked=!0}var i=Math.max((v+(t>0?-1:1)*t)/v,.3);s(c,{WebkitTransition:"-webkit-transform "+f*i+"ms linear",transition:"transform "+f*i+"ms linear",WebkitTransform:"translate3d("+-v*(a||h)+"px,0px,0px)",transform:"translate3d("+-v*(a||h)+"px,0px,0px)"}),g=0,m=0}});var x=t(o,"cs_anchor");for(var p in x)(function(e){r(x[e],"change",function(){e!=h&&n(l,"cs_show")})})(p)}	window.cssSliderGestures||(window.cssSliderGestures=1,(!e.all||window.atob)&&r(window,"load",function(){for(var a=t(e.body,"csslider"),n=0,s=a.length;s>n;n++)new o(a[n])}))
}(document);