function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function makeFaNumber(number?: number) {
  return isNumber(number) ? number.toLocaleString('fa') : number;
}

function makePrice(number?: number) {
  return isNumber(number) ? `${number.toLocaleString('fa')} تومان` : '';
}

export { isNumber, makeFaNumber, makePrice };
