const crypto = require('crypto');
const secretKey = crypto.randomBytes(16).toString('hex'); // 16 bytes = 32 characters
console.log(secretKey);

