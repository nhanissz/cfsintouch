const knowledgeBase = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Literature", color: "#ff7675", summary: "A critique of the American Dream." },
    { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", color: "#74b9ff", summary: "Exploration of the universe." },
    { title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", color: "#55efc4", summary: "Stoic reflections on life." },
    { title: "The Design of Everyday Things", author: "Don Norman", category: "Design", color: "#a29bfe", summary: "Why products satisfy or frustrate." }
];

const container = document.getElementById('knowledge-container');
const searchBar = document.getElementById('search-bar');
const themeToggle = document.getElementById('theme-toggle');

// 1. Function to render cards
function displayBOK(data) {
    container.innerHTML = ''; // Clear existing
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'entry-card';
        card.style.borderTop = `6px solid ${item.color}`;

        card.innerHTML = `
            <span class="tag" style="background-color: ${item.color}">${item.category}</span>
            <h2>${item.title}</h2>
            <p><strong>By:</strong> ${item.author}</p>
            <p>${item.summary}</p>
        `;
        container.appendChild(card);
    });
}

// 2. Search Feature
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = knowledgeBase.filter(item => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.author.toLowerCase().includes(searchTerm) || 
        item.category.toLowerCase().includes(searchTerm)
    );
    displayBOK(filteredData);
});

// 3. Dark Mode Feature
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial Load
window.onload = () => displayBOK(knowledgeBase);