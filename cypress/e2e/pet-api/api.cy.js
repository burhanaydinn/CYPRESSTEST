/// <reference types="cypress" />
import ApiHelper from "../apiHelper";

describe('Pet API Tests', () => {
    const apiHelper = new ApiHelper();
    const apiUrl = 'https://petstore.swagger.io/v2';

    it('POST - Create Pet To Store', () => {
        cy.request({
            method: 'POST',
            url: apiUrl+'/pet',
            headers: apiHelper.header(),
            body: apiHelper.petData("10","TestPateName","available")
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });   

    it('GET - Find Pet ID', () => {
        const petId = "10"
        cy.request({
            method: 'GET',
            url: apiUrl+'/pet/'+petId,
            headers: apiHelper.header(),
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });   

    it('GET - Undifined Pet ID', () => {
        const petId = "10101010101010"
        cy.request({
            method: 'GET',
            url: apiUrl+'/pet/'+petId,
            headers: apiHelper.header(),
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });   
    
    it('PUT - Update Pet Info', () => {
        cy.request({
            method: 'PUT',
            url: apiUrl+'/pet',
            headers: apiHelper.header(),
            body: apiHelper.petData("10","TestPateName","available")
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });  

    it('DELETE - Delete Pet', () => {
        const petId = "10"
        cy.request({
            method: 'DELETE',
            url: apiUrl+'/pet/'+petId,
            headers: apiHelper.header(),
        }).then((response) => {
            expect(response.status).to.eq(200); 
        });
    });   

});