document.getElementById("emplacement").addEventListener("click", function(){
    //Ajout d'evenements pour crer 2 nouveaux elements
    if (document.querySelectorAll('input').length === 0) {
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

