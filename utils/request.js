const config = require('./config');

function request(options) {
  return new Promise((resolve, reject) => {
    options.url = `${config.apiUrl}${options.url}`;
    if (options.auth === true) {
      let header = options && options.header ? options.header : {};
      header["token"] = wx.getStorageInfoSync("token");
      options.header = header;
    }
    options.success = (res) => {
      if (res.statusCode === 200) {
        resolve(res.data);   
      }
    };

    options.error = (error) => {
      reject(error);
    };

    wx.request(options);
  });
}

module.exports = request;