const products = [    //Create an array which contains informations about cars
    {
        id: 1,
        title: 'Audi A3',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 2,
        title: 'Audi A3',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 3,
        title: 'VW Polo R-Line',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 4,
        title: 'Audi Q7',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 5,
        title: 'Audi Q7',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 6,
        title: 'Mercedes S-500 AMG',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 7,
        title: 'Audi Q7',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 8,
        title: 'Mercedes E-220',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 9,
        title: 'Mercedes C-200',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 10,
        title: 'Mercedes Sprinter',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 11,
        title: 'Audi Q7',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 12,
        title: 'VW Polo',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 13,
        title: 'Golf 7',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 14,
        title: 'Audi A3',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 15,
        title: 'Mercedes C-200',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 16,
        title: 'VW Passat',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 17,
        title: 'VW Passat',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 18,
        title: 'Mercedes C-200',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    },
    {
        id: 19,
        title: 'VW Golf 7 R-Line',
        persons: 'John Doe',
        startDate: '11/10/2020',
        endDate: '11/15/2020',
        price: 19.99,
        contact: '+333 444 555'
    }];

// arsyeja e kthimit te card-it ne DOM eshte sepse funksionet nuk funksionojne ne HTML string
function createOfferRow(prod) {
    const tr = document.createElement('tr');

    const th = document.createElement('th');
    th.setAttribute('scope', 'row');
    th.innerHTML = prod.id;

    const td1 = document.createElement('td');
    td1.innerHTML = prod.title;
    
    const td2 = document.createElement('td');
    td2.innerHTML = prod.persons;

    
    const td3 = document.createElement('td');
    td3.innerHTML = prod.startDate;

    const td4 = document.createElement('td');
    td4.innerHTML = prod.endDate;

    const td5 = document.createElement('td');
    td5.innerHTML = prod.price;

    const td6 = document.createElement('td');
    const btn = document.createElement('button');
    btn.className = "btn btn-secondary";

    btn.innerHTML = 'View';
    btn.addEventListener('click', function() {

        renderModal(prod);
    });

    td6.appendChild(btn);

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    return tr;

};

function renderProducts(products) {    //Function that will render html document filled with class methods
    const root = document.getElementById('table-placeholder')
    root.querySelectorAll('tr').forEach(t => t.remove()) // clear all nodes on that table body

    // let htmlString = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // htmlString += createOfferRow(product);
        const tr = createOfferRow(product)
        root.appendChild(tr)
    }

    // document.getElementById('table-placeholder').innerHTML = htmlString;
}

let currentPage = 1; // current page 

$(document).ready(function () {
    renderPagination(getPageCount(products));
    loadPage(currentPage);
});

function getPageCount(arr, size = 8) {       // it takes as argument an array and returns the number of pages
    let pages = Math.ceil((arr.length / size));

    return pages;
}

function renderPagination(count) {  // it takes as argument an int(nr. of pages) and renders page products
    const root = document.getElementById('pagination')
    // let htmlPag = '';  // create an empty string

    for (let i = 1; i <= count; i++) {
        const li = document.createElement('li');
        li.className = `pageNumber ${i == 1 ? 'active' : ''}`;
        li.innerHTML = i.toString();
        li.addEventListener('click', function () {
            $('.pagination').find('.pageNumber.active').removeClass('active');
            $(this).addClass('active');
            currentPage = i;
            loadPage(i);
        });

        root.appendChild(li)
        // htmlPag += `
        // <li class="pageNumber ${i == 1 ? 'active' : ''}" >${i}</li>`; // fill this empty string with html elements
    }
    // document.getElementById('pagination').innerHTML = htmlPag;
}

function loadPage(page) {  // it takes as argument the number of a page and renders products for that page
    let start = 8 * (page - 1), end = start + 8; // it will show max 12 elements for one page 
    const pageProducts = products.slice(start, end); // it creates a temporary array with selected elements of the main array
    renderProducts(pageProducts); // it renders html elements between start and end indexes
}

//Pagiantion HTML
$(document).ready(function () {
    $('.next').click(function () {

        $('.pagination').find('.pageNumber.active').next().addClass('active');
        $('.pagination').find('.pageNumber.active').prev().removeClass('active');
        if (currentPage === getPageCount(products)) {
            return;
        }
        else {
            currentPage++;
        }
        loadPage(currentPage);

    });
    $('.previous').click(function () {

        $('.pagination').find('.pageNumber.active').prev().addClass('active');
        $('.pagination').find('.pageNumber.active').next().removeClass('active');
        if (currentPage === 1) {
            return;
        }
        else {
            currentPage--;
        }
        loadPage(currentPage);
    });
});

// Modal 

function createModal(prod) {

    return `
    <h5>ID:</h5>
    <p>${prod.id}</p>
    <h5>Car:</h5>
    <p>${prod.title}</p>
    <h5>Person:</h5>
    <p>${prod.persons}</p>
    <h5>Contact number:</h5>
    <p>+333 444 555</p>
    <h5>Start date:</h5>
    <p>${prod.startDate}</p>
    <h5>End date:</h5>
    <p>${prod.endDate}</p>
    <h5>Price:</h5>
    <p>${prod.price} / day</p>
    <h5>Total:</h5>
    <p>${(calculateDays(prod.startDate, prod.endDate) * prod.price).toFixed(2)}$</p>`;
};

function renderModal(product)
{
    let modalString = '';
    modalString += createModal(product);
    document.getElementById('modal-placeholder').innerHTML = modalString;

    $('#modal-demo').modal({ show: true });
};

function calculateDays(str1, str2) {
    const date1 = new Date(str1);
    const date2 = new Date(str2);

    let rentDays = 0;
    let days2 = 0;

    if (date2.getFullYear() >= date1.getFullYear()) {
        if ((date2.getMonth()+1) >= (date1.getMonth()+1)) {
            let monthD=0;
            monthD = date2.getMonth() - date1.getMonth();
            
            for (i = 1; i <= monthD; i++) {
                days2 += returnDays(date2.getMonth() + 1 - i);
            }

            rentDays = days2 + date2.getDate() + (date2.getFullYear() - date1.getFullYear()) * 365 - date1.getDate();
        }
    }
    return rentDays;
};


function returnDays(month) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31;
    }

    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    }

    if ([2].includes(month)) {
        return 28;
    }
};