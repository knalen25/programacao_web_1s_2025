const calc = require('./calculadora.js')
const express = require('express')

const app = express()

app.get('/somar/:a/:b', (req, res)=>{
    res.send(calc.somar(parseFloat(req.params.a), parseFloat(req.params.b)).toString())
})

app.get('/subtrair/:a/:b', (req, res)=>{
    res.send(calc.subtrair(parseFloat(req.params.a), parseFloat(req.params.b)).toString())
})

app.get('/multiplicar/:a/:b', (req, res)=>{
    res.send(calc.multiplicar(parseFloat(req.params.a), parseFloat(req.params.b)).toString())
})

app.get('/dividir/:a/:b', (req, res)=>{
    res.send(calc.dividir(parseFloat(req.params.a), parseFloat(req.params.b)).toString())
})



const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`servidor rodando em  http://localhost:${PORT}`)
})
