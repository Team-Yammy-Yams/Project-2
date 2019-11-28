document.getElementById("button").addEventListener("click", submitFunction);

function submitFunction() {
  if(ValidateEmail(document.getElementById("email").value)== true)
  alert("Thank you for the message! We will get back to you within 1-2 weeks");
  else
  alert("You have entered an invalid email address!");
}
function ValidateEmail(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)){
    document.form1.text1.focus();
    return true;
  }
else
  {
  alert("You have entered an invalid email address!");
  document.form1.text1.focus();
  return false;
  }
}
 window.addEventListener("submit", function() {
 alert("Thank you for joining us. More info will be sent to your email address once the beta is ready to go.");
 });
