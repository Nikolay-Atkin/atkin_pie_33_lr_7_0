function calcNumber(){
    let m = parseInt(document.getElementById("M").value);
    let n = parseInt(document.getElementById("N").value);
    let arr = [];
    for (let i = 0;i<m;i++){
        arr[i] = [];
        for (let j = 0; j<n;j++){
            arr[i][j] = Math.floor(Math.random() * 500);
        }
    }
    fillTable(arr, "table");
    let min = arr[0][0];let min_row = 0;
    let max_row = 0;
    let max = arr[0][0];
    let row = [];
    for (let i = 0; i < arr.length;i++){
        for (let j = 0; j < arr[i].length;j++){
            if (min > arr[i][j]){
                min = arr[i][j]
                min_row = i
            }
            if (max < arr[i][j]){
                max = arr[i][j]
                max_row = i
            }
        }
    }
    row = arr[max_row];
    arr[max_row] = arr[min_row];
    arr[min_row] = row;
    fillTable(arr, "table_1")
}
function fillTable(matrix, tb){
    let table = document.getElementById(tb);
    while (table.rows.length) {
        table.deleteRow(0);}
    for (let i = 0; i < matrix.length;i++){
        let row = table.appendChild(document.createElement("tr"));
        for (let j = 0; j < matrix[i].length;j++){
            row.innerHTML += "<th>"+ matrix[i][j] + "</th>"
        }
    }

}


