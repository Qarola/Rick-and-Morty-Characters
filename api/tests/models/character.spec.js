const { Character, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Character model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Character.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Character.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      }).timeout(10000);
      it('should work when its a valid name', () => {
        Character.create({ name: 'Rick Sanchez' });
      });
    });
    describe('gender', () => {
      it('should throw an error if gender is null', (done) => {
        Character.create({ name: 'Rick Sanchez' })
        .then(() => done(new Error('It requires a gender')))
        .catch(() => done())
      }).timeout(10000);
      it('should work when its a valid name and gender', () => {
       Character.create({ name: 'Rick Sanchez', gender: 'male'})
      }).timeout(10000);
    });
  });
});

