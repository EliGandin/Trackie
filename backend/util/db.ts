import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  password: "password",
  port: 5432,
});

export default pool;
