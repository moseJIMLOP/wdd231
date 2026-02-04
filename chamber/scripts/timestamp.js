<script>
    document.querySelectorAll('.membership-cards a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).showModal();
        });
    });
</script>
