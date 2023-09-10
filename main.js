var newDate = new Date();
var year = newDate.getFullYear();
var month = newDate.getMonth();
var day = newDate.getDate();
var mainDiv = document.getElementById("mainDiv");
var body = document.getElementById("body");
var userName = {
  missionName: [],
  deatilsMission: [],
  endDate: [],
  completed: [],
};
var counter = 0;

function onLoadPage() {
  mainDiv.innerHTML += `<form id="userForm">
    <label>enter first name:</label>
    <input type="text" id="fNameInput">
    <label>enter date of birth:</label>
    <input type="date" id="dateInput">
    <button type="button" onclick="printName()">submit</button>
  </form>`;

  if (month > 6) {
    body.style.backgroundColor = "green";
  }
}

function printName() {
  var firstName = document.getElementById("fNameInput").value;
  mainDiv.innerHTML += `<h1>Welcome home ${firstName}!</h1>
     <form class="secondForm">
     <label>enter mission headline</label><br>
     <input type="text" id="headlineInput" class="secondForm"><br>
     <label>details for the mission</label><br>
     <input type="text" id="deatilsInput" class="secondForm"><br>
     <label>enter finish date</label><br>
     <input type="date" id="finishDateInput" class="secondForm"><br>
     <label>enter if mission completed</label><br>
     <input type="text" id="completedInput" class="secondForm"><br>
     <button type="button" onclick="seconClick()">submit</button>
     </form>
     <br>`;
}

function seconClick() {
  var headline = document.getElementById("headlineInput").value;
  var details = document.getElementById("deatilsInput").value;
  var endDate = document.getElementById("finishDateInput").value;
  var completed = document.getElementById("completedInput").value;

  userName.missionName.push(headline);
  userName.deatilsMission.push(details);
  userName.endDate.push(endDate);
  userName.completed.push(completed);

  var table = document.getElementById("customTable");
  var tbody;

  if (!table) {
    mainDiv.innerHTML += `
      <table id="customTable">
        <thead>
          <th>Headline for Mission</th>
          <th>Details for the Mission</th>
          <th>Finish Date</th>
          <th>Mission Completed?</th>
          <th>Current Date</th>
        </thead>
        <tbody id="line">
        </tbody>
      </table>`;
    tbody = document.getElementById("line");
  } else {
    tbody = table.querySelector("tbody");
  }

  tbody.innerHTML += `
    <tr class="linemission">
      <td>${headline}</td>
      <td>${details}</td>
      <td>${endDate}</td>
      <td>${completed}</td>
      <td>${year}-${month + 1}-${day}</td>
    </tr>`;

  // Now, add the click event listener after creating the rows
  var trClick = document.getElementsByClassName("linemission");
  for (var i = 0; i < trClick.length; i++) {
    trClick[i].addEventListener("click", function () {
      this.style.display = "none";
    });
  }
}

onLoadPage();
