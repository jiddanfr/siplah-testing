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
        .wait(8000)
        .get('.rounded-img')
        .click()
        .get('#nav-user > .nav-dropdown > :nth-child(1)')
        .click()
        .wait(5000)
        .get('#namaToko-input')
        .type('mebelisasi')
        .get('#namaDomain-input')
        .type('mebelisasi.com')
        .get('#namaCategory-input')
        .select('Meubelair')
        .get('#formA > .button')
        .click()
        .wait(5000)
        .get('.large-7 > .button')
        .click()
        .get('#formB > .button')
        .click()
        .get('#progressbar-finish-fn')
        .click()
        .get('#formD > .button')
        .click()
        .wait(5000)
        // .get('#index-kategori > .kategoriicon > :nth-child(1) > a > .title')
        // .click()
        // .get('.product-content > .name')
        // .click()
        // .get(':nth-child(1) > .input-group > :nth-child(3) > .input-number-increment') //tambah 1 unit
        // .click()
        // .get(':nth-child(2) > :nth-child(2) > .button') //tambah ke troli
        // .click()

        
    })
})