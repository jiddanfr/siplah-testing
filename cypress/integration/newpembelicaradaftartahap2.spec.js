context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })

    it('.type() - type into a DOM element ',() => {
        cy
        .wait(5000)
        .get('#btn_masuk') //menggerakkan kursor yang di inginkan
        .click()//meng klik yang di inginkan
        .get('#usernameLoginRef')
        .type('jiddanfajar12@gmail.com')//memasukkan dari keyboard
        .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('1234')
        .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
        .click()

        .get('.rounded-img') //masuk tntang kami 
        .click()
        .get('#nav-user > .nav-dropdown > :nth-child(1)') // masuk pengaturan akun
        .click()
        
    })
})
        
        
        
        
        
        
        
        
        
       