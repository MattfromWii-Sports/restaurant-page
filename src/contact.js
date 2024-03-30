export default function loadContact() {
    const container = document.createElement('div');
    container.classList.add('contact-container');
    content.appendChild(container);

    const form = document.createElement('form');
    form.id = 'contact-form';
    const socialsContainer = document.createElement('div');
    socialsContainer.classList.add('socials-container');
    container.append(form, socialsContainer);

    //inside form area
    const header = document.createElement('h1');
    header.textContent = 'INFORMATION';
    form.appendChild(header);
    const formName = createQuestion('text', 'name', 'NAME');
    const formEmail = createQuestion('email', 'email', 'EMAIL');
    const formMessage = createQuestion('textarea', 'message', 'MESSAGE');
    const button = document.createElement('button');
    button.textContent = 'SUBMIT';
    button.id = 'submit';
    form.appendChild(button);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        formName.value = '';
        formEmail.value = '';
        formMessage.value = '';
        console.log('submit');
    });

    //inside socials container
    const socials = document.createElement('div');
    socials.classList.add('socials');
    socialsContainer.appendChild(socials);
    createSocials('Instagram', '../images/instagram.png');
    createSocials('Facebook', '../images/facebook.png');
    createSocials('Twitter', '../images/twitter.png');
    createSocials('Linked-in', '../images/linkedin.png');

    function createQuestion(type, attribute, title) {
        const questionField = document.createElement('div');
        questionField.classList.add('question');
        form.appendChild(questionField);
        //inside question field
        const label = document.createElement('label');
        label.setAttribute('for', attribute);
        label.textContent = title;
        let input;
        if(type === 'textarea') {
            input = document.createElement('textarea');
            input.setAttribute('rows', 8);
            input.maxLength = 500;
        } else {
            input = document.createElement('input');
            input.setAttribute('type', attribute);
        }
        input.setAttribute('name', attribute); 
        input.id = attribute;
        questionField.append(label, input);
        input.autocomplete = 'off';
        input.required = true;
        return input;
    }
    function createSocials(name, path) {
        const socialsItem = document.createElement('div');
        socialsItem.classList.add('socials-item');
        socials.appendChild(socialsItem);
        //inside socials
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Logo of ${name}`;
        const title = document.createElement('p');
        title.textContent = name;
        socialsItem.append(img, title);
    }
}