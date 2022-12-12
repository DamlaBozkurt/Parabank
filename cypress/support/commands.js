require('cypress-xpath');


Cypress.Commands.add('Login', (visit, userName, password, submit) => {

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('input[name="username"]').click().type('Julia')
    cy.get('input[name="password"]').click().type('S')
    cy.get('input[type="submit"]').click();
})

Cypress.Commands.add('mainPage', (main) => {
    cy.get('img[src="/parabank/images/logo.gif"]').click()

})
 

Cypress.Commands.add('register', (firstN, lastN, address, city, state, zip, phone, userN, pass, confirm) => {
    cy.xpath('/html/body/div[1]/div[3]/div[1]/div/p[2]/a').click()
    cy.get('a[href="register.htm"]').click()
    cy.get('input[id="customer.firstName"]').click().type('Julia')
    cy.get('input[id="customer.lastName"]').click().type('S')
    cy.get('input[id="customer.address.street"]').click().type('Casa de Papel Str.')
    cy.get('input[id="customer.address.city"]').click().type('Yozgat')
    cy.get('input[id="customer.address.state"]').click().type('T')
    cy.get('input[id="customer.address.zipCode"]').click().type('234')
    cy.get('input[id="customer.phoneNumber"]').click().type('321')
    cy.get('input[id="customer.username"]').click().type('Julias')
    cy.get('input[id="customer.password"]').click().type('216')
    cy.get('input[id="repeatedPassword"]').click().type('fff')
    cy.get('input[type="submit"]').eq('1').click()

    })
Cypress.Commands.add('services', (services) =>{
 cy.get('a[href="services.htm"]').eq('0').click()

})
Cypress.Commands.add('forgotPassword', (city, firstName, ssn) => {
    cy.get('a[href="lookup.htm"]').click({ force: true })
    cy.get('input[id="address.city"]').click().type('Adana')
    cy.get('input[id="firstName"]').click().type('Julia')
    cy.get('input[id="ssn"]').click().type('sgv')
    cy.get('input[value="Find My Login Info"]').click()
    
    
})
Cypress.Commands.add('contact', (name, email, phone, message) => {

    cy.get('a[href="contact.htm"]').eq('0').click()
    cy.get('input[id="name"]').click().type('Julia')
    cy.get('input[id="email"]').click().type('julia@email')
    cy.get('input[id="phone"]').click().type('34534535')
    cy.get('textarea[id="message"]').click().type('Hello')
    cy.get('input[type="submit"]').eq('1').click()
})
Cypress.Commands.add('forum', (forum) => {

    cy.get('a[href="http://forums.parasoft.com/"]').click()
    cy.get('div[class="searchBar__input"]').click().type('nft')
})
Cypress.Commands.add('admin', (administration) => {
    cy.get('a[href="admin.htm"]').click()
    cy.get('input[id="accessMode1"]').click()
    cy.get('button[value="CLEAN"]').click()
    cy.get('input[type="submit"]').eq('4').click() 
})

Cypress.Commands.add('aboutUs', (about) => {

    cy.get('a[href="about.htm"]').eq('0').click()
    cy.get('a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]').eq('0').click()
    

})

Cypress.Commands.add('siteMap', (site) => {
    
    cy.get('a[href="/parabank/sitemap.htm"]').click()
    
})

Cypress.Commands.add('products', (products) =>{ 

    cy.get('a[href="http://www.parasoft.com/jsp/products.jsp"]').eq('0').click() 

})

