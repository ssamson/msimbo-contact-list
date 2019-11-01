// select user input
const filter = document.querySelector('#filter');


// Filer list by the user input
const filterNames = () => {
    //Get value of user input
    const filterValue = filter.value;
    // console.log(filterValue);
    // Get contact names
    const names = document.querySelectorAll('li a');
    AOS.refresh();
    // Loop over names
    for (let name of names) {
        // compare each name with filter value
        if (name.innerText.toUpperCase().includes(filterValue.toUpperCase())) {
            name.parentElement.style.display = 'block';
        } else {
            name.parentElement.style.display = 'none';
        }
    }
    
};

// Add event listener to user input
filter.addEventListener('input', filterNames);

//Initialize AOS library
AOS.init({

    duration: 3000
});