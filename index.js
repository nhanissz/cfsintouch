// Sample data for your Book of Knowledge
const knowledgeBase = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Classic Literature",
        summary: "A critique of the American Dream set in the Roaring Twenties."
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        summary: "An exploration of cosmology, black holes, and the origins of the universe."
    },
    {
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "Philosophy",
        summary: "Personal reflections on Stoicism and how to live a virtuous life."
    }
];

const container = document.getElementById('knowledge-container');

// Function to render the entries
function displayBOK() {
    knowledgeBase.forEach(item => {
        const card = document.createElement('div');
        card.className = 'entry-card';

        card.innerHTML = `
            <span class="tag">${item.category}</span>
            <h2>${item.title}</h2>
            <p><strong>Author:</strong> ${item.author}</p>
            <p>${item.summary}</p>
        `;

        container.appendChild(card);
    });
}

// Initialize the site
window.onload = displayBOK;