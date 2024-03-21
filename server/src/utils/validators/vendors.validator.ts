import z from "zod";

//validator for POST /vendors input
export const createValidator = z.object({
  vdName: z.string(),
  vdAddress: z.string(),
  vdContactInfo: z.string(),
  vdEmail: z.string().email(),
});

//validator for PUT /vendors input
export const updateValidator = z.object({
  vdId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "vdId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an vendor id.`,
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
    vdName: z.string().optional(),
    vdAddress: z.string().optional(),
    vdContactInfo: z.string().optional(),
    vdEmail: z.string().email().optional(),
  }),
});

//validator for PUT /vendors params
export const toggleIsActiveValidator = z.object({
  vdId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "vdId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an vendor id.`,
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
