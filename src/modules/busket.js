const Busket = () => {
  const row = document.querySelector(".cart-table__goods");
  const total = document.querySelector(".card-table__total")

  const goods = localStorage.getItem("goods")
    ? JSON.parse(localStorage.getItem("goods")) : []

  if (!goods) {
    localStorage.setItem("goods", JSON.stringify([]))
  }

  row.innerHTML = ""

  goods?.forEach((element, id) => {
    let quantity = 1, totalPrice = 0
    row.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td><button class="cart-btn-minus">-</button></td>
        <td>${quantity}</td>
        <td><button class=" cart-btn-plus">+</button></td>
        <td>${totalPrice}$</td>
        <td><button class="cart-btn-delete" data-id="${id}">x</button></td>
      </tr>
      `)
  });

  const deleteBtns = document.querySelectorAll(".cart-table__goods button[data-id]");

  if (deleteBtns && deleteBtns.length !== 0) {
    deleteBtns.forEach(btn => {
      const currentBtn = btn;
      currentBtn.addEventListener("click", e => {
        const id = e.target.dataset.id;
        const before = goods.slice(0, id), after = goods.slice(id + 1)
        localStorage.setItem("goods", JSON.stringify([].concat(before, after)))
        Busket();
      })
    })
  }

  total.textContent = goods.reduce((sum, goodItem) => {
    return (sum + Number(goodItem.price))
  }, 0)
}

export default Busket;