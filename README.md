# Shiva Krishna Reddy Burra's Portfolio

Welcome to my personal portfolio, a dynamic web application built with Next.js showcasing my skills, projects, certifications, and contact information. This portfolio highlights my expertise as a full-stack developer with a focus on modern web technologies and responsive design.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

This portfolio serves as a professional showcase of my work, including detailed sections for my profile, educational background, work experience, projects, technical skills, certifications, and a contact form for collaboration opportunities. The application is built with Next.js (Pages Router) for server-side rendering and optimized performance, styled with Tailwind CSS for a modern, responsive design.

## Features

- **Profile Section**: Introduces my background and professional summary.
- **About Section**: Details my education and personal journey as a developer.
- **Work Experience**: Highlights professional roles and achievements.
- **Projects Section**: Showcases key projects with descriptions, technologies used, and links to live demos or repositories.
- **Skills Section**: Displays proficiency in programming languages, frameworks, and tools with animated progress indicators.
- **Certifications Section**: Lists industry-recognized certifications with interactive modals for detailed views.
- **Contact Section**: Includes a form with client-side validation and social media links for easy communication.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Animations**: Smooth transitions and IntersectionObserver-based animations for an engaging user experience.
- **Accessibility**: Implements ARIA attributes and focus states for screen reader compatibility.

## Technologies Used

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS 3, Custom CSS
- **Icons**: React Icons
- **Fonts**: Poppins (via Google Fonts)
- **Image Optimization**: Next.js Image component
- **Build Tools**: Node.js, npm
- **Version Control**: Git, GitHub

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher
- **Git**: For cloning the repository

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ShivaKrishnaReddyBurra/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

4. **Build for Production** (Optional)
   ```bash
   npm run build
   npm run start
   ```

## Folder Structure

```
my-portfolio/
├── pages/                    # Next.js Pages Router
│   ├── _app.jsx              # Custom App component
│   ├── _document.jsx         # Custom Document component
│   └── index.jsx             # Homepage rendering all sections
├── components/               # React components
│   ├── Navbar.jsx            # Navigation bar
│   ├── ProfilePage.jsx       # Profile section
│   ├── About.jsx             # About section
│   ├── WorkExperience.jsx    # Work experience section
│   ├── ProjectsSection.jsx   # Projects section
│   ├── SkillsSection.jsx     # Skills section
│   ├── Certifications.jsx    # Certifications section
│   ├── Contact.jsx           # Contact form and info
├── styles/                   # CSS styles
│   ├── globals.css           # Global styles with Tailwind CSS
│   ├── ProjectsSection.css   # Custom styles for ProjectsSection
├── public/                   # Static assets
│   └── images/               # Images for certifications and profile
│       ├── shiva1.jpg
│       ├── cert1.jpg
│       ├── cert2.png
│       ├── cert3.png
│       ├── cert4.jpeg
│       ├── cert5.jpg
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies and scripts
├── next.config.js            # Next.js configuration
├── README.md                 # This file
```

## Contact

- **GitHub**: [ShivaKrishnaReddyBurra](https://github.com/ShivaKrishnaReddyBurra)
- **LinkedIn**: [Shiva Krishna Reddy Burra](https://www.linkedin.com/in/shivakrishnareddyburra)
- **Email**: reddyburrashivakrishna@gmail.com