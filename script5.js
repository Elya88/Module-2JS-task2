//5
let numCard = prompt('your card number');
vis = numCard.slice(-4);
count = '';

for (let i = (numCard.length) - 4; i > 0; i--){
    count += '*';
}
document.write("your card number: " + count + vis);