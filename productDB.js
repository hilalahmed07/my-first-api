const connectDB = require('./db/connect');
const Product = require('./models/product');
const ProductJson = require('./products.json');

const start = async () => {
    try {
        await connectDB();
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log('Success: Products inserted');

        // No need to log this line, as it returns a promise
        // console.log(Product.create(ProductJson));

    } catch (e) {
        console.error('Error:', e.message);
    }
}

start();
