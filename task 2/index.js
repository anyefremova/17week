class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `Тип: ${this.type}, Марка: ${this.brand}`;
    }

    getPrice() {
        return `Цена: ${this.price}`;
    };
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount() {
        return `Количество дверей: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return `Максимальная скорость: ${maxSpeed}`;
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

for (i = 0; i < data.length; i += 1) {
    if (data[i].type === 'bike') {
        data[i] = new Bike(data[i].type, data[i].price, data[i].brand, data[i].maxSpeed);
    }
    else data[i] = new Car(data[i].type, data[i].price, data[i].brand, data[i].doors);
}

const container = document.getElementById('container');

Car.prototype.carInfo = function carInfo() {
    const item = document.createElement('p');
    item.textContent = `Марка: ${this.brand}, Цена: ${this.price}, Количество дверей: ${this.doors}`;
    container.appendChild(item);
}

data[0].carInfo();
data[1].carInfo();

Bike.prototype.bikeInfo = function bikeInfo() {
    const item = document.createElement('p');
    item.textContent = `Марка: ${this.brand}, Цена: ${this.price}, Максимальная скорость: ${this.maxSpeed}`;
    container.appendChild(item);
}

data[2].bikeInfo();
data[3].bikeInfo();
