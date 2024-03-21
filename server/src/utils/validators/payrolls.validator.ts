import z from "zod";

//validator for POST /payrolls input
export const createValidator = z.object({
  prEmployeeId: z.string().superRefine((val, ctx) => {
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
  }),
  prTotalDeduction: z.number(),
  prDateFrom: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  prDateTo: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  prFinalAmount: z.number(),
});

//validator for PUT /payrolls input
export const updateValidator = z.object({
  prId: z.string().superRefine((val, ctx) => {
    if (val.split(" ")[0] !== "prId") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Not an payroll id.`,
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
    prEmployeeId: z
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
    prTotalDeduction: z.number().optional(),
    prDateFrom: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    prDateTo: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    prFinalAmount: z.number().optional(),
  }),
});
