const path = require('path');
module.exports = {
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src/'), // Đặt alias cho thư mục src
      },
      extensions: ['.js', '.jsx', '.json'], // Các extension sẽ được giải quyết tự động
    },
  };