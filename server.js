const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// Routes
const userRoutes = require('./routes/user.routes');
const productsRouter = require('./routes/products.routes');

app.use('/api/users', userRoutes);
app.use('/api/products', productsRouter);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
