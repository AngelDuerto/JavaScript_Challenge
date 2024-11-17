function sharePizza(totalSlices, people){
    const slicesPerPerson = totalSlices / people;
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices pf pizza; from our ${totalSlices} slice pizza.`;
}

console.log(sharePizza(8, 2)); 
console.log(sharePizza(8, 3)); 
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3)); 