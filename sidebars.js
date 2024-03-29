/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['Synopsis', 'Description'],
    },
    {
      type: 'category',
      label: 'Options',
      items: ['Options', 'Exit codes'],
    },
    {
      type: 'category',
      label: 'Customisation',
      items: ['Defaults files', 'Templates', 'Extensions'],
    },
    {
      type: 'category',
      label: 'Markdown',
      items: ['Pandocs Markdown', 'Citations', 'Slide shows', 'EPUBs'],
    },
    {
      type: 'category',
      label: 'Technical',
      items: ['Chunked HTML', 'Jupyter notebooks', 'Syntax highlighting', 'Custom Styles', 'Custom readers and writers', 'Reproducible builds', 'Accessible PDFs and PDF archiving standards', 'Running pandoc as a web server', 'Running pandoc as a Lua interpreter'],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['A note on security'],
    },
    {
      type: 'doc',
      id: 'Authors',
    },
  ],
};

export default sidebars;
