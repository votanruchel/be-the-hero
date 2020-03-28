const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('ONG',() =>{
    beforeAll(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })
    let ONGid,incidentId;
    it('should be able to create a new ONG', async () =>{
        const responseONG = await request(app)
        .post('/ongs')
        .send({
            name: "ONG Name",
            email: "contact@ong.com.br",
            whatsapp: "54545454544",
            city: "Rio Grande do Sul",
            uf: "RS"
        });
        expect(responseONG.body).toHaveProperty('id');
        expect(responseONG.body.id).toHaveLength(8);
        ONGid = responseONG.body.id;
    });

    it('should be able create a new Incident', async () =>{
        const response = await request(app)
        .post('/incidents')
        .set({authorization: ONGid})
        .send({
            title: "Test Incident",
            description: "Description of test incident",
            value: 99
        });
        expect(response.body).toHaveProperty('id');
        incidentId = response.body.id;
    })

    it('should be able delete Incident', async () =>{
         await request(app)
        .delete(`/incidents/${incidentId}`)
        .set({authorization: ONGid})
        .expect(204);
    })
    
    
})