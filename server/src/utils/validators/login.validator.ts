import z from "zod";

//validator for POST /login
export const loginValidator = z.object({
  username: z.string(),
  password: z.string(),
});
