const validateNewUser = (obj) => {
  return new Promise((resolve, reject) => {

    const lettersAndApostrophesRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    const usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-|-|.)[a-zA-Z0-9])*[a-zA-Z0-9]+$/i;
    const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
    const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

    const firstName = obj.first_name.match(lettersAndApostrophesRegex);
    const lastName = obj.last_name.match(lettersAndApostrophesRegex);
    const username = obj.username.match(usernameRegex);
    const email = obj.email.match(emailRegex);
    const password = obj.password.match(passwordRegex);

    if (!firstName) {
      console.error("Please input a real first name")
      reject(false);
    }

    if (!lastName) {
      console.error("Please input a real last name")
      reject(false);
    }

    if (!username) {
      console.error("Your username does not meet the requirements")
      reject(false);
    }

    if (!email) {
      console.error("Please input a valid email address")
      reject(false);
    }

    if (!password) {
      if (obj.password.length < 8 || obj.password.length > 20) {
        console.error("Please ensure your password is between 8-20 characters long")
        reject(false);
    }
  }

  if (obj.password !== obj.confirmed_password) {
    console.error("Password fields do not match. Please try again")
    reject(false);
  }

  else {
    console.log("New user account details passed the validation checks");
    resolve(true);
  }

  })
}

module.exports = validateNewUser;
