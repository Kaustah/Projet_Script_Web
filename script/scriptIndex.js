$("div").hide();

setTimeout(function () {
    $("div").fadeIn(3000, function() {
        alert("Bienvenue dans le monde de la mycologie!!!");
    });
}, 5000);

//Mouse Enter/Leave modification de taille de l'image (lien)
$("img").on("mouseenter", function() {
    $(this).attr("height", 250).attr("width", 400);
});

$("img").on("mouseleave", function() {
    $(this).attr("height", 200).attr("width", 300);
});

//Double Click, modifie le texte du titre
$("#entete").dblclick(function() {
    $(this).fadeOut(3000).delay(4000).queue(function() {
        $("#titre").html("Steven Henriques - Gr. 421 <br>Projet JavaScript");
        $(this).show();
    });
    
});