document.addEventListener('DOMContentLoaded', function () {
    const consentBanner = document.getElementById('consent-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    // Check if the user has already made a choice
    const cookieConsent = getCookie('cookieConsent');
    if (!cookieConsent) {
        consentBanner.style.display = 'block';
    } else if (cookieConsent === 'accepted') {
        loadGoogleAnalytics();
    }

    acceptButton.addEventListener('click', function () {
        setCookie('cookieConsent', 'accepted', 365);
        consentBanner.style.display = 'none';
        loadGoogleAnalytics();
    });

    declineButton.addEventListener('click', function () {
        setCookie('cookieConsent', 'declined', 365);
        consentBanner.style.display = 'none';
    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function loadGoogleAnalytics() {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-XXXXXXXXX-Y', 'auto');
        ga('send', 'pageview');
    }
});
