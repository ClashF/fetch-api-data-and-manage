fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <th scope="row">${values.id}</th>
        <td>${values.name}</td>
        <td>${values.email}</td>
        <td>${values.phone}</td>
        <td>${values.address.city}</td>
        <td><a href="./view.html">View</a> | <a href="">Edit</a> | <a href="">Delete</a></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;

})


