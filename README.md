# :credit_card: Project «uCard neo» with [GSAP](https://greensock.com/docs/)

[![Build status][travis-image]][travis-url] [![Dependency status][dependency-image]][dependency-url]

Learning to create 3D Tilt Animation with GreenSock Animation Platform

Author: [Rostyslav Miniukov](https://github.com/embyth/)

---

## Installation

```bash
git clone git@github.com:embyth/3d-tilt-animation.git project-name
cd project-name
```

---

## Usage

`npm install` - install dependencies.

`npm start` - building project in dev mode and launching local server.

`npm run build` - building project.

`npm run deploy` - building project and deploying it on [GitHub Pages](https://pages.github.com).

`npm run dist` - building project and archieving it in zip.

`npm run convertfonts` - converting TTF fonts to WOFF and WOFF2.

`npm run webp` - converting images to WebP format.

`npm run sprite` - combining SVG files into one SVG sprite.

`npm test` - launching linting test.

---

## Project Structure

```bash
.
├── build/            # project build directory (created automatically)
├── dist/             # directory in which the assembled project is archived (created automatically)
├── gulp/             # Gulp tasks directory
├── source/           # directory for placing project source files
│   ├── fonts/        # fonts directory
│   ├── img/          # images directory
│   │   └── content/  # content images directory for converting to webp format
│   │   └── icons/    # vector images directory for generating svg sprite
│   ├── js/           # JavaScript directory
│   ├── sass/         # styles directory
│   └── index.html    # page mark-up file
├── .babelrc          # Babel config
├── .browserslistrc   # browserslist config file
├── .editorconfig     # Editor config
├── .eslintignore     # ESlint ignore file
├── .eslintrc.yml     # ESLint config
├── .gitattributes    # Git attributes file
├── .gitignore        # Git ignore file
├── .npmrc            # npm config
├── .stylelintrc.json # stylelint config
├── .travis.yml       # Travis CI config
├── gulpfile.js       # Gulp config file
├── webpack.config.js # Webpack config file
├── package.json      # npm dependencies and project settings file
├── package-lock.json # npm lock-file
└── README.md         # project documents
```

---

[travis-image]: https://travis-ci.org/embyth/3d-tilt-animation.svg?branch=master
[travis-url]: https://travis-ci.org/embyth/3d-tilt-animation
[dependency-image]: https://david-dm.org/embyth/3d-tilt-animation/dev-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/embyth/3d-tilt-animation?type=dev
