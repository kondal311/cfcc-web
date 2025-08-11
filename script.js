// Example News Data (you can fetch from JSON later)
const newsData = [
  {
    title: "Season Opener Victory!",
    date: "2025-01-10",
    content: "CFCC kicked off the season with an exciting win over rivals!"
  },
  {
    title: "Junior Training Sessions Begin",
    date: "2025-01-15",
    content: "New junior players welcome! Sessions every Saturday morning."
  }
];

function loadNews() {
  const container = document.getElementById("news-list");
  newsData.forEach(item => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("p-4", "bg-gray-50", "rounded-lg", "shadow");
    newsItem.innerHTML = `
      <h4 class="text-xl font-semibold text-green-800">${item.title}</h4>
      <small class="text-gray-500">${item.date}</small>
      <p class="mt-2">${item.content}</p>
    `;
    container.appendChild(newsItem);
  });
}

document.addEventListener("DOMContentLoaded", loadNews);
