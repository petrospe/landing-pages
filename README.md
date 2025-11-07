# Landing Pages Collection

A curated collection of standalone landing pages, interactive demos, and web experiments. This directory serves as a showcase for various web projects, demonstrations, and creative implementations.

## Overview

This directory contains a diverse set of web pages, each designed to be self-contained and independently accessible. Pages may include interactive demos, visual effects, educational content, or any other web-based project.

## Directory Structure

```
landing-pages/
├── index.php              # Directory listing interface
├── .style.css             # Styles for directory listing
├── .sorttable.js          # Sorting functionality for directory listing
├── .favicon.ico           # Directory favicon
├── README.md              # This file
├── [project-name]/        # Individual landing page projects
│   ├── index.html         # Main HTML file
│   ├── style.css          # Project-specific styles (optional)
│   ├── script.js          # Project-specific JavaScript (optional)
│   └── [other assets]     # Additional project files
└── [standalone-files].html # Standalone HTML pages
```

## Features

- **Directory Listing**: The `index.php` file provides an interactive directory browser with sorting capabilities
- **Self-Contained Projects**: Each landing page is organized in its own directory with all necessary assets
- **Standalone Pages**: Some pages may exist as single HTML files in the root directory
- **Flexible Structure**: Supports various project types and organizational patterns

## Adding New Landing Pages

### Option 1: Directory-Based Project

For projects with multiple files (HTML, CSS, JS, images, etc.):

1. Create a new directory with a descriptive name (use kebab-case: `my-awesome-project`)
2. Place your main HTML file as `index.html` in the new directory
3. Include any additional assets (CSS, JS, images, etc.) in the same directory or subdirectories
4. Ensure all file paths are relative to the project directory

**Example structure:**
```
my-awesome-project/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
```

### Option 2: Standalone HTML File

For simple, single-file projects:

1. Create an HTML file with a descriptive name (use kebab-case: `my-standalone-page.html`)
2. Include all CSS and JavaScript inline or via CDN links
3. Place the file directly in the `landing-pages/` root directory

### Best Practices

- **Naming**: Use kebab-case for directory and file names (e.g., `my-project-name`)
- **Self-Contained**: Keep all project assets within the project directory
- **Relative Paths**: Use relative paths for local assets
- **Documentation**: Consider adding a brief comment in your HTML describing the project
- **Responsive Design**: Ensure pages work across different screen sizes when applicable
- **Browser Compatibility**: Test in multiple browsers if targeting a wide audience

## Current Projects

The directory currently contains various projects including:
- Interactive demonstrations
- Visual effects and animations
- Educational content
- Creative experiments

Browse the directory listing via `index.php` to see all available pages.

## Accessing Pages

- **Via Directory Listing**: Navigate to `index.php` to browse all available pages
- **Direct Access**: Access any project directly by navigating to its directory or HTML file
- **Standalone Files**: Open standalone HTML files directly in a browser

## Technical Notes

- The directory listing (`index.php`) supports sorting by filename, type, size, and modification date
- Hidden files (starting with `.`) are excluded by default but can be shown via query parameter
- Projects are independent and do not share dependencies unless explicitly configured

## Future Considerations

This structure is designed to accommodate:
- Static HTML/CSS/JS projects
- Projects using modern frameworks (if compiled/bundled)
- Interactive demos and experiments
- Educational content and tutorials
- Creative web art and visualizations
- Any other self-contained web project

As the collection grows, projects may be organized into subcategories if needed, while maintaining the flexible structure described above.

