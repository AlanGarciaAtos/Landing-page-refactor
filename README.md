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

> TODO Installed html-loader
> TODO Installed the CSS external, don't inject the css with javascript (mini-css-extract-plugin this is the plugin that maybe I will use later)

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

7. Now run the server! `npm start`

### Part 3 of uuuuh (Adding SASS and CSS)

1. It will install a lot of dependencies. `npm install --save-dev style-loader css-loader sass-loader sass`. In a nutshell it will install sass, css and you now you can use it.

2. Add the following code in `webpack.config.js`. This will get the scss files and turn it into CSS

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

3. Create a sass file named `main.scss` in **src**. Add some background color to ensure you added correctly.

4. In the `index.js` write `import './main.scss';` so it can used the scss file.

5. Once again run the server! `npm start`

### Part 4 of hmmm (Typescript)

1. `npm install --save-dev typescript ts-loader`

2. Outside the **src** folder create a new file named `tsconfig.json`. With the following json

> Maybe this will be changed

```JSON
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}

```

3. Add in `webpack.config.js` the following code.

```JSON
module: {...}, //<- DON'T ADD THIS, Just a reference where you need to add the resolve

resolve: {
  extensions: ['.ts', '.js', '.tsx'],
},

```

3. 1 Now to get the typecript files and transpiled it in JS. Add the following JSON inside rules.

```JSON

{
  test: /\.tsx?$/,
  use: 'ts-loader',
  include: [path.resolve(__dirname, 'src')],
  exclude: /node_modules/,
},

```

> ADD AN IMAGE WHERE IS THE 3.1

> Note: The extensions named with tsx is for react depending what framework you're using (or you are not using a framework). It doesn't cause a problem if you leave like that.

5. In **src** folder created a typescript file `index.ts`

6. In `webpack.config.js` you will change the entry object.

- Old: `entry: {main: './src/index.js'}`,
- New: `entry: {main: './src/index.ts'}`,

You only change one letter, **literally**. It's important to change the letter because now webpack knows you're using Typescript and _ts-loader_ will transpiled to JS
