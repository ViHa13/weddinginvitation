

        function toggleMobileNavbar() {
            const mobileNavbar = document.getElementById('mobile-navbar');
            if (mobileNavbar.style.display === 'flex') {
                mobileNavbar.style.display = 'none';
            } else {
                mobileNavbar.style.display = 'flex';
            }
        }