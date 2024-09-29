const stories = [
    "Ngày xửa ngày xưa, có một cô gái tên là Lọ Lem...",
    "Một hôm, Lọ Lem được mời đến dự tiệc ở hoàng cung...",
    "Tại đó, cô đã gặp hoàng tử và cả hai đã...",
    "Nhảy hiphop tại chỗ và đục mỏ thằng đang đọc bài lồn này!!!!!!!!!!"
];

let currentStoryIndex = 0;

const storyDiv = document.getElementById('story');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    if (currentStoryIndex < stories.length) {
        storyDiv.innerHTML += `<p>${stories[currentStoryIndex]}</p>`;
        currentStoryIndex++;
    } else {
        alert("Đã hết truyện!");
        nextBtn.disabled = true;
    }
});
