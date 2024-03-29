// const https = require("https");
// const express = require("express");
// const cors = require("cors");
// const { Client } = require("pg");

// const config = require("./config")[process.env.NODE_ENV || "production"];
// const PORT = config.port;

// const client = new Client({
//   connectionString: config.connectionString,
// });

// client.connect();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/api/all_hosts", (req, res) => {
//   client
//     .query("SELECT * FROM host")
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/host/:id", (req, res) => {
//   client
//     .query(`SELECT * FROM host WHERE host_id = ${req.params.id}`)
//     .then((result) => {
//       if (result.rows.length == 0) {
//         res.sendStatus(404);
//       } else {
//         res.status(200).send(result.rows[0]);
//       }
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/all_rentals", (req, res) => {
//   client
//     .query("SELECT * FROM rental")
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/rental/:id", (req, res) => {
//   client
//     .query(`SELECT * FROM rental WHERE rental_id = ${req.params.id}`)
//     .then((result) => {
//       if (result.rows.length == 0) {
//         res.sendStatus(404);
//       } else {
//         res.status(200).send(result.rows[0]);
//       }
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/all_reviews", (req, res) => {
//   client
//     .query("SELECT * FROM review")
//     .then((result) => {
//       res.status(200).send(result.rows);
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/review/:id", (req, res) => {
//   client
//     .query(`SELECT * FROM review WHERE review_id = ${req.params.id}`)
//     .then((result) => {
//       if (result.rows.length == 0) {
//         res.sendStatus(404);
//       } else {
//         res.status(200).send(result.rows[0]);
//       }
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/all_photos", (req, res) => {
//   client
//     .query("SELECT * FROM photo")
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((e) => console.error(e.stack));
// });

// app.get("/api/photo/:id", (req, res) => {
//   client
//     .query(`SELECT * FROM photo WHERE photo_id = ${req.params.id}`)
//     .then((result) => {
//       if (result.rows.length == 0) {
//         res.sendStatus(404);
//       } else {
//         res.status(200).send(result.rows[0]);
//       }
//     })
//     .catch((e) => console.error(e.stack));
// });

// // Pings server every 30 secs to keep alive
// const keepAlive = () => {
//   setTimeout(() => {
//     console.log("Pinging server to keep alive...");
//     https.get("https://fec-api-server-lpsg.onrender.com");
//     keepAlive();
//   }, 30 * 1000); // 30 secs
// };

// app.listen(PORT, () => {
//   console.log(`Our app is running on port: ${PORT}`);
//   keepAlive();
// });

// app.timeout = 0;

const https = require("https");
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const config = require("./config")[process.env.NODE_ENV || "production"];
const PORT = config.port;

const pool = new Pool({
  connectionString: config.connectionString,
  connect_timeout: 5000, // 5 seconds
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
});

pool.connect();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/all_hosts", (req, res) => {
  pool
    .query("SELECT * FROM host")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/host/:id", (req, res) => {
  pool
    .query(`SELECT * FROM host WHERE host_id = ${req.params.id}`)
    .then((result) => {
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/all_rentals", (req, res) => {
  pool
    .query("SELECT * FROM rental")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/rental/:id", (req, res) => {
  pool
    .query(`SELECT * FROM rental WHERE rental_id = ${req.params.id}`)
    .then((result) => {
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/all_reviews", (req, res) => {
  pool
    .query("SELECT * FROM review")
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/review/:id", (req, res) => {
  pool
    .query(`SELECT * FROM review WHERE review_id = ${req.params.id}`)
    .then((result) => {
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/all_photos", (req, res) => {
  pool
    .query("SELECT * FROM photo")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((e) => console.error(e.stack));
});

app.get("/api/photo/:id", (req, res) => {
  pool
    .query(`SELECT * FROM photo WHERE photo_id = ${req.params.id}`)
    .then((result) => {
      if (result.rows.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result.rows[0]);
      }
    })
    .catch((e) => console.error(e.stack));
});

// Pings server every 30 secs to keep alive
const keepAlive = () => {
  setTimeout(() => {
    console.log("Pinging server to keep alive...");
    https.get("https://fec-api-server-lpsg.onrender.com");
    keepAlive();
  }, 30 * 1000); // 30 secs
};

app.listen(PORT, () => {
  console.log(`Our app is running on port: ${PORT}`);
  keepAlive();
});
