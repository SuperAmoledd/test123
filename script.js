const stories = {
    story1: [
        "Ngày xửa ngày xưa, có một cô gái tên là Lọ Lem...",
        "Một hôm, Lọ Lem được mời đến dự tiệc ở hoàng cung...",
        "Tại đó, cô đã gặp hoàng tử và cả hai đã phải lòng nhau...",
        "Cuối cùng, họ sống hạnh phúc bên nhau mãi mãi."
    ],
    story2: [
        "Ngày xửa ngày xưa, có một cô bé tên là Lửa...",
        "Cô đã sống trong một ngôi làng nhỏ...",
        "Một ngày nọ, cô đã khám phá ra sức mạnh của mình...",
        "Cuối cùng, cô trở thành một anh hùng trong lòng mọi người."
    ],
    story3: [
        "Ngày xửa ngày xưa, có một cô bé tên là Lửa...",
        "Cô đã sống trong một ngôi làng nhỏ...",
        "Một ngày nọ, cô đã khám phá ra sức mạnh của mình...",
        "Cuối cùng, cô trở thành một anh hùng trong lòng mọi người."
    ],
    story4: [
        "Ngày xửa ngày xưa, có một cô bé tên là Lửa...",
        "Cô đã sống trong một ngôi làng nhỏ...",
        "Một ngày nọ, cô đã khám phá ra sức mạnh của mình...",
        "Cuối cùng, cô trở thành một anh hùng trong lòng mọi người."
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
