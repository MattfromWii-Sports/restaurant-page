function loadInitialPage() {
    const header = document.querySelector('header');
    const name = document.createElement('h1');
    name.textContent = 'FOOD';
    header.prepend(name);
}     
export default loadInitialPage;