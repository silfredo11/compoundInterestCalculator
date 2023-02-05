
export const addThousandsSeparator = (number) => {
    let partsNumber = number.toString().split('.');

    partsNumber[0] = partsNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return partsNumber.join('.');
}