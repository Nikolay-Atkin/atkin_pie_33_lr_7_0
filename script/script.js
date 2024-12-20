let m = 3;
let n = 3;
let arr = [];


for (let i = 0;i<m;i++){
    arr[i] = [];
    for (let j = 0; j<n;j++){
        arr[i][j] = Math.floor(Math.random() * 5);
    }
}
function fillTable(matrix){
    let table = document.getElementById("table");
    for (let i = 0; i < matrix.length;i++){
        let row = table.appendChild(document.createElement("tr"));
        for (let j = 0; j < matrix[i].length;j++){
            row.innerHTML += `<th>${i+j}</th>`
        }
    }

}

fillTable(arr);
