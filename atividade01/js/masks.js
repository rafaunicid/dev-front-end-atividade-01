(function () {
    function setMask(el, cb) {
        el.addEventListener('input', function (e) {
            const old = el.value;
            const cleaned = old.replace(/\D/g, '');
            el.value = cb(cleaned);
        });
    }


    const cpf = document.getElementById('cpf');
    const tel = document.getElementById('telefone');
    const cep = document.getElementById('cep');


    if (cpf) setMask(cpf, function (v) {
        v = v.slice(0, 11);
        return v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, function (_, a, b, c, d) {
            return a + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '-' + d : '');
        });
    });


    if (tel) setMask(tel, function (v) {
        v = v.slice(0, 11);
        if (v.length <= 10) {
            return v.replace(/(\d{2})(\d{4})(\d{0,4})/, function (_, a, b, c) {
                return '(' + a + ') ' + b + (c ? '-' + c : '');
            });
        } else {
            return v.replace(/(\d{2})(\d{5})(\d{0,4})/, function (_, a, b, c) {
                return '(' + a + ') ' + b + (c ? '-' + c : '');
            });
        }
    });


    if (cep) setMask(cep, function (v) {
        v = v.slice(0, 8);
        return v.replace(/(\d{5})(\d{0,3})/, function (_, a, b) {
            return a + (b ? '-' + b : '');
        });
    });
})();