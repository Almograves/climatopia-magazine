class MyHandler extends Paged.Handler {
    constructor(chunker, polisher, caller) {
        super(chunker, polisher, caller);
    }

    after() {
        // Your code here
        document.getElementById('atlantis-coral-iHold1').appendChild(coralCanvas);
        drawArm(50, 50, 100, 30, 20);
    }
}

Paged.registerHandlers(MyHandler);

const coralCanvas = document.createElement('canvas');
coralCanvas.width = 1000;
coralCanvas.height = 1000;
coralCanvas.id = 'atlantis-coral-i1'
coralCanvas.style.width = '100%';
coralCanvas.style.height = '100%';

const drawArm = (xFrom, xTo, yFrom, yTo, width) => {
    const ctx = coralCanvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(xFrom, yFrom);
    ctx.lineTo(xTo, yTo);
    ctx.lineWidth = width;
    ctx.strokeStyle = '#FF8000';
    ctx.stroke();

    if (width > 60) {
        const length = width + 10;
        let angle, newXTo, newYTo;
        angle = Math.random() * Math.PI * 2;
        newXTo = xTo + length * Math.cos(angle);
        newYTo = yTo + length * Math.sin(angle);
        drawArm(xTo, newXTo, yTo, newYTo, width - 10);
        angle = Math.random() * Math.PI * 2;
        newXTo = xTo + length * Math.cos(angle);
        newYTo = yTo + length * Math.sin(angle);
        drawArm(xTo, newXTo, yTo, newYTo, width - 10);
        angle = Math.random() * Math.PI * 2;
        newXTo = xTo + length * Math.cos(angle);
        newYTo = yTo + length * Math.sin(angle);
        drawArm(xTo, newXTo, yTo, newYTo, width - 10);
    }
};

drawArm(500, 500, 1000, 700, 100);
document.getElementById('atlantis-coral-iHold1').appendChild(coralCanvas);


