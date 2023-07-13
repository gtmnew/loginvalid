const popup = document.getElementById('popup')
let iconhidden = document.querySelector('.iconhidden')
let iconshow = document.querySelector('.iconshow')

function validation(){
    if(document.Formfill.Username.value == ""){
        document.getElementById("result").innerHTML = "Enter Username*"
        return false
    }
    else if(document.Formfill.Username.value.length < 6){
        document.getElementById("result").innerHTML = "Username must be at least 6 characters*"
        return false
    }
    else if(document.Formfill.Email.value == "" ){
        document.getElementById("result").innerHTML = "Enter your email*"
        return false
        }
    else if(document.Formfill.Password.value == "" ){
        document.getElementById("result").innerHTML = "Enter your password*"
        return false
        }
    else if(document.Formfill.Password.value.length < 6){
        document.getElementById("result").innerHTML = "Password must be at least 6 digits *" 
        return false     
        }    
    else if(document.Formfill.CPassword.value == ""){
        document.getElementById("result").innerHTML = "Enter confirm password*"
        return false
        }
    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML = "Password doesn't matched*"
        return false     
        }
    else if(document.Formfill.CPassword.value == document.Formfill.Password.value){
        popup.classList.add("open-slide")
        return false     
        }
}
function CloseSlide(){
    popup.classList.remove("open-slide")
}
