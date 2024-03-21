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

const app = express();

app.use(express.json());

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
