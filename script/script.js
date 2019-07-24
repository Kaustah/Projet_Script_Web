document.getElementById("emplacement").addEventListener("click", function(){
    if (document.querySelectorAll('input').length === 0) {
        var newInput = document.createElement("input");
        newInput.id = "freeformInput";
        var newButton = document.createElement("button");
        newButton.type = "button";
        newButton.value = "Ajouter";
        newButton.id = "boutonAjout";
        document.getElementById("emplacement").insertBefore(newInput,document.getElementById("emplacement").childNodes[1]);
        document.getElementById("emplacement").insertBefore(newButton,document.getElementById("emplacement").childNodes[2]);
        document.getElementById("boutonAjout").addEventListener("click", function(){
            var newListEntry = document.getElementById("freeformInput").value;
            var newList = document.createElement("li");
            newList.innerText = newListEntry;
            document.getElementById("emplacement").appendChild(newList);
            newButton.parentNode.removeChild(newButton);
            document.getElementById("emplacement").removeChild(newInput);
           //Crer le nouveau <li> et inseerer a la fait de <ul>
           //Supprimer le bouton et son champ d'entrée
        });
    }
}); 