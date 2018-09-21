
/* Console palindrome(["a","n","a"]) */
var palindroma = function(x) {
    var cadena="";
    var palabrita=""
    for(let i=0;i<x.length; i++){
        cadena+=x[i]+"";
        palabrita+=""+x[i];
    }
    console.log(cadena);
    console.log(palabrita);
    if(cadena==palabrita){
        console.log("La palabra es palindrima");
    }
    else{
        console.log("No es palindroma:(");
    }
}