(function() {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }


    const contacts = [];
    const contactForm = get('contactForm');
    const firstInput = get('first');
    const lastInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');

    get('add').addEventListener('click', () => {
        setCss(contactForm, 'display', 'block');
    });

    function hideAddContactForm() {
        contactForm.reset();
        setCss(contactForm, 'display', 'none');
    }

    contactForm.addEventListener('submit', e => {
        e.preventDefault();




        const contactsTable = get('contacts');

        if (!contacts.length) {
            contactsTable.deleteRow(1);
        }

        const newContact = {
            first: firstInput.value,
            last: lastInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            button: addElem()
        };

        contacts.push(newContact);



        function addElem() {

            const myNewButton = document.createElement('button');
            const newContent = document.createTextNode('delete');
            myNewButton.appendChild(newContent);



        }
        //
        //myNewButton.addEventListener(' click ');

        const newRow = contactsTable.insertRow();
        const firstCell = newRow.insertCell();
        const lastCell = newRow.insertCell();
        const emailCell = newRow.insertCell();
        const phoneCell = newRow.insertCell();
        const buttonCell = newRow.insertCell();

        firstCell.innerHTML = newContact.first;
        lastCell.innerHTML = newContact.last;
        emailCell.innerHTML = newContact.email;
        phoneCell.innerHTML = newContact.phone;
        buttonCell.innerHTML = newContact.button;

        // setCss(contactForm, 'display', 'none');
        hideAddContactForm();
    });

    get('cancel').addEventListener('click', hideAddContactForm);
}());