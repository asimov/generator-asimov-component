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

Since every every Asimov component is expected to be a standalone repository we recommend starting by creating your repository and checking it out locally.

Next go into the folder you just checked out and initiate the generator:

```
$ yo asimov-component
```

You'll be promtped to answer a couple questions to help us generate your component. These questions are explained below:

**What is the name of your component?**

A short name for people to find your component among other things eg. `fluid grid`, `modal`, `awesome forms` etc.

**A short description?**

A short description for people who might be looking to use your component eg. `A simple grid for Asimov projects` etc.

**Is this component maintained by the asimov team?**

Is this component being developed on behalf of the Asimov core team. You should almost always answer no.

**Should this component conform to offical packages?**

Do you wish for your component to be held to the same strict coding standards as officially maintained packages. If you answered yes to the previous question you will not be asked this.

**Will this component be IE8 compatible?**

Do you wish for Asimov's internal code quality checks to alert if something may not work in IE8. This is by no means a silver bullet so be sure to test your components :) If you answered yes to the previous question you will not be asked this since all official packages enable this.

**Will this component have js?**

This needs to be true if your component has javascript otherwise project using this component wont get your javascript.

**Is this component private?**

Say `yes` if you want to keep the package private and do not want to register the bower package in future.


The generator will now create the directory structure required for Asimov components as well as basic `package.json` and `bower.json` files.

Next you will need to initialize npm

```
npm init
```

You should able to accept the defaults values unless you wish to change them. We recommend changing the license to MIT.

You're now ready to start building your component!

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
