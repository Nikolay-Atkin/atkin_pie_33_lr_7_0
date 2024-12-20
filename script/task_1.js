function calcNumber(){
    let m = 3;
    let n = 3;
    let arr = [];
    m = parseInt(document.getElementById("M").value);
    n = parseInt(document.getElementById("N").value);
    for (let i = 0;i<m;i++){
        arr[i] = [];
        for (let j = 0; j<n;j++){
            arr[i][j] = (i+1)*10;
        }
    }
    fillTable(arr);
}

function fillTable(matrix){
    let table = document.getElementById("table");
    while (table.rows.length) {
        table.deleteRow(0);}
    for (let i = 0; i < matrix.length;i++){
        let row = table.appendChild(document.createElement("tr"));
        for (let j = 0; j < matrix[i].length;j++){
            row.innerHTML += "<th>"+ matrix[i][j] + "</th>"
        }
    }

}

