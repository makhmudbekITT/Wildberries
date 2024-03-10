const { default: Busket } = require("./modules/busket");
const { default: Categories } = require("./modules/category");
const { default: Modal } = require("./modules/modal");
const { default: ProductsRender } = require("./modules/products-render");

Categories();

ProductsRender();

Modal();

Busket();