// --- MASTER CONFIGURATION ---
const GITHUB_USER = "studyspace011";
const GITHUB_REPO = "ani-personal-dashboard";

// PDF.js Worker Configuration
if (window['pdfjs-dist/build/pdf']) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
}

// --- MASTER ACADEMIC DATABASE ---
const academicDatabase = {
    "MJC-5-Eng": {
        name: "American Literature",
        tag: "mjc-5-english",
        units: [
            { title: "Unit 1: Drama", topics: [{ code: "1.1", name: "Tennessee Williams: The Glass Menagerie" }] },
            { title: "Unit 2: Fiction", topics: [{ code: "2.1", name: "Toni Morrison: Beloved" }] },
            { title: "Unit 3: Short Stories & Prose", topics: [
                { code: "3.1", name: "Edgar Allan Poe: The Purloined Letter" },
                { code: "3.2", name: "O. Henry: The Last Leaf" },
                { code: "3.3", name: "F. Scott Fitzgerald: The Crack-Up" },
                { code: "3.4", name: "William Faulkner: Dry September" }
            ]},
            { title: "Unit 4: Poetry", topics: [
                { code: "4.1", name: "Anne Bradstreet: The Prologue" },
                { code: "4.2", name: "Walt Whitman: O Captain! My Captain!" },
                { code: "4.3", name: "Sherman Alexie: Crow Testament" },
                { code: "4.4", name: "Robert Frost: The Road Not Taken" }
            ]}
        ]
    },
    "MJC-6-Eng": {
        name: "Language and Linguistics",
        tag: "mjc-6-english",
        units: [
            { title: "Unit 1: Core Concepts", topics: [
                { code: "1.1.1", name: "Introduction to Language & Linguistics" },
                { code: "1.1.2", name: "Language Varieties (Dialect, Register)" },
                { code: "1.1.3", name: "Linguistic Dichotomies (Langue & Parole)" }
            ]},
            { title: "Unit 2: Phonetics & Phonology", topics: [
                { code: "2.1.1", name: "Organs of Speech Sound Classification" },
                { code: "2.1.2", name: "Prosody & Syllable Structure (Word Stress)" }
            ]},
            { title: "Unit 3: Morphology", topics: [
                { code: "3.1.1", name: "Morphs, Morphemes & Allomorphs Matrix" },
                { code: "3.1.2", name: "Word Construction & Affixes Systems" }
            ]},
            { title: "Unit 4: Oral Drills & Practices", topics: [{ code: "4.1.1", name: "Applied Phonetics & IPA Transcription Practice" }] }
        ]
    },
    "MJC-7-Eng": {
        name: "British Poetry and Drama : 17th Century",
        tag: "mjc-7-english",
        units: [
            { title: "Unit 1: Epic Poetry", topics: [{ code: "1.1.1.1", name: "John Milton: Paradise Lost (Book 1)" }] },
            { 
                title: "Unit 2: Metaphysical Poetry", topics: [
                    { code: "2.1.1.1", name: "John Donne: The Sunne Rising" },
                    { code: "2.1.1.2", name: "John Donne: The Good Morrow" },
                    { code: "2.1.1.3", name: "John Donne: A Hymn to God the Father" },
                    { code: "2.1.1.4", name: "John Donne: Death Be Not Proud" }
                ] 
            },
            { title: "Unit 3: Jacobean Comedy / Drama", topics: [{ code: "3.1.1.1", name: "Ben Jonson: The Alchemist" }] },
            { title: "Unit 4: Jacobean Tragedy / Drama", topics: [{ code: "4.1.1.1", name: "Thomas Middleton: Women Beware Women" }] }
        ]
    },
    "MIC-4-Urdu": {
        name: "Study of Urdu Ghazal",
        tag: "mic-4-urdu",
        units: [
            { title: "Unit 1: Tareef-o-Tareekh", topics: [
                { code: "1.1", name: "Urdu Ghazal ki Tareef aur Haisiyat" },
                { code: "1.2", name: "Dabistan-e-Delhi aur Lucknow ki Ghazal-goi" }
            ]},
            { title: "Unit 2: Wali & Mir", topics: [
                { code: "2.1", name: "Wali Deccani: Muflisi sab bahar khoti hai" },
                { code: "2.2", name: "Mir Taqi Mir: Nazuki us kay lab ki kya kahiye" }
            ]},
            { title: "Unit 3: Atish & Shad", topics: [
                { code: "3.1", name: "Khwaja Haider Ali Atish: Sun to sahi jahan men" },
                { code: "3.2", name: "Shad Azimabadi: Ab bhi ek umr pe jeene ka" }
            ]}
        ]
    },
    "MIC-4-Hindi": {
        name: "आधुनिक हिन्दी कविता : छायावाद के बाद",
        tag: "mic-4-hindi",
        units: [
            { 
                title: "Unit 1: प्रगतिवादी कविता", 
                topics: [
                    { code: "1.1.1", name: "केदारनाथ अग्रवाल: माँझी! न बजाओ वंशी" },
                    { code: "1.1.2", name: "केदारनाथ अग्रवाल: वह जन मारे नहीं मरेगा" },
                    { code: "1.2.1", name: "नागार्जुन: बादल को घिरते देखा है" },
                    { code: "1.2.2", name: "नागार्जुन: शासन की बंदूक" },
                    { code: "1.2.3", name: "नागार्जुन: अकाल और उसके बाद" }
                ] 
            },
            { 
                title: "Unit 2: राष्ट्रीय सांस्कृतिक काव्यधारा एवं प्रबन्ध काव्य", 
                topics: [
                    { code: "2.1.1", name: "रामधारी सिंह 'दिनकर': रश्मिरथी (तृतीय सर्ग)" },
                    { code: "2.2.1", name: "माखनलाल चतुर्वेदी: झरना" },
                    { code: "2.2.2", name: "माखनलाल चतुर्वेदी: कैदी और कोकिला" },
                    { code: "2.2.3", name: "माखनलाल चतुर्वेदी: नाशा का त्यौहार (हिमकिरीटिनी)" }
                ] 
            },
            { 
                title: "Unit 3: प्रयोगवाद एवं नई कविता", 
                topics: [
                    { code: "3.1.1", name: "भवानीप्रसाद मिश्र: सतपुड़ा के जंगल" },
                    { code: "3.1.2", name: "भवानीप्रसाद मिश्र: गीत-फ़रोश (दूसरा सप्तक)" },
                    { code: "3.2.1", name: "रघुवीर सहाय: पढ़िए गीता" },
                    { code: "3.2.2", name: "रघुवीर सहाय: रामदास" },
                    { code: "3.2.3", name: "रघुवीर सहाय: हाँसो हाँसो जल्दी हाँसो, नेता क्षमा करें" }
                ] 
            }
        ]
    },
    "AEC-4": {
        name: "Social Service / Scout & Guide / Sports",
        tag: "aec-4",
        units: [
            { title: "Unit 1: NCC General", topics: [{ code: "1.1", name: "Introduction to NCC: Aims & Organization" }] },
            { title: "Unit 2: National Integration", topics: [{ code: "2.1", name: "Concept of Unity & Threats to National Security" }] },
            { title: "Unit 3: Personality Development", topics: [{ code: "3.1", name: "Personal Traits, Empathy & Creative Thinking" }] },
            { title: "Unit 4: Social Service", topics: [{ code: "4.1", name: "Basics of Social Service, NGOs & Youth Role" }] },
            { title: "Practical Component", topics: [
                { code: "P.1", name: "Military Training (Drill, Map Reading)" }
            ]}
        ]
    }
};

// --- STORAGE SYSTEM ---
function safeReadStorage(key, fallback) {
    if (key !== 'syllabusTracker') return fallback;
    try {
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : fallback;
    } catch (error) { return fallback; }
}

function safeWriteStorage(key, value) {
    if (key !== 'syllabusTracker') return;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) {}
}

function showToast(message) {
    const toast = document.getElementById('app-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

let syllabusTracker = {};

function resetBrowserAppData() {
    if (typeof localStorage === 'undefined') return;
    const keepKey = 'syllabusTracker';
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== keepKey) keysToRemove.push(key);
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    syllabusTracker = safeReadStorage('syllabusTracker', {});
}

// --- MODAL ENGINE FOR IN-APP PREVIEW ---
function setupPdfModal() {
    if (document.getElementById('pdf-modal-wrapper')) return;

    const modalHtml = `
    <div id="pdf-modal-wrapper" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:9999; flex-direction:column; align-items:center; justify-content:center;">
        <div style="width:95%; max-width:900px; height:90vh; background:var(--bg-card, #1e293b); color:#fff; border-radius:8px; display:flex; flex-direction:column; overflow:hidden;">
            <div style="padding:10px 16px; background:var(--bg-hover, #0f172a); display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155;">
                <span id="pdf-modal-title" style="font-weight:bold; font-size:0.95rem;">Document Viewer</span>
                <button onclick="closePdfModal()" style="background:#ef4444; color:#fff; border:none; padding:6px 14px; border-radius:4px; cursor:pointer; font-weight:bold;">Close ✕</button>
            </div>
            <div id="pdf-canvas-container" style="flex:1; overflow:auto; padding:15px; text-align:center; background:#525659;">
                <div id="pdf-loader-text" style="color:#fff; margin-top:20px;">Loading PDF Document...</div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closePdfModal() {
    const modal = document.getElementById('pdf-modal-wrapper');
    if (modal) modal.style.display = 'none';
    const container = document.getElementById('pdf-canvas-container');
    if (container) container.innerHTML = '<div id="pdf-loader-text" style="color:#fff; margin-top:20px;">Loading PDF Document...</div>';
}

// jsDelivr CDN link (No CORS Error)
function getCdnReleaseUrl(tag, filename) {
    return `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}@${tag}/${filename}`;
}

// Direct GitHub Link for Downloads
function getGithubReleaseUrl(tag, filename) {
    return `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/download/${tag}/${filename}`;
}

// IN-APP VIEW ENGINE (Renders on Canvas)
async function openReleaseAsset(tag, filename) {
    setupPdfModal();
    const modal = document.getElementById('pdf-modal-wrapper');
    const container = document.getElementById('pdf-canvas-container');
    const title = document.getElementById('pdf-modal-title');
    
    modal.style.display = 'flex';
    title.innerText = filename;
    container.innerHTML = '<div style="color:#fff; margin-top:20px;">Fetching document...</div>';

    const url = getCdnReleaseUrl(tag, filename);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("File fetch failed");
        const arrayBuffer = await response.arrayBuffer();

        if (window.pdfjsLib) {
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            
            container.innerHTML = ''; // Clear loader
            
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.2 });
                const canvas = document.createElement('canvas');
                canvas.style.margin = "10px auto";
                canvas.style.display = "block";
                canvas.style.boxShadow = "0 4px 8px rgba(0,0,0,0.4)";
                
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport: viewport }).promise;
                container.appendChild(canvas);
            }
        } else {
            const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            container.innerHTML = `<iframe src="${blobUrl}" style="width:100%; height:100%; border:none;"></iframe>`;
        }
    } catch (e) {
        console.error("PDF View Error:", e);
        const directDownloadUrl = getGithubReleaseUrl(tag, filename);
        container.innerHTML = `<div style="color:#f87171; margin-top:20px;">Unable to preview file.<br><br><a href="${directDownloadUrl}" target="_blank" style="color:#60a5fa; text-decoration:underline;">Click here to download file directly</a></div>`;
    }
}

// DIRECT DOWNLOAD ENGINE
function downloadReleaseAsset(tag, filename, displayName) {
    showToast("Starting download...");
    const downloadUrl = getGithubReleaseUrl(tag, filename);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', displayName || filename);
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// --- THEME & NAV CONTROLLERS ---
const sunSVG = `<path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>`;
const moonSVG = `<path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/>`;

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-icon-svg').forEach(icon => {
        icon.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        if (window.innerWidth < 768) overlay.style.display = 'block';
    } else {
        sidebar.classList.add('collapsed');
        overlay.style.display = 'none';
    }
}

function navigateTo(target) {
    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    const targetEl = document.getElementById(`nav-${target}`);
    if (targetEl) targetEl.classList.add('active');

    document.querySelectorAll('.content-view').forEach(view => view.classList.add('hidden'));
    const dest = document.getElementById(`view-${target}`);
    if (dest) dest.classList.remove('hidden');

    if (window.innerWidth < 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.add('collapsed');
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) overlay.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target === 'dashboard') renderDashboard();
    else if (target === 'syllabus') renderSyllabusPage();
    else if (target === 'notes') renderNotesPage();
    else if (target === 'slides') renderSlidesSubjectLanding();
}

// --- RENDERERS ---
function renderDashboard() {
    const trackerContainer = document.getElementById('dashboard-tracker-list');
    if (!trackerContainer) return;
    trackerContainer.innerHTML = '';
    let totalTopics = 0, completedTopics = 0;

    Object.keys(academicDatabase).forEach(subCode => {
        const subjectBox = document.createElement('div');
        subjectBox.style.marginBottom = '1.25rem';
        subjectBox.innerHTML = `<h3 style="font-size:0.95rem; border-bottom: 2px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 0.5rem; color:var(--accent); font-weight:700;">${subCode}</h3>`;

        academicDatabase[subCode].units.forEach(unit => {
            unit.topics.forEach(topic => {
                totalTopics++;
                const key = `${subCode}_${topic.code}`;
                const isChecked = syllabusTracker[key] || false;
                if (isChecked) completedTopics++;

                const row = document.createElement('div');
                row.className = `tracker-item ${isChecked ? 'checked' : ''}`;
                row.onclick = () => toggleTrackItem(key);
                row.innerHTML = `
                    <span><strong>${topic.code}</strong> ${topic.name}</span>
                    <input type="checkbox" ${isChecked ? 'checked' : ''} style="width:18px; height:18px; pointer-events:none;">
                `;
                subjectBox.appendChild(row);
            });
        });
        trackerContainer.appendChild(subjectBox);
    });

    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const statsPercent = document.getElementById('stats-syllabus-percent');
    if (statsPercent) statsPercent.innerText = `${percent}%`;
    
    const progressBar = document.getElementById('syllabus-progress-bar');
    if (progressBar) progressBar.style.width = `${percent}%`;

    const statsDecks = document.getElementById('stats-decks-total');
    if (statsDecks) statsDecks.innerText = `${completedTopics} / ${totalTopics}`;
}

function toggleTrackItem(key) {
    syllabusTracker[key] = !syllabusTracker[key];
    safeWriteStorage('syllabusTracker', syllabusTracker);
    renderDashboard();
}

const eyeIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>`;
const downloadIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z"/></svg>`;

function renderSyllabusPage() {
    const container = document.getElementById('syllabus-cards-container');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(academicDatabase).forEach(code => {
        const tag = academicDatabase[code].tag;
        const fileName = `${code}_Syllabus.pdf`;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <h3>${code}</h3>
            <p style="color: var(--text-muted); font-size:0.85rem; margin: 0.2rem 0 1rem;">${academicDatabase[code].name}</p>
            <div class="btn-container">
                <button type="button" class="btn-action" data-action="view">${eyeIcon} View</button>
                <button type="button" class="btn-action btn-secondary" data-action="download">${downloadIcon} Download</button>
            </div>
        `;
        card.querySelector('[data-action="view"]').onclick = () => openReleaseAsset(tag, fileName);
        card.querySelector('[data-action="download"]').onclick = () => downloadReleaseAsset(tag, fileName, fileName);
        container.appendChild(card);
    });
}

function renderNotesPage() {
    const container = document.getElementById('notes-cards-container');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(academicDatabase).forEach(code => {
        const tag = academicDatabase[code].tag;
        const fileName = `${code}_Notes.pdf`;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.borderLeftColor = "#059669";
        card.innerHTML = `
            <h3>${code}</h3>
            <p style="color: var(--text-muted); font-size:0.85rem; margin: 0.2rem 0 1rem;">${academicDatabase[code].name}</p>
            <div class="btn-container">
                <button type="button" class="btn-action" style="background:#059669" data-action="view">${eyeIcon} Read Notes</button>
                <button type="button" class="btn-action btn-secondary" data-action="download">${downloadIcon} PDF</button>
            </div>
        `;
        card.querySelector('[data-action="view"]').onclick = () => openReleaseAsset(tag, fileName);
        card.querySelector('[data-action="download"]').onclick = () => downloadReleaseAsset(tag, fileName, fileName);
        container.appendChild(card);
    });
}

function renderSlidesSubjectLanding() {
    const slidesTitle = document.getElementById('slides-title');
    if (slidesTitle) slidesTitle.innerText = "Revision Slide Decks";

    const slidesSubtitle = document.getElementById('slides-subtitle');
    if (slidesSubtitle) slidesSubtitle.innerText = "Select a subject folder below.";

    const container = document.getElementById('slides-container');
    if (!container) return;
    container.innerHTML = `<div class="grid-cards"></div>`;
    const grid = container.querySelector('.grid-cards');

    Object.keys(academicDatabase).forEach(code => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.cursor = 'pointer';
        card.style.borderLeftColor = "#9333ea";
        card.innerHTML = `
            <h3>${code}</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.3rem;">${academicDatabase[code].name}</p>
            <div style="font-size:0.8rem; margin-top:0.8rem; color:#9333ea; font-weight:600; display:flex; align-items:center; gap:4px;">
                Open Folder 
                <svg class="icon-svg" style="width:16px; height:16px;" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13h11.86l-5.43 5.43L13 19.84L20.84 12L13 4.16l-1.43 1.41L16.86 11H5v2z"/></svg>
            </div>
        `;
        card.onclick = () => renderSlideTopicsList(code);
        grid.appendChild(card);
    });
}

function renderSlideTopicsList(subCode) {
    const tag = academicDatabase[subCode].tag;
    const slidesTitle = document.getElementById('slides-title');
    if (slidesTitle) slidesTitle.innerText = `${subCode} Slides`;

    const container = document.getElementById('slides-container');
    if (!container) return;
    
    container.innerHTML = `
        <button class="btn-action btn-secondary" onclick="renderSlidesSubjectLanding()" style="margin-bottom: 1rem; width:auto; padding:0.5rem 1rem;">
            <svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Folders
        </button>
    `;

    academicDatabase[subCode].units.forEach(unit => {
        const box = document.createElement('div');
        box.className = 'card';
        box.innerHTML = `<h3 style="margin-bottom:0.75rem; border-bottom:1px solid var(--border); padding-bottom:0.4rem; font-size:1rem;">${unit.title}</h3>`;

        unit.topics.forEach(topic => {
            const fileName = `${topic.code}.pdf`;
            const row = document.createElement('div');
            row.className = 'tracker-item';
            row.style.padding = '0.6rem 0';
            row.innerHTML = `
                <span style="font-size:0.85rem;"><strong>File: ${topic.code}.pdf</strong><br><span style="color:var(--text-muted);">${topic.name}</span></span>
                <div class="btn-container" style="flex:none; width:auto; margin-top:0;">
                    <button type="button" class="btn-action" style="padding:0.4rem 0.6rem; font-size:0.75rem; background:#9333ea" data-action="view">${eyeIcon} View</button>
                    <button type="button" class="btn-action btn-secondary" style="padding:0.4rem 0.6rem; font-size:0.75rem;" data-action="download">${downloadIcon} Download</button>
                </div>
            `;
            row.querySelector('[data-action="view"]').onclick = () => openReleaseAsset(tag, fileName);
            row.querySelector('[data-action="download"]').onclick = () => downloadReleaseAsset(tag, fileName, fileName);
            box.appendChild(row);
        });
        container.appendChild(box);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    resetBrowserAppData();
    const savedTheme = safeReadStorage('theme', 'light');
    applyTheme(savedTheme);
    navigateTo('dashboard');
});