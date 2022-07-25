function marcar(){
    let nome = document.querySelector("#txtNome").value;
    let senha = $("#txtSenha").val();

    console.log("nome: " +nome +"senha: " +senha);
    
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");

    td1.innerHTML = nome;
    td2.innerHTML = "x";
    td3.innerHTML = "f";
    td4.innerHTML = "x";
    td5.innerHTML = "f";
    td6.innerHTML = "x";
    td7.innerHTML = "x";

    let tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

   let  tbody = document.querySelector("#dados");
   tbody.appendChild(tr);
}