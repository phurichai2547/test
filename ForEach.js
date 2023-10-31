const keywords = ['destructuring', 'spread', 'rest', 'prototypes', 'function']
const mails = [
    {
        id: 12323502,
        sender: {
            firstname: 'umaporn',
            lastname: 'sup'
        },
        subject: 'Welcome to SIT, KMUTT'
    },
    {
        id: 55588811,
        sender: {
            firstname: 'phuri',
            lastname: 'chai'
        },
        subject: 'Reminder: INT201 Class'
    },
]
let firstChars = ''
keywords.forEach((keyword) => (firstChars += keyword.charAt(0)))
mails.forEach((mail) => console.log(mail))
// 1. string contains the first character of each keyword
// 'dsrpf'
console.log(firstChars)
keywords.push('optional chaining')
console.log(keywords)
// 2. all mail ids of mails array
const mailIDS = []
mail.forEach((mail) => mailIDS.push(mail.id))
console.log(mailIDS)
// 3. return array that contains keywords which include 'es' (case insensitive)
const esKeywords = keywords.filter((keywords) =>
    keywords.toLowerCase().includes('es')
)
console.log(esKeywords)

// 4. array that contains all senders firstname
const mailSenders = mails.map((mail) => mail.sender.firstname)
console.log(mailSenders)
// 5. array that contains all mailIDS that start with 'logID-'
// that result is : ['logID-12323502'. 'logID-55588811']

const logMailIds = mails.map((mail) => 'logId-' + mail.id)
console.log(logMailIds)
