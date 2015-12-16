$(document).ready(function(){
    var num1;
    var sign;
    var num2;
    $(".num").on("click", function(){
        var valueClicked = $(this).attr("val");
        
        if($("#screen").html().length <= 10){
            $("#screen").append(valueClicked);
        }
    });
    
    $(".sign").on("click",function(){
        sign = $(this).attr("val");
        num1=$("#screen").html();
        $("#screen").html(0);
    
    
    });
    $(".c").on("click", function(){
        $("#screen").html(0);
    });
    $(".e").on("click", function(){
        num2=$("#screen").html();
        var result = eval(num1+sign+num2);
        
        
        
    
    
    
    })
    
});