require('dotenv').config()

const express = require('express')
const prismic = require('./server/prismic')

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.APP_PORT || 3000

const app = express()

prismic(app, '/api', '1 day')

// eslint-disable-next-line global-require
const server = isDev && require('./server/develop') || require('./server/production')

server(app).listen(port, '0.0.0.0', () => {
	console.info(`Listening on port ${port}!`)
})
