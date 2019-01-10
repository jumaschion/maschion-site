let valor = document.getElementById("input-valor");
let submit = document.getElementById("submit");
const tecido = document.getElementsByName("tecido");

function retornaPreco () {

    const camisaConfig = {
        tecido1: "R$300,00",
        tecido2: "R$550,00",
        tecido3: "R$200,00",
        tecido4: "R$750,00",
        tecido5: "R$1200,00"
    }

    for ( i=0; i < tecido.length; i++){
        if(tecido[i].checked === true){
       
            document.getElementById("input-valor").innerHTML = (camisaConfig[`${tecido[i].id}`])
        }
    }
}


