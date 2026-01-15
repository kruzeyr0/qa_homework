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
    },
    {
        userName:"Andrii",
        lastName:"",
        email:".test@gmail.com" //test email не може починатися з крапки
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"test@mail.ua@mail.ru" // test email не може містити більше одного символу "@"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"test@mail.ua" // test email не з потрібним доменом
    },
    {
        userName:"test!!!",
        lastName:"",
        email:"test!!!@gmail.com" // test email не може містити спецсимволи, окрім крапки
    }
];

function validateEmailAndDomain(email) {
    const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;   // Only gmail.com and yahoo.com valid emails are allowed
    return emailRegex.test(email);
}

function trustedEmails(arr) {
    return arr.map(userName => userName.email).filter(email => validateEmailAndDomain(email));      // Filter only valid emails
         }


console.log(trustedEmails(arr));    // Expected output: [ 'test.test@gmail.com', 'dmitro.porohov@yahoo.com' ]
