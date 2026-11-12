# IT Knowledge Quiz

A responsive, browser-based multiple-choice quiz app for practising information technology topics. Built with HTML, CSS and vanilla JavaScript. No backend or build step is required.

## Features

- 10 selectable IT categories:
  - Computer Basics & Fundamentals
  - Computer Hardware & Software
  - Operating Systems
  - Computer Networking
  - Cybersecurity
  - Programming & Web Development
  - Databases & Data
  - Cloud Computing & DevOps
  - AI, Data Science & Emerging Tech
  - IT Support & Digital Productivity
- 200 curated questions in the question bank.
- Default session length: 200 questions.
- Choose a custom session length from 1 to the number of available questions.
- Filter by Beginner, Intermediate or Advanced difficulty.
- Randomized question order.
- Immediate answer feedback and explanations.
- Progress indicator, final score and answer review.
- Responsive layout for desktop, tablet and mobile.
- Runs entirely in the browser; no account or server required.

## Run locally

Open `index.html` in a browser, or start a simple local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

Question selections and scores are held in the current browser session and are not uploaded to a server. The question bank currently contains 200 questions. Selecting a category or difficulty combination with fewer available questions automatically limits the maximum valid session length.

## Deployment

This is a static site. Publish the repository root directory on a static hosting provider. No build command is needed; the publish directory is `.`.
