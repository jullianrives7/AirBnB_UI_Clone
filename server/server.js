const express = require("express");
const cors = require("cors");

// const port = 3000;
// const { Pool } = require("pg");
// const pool = new Pool({
//     user: "postgres",
//     host: "127.0.0.1",
//     database: "airbnb",
//     password: "docker",
//     port: 5432,
// });
const config = require("./config")[process.env.NODE_ENV || "production"];
const PORT = config.port;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/host", (req, res) => {
  async function getHost() {
    try {
      const result = await pool.query("SELECT * FROM host");
      res.status(200).send(result.rows);
    } catch (e) {
      console.error(e.stack);
    }
  }
  getHost();
});

app.get("/host/:id", (req, res) => {
  async function getByIdHost() {
    try {
      const result = await pool.query(
        `SELECT * FROM host WHERE host_id = ${req.params.id}`
      );
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    } catch (e) {
      console.error(e.stack);
    }
  }
  getByIdHost();
});

app.get("/rental", (req, res) => {
  async function getRental() {
    try {
      const result = await pool.query("SELECT * FROM rental");
      res.status(200).send(result.rows);
    } catch (e) {
      console.error(e.stack);
    }
  }
  getRental();
});

app.get("/rental/:id", (req, res) => {
  async function getByIdRental() {
    try {
      const result = await pool.query(
        `SELECT * FROM rental WHERE rental_id = ${req.params.id}`
      );
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    } catch (e) {
      console.error(e.stack);
    }
  }
  getByIdRental();
});

app.get("/review", (req, res) => {
  async function getReview() {
    try {
      const result = await pool.query("SELECT * FROM review");
      res.status(200).send(result.rows);
    } catch (e) {
      console.error(e.stack);
    }
  }
  getReview();
});

app.get("/review/:id", (req, res) => {
  async function getByIdReview() {
    try {
      const result = await pool.query(
        `SELECT * FROM review WHERE review_id = ${req.params.id}`
      );
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    } catch (e) {
      console.error(e.stack);
    }
  }
  getByIdReview();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
