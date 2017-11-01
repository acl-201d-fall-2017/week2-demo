'use strict';

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year =  year;
    this.color = color;
}

Car.prototype.render = function() {
    const element = document.createElement('DIV');

    const h2 = document.createElement('H2');
    h2.textContent = this.color + ' ' + this.make + ' '  + this.model;
    element.appendChild(h2);

    return element;
};

const pinto = new Car('Ford', 'Pinto', '2017', 'red');
const mini = new Car('Mini Cooper', 'Maxi', '2015', 'yellow');
const tesla = new Car('Tesla', 'S', '2018', 'gray');

const lot = document.getElementById('lot');

/* */
// const pintoDiv = pinto.render();
// lot.appendChild(pintoDiv);

lot.appendChild(pinto.render());
lot.appendChild(mini.render());
lot.appendChild(tesla.render());

const form = document.getElementById('new-car');

// addEventListener takes 2 params:
// 1. event name as a string
// 2. event handler as a function - what code to run when the event happens
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('the form heard a submit event!');

    // get data from form inputs
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;

    // create new instance of Car
    const newCar = new Car(make,model,year,color);

    // append data to DOM
    lot.appendChild(newCar.render());
});