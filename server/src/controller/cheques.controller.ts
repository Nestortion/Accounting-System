import { Request, Response } from "express";
import {
  addCheque,
  editCheque,
  getAllCheques,
} from "../database/services/cheques.service";
import z from "zod";

export const getCheques = async (req: Request, res: Response) => {
  try {
    const cheques = await getAllCheques();
    return res.status(200).send({ cheques });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const createCheque = async (req: Request, res: Response) => {
  const inputSchema = z.object({
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

  const input = inputSchema.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid inputs" });

  try {
    const newChqId = `chqId ${crypto.randomUUID()}`;

    const newCheque = await addCheque({ ...input.data, chqId: newChqId });

    return res.status(200).send({ cheque: newCheque });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
export const updateCheque = async (req: Request, res: Response) => {
  const inputSchema = z.object({
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

  const input = inputSchema.safeParse(req.body);

  if (!input.success) return res.status(400).send({ error: "invalid inputs" });

  try {
    const updatedChq = await editCheque({
      chqId: input.data.chqId,
      newData: input.data.newData,
    });

    return res.status(200).send({ cheque: updatedChq });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
