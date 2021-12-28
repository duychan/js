function Validator(options) {
    const optionElement = document.querySelector(options.form);
    const errorInvalid = options.errorInvalid;
    if (optionElement) {
        options.rules.forEach(element => {
            const rule = optionElement.querySelector(element.selector);
            if (rule) {
                rule.addEventListener('blur', function() { messError(rule, element, errorInvalid) }, false);
                rule.onclick = function() {
                    removeError(rule, errorInvalid);
                }
            }
        });
    }
}
const removeError = function(rule, errorInvalid) {
    let parent = rule.parentElement;
    const messTag = parent.querySelector(`${errorInvalid}`);
    parent.classList.remove('invalid');
    messTag.innerText = '';
}
const messError = function(rule, element, errorInvalid) {
    let parent = rule.parentElement;
    const messTag = parent.querySelector(`${errorInvalid}`);
    parent.classList.add('invalid');
    let inputElement = rule.value.trim();

    messTag.innerText = element.test(inputElement);
    if (element.test(inputElement) === undefined) {
        parent.classList.remove('invalid');
        messTag.innerText = '';
    }
}

const isRequired = function(selector, mess) {
    return {
        selector: selector,
        test: function(value) {
            return value !== '' ? undefined : mess;
        }
    }
}

const isEmail = function(selector, mess) {
    return {
        selector: selector,
        test: function(value) {
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            let check = regex.test(value);
            return check === true ? undefined : mess;
        }
    }
}

const isRequired_password = function(selector, mess) {
    return {
        selector: selector,
        test: function(value) {
            return value.length < 6 || value.length > 20 ? mess : undefined;
        },
    }
}
const password_confirmation = function(selector, value, mess) {
    return {
        selector: selector,
        test: function(confirm) {
            return confirm === value() ? undefined : mess;
        }
    }
}

Validator({
    form: '#form-1',
    errorInvalid: '.form-message',
    rules: [isRequired('#fullname', 'Vui lòng nhập trường này'), isRequired_password('#password', "6-20 kí tự"),
        password_confirmation('#password_confirmation', function() {
            return document.querySelector('#form-1 #password').value;
        }, 'Mật khẩu xác nhận chưa chính xác'), isEmail('#email', 'Vui lòng nhập email hợp lệ'),
    ]
})