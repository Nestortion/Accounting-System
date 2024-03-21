import z from "zod";

//validator for POST /inventory input
export const createValidator = z.object({
  invAssetName: z.string(),
  invStocks: z.number(),
  invStatus: z.enum(["GOOD", "WARNING", "DEPLETED"]),
});

//validator for PUT /inventory input
export const updateValidator = z.object({
  invId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "invId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an inventory id.`,
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
    invAssetName: z.string(),
    invStocks: z.number(),
    invStatus: z.enum(["GOOD", "WARNING", "DEPLETED"]),
  }),
});
