$(document).ready(function(){
   "use strict"
    $("img").mouseover(function(){
       $(this).animate({
            height:"200px",
            width:"200px"
       }); 
    });
    $("img").mouseout(function(){
       $(this).animate({
           height:"100px",
           width: "100px"
       });
    });
    $("input[name$=contact]").change(function(){
        var test=$(this).val();
        $(".opt").hide();
        $("#"+test).show();   
    });
    $("a").on({
        mouseenter: function(){
        $(this).css({"font-style": "italic","font-weight": "bold","text-decoration": "underline"});
        },
        mouseleave:function(){
            $(this).css({"font-style": "normal","font-weight": "normal","text-decoration": "none"});
        }
    });
    /*$("#feedback-block").focus(function(){  
        $(this).next().text("Write your feedback here.").fadeOut(1000);  
    });*/
    $("#submit-btn").click(function(){
      
       const fdb=$("#feedback-block").val();
       
       if(fdb=="")
           {
               $("#feedback-block").next().text("Feedback is required");
           }
        else if(fdb.length<50)
            {
                $("#feedback-block").next().text("enter minimun 50 characters");
            }
        else
           {
               alert("Thanks for your feedback!!");
               $("#feedback-block").next().text("*");
               $("#feedback-form").submit();
           }
   });
    $("#title-header").click(function(){
        var url="homepage.html"
        $(location).attr('href',url);
    });
    $("#title-header-coun").click(function(){
        var url="../homepage.html"
        $(location).attr('href',url);
    });
    $("#information").css('display', 'none').fadeIn(1000);
});