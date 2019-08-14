//Lors du clic de roulette de la souris, Les liens Externes sont supprimés
document.getElementById("menu_gauche").addEventListener("auxclick", function(e) {
    if (e.which == 2) {
        e.preventDefault(); 
        
        var tempNode;
        var Liens = document.querySelectorAll("#menu_gauche a");


        for (var i = Liens.length - 1; i >= 0; i--)
        {
            tempNode = Liens[i];
            tempHref = tempNode.getAttribute("href");
            if (tempHref[0] !== '#')
            {
                tempNode.parentNode.parentNode.removeChild(tempNode.parentNode);
            }
        }
        
    };
});

//Ajouts d'envent listener pour tradution a laide de Event Mouseover/Mouseout
document.querySelector("#texte_central p").addEventListener("mouseover", translateMouseOver);
document.querySelector("#texte_central p").addEventListener("mouseout", translateMouseOut);

function translateMouseOver() {
    temp = document.querySelector("#texte_central p");
    temp.innerHTML = "Amanita muscaria is a species of basidiomycete fungi of the family Amanitaceae. Toxic and psychotropic, it is one of the many representatives of the genus Amanita, and certainly the best known. Originating from the temperate regions of the northern hemisphere, Amanita muscaria has been accidentally introduced into many countries of the southern hemisphere, mainly as a symbiont of cultivated pines, and has become cosmopolitan. It associates with the roots of various hardwoods and conifers.";
};

function translateMouseOut() {
    temp = document.querySelector("#texte_central p");
    temp.innerHTML = "L'Amanite tue-mouches ou fausse oronge (Amanita muscaria), est une espèce de champignons basidiomycètes de la famille des Amanitaceae. Toxique et psychotrope, c'est l'un des nombreux représentants du genre des amanites, et certainement le plus connu. Originaire des régions tempérées de l'hémisphère nord, Amanita muscaria a été introduite accidentellement dans de nombreux pays de l'hémisphère sud, principalement comme symbiote des pins cultivés, et est devenue cosmopolite. Elle s'associe avec les racines de différents feuillus et conifères.";
};

//Timer recursif pour modifer background color texte central
setTimeout(ChangeBackgroundColor, 5000);

var tempCentral = document.getElementById("texte_central");

function ChangeBackgroundColor() {
    if (tempCentral.getAttribute("class") == "texte_central")
    {
        tempCentral.setAttribute("class", "texte_central2");
    }
    else if (tempCentral.getAttribute("class") == "texte_central2")
    {
        tempCentral.setAttribute("class", "texte_central3");
    }
    else if (tempCentral.getAttribute("class") == "texte_central3")
    {
        tempCentral.setAttribute("class", "texte_central");
    }
    
    setTimeout(ChangeBackgroundColor, 5000);
};

//Evenement sur Bouton afin de faire appraitre 3 liens anglais
document.getElementById("BoutonLiensAnglais").addEventListener("click", MenuDroiteLiensAnglais);

function MenuDroiteLiensAnglais() {
    var bouton = document.getElementById("BoutonLiensAnglais")
    var Liens = ["https://www.mushrooms.ca/", "https://cafedelites.com/garlic-mushrooms/", "https://www.bbcgoodfood.com/recipes/collection/mushroom"];
    var LiensDescr = ["Generic Website", "Garlic Mushroom Recipe", "Recipe Collection"];

    if (bouton.getAttribute("value") == "Affichage Liens Anglais")
    {
        for (var i = 0; i < Liens.length; i++)
        {
            var newList = document.createElement("li");
            newList.innerHTML = "<a href=\"" + Liens[i] + "\">" + LiensDescr[i] +"</a>";
            document.getElementById("morels").appendChild(newList);
        }
        bouton.parentNode.removeChild(bouton);
        document.getElementById("menu_droite").style.height = "475px";
    }
}

//FadeToggle avec Hover + changement de style
$("#texte_central").hover(function() {
    $(".menu").fadeToggle(2000, function() {
        $(".menu").css("background-color","rgba(228, 235, 160, 0.8)")
    })
}, function() {
    $(".menu").fadeToggle(1000)
});

//Click, modifier le font family P2
$("#p2").click(function() {
    $(this).css({"margin-top": "50px", "margin-bot": "50px"});

});