document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tools-container');

  fetch('/tools.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(tools => {
      tools.forEach(tool => {
        const card = document.createElement('a');
        card.href = tool.url;
        card.className = 'card';
        card.target = '_blank';
        card.innerHTML = `
          <img src="${tool.icon}" alt="${tool.name} Icon" class="card-icon">
          <h3 class="card-title">${tool.name}</h3>
          <p>${tool.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching tools:', error);
      container.innerHTML = `<p style="text-align:center; color: var(--cf-ruby-orange);">Failed to load tools. Please try again later.</p>`;
    });
});
