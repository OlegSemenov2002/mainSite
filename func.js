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
const gridTemplates = [
  enlargeCell(generateGrid(4, 4), "0x0", 2, 2),
  enlargeCell(generateGrid(4, 4), "0x0", 3, 3),
  enlargeCell(generateGrid(4, 4), "0x0", 2, 2),
  enlargeCell(generateGrid(4, 4), "1x1", 2, 2),
  enlargeCell(generateGrid(4, 4), "1x1", 2, 2),
  enlargeCell(generateGrid(4, 4), "1x1", 2, 2),
  enlargeCell(generateGrid(4, 4), "1x1", 2, 2),
  enlargeCell(generateGrid(4, 4), "1x1", 2, 2),
  enlargeCell(generateGrid(4, 4), "1x1", 2, 2),
  
];
gridTemplates.forEach(grid => generate(".cellsMenu", grid));
