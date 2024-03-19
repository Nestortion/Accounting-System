import express from 'express'
import accountRouter from './routes/accounts.routes'
import usersRouter from './routes/users.routes'
import employeesRouter from './routes/employees.routes'

const app = express()

//route for all account actions
app.use('/accounts',accountRouter)

//route for all employee actions
app.use('/employees',employeesRouter)

//route for all user actions
app.use('/users',usersRouter)



app.listen(3000,()=>console.log('listening to port 3000'))