// Simple interaction
document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
});

// Fetch data asynchronously
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const newsFeed = document.getElementById('news-feed');
        data.slice(0, 5).forEach(post => {
            if (post.language !== 'en') {
                // Inform no english news available
                const article = document.createElement('article');
                article.innerHTML = '<p>No english news available</p>';
                newsFeed.appendChild(article);
                return;
            }
            else {
                const article = document.createElement('article');
                article.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                newsFeed.appendChild(article);
            }
        });
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
    });

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior to navigation links
    document.querySelectorAll('.scroll-link').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1); // Remove the #
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
