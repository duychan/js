function Validator(options) {
    const formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(element => {
            let inputElement = formElement.get
            inputElement.addEventListener('click', invalid(element.selector));
        });
    }
}
const invalid = function(value) {
    console.log(value);
}
const isRequired = function(selector) {

    return {
        selector: selector,
        test: function() {

        }
    }
}
const isEmail = function(selector) {

    return {
        selector: selector,
        test: function() {

        }
    }
}





Validator({
    form: '#form-1',
    rules: [isRequired('.fullname'), isEmail('.email')]
});