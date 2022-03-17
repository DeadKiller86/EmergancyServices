// async function fetchData(parent) {
//   try {
//     let res = await fetch(
//       `https://helpline-services-server.herokuapp.com/helplinenumber/?o=${parent}`,
//       {
//         method: "GET",
//         mode: "cors",
//       }
//     );
//     const data = res.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function renderDataInTable() {
//   const data = await fetchData("Worldwide%20Helpline");
//   console.log(data);
// }

// async function renderTable(e) {
//   const model = {
//     datamodel:[
//     {
//       index: "worldwide",
//       name: "Worldwide%20Helpline"
//     },
//   ]
// };
//   const id = e.target.id;
//   const param = id;
//   // model.datamodel.forEach((item) => {
//   //   if (item.index == id) {
//   //     param = item.name
//   //     break;
//   //   }
//   // })
//   const data = await fetchData(param);
//   console.log(id);
// }

// // function changeHeading(headingdata) {
// //   let h1 = document.getElementById("mainh1");
// //   h1.innerHTML = headingdata;
// // }
// // function insertData(data) {
// //   const { org, contact } = data;
// //   let main = document.getElementById("rootfinal");
// //   let row = document.createElement("tr");
// //   row.innerHTML = `<td>${org}</td><td>${contact}</td>`;
// //   main.appendChild(row);
// // }

// // function renderTableData(names) {
// //   const hell = data["indianhelpline.com"];
// //   let tabledata = document.getElementById("rootfinal");
// //   tabledata.innerHTML = `<tr>
// //   <th>Organization</th>
// //   <th>Contact Details</th>
// // </tr>`;
// //   for (let i = 0; i < hell.length; i++) {
// //     if (hell[i].parent === names) {
// //       insertData(hell[i]);
// //     }
// //   }
// //   changeHeading(`${names} Services Contact Directory`);
// // }

// // function renderWorldwideHelpline() {
// //   renderTableData("Worldwide Helpline");
// // }

// // function hello() {
// //   console.log(testdata.Employees[0].emailAddress);
// // }
