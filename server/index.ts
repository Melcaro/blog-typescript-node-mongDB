import express from 'express';
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

