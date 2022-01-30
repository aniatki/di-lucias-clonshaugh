let newRow = new DOMParser().parseFromString(localStorage.item, "text/html")
let tableBody = document.getElementById('tableBody')

console.dir(newRow)