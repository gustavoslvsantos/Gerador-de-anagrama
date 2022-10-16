//variavel para salvar o que é escrito na box
var div = document.getElementById("permuta");

//funçao que inicio, ela limpa, pega o numero e o salva 
function inicio() { 
  div.innerHTML = "";
  var number = document.getElementById("valor").value;
  var strg = number.split("");
  listar_Permuta(strg);
}

//funçao de apoio chamando outra funçao
function listar_Permuta(string) {
  permuta_Recursiva(string, 0);
}

//funçao que calcula e imprime os calculos da permutaçao
function permuta_Recursiva(string, k) {
  var len = string.length;
  if (k == len) {
    string.forEach(function (item, index) {
      div.innerHTML = div.innerHTML + item;
    });
    div.innerHTML = div.innerHTML + "<br/>";
  } else {
    for (var i = k; i < len; i++) {
      string = troca_Caracteres(string, k, i);
      permuta_Recursiva(string, k + 1);
      string = troca_Caracteres(string, i, k);
    }
  }
}

//funçao que troca posiçao dos caracteres
function troca_Caracteres(str, p1, p2) {
  var tmp = str[p1];
  str[p1] = str[p2];
  str[p2] = tmp;
  return str;
}
