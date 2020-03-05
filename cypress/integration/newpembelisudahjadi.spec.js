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
        .type('jiddanfajar12@gmail.com')//memasukkan dari keyboard
        .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('1234')
        .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
        .click()
        cy
        .wait(8000)
        .get('#index-kategori > .kategoriicon > :nth-child(1)')
        .click()
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .wait(5000)
        .get('#index-kategori > .kategoriicon > :nth-child(2) > a') //bos affirmasi dan kinerja
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .wait(2000)
        .get('#index-kategori > .kategoriicon > :nth-child(3) > a') // komputer laptop dan aksesoris
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .wait(2000)
        .get('#index-kategori > .kategoriicon > :nth-child(4) > a') // atk dan fotokopi
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .get('#index-kategori > .kategoriicon > :nth-child(5) > a') //alat peraga dan pendidikan
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .get('#index-kategori > .kategoriicon > :nth-child(6) > a') //peralatan kesehatan sekolah
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .wait(2000)
        .get('#index-kategori > .kategoriicon > :nth-child(7) > a') //meubelair
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .get('#index-kategori > .kategoriicon > :nth-child(8) > a') //elektronik dan mekanikal
        .click()
        .wait(2000)
        .get('.breadcrumbs > :nth-child(1) > a > .fa') //kembali ke home
        .click()
        .get('#index-kategori > .kategoriicon > .all-category > .f12') //semua kategori
        .click()

        //.get('.breadcrumbs > :nth-child(2) > a') //ke kategori
        //.click()


        //.get('.relative > .input-text')
        //.click()
        //.clear()
        //.get('.relative > .input-text')
        //.type('jiddan fajar radita')
        //.get('#cb_ttl') 
        //.select('0')
        //.get('#cb_bulan')
        //.select('Juli')
        //.get('#cb_tahun')
        //.select('2000')
        //.get(':nth-child(8) > :nth-child(1) > .checkbox-round > .checkmark')
        //.click()
        //.get('.large-4 > form.ng-valid > .button')
        //.click();
        //cy
        //.get('app-user-menu > :nth-child(3) > :nth-child(2) > a')
        //.click()
        //.get('.mt15.large-12 > .input-text')
        //.clilck()
        //.clear()
        //.get('.mt15.large-12 > .input-text') //merubah nama sekolah
        //.type('SMPN contoh 1') //gak berubah!!
        //.get(':nth-child(1) > :nth-child(3) > .input-text') //merubah nomor pokok sekolah nasional
        //.clear()
        //.type('1234')
        //.get(':nth-child(1) > :nth-child(4) > .input-text')//merubah NPWP
        //.clear()
        //.type('1234')
        //.get('#cb_prop1') //merubah jenjang sekolah
        //.select('Sekolah Lanjutan Tingkat Pertama (SLTP)')
        //.click()
        //.get(':nth-child(6) > .input-text') //merubah status sekolah
        //.clear()
        //.type('234')
        //.get(':nth-child(7) > .input-text') //meubah nomer hp sekolah
        //.clear()
        //.type('123456789')
        //.get(':nth-child(8) > .input-text') // merubah email
        //.clear()
        //.wait(10000)
        //type('pembeli@gmail.com')
        //.get('#tx_alamat') //merubah alamat sekolah
        //.clear()
        //.type('rtyrty')
        //.get('.large-8 > .input-text')//merubah nama dusun
        //.clear()
        //.type('zxczxc')
        //.get('.large-8 > .input-text')//merubah rt
        //.clear()
        //.type("01")
        //.get('form.ng-dirty > :nth-child(1) > .grid-x > .medium-6 > .input-text') //merubah rw
        //.clear()
        //.type('10')
        //.get(':nth-child(12) > .input-text')//merubah desa/kelurahan
        //.clear()
        //.type('dsadsa')
        //.get(':nth-child(13) > .input-text')//merubah kode wilayah
        //.clear()
        //.type('123321')
        //.get(':nth-child(14) > .input-text')//merubah kode pos
        //.clear()
        //.type('zxczxc')
        //.get(':nth-child(15) > .input-text')//merubah lintang
        //.clear()
        //.type('zxczxc')
        //.get(':nth-child(16) > .input-text')//merubah bujur
        //.clear()
        //.type('zxczxc')
        })

    })