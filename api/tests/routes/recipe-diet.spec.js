const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, Diet, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  name: "Milanesa a la napolitana",
  summary: "milanesa a la napolitana",
};

describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  beforeEach(() => Recipe.sync({ force: true }));

  describe("GET /recipes", () => {
    it("should get 200", () => {
      agent.post("/recipe").send(recipe); // agent library...simula los request.
      agent.get("/recipes").expect(200);
    }).timeout(10000);
  });
  describe("GET /recipes?name=abc", () => {
    it("should get 200", () =>
      agent.get("/recipes?name=milanesa").expect(200)).timeout(10000);
  });
  describe("GET /recipes/:id", () => {
    it("should get 200", () =>
      agent.get("/recipes/756314").expect(200)).timeout(10000);
  });
  describe("POST /recipe", () => {
    it("should get 200", () => {
      agent
        .post("/recipe")
        .send({ name: "pasta", summary: "pasta with pasta" })
        .expect(200);
    }).timeout(10000);
  });
});

describe("Diets routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to tha database:", err);
    })
  );
  beforeEach(() => Diet.sync({ force: true }));
  describe("GET /types", () => {
    it("should get 200", () => agent.get("/types").expect(200)).timeout(10000);
  });
});
