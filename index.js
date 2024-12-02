var array=["bumuthu","chamod","kasun","nirmal"];
kwdkanne();
function kwdkanne(){
  var count=array.length;
  var random=Math.floor(Math.random()*count);
   
  document.getElementById("root").innerHTML="random lunch person is "+array[random]+" he hee.";
}