
// search result section
const searchResults = document.getElementById('search-results'); 
const detailSection = document.getElementById('product-details'); 
const search = () => {
    let searchText = document.getElementById('search-input').value;
    if (searchText === '') {
        searchResults.textContent = '';
        detailSection.textContent = '';
        document.getElementById('search-input').value = '';
        document.getElementById('empty-inputField').style.display = 'block';
        document.getElementById('no-search-result').style.display = 'none';
        document.getElementById('results-section').style.display = 'none';
    }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => searchPhone(data.data))
    }
}

// show search results
const searchPhone = (phones) => {
    if (phones.length === 0) {
        detailSection.textContent = '';
        searchResults.textContent = '';
        document.getElementById('search-input').value = '';
        document.getElementById('empty-inputField').style.display = 'none'
        document.getElementById('no-search-result').style.display = 'block'
        document.getElementById('results-section').style.display = 'none';
    }
    else if (phones.length > 0 && phones.length >= 20) {
        console.log(phones.length);
        detailSection.textContent = '';
        searchResults.textContent = '';
        document.getElementById('search-input').value = '';
        document.getElementById('no-search-result').style.display = 'none';
        document.getElementById('empty-inputField').style.display = 'none';
        document.getElementById('results-section').style.display = 'block';
        document.getElementById('results-section').innerText = `Showing the results found`;

        if (phones.length > 20) {
            phones.slice(0, 20).map(phone => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="card shadow rounded p-4" style="width: 20rem;">
                        <img src="${phone.image}" class="card-img-top mx-auto img-fluid w-80">
                        <div class="card-body  d-flex flex-column">
                            <h5 class="card-title text-center">${phone.phone_name}</h5>
                            <h5 class="brand_name text-center">${phone.brand}</h5>
                            <a href="#" onclick="getPhone('${phone.slug}')" class="btn btn-success mx-auto">Show Details</a>
                        </div>
                    </div>
                `
                searchResults.appendChild(div)
            })
        }
    }
    else {
        detailSection.textContent = '';
        searchResults.textContent = '';
        document.getElementById('search-input').value = '';
        document.getElementById('no-search-result').style.display = 'none';
        document.getElementById('empty-inputField').style.display = 'none';
        document.getElementById('results-section').style.display = 'block';
        document.getElementById('results-section').innerText = `Showing the results found`;
        phones.map(phone => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="card shadow rounded p-4" style="width: 20rem;">
                    <img src="${phone.image}" class="card-img-top mx-auto img-fluid w-80">
                    <div class="card-body  d-flex flex-column">
                        <h5 class="card-title text-center">${phone.phone_name}</h5>
                        <h5 class="brand_name text-center">${phone.brand}</h5>
                        <a href="#" onclick="getPhone('${phone.slug}')" class="btn btn-primary mx-auto"  data-target="#exampleModal">Show Details</a>
                    </div>
                </div>
            `
            searchResults.appendChild(div)
        })
    }
}
