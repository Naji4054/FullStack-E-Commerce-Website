const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
require('dotenv').config()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const port = process.env.PORT || 5001;

// middleware
app.use(express.json({limit: "25mb"}));
//app.use((express.urlencoded({limit: "25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin: 'https://lebaba-e-commerce.vercel.app',
  credentials: true
}))

//IMAGE UPLOAD

const uploadImage = require("./src/utils/uploadImage");

//all routes 

const authRoutes = require('./src/users/user.route');
const productRoutes =  require('./src/products/products.route');
const reviewsRouter = require('./src/reviews/reviews.router');
const ordersRoute = require('./src/orders/orders.route');
const statsRoutes = require('./src/stats/stats.route');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewsRouter);
app.use('/api/orders', ordersRoute);
app.use('/api/stats',statsRoutes);
main()
.then(() => console.log("mongodb is successfully connected.")) .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('Lebaba E-commerce Server is running ...!')
  });
}

app.post("/uploadImage", (req, res) => {
uploadImage(req.body.image).then((url) => res.send(url)).catch((error) => res.status(500).send(error));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});