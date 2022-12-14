const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');
const Product = require('../models/product');

const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({}, 'name des price image');
  } catch (err) {
    return next(
      new HttpError('Fatching users failed, please try again later.', 500)
    );
  }
  res.json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

const getProductById = async (req, res, next) => {
  const prodactId = req.params.pid;
  let product;
  try {
    product = await Product.findById(prodactId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a product.',
      500
    );
    return next(error);
  }

  if (!product) {
    return next(
      new HttpError('Could not find a product for the provided id.', 404)
    );
  }

  res.json({ product: product.toObject({ getters: true }) });
};

const createProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, des, price, image } = req.body;

  const createdProduct = new Product({
    name,
    des,
    price,
    image,
  });

  try {
    await createdProduct.save();
  } catch (err) {
    const error = new HttpError(
      'Creating product failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ product: createdProduct.toObject({ getters: true }) });
};

const updateProductById = async (req, res, next) => {
  const { name, des, price, image } = req.body;
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update product', 500)
    );
  }

  product.name = name;
  product.des = des;
  product.price = price;
  product.image = image;

  try {
    await product.save();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update product', 500)
    );
  }

  res.status(200).json({ product: product.toObject({ getters: true }) });
};

const deleteProductById = async (req, res, next) => {
  const productId = req.params.pid;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete product', 500)
    );
  }
  try {
    await product.remove();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete product', 500)
    );
  }
  res.status(200).json({ message: 'Deleted product.' });
};

exports.getAllProducts = getAllProducts;
exports.getProductById = getProductById;
exports.createProduct = createProduct;
exports.updateProductById = updateProductById;
exports.deleteProductById = deleteProductById;
