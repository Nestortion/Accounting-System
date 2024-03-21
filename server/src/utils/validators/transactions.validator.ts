import z from "zod";

//validator for POST /transactions inputs
export const createValidator = z.object({
  tranAccId: z.string().superRefine((val, ctx) => {
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
  tranDescription: z.string(),
  tranAmount: z.number(),
  tranEmpId: z
    .string()
    .superRefine((val, ctx) => {
      if (val.split(" ")[0] !== "empId") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Not an employee id.`,
        });
      }
      if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Not valid uuid.`,
        });
      }
    })
    .optional(),
  tranCustId: z
    .string()
    .superRefine((val, ctx) => {
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
    })
    .optional(),
  tranVdId: z
    .string()
    .superRefine((val, ctx) => {
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
    })
    .optional(),
  tranTransactionDate: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  tranCreatedAt: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  tranUpdatedAt: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
});

//validator for PUT /transactions inputs
export const updateValidator = z.object({
  tranId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "tranId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an transaction id.`,
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
    tranAccId: z
      .string()
      .superRefine((val, ctx) => {
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
      .optional(),
    tranDescription: z.string().optional(),
    tranAmount: z.number().optional(),
    tranEmpId: z
      .string()
      .superRefine((val, ctx) => {
        if (val.split(" ")[0] !== "empId") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Not an employee id.`,
          });
        }
        if (!z.string().uuid().safeParse(val.split(" ")[1]).success) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Not valid uuid.`,
          });
        }
      })
      .optional(),
    tranCustId: z
      .string()
      .superRefine((val, ctx) => {
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
      })
      .optional(),
    tranVdId: z
      .string()
      .superRefine((val, ctx) => {
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
      })
      .optional(),
    tranTransactionDate: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    tranCreatedAt: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    tranUpdatedAt: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
  }),
});
