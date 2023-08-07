//Let's the check button function
document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});

//
function checkPalindrome(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLen = Math.floor( len/2 );
    let result =document.getElementById("result");
    let i;

    for( i = 0; i < halfLen; i++){
        if( txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "Nope! Ain't no palindrome!";
            return;
        }
        result.textContent = "Nice! That there is a palindrome!"
    }
}
function strCheck(){
    var fname = document.getElementById("input_fname").value;
    var lname = document.getElementById("input_lname").value; 
    var concName = "Hello " + fname + " " + lname;
    document.getElementById("conc_names").innerHTML = concName;
    
    if(concName.length == 20)  {
        alert("Howdy There!");
    }else{
        alert("Info is less than 20 characters"); 
    }
    var zip = document.getElementById("input_zip").value;
    if(zip.length == 5)   {
        alert("Zip is Vaild!")
    }
    else{
        alert("Invaild! Re-enter Zipcode!")
    }     
    }