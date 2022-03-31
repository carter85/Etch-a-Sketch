const container = document.getElementById('blockContainer');
const button = document.getElementById('clearBox');

function setSize (WIDTH, HEIGHT) {
    // clears the page of created div's
    clearBox();

    // gets input from user for width and height
    WIDTH = prompt("Set Width: ");
    HEIGHT = prompt("Set Height: ");

    // first loop, creates set number of row divs, 
    // according to HEIGHT input, assigns class of 'row'
    // to each, appends it to container element
    for (i = 0; i < HEIGHT; i++) {
        let divRow = document.createElement('div')
        divRow.classList.add('row')
        divRow.id = ('divRow' + i);
        container.appendChild(divRow);
        
        // second loop, creates 'column' div, adds 
        // WIDTH number of times inside each ROW element, 
        // adds 'column' class, appends to 'divCol' element
        for (n = 0; n < WIDTH; n++) {
            let divRowId = document.getElementById("divRow" + i);
            let divCol = document.createElement('div');
            divCol.classList.add('column');
            divRowId.appendChild(divCol);
        }
    }
    eachDiv();
}


function clearBox() {
    container.innerHTML = '';
}

function eachDiv() {
    const allDivs = document.querySelectorAll('.column');

    // use the 'forEach' method to iterate through each mest
    allDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
        console.log('hat');
        div.classList += ' yellow';
        });
    });        
}
    /* 
    thing.forEach((div) => {
        thing.addEventListener('click', () => {
            console.log('test');
        });
    }); */