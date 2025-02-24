document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('myform');

    form.addEventListener('submit', evt => {
        
        if (!form.checkValidity()) {
            evt.preventDefault();
            evt.stopPropagation();
            
        }

    });

});