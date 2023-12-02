const { faker } = require('@faker-js/faker');

class ContribuyentesService {

    constructor() {
        this.contribuyentes = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.contribuyentes.push({
                id: faker.string.uuid(),
                nombre: faker.commerce.productName(),
                codigocontribuyente: parseInt(faker.commerce.price(), 10),
                image: faker.image.url(),

            });

        }   
    }

    create() {

    }

    find() {
        return this.contribuyentes;
    }

    findOne() {

    }

    update() {

    }

    delete() {

    }
}

module.exports = ContribuyentesService;