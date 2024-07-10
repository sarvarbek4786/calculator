function ekranaYoz(val) {
 document.getElementById("input").innerHTML += val;
}
function hammasinOchir(){
    document.getElementById("input").innerHTML="" ;
}

function birsiniOchir(){
    let qiymat =document.getElementById("input").innerHTML,
  yangiQiymat="";
 // for(let i=0; i<qiymat.length -1; i++){
   // yangiQiymat+=qiymat[i];
 // }
 yangiQiymat =qiymat.slice(0,qiymat.length - 1);
  document.getElementById("input").innerHTML=yangiQiymat;
}
function hisobla(){
  let qiymat =document.getElementById("input").innerHTML;
  document.getElementById("input").innerHTML =eval(qiymat);
}