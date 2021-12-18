function changeHeading(headingdata) {
  let h1 = document.getElementById("mainh1");
  h1.innerHTML = headingdata;
}
let data = {
  "indianhelpline.com": [
    {
      parent: "Worldwide Helpline",
      org: "Afghanistan",
      contact: "119",
    },
    {
      parent: "Worldwide Helpline",
      org: "Albania",
      contact: "112",
    },
    {
      parent: "Worldwide Helpline",
      org: "Algeria",
      contact: "112",
    },
    {
      parent: "Worldwide Helpline",
      org: "Andorra",
      contact: "112",
    },
    {
      parent: "Worldwide Helpline",
      org: "Anguilla",
      contact: "911",
    },
    {
      parent: "Worldwide Helpline",
      org: "Antarctica",
      contact: "911",
    },
    {
      parent: "Worldwide Helpline",
      org: "Antigua and Barbuda",
      contact: "999",
    },
    {
      parent: "sidd",
      org: "india 1770",
      contact: "1770",
    },
  ],
};

function insertData(data) {
  const { org, contact } = data;
  let main = document.getElementById("rootfinal");
  let row = document.createElement("tr");
  row.innerHTML = `<td>${org}</td><td>${contact}</td>`;
  main.appendChild(row);
}

function renderTableData(names) {
  const hell = data["indianhelpline.com"];
  let tabledata = document.getElementById("rootfinal");
  tabledata.innerHTML = `<tr>
  <th>Organization</th>
  <th>Contact Details</th>
</tr>`;
  for (let i = 0; i < hell.length; i++) {
    if (hell[i].parent === names) {
      insertData(hell[i]);
    }
  }
  changeHeading(`${names} Services Contact Directory`);
}

function renderWorldwideHelpline() {
  renderTableData("Worldwide Helpline");
}

function hello() {
  console.log(testdata.Employees[0].emailAddress);
}
