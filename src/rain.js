/*----------get access to canvas----------*/
const rain  = document.getElementById('rain');
const context = rain.getContext('2d')

/*----------define canvas size----------*/
rain.width = window.innerWidth;
rain.height = window.innerHeight;

/*----------characters to draw from----------*/
const nums = '01';
const alphabet = nums;
const fontSize = 16;

/*----------calculate amount of characters that will fit on screen (horizontal----------*/
const columns = rain.width/fontSize;

/*----------create array for position of characters----------*/
/*----------index = x-position value = y-position----------*/
const rainDrops = [];
for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}
/*----------function to draw random characters ----------*/
export const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, rain.width, rain.height);

    context.fillStyle = '#43ba36';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > rain.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};
/*----------draw speed----------*/
setInterval(draw, 60);


