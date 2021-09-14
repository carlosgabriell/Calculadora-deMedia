document.getElementById('send').addEventListener('click', function (e) {
    e.preventDefault()})
  document.getElementById("send").onclick =  NotaF 
  
  function NotaF (){
    var n1 = "";
    var n2 = "";
    var n3 = "";
    var n4 = "";
  
    n1 = parseFloat(document.getElementById("nota1").value);
    n2 = parseFloat(document.getElementById("nota2").value);
    n3 = parseFloat(document.getElementById("nota3").value);
    n4 = parseFloat(document.getElementById("nota4").value);
  
    var notaFinal = ((n1 + n2 + n3 + n4) / 4).toFixed(1);
  
    document.getElementById("final").innerHTML = notaFinal;
  
    if (notaFinal < 6) {
      document.getElementById("alert").innerHTML = "Reprovado";
  } 
    else {
  document.getElementById("alert").innerHTML = "Aprovado";
    }
  }