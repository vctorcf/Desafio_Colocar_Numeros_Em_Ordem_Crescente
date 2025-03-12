function testar(){
    const numeros = [];

    let n1 = document.getElementById("n1").value;
    numeros.push(n1);
    let n2 = document.getElementById("n2").value;
    numeros.push(n2);
    let n3 = document.getElementById("n3").value;
    numeros.push(n3);

    if (n1==n2||n2==n3||n1==n3||isNaN(n1)||isNaN(n2)||isNaN(n3)){
        alert("Por favor, digite nos espaços somente números que sejam diferentes entre si.");
    } else {
      numeros.sort(function(a, b){return a - b});
      alert(`Números digitados em ordem crescente:${numeros}.`);
    }
}