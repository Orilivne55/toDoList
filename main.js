var newDate = new Date();
var year = newDate.getFullYear();
var month = newDate.getMonth();
var day = newDate.getDate();
var mainDiv = document.getElementById("mainDiv");
function onLoadPage() {
  mainDiv.innerHTML += `<form>
    <label>enter first name:</label>
    <input type="text" id="fNameInput">
    <label>enter date birth</label>
    <input type="date" id="dateInput">
    <button type="submit" onclick="printName()">submit</button>
    </form>
    `;

  var body = document.getElementById("body");
  if (month > 6) {
    body.style.backgroundColor = "green";
  }
}

function printName() {
  var firstName = document.getElementById("fNameInput").value;
  mainDiv.innerHTML += `<h1>welcome home ${firstName}! </h1>
     <form class="secondForm">
     <label>enter mission headline</label><br>
     <input type="text" id="headlineInput" class="secondForm"><br>
     <label>details for the mission</label><br>
     <input type="text" id="deatilsInput" class="secondForm"><br>
     <label>enter finish date</label><br>
     <input type="text" id="finishDateInput" class="secondForm"><br>
     <label>enter if mission completed</label><br>
     <input type="text" id="completedInput" class="secondForm"><br>
     <button type="button" id="secondFormBtn" class="secondForm">submit</button>
     </form>
     <br>
     `;

  var currentDate = `${year}-${month + 1}-${day}`;
  function seconClick() {
    var headlineInput = document.getElementById("headlineInput").value;
    var deatilsInput = document.getElementById("deatilsInput").value;
    var finishDateInput = document.getElementById("finishDateInput").value;
    var completedInput = document.getElementById("completedInput").value;
    mainDiv.innerHTML += `
        <table id="customTable">
        <thead><th>headline for mission</th><th>details for the mission</th><th>finish date</th><th>mission completed?</th><th>current date</th></thead>
        <tbody>
            <tr id="trClick" onclick="clickOnRow()"><td>${headlineInput}</td><td>${deatilsInput}</td><td>${finishDateInput}</td><td>${completedInput}</td><td>${currentDate}</td></tr>
        </tbody>
    </table>
        `;
    console.log(headlineInput, deatilsInput, finishDateInput, completedInput);
  }
  var secondFormBtn = document.getElementById("secondFormBtn");
  secondFormBtn.addEventListener("click", seconClick);
  var customTable = document.getElementById("customTable");
  if (completedInput == "no") {
    console.log("no");
    customTable.style.color = "red";
  }
}

function clickOnRow() {
  var trClick = document.getElementById("trClick");
  trClick.style.display = "none";
}
