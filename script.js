const stories = {
    story1: [
        "Ngày xửa ngày xưa, có một cô gái tên là Lọ Lem...",
        "Một hôm, Lọ Lem được mời đến dự tiệc ở hoàng cung...",
        "Tại đó, cô đã gặp hoàng tử và cả hai đã...",
        "Nhảy HIPHOP và đục mỏ thằng lồn đang đọc truyện này!!!!!!!!!",
        "----------------------------------------------",
        "                Đang ra chap mới"

    ],
    story2: [
        "Một hôm nọ, trên đường đi hiphop của khầy...",
        "Bắt gặp một con khỉ đang tích dịch dưới hang đá...",
        "----------------------------------------------",
        "                Đang ra chap mới"
    ],
    story3: [
        "Ngày xửa ngày xưa, có một cô bé tên là Lửa...",
        "Cô đã sống trong một ngôi làng nhỏ...",
        "Một ngày nọ, cô đã khám phá ra sức mạnh của mình...",
        "Cô đã sử dụng sức mạnh đó để đục cu mấy thằng ấu dâm...",
        "----------------------------------------------",
        "                Đang ra chap mới"
    ],
    story4: [
        "           1/2025 ra truyện!!!"
    ],
    // Thêm các truyện khác tương tự ở đây
};

let currentStoryIndex = 0;
let currentStoryKey = '';

const storyDiv = document.getElementById('story');
const nextBtn = document.getElementById('nextBtn');

document.getElementById('story1').addEventListener('click', () => loadStory('story1'));
document.getElementById('story2').addEventListener('click', () => loadStory('story2'));
document.getElementById('story3').addEventListener('click', () => loadStory('story3'));
document.getElementById('story4').addEventListener('click', () => loadStory('story4'));
// Thêm sự kiện cho các truyện khác tương tự ở đây

function loadStory(storyKey) {
    currentStoryKey = storyKey;
    currentStoryIndex = 0;
    storyDiv.innerHTML = `<h2>${storyKey.replace('story', 'Truyện ')}</h2>`;
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
    if (currentStoryIndex < stories[currentStoryKey].length) {
        storyDiv.innerHTML += `<p>${stories[currentStoryKey][currentStoryIndex]}</p>`;
        currentStoryIndex++;
    } else {
        alert("Đã hết truyện!");
        nextBtn.disabled = true;
        
    }
});
