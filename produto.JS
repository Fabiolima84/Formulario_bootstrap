function calcular(){
    if(validaDescricao() && validaquantidade() && validaunitario()){ 
        let nTotal = quantidade.value * unitario.value;
        total.value = nTotal;
    };    
    
}
//if verifica se o campo esta vazio
function validaDescricao(){
if(descricao.value.trim() === ""){
    descricao.style.background = "red";
    mensagem.innerHTML = "Preencha a descrição do produto!";
    $('#alerta').modal('show');
    return false;
    } else {
        descricao.style.background = "white";
        return true;
    }
}
function validaquantidade(){
    if(quantidade.value.trim() === ""){
        quantidade.style.background = "red";
        mensagem.innerHTML = "Preencha a quantidade do produto!";
        $('#alerta').modal('show');
        return false;
        } else {
            if(quantidade.value > 0 && quantidade.value <=1000){
                quantidade.style.background = "white";
                return true;
            }else{
            quantidade.style.background = "red";
            mensagem.innerHTML = "O valor da quantidade do produto deve esta entre 1 a 1000!";
        $('#alerta').modal('show');
            return true;
        }
    }
    }
    function validaunitario(){
        if(unitario.value.trim() === ""){
            unitario.style.background = "red";
            mensagem.innerHTML = "Preencha o valor unitario do produto!";
            $('#alerta').modal('show');
            return false;
            } else {
                unitario.style.background = "white";
                return true;
            }
        }