let locations = [];

const setLocations = (newArray) => {
    locations = newArray;
}

const getLocations = () => {
    return locations;
}

const printLocations = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((locations) => {
        domString += `<div class="card locations flex-row-wrap text-center m-3" style="width: 23rem;">`
        domString += `<div class="card-header">`
        domString += `<h4 class="location-name">${locations.name}</h>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<img class="location-img" style="width:80%; height:10.75rem;" src="${locations.imageUrl}" alt="${locations.name}">`
        domString += `<h6 class="card-text address py-2">Address: ${locations.address}</h6>`
        domString += `</div>`
        domString += `<div class="card-footer">`
        domString += `<h6>${locations.shootTime}</h6>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#locations").append(domString)
}

const filterSearchResults = (e) => {
    const searchInput = $(e.target).val().toLowerCase();
    if (searchInput) {
        $('.locations').each((i, location) => {
            $(location).show();
        })
    }
}

export {getLocations, setLocations, printLocations, filterSearchResults}