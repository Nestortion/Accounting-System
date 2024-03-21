import z from "zod";

//validator for POST /customers input
export const createValidator = z.object({
  custName: z.string(),
  custAddress: z.string(),
  custContactInfo: z.string(),
  custEmail: z.string().email(),
});

//validator for PUT /customers input
export const updateValidator = z.object({
  custId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "custId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an customer id.`,
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
    custName: z.string().optional(),
    custAddress: z.string().optional(),
    custContactInfo: z.string().optional(),
    custEmail: z.string().email().optional(),
    custIsActive: z.boolean().optional(),
  }),
});

//validator for PUT /customers/:custId params
export const toggleIsActiveValidator = z.object({
  custId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "custId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an customer id.`,
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
