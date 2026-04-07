const mongoose = require('mongoose');

const ConnectToDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.log('❌ DB ERROR:', err.message);
    }
};

module.exports = ConnectToDB;