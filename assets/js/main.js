
var drawing = false;
var line;
var endPoint; 
function onMouseDown(event) {
   

	if(drawing){
        line.segments[1].point  = event.point;
        drawing = false;
    }else{
        line = new Path.Line(event.point,event.point);
        line.strokeColor = 'black';
        line.strokeWidth = 20;
        drawing = true;
    }
	
}

function onMouseUp(event) {
	line = new Path.Line(event.point,event.point);
        line.strokeColor = 'black';
        line.strokeWidth = 20;
        drawing = true;
}

function onMouseDrag(event) {
	
}

function onMouseMove(event) {
   
   if(drawing){
    line.segments[1].point = event.point;
   }
	project.activeLayer.selected = false;
	if (event.item)
		event.item.selected = true;
}