let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const BTN_PLUS = document.getElementById('adicionar');
const BTN_MINUS = document.getElementById('subtrair');

BTN_PLUS.addEventListener('click', increment);
BTN_MINUS.addEventListener('click', decrement);
CURRENT_NUMBER.addEventListener('click', () => {
	CURRENT_NUMBER.innerHTML = 0;
	CURRENT_NUMBER.style.color = '#00F';
	count = 0;
});

CURRENT_NUMBER.addEventListener('mouseover', () => {
	CURRENT_NUMBER.style.cursor = 'pointer';
});

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	if(count>=0){
		CURRENT_NUMBER.style.color = '#000';
	}

	if(count>=10){
		BTN_PLUS.disabled = true;
	}

	if(count>-10){
		BTN_MINUS.disabled = false;
	}

	if(count==0){
		CURRENT_NUMBER.style.color = '#00F';
	}
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if(count<0){
		CURRENT_NUMBER.style.color = '#F00';
	}

	if(count<10){
		BTN_PLUS.disabled = false;
	}

	if(count<=-10){
		BTN_MINUS.disabled = true;
	}

	if(count==0){
		CURRENT_NUMBER.style.color = '#00F';
	}
}
