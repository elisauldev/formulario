
const showTableElements = document.getElementById("table-elements")


function bringTableElements(){
    showTableElements.innerHTML = ` 
    <div class="principal-table">
            <table class="table-style">
                <tr class="cells-style">
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                </tr>
                <tr>
                    <td id=>prueba1</td>
                    <td id=>prueba2</td>
                    <td id=>prueba3</td>
                </tr>
            </table>
            <div>
    `
}
bringTableElements()


document.getElementById("miButton").addEventListener("click", () => {
    fetch("https://webtechnologysoftware.net/gruastremart-core-api/v1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", description);
        document.getElementById("resultado").innerText = JSON.stringify(data);
    })
    .catch(error => console.error("Error en la petición:", error));
});

/*async function showItems() {
const API_BASE_URL = "https://webtechnologysoftware.net/gruastremart-core-api/v1"
const tableData = new tableElements(document.querySelector(""))


try{
    const showTableElements = await fetch(`${API_BASE_URL}/crane-demands`{
        method:"POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify
    })
}
}

function tableElements(){
    array.forEach(element => {
        
    });
    return <tr class = "cells styles">
        <td></td>
    </tr>
}
    */