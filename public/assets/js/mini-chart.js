// Mini Cart
paypal.minicart.render({
    action: '#'
});

if (~window.location.search.indexOf('reset=true')) {
    paypal.minicart.reset();
}

$('.counter').countUp();