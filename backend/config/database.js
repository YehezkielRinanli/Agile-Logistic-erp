import { Sequelize } from 'sequelize';

// ⚠️ PERHATIAN: Ganti 'PASSWORD_MYSQL_KAMU' dengan password asli MySQL Workbench-mu!
const db = new Sequelize('logistic_erp', 'root', 'Lohengr@M|945', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,         // Mematikan log SQL panjang agar terminal tetap rapi
    define: {
        underscored: true,      // Otomatis mengubah nama kolom camelCase jadi snake_case di database
        freezeTableName: true,  // Mencegah Sequelize mengubah nama tabel menjadi jamak
        timestamps: true        // Otomatis membuat kolom created_at dan updated_at
    }
});

export default db;