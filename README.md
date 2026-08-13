# Portfolio

My personal portfolio website — built to present my projects, skills, and background as a Front-End Developer on my way to Full-Stack.

![Live](https://img.shields.io/website?url=https%3A%2F%2Fmaik-groth.com&label=live)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-Private-lightgrey)

## About Me

Hey, I'm Maik — a Fullstack Developer with a passion for troubleshooting and problem solving. I started out as a Master Automotive Technician, where I learned to understand systems, find faults, and build solutions. Now I do the same thing in code, across the front end and back end alike, and I'm always excited about new technologies and challenges.

This site is where that work lives — a running log of the projects I've shipped and the stack I built them with.

## About This Project

This repository is a showcase of my personal portfolio, not a template meant to be cloned. It documents the current tech state of the site: how it's built, what it's made of, and how the pieces fit together.

## Tech Stack

| Category         | Technology                                    |
| ----------------- | ---------------------------------------------- |
| Framework         | React 19 + TypeScript                          |
| Build Tool         | Vite 8                                         |
| Styling            | Tailwind CSS 4                                 |
| Routing            | React Router 7                                 |
| i18n               | i18next / react-i18next                        |
| 3D / Animation     | Three.js, react-type-animation, embla-carousel |
| Icons              | Tabler Icons, dev.icons                        |
| Contact Form API   | Vercel Serverless Function + Nodemailer        |
| Package Manager    | pnpm                                           |

## Structure

```
Portfolio/
├── api/
│   └── sendMail.js          # Serverless contact-form endpoint (Vercel)
├── public/
│   └── assets/               # Images, icons, i18n JSON files
├── src/
│   ├── feature/
│   │   ├── components/       # About, Hero, Skills, Projects, Comments
│   │   ├── pages/             # Page-level views
│   │   └── shared/            # Shared utilities & types
│   ├── service/               # API/service helpers
│   ├── App.tsx
│   └── main.tsx
├── vercel.json                # Rewrites for SPA routing on Vercel
└── vite.config.ts
```

## Sections

- **Hero** – introduction with animated typing effect
- **About Me** – background and career timeline
- **Skills** – tech stack visualization
- **Projects** – interactive project dialogs with live demos and GitHub links
- **References** – testimonials/comments
- **Contact** – serverless contact form (Vercel + Nodemailer)

## Deployment

Hosted on [Vercel](https://vercel.com), including SPA rewrites (`vercel.json`) and a serverless mail endpoint (`api/sendMail.js`).

## License

Private project — all rights reserved.
