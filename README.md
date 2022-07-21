# Project Based Learning:

# Best practices assessments refactor

## Project Overview:

The trainee must refactor the diagnostic assessment using typescript, npm, webpack, scss and semantic html, for this case the trainee is required to use Axios for the http requests needed to accomplish the objective of the assessment, also the modal library can be swapped, the trainee can pick the modal library of preference. At the end of the practice the project must be deployed to GitHub Pages

### Standards:

• You must use Typescript
• You must use Semantic HTML
• You must use SASS (SCSS) your web application
• You must use webpack

### Steps to create a project with Webpack, Typescript and SASS

1. `git init` and `npm init -y`
2. `npm i --save-dev webpack webpack-cli`
3. Add **src** dir with **index.js**
4. Outside of **src** create **index.html**
5. Create a `webpack.config.js` and add the following code.

```JSON
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};


```

6. Add in `package.json` in _scripts_ `"build": "webpack",`
7. Run this command `npm run build`

Voila! You have installed webpack, and this is the beginning lmao.ᵈᵃᵐⁿ ʷᵉᵇᵖᵃᶜᵏ
