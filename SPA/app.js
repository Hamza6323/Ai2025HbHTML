$(document).ready(function() {
    // Load header on all pages
    $('#header').load('header.html');
    
    // Function to load content
    function loadPage(page) {
        $('#content').load(page + '.html');
        
        // Update active link
        $('.nav-link').removeClass('active');
        $(`a[href="#${page}"]`).addClass('active');
    }
    
    // Router function
    function router() {
        const hash = window.location.hash.slice(1) || 'index';
        loadPage(hash);
    }
    
    // Listen for hash changes
    $(window).on('hashchange', router);
    
    // Initial load
    router();
    
    // Handle navigation clicks
    $(document).on('click', '.nav-link', function(e) {
        e.preventDefault();
        const page = $(this).attr('href').slice(1);
        window.location.hash = page;
    });
});