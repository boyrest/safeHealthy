const request = require("./request");

function getStoreUserInfo(shopId) {
  return request({
    method: "GET",
    url: "/shops/" + shopId
  });
}

function getBloackList(shopId) {
  return request({
    method: "GET",
    url: "/shop/" + shopId + "/blocks"
  });
}

function getAllProducts(pageNo) {
  return request({
    method: "GET",
    url: "/im/products?page=" + pageNo
  });
}


module.exports = { getStoreUserInfo, getBloackList, getAllProducts }