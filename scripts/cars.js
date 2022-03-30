const products = [    //Create an array which contains informations about cars
    {
        title: 'Audi A3',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 59.99,
        image: 'assets/images/car1.jpg'
    },
    {
        title: 'Audi A3',
        persons: 5,
        bags: 5,
        fuelType: 'P',
        transmission: 'M',
        climatisation: 'AC',
        price: 49.99,
        image: 'assets/images/car2.jpg'
    },
    {
        title: 'VW Polo R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'P',
        transmission: 'A',
        climatisation: 'AC',
        price: 49.99,
        image: 'assets/images/car4.jpg'
    },
    {
        title: 'Audi Q7',
        persons: 7,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 129.99,
        image: 'assets/images/car10.jpg'
    },
    {
        title: 'Audi Q7',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 99.99,
        image: 'assets/images/car11.jpg'
    },
    {
        title: 'Mercedes S-500 AMG',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 109.99,
        image: 'assets/images/car12.jpg'
    },
    {
        title: 'Audi Q7',
        persons: 7,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 129.99,
        image: 'assets/images/car10.jpg'
    },
    {
        title: 'Mercedes E-220',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 49.99,
        image: 'assets/images/car13.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'Mercedes Sprinter',
        persons: 9,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 69.99,
        image: 'assets/images/car15.jpg'
    },
    {
        title: 'Audi Q7',
        persons: 7,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 129.99,
        image: 'assets/images/car10.jpg'
    },
    {
        title: 'VW Polo',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 19.99,
        image: 'assets/images/car5.jpg'
    },
    {
        title: 'Golf 7',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 19.99,
        image: 'assets/images/car7.jpg'
    },
    {
        title: 'Audi A3',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 19.99,
        image: 'assets/images/car3.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car8.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'Audi Q7',
        persons: 7,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 129.99,
        image: 'assets/images/car10.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'Mercedes C-200',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car14.jpg'
    },
    {
        title: 'VW Passat',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'M',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car9.jpg'
    },
    {
        title: 'VW Golf 7 R-Line',
        persons: 5,
        bags: 5,
        fuelType: 'D',
        transmission: 'A',
        climatisation: 'AC',
        price: 39.99,
        image: 'assets/images/car6.jpg'
    }

]

function createProductCard(prod) {  //Function that will fill html document with array elements
    return `
        <div class="col-md-3 col-sm-4 one-product">
            <div class="prod-det">
                <img class="prod-img" src="${prod.image}">
                <div class="details-prod">
                    <h3>${prod.title}</h3>
                    <div class="prod-text">
                        <div class="prod-property" data-toggle="tooltip" title="Persons" data-placement="top">
                            <i class="fas fa-user-alt"></i>: ${prod.persons}
                        </div>

                        <div class="prod-property" data-toggle="tooltip" title="Bags" data-placement="top">
                            <i class="fas fa-suitcase"></i>: ${prod.bags}
                        </div>

                        <div class="prod-property" data-toggle="tooltip" title="Fuel type" data-placement="top">
                            <i class="fas fa-gas-pump""></i>: ${prod.fuelType}
                        </div>

                        <div class="prod-property" data-toggle="tooltip" title="Tramsmission" data-placement="top">
                            <i class="fas fa-tenge""></i>: ${prod.transmission} 
                        </div>

                        <div class="prod-property" data-toggle="tooltip" title="Climatisation" data-placement="top">
                            <i class="fas fa-snowflake""></i>: ${prod.climatisation}
                        </div>
                                                        
                    </div>

                    <div class="row last-row-order">
                        <div class="col-sm-6 price-tag">
                            <div class="prod-property" data-toggle="tooltip" title="Price/day" data-placement="top"></div>                  
                            <i class="fas fa-tag""></i><span data-toggle="tooltip" title="Price/day" data-placement="top"> ${prod.price}$</span>  
                        </div>
                    
                        <div class="col-sm-6">
                            <a class="order-button" href="book.html">Book now!</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
}

function renderProducts(products) {    //Function that will render html document filled with class methods
    let htmlString = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];              //product variable is an element of array products
        htmlString += createProductCard(product); // fill htmlString variable with product elements properties
    }

    document.getElementById('products-placeholder').innerHTML = htmlString; 
}

let currentPage = 1; // current page 

$(document).ready(function () {
    renderPagination(getPageCount(products)); // renderPagination renders products on the number determined by getPageCount - number of elements in one page
    loadPage(currentPage);  // 
});



// Pagination

function getPageCount(arr, size = 12) {       // it takes as argument an array and returns the number of pages
    let pages = Math.ceil((arr.length / size)); // size determines the number of elements that will be loaded in one page

    return pages;
}

function renderPagination(count) {  // it takes as argument an int(nr. of pages) and renders page products
    const root = document.getElementById('pagination')
    
    for (let i = 1; i <= count; i++) {
        const li = document.createElement('li');  // create a list element, wich includes one page array elements
        li.className = `pageNumber ${i == 1 ? 'active' : ''}`; 
        li.innerHTML = i.toString();
        li.addEventListener('click', function () {  // when you click on certain page number in pagination, 
            $('.pagination').find('.pageNumber.active').removeClass('active'); // it will remove the active class from previous page 
            $(this).addClass('active'); // and adds the active class in the clicked page number
            currentPage=i; // currentPage receives the value of i
            loadPage(i); // and you load page for i-number elements
        });

        root.appendChild(li)
        // htmlPag += `
        // <li class="pageNumber ${i == 1 ? 'active' : ''}" >${i}</li>`; // fill this empty string with html elements
    }
    // document.getElementById('pagination').innerHTML = htmlPag;
}

function loadPage(page) {  // it takes as argument the number of a page and renders products for that page
    let start = 12 * (page - 1), end = start + 12; // it will show max 12 elements for one page 
    const pageProducts = products.slice(start, end); // it creates a temporary array with selected elements of the main array ex: select elements from 1 to 12
    renderProducts(pageProducts); // it renders html elements between start and end indexes
}


//Pagiantion HTML - next and previous  buttons
$(document).ready(function () {
    $('.next').click(function () {  // select dom element with next class 
 
        $('.pagination').find('.pageNumber.active').next().addClass('active');  // you add the class active to next page number button
        $('.pagination').find('.pageNumber.active').prev().removeClass('active'); // you remove the class active from the current page number button
        if(currentPage === getPageCount(products)) // if currentPage is equal to getPageCount you dont have to change anything
        {
           return;
        }
        else
        {
            currentPage++; // when you add class active to next page, you increment the current page for one,
        }
        loadPage(currentPage); // and load elements for the incremented currentpage

    });
    $('.previous').click(function () { // select dom element with previous class

        $('.pagination').find('.pageNumber.active').prev().addClass('active'); // you add the class active to previous page number button
        $('.pagination').find('.pageNumber.active').next().removeClass('active'); // you remove the class active from the current page number button
        if(currentPage ===1)
        {
            return;
        }
        else
        {
            currentPage--;  // when you add class active to previous page, you decrement the current page for one,
        }
        loadPage(currentPage); // and load elements for the decremented currentpage
    });
});



// Search Bar javascript code

const searchKey = document.getElementById('searchBar'); // target input element in searchBar

function searchCars(searchString) { // this function searches for searchKey in array and returns the array with elements that respond to that searchKey 

    const filteredProducts = products.filter(prod => {  // function .filter returns an arary with elements that fulfill the given condition
        return prod.title.toLowerCase().includes(searchString) ||
            prod.persons.toString().includes(searchString) ||
            prod.bags.toString().includes(searchString) ||
            prod.fuelType.toLowerCase().includes(searchString) ||
            prod.transmission.toLowerCase().includes(searchString) ||
            prod.climatisation.toLowerCase().includes(searchString) ||
            prod.price.toString().includes(searchString);
    });
    renderProducts(filteredProducts); // render products with filtered array
};


searchKey.addEventListener('keyup', (e) => { // when you press Enter, it renders products that are corresponding to the searchKey

    const searchString = e.target.value.toLowerCase(); 
    if (searchString.length === 0) { // if searchKey is empty, return nothing
        renderProducts(products);
        return;
    }
    if (e.keyCode !== 13) { // if button is not Enter, return nothing
        return;
    }
    searchCars(searchString);
});

const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', () => {

    const searchTarget = searchKey.value.toLowerCase();

    if (searchTarget.length === 0) {
        renderProducts(products);
        return;
    }
    else {
        searchCars(searchTarget);
    }
});