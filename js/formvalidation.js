/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* target specific parts of the form */
const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('p-email')
const message = document.getElementById('p-message')
const submit = document.getElementById('submit')
const errorTarget = document.getElementById('error')
/*
 /*form.noValidate = true; this disables default validation and error messages*/

const validEmail= email => {/* regex for email validation */
  const re = /^([a-zA-Z0-9/._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z])?$/
  return re.test(String(email).toLowerCase())

}

function regex (email_parameter){

  var input = "/^([a-zA-Z0-9/._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z])?$/";

  if(email_parameter.contains(input)){
    return email_parameter;
  }else{
    return "invalid email";
  }
}

const storeEmail = regex(email);

/* this prevents the form from automatically submitting when there is an error */
form.addEventListener('submit', (e) => {
  // eslint-disable-next-line prefer-const
    e.preventDefault()
})
submit.addEventListener('click', ()=> {
  if(email.validity.typeMismatch){
    email.setCustomValidity('please enter a valid email')
  }
  else{
    email.setCustomValidity('')
  }
})
const validateInputs ;


