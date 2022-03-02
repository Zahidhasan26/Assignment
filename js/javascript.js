
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

const getPhone = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(response => response.json())
        .then(data => phoneDetails(data.data))
}

const phoneDetails = (details) => {
    document.getElementById('results-section').style.display = 'none';
    detailSection.textContent = '';
    const detailDiv = document.createElement('div');
    detailDiv.innerHTML = `
        <div class="product-detail rounded shadow" >
            <div>
                    <img src="${details.image}" class="img-fluid">
                    <h4 class="text-primary mt-3">${details.name}</h4>
                    <p class="text-secondary text-center">
                        ${details.releaseDate ? details.releaseDate : "Release Date Unknown"}
                    </p>
                </div>
                
            </div>
            <div class="product-detail-middle">
                <h5 class="main-color"><b>Main Features:</b> </h5>
                <p><b>Storage: </b><span>${details.mainFeatures ? details.mainFeatures.storage : 'No Information Available'}</span></p>
                <p><b>Display Size: </b><span>${details.mainFeatures ? details.mainFeatures.displaySize : 'No Information Available'}</span></p>
                <p><b>Chipset: </b><span>${details.mainFeatures ? details.mainFeatures.chipSet : 'No Information Available'}</span></p>
                <p><b>Memory: </b><span>${details.mainFeatures ? details.mainFeatures.memory : 'No Information Available'}</span></p>
                <p><b>Sensors: </b><span>${details.mainFeatures ? details.mainFeatures.sensors : 'No Information Available'}</span></p>
            </div>

            <div class="product-detail-right">
                <h5 class="main-color"><b>Other Features: </b> </h5>
                <p><b>WLAN: </b><span>${details.others ? details.others.WLAN : 'No Information Available'}</span></p>
                <p><b>Bluetooth: </b><span>${details.others ? details.others.Bluetooth : 'No Information Available'}</span></p>
                <p><b>GPS: </b><span>${details.others ? details.others.GPS : 'No Information Available'}</span></p>
                <p><b>NFC: </b><span>${details.others ? details.others.NFC : 'No Information Available'}</span></p>
                <p><b>Radio: </b><span>${details.others ? details.others.Radio : 'No Information Available'}</span></p>
                <p><b>USB: </b><span>${details.others ? details.others.USB : 'No Information Available'}</span></p>
            </div>
        </div>
    `
    detailSection.appendChild(detailDiv);
}
