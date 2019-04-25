import fs from 'fs';

const styleFiles = [
  '/node_modules/normalize.css/normalize.css',
  '/styles/app.css',
  '/node_modules/mustard-ui/dist/css/mustard-ui.min.css'
];

const readFiles = files => {
  return files.map(file => fs.readFileSync(process.cwd() + file));
};

export default {
  htmlContext: {
    head: {
      raw: `<style>${readFiles(styleFiles)}</style>`
    }
  }
};
