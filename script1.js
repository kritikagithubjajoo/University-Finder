function LoginValid() {
    var luname = document.getElementById("uname").value;
    var lpass = document.getElementById("pass").value;
  
    var pwd_expression =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var alphanums = /^[A-Za-z]+$/;
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
    if ((luname === "") | (luname == null)) {
      alert("Username is empty, please enter a valid user name");
    } else if (!alphanums.test(luname)) {
      alert("User name field has alphabets only");
    } else if ((lpass === "") | (lpass == null)) {
      alert("Password is empty, please enter a valid password");
    } else if (!pwd_expression.test(lpass)) {
      alert(
        "Password is invalid, Minimun 1 upper case, 1 lower case, 1 special character and 1 Numeric are required in Password"
      );
    } else if (lpass.length < 8) {
      alert("Password should be minimun 8 char long");
    } else if (lpass.length > 12) {
      alert("Password should be max 12 char long");
    } else {
      window.location.reload();
      alert("Login Successful!!!");
    }
  }


  
src="https://code.jquery.com/jquery-3.3.1.js"
integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
crossorigin="anonymous">

$(function(){
  $("#header").load("header1.html"); 
  $("#footer").load("footer1.html"); 
});





