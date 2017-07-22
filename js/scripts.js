/**
 * Created by Win10 on 15/07/2017.
 */
// cerrar el panel de contacto
$(document).mouseup(function (e) {
    var container = $('#contact-panel');
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.removeClass('is-active');
    }
});