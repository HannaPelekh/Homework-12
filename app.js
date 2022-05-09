const SIZES_HAMBURGER = {
    SMALL: {
        price: 50,
        calories: 20,
    },
    MEDIUM: {
        price: 75,
        calories: 30,
    },
    LARGE: {
        price: 100,
        calories: 40,
    }
};
const FILLINGS = { 
    CHEESE: {
        price: 10,
        calories: 20,
    },
    SALAD: {
        price: 20,
        calories: 5,
    },
    POTATO: {
        price: 15,
        calories: 10,
    },
    SPICES: {
        price: 15,
        calories: 0,
    },
    MAYO: {
        price: 20,
        calories: 5,
    },
};

function CreateHamburger(size){
    this._HAMBURGER_VALUE ={
        PRICE: 'price',
        CALORIES: 'calories'
    };
    this.size = size;
    this.fillings = [];    
}
CreateHamburger.prototype.addFilling = function (filling) {
    this.fillings.push(filling);
}
CreateHamburger.prototype.calculateHamburger = function (valueName) {
    return this.fillings.reduce((a, element) => a += element[valueName], this.size[valueName])
}
CreateHamburger.prototype.getPrice = function(){
    return this.calculateHamburger(this._HAMBURGER_VALUE.PRICE);
}

CreateHamburger.prototype.getCalories = function(){
    return this.calculateHamburger(this._HAMBURGER_VALUE.CALORIES);
}


const mediumHamburger = new CreateHamburger(SIZES_HAMBURGER.MEDIUM);

mediumHamburger.addFilling(FILLINGS.MAYO);
mediumHamburger.addFilling(FILLINGS.SALAD);
mediumHamburger.addFilling(FILLINGS.CHEESE);
mediumHamburger.addFilling(FILLINGS.SALAD);
mediumHamburger.addFilling(FILLINGS.POTATO);


const totalPrice = mediumHamburger.getPrice();
const totalCalories = mediumHamburger.getCalories();
console.log("Price with sauce: " + totalPrice);
console.log("Calories with sauce: " + totalCalories);