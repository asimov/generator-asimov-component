# generator-asimov-component [![Build Status](https://secure.travis-ci.org/asimov/generator-asimov-component.png?branch=master)](https://travis-ci.org/asimov/generator-asimov-component)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### Installing Yeoman?

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository.

```
$ npm install -g yo
```

### Installing the Asimov component generator

To install generator-asimov-component from npm, run:

```
$ npm install -g generator-asimov-component
```

### Building your first component

Go the folder you wish to build your component in and initiate the generator:

```
$ yo asimov-component
```

You'll be promtped to answer a couple questions to help us generate your component. These questions are explained below:

**What is the name of your component?**

A short name for people to find your component among other things eg. `fluid grid`, `modal`, `awesome forms` etc.

**A short description?**

A short description for people who might be looking to use your component eg. `A simple grid for Asimov projects` etc.

**Should this component conform to offical packages?**

Do you wish for your component to be held to the same strict coding standards as officially maintained packages.

**Will this component be IE8 compatible?**

Do you wish for Asimov's internal code quality checks to alert if something may not work in IE8. This is by no means a silver bullet so be sure to test your components :) If you answered yes to the previous question you will not be asked this since all official packages enable this.

**Will this component have js?**

This needs to be true if your component has javascript otherwise project using this component wont get your javascript.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
