# Landing Pages Collection

A curated collection of standalone landing pages, interactive demos, and web experiments. This directory serves as a showcase for various web projects, demonstrations, and creative implementations.

## Overview

This directory contains a diverse set of web pages, each designed to be self-contained and independently accessible. Pages may include interactive demos, visual effects, educational content, or any other web-based project.

## Directory Structure

```
landing-pages/
├── index.html             # Directory listing interface (static, Netlify-compatible)
├── index.php              # Directory listing interface (PHP, for traditional hosting)
├── .style.css             # Styles for directory listing
├── .sorttable.js          # Sorting functionality for directory listing
├── .favicon.ico           # Directory favicon
├── netlify.toml           # Netlify configuration
├── _redirects             # Netlify redirect rules
├── .nojekyll              # Disables Jekyll processing for GitHub Pages
├── generate-projects-list.js # Script to update projects list in index.html
├── README.md              # This file
├── [project-name]/        # Individual landing page projects
│   ├── index.html         # Main HTML file
│   ├── style.css          # Project-specific styles (optional)
│   ├── script.js          # Project-specific JavaScript (optional)
│   └── [other assets]     # Additional project files
└── [standalone-files].html # Standalone HTML pages
```

## Features

- **Directory Listing**: Both `index.html` (static, Netlify-compatible) and `index.php` (PHP, for traditional hosting) provide interactive directory browsers with sorting capabilities
- **Self-Contained Projects**: Each landing page is organized in its own directory with all necessary assets
- **Standalone Pages**: Some pages may exist as single HTML files in the root directory
- **Flexible Structure**: Supports various project types and organizational patterns
- **Netlify Ready**: Configured for deployment on Netlify with proper redirects and headers
- **GitHub Pages Ready**: Configured for deployment on GitHub Pages with `.nojekyll` file

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

### Updating the Directory Listing

After adding new projects, update the directory listing:

1. **Automatic (Recommended)**: Run the generator script:
   ```bash
   node generate-projects-list.js
   ```
   This will scan the directory and update the projects list in `index.html`.

2. **Manual**: Edit `index.html` and update the `projects` and `hiddenFiles` arrays in the JavaScript section.

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

Browse the directory listing via `index.html` (or `index.php` on PHP-enabled servers) to see all available pages.

## Accessing Pages

- **Via Directory Listing**: Navigate to `index.html` (or `index.php` on PHP servers) to browse all available pages
- **Direct Access**: Access any project directly by navigating to its directory or HTML file
- **Standalone Files**: Open standalone HTML files directly in a browser

## Netlify Deployment

This directory is configured for deployment on Netlify:

### Quick Deploy

1. **Connect to Netlify**:
   - Push this directory to a Git repository (GitHub, GitLab, or Bitbucket)
   - In Netlify, click "New site from Git"
   - Select your repository
   - Netlify will automatically detect the settings from `netlify.toml`

2. **Manual Deploy**:
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run `netlify deploy` for a draft, or `netlify deploy --prod` for production

### Configuration

The `netlify.toml` file includes:
- Redirect rules (including `index.php` → `index.html`)
- Security headers
- Cache control headers for optimal performance

### After Adding New Projects

When you add new projects:
1. Run `node generate-projects-list.js` to update the directory listing
2. Commit and push the changes
3. Netlify will automatically rebuild and deploy

## GitHub Pages Deployment

This directory is also configured for deployment on GitHub Pages:

### Quick Deploy

1. **Enable GitHub Pages**:
   - Push this directory to a GitHub repository
   - Go to your repository Settings → Pages
   - Under "Source", select the branch you want to deploy (usually `main` or `master`)
   - Select the root directory (`/`) as the source
   - Click Save

2. **Your site will be available at**:
   - `https://[username].github.io/[repository-name]/`
   - Or if using a custom domain, your configured domain

### Configuration

The `.nojekyll` file is included to:
- Disable Jekyll processing (GitHub Pages uses Jekyll by default)
- Ensure files starting with `.` (like `.style.css`, `.sorttable.js`) are served correctly
- Allow the static `index.html` to work without Jekyll processing

### After Adding New Projects

When you add new projects:
1. Run `node generate-projects-list.js` to update the directory listing
2. Commit and push the changes
3. GitHub Pages will automatically rebuild and deploy (usually within a few minutes)

### Notes

- GitHub Pages serves static files only (no PHP support)
- The `index.html` file will be used as the directory listing
- All project directories and files will be accessible via their paths
- Custom 404 pages can be added by creating a `404.html` file

## Technical Notes

- The directory listing (`index.html` and `index.php`) supports sorting by filename, type, size, and modification date
- Hidden files (starting with `.`) are excluded by default but can be shown via the toggle button
- Projects are independent and do not share dependencies unless explicitly configured
- `index.html` uses client-side JavaScript to display the directory listing (works on Netlify, GitHub Pages, and other static hosts)
- `index.php` uses server-side PHP to generate the listing (requires PHP-enabled hosting)

## Future Considerations

This structure is designed to accommodate:
- Static HTML/CSS/JS projects
- Projects using modern frameworks (if compiled/bundled)
- Interactive demos and experiments
- Educational content and tutorials
- Creative web art and visualizations
- Any other self-contained web project

As the collection grows, projects may be organized into subcategories if needed, while maintaining the flexible structure described above.


