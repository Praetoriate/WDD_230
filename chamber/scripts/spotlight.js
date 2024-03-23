const spotEntry = document.querySelector('#spotlight');
const directory = 'data/members.json';

async function getSpotData() {
    const response = await fetch(directory);
    const spotEntry = await response.json();

    const spotFiltered = spotEntry.members.filter(member => member.level === "Gold" || member.level === "Silver");

    const randomArray = []
    while (randomArray.length < 2) {
        const randomI= Math.floor(Math.random() * spotFiltered.length);
        if (!randomArray.includes(randomI)) {
            randomArray.push(randomI);
        }
      }

    const randomEntries = randomArray.map(index => spotFiltered[index]);

    displaySpotlight(randomEntries);
  }
  
getSpotData();

const displaySpotlight = (members) => {
    members.forEach((member) => {

      let entry = document.createElement('section');      
      let logo = document.createElement('img');
      let memberInfo = document.createElement('div')
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');    
      let web = document.createElement('a');
      let level = document.createElement('p');
      let founded = document.createElement('p');
  
      name.textContent = `${member.name}`;
      address.textContent = `${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}`;
      phone.textContent = `${member.phone}`;
      level.textContent = `${member.level}`;
      founded.textContent = `${member.founded}`;
      web.href = `${member.website}`;
      web.textContent = `${member.website}`;

      logo.setAttribute('class', 'member-logo');
      logo.setAttribute('src', member.image);
      logo.setAttribute('alt', `Company logo of ${member.name}`); 
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '200');
      logo.setAttribute('height', '200');

      memberInfo.setAttribute('class', 'member-info');
  
      entry.appendChild(logo);
      entry.appendChild(memberInfo);
      memberInfo.appendChild(name);
      memberInfo.appendChild(address);
      memberInfo.appendChild(phone);
      memberInfo.appendChild(web);
  
      spotEntry.appendChild(entry);
    });
}