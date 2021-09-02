const express = require('express');
const routesAPI = require('./routes/routesAPI');
const routesHTML = require('./routes/routesHTML');
const app = express();
const PORT = process.env.port || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', routesAPI);
app.use('/', routesHTML);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);