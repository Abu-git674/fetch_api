function loadData() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((result) => displayQuote(result));
}

function displayQuote(result) {
  const para = document.getElementById("para");
  para.innerText = result.quote;
}

/*
Api request methods: by default method works as GET unless mention
GET: retrieves information to show in UI
POST: when submit data example: form submit
PUT: updates data
DELETE: delete data
PATCH: partially updates data
*/
