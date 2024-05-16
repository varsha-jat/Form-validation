function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked');


    let nameError =  document.getElementById('nameError');
    nameError.innerHTML = "";

    let emailError = document.getElementById('emailError');
    emailError.innerHTML= "";

    let passwordError= document.getElementById('passwordError');
    passwordError.innerHTML ="";

    let confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError ="";

    let dobError=  document.getElementById('dobError');
    dobError.innerHTML ="";

    let addressError = document.getElementById('addressError');
    addressError.innerHTML = "";

    let phoneError=  document.getElementById('phoneError');
    phoneError.innerHTML ="";

    let countryError =  document.getElementById('countryError');
    countryError.innerHTML="";

    let genderError = document.getElementById('genderError');
    genderError.innerHTML="";


    if (name.trim() === "") {
        nameError.innerHTML = "Name cannot be empty";
        isValid = false;
    } else if (!isAlpha(name)) {
        console.log("trimmed "+ name.trim());
        nameError.innerHTML ="Only alphabets are allowed in name";
        isValid = false;
    }

    function isAlpha(str) {
        console.log("trimmed "+ name.trim());
        for (let i = 0; i < str.length; i++) {
            const ch = str.charAt(i);
            if(!(ch >= 'A' && ch <= 'Z') && !(ch >= 'a' && ch <= 'z')) {
                console.log(ch);
                // return false;
            }
        }
        return true;
    }


    if (email.trim() === "") {
        emailError.innerHTML = "Email cannot be empty";
        isValid = false;
    }else {
        let symbol=0;
        let upper =0 ;
        for(i=0; i<email.length; i++){
            let char = email.charAt(i);
            if(char=='!' || char=='@' || char =='#' || char == '$' || char=='%' || char =='&' ||char =='*' || char == '(' || char == ')'){
                symbol++;
            }
            if(char>='A' && char <='Z'){
                // console.log("uperr", upper);
                upper++;
            } 
        }
        if(!email.endsWith("@gmail.com") || symbol!=1 || upper!=0){
        emailError.innerHTML = "Enter valid email";
    }
    }

    if (password.trim() === "") {
        passwordError.innerHTML = "Password cannot be empty";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerHTML = "Password should be of 8 character";
        isValid = false;
    }


    if (confirmPassword.trim() === "") {
        confirmPasswordError.innerHTML = "Confirm Password!"
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.innerHTML ="password is not match!";
        isValid = false;
    }else{
        console.log(confirmPassword);
    }

    if (dob.trim() === "") {
        dobError.innerHTML= "date of birth cannot be empty";
        isValid = false;
    }else{
        let eligible = 2006;
        let year = "";
        for(i=0; i<4; i++){
            console.log(dob.charAt(i));
            year+=dob.charAt(i);
        }

        console.log(year);
        if(!(eligible>year)){
            dobError.innerHTML = "Minimum age to apply is 18";
            isValid = false;
        }

    }

    if (address.trim() === "") {
        addressError.innerHTML ="Address cannot be empty";
        isValid = false;
    }

    if (phone.trim() === "") {
        phoneError.innerHTML ="phone no cannor be empty!";
        isValid = false;
    } else if (phone.length != 10) {
        phoneError.innerHTML="enter 10 digit number";
        isValid = false;
    }else{
        let count =0;
        for(i=0; i<phone.length; i++){
            let num = phone.charAt(i);
            if(num>=0 && num<=9){
                count++;
            }
        }
        // console.log(count);
        if(count!=10){
            phoneError.innerHTML ="Phone no only contain number!";
        }
    }

    if (country.trim() === "") {
        countryError.innerHTML =" Country cannot be empty";
        isValid = false;
    }

    if (!gender) {
        genderError.innerHTML = "select gender!";
        isValid = false;
    }

    return isValid;
}