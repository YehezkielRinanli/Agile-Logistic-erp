import WarehouseStock from '../models/warehouse_stock.js';

export const createTransfer = async (req, res) => {
    try {
        const { gudang_asal, gudang_tujuan, kuantitas, product_id } = req.body;

        // Validasi standar: Kuantitas tidak boleh minus atau nol
        if (kuantitas <= 0) {
            return res.status(400).json({ success: false, message: "Kuantitas transfer harus lebih dari 0!" });
        }

        // Simpan data mutasi transfer ke database
        const newTransfer = await WarehouseStock.create({
            gudang_asal,
            gudang_tujuan,
            kuantitas,
            product_id
        });

        res.status(201).json({
            success: true,
            message: `Transfer barang dari ${gudang_asal} ke ${gudang_tujuan} berhasil dicatat!`,
            data: newTransfer
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};