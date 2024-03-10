import { GetData } from "./api";

const ProductsRender = () => {

    const field = window.location.search.substring(7)

    console.log(field);

    const container = document.querySelector(".long-goods-list")

    container.innerHTML = `Loading...`

    const Render = (get = "") => {
        GetData("/goods" + get).then(data => {
            container.innerHTML = ""
            data.forEach(element => {
                container.insertAdjacentHTML(`beforeend`, `
                <div class="col-lg-3 col-sm-6">
					<div class="goods-card">
                    ${element.label !== "" ? `<span class='label'>${element.label}</span>` : ""}
						<!-- /.label --><img src="${element.img}" alt="image: ${element.name}" class="goods-image">
						<h3 class="goods-title">${element.name} Hoodie</h3>
						<!-- /.goods-title -->
						<p class="goods-description">${element.description}</p>
						<!-- /.goods-description -->
						<!-- /.goods-price -->
						<button class="button goods-card-btn add-to-cart" data-id="${element.id}">
                        $${element.price}
						</button>
					</div>
					<!-- /.goods-card -->
				</div>
            `)
            });

            const priceBtns = document.querySelectorAll(`button[data-id]`)

            const goods = JSON.parse(localStorage.getItem("goods"))

            if (!goods) {
                localStorage.setItem("goods", JSON.stringify([]))
            }

            if (priceBtns && priceBtns.length !== 0) {
                priceBtns.forEach(btn => {
                    const currentBtn = btn;

                    currentBtn.addEventListener("click", e => {
                        const id = e.target.dataset.id

                        console.log(e.target);

                        GetData(`/goods/${id}`).then(data => {
                            goods?.push(data);
                            localStorage.setItem("goods", JSON.stringify(goods))
                        })
                    })
                })
            }
        })
    }

    if (field !== "" &&
        (field !== "Womens" && field !== "Mens")) {
        Render(`?category=${field}`)
    } else if (
        field == "Womens" || field == "Mens") {
        Render(`?gender=${field}`)
    } else {
        Render()
    }

}

export default ProductsRender;