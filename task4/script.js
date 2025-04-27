// Typing Animation for the Tagline
const tagline = document.querySelector('.home-content h3 span');
const words = ["Full-Stack Developer", "Data Enthusiast"];
let wordIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < words[wordIndex].length) {
        tagline.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Typing speed
    } else {
        setTimeout(deleteText, 1500); // Pause before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        tagline.textContent = tagline.textContent.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 100); // Deleting speed
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Cycle through words
        setTimeout(typeText, 500); // Pause before typing the next word
    }
}

typeText(); // Start the typing animation

// Smooth Scroll for "More About Me" Button
const moreBtn = document.querySelector('.home-content .btn');
moreBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// Add Hover Animation for Social Media Links
const socialLinks = document.querySelectorAll('.social-media a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#a020f0'; // Change color on hover
        link.style.transform = 'scale(1.2)'; // Slight zoom effect
        link.style.transition = 'transform 0.3s ease, color 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = ''; // Revert to original color
        link.style.transform = 'scale(1)'; // Reset zoom effect
    });
});
// Handle "Learn More" Button Clicks
const learnMoreButtons = document.querySelectorAll('.service-cards .btn');

learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Create or locate the target content for the corresponding button
        const targetSectionId = `service-content-${index + 1}`; // Dynamically set IDs for target sections
        let targetSection = document.querySelector(`#${targetSectionId}`);

        // If the section doesn't exist, create one dynamically (optional)
        if (!targetSection) {
            targetSection = document.createElement('div');
            targetSection.id = targetSectionId;
            targetSection.innerHTML = `<h2>${button.parentElement.querySelector('h3').textContent}</h2><p>Details about this service will be added here...</p>`;
            targetSection.style.cssText = 'padding: 50px; background: #2b0062; color: #fff; margin-top: 20px;';
            document.body.appendChild(targetSection);
        }

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Map "Learn More" Buttons to Pre-Defined Sections
const buttonToSectionMap = {
    0: '#full-stack',
    1: '#ui-ux',
    2: '#problem-solving',
    3: '#data-analysis',
    4: '#cloud-solutions',
    5: '#api-development'
};

learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(buttonToSectionMap[index]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Animate Linear Progress Bars for Technical Skills
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((bar, index) => {
    const skillName = bar.parentElement.querySelector('span').textContent.trim();
    let percentage = 0;

    // Assign progress percentage based on the skill name
    switch (skillName) {
        case 'HTML':
            percentage = 90;
            break;
        case 'CSS':
            percentage = 80;
            break;
        case 'JavaScript':
            percentage = 85;
            break;
        case 'Python':
            percentage = 75;
            break;
        case 'React':
            percentage = 80;
            break;
        case 'Azure':
            percentage = 85;
            break;
        case 'SQL':
            percentage = 90;
            break;
        default:
            percentage = 0;
    }

    let currentProgress = 0; // Start progress at 0%

    window.addEventListener('scroll', () => {
        const skillsSection = document.querySelector('#skills');
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight - 100) { // Trigger animation when section is in view
            if (!bar.classList.contains('animated')) { // Prevent multiple triggers
                bar.classList.add('animated');

                // Create the inner progress div if not already present
                const progress = document.createElement('div');
                progress.className = 'progress';
                progress.style.height = '100%';
                bar.appendChild(progress);

                // Smooth animation for the progress bar
                const interval = setInterval(() => {
                    if (currentProgress >= percentage) {
                        clearInterval(interval); // Stop the animation when target percentage is reached
                    } else {
                        currentProgress++;
                        progress.style.width = `${currentProgress}%`; // Increment width step-by-step
                    }
                }, 15); // Adjust speed of the animation
            }
        }
    });
});

// Animate Circular Progress Indicators for Professional Skills
const circularSkills = document.querySelectorAll('.circular-skill .bar');

circularSkills.forEach(skill => {
    const percentage = skill.dataset.progress; // Get progress percentage from the data-progress attribute
    let currentProgress = 0; // Start animation at 0%

    window.addEventListener('scroll', () => {
        const skillsSection = document.querySelector('#skills');
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight) {
            const interval = setInterval(() => {
                if (currentProgress >= percentage) {
                    clearInterval(interval); // Stop animation once the target percentage is reached
                } else {
                    currentProgress++;
                    skill.style.clipPath = `inset(0 ${100 - currentProgress}% 50% 0)`; // Update the circular progress
                    skill.parentElement.querySelector('.percentage').textContent = `${currentProgress}%`; // Update displayed percentage
                }
            }, 20); // Adjust speed of the animation (lower value = faster)
        }
    });
});
// Add Event Listeners to "Start" Buttons
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    const button = card.querySelector('.btn');
    const projectTitle = card.querySelector('h3').textContent.trim();

    button.addEventListener('click', () => {
        // Handle Button Click Event
        alert(`You selected "${projectTitle}"!`);

        // Example of opening a modal or redirect (optional, replace with actual functionality)
        console.log(`Redirecting to details for project: ${projectTitle}`);
    });
});
// JavaScript for the Contact Section
document.addEventListener("DOMContentLoaded", function () {
    // Form submission alert
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Thank you for reaching out! I'll get back to you soon.");
    });

    // Redirect for LinkedIn
    const linkedInLink = document.querySelector('.socials a:nth-child(1)');
    linkedInLink.href = "https://www.linkedin.com/in/bondili-kusuma-313844336/"; // Replace 'your-profile' with your LinkedIn profile URL

    // Redirect for GitHub
    const gitHubLink = document.querySelector('.socials a:nth-child(2)');
    gitHubLink.href = "https://github.com/"; // Replace 'your-username' with your GitHub profile URL
});