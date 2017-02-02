for (var i = 1; i <= 151; i++){
    $("#pokemon-images").append("<img id='" + i + "' src='http://pokeapi.co/media/img/"+i+".png'>");
}
var imageNum;
$("img").click(function(){
    imageNum = $(this).attr("id");
    $.get("http://pokeapi.co/api/v1/pokemon/" + imageNum + "/", function(res){
        $("#pokedex").html("<h1>" + res.name + "</h1><img src='http://pokeapi.co/media/img/" + imageNum + ".png'><h2>Types: </h2><ul>");
        typesarray(res.types);
        $("#pokedex").append("</ul><h2>Height: </h2>", res.height, "<h2>Weight: </h2>", res.weight);
    }, "json");
});
function typesarray (arr){
    for (var i=0; i < arr.length; i++){
        $("#pokedex").append("<li>" + arr[i].name + "</li>");
    }
};
