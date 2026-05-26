import Product from '../models/product.js';

// Fungsi untuk memasukkan data produk baru
export const createProduct = async (req, res) => {
    try {
        const { nama_produk, sku } = req.body;
        
        // Simpan ke MySQL lewat Sequelize
        const newProduct = await Product.create({ nama_produk, sku });
        
        res.status(201).json({
            success: true,
            message: "Data produk baru berhasil dimasukkan ke sistem!",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: "Gagal memasukkan produk: " + error.message 
        });
    }
};