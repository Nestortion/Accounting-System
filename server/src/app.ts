import express from "express";
import accountRouter from "./routes/accounts.routes";
import employeesRouter from "./routes/employees.routes";
import usersRouter from "./routes/users.routes";
import chequeRouter from "./routes/cheque.routes";
import inventoryRouter from "./routes/inventory.routes";
import payrollRouter from "./routes/payrolls.routes";
import transactionRouter from "./routes/transactions.routes";
import vendorRouter from "./routes/vendors.routes";
import customerRouter from "./routes/customers.routes";
import cors from "cors";
import MongoStore from "connect-mongo";
import session from "express-session";
import "dotenv/config";
import { authMiddleware } from "./utils/middlewares/auth.middleware";
import { login } from "./controller/login.controller";
import { logout } from "./controller/logout.controller";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(
  session({
    store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/" }),
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

app.post("/login", login);

app.post("/logout", logout);

app.use(authMiddleware);

//route for all account actions
app.use("/accounts", accountRouter);

//route for all employee actions
app.use("/employees", employeesRouter);

//route for all customer actions
app.use("/customers", customerRouter);

//route for all user actions
app.use("/users", usersRouter);

//route for all cheque actions
app.use("/cheques", chequeRouter);

//route for all inventory actions
app.use("/inventory", inventoryRouter);

//route for all payroll actions
app.use("/payrolls", payrollRouter);

//route for all transaction actions
app.use("/transactions", transactionRouter);

//route for all vendor actions
app.use("/vendors", vendorRouter);

export default app;
