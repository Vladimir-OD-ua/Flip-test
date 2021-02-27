document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        progress = (document.documentElement.scrollTop / ( document.documentElement.scrollHeight - window.innerHeight ) ) * 100;

        if (progress > 10) {
            document.querySelector('#dollar').classList.add('active');
        } else {
            document.querySelector('#dollar').classList.remove('active');
        }

        if (progress > 70) {
            document.querySelector('#euro').classList.add('active');
        } else {
            document.querySelector('#euro').classList.remove('active');
        }
    });
});
