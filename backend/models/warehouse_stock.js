import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Product from './product.js'; // Kita import Model Product untuk relasi nanti

const WarehouseStock = db.define('warehouse_stock', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gudang_asal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gudang_tujuan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kuantitas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    // Menghubungkan stok dengan ID Produk terkait (Foreign Key)
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
});

// Relasi: Satu catatan stok memiliki satu produk terkait
WarehouseStock.belongsTo(Product, { foreignKey: 'product_id' });

export default WarehouseStock;