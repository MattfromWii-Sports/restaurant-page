export default function loadHome() {
    const container = document.createElement('div');
    container.classList.add('home-container');
    content.appendChild(container);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('home-img-container');
    const img = document.createElement('img');
    img.src = './../images/home-burger.jpg';
    img.alt = 'Photo of a burger with a height equivalent to two full sized burgers';
    imgContainer.appendChild(img);
    const slogan = document.createElement('h1');
    slogan.textContent = 'Eat Healthy, Be Healthy';
    const description = document.createElement('p');
    description.classList.add('home-text');
    description.textContent = 'Here at FOOD, we only serve the best and healthiest meals. We are renouned for our 100% vegan and non-dairy dishes that everyone is sure to enjoy!';

    container.append(imgContainer, slogan, description);
}