context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })
        
    it('.type() - type into a DOM element ',()=>{
        cy
        .wait(5000)
        .get('#btn_masuk') //menggerakkan kursor yang di inginkan
        .click()//meng klik yang di inginkan
        .get('#usernameLoginRef')
        .type('pembeli@gmail.com')//memasukkan dari keyboard
        .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('1234')
        .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
        .click()
        cy
        .wait(8000)
        .get('.rounded-img')
        .click()
        .get('#nav-user > .nav-dropdown > :nth-child(1)')
        .click()
        .wait(5000)
        .get('.relative > .input-text')
        .click()
        .clear()
        .get('.relative > .input-text')
        .type('jiddan fajar radita')
        .get('#cb_ttl') 
        .select('0')
        .get('#cb_bulan')
        .select('Juli')
        .get('#cb_tahun')
        .select('2000')
        .get(':nth-child(8) > :nth-child(1) > .checkbox-round > .checkmark')
        .click()
        .get('.large-4 > form.ng-valid > .button')
        .click();
        cy
        .get(':nth-child(1) > .large-4 > .button')
        .click()
        .get('.relative > .f-qsand')
        .click()
        .type('1234')
        .get('.large-12 > .ng-valid > .button')
        .click()
        .wait(10000)
        .get('.relative > .f-qsand')
        .type('jiddanfajar12@gmail.com')
        .get('.large-12 > form.ng-untouched > .button')
        .click()
    })

    })