// JavaScript sẽ được sử dụng sau này nếu cần
console.log("Trang web đã được tải thành công!");


// Hiển thị thông báo chào mừng khi trang được tải
window.onload = function() {
    alert("Chào mừng bạn đến với trang web tin tức!");
};


// Tìm kiếm tin tức
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        item.style.display = title.includes(query) ? 'block' : 'none';
    });
});


document.getElementById('load-news').addEventListener('click', loadNews);

function loadNews() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Xóa nội dung cũ
            data.forEach(news => {
                const article = document.createElement('article');
                article.classList.add('news-item');

                article.innerHTML = `
                    <h2>${news.title}</h2>
                    <p>${news.body}</p>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
}

// Tìm kiếm tin tức
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        item.style.display = title.includes(query) ? 'block' : 'none';
    });
});
