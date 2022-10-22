/*function Category(categoryCode, categoryName){
    this.categoryCode = categoryCode;
    this.categoryName = categoryName;
}

Category.prototype.printCategory = function(){
    console.log(`${this.categoryCode} ${this.categoryName}`);
}

//const category = new Category(30, "gloria");
//category.printCategory();

function Product(productCode, productName, productPrice, categoryCode, categoryName){
    Category.call(this, categoryCode, categoryName);
    this.productCode = productCode;
    this.productName = productName;
    this.productPrice = productPrice;
}

Product.prototype = Object.create(Category.prototype);

Product.prototype.printProduct = function(){
    console.log(`${this.productCode} - ${this.productName}`);
}

const phone = new Product("9x452", "iphone", 1000, "47x12", "smartphones");
phone.printProduct();
phone.printCategory();
console.log(phone.categoryName);*/

class Category {

    constructor(categoryCode, categoryName){
        this.categoryCode = categoryCode;
        this.categoryName = categoryName;
    }

    printCategory(){
        console.log(`${this.categoryCode} ${this.categoryName}`);
    }
}

class Product extends Category{

    constructor(productCode, productName, productPrice, categoryCode, categoryName){
        super(categoryCode, categoryName);
        this.productCode = productCode;
        this.productName = productName;
        this.productPrice = productPrice;
    }

    printProduct(){
        console.log(`${this.productCode} - ${this.productName}`);
    }
}

const phone = new Product("9x452", "iphone", 1000, "47x12", "smartphones");
phone.printProduct();
phone.printCategory();
console.log(phone.categoryName);