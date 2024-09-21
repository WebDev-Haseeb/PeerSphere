// Sample subject data (replace with actual data from your backend)
const pageSubjects = [
    {
        id: 1,
        name: "Data Structures & Algorithms",
        icon: "fas fa-project-diagram",
        description: "Explore the fundamental building blocks of computer science and efficient problem-solving techniques.",
        resourceCount: 250,
        contributorCount: 120,
        rating: 4.8
    },
    {
        id: 2,
        name: "Object-Oriented Programming",
        icon: "fas fa-cube",
        description: "Master the principles of OOP and learn to design robust, scalable software systems.",
        resourceCount: 180,
        contributorCount: 95,
        rating: 4.7
    },
    {
        id: 3,
        name: "Web Development",
        icon: "fas fa-globe",
        description: "Dive into the world of web technologies and build responsive, dynamic websites.",
        resourceCount: 320,
        contributorCount: 150,
        rating: 4.9
    },
    {
        id: 4,
        name: "Machine Learning",
        icon: "fas fa-brain",
        description: "Discover the power of AI and learn to create intelligent systems that learn from data.",
        resourceCount: 200,
        contributorCount: 80,
        rating: 4.6
    },
    {
        id: 5,
        name: "Cybersecurity",
        icon: "fas fa-shield-alt",
        description: "Learn how to protect systems, networks, and programs from digital attacks.",
        resourceCount: 150,
        contributorCount: 70,
        rating: 4.5
    },
    {
        id: 6,
        name: "Cloud Computing",
        icon: "fas fa-cloud",
        description: "Understand the fundamentals of cloud services and how to deploy scalable applications.",
        resourceCount: 180,
        contributorCount: 85,
        rating: 4.7
    },
    {
        id: 7,
        name: "DevOps",
        icon: "fas fa-sync-alt",
        description: "Learn the practices that combine software development and IT operations to shorten the development lifecycle.",
        resourceCount: 140,
        contributorCount: 60,
        rating: 4.6
    },
    {
        id: 8,
        name: "Blockchain",
        icon: "fas fa-link",
        description: "Explore the technology behind cryptocurrencies and decentralized applications.",
        resourceCount: 120,
        contributorCount: 50,
        rating: 4.4
    }
];

// Function to create subject cards
function createSubjectCards() {
    const subjectCardsContainer = document.querySelector('.subject-cards');
    pageSubjects.forEach(subject => {
        const card = document.createElement('div');
        card.classList.add('subject-card');
        card.innerHTML = `
            <i class="${subject.icon}"></i>
            <h3>${subject.name}</h3>
        `;
        card.addEventListener('click', () => showSubjectDetails(subject));
        subjectCardsContainer.appendChild(card);
    });
}

// Function to show subject details
function showSubjectDetails(subject) {
    const detailsSection = document.getElementById('subjectDetails');
    const titleElement = document.getElementById('subjectTitle');
    const descriptionElement = document.getElementById('subjectDescription');
    const resourceCountElement = document.getElementById('resourceCount');
    const contributorCountElement = document.getElementById('contributorCount');
    const ratingElement = document.getElementById('rating');

    titleElement.textContent = subject.name;
    descriptionElement.textContent = subject.description;
    resourceCountElement.textContent = subject.resourceCount;
    contributorCountElement.textContent = subject.contributorCount;
    ratingElement.textContent = subject.rating;

    detailsSection.classList.add('active');
}

// Function to close subject details
function closeSubjectDetails() {
    const detailsSection = document.getElementById('subjectDetails');
    detailsSection.classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createSubjectCards();
    document.getElementById('closeDetails').addEventListener('click', closeSubjectDetails);
    animateSubjectCards();
});

// Function to animate subject cards
function animateSubjectCards() {
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
        card.classList.add('animate');
    });
}