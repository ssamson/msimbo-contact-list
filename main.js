// select user input
var filter = document.querySelector("#filter");

// Filer list by the user input
function filterNames() {
    //Get value of user input
    var filterValue = filter.value;
    // console.log(filterValue);

    // Get contact names
    var names = document.querySelectorAll("li a");

    // Loop over names
    for(var i=0;i<names.length;i++) {
        // compare each name with filter value
        if(names[i].innerText.toUpperCase().includes(filterValue.toUpperCase())) {
            names[i].parentElement.style.display = "block"
        } else {
            names[i].parentElement.style.display = "none"
        }
    }
    
}

// Add event listener to user input
filter.addEventListener("input", filterNames);