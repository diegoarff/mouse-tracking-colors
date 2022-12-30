const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let isDrawing = false;
let rect = canvas.getBoundingClientRect();

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
});

canvas.addEventListener('mouseup', (e) => {
	isDrawing = false;
});

canvas.addEventListener('mousemove', (e) => {
	if (!isDrawing) return;
	drawLines(e);
});

const drawLines = (e) => {
	let { x, y } = getMousePos(e);
	ctx.beginPath();
	ctx.strokeStyle = getRandomHSLA();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(x, y);
	ctx.stroke();
	ctx.closePath();
};

/*Generate a random HSLA color and return it as a string*/
const getRandomHSLA = () => {
	let h = Math.floor(Math.random() * 361);
	let s = Math.floor(Math.random() * 20) + 80;
	let l = Math.floor(Math.random() * 20) + 40;
	let a = Math.random();
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

/*Get mouse position relative to the Canvas*/
const getMousePos = (e) => {
	return {
		x: Math.round(e.clientX - rect.left),
		y: Math.round(e.clientY - rect.top),
	};
};

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth * 0.8;
	canvas.height = window.innerHeight * 0.8;
	rect = canvas.getBoundingClientRect();
});
