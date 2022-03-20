const hello = {
    f12345: "Worldwide Helpline",
    f12346: "Birds and Animal Helpline",
    f12347: "De Addiction Helpline",
    f12348: "Food Helpline",
    f12349: "Child Helpline",
    f12350: "Senior Citizen Helpline",
    f12351: "Online Doctor Consultation",
    f12352: "Online Lab Booking",
    f12353: "Ambulance Helpline",
    f12355: "Plasma Helpline",
}

function changeHeading(heading) {
    const mainh1 = document.getElementById("mainh1");
    mainh1.innerHTML = heading;
}

function insertData(arr) {
    const table = document.getElementById("table");
    table.innerHTML = "";
    const phil = document.createElement("tr");
    const claire = document.createElement("th");
    const claire1 = document.createElement("th");
    claire.innerHTML = "Organization";
    claire1.innerHTML = "Contact Details";
    phil.appendChild(claire);
    phil.appendChild(claire1);
    table.appendChild(phil);
    
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.innerHTML = arr[i].org;
        td2.innerHTML = `<a href="tel:${arr[i].contact}">${arr[i].contact}</a>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
}

async function renderData(e) {
    const id = `f${e.target.id}`;
    const param = hello[id];
    changeHeading(param);
    console.log(param);
    const url = `https://helpline-services-server.herokuapp.com/helplinenumber/?o=${param}`;
    const res = await fetch(url);
    const data = await res.json();
    const arr = data.data;
    insertData(arr)
    console.log(data)
}
