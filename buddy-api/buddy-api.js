/*
Api request methods: by default method works as GET unless mention
GET: retrieves information to show in UI
POST: when submit data example: form submit
PUT: updates data
DELETE: delete data
PATCH: partially updates data
*/

function loadData() {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
}

function displayQuote(data) {
  const buddyDiv = document.getElementById("buddy");
  let buddies = data.results;

  for (const buddy of buddies) {
    const para = document.createElement("p");
    para.innerHTML = `Name: ${buddy.name.first} || Email:
    ${buddy.email}`;
    buddyDiv.appendChild(para);
  }
}
