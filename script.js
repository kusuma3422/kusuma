document.addEventListener('DOMContentLoaded', () => {

    // ===== CONTACT FORM =====
    const contactForm = document.querySelector('#contact-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields before submitting.');
                event.preventDefault();
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            alert('Thank you for reaching out! We’ll get back to you soon.');
            contactForm.reset();
            event.preventDefault();
        });
    }

    // ===== LOGIN FORM =====
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!username || !password) {
                alert('Please fill in both username/email and password.');
                event.preventDefault();
                return;
            }

            // Dummy login check (replace with real logic)
            if (username === "user@example.com" && password === "password123") {
                alert('Login successful! Welcome back 🍦');
            } else {
                alert('Invalid login credentials. Please try again.');
            }

            event.preventDefault();
        });
    }

    // ===== SIGN-UP FORM =====
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            if (!name || !email || !password || !confirmPassword) {
                alert('Please complete all fields.');
                event.preventDefault();
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                event.preventDefault();
                return;
            }

            alert('Account created successfully! 🍨');
            signupForm.reset();
            event.preventDefault();
        });
    }

    // ===== TO-DO LIST =====
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            taskItem.remove();
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field
    }

    // ===== IMAGE GALLERY =====
    const imageUrlInput = document.getElementById('imageUrlInput');
    const imageGallery = document.getElementById('imageGallery');

    function addImage() {
        const imageUrl = imageUrlInput.value.trim();
        if (imageUrl === '') {
            alert('Please enter a valid image URL.');
            return;
        }

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Ice Cream Image';
        imgElement.style.width = '100px';  // You can adjust this style as needed
        imgElement.style.margin = '10px';

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            imgElement.remove();
            removeButton.remove();
        };

        imageGallery.appendChild(imgElement);
        imageGallery.appendChild(removeButton);
        imageUrlInput.value = ''; // Clear input field
    }

    // Attach event listeners to buttons for the To-Do List and Image Gallery
    document.querySelector('button[onclick="addTask()"]').addEventListener('click', addTask);
    document.querySelector('button[onclick="addImage()"]').addEventListener('click', addImage);
});
