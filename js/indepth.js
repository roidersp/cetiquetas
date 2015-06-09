var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="test";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;


 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};

loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);


$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});


$('.indepth_jugador').hover(
         function () {
	       $(this).find(".indepth_jugador_info").hide();
           $(this).find(".indepth_jugador_est").show();
         }, 
         function () {
	         
           $(this).find(".indepth_jugador_est").hide();
           $(this).find(".indepth_jugador_info").show();
         }
     );
     
   
 var device = navigator.userAgent

if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i))
 { 
mobile=true;
	$(".indepth_break .indepth_parallax_back").css("background-attachment","scroll");
	
$("#indepth_page4").css("background-attachment","scroll");
$("#indepth_page1").css("background-attachment","scroll");
$("#indepth_page1").css("background-position","center bottom");
}
else
{
	mobile=false;
}

$(document).ready(function(){
	//indepth_sizeAdjust(false);
	var ventana_alto = $(window).height();
    	$('#indepth_cover').css("height",(ventana_alto-60)+"px");
    	 if(ventana_alto>600){
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.30);
 	}
});


$(window).on("resize", function(){
	//indepth_sizeAdjust(false);
	var ventana_alto = $(window).height();
    	$('#indepth_cover').css("height",(ventana_alto-60)+"px");
    	 if(ventana_alto>600){
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.30);
 	}
});