/// <reference types="cypress" />
import ApiHelper from "../apiHelper";

describe('Petstore API Tests', () => {
    const apiHelper = new ApiHelper();
    const apiUrl = 'https://petstore.swagger.io/v2';

    it('POST - Create an order', () => {
        cy.request({
            method: 'POST',
            url: apiUrl+'/store/order',
            headers: apiHelper.header(),
            body: apiHelper.orderData("10","10","10")
        }).then((response) => {
            expect(response.status).to.eq(200); 
        });
    });

    it('GET - Get an order', () => {
        const id = 10;
        cy.request({
            method: 'GET',
            url: apiUrl+'/store/order/'+id,
            headers: apiHelper.header(),
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('GET - Get Undifined Id', () => {
        const id = 1000;
        cy.request({
            method: 'GET',
            url: apiUrl+'/store/order/'+id,
            headers: apiHelper.header(),
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('DELETE - Delete Order Id', () => {
        const deleteId = 10;
        cy.request({
            method: 'DELETE',
            url: apiUrl+'/store/order/'+deleteId,
            headers: apiHelper.header()
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('DELETE - Delete Undifined Order Id', () => {
        const deleteId = 100;
        cy.request({
            method: 'DELETE',
            url: apiUrl+'/store/order/'+deleteId,
            headers: apiHelper.header(),
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });


    
});