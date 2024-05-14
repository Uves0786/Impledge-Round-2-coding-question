describe('Package Management', () => {
    beforeEach(() => {
      // Visit the page where package management is available
      cy.visit('https://ecs-qa.kloudship.com/dashboard/store/all/packageType');
    });
  
    it('should add a package', () => {
      // Find and click on the "Add Package" button
      cy.get('.add-package-button').click();
  
      // Fill in the package details
      cy.get('input[name="packageName"]').type('New Package');
      cy.get('input[name="packageVersion"]').type('1.0.0');
      cy.get('input[name="packageDescription"]').type('This is a new package.');
  
      // Submit the form
      cy.get('.submit-button').click();
  
      // Wait for the success message or any indication that the package has been added
      cy.contains('Package added successfully').should('be.visible');
    });
  
    it('should delete a package', () => {
      // Find and click on the package you want to delete
      cy.contains('Existing Package').parent().find('.delete-button').click();
  
      // Confirm the deletion
      cy.get('.confirm-delete-button').click();
  
      // Wait for the success message or any indication that the package has been deleted
      cy.contains('Package deleted successfully').should('be.visible');
    });
  });
  
