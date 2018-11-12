$(document).ready(function(){


    document.getElementById("id_videos").addEventListener("click", destacar, false);
  
  
  });
  

 $("id_tieneEnlaces a[href^='https://']") .addClass("cl_destaca"); //

function destacar(){


    $(".clvideos").addClass("cl_destaca");
}

function destacar(){

    $(".clvideos").removeClass("cl_destaca");

    .toogleClass();
}
}