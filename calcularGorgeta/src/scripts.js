function calculateTip(event){
    event.prevmentDefault(); 
    let conta = document.getElementById('conta').value;
    let qualidadeDoServico = document.getElementById('qualidadeDoServico').value;
    let numPessoas = document.getElementById('pessoas').value;

    if (conta == '' | qualidadeDoServico == 0){
        alert("Por favor, preencha os valores!")
        return;
    }
    if(numPessoas == "" | numPessoas <= 1){
        numPessoas = 1;
        document.getElementById('each').style.display = "none"
    }else{
        document.getElementById('each').style.display = "block"
    }

    let total = (conta + qualidadeDoServico) / numPessoas;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById(tipsForm).addEventListener('submit',calculateTip);