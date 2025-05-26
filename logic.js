
// When the "submit" button is clicked, validate the form in task 4.
document.getElementById("submit").onclick = function () {
      // Check if the form is valid by calling validateForm()
    const isValid = validateForm();
    alert(isValid ? "The form is valid" : "The form is invalid"); //Show a message if the form is valid or invalid
  };
  
  //This function checks all the form fields
  function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const age = parseInt(document.getElementById("age").value);
    const cities = document.querySelectorAll("input[name='cities']:checked");
  
      // Call specific validation functions for each field and return true only if all are valid
    return validateUsername(username) &&
           validatePassword(password) &&
           validateEmail(email) &&
           validateAge(age) &&
           validateCities(cities);
  }
  
    // Username must have at least 4 characters and can only include letters, numbers, and dashes (-)
  function validateUsername(username) {
    return /^[a-zA-Z0-9-]{4,}$/.test(username);
  }
  
    //Password need to be:at least 8 characters long, Include at least one letter, Include at least one number, Include at least one special character
  function validatePassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*\-_\(\)]).{8,}$/.test(password);
  }
  
    //Email need to be: Match the usual email format, Not have ".." or "#".
  function validateEmail(email) {
    //return /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
           //!email.includes("..") &&
           //!email.includes("#");
     const regex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email) || email.includes("..") || email.includes("#")) return false;

  const [userPart, domainPart] = email.split("@");
  return userPart && !userPart.endsWith(".") && !userPart.endsWith("-") && domainPart && !domainPart.startsWith("-");
}
  
  
    //Age must be between 10 and 120
  function validateAge(age) {
    return age >= 10 && age <= 120;
  }
  
    //At least one checkbox must be checked
  function validateCities(cities) {
    return cities.length > 0;
  }

  


function solution_js_query(){
    
    //Select all <a> tags with class "malicious" inside #q5
    const withClassMalicious = document.querySelectorAll("#q5 a.malicious");

    //for loop to set to none using setAttribute
    for(const link of withClassMalicious) {
        link.setAttribute("style", "display: none;");

       }

    //Select the hidden <div> inside #q5 (and only that element)
    const hiddenDiv = document.querySelector("#q5 div.hidden");

    if(hiddenDiv && hiddenDiv.getAttribute("style") === "display: none;") {
        hiddenDiv.setAttribute("style", "display: block;");
    
    }

}

function solution_js_dynamic_elements(){
    
    //Select the home div with id q6.
    const homeDiv = document.querySelector("#q6"); 

    //Create the new div.
    const newDiv = document.createElement("div");

    //Create and configure the <h2> element
    const newH2 = document.createElement("h2");
    newH2.appendChild(document.createTextNode("An unimportant fact"));

    // Create and configure the <p> element.
    const nwePar = document.createElement("p");
    nwePar.appendChild(document.createTextNode("Barbie and Ken are just nicknames. Barbie is called Barbara Millicent Roberts and Ken is Kenneth Carson"));

    //Append h2 and p to the new div.
    newDiv.append(newH2, nwePar);

    //Append the new div to the home div.
    homeDiv.append(newDiv);

}

function solution_js_event_listeners(){
    
    //Add a click event to the div and When the div is clicked, show the text "click".
    const divBtn = document.querySelector("#div_btn");
    divBtn.onclick = () => alert("click");

    //This function shows an alert with the key that was pressed (only if pressed).
    const keyPressed = (event) => {alert(`The key '${event.key}' was pressed`);};

    //Add a keydown event to the body, so when some key pressed the function will start to run.
    document.body.onkeydown = keyPressed;

}

function solution_js_unit_converter(){

    //read the values.
    const inputValue = parseFloat(document.getElementById("convertion_input").value);
    const fromUnit = document.getElementById("convert_from_unit").value;
    const toUnit = document.getElementById("convert_to_unit").value;

    //make the conver table between the four.
    const converValuesTable  = {
        cm: { cm: 1, meter: 0.01, inch: 0.393701, foot: 0.0328084 },
        meter: { cm: 100, meter: 1, inch: 39.3701, foot: 3.28084 },
        inch: { cm: 2.54, meter: 0.0254, inch: 1, foot: 0.0833333 },
        foot: { cm: 30.48, meter: 0.3048, inch: 12, foot: 1 },
      };

      // find the the conversion factor.
      const convertControl = converValuesTable[fromUnit][toUnit];

      //Calculate the value after convert units.
      const convertVal = inputValue * convertControl;

      // Display the result value in the output field
      document.getElementById("convertion_output").value = convertVal.toFixed(4); //4 decimal places.
    
}

