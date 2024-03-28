export default function loadMenu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');
    content.appendChild(container);
    createItem('', 'Water');
    createItem('', 'Pea on Plate');
    createItem('', 'MEAT Eat');
    createItem('', 'Vegan air');
    createItem('', 'Leafy Meat');
    function createItem(src, foodName) {
        const item = document.createElement('div');
        item.classList.add('items');
        container.appendChild(item);
    
        const img = document.createElement('img');
        img.src = `${src}`;
        img.alt = `Photo of ${foodName}`;
        item.appendChild(img);
    
        const food = document.createElement('p');
        food.textContent = foodName;
        item.appendChild(food);
    }
}
