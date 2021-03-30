window.addEventListener("load", function () {
  const formSubmitBtn = document.querySelector("#formSubmit");

  formSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // DOM selection
    const inputs = document.querySelectorAll("input");
    const pilotNameValue = document.querySelector("#pilotName").value;
    const copilotNameValue = document.querySelector("#copilotName").value;
    const fuelLevelValue = document.querySelector("#fuelLevel").value;
    const cargoMassValue = document.querySelector("#cargoMass").value;

    const launchStatus = document.querySelector("#launchStatus");

    const faultyItems = document.querySelector("#faultyItems");
    const pilotStatus = document.querySelector("#pilotStatus");
    const copilotStatus = document.querySelector("#copilotStatus");
    const fuelStatus = document.querySelector("#fuelStatus");

    // Empty field validation for all inputs
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      if (input.value === "") {
        //   alert("You must fill in all fields");
        //   event.preventDefault();
        return 0;
      }
    }
    // Validation for input types
    if (
      !isNaN(pilotNameValue) ||
      !isNaN(copilotNameValue) ||
      isNaN(fuelLevelValue) ||
      isNaN(cargoMassValue)
    ) {
      alert("You must enter a valid value for each field");
    }
    // Launch check
    let launchCheck;
    // Check fuel level
    let fuelCheck = `high enough`;
    // If low fuel
    if (fuelLevelValue < 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = `Shuttle not ready for launch`;
      launchStatus.style.color = "red";
      fuelCheck = `too low`;
    }
    // Check cargo
    let cargoCheck = `low enough`;
    // If high cargo
    if (cargoMassValue > 10000) {
      faultyItems.style.visibility = "visible";
      if (fuelLevelValue < )
      launchStatus.style.color = "red";
      cargoCheck = `too high`;
    } else {
    }

    // Faulty Items HTML injections
    pilotStatus.innerHTML = `Pilot ${pilotNameValue} Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilotNameValue} Ready`;
    fuelStatus.innerHTML = `Fuel level ${fuelCheck} for launch`;
    cargoStatus.innerHTML = `Cargo mass ${cargoCheck} for launch`;
    launchStatus.innerHTML = `Shuttle ${launchCheck} for launch`;
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
