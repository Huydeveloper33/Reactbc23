

const stateDefaultImg = './img/products/black-car.jpg'



export const stateImgCar = (state = stateDefaultImg, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            state =`./img/products/${ action.newColor}-car.jpg`;
            return state;
        }
        default: return state
    }
}

