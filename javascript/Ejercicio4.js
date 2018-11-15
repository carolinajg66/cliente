$(document).ready(function(){


    document.getElementById("id_videos").addEventListener("click", destacarvideos, false);
    document.getElementById("id_info").addEventListener("click", destacarinfo, false);
    document.getElementById("id_navegador").addEventListener("click", destacarNavegador, false);

    document.getElementById("ch_videos").addEventListener("click", chdestacarvideos, false);
    document.getElementById("ch_noticias").addEventListener("click", chdestacarinfo, false);
    document.getElementById("ch_navegador").addEventListener("click", chdestacarNavegador, false);
  


  });
  

 //$("id_tieneEnlaces a[href^='https://']") .addClass("cl_destaca"); 



function chdestacarvideos(){

    $(".cla_videos").toggleClass("cl_destaca");

}

function chdestacarNavegador(){


    $(".cla_navegador").toggleClass("cl_destaca");

}
function chdestacarinfo(){

    $(".cla_noticias").toggleClass("cl_destaca");
   
}

function destacarvideos(){

    $(".cl_navegador").removeClass("cl_destaca");
    $(".cl_noticias").removeClass("cl_destaca");
    $(".cl_videos").addClass("cl_destaca");
}

function destacarNavegador(){

    $(".cl_videos").removeClass("cl_destaca");
    $(".cl_noticias").removeClass("cl_destaca");
    $(".cl_navegador").addClass("cl_destaca");

}

function destacarinfo(){
   
    $(".cl_navegador").removeClass("cl_destaca");
    $(".cl_videos").removeClass("cl_destaca");
    $(".cl_noticias").addClass("cl_destaca");
   
   
}


