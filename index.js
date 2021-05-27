// import the required modules
const express = require('express') // <---- express is a function now

// configure the express app
const app = express(); // <--- app is an object
const PORT = 3000;
// app middlewares
app.use(express.urlencoded({ extended: true}))

//define our routes
app.get ('/', (req, res) => {
//    console.log('hello world')
    
})

app.get('/add/:x/:y', (req, res) =>{
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x + y}`)

})
app.get('/subtract/:x/:y', (req, res) =>{
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x - y}`)

})

app.get('/multiply/:x/:y', (req, res) =>{
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x * y}`)

})

app.get('/divide/:x/:y', (req, res) =>{
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x / y}`)

})





app.get("/*", function(req, res) {
    let math=req.query.math
    let nums = req.params[0].split('/')
    nums = nums.map(num => parseInt(num))
    switch(math) {
        case 'add':
            res.send(`${nums.reduce((a,b) => a + b)}`)
            break
        case 'subtract':
            res.send(`${nums.reduce((a,b) => a - b)}`)
            break
        case 'multiply':
            res.send(`${nums.reduce((a,b) => a * b)}`)
            break
        case 'divide':
            res.send(`${nums.reduce((a,b) => a / b)}`)
            break
    }

  });

app.listen(PORT, () => {
    console.log(`port ${PORT} is being used`)
})
