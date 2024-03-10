const { GetData } = require("./api");

const Categories = () => {
    const navigation = document.querySelector("nav ul.navigation");

    GetData("/goods").then(data => {

        const set = new Set()

        data.forEach(element => {
            
            set.add(element.gender);

            set.add(element.category);
        });

        navigation.innerHTML = ""

        set.forEach(item => {
            navigation.insertAdjacentHTML("beforeend", `
            <li. class="navigation-item">
            <a href="./goods.html?field=${item}" class="navigation-link" data-field=${item}">
            ${item}
            </a>
            </li>`)
        })

        navigation.innerHTML += `
        <li. class="navigation-item">
        <a 
           href="./goods.html"
           class="navigation-link"
           >
        All
        </a>
        </li>`
    })
}

export default Categories;