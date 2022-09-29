/* international-tel-input */

let input = document.querySelector("#phone")
errorMsg = document.querySelector("#error-msg")
validMsg = document.querySelector("#valid-msg");
let want_country = document.querySelector(".iti_preferred");

// Error messages based on the code returned from getValidationError

let errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

var intl = window.intlTelInput(input, {
    initialCountry: "tr",
    geoIpLookup: function(success, failure) {
        $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            let countryCode = (resp && resp.country) ? resp.country : "";
            success(countryCode);
        });
    },
    utilsScript: './js/utils.js',
    nationalMode: false,
});

var reset = function() {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
};

// Validate on blur event
input.addEventListener('blur', function() {
    reset();
    if (input.value.trim()) {
        if (intl.isValidNumber()) {
            validMsg.classList.remove("hide");
            validMsg.innerHTML = "Valid";
        } else {
            input.classList.add("error");
            var errorCode = intl.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
        }
    }
});

// Rseet on keyup/change event
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);
/* form-validation */

// Example starter JavaScript for disabling form submissions if there are invalid fields
let submit = document.getElementsByClassName('btn_submit');
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll("form")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
                console.log("Validation is running")
            }, false)
        })
})();


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}



var ul = document.getElementById('services');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    const b = target.innerHTML;
    var clickServices = document.getElementById("click_services").innerHTML = b;
};

function btnClick() {

    submit_ID.value = "Joining";

    var full_name = document.getElementById("fname").value;
    var phone_number = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var service_target = document.getElementById("click_services").innerHTML;
    var message = document.getElementById("floatingTextarea2").value;

    console.log("First-Last Name: ", full_name);
    console.log("Phone Number: ", phone_number);
    console.log("Country: ", country);
    console.log("Selected Service: ", service_target);
    console.log("Message: ", message);
}