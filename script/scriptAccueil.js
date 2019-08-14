document.getElementById("emplacement").addEventListener("click", function(){
    //Ajout d'evenements pour crer 2 nouveaux elements
    if (document.querySelectorAll('#texte_central input').length === 0) {
        var newInput = document.createElement("input");
        newInput.id = "freeformInput";
        var newButton = document.createElement("input");
        newButton.type = "button";
        newButton.value = "Ajouter";
        newButton.id = "boutonAjout";
        document.getElementById("texte_central").insertBefore(newInput,document.getElementById("texte_central").childNodes[7]);
        document.getElementById("texte_central").insertBefore(newButton,document.getElementById("texte_central").childNodes[8]);
        //Evenement: ajout d'un element <li> et suppression des 2 elements
        document.getElementById("boutonAjout").addEventListener("click", function(){
            var newListEntry = document.getElementById("freeformInput").value;
            var newList = document.createElement("li");
            newList.innerText = newListEntry;
            document.getElementById("emplacement").appendChild(newList);
            newButton.parentNode.removeChild(newButton);
            newInput.parentNode.removeChild(newInput);
        });        
    }
}); 
//Utilisation de timer pour faire appraitre les menus
setTimeout(function () {
        tempDiv = [];
        tempDiv.push(document.getElementById('menu_gauche'));
        tempDiv.push(document.getElementById('menu_droite'));
        tempDiv.push(document.getElementById('texte_central'));

        for (var i = 0; i< tempDiv.length; i++)
        {
            tempDiv[i].style.opacity = "1";
        }

    }, 3000);

//Defiler differentes images pour #Phalloides lorsqu'on clique sur "Z, X"
document.addEventListener("keypress", ChangementImagePhalloide);

function ChangementImagePhalloide(e) {
    var tempImgNode = document.getElementById("phalloides");
    var touche = e.keyCode;
    var character = String.fromCharCode(touche);

    switch (character) {
        case "z":
            tempImgNode.setAttribute("src", "../images/phalloide2.png");
            break;
        case "x":
            tempImgNode.setAttribute("src", "../images/phalloide3.png");
            break;
        default:
            tempImgNode.setAttribute("src", "../images/deathcap.png")
    };
};

//Evenement sur Container_classification afin de modifier le background des element LI
document.getElementById("container_classification").addEventListener("click", function(){
    var elementLi = document.querySelectorAll("#container_classification li");

    for (var i = 0; i< elementLi.length; i++)
    {
        elementLi[i].style.backgroundColor = "transparent";

        if (elementLi[i].innerText[0] == "P")
        {
            elementLi[i].style.backgroundColor = "purple";
        }
    }

}); 

//Cliquer sur bouton au bas pour modifier le style des listes Classification
document.getElementById("liststyle").addEventListener("click", toggleStylePuce);

function toggleStylePuce() {
    var tempBouton = document.getElementById("liststyle");

    if (tempBouton.value == "Change List Style")
    {
        document.getElementById("classification").removeAttribute("start");
        document.getElementById("roman").setAttribute("style", "list-style-type:none;");
        tempBouton.value = "Original List Style";
    }
    else if (tempBouton.value == "Original List Style")
    {
        document.getElementById("classification").setAttribute("start", "15");
        document.getElementById("roman").removeAttribute("style");
        tempBouton.value = "Change List Style";
    }
}

//Cliquer sur bouton au bas pour supprimer les 2 elements images
document.getElementById("DeleteImg").addEventListener("click", function() {
    var TempDivList = document.getElementsByClassName("emplacement_img");

    for (var i = TempDivList.length - 1; i >= 0; i--)
    {
        var tempDiv = TempDivList[i];
        tempDiv.parentNode.removeChild(tempDiv);
    }
});

//Cliquer sur bouton au bas pour Modifier le style des Liens (nav) // avec retour possible
document.getElementById("NavLinkStyle").addEventListener("click", function() {
    var tempButton = document.getElementById("NavLinkStyle");
    var NavLinks = document.querySelectorAll("nav a");

    if (tempButton.value == "Change Link Style")
    {
        for (var i = 0; i < NavLinks.length; i++)
        {
            NavLinks[i].style.color = "red";
        }
        tempButton.value = "Original Link Style";
    }
    else if(tempButton.value == "Original Link Style")
    {
        for (var i = 0; i< NavLinks.length; i++)
        {
            NavLinks[i].removeAttribute("style");
        }
        tempButton.value = "Change Link Style";
    }
    
});

//Evenement lorsque l'ecran ScrollDown alors les Nav s'aggrandissent
$(window).scroll(function() {
    var currentHeight = $("#menu_gauche").css("height");
    var NewHeight = "";

    if (currentHeight != "600px")
    {
        for (var i = 0; i<3;i++)
        {
            NewHeight += currentHeight[i];
        }
        NewHeight = Number(NewHeight)
        NewHeight += 5;
        NewHeight += "px";
    
        $(".menu").css("height", NewHeight);
    }
    
});