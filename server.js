const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'frontend', 'assets')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, "/favicon.ico"))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
})

// app.get('/styles.css', (req, res) => {
//   res.sendFile(path.join(__dirname, "/styles.css"))
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, "/404.html"))
// })

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})