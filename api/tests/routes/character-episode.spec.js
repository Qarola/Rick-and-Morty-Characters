const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Episode, Character, conn } = require("../../src/db.js");

const agent = session(app);
const character = {
  name: "Rick Sanchez",
  gender: "male",
};

describe("Character routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  beforeEach(() => Character.sync({ force: true }));

  describe("GET /characters", () => {
    it("should get 200", () => {
      agent.post("/characters").send(character); // agent library...simula los request.
      agent.get("/characters").expect(200);
    }).timeout(10000);
  });
  describe("GET /characters?name=rick", () => {
    it("should get 200", () =>
      agent.get("/characters?name=summer").expect(200)).timeout(10000);
  });
  describe("GET /characters/:id", () => {
    it("should get 200", () =>
      agent.get("/characters/75").expect(200)).timeout(10000);
  });
});

describe("Episodes routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to tha database:", err);
    })
  );
  beforeEach(() => Episode.sync({ force: true }));
  describe("GET /episodes", () => {
    it("should get 200", () => agent.get("/episodes").expect(200)).timeout(10000);
  });
});
