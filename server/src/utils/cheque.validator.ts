import z from "zod";

//validator for POST /cheques inputs
export const createValidator = z.object({
  chqPayeeName: z.string(),
  chqAmount: z.number(),
  chqIssueDate: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  chqDescription: z.string(),
  chqStatus: z.enum(["APPROVED", "PENDING", "REJECTED"]),
  chqAccId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "accId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an account id.`,
      });
    }
    if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not valid uuid.`,
      });
    }
  }),
  chqCreatedAt: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  chqUpdatedAt: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
});

//validor for PUT /cheques input
export const updateValidator = z.object({
  chqId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "chqId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an account id.`,
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
    chqPayeeName: z.optional(z.string()),
    chqAmount: z.optional(z.number()),
    chqIssueDate: z.optional(
      z
        .string()
        .datetime()
        .transform((date) => new Date(date))
    ),
    chqDescription: z.optional(z.string()),
    chqStatus: z.optional(z.enum(["APPROVED", "PENDING", "REJECTED"])),
    chqAccId: z.optional(
      z.string().superRefine((val, ctx) => {
        if (val.split(" ")[0] !== "accId") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Not an account id.`,
          });
        }
        if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Not valid uuid.`,
          });
        }
      })
    ),
    chqCreatedAt: z.optional(
      z
        .string()
        .datetime()
        .transform((date) => new Date(date))
    ),
    chqUpdatedAt: z.optional(
      z
        .string()
        .datetime()
        .transform((date) => new Date(date))
    ),
  }),
});
