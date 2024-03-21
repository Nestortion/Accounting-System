import z from "zod";

//validator for POST /users inputs
export const createValidator = z.object({
  userType: z.enum(["FINANCE", "HIGHER_DEPARTMENT"]),
  userUsername: z.string(),
  userPassword: z.string(),
});

//validator for PUT /users inputs
export const updateValidator = z.object({
  userId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "userId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an user id.`,
      });
    }
    if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not valid uuid.`,
      });
    }
  }),
  newData: z.object({
    userType: z.enum(["FINANCE", "HIGHER_DEPARTMENT"]),
    userUsername: z.string().optional(),
    userPassword: z.string().optional(),
  }),
});

//validator for PUT /users/:userId params
export const toggleIsActiveValidator = z.object({
  userId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "userId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an user id.`,
      });
    }
    if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not valid uuid.`,
      });
    }
  }),
});
