const app = require("./app");
const request = require("supertest");

describe("express test", () => {
  it("hello world Test", done => {
    request(app)
      .get("/hello")
      .then(res => {
        expect(res.text).toEqual("world");
        done();
      });
  });

  it("bye world Test", done => {
    request(app)
      .get("/bye")
      .then(res => {
        expect(res.text).toEqual("world");
        done();
      });
  });
});