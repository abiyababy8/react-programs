//creating JSON server

// 1) import JSON server library
const jsonServer = require('json-server')

// 2) create json server using create() method
const toDoListServer = jsonServer.create()

// 3) connect jsonServer with db.json
const router = jsonServer.router('db.json')

// 4) create a middleware that process request and response
const middleware = jsonServer.defaults()

// 5) use middleware
toDoListServer.use(middleware)

// 6) use router
toDoListServer.use(router)

const PORT = 5000;
 
// running the toDoListServer
toDoListServer.listen(PORT,()=>{
    console.log("toDoListServer is running in",PORT)
})