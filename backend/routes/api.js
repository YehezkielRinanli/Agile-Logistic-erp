import express from 'express';
import { createProduct } from '../controllers/product_controller.js';
import { createTransfer } from '../controllers/transfer_controller.js'; // 👈 Import baru

const router = express.Router();

// Endpoint 1: Memasukkan data produk baru
router.post('/products', createProduct);

// Endpoint 2: Melakukan transfer barang antar gudang (POST http://localhost:5000/api/transfers)
router.post('/transfers', createTransfer);

export default router;