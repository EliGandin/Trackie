import { validate } from "email-validator";
import db from "./db";

// const isValidEmail: boolean (email:string) : boolean => {
//     if (validate(email) === true) {
//             // Checking unique email //TODO:
//     const data = await db.query(
//         "SELECT user_id FROM users WHERE email = ($1)",
//         [email]
//       );

//       if (!data.rowCount) {
//         return true
//       }
//     }

//     return false
// }

const isValidEmail = async (email: string) => {
  if (!validate(email)) {
    return false;
  }

  const { rowCount } = await db.query(
    "SELECT user_id FROM users WHERE email = ($1)",
    [email]
  );

  return !rowCount;
};

export default isValidEmail;
