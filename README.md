# Project Based Learning:

# Best practices assessments refactor

## Project Overview:

The trainee must refactor the diagnostic assessment using typescript, npm, webpack, scss and semantic html, for this case the trainee is required to use Axios for the http requests needed to accomplish the objective of the assessment, also the modal library can be swapped, the trainee can pick the modal library of preference. At the end of the practice the project must be deployed to GitHub Pages

## Standards:

• You must use Typescript
• You must use Semantic HTML
• You must use SASS (SCSS) your web application
• You must use webpack

## Steps to create a project with Webpack, Typescript and SASS

### Part 1 of 3214124 (installing webpack)

1. `git init` and `npm init -y`
2. `npm i --save-dev webpack webpack-cli`
3. Add **src** dir with **index.js**
4. Add in **src** an **template.html**
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

### Part 2 of 😔 (Dev server and see the HTML)

Ok, now we need some kind of "live-server", to don't use of F5 every nanosecond.

1. `npm install --save-dev webpack-dev-server`
2. Add the following code in `webpack.config.js`

```JSON
devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
},
```

3. In package.json add in scripts `"start": "webpack serve --open",`

Right now you will see that index.html doesn't appear, don't worry!

4. Installed another module `npm install --save-dev html-webpack-plugin`
5. In `webpack.config.js` add the following plugin.

```JSON
plugins: [
    new HtmlWebpackPlugin({
      // title: 'Caching',
      template: './src/template.html',
    }),
  ],
```

6. In `webpack.config.js` add `const HtmlWebpackPlugin = require('html-webpack-plugin');` Outside of `module.exports = {...}`

### Part 3 of uuuuh (Adding SASS and CSS)

1. It will install a lot of dependencies. `npm install --save-dev style-loader css-loader sass-loader sass`. In a nutshell it will install sass, css and you now you can use it.

2. Add the following code in `webpack.config.js`

```JSON
module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },

```
