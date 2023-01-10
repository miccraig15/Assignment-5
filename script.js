// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/



window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
         let pilotName = document.getElementById("pilotName");
         let copilotName = document.getElementById("copilotName");
         let fuelLevel = document.getElementById("fuelLevel");
         let cargoMass = document.getElementById("cargoMass");
            if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               event.preventDefault();
               window.alert("All fields are required!")
            } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
               event.preventDefault();
               window.alert("Invalid Entry. Fuel and Cargo must be a number!")
            }
   });

});

//TODO 1: set up an window load handler ***complete***

   // TODO 2: set up a submit handler for the form ***complete***

      //TODO 3: cancel submission using event preventDefault() ***complete***

      //TODO 4: validate that all inputs have data and data type is correct ***complete***

      //TODO 5: check fuel level and cargo mass, and report launch status

      //TODO 6: make the list visible

   //TODO 7: fetch planet data

      //TODO 8: randomly choose one of the planets

      //TODO 9: display info about the chosen planet