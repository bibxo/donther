const img = document.getElementById('whim-img');
const input = document.getElementById('user-input');

const defaultImg = 'images/normal.png';
const happyImg = 'images/happy.png';
const triggeredImg = 'images/trigger.png';

const triggerWords = ['work', 'job', 'gay', 'jesus', 'musab', 'boobjoob', 'accountability', 'faggot', 'nigger', 'willow', 'sexism', 'father', 'ai', 'ex', 'boyfriend', 'ableton', 'flstudio', 'recording', 'mp4 to mp3', 'downloading', 'doomscroll', 'bullshit', 'queer', 'rich', 'boys', 'arab', 'arabs'];
const happyWords = ['dnd', 'racism', 'racist', 'language', 'culture', 'blender', 'art', 'poor', 'broke', 'music', 'starter loops', 'production', 'girls', 'creativity', 'unemployment', 'laziness', 'adhd', 'ocd', 'autism', 'cp']
const arabicRegex = /[\u0600-\u06FF]+/;

input.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const words = text.split(/[^a-z0-9\u0600-\u06ff]+/).filter(Boolean);
    const containsArabic = arabicRegex.test(text);

    let state = 'default';

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];

        if (happyWords.includes(word)) {
            state = 'happy';
            break;
        }

        if (triggerWords.includes(word) || containsArabic) {
            state = 'triggered';
            break;
        }
    }

    img.classList.remove('triggered', 'happy');

    if (state === 'happy') {
        img.src = happyImg;
        img.classList.add('happy');
    } else if (state === 'triggered') {
        img.src = triggeredImg;
        img.classList.add('triggered');
    } else {
        img.src = defaultImg;
    }
});
