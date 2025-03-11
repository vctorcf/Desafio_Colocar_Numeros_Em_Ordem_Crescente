function testar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;

    if (n1==n2||n2==n3||n1==n3||isNaN(n1)||isNaN(n2)||isNaN(n3)){
        alert("Por favor, digite apenas números que sejam diferentes entre si.");
    } else {
        if(n1<n2&&n2<n3){
            alert(`A ordem crescente é ${n1}, ${n2}, ${n3}.`);
        } else if(n2<n1&&n1<n3){
            alert(`A ordem crescente é ${n2}, ${n1}, ${n3}.`);
        } else if(n2<n3&&n3<n1){
            alert(`A ordem crescente é ${n2}, ${n3}, ${n1}.`);
        } else if(n1<n3&&n3<n2){
            alert(`A ordem crescente é ${n1}, ${n3}, ${n2}.`);
        } else if(n3<n1&&n1<n2){
            alert(`A ordem crescente é ${n3}, ${n1}, ${n2}.`);
        } else if(n3<n2&&n2<n1){
            alert(`A ordem crescente é ${n3}, ${n2}, ${n1}.`);
        }
    }
}