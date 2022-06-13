var canvas = new fabric.Canvas('canvas');
canvas.backgroundColor = 'yellow';
canvas.renderAll();
const image = document.getElementById('image')
const submit = document.getElementById('submit')
function handlesubmit() {
    console.log(image.value);
    var myImg = `${image.value}`;

    fabric.Image.fromURL(myImg, function (oImg) {
        canvas.add(oImg);

    })
}
function handleZoom() {
    console.log('scrolling');
}
submit.addEventListener('click', handlesubmit);
canvas.on('mouse:wheel', function (opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
})

