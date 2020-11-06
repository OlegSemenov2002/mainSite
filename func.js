function generateGrid(width, height){
	let grid = [], x = width, y = height, num = 0;
	for(let i = 0; i<y; i++){
		grid[i]=[];
		for(let j = 0; j<x; j++){
			grid[i][j]={
				'width': 1,
                'height': 1,
                'top': i,
                'left': j,
                'id':num,
			};
			num++;
		}
	}
	return grid
}
function enlargeCell(grid,location,width,height,){

	let y = location.split('')[0],
	x = location.split('')[2],
	obj = {
		'width': width,
        'height': height,
        'top': +x,
        'left': +y

	};
	for(let i = y,h = 0; h<height; i++,h++){
			for(let j = x, g = 0; g<width; j++,g++){
				grid[i][j]=null;
			}
	}
	grid[y][x]=obj;
	return grid;
}
function gridToArray(grid){
	let result =[];
	grid.forEach(item=>{
		if(item!=null)item.forEach(el=>result.push(el));
	});
	return result
}
function arrayToGrid(array){
	let grid = [], x = [], y = [];
	let map = new Map(), i = 0, j =0;

	array.forEach(element => {
		if(element!=null){
			y.push(element['top']);
			x.push(element['left'])
		}
	        
	});
y = Math.max.apply(null, y);//нашел размерность массива
x = Math.max.apply(null, x);


	for(let i = 0; i<=y; i++){//делаю массив двумерным
		grid[i] = [];
	}
	console.log(grid);
	array.forEach(item => {
		if(item!=null){
		let y = +item['top'];
		let x = +item['left'];
		grid[y][x]=item;
		}
	})
	console.log(y + ' '+ x)
	console.log(grid);
	return grid
}
function generate(place,grid){
	let place1 = document.getElementById(place);
	let text = document.createTextNode(grid);
	let div = document.createElement('div');
	div.onclick = select;
	

	let y = grid.length,
	x = grid[0].length,
	table = document.createElement('table'),
	tr = [];

	for(let i = 0; i<y; i++){
		tr[i] = document.createElement('tr');
		for(let j = 0; j<x; j++){
			if(grid[i][j]==null)continue
			/*let text = document.createTextNode('text');*/
			let td1 = document.createElement('td');
			/*td1.appendChild(text);*/
			if(grid[i][j]['width']>1)td1.setAttribute('colspan',grid[i][j]['width']);
			if(grid[i][j]['height']>1)td1.setAttribute('rowspan',grid[i][j]['height']);
			tr[i].appendChild(td1);
		}
		table.appendChild(tr[i]);
	}
	table.setAttribute('class','menu');
	div.appendChild(table);
	place1.appendChild(div);

}

let grid00 = new generateGrid(3,3);
let grid01 = new enlargeCell(grid00,'0x0',2,2);

let grid10 = new generateGrid(4,4);
let grid11 = new enlargeCell(grid10,'0x0',3,3);

let grid20 = new generateGrid(4,4);
let grid21 = new enlargeCell(grid20,'0x0',2,2);

let grid30 = new generateGrid(4,4);
let grid31 = new enlargeCell(grid30,'1x1',2,2);

function select(){
	let el = document.getElementById('down'),
	cell = document.getElementById('selected'),
	div = document.createElement('div'),
	clone = this.cloneNode(true);
	let td = clone.querySelectorAll('td');
	for(let el of td){
		el.onclick = function(){
			el.style.border= '1px solid black';

			if(document.querySelectorAll('.on').length>=1){
				let on = document.querySelectorAll('.on');
				for(let el of on){
					el.style.border= '0px solid black';
					el.removeAttribute('class');
				}
			}
			this.setAttribute('class', 'on');
			let buttons = document.querySelectorAll('button');
			for(let button of buttons){
				button.removeAttribute('disabled');
			}


		}
	}

    
	cell.remove();
	div.id = 'selected';
	clone.id ='selected';
	div.appendChild(clone);
	el.appendChild(div);
}
function addImage(object){
	let image = document.getElementById('image');
	image.style['background-image'] = 'url('+object+'.jpg)';

}
function confrm(){
	let cell = document.querySelector('.on');
	cell.style['background-image'] = image.style['background-image'];

}


/*console.log(grid1);
let arr =gridToArray(grid1);
console.log(arr);
arrayToGrid(arr);*/
generate('heh',grid01);
generate('heh',grid11);
generate('heh',grid21);
generate('heh',grid31);

alert();