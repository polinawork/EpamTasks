const PRICE_PHONE = 999.99;
const PRICE_ACCESSORY = 19.99;
const TAX_RATE = 0.08;
const SPENDING_LIMIT = 3000;

function calculateFinalPurchaseAmount(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}
function formatAmount() {
	return "$" + amount.toFixed( 2 );
}

let balance = prompt( "Please tell me your balance:" );
let amount = 0;

while(amount < balance){
	amount += PRICE_PHONE;
	if(amount < SPENDING_LIMIT){
		amount += PRICE_ACCESSORY;
    }
}

amount = calculateFinalPurchaseAmount(amount);


console.log(`Amount: ${formatAmount(amount)}.`);

if(amount > balance){
	console.log('insufficient funds');
}