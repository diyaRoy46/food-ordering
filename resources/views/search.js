let filterInput = document.getElementById('search');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let names = document.getElementById('foodNames');
    
}