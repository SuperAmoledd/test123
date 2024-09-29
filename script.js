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
