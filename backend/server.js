import express from 'express';
import cors from 'cors'; // 👈 1. Import paket CORS
import mysql from 'mysql2/promise';
import db from './config/database.js';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Mengaktifkan prefix URL /api (contoh: /api/products)
app.use('/api', apiRoutes);

async function startServer() {
    try {
        // 1. Cek & Buat database otomatis jika belum ada di MySQL
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Lohengr@M|945' // ⚠️ ISI DENGAN PASSWORD WORKBENCH-MU
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`logistic_erp\`;`);
        await connection.end();

        // 2. Hubungkan kabel Sequelize
        await db.authenticate();
        console.log('✅ Asyik! Database "logistic_erp" berhasil terhubung!');

        // 3. Sinkronisasi Model (Otomatis membuat tabel 'product' di MySQL)
        await db.sync();
        console.log('📦 Semua struktur tabel berdasarkan gambar rancangan sukses disinkronkan!');

        // 4. Nyalakan Server
        app.listen(PORT, () => {
            console.log(`=============================================`);
            console.log(`🚀 Server backend berjalan di port ${PORT}`);
            console.log(`=============================================`);
        });

    } catch (error) {
        console.error('❌ Yah, gagal menyalakan database/server:', error.message);
    }
}

startServer();