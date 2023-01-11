window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then(function(json) {
         console.log(json);
        let index = Math.floor(Math.random()*json.length);
         console.log(json[index]);

         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ul>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ul>
            <img src="${json[index].image}"></img>`
      });
   });

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
   event.preventDefault();
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            event.preventDefault();
            window.alert("All fields are required!")
         }  else if (isNaN(pilotName.value) === false) {
            event.preventDefault();
            window.alert("Invalid Entry.  Pilot value must be a name!")
         } else if (isNaN(copilotName.value) === false) {
            event.preventDefault();
            window.alert("Invalid Entry.  CoPilot value must be a name!")
         } else if (isNaN(fuelLevel.value)) {
            event.preventDefault();
            window.alert("Invalid Entry. Fuel Mass must be a number!")
         } else if (isNaN(cargoMass.value)) {
            event.preventDefault();
            window.alert("Invalid Entry. Cargo Mass must be a number!")
         } else {
            let itemStatus = document.getElementById("itemStatus");
            let PilotStatus = document.getElementById("pilotStatus");
            let CopilotStatus = document.getElementById("copilotStatus");
            let FuelStatus = document.getElementById("fuelStatus");
            let CargoStatus = document.getElementById("cargoStatus");
            let LaunchStatus = document.getElementById("launchStatus");
            itemStatus.style.visibility = "visible";
            PilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
            CopilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
               if (fuelLevel.value >= 10000) {
                  FuelStatus.innerHTML = `Fuel level check passed.`
               } else {
                  FuelStatus.innerHTML = `Fuel level too low for launch.`
               }
               if (cargoMass.value <= 10000) {
                  CargoStatus.innerHTML = `Cargo mass check passed.`
               } else {
                  CargoStatus.innerHTML = `Cargo mass too high for launch.`
               }
               if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
                  LaunchStatus.innerHTML = `Shuttle is ready for launch.`
                  LaunchStatus.style.color = "green"
               } else {
                  LaunchStatus.innerHTML = `Shuttle not ready for launch.`
                  LaunchStatus.style.color = "red"
               }
            }
      });
});

//TODO 1: set up an window load handler ***complete***

   // TODO 2: set up a submit handler for the form ***complete***

      //TODO 3: cancel submission using event preventDefault() ***complete***

      //TODO 4: validate that all inputs have data and data type is correct ***complete***

      //TODO 5: check fuel level and cargo mass, and report launch status ***complete***

      //TODO 6: make the list visible ***complete but does not stick***

   //TODO 7: fetch planet data ***complete***

      //TODO 8: randomly choose one of the planets ***complete***

      //TODO 9: display info about the chosen planet ***complete but is wrong***

      /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${json[index.name]}</li>
   <li>Diameter: ${json[index.diameter]}</li>
   <li>Star: ${json[index.star]}</li>
   <li>Distance from Earth: ${json[index.distance]}</li>
   <li>Number of Moons: ${json[index.moons]}</li>
</ul>
<img src="${json[index.image]}">
*/