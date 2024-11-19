// Function to switch between pages
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const pageId = this.getAttribute('href').substr(1); // Remove '#' from href
        showPage(pageId);
    });
});

// Show the initial page
showPage('page1');

function filterItems(category) {
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        if (category === 'all') {
            item.classList.remove('hide');
        } else if (item.classList.contains(category)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

function filterPlayers() {
    var input, filter, select, country, table, tr, tdName, tdCountry, i, txtValueName, txtValueCountry;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    select = document.getElementById("countryFilter");
    country = select.value.toUpperCase();
    table = document.getElementById("page2").getElementsByTagName("table")[0];
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query or selected country
    for (i = 0; i < tr.length; i++) {
        tdName = tr[i].getElementsByTagName("td")[0]; // Name is in the second column
        tdCountry = tr[i].getElementsByTagName("td")[1]; // Country is in the third column
        if (tdName || tdCountry) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueCountry = tdCountry.textContent || tdCountry.innerText;
            if ((txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueCountry.toUpperCase().indexOf(filter) > -1) &&
                (country === "" || txtValueCountry.toUpperCase().indexOf(country) > -1)) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
