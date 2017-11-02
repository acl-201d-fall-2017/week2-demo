function Cookie (type, price) {
    this.type = type;
    this.price = price;
    this.size = {
        length: 4,
        width: 2,
        depth: 1.6 
    };
}

Cookie.prototype.bakery = 'Alchemy Lab';

Cookie.prototype.addChocolateChips = function () {
    this.type = this.type + ' with chocolate chips';
};

const cookie1 = new Cookie('sugar', 4);
const cookie2 = new Cookie('spice', 5);

console.log(cookie1, cookie2);




const header = document.getElementById('cookies');

header.addEventListener('click', function (e) {
    console.log('the user clicked on', e.target);
    console.log('clicked the header!');
});

header.addEventListener('dblclick', function (e) {
    console.log('double clicked the header!');
});

header.addEventListener('mouseover', mouseoverHandler);
function mouseoverHandler (e) {
    console.log('moused over the header!!!!!!!!!');
}