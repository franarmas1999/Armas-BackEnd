//DESAFIO PRIMER ENTREGABLE

class ProductManager{
    constructor(){
        this.products = [];
    }

    addProduct(Product){
        this.products.push(Product);
    }
}


class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnaill, code, stock) {
        if (title && description && code) {
            const isExistCode = this.products.map(p => p.code).includes(code);
            if (isExistCode) {
                console.log('El codigo ya existe, no se puede agregar el producto')
            } else {
                this.products.push({
                    id: this.products.lenght,
                    title,
                    description,
                    price,
                    thumbnaill,
                    stock,
                    code
                })
            }
        } else {
            console.log('Faltan Valores')
        }

    }

}

const productManager = new ProductManager()
productManager.addProduct("title","description","price", "thumbnaill","code","stock")