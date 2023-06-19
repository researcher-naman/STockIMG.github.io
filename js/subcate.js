function subcate(elementId) {
    var cateagor = document.getElementById(elementId);
    cateagor.classList.add('active');
}

function subcateout(elementId) {
    var cateagor = document.getElementById(elementId);
    cateagor.classList.remove('active');
}