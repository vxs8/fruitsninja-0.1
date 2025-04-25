let topS = 0;
let sphereID = 0;
let score = 0;
let s = document.querySelector('.s');
let massiv = ['150368894216-red-apple-png-image.png','banan.png','pngtree-sweet-whole-strawberry-png-image_14676798.png'];

s.innerHTML = score;
for (i=0; i<10; i=i+1){
	let shar = document.createElement('div');
	document.body.appendChild(shar);
	shar.classList.add('sphere');
	RandomX = Math.round(Math.random()*1500);
	RandomM = Math.round(Math.random()*2);
	shar.style.left = RandomX + 'px';
	shar.style.backgroundImage = 'url(' + massiv[RandomM] + ')';
	shar.style.backgroundSize = '100% 100%';
}
let sphere = document.querySelectorAll('.sphere')

let changeSpeed = function() {
	topS = topS + 150;
	sphere[sphereID].style.top = topS + 'px';

	if (topS >=1150) {
		topS = 0;
		sphere[sphereID].style.display = 'none';
		sphereID = sphereID + 1;
		if (sphereID == 10) {
			stopGame();
		}
	}

	sphere[sphereID].onclick = function() {
		sphere[sphereID].style.display = 'none';
		score = score + 1
		s.innerHTML = score;
	}

}

let myInt = setInterval(changeSpeed, 300);
let stopGame = function(){
	clearInterval(myInt)
}
/*
	переменнная для топ = 0
	sphereID = 0

	цикл работает 10х
	{
		создаем дивы(createElement)
		добавить класс
		привязываем созданный див к body (appendChild)
		лефт дива = рандомайзер
	}
	находим все сферы (querySelectorAll) c классом sphere

	цикл для sphere
	{
		нажатие onclick{
			див пропадает
			идет подсчет очков
			top = 1000. она нужна для того чтобы был переход с след sphere 
		}
	}
	функция изменения скорости = {
		top + 150
		1 сфера[sphereID] принимает top = top + px
		if(top >=1050 ){
			top = 0 (обнуление переменной для след сферы)
			сфера скрывается
			sphereID = sphereID + 1 (переключиться на след сферу)

			если (sphereID == 10){
				вызывается функция остановки игры
			}
		}
	}
	
	let myInt = интервал (изменить скорость, 300)

	функция остановки игры{
		clearInterval
	}
*/