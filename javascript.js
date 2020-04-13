

function monitorCount(rows, columns) {
return rows * columns;
}
function costOfMonitors(rows, columns) {
return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4) * 200;
//console.log(totalCost);

//document.getElementById('changeColor').addClass("changeColor")


setTimeout(function(){
  changeColor.classList.add("change");
}, 3000);
