/*
* Adds modal content for the selected project
*/
$('#project-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    // Extract info from data-* attributes
    // Update the modal's content.
    var title = button.data('title');
    var link = button.data('link');
    var description = button.data('description');
    var img = button.data('img');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body').html("<p class='text-center'><a href='" + link + "'><img src='" + img + "'></a></p><p class='text-center'>" + description + "</p><p class='text-center'><a href='" + link + "' target='_blank'>View full website</a></p>");
});