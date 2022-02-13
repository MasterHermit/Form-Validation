document.getElementById("name").addEventListener("blur", validName);
document.getElementById("zip").addEventListener("blur", validZip);
document.getElementById("email").addEventListener("blur", validEmail);
document.getElementById("phone").addEventListener("blur", validPhone);

function validName() {
  const name = document.getElementById("name");
  const regEx = /^[A-Za-z\s]{2,20}$/;

  if (!regEx.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validZip() {
  const zip=document.getElementById("zip");
  const regEx=/^[\d]{6}$/;
  if(!regEx.test(zip.value)){
    zip.classList.add("is-invalid");
  }else{
    zip.classList.remove("is-invalid");
  }
}
function validEmail() {
  const email=document.getElementById("email");
  const regEx=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/;
  if(!regEx.test(email.value)){
    email.classList.add("is-invalid");
  }else{
    email.classList.remove("is-invalid");
  }

}
function validPhone() {
  const phone=document.getElementById("phone");
  const regEx=/^[0-9]{10}$/;
 if(!regEx.test(phone.value))
 {
   phone.classList.add("is-invalid");
 }
 else{
   phone.classList.remove("is-invalid");
 }
}
