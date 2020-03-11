context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })

    it('.type() - type into a DOM element ',()=>{
      cy
      .get('#btn_daftar')
      .click()
      .get('#phoneRegRef')
      .type('081615666455')
      .get(':nth-child(2) > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
      .type('jiddanfajar12@gmail.com')
      .get(':nth-child(4) > .ng-untouched')
      .type('1234')
      .get(':nth-child(2) > .mt15 > .grid-x > .large-12 > .button')
      .click()
      .wait(10000)
      //.get('.large-12 > .ng-untouched') //kirim ulang verifikasi
      .get('.mt10 > .f-gray') //verifikasi nanti
      .click()  
    })
})
