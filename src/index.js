const { default: Busket } = require("./modules/busket");
const { default: Categories } = require("./modules/category");
const { default: LastProducts } = require("./modules/last-products");
const { default: Modal } = require("./modules/modal");

Categories();
Modal();
Busket();
LastProducts()