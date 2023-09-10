var inputbox=document.getElementById("inputbox");
var number=document.getElementsByClassName("number")
var clear=document.getElementById("clear");
var del=document.getElementById("del");
var result=document.getElementById("result");

// fun to clear screen
 var clr =()=>{
    inputbox.value="";
 }
 clear.addEventListener("click",clr);
// fun to delete value
 var dele=()=>{
    inputbox.value= inputbox.value.slice(0,-1);
 }
 del.addEventListener("click",dele);
// fun to display value
 function display(val){
   inputbox.value+=val;
 }

//  fun to display result
var res=()=>{
   
   try {
      inputbox.value = eval(inputbox.value);
    } catch (error) {
      inputbox.value = 'Error';
    }
}
result.addEventListener("click",res);