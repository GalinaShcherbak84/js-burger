//referenze
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox')
//console.log(ingredients);
var displayPrice = document.getElementById('price');

//calc prezzo
btn.addEventListener('click',function(){
    var name = burgerName.value.trim();
    //console.log(name);

    //nome del burger obbligatorio
    if(name.length === 0){
        //errore
        alert('Non hai inserito il nome del tuo burger.');
    }
    else{
        //console.log('procedi con il calcolo');

        //1 aggiunta del costo degli ingredienti al prezzo base.
        var price = 50;
        for(var i = 0; i< ingredients.length; i++){
            var ingredientCheck = ingredients[i];
            console.log(ingredientCheck.checked);
            if(ingredientCheck.checked === true){
                console.log(ingredientCheck.value)
                //aggiornare il prezzo
                price += parseInt(ingredientCheck.value);
            }
        }
        console.log(price);

        //2 stampa il prezzo a schermo.
        displayPrice.innerHTML = price.toFixed(2);
    }
})