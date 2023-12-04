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

    create(data) {
        const newContribuyente = {
            id: faker.string.uuid(),
            ...data
        }
        this.contribuyentes.push(newContribuyente);
        return newContribuyente
    }

    find() {
        return this.contribuyentes;
    }

    findOne(id) {
        return this.contribuyentes.find(item => item.id === id);
    }

    update(id, changes) {
        const index = this.contribuyentes.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error ('contribuyente not found');
        }
        const contribuyente = this.contribuyentes[index];
        this.contribuyentes[index] = {
            ...contribuyente,
            ...changes
        };
        return this.contribuyentes[index];
    }

    delete(id) {
        const index = this.contribuyentes.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error ('product not found');
        }
        this.contribuyentes.splice(index, 1);
        return { id };
    }
}

module.exports = ContribuyentesService;