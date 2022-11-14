const modal = document.querySelector('.modal-full')
const modalChange = document.querySelector('.modal-change')
const closeBTN = document.querySelector('.btn-close')
const imageDetailsBTN = document.querySelectorAll('.btn-image-details')
let imageOrderBTN = document.querySelector('.btn-image-order')
const imageDetails = document.getElementById('grid-store-image-description')
const mobileImageDetail = document.querySelector('.mobile-image-detail')

let bodyPosition = document.body.getBoundingClientRect()
console.log(bodyPosition);

closeBTN.addEventListener('click', function () {
    modal.classList.add('hidden')
    modal.style.marginBottom = "-70vh"
    document.body.classList.remove('hidden-overflow')
    window.location = `#${modal.id.slice(0, -1)}`
    modalChange.innerHTML = `
    <div class = "cont-grid-3x hidden hidden-pc-only" id = "grid-store-image-description">
                <div>
                    <h3>Fotoplátno</h3>
                    <p>20x30cm - 40€</p>
                    <p>30x45cm - 60€</p>
                    <p>40c60cm - 80€</p>
                    <p>50x75cm - 100€</p>
                    <p>60x90 - 120€</p>
                    <p>80x120 - 140€</p>
                </div>
                <div>
                    <h3>Hliníková doska</h3>
                    <p>20x30cm - 50€</p>
                    <p>30x45cm - 70€</p>
                    <p>40c60cm - 90€</p>
                    <p>50x75cm - 110€</p>
                    <p>60x90 - 130€</p>
                    <p>80x120 - 150€</p>
                </div>
                <div>
                    <h3>Vlastnosti</h3>
                    <p>Top kvalita od overenej profi tlačiarne</p>
                    <p>Možnosť tlače vo formáte 1x1</p>
                    <p>Iba jeden vytlačený kus</p>
                </div>
            </div>
        <div class="mobile-image-detail" id = ""></div>
            <a href="#" class="btn btn-image-order">Objednať</a>
        </div>`

        imageOrderBTN = document.querySelector('.btn-image-order')

})

imageDetailsBTN.forEach((btn) =>
    btn.addEventListener('click', function (e) {
        bodyPosition = document.body.getBoundingClientRect();
        modal.id = `${btn.id}b`
        mobileImageDetail.id = btn.id
        modal.classList.remove('hidden')
        modal.style.marginBottom = 0
        document.body.classList.add('hidden-overflow')
    })
)

imageOrderBTN.addEventListener('mouseover', function () {
    imageDetails.classList.remove('hidden')
})

imageOrderBTN.addEventListener('mouseout', function () {
    imageDetails.classList.add('hidden')
})

imageOrderBTN.addEventListener("click", function() {
    console.log("fuck")
    modalChange.innerHTML = `
    <div class = "order order-image">
                <form id = "formular" action = "process.php" method = "POST">
                    <select name="rozmer" id="properties">
                        <option value="30-20">20x30cm</option>
                        <option value="45-30">30x45cm</option>
                        <option value="60-40">40x60cm</option>
                        <option value="75-50">50x75cm</option>
                        <option value="90-60">60x90cm</option>
                        <option value="120-80">80x120cm</option>
                    </select>
                    <select name="typ" id="type">
                        <option value="Fotoplátno">Fotoplátno</option>
                        <option value="Hliníková doska">Hliníkova doska</option>
                    </select>
                    <div id = "name">
                        <input type="text" id = "name" name = "name" placeholder = "Meno" required>
                        <label for="name">Meno</label>
                    </div>
                    <div id = "mail">
                        <input type="email" id = "email" name = "email" placeholder = "Email" required>
                        <label for="email">Email</label>
                    </div>
                    <div id = "street">
                        <input type="text" id = "street" name = "street" placeholder = "Ulica a popisné číslo" required>
                        <label for="street">Ulica a popisné číslo</label>
                    </div>
                    <div id = "zip">
                        <input type="number" id = "zip" name = "zip" placeholder = "PSČ" required>
                        <label for="zip">PSČ</label>
                    </div>
                    <div id = "city">
                        <input type="text" id = "city" name = "city" placeholder = "Mesto" required>
                        <label for="city">Mesto</label>
                    </div>
                    <div>
                        <textarea name="message" id="message" rows="5" placeholder = "Správa"></textarea>
                        <label for="message">Správa</label>
                    </div>
                    <div>
                        <button class = "btn btn-order" >Odoslať</button>
                    </div>
                </form>
                <div class="order-details">
                    <div class = "order-details-img"></div>
                    <h1></h1>
                </div>
            </div>
    `

    const orderImg = document.querySelector(".order-details-img")
    orderImg.id = modal.id 
})