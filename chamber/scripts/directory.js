const memberEntry = document.querySelector('#members');
const directory = 'data/members.json';

async function getMemberData() {
    const response = await fetch(directory);
    const memberEntry = await response.json();
    displayMembers(memberEntry.members);
  }
  
getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {

      let entry = document.createElement('section');      
      let logo = document.createElement('img');
      let name = document.createElement('h2');
      let address = document.createElement('p')
      let phone = document.createElement('p')      
      let web = document.createElement('a')
      let level = document.createElement('p')
      let founded = document.createElement('p')  
  
      name.textContent = `${member.name}`;
      address.textContent = `${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}`;
      phone.textContent = `${member.phone}`;
      level.textContent = `${member.level}`;
      founded.textContent = `${member.founded}`;
      web.href = `${member.website}`;
      web.textContent = `${member.website}`;

      logo.setAttribute('src', member.image);
      logo.setAttribute('alt', `Company logo of ${member.name}`); 
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '200');
      logo.setAttribute('height', '200');
  
      entry.appendChild(logo);
      entry.appendChild(name);
      entry.appendChild(address);
      entry.appendChild(phone);
      entry.appendChild(web);
  
      memberEntry.appendChild(entry);
    });
}

   