window.addEventListener("load", function () {
  // Get planetary data
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function (response) {
      response.json().then(function (json) {
        let randomNum = Math.floor(Math.random() * json.length);
        let planet = json[randomNum];
        let planetName = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let image = planet.image;
        let moons = planet.moons;

        missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
    <li>Name: ${planetName}</li>
    <li>Diameter: ${diameter}</li>
    <li>Star: ${star}</li>
    <li>Distance from Earth: ${distance}</li>
    <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${image}"></img>`;
      });
    }
  );
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
        alert("You must fill in all fields");
        event.preventDefault();
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
    // Launch status check
    let launchCheck;
    let fuelCheckMessage;
    let fuelCheck = false;
    let cargoCheck = false;

    if (fuelLevelValue > 10000) {
      fuelCheck = true;
    } else {
      fuelCheck = false;
    }
    if (cargoMassValue < 10000) {
      cargoCheck = true;
    } else {
      cargoCheck = false;
    }

    // Check fuel level
    if (fuelCheck) {
      fuelCheckMessage = `high enough`;
    } else {
      fuelCheckMessage = `too low`;
    }

    // Check cargo weight
    if (cargoCheck) {
      cargoCheckMessage = `low enough`;
    } else {
      cargoCheckMessage = `too high`;
    }

    // Launch status display
    if (!fuelCheck || !cargoCheck) {
      launchCheck = `not ready`;
      launchStatus.style.color = "red";
      faultyItems.style.visibility = "visible";
    } else {
      launchCheck = `ready`;
      launchStatus.style.color = "green";
      faultyItems.style.visibility = "visible";
    }

    // Faulty Items HTML injections
    pilotStatus.innerHTML = `Pilot ${pilotNameValue} Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilotNameValue} Ready`;
    fuelStatus.innerHTML = `Fuel level ${fuelCheckMessage} for launch`;
    cargoStatus.innerHTML = `Cargo mass ${cargoCheckMessage} for launch`;
    launchStatus.innerHTML = `Shuttle ${launchCheck} for launch`;
  });
});
