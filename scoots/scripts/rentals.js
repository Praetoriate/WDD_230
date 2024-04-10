const rentalEntry = document.querySelector('#rental-data');
const catalog = 'data/pricing.json';

async function getRentalData() {
    const response = await fetch(catalog);
    const rentalEntry = await response.json();
    displayRentals(rentalEntry.Rentals);
}

getRentalData();

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {

        let entry = document.createElement('tr');
        let photoCell = document.createElement('td');
        let photo = document.createElement('img');
        let name = document.createElement('td');
        let seats = document.createElement('td');

        let halfRes = document.createElement('td');
        let fullRes = document.createElement('td');
        let halfWalk = document.createElement('td');
        let fullWalk = document.createElement('td');

        name.textContent = `${rental.Type} ~ ${rental.Name}`;
        seats.textContent = `${rental.Seating}`;
        halfRes.textContent = `${rental.Pricing.HalfReserve}`;
        fullRes.textContent = `${rental.Pricing.HalfWalk}`;
        halfWalk.textContent = `${rental.Pricing.FullReserve}`;
        fullWalk.textContent = `${rental.Pricing.FullWalk}`;

        photo.setAttribute('src', rental.Image);
        photo.setAttribute('alt', `Photo of ${rental.Name}`); 
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '75');
        photo.setAttribute('height', '50');

        photoCell.appendChild(photo);
        entry.appendChild(photoCell);
        entry.appendChild(name);
        entry.appendChild(seats);
        entry.appendChild(halfRes);
        entry.appendChild(fullRes);
        entry.appendChild(halfWalk);
        entry.appendChild(fullWalk);

        rentalEntry.appendChild(entry);
    });
}