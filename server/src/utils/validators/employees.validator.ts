import z from "zod";

//validator for POST /employees input
export const createValidator = z.object({
  empName: z.string(),
  empAddress: z.string(),
  empContactInfo: z.string(),
  empEmail: z.string().email(),
  empBirthdate: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  empDateHired: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  empDateTerminated: z
    .string()
    .datetime()
    .transform((date) => new Date(date)),
  empSalary: z.number(),
});

//validator for PUT /employees input
export const updateValidator = z.object({
  empId: z.string().superRefine((val, ctx) => {
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
  newData: z.object({
    empName: z.string().optional(),
    empAddress: z.string().optional(),
    empContactInfo: z.string().optional(),
    empEmail: z.string().email().optional(),
    empBirthdate: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    empDateHired: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    empDateTerminated: z
      .string()
      .datetime()
      .transform((date) => new Date(date))
      .optional(),
    empSalary: z.number().optional(),
  }),
});

//validator for PUT /employees/:empId params
export const terminateEmpValidator = z.object({
  empId: z.string().superRefine((val, ctx) => {
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
});
