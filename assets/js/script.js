// 1) es-ce que toute la page est affichée avant de faire quoi que se soit?


window.onload = () =>{

    // 2) quand la page est chargée, récupérer id create-account-button    
    var btn = document.getElementById("create-account-button");

   // 6) permet de fermer le formulaire avec la croix " x "
    var close_register = document.getElementById("close-register");
   
    // 9) fait disparaître le bloc
    var overlay = document.getElementById("overlay");

    // 3) ecouter le click sur ce bouton    
    btn.addEventListener("click", (e) =>{
       
        // 6)  empêcher que la page se recharge, il faut récupérer l'évenement "e" qui est cliqué
        e.preventDefault();

        // 4) cibler l'élément
        var popup = document.getElementById("register-popup");

        // 5) changer la propriété popup 
        popup.style.display ="block";

        // 10) permet d'ouvrir le overlay
        overlay.style.display ="block";

    })


    // fermer le popup
    close_register.addEventListener("click", () =>{
         
        // 7) récupérer popup
         var popup = document.getElementById("register-popup");

         // 8) refermer le popup 
        popup.style.display ="none";

        //11) fermer le overlay
        overlay.style.display ="none";
    })

}