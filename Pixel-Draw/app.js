function makeGrid() {

    const gridElement = $('.grid');

    for(let i = 0; i < 64; ++i) {
        
        let cell = $('<div class="cell"></div>');
        gridElement.append(cell);
        
    
    
    }
    

}

makeGrid()


function makePalette() {
    
    const PALETTE = [
        
    'red',
    'blue',
    'orange',
    'green',
    'yellow',
    'rebeccapurple',
    'pink',
    'white',
    'black',
    
    ]   

    const buttonElement= $(".palette");


    for (let index = 0; index < PALETTE.length; index = index + 1) {
        
        let button = $('<button>');
        button.css('backgroundColor', PALETTE[index]);
        // $('.palette').append(buttonElement)
        buttonElement.append(button);
    
    } 

    $('.palette button').first().addClass('active');
    

}


makePalette();





function onPaletteClick() {

    
    $('.palette .active').removeClass('active');
    $(this).addClass('active');
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
    
    let myColor = $('.palette .active').css('backgroundColor');
    let newColor = $(this).css('backgroundColor');

    if (newColor === myColor) {

        $(this).css('backgroundColor','');

    } else {

        $(this).css('backgroundColor', myColor);
    }
}  

$('.grid .cell').click(onGridClick);

function onClearClick() {

    $('.grid .cell').css('backgroundColor','');


}

$('.clear').click(onClearClick);

function onFillAllClick() {

    let myColor = $('.palette .active').css('backgroundColor');
    $('.cell').css('backgroundColor', myColor);

}

$('.fill-all').click(onFillAllClick);

function onFillEmptyClick() {

    let myColor = $('.palette .active').css('backgroundColor');
    let cells = $('.cell');

    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];

      if ($(cell).css('backgroundColor') == 'rgba(0,0,0,0)')  {
        $(cell).css('.palette active','backgroundColor', myColor);

     }
    
    }

    
}

$('.fill-empty').click(onFillEmptyClick);








   
   














