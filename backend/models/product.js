import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_produk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status_kelayakan: {
        type: DataTypes.STRING,
        defaultValue: 'Pending' // Default awal sebelum dicek Petugas QC di area merah kalian
    }
});

export default Product;