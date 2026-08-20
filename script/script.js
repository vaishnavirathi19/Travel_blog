document.addEventListener('DOMContentLoaded', () => {
        const menuIcon = document.getElementById('menu-icon');
        const navBar = document.querySelector('.nav-bar');

        if (menuIcon && navBar) {
            menuIcon.addEventListener('click', (e) => {
                e.preventDefault(); // Stops the page from jumping
                
                // Toggles the dropdown menu open and closed
                navBar.classList.toggle('active');
                
                // Swaps the icon back and forth (if using FontAwesome)
                if (navBar.classList.contains('active')) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-xmark');
                } else {
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        } else {
            console.error("Error: Could not find #menu-icon or .nav-bar in the HTML.");
        }
    });