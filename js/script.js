console.log('Warsztat obsluga formularz "imie i nazwisko"');

const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name= "fname" ]');
    let lastName = document.querySelector('[name="lname" ]');

    console.log(firstName);
    console.log(lastName);
    console.log(`Imie: ${firstName.value}`, `Nazwisko: ${lastName.value}`);
}




let form = document.getElementById('form')

form.addEventListener('submit', submitForm);

console.log(form);
