$(document).ready(function() {
    var i = 0;
    $(".btn").click(function(event) {
        var flavours = ["vanilla", "chocolate", "mint"];
        if(!flavours[i]) {
            i = 0;
        }
        $("#taste").text(flavours[i] + "!"); // start with flavours[0]
        i++; // i += 1
        
        // flavours.forEach(function(flavour){
            
        //     $("#taste").append(flavour);

        // });
        event.preventDefault();
    });
});