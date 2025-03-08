//creating JSON server

// 1) import JSON server library
const jsonServer = require('json-server')

// 2) create json server using create() method
const mediaPlayerServer = jsonServer.create()

// 3) connect jsonServer with db.json
const router = jsonServer.router('db.json')

// 4) create a middleware that process request and response
const middleware = jsonServer.defaults()

// 5) use middleware
mediaPlayerServer.use(middleware)

// 6) use router
mediaPlayerServer.use(router)

const PORT = 5000;
 
// running the mediaPlayerServer
mediaPlayerServer.listen(PORT,()=>{
    console.log("mediaPlayerServer is running in",PORT)
})