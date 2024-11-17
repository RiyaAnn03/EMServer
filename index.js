const jsonServer=require('json-server')
const EMServer=jsonServer.create()
const middleware =jsonServer.defaults()
const PORT=3000
const route=jsonServer.router('db.json')
EMServer.use(middleware)
EMServer.use(route)
EMServer.listen(PORT,()=>{
    console.log(`EMServer stared at PORT :${PORT} and waiting for client request!!`);
    
})