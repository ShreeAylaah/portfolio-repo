# Portfolio Website

Welcome to my personal portfolio website!
This project showcases my skills, projects, and experience as a developer.

---
## Features

* ✨ Modern and responsive UI
* 📱 Mobile-friendly design
* 🎯 Smooth scrolling navigation
* 🔥 Scroll-based animations (Intersection Observer)
* 📩 Contact form with EmailJS integration
* 🎨 Interactive cursor glow effect
* 🧭 Active section highlighting on scroll

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Email Service:** EmailJS
* **Animations:** CSS + Intersection Observer API

---

## Project Structure

```
portfolio/
│── index.html
│── style.css
│── script.js
│── assets/
│   ├── images/
│   └── icons/
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/ShreeAylaah/portfolio-repo.git
```

### 2. Open in browser

Just open `index.html` in your browser.

---

## EmailJS Setup (Important)

To enable contact form:

1. Create account on EmailJS
2. Add Email Service (Gmail/Outlook)
3. Create Email Template with variables:

   ```
   {{name}}
   {{email}}
   {{subject}}
   {{message}}
   ```
4. Replace in `script.js`:

   ```js
   emailjs.init("YOUR_PUBLIC_KEY");

   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
   ```
5. Add your domain in EmailJS settings

---

## 🎯 Future Improvements

* 🔹 Add backend (Node.js / FastAPI)
* 🔹 Add blog section
* 🔹 Improve accessibility
* 🔹 Add dark/light mode toggle
* 🔹 Performance optimization

---

## 🙋‍♂️ About Me

I am a developer passionate about:

* AI / GenAI
* Cloud (AWS, Azure)
* Full-stack development

---

## 📬 Contact

* 📧 Email: shreemanikandan4@gmail.com
* 💼 LinkedIn: [https://linkedin.com/in/your-profile](https://www.linkedin.com/in/sridevi-manikandan-69828b21a/)
* 🐙 GitHub: https://github.com/ShreeAylaah

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 📄 License

This project is open-source and available under the MIT License.
