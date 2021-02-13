function generate(place,grid){
	let place1 = document.querySelector(place),
	div = document.createElement('div'),
	image = document.createElement('img'),
	li = document.createElement('li');

	div.onclick = select;
	div.className = 'cellsDiv';
	var elWidth = 320;	

	if(place1.childNodes.length>=3){
		let count = place1.childNodes.length;
		if(count>=3){
			if(place1.closest('div').style.overflowX="hidden")place1.closest('div').style.overflowX="scroll";
		    place1.style.width = elWidth * count + 'px';
	    }
	}

	let y = grid.length,
	x = grid[0].length,
	table = document.createElement('table'),
	tr = [];

	for(let i = 0; i<y; i++){
		tr[i] = document.createElement('tr');
		for(let j = 0; j<x; j++){
			if(grid[i][j]==null)continue
			let td = document.createElement('td');
		    let div = document.createElement('div');

			if(grid[i][j]['width']>1)td.setAttribute('colspan',grid[i][j]['width']);
			if(grid[i][j]['height']>1)td.setAttribute('rowspan',grid[i][j]['height']);
			tr[i].appendChild(td);
		}
		table.appendChild(tr[i]);
	}
	

	div.appendChild(table);
	li.appendChild(div);
	place1.appendChild(li);

}


function select(){

	if(this.style.backgroundColor!=""){this.style.backgroundColor=""; clearTimeout(timerId)};

	let bottom = document.querySelector('.bottom'),
	clone = this.cloneNode(true),
	td = clone.querySelectorAll('td'),
	list = document.querySelector('.list'),
	selectedGrid=document.querySelector('div.selectedGrid');
	list.removeAttribute('disabled');
	
	this.style.backgroundColor ="#7DCEA0";

	if(selectedGrid!=null)selectedGrid.remove();
	for(let el of td){
		let div = document.createElement('div');
		el.appendChild(div);
		el.onclick = function(){
			let cells = document.querySelectorAll('.selectedCell');
			this.setAttribute('class', 'selectedCell');
			if(cells.length>=1){
				for(let cell of cells){
					cell.removeAttribute('class');
				}
			}
			this.setAttribute('class', 'selectedCell');
		}
	}
	var timerId = setTimeout(()=>this.style.backgroundColor="",2000);

	clone.setAttribute('class', 'selectedGrid');
	bottom.appendChild(clone);
}

function addImage(){
	let newImage = document.createElement('img');
    image = document.querySelector('.image');
    imageName = document.querySelector('.list').value;
    if(image.childNodes.length){
    	let child = image.firstChild;
    	image.removeChild(child);
    }
    newImage.src = imageName +'.jpg';
	image.appendChild(newImage);

}
function confrm(){
	let imageName = document.querySelector('.list').value;
	selectedCell = document.querySelector('.selectedCell');
	let div = document.createElement('div');
	if(selectedCell.childNodes.length){
		let child = selectedCell.firstChild
		selectedCell.removeChild(child);
	}
	
    let image = document.createElement('img');
	image.src=imageName+'.jpg';
	div.className = "divInCell";

	image.setAttribute('class', 'imageInDiv');
	div.append(image);
	selectedCell.appendChild(div);
}
