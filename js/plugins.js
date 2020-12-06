$(document).ready(function()
{
    $(".showDetails").on("click",function()
    {
        window.location = "promotion details.html";  
    });
    $(window).on("scroll",function()
    {
      var sc=$(window).scrollTop();
      if(sc>0)
     {$(".upBotton").fadeIn(1);}
     else
     {$(".upBotton").fadeOut(1);}
    });
    $(".upBotton").click(function() {    
        $("html").animate({ 
            scrollTop: 0 
        }, "fast");
    });
    $("input").click(function() {
        $(this).css("border","3px solid turquoise")
    }).trigger("change");
})