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
        .get(':nth-child(3) > :nth-child(1) > .small-12 > .button') //atur rekening
        .click()
        .get(':nth-child(1) > .relative > .input-text')
        .type('1234567890')
        .get(':nth-child(2) > .relative > .input-text')
        .type('1234567890')
        .get('.relative > .kategori-select')
        .select('BANK NTT')
        .get(':nth-child(4) > .relative > .input-text')
        .type('pasuruan')
        .get(':nth-child(2) > .small-12 > .button-blue')
        .click()
        
    })
})
        
        
        
        
        
        
        
        
        
       