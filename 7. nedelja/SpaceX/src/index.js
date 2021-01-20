import axios from 'axios';
const select = document.getElementById('select');
const containerDiv = document.getElementById('app');

select.addEventListener('change', (event) => {
    event.preventDefault();
    select.value == 'ships' ? getShips() : getLaunches()
})

const getShips = () => {
    containerDiv.innerHTML = '';
    axios.get('https://api.spacexdata.com/v3/ships')
        .then(res => {
            res.data.forEach(ship => showAllShips(ship));
        })
}

const showAllShips = ship => {
    let divShip = document.createElement('div');
    divShip.className = 'item';
    let pName = document.createElement('p');
    pName.className = 'name';
    let img = document.createElement('img');
    img.src = ship.image !== null ? ship.image : 'https://via.placeholder.com/150';
    img.style.width = '250px';
    img.style.height = '250px';
    pName.innerHTML = `${ship.ship_name}`;
    divShip.append(pName, img)
    containerDiv.appendChild(divShip);
}

const getLaunches = () => {
    containerDiv.innerHTML = '';
    axios.get('https://api.spacexdata.com/v3/launches')
        .then(res => {
            res.data.forEach(launch => showAllLaunches(launch));
        });
}

const showAllLaunches = launch => {
    let divLaunches = document.createElement('div');
    divLaunches.className = 'item';
    let missionName = document.createElement('p');
    missionName.innerHTML = `Mission name : ${launch.mission_name}`;
    missionName.className = 'name';
    let year = document.createElement('p');
    year.className = 'year';
    year.innerHTML = `Launch year: ${launch.launch_year}`;
    let img = document.createElement('img');
    img.className = 'image-launch'
    img.style.width = '250px';
    img.style.height = '250px';
    img.src = launch.links.mission_patch_small !== null ? launch.links.mission_patch_small : 'https://via.placeholder.com/150';
    let link = document.createElement('a');
    link.href = launch.links.wikipedia;
    link.innerHTML = 'More info';
    link.target = '_blank';

    divLaunches.append(missionName, year, img, link)
    containerDiv.appendChild(divLaunches);
}