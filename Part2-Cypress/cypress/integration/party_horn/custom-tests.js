describe('Party Horn Tests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
    });
  
    it('First Test', () => {
      expect(true).to.equal(true);
    });

    // TESTS FOR IMAGE SOURCE AND SOUND UPDATING

    it('Test if image and audio src change for Car', () => {
        cy.get('#radio-car-horn').click();
        cy.get('#sound-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/images/car.svg');
        });
        cy.get('#horn-sound').then($el => {
          expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
        });
    });

    it('Test if image and audio src change for Air Horn', () => {
        cy.get('#radio-air-horn').click();
        cy.get('#sound-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
        });
        cy.get('#horn-sound').then($el => {
          expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3');
        });
    });

    it('Test if image and audio src change for Party Horn', () => {
        cy.get('#radio-party-horn').click();
        cy.get('#sound-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
        });
        cy.get('#horn-sound').then($el => {
          expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
        });
    });

    // TEST FOR THE SLIDER VALUE UPDATED THE VOLUME IMAGE

    it('Test if volume-image goes from level 0 to level 1 from 0 to 1', () => {
        cy.get('#volume-slider').invoke('val', 0).trigger('input');
        cy.get('#volume-image').then($el => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
        });
        cy.get('#volume-slider').invoke('val', 1).trigger('input');
        cy.get('#volume-image').then($el => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
        });
    });

    it('Test if volume-image goes from level 1 to level 2 from 33 to 34', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get('#volume-image').then($el => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
        });
        cy.get('#volume-slider').invoke('val', 34).trigger('input');
        cy.get('#volume-image').then($el => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
        });
    });

    it('Test if volume-image goes from level 2 to level 3 from 66 to 67', () => {
        cy.get('#volume-slider').invoke('val', 66).trigger('input');
        cy.get('#volume-image').then($el => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
        });
        cy.get('#volume-slider').invoke('val', 67).trigger('input');
        cy.get('#volume-image').then($el => {
            expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
        });
    });

    // TESTS IF VOLUME BUTTON IS DISABLED WHEN VOLUME IS PASSED EMPTY VALUE

    it('Test if honk-btn is disabled when volume-slider is at 0', () => {
        cy.get('#volume-number').invoke('val', "").trigger('input');
        cy.get('#honk-btn').then($el => {
          expect($el).to.have.attr('disabled');
        });
        cy.get('#volume-number').invoke('val', "A").trigger('input');
        cy.get('#honk-btn').then($el => {
          expect($el).to.have.attr('disabled');
        });
        cy.get('#volume-number').invoke('val', NaN).trigger('input');
        cy.get('#honk-btn').then($el => {
          expect($el).to.have.attr('disabled');
        });
    });

    // TEST IF ERROR THROUGH WHEN NUMBER OUTSIDE RANGE IS GIVE FOR SLIDER

    it('Test if error is thrown when number given outside range', () => {
        cy.get('#volume-number').invoke('val', 101).trigger('input');
        cy.get('input:invalid').should('have.length', 1);
        cy.get('#volume-number').then(($input) => {
            expect($input[0].validationMessage).to.eq('Value must be less than or equal to 100.')
        })
    })

  });