const buildDatabase = require("../database/db_build.js");
const getAllPosts = require("../queries/getAllPosts");
const getAllThumbnails = require("../queries/getAllThumbnails");

// These imports are here in case I need to write special SQL queries for tests within this file
const pgPromise = require('pg-promise')();
const { options } = require("../database/db_connection.js");
const dbConn = pgPromise(options);

describe("Unit tests for functions that run database queries", () => {
  beforeAll(async () => {
    await buildDatabase();
  });

  describe("the getAllPosts function", () => {
    it('should return 11 posts', async () => {
      const response = await getAllPosts();
      expect(response.length).toBe(11);
    })
  })

  describe("the getAllThumbnails function", () => {
    it('should return 11 thumbnails', async () => {
      const response = await getAllThumbnails();
      expect(response.length).toBe(11);
    })
  })
})
