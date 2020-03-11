context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })
        
    it('.type() - type into a DOM element ',()=>{
        cy
        .wait(5000)
        .get('#btn_masuk')
        .click()
        .get('.product-content > h5.f13 > .f-green')
        .click()
        .get('#phoneRegRef')
        .type('087863523124')
        .wait(5000)
        .get(':nth-child(2) > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('pembelisiplah@gmail.com')
        .get(':nth-child(4) > .ng-untouched')
        .type('12345666')
        .get(':nth-child(2) > .mt15 > .grid-x > .large-12 > .button')
        .click()
    })
})