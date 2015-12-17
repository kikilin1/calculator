$(document).ready(function(){
    var num1 = 0;
    var sign;
    var num2 =0;
    $(".num").on("click", function(){
        var valueClicked = $(this).attr("val");
        
        if($("#screen").html().length <= 10){
            $("#screen").append(valueClicked);
        }
    });
    
    $(".sign").on("click",function(){
        sign = $(this).attr("val");
        num1=$("#screen").html();
        $("#screen").html("");
    
    
    });
    $(".c").on("click", function(){
        $("#screen").html("");
    });
    $(".e").on("click", function(){
        num2=$("#screen").html();
        var result = eval(num1+sign+num2);
        $("#screen").html(result);
        
        
        
        
    
    
    
    })
    
});