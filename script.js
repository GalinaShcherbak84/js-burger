//referenze
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
//console.log(ingredients);
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');

//settings
var coupons = ['12354ABCDEF', '6789GHKIO', '67jk90lm32d'];

//4 rendere gli ingredienti cliccabili
for(var i = 0; i < addBtn.length; i++){
    var add = addBtn[i];
    add.addEventListener('click', function(){
        console.log(this);//elemento che ho cliccato.
        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = !thisCheckbox.checked;
    });
}

//calc prezzo
btn.addEventListener('click', function(){
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
        //3 Sconto
        var couponCode = coupon.value;
        //console.log(couponCode);
        if(coupons.includes(couponCode)){
            //20%  di sconto
            price -= price * 0.2
        }

        //2 stampa il prezzo a schermo.
        displayPrice.innerHTML = price.toFixed(2);
    }
})