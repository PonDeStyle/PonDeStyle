# PonDeStyle 

[![Build Status](https://travis-ci.org/PonDeStyle/PonDeStyle.svg?branch=master)](https://travis-ci.org/PonDeStyle/PonDeStyle) [![Build status](https://ci.appveyor.com/api/projects/status/ytc4dqle1lbu5dr5?svg=true)](https://ci.appveyor.com/project/holy0201/pondestyle) [![Code Climate](https://codeclimate.com/github/PonDeStyle/PonDeStyle/badges/gpa.svg)](https://codeclimate.com/github/PonDeStyle/PonDeStyle)

![PonDeStyle](https://github.com/PonDeStyle/PonDeStyle/wiki/images/pondestyle-git-wall.png)

PonDeStyle is modern and simple CSS framework based flexbox.
Development with PostCSS and cssnext.

## Support Browsers

* IE11+
* Firefox* (Desktop, Android)
* Chrome* (Desktop, Android)
* Safari* (Desktop, iOS)
* Edge*

\* last 2 versions.

## Features

* PostCSS + cssnext
* MindBEMding
* Flexbox columns
* CJK font support
* Components

## Installation

### npm

**npm repository isn't available now. Please wait.**

``npm install pondestyle``

or,

``yarn add pondestyle``

## Usage

You can quickly import your PostCSS development environment.

```
@import 'PonDeStyle';

:root {
    --primary-color: blue;
}

.mycolumn {
    @apply --columns-initial;
    
    &__item {
        @apply --columns-item-initial;
    }
}

.myclass {
    @media (--tablet) {
        color: var(--dark-gray-color);
    }
}

```

postcss-import and postcss-cssnext is required in your environment.

## License and Copyright

Copyright 2017 holy0201. Released under MIT License.

It bundles the following third-party resources:

* ress (https://github.com/filipelinhares/ress) - MIT © Filipe Linhares