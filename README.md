# 📚 Ani's Study Space

**Ani's Study Space** ek ultra-fast, mobile-first personal study dashboard aur knowledge hub hai. Yeh application students aur self-learners ke liye design ki gayi hai jisse syllabus tracking, PDF notes, revision slides, aur bulk downloads ek hi clean UI me accessible ho sakein.

---

## 🌟 Key Features

* 🌓 **Dark / Light Theme Toggle**: Dynamic visual mode switching jo user preferences ko local storage me persist rakhta hai.
* 🌅 **Smart Dynamic Greeting Modal**: App launching par current local time ke according automatic dynamic pop-up greeting (*Good Morning*, *Good Afternoon*, *Good Evening*, *Good Night*).
* 📊 **Interactive Syllabus Progress Tracker**: Har sub-topic aur unit ke liye checklist support. Status tap karne par overall completion percentage automatically update hoti hai.
* 📁 **Syllabus Vault & PDF Notes Center**: Har major course/subject ke official syllabus aur notes ko view ya download karne ke dedicated views.
* 🖼️ **Revision Slide Decks**: Folder-based navigation hierarchy slides view karne aur direct download karne ke liye.
* 📦 **One-Click Section Bulk Downloads**: `JSZip` integration ke saath pure Syllabus, Notes, ya Slide folders ko `.zip` archive me batch download karne ka feature.
* 📱 **Mobile-First UX Design**: Smooth touch gestures, responsive sidebar drawer, high contrast tap targets, aur crisp SVG icons.

---

## 🛠️ Tech Stack & Libraries

* **Frontend**: HTML5, CSS3 (Modern CSS Variables & Flex/Grid)
* **Scripting**: Vanilla JavaScript (ES6+)
* **Libraries**: 
  * [JSZip v3.10.1](https://cdnjs.com/libraries/jszip) — Client-side bulk `.zip` file generation ke liye.

---

## 📂 Project Structure

```text
├── index.html            # Main HTML layout & view containers
├── style.css             # Mobile-first CSS styling & theme variables
├── app.js                # Core JS logic, state tracker & router
└── recourses/            # Academic files storage
    ├── syllabus/         # Course syllabus PDF files
    ├── notes/            # Detailed PDF notes files
    └── slides/           # Topic-wise revision slide PDFs
