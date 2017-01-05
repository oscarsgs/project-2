$('#project-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var title = button.data('title');
    var link = button.data('link');
    var description = button.data('description');
    var img = button.data('img');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body').html("<p class='text-center'><a href='" + link + "'><img src='" + img + "'></a></p><p class='text-center'>" + description + "</p><p class='text-center'><a href='" + link + "' target='_blank'>View full website</a></p>");
});