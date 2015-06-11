var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="test";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var tenis_puntos=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];

$.getJSON( urlIndepth+"js/equipos.json", function( data ) {
	
	$.getJSON( urlIndepth+"js/tenis.json", function( tenis ) {
		
		
		if($(".indepth_goleadores_item").attr("href")=="#"){
			console.log()
			$(".indepth_goleadores_item .indepth_loquiero").css("display","none");
		$(".indepth_goleadores_item").bind('click', function(e){
			
				
				
				e.preventDefault();
			
					        
		});
		}
		
		$(".indepth_gol_img").hover(function(){
				var cont=$(".indepth_goleadores_info");
				var data=$(this);
				cont.find(".indepth_goleadores_nombre").html(data.attr("nombre"));
				cont.find(".indepth_goleadores_pais").html(data.attr("pais"));
				cont.find(".indepth_goleadores_goles").html(data.attr("goles")+" goles");
				
				var m_tenis=tenis["tenis"][data.attr("tenis")];
				
				cont.find(".indepth_goleadores_tenis").html(m_tenis["marca"]+" - "+m_tenis["nombre"]);
				
				cont.find("#indepth_goleadores_local .indepth_goleadores_img_item").html('<img src="'+urlIndepth+'images/Camisetas/Casa/'+normalize(data.attr("pais"))+'.jpg">');
				cont.find("#indepth_goleadores_visitante .indepth_goleadores_img_item").html('<img src="'+urlIndepth+'images/Camisetas/Visita/'+normalize(data.attr("pais"))+'.jpg">');
				
				cont.find("#indepth_goleadores_tenis .indepth_goleadores_img_item").html('<img src="'+urlIndepth+'images/Zapatos/'+m_tenis["marca"]+'/'+normalize(m_tenis["nombre"]).replace(/\s/g,"_")+'.jpg">');
				
				cont.find("#indepth_goleadores_tenis").attr('href',m_tenis["link"]);
				console.log(m_tenis["link"]);
				 if(m_tenis["link"]==""){
					 cont.find(".indepth_loquiero").css("display","none");
					$(".indepth_goleadores_item").bind('click', function(e){
					        e.preventDefault();
					        
					});
					

				}else{
					cont.find(".indepth_loquiero").css("display","block");
					$(".indepth_goleadores_item").unbind('click');
					 
				}
				 
				
			});
			
			var ranking=$("#indepth_ranking_cont");
			
			$.each(tenis["tenis"], function( i, item ) {
				console.log(item);
				ranking.append('<a target="_blank" class="indepth_ranking_item" href="'+item["link"]+'">');
				
				var ranging_a=$(ranking.find("a").get(i));
				ranging_a.attr("href",item['link']);
				
				
				ranging_a.append(createDiv("", "indepth_ranking_zapato",""));
				ranging_a.find(".indepth_ranking_zapato").append(createDiv("", "indepth_ranking_item_img",""));
				ranging_a.find(".indepth_ranking_item_img").html('<img src="'+urlIndepth+'images/Zapatos/'+item["marca"].replace(/\s/g,"_")+'/'+normalize(item["nombre"]).replace(/\s/g,"_")+'.jpg">');
				ranging_a.find(".indepth_ranking_zapato").append(createDiv("", "indepth_ranking_item_puntos",""));
				ranging_a.find(".indepth_ranking_item_puntos").html(tenis_puntos[i]);
				
				ranging_a.append(createDiv("", "indepth_ranking_info",""));
				ranging_a.find(".indepth_ranking_info").append('<div class="indepth_ranking_info_marca">'+item['marca']+'</div>');
				ranging_a.find(".indepth_ranking_info").append('<div class="indepth_ranking_info_zapato">'+item['nombre']+'</div>');
				ranging_a.find(".indepth_ranking_info").append('<div class="indepth_ranking_info_precio">'+item['precio']+'</div>');
				
				
				if(item['link']==""){
					ranging_a.click(function(e) {
						 e.preventDefault(); 
					});
					
					

				}else{
					ranging_a.find(".indepth_ranking_info").append('<div class="indepth_ranking_loquiero"></div>');
				}
				
			});
			
	});
	
	
	
});



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

var createDiv = function(newid, newclass,color) {
	return $('<div/>', {
	          id: newid,
	          class: newclass,
	          css:{
	             backgroundColor: color
	          }
	        });
} 

var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }      
      return ret.join( '' );
  }
 
})();