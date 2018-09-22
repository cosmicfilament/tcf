'use strict';

$(document).ready(() => {
    // set the copyright year for the footer
    $(".tcf-copyright").prepend(`Copyright ${new Date().getFullYear()}`);
});

/*******************************************************/
/*** Adds the active class to the selected Menu Item ***/
/*******************************************************/

$(document).ready(() => {
    const url = window.location.href;
    $(".menuActivator li a").each(function () {
        if (url === (this.href)) {
            $('.menuActivator li.active').removeClass('active');
            $(this).closest("li").addClass("active");
        }
    });
});

/*******************************************************/
/***    Uses ajax call to get the next or previous   ***/
/***    page of blog entries                         ***/
/*******************************************************/

$(document).ready(() => {
    $('.btn-paginate').on('click', (e) => {
        const frm = $('.form-paginate');
        // current page
        let nPage = parseInt($("input[name= '_page']").val());

        e.preventDefault();
        // we don't want to retrieve an empty set eg: beyond the total number of pages
        if (nPage === parseInt($("input[name= '_total']").val())) {
            return;
        }
        // else
        if (e.target.name === "_next") {
            nPage += 1;
        }
        else { // don't go below the first page
            nPage = nPage > 1 ? nPage -= 1 : 1;
        }

        const token = $("input[name= '_csrf']").val();

        $.ajax({
            url: frm.attr('action'),
            type: frm.attr('method'),
            // send the next page selected
            // don't send total because it could change
            // if the admin is adding a blog entry
            data: { page: nPage, _csrf: token },
            success: (data) => {
                if (data.success === true) {
                    $('.insertBlog').html(data.data);
                    $("input[name= '_csrf']").val(data.csrfToken);
                    $('._response').html(`<span>[Page ${data.page} of ${data.total}]</span>`);
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

$(document).ready(() => {
    $('.contact-comments').on('submit', (e) => {
        const frm = $('.contact-comments');
        const responseField = $('.response');

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
