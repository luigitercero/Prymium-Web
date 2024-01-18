import React from 'react';
import ReactDom from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from '@containers/Home';

(async () => {
    const root = (
      <html>
        <head />
        <body>
          <div id="root"><App /></div>
          <script src="/static/bundle.js" />
        </body>
      </html>
    );
    const html = ReactDom.renderToStaticMarkup(root);
    const staticPath = path.join(__dirname, '..', 'dist', 'static');

    fs.writeFile(path.join(staticPath, 'home.html'), html, (err) => {
        if (err) {
            console.error('[!] something went wrong! index.js');
            throw err;
        }
        //console.log('Complete!');
    });
})();