// *// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?') // 0 - 100

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// *// 1. Сохранить самый дорогой товар в переменную`max`*

// *// 2. Сохранить самый дешевый товар в переменную`min`*

// *// 3. Сохранить общую цену без скидок в переменную`total`*

// *// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// *// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// *// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// *// * Писать весь код в функции `setup()`*

// *// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА

const setup = () => {
    let max = arr[0];
    arr.forEach(item => {
        if(item.price > max.price){
            max = item
        } 
       
    });  
    arr.sort((a,b)=> a.price - b.price);
    let min = arr[0];
    
    for(let i =0 ; i < arr.length; i++){
        if( typeof arr[i].price === 'number'){
            total += arr[i].price
        }
    }
    let totalSale = total - total * (discount / 100) 

    for (let i = 0 ; i < arr.length; i++){
        let arr_new = { name: arr[i].name, price: arr[i].price - arr[i].price * (discount / 100)};
        arr_sale.push(arr_new);
    }
    
        let average = total / (arr.length)
    
    

    console.log(max, min, total, totalSale, arr_sale,average)
}

setup(
)