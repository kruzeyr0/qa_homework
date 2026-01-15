var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"   // removed "<" and ">" to make it valid for validation. It can be returned, but only test email is valid then.
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
];

function validateEmail(email) {
    let validateChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validateChecker.test(String(email).toLowerCase());
}

function trustedEmails(arr) {
    const trustedDomains = ['gmail.com', 'yahoo.com'];
    return arr.map(userName => userName.email).filter(email => {
        if (!validateEmail(email)) {
            return false;
        }
        let domain = email.split('@')[1];
        return trustedDomains.includes(domain);
    });
}


console.log(trustedEmails(arr));    // Expected output: [ 'test.test@gmail.com', 'dmitro.porohov@yahoo.com' ]
