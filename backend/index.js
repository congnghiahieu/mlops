import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import fileupload from 'express-fileupload'
import helmet from 'helmet'
import cors from 'cors'
import createError from 'http-errors'
import routes from '#api/routes/index.js'
import config from '#src/config/config.js'
import morgan from 'morgan'

const app = express()

// middlewares
const allowedOrigins = [config.webServiceAddr, config.mlServiceAddr]
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  })
)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(fileupload())
app.use(morgan('tiny'))

app.use(routes)
app.use((req, res, next) => {
  next(createError(404, 'This route does not exist'))
})

app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  })
})

mongoose.set('strictQuery', true)
mongoose
  .connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB')
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
