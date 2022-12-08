var num1;
var num2;
var resultado;

function somar() {
num1 = document.getElementById('num1').value;
num2 = document.getElementById('num2').value;
resultado = Number(num1)+Number(num2);
document.getElementById("total").value=resultado;
}
function subtrair() {
num1 = document.getElementById('num1').value;
num2 = document.getElementById('num2').value;
resultado = Number(num1)-Number(num2);
document.getElementById("total").value=total;
    }
function dividir() {
num1 = document.getElementById('num1').value;
num2 = document.getElementById('num2').value;
resultado = Number(num1)/Number(num2);
document.getElementById("total").value=total;
    }    
function multiplicar() {
num2 = document.getElementById('num1').value;
num1 = document.getElementById('num2').value;
resultado = Number(num1)*Number(num2);
document.getElementById("total").value=total;
    } 
