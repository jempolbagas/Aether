# **App Name**: Aether Portfolio

## Core Features:

- Hero Section: Display a full-viewport height hero section with a background image and the firm's name, creating an immediate visual impact.
- Project Showcase: Fetch project data from Firestore to populate a project showcase with full-width images and hover-reveal text, highlighting architectural works.
- Smooth Scrolling: Implement smooth, weighted scrolling across the site using Lenis for enhanced user experience and fluidity.
- Firestore Data Seeding: Initialize a Firestore database with architectural project data (title, location, tag) using a seed script.
- Corner Navigation: Implement fixed-position navigation links in the four corners of the viewport to provide unconventional but intuitive site navigation.
- Image Optimization: Utilize 'next/image' for optimized asset delivery, ensuring high performance and fast load times for all images.
- Parallax Effect: Use generative AI to subtly adjust image parallax effects based on screen size, creating a better tool that provides an engaging user experience.

## Style Guidelines:

- Strict Dark Mode: Background color set to #0c0c0c for a cinematic feel.
- Text Color: Use #e5e5e5 for high contrast and readability against the dark background.
- Headers: 'Playfair Display' (serif) for impactful, large (6rem+) headers.
- UI Elements: 'Inter' (sans-serif) for a clean and modern look in all user interface elements; note: currently only Google Fonts are supported.
- Full-Screen Sections: Utilize full-screen sections to immerse the user in each part of the portfolio.
- Asymmetrical Grid: Employ an asymmetrical grid layout to create visual interest and a unique browsing experience.
- Framer Motion: Use Framer Motion for subtle animations to enhance transitions and interactions without overwhelming the user.