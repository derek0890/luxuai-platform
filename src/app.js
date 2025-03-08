// Main application file
document.addEventListener('DOMContentLoaded', function() {
    console.log('LuxuAI application initialized');
    
    // Navigation handler
    const navLinks = document.querySelectorAll('nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Navigating to: ${this.textContent}`);
            
            // Simple navigation handling
            if (this.textContent === 'Brand Story') {
                showBrandStoryForm();
            } else if (this.textContent === 'Dashboard') {
                showDashboard();
            } else {
                // For other navigation items
                alert(`${this.textContent} feature will be implemented soon!`);
            }
        });
    });
    
    // Direct button handler for Create Brand Story
    const createBrandStoryBtn = document.getElementById('createBrandStoryBtn');
    if (createBrandStoryBtn) {
        createBrandStoryBtn.addEventListener('click', function() {
            console.log('Create Brand Story button clicked');
            showBrandStoryForm();
        });
    }
    
    // Other dashboard buttons
    const otherButtons = document.querySelectorAll('.card .btn:not(#createBrandStoryBtn)');
    otherButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent;
            console.log(`Action triggered: ${action}`);
            alert(`${action} feature will be implemented soon!`);
        });
    });
});

function showBrandStoryForm() {
    const mainContent = document.querySelector('main');
    const dashboard = document.querySelector('#dashboard');
    dashboard.style.display = 'none';
    
    // Create a container for the form if it doesn't exist
    let formContainer = document.querySelector('#brandStoryFormContainer');
    if (!formContainer) {
        formContainer = document.createElement('div');
        formContainer.id = 'brandStoryFormContainer';
        formContainer.className = 'container';
        mainContent.appendChild(formContainer);
    }
    
    // Display the container
    formContainer.style.display = 'block';
    
    // Initialize the form component
    new BrandStoryForm(formContainer);
}

function showDashboard() {
    const dashboard = document.querySelector('#dashboard');
    const formContainer = document.querySelector('#brandStoryFormContainer');
    
    if (dashboard) {
        dashboard.style.display = 'block';
    }
    
    if (formContainer) {
        formContainer.style.display = 'none';
    }
}