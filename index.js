import express, { json } from "express";


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
})

app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!')
})

app.get('/numero', (req, res) => {
    res.send('42')
})

app.get('/usuario', (req, res) => {
    res.json({"nombre": "Ana", "edad": 25})
})

app.get('/productos', (req, res) => {
    res.json(["Mouse", "Teclado", "Monitor"])
})

app.get('/materias', (req, res) => {
    res.json([{"nombre": "Matematica"},{"nombre": "Lengua"}])
})


const persona = [];

app.post('/personas', (req, res) => {
    const persona = req.body;
    if (!persona) return res.status(400).json({ error: 'Faltan datos de la persona' });
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

