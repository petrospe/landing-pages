#!/usr/bin/env node

/**
 * Script to generate the projects list for index.html
 * Run this script when adding new projects to update the directory listing
 * 
 * Usage: node generate-projects-list.js
 */

const fs = require('fs');
const path = require('path');

const landingPagesDir = __dirname;
const indexHtmlPath = path.join(landingPagesDir, 'index.html');

// Files and directories to exclude from listing
const excludeList = [
  '.git',
  '.images',
  'node_modules',
  '.DS_Store',
  'netlify.toml',
  '_redirects',
  'generate-projects-list.js',
  'package.json',
  'package-lock.json',
  'index.html' // Exclude the directory listing page itself
];

// Files that should be hidden by default
const hiddenFiles = [
  '.favicon.ico',
  '.style.css',
  '.sorttable.js',
  '.error.php',
  'index.php'
];

function isHidden(file) {
  return file.startsWith('.') || hiddenFiles.includes(file);
}

function getFileType(filePath) {
  const stat = fs.statSync(filePath);
  return stat.isDirectory() ? 'dir' : 'file';
}

function scanDirectory(dir) {
  const items = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const name = entry.name;
    
    // Skip excluded items
    if (excludeList.includes(name)) {
      continue;
    }

    const fullPath = path.join(dir, name);
    const type = entry.isDirectory() ? 'dir' : 'file';
    const relativePath = path.relative(landingPagesDir, fullPath).replace(/\\/g, '/');
    
    items.push({
      name: name,
      type: type,
      path: relativePath + (type === 'dir' ? '/' : ''),
      hidden: isHidden(name)
    });
  }

  return items.sort((a, b) => {
    // Directories first
    if (a.type !== b.type) {
      return a.type === 'dir' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

function generateProjectsArray(items, hidden = false) {
  const filtered = items.filter(item => hidden ? item.hidden : !item.hidden);
  
  return filtered.map(item => {
    return `      { name: '${item.name.replace(/'/g, "\\'")}', type: '${item.type}', path: '${item.path}' }`;
  }).join(',\n');
}

function updateIndexHtml() {
  console.log('Scanning directory...');
  const items = scanDirectory(landingPagesDir);
  
  const visibleProjects = items.filter(item => !item.hidden);
  const hiddenProjects = items.filter(item => item.hidden);
  
  console.log(`Found ${visibleProjects.length} visible items and ${hiddenProjects.length} hidden items`);
  
  // Read current index.html
  let content = fs.readFileSync(indexHtmlPath, 'utf8');
  
  // Generate new projects array
  const projectsArray = generateProjectsArray(visibleProjects, false);
  const hiddenArray = generateProjectsArray(hiddenProjects, true);
  
  // Replace the projects array
  const projectsRegex = /const projects = \[[\s\S]*?\];/;
  const hiddenRegex = /const hiddenFiles = \[[\s\S]*?\];/;
  
  if (projectsRegex.test(content)) {
    content = content.replace(projectsRegex, `const projects = [\n${projectsArray}\n   ];`);
    console.log('✓ Updated projects array');
  } else {
    console.warn('⚠ Could not find projects array in index.html');
  }
  
  if (hiddenRegex.test(content)) {
    content = content.replace(hiddenRegex, `const hiddenFiles = [\n${hiddenArray}\n   ];`);
    console.log('✓ Updated hiddenFiles array');
  } else {
    console.warn('⚠ Could not find hiddenFiles array in index.html');
  }
  
  // Write back
  fs.writeFileSync(indexHtmlPath, content, 'utf8');
  console.log('✓ Updated index.html');
  console.log('\nDone! You can now commit the updated index.html');
}

// Run the script
try {
  updateIndexHtml();
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}

