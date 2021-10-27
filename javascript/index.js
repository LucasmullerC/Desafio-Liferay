const inserirNome = document.getElementById("pesqtxt"); 
const colorp = document.getElementById("pcolor"); 
const entrar = document.getElementById("entrar"); 
const concluir = document.getElementById("concluir");
const nomes = document.getElementById("nomes");
const pessoas = [];
let cont = 1;

function criarLista() {
    if(inserirNome.value === ""){
        alert("Você deve inserir um nome");
    }
    else if(inserirNome.value.length > 13){
        alert("O nome deve ser menor que 13 caracteres."); 
    }
    else{
    if (cont === 7) {
        alert("A lista está cheia!");
    }
    else{
        const pessoa = {
            nome:inserirNome.value,
            color:colorp.value
        };
        pessoas.push(pessoa);
        document.getElementById("p"+cont).innerHTML = inserirNome.value;
        document.getElementById("num"+cont).innerHTML = cont;
        document.getElementById("num"+cont).style.backgroundColor = colorp.value
        document.getElementById("nome"+cont).style.display = "block";
        cont++;
    }
}
}

  function ConcluirLista(){
      pessoas.shift();
      cont = 1;
      for (var i = 0; i < pessoas.length; i++) {
        document.getElementById("p"+cont).innerHTML = pessoas[i].nome;
        document.getElementById("num"+cont).innerHTML = cont;
        document.getElementById("num"+cont).style.backgroundColor = pessoas[i].color;
        document.getElementById("nome"+cont).style.display = "block";
        cont++;
      }
      document.getElementById("nome"+(cont)).style.display = "none";
  }
  entrar.onclick=criarLista;
  concluir.onclick=ConcluirLista;