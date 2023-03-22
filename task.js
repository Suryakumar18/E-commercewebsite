




  var out = '';
  var names  = "arun b c d e";
  names.split(' ').forEach(names =>{
    out+=names[0].toUpperCase();
  });

console.log(out);










function Factorial() {
    var num = parseInt(document.getElementById("num").value);


    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }

    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerHTML =  factorial;
}
