const myStorage = {
    car: {
        inside: {
            'glove box' : 'maps',
            'passenger seat': 'crumbs',
        },
        outside: { 
            trunk: 'jact',
        },
    },

};
const gloveBoxContents = (myStorage.car.inside['glove box']);
console.log(gloveBoxContents);