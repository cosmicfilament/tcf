'use strict';

(($)=> {

    //const $window = $(window);
    const $document = $(document);

    /*******************************************************/
    /***          Date and Time Functions                ***/
    /*******************************************************/

    $document.ready(() => {
        const date = new Date();
        //const day = date.getDate();
        //const month = date.getMonth();
        const year = date.getFullYear();

        //const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // set the copyright year for the footer
        $(".tcf-copyright").prepend(`Copyright ${year}`);

        // set the current day and date for the blog-classic date <div>
        //$(".blog-classic .date").html(`${day}<span>${months[month]} ${year}</span>`);
    });

    /*******************************************************/
    /*** Adds the active class to the selected Menu Item ***/
    /*******************************************************/

    $document.ready(() => {
        // get the substring with the name of the pending active page
        let newActive = $(location).attr('pathname');
        // when website is first loaded then url is '/' vice 'Home'
        if (newActive === '/') {
            newActive = '/Home';
        }
        newActive = newActive.substring(newActive.indexOf('/') + 1).toUpperCase();
        //remove the active class from the page we just left
        $('.menuzord-menu li.active').removeClass('active');

        // iterate thru the menu and set the current page active
        const $menuItems = $('.menuzord-menu li a');
        $.each($menuItems, (index, item) => {

            let tryMatch = $(item).attr('href').toUpperCase();
            if (tryMatch && tryMatch.match(/\/(\w+)/) !== null) {
                tryMatch = tryMatch.substring(tryMatch.indexOf('/') + 1);

                if (tryMatch === newActive) {
                    $(item).parent().addClass('active');
                }
            }
        });
    });

    /*******************************************************/
    /***    Uses ajax call to get the next or previous   ***/
    /***    page of blog entries                         ***/
    /*******************************************************/

    $document.ready(() => {
        $('.btn-paginate').on('click', (e) => {
            const frm = $('.form-paginate');
            const $page = $("input[name= '_page']");
            let nPage = parseInt($page.val());
            nPage = isNaN(nPage) ? 0 : nPage;

            if (e.target.name === "_next") {
                nPage += 1;
            }
            else {
                nPage = nPage > 0 ? nPage -= 1 : 0;
            }
            $page.val(nPage);
            console.log(`Page next: ${nPage}.`);
            e.preventDefault();
            $.ajax({
                url: frm.attr('action'),
                type: frm.attr('method'),
                data: { page: nPage },
                success: (data) => {
                    if (data.success === true) {
                        $('.insertBlog').html(data.data);
                        $('._response').html(`<span>[ ${parseInt($("input[name= '_page']").val()) + 1} ]</span>`);
                        $("html, body").animate({
                            scrollTop: $(".banner-state").offset().top
                        }, 500);
                    } else {
                        $("._response").html('<p>There was a problem in submitting your information.</p>');
                    }
                },
                error: () => {
                    $("._response").html('<p>There was an unexpected system problem.</p>');
                }
            });
        });
    });

    /*****************************************************************/
    /***    Uses ajax call to submit contact form data to server.  ***/
    /***    Server adds form data to db and emails me a copy.      ***/
    /*****************************************************************/

    $document.ready(() => {
        $('.contact-comments').on('submit', (e) => {
            const frm = $('.contact-comments');
            const responseField = $('.response');

            console.log("contact form submit");
            e.preventDefault();

            $.ajax({
                url: frm.attr('action'),
                type: frm.attr('method'),
                data: frm.serialize(),
                success: (data) => {
                    if (data.success === true) {
                        responseField.html(`<h3>Thank You!</h3><p>${data.msg}</p>`);
                        $("button[name='submit']").attr('disabled', true);
                    } else {
                        responseField.html(`<p>There was a problem in submitting your information.</p><p>${data.msg}</p>`);
                    }
                },
                error: () => {
                    responseField.html(`<p>There was an unexpected system problem.</p>`);
                }
            });
        });
    });

})(jQuery);
