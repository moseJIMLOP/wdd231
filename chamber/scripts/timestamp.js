document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.membership-cards a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const modal = document.querySelector(link.getAttribute('href'));
            if (modal) {
                modal.showModal();
            }
        });
    });
});
