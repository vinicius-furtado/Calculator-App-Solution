function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}
function clean(){
    document.getElementById("resultado").innerHTML = "";
}
function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);

}
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);

    }
}
function toggleStyleSheet() {
    var styleSheet = document.getElementById("styleSheet");
    var currentHref = styleSheet.getAttribute("href");
    if (currentHref === "style.css") {
      styleSheet.setAttribute("href", "style2.css");
    } else {
      styleSheet.setAttribute("href", "style.css");
    }
  }