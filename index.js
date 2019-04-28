document.onreadystatechange = function () {
    switch (document.readyState) {
        case 'loading':
            break;
        case 'interactive':
            break;
        case 'complete':
            onComplete();
            break;
    }
};

let draggableElement;

function onComplete() {
    const items = document.querySelectorAll('#list .item');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragover', handleDragOver, false);
    });
}

function handleDragStart(event) {
    draggableElement = event.target;
}

function handleDragOver(event) {
    event.preventDefault();
    const bounding = event.target.getBoundingClientRect();
    const offset = bounding.y + (bounding.height / 2);
    if (event.clientY < offset) {
        event.target.insertAdjacentElement('beforebegin', draggableElement);
    } else {
        event.target.insertAdjacentElement('afterend', draggableElement);
    }
}
