context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })
        
    it('.type() - type into a DOM element ',()=>{
        cy
        .wait(5000)
        .get('#btn_masuk')
        .click()
        .get('#usernameLoginRef')
        //.type('087863523124') //dg no.hp
        .type('pembelisiplah@gmail.com') //dg email
        .wait(2000)
        .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('12345666')
        .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
        .click()
        .wait(3000)
        .get('#index-kategori > .kategoriicon > :nth-child(1) > a > .title')
        .click()
        .get('.product-content > .name')
        .click()
        .get(':nth-child(1) > .input-group > :nth-child(3) > .input-number-increment') //tambah 1 unit
        .click()
        .get(':nth-child(2) > :nth-child(2) > .button') //tambah ke troli
        .click()

        
    })
})