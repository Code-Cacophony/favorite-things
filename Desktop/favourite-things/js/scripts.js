$(document).ready(function(){
    $("#form1").submit(function(){
        var color = $("input#color").val();
        var sports = $("input#sports").val();
        var location = $("input#location").val();
        var array = [color, sports,location];
        // alert(array);
        $(".text1").append(color);
        $(".text2").append(sports)
        $(".text3").append(location);

event.preventDefault();
    });
});