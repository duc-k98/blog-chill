const statuses = [
    { text: "🌧️ Khi trời mưa lòng em có buồn như anh không?", music: "https://www.youtube.com/watch?v=abc123" },
    { text: "💔 Tình yêu như cơn gió... thoáng qua rồi lại bay xa.", music: "https://www.youtube.com/watch?v=xyz456" },
    { text: "🌙 Đêm nay nhớ ai đó đến quên cả ngủ...", music: "https://www.youtube.com/watch?v=efg789" }
];

const statusList = document.getElementById('status-list');

function renderStatuses() {
    statuses.forEach(status => {
        const div = document.createElement('div');
        div.className = 'status-item';
        div.innerHTML = `
            <p>${status.text}</p>
            <a href="${status.music}" target="_blank">🎶 Nghe nhạc</a>
        `;
        statusList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderStatuses);