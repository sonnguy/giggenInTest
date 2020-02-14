$(document).ready(function () {
    $('#membership-question').on('shown.bs.collapse', function () {
        checkCollapseMenu();
    });

    $('#membership-question').on('hidden.bs.collapse', function () {
        checkCollapseMenu();
    });

    $('.credits-summary__add-promo-code').click(function () {
        getPromo();
    });

    function checkCollapseMenu() {
        $('.header-collapse').find(".membership-benifits__icon").addClass('fa-chevron-down').removeClass('fa-chevron-up');
        $('.header-collapse[aria-expanded="true"]').find(".membership-benifits__icon").addClass('fa-chevron-up').removeClass('fa-chevron-down');
    }

    function getPromo() {
        $('.credits-summary__promo-list').html('<span class="loading-text px-4 py-2">Loading...</span>');
        $.get('https://jsonplaceholder.typicode.com/users', function (res) {
            let html = '';
            res.forEach(function (item) {
                let promoitem =
                    '<div class="credits-summary__promo-item px-4 py-2">' +
                    '<h6 class="credits-summary__promo-item__name mb-1">' + item.name + '</h6>' +
                    '<span class="credits-summary__promo-item__email">' + item.email + '</span>' +
                    '</div>';
                html += promoitem;
            });
            $('.credits-summary__promo-list').html(html);
        });
    }
})