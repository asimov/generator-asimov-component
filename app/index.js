'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var str = require('underscore.string');
var chdir = require('chdir');


var AsimovComponentGenerator = module.exports = function AsimovComponentGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function() {
        var cb = this.async();
        var that = this;

        this.installDependencies({
            skipInstall: options['skip-install'],
            skipMessage: !options['skip-install'],
            callback: function(err) {
                if (err) {
                    return cb(err);
                }

                chdir('bower_components/asimov-core', function() {
                    that.npmInstall();
                });
            }
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AsimovComponentGenerator, yeoman.generators.Base);

AsimovComponentGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'input',
        name: 'componentName',
        message: 'What is the name of your component?'
    }, {
        type: 'input',
        name: 'description',
        message: 'A short description?',
        default: ''
    }, {
        type: 'confirm',
        name: 'contrib',
        message: 'Should this component conform to offical packages?',
        default: true
    }, {
        when: function(responses) {
            return !responses.contrib;
        },
        type: 'confirm',
        name: 'ie8',
        message: 'Will this component be IE8 compatible?',
        default: true
    }, {
        type: 'confirm',
        name: 'js',
        message: 'Will this component have js?',
        default: false
    }];

    this.prompt(prompts, function(props) {
        this.componentNameRaw = props.componentName.trim();
        this.componentName = str.slugify(this.componentNameRaw);
        this.description = props.description.trim();
        this.license = props.license;
        this.contrib = props.contrib;
        this.ie8 = props.ie8;
        this.js = props.js;

        cb();
    }.bind(this));
};

AsimovComponentGenerator.prototype.app = function app() {
    this.mkdir('src');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
};

AsimovComponentGenerator.prototype.jsmain = function app() {
    if (this.js) {
        this.mkdir('src/js');
        this.mkdir('src/js/' + this.componentName);

        this.template('_js.js', 'src/js/' + this.componentName + '/' + this.componentName + '.js');
    }
};

AsimovComponentGenerator.prototype.scssmain = function app() {
    this.mkdir('src/scss');
    this.mkdir('src/scss/' + this.componentName);

    this.template('_scss.scss',     'src/scss/' + this.componentName + '.scss');
    this.template('_manifest.scss', 'src/scss/' + this.componentName + '/_manifest.scss');
    this.template('_settings.scss', 'src/scss/' + this.componentName + '/_settings.scss');
};

AsimovComponentGenerator.prototype.scsscomponent = function app() {
    // this.mkdir('src/scss/' + this.componentName + '/functions');
    // this.mkdir('src/scss/' + this.componentName + '/mixins');
    this.mkdir('src/scss/' + this.componentName + '/components');

    // this.template('_function.scss',   'src/scss/' + this.componentName + '/functions/_' + this.componentName + '.scss');
    // this.template('_mixin.scss',      'src/scss/' + this.componentName + '/mixins/_' + this.componentName + '.scss');
    this.template('_component.scss',  'src/scss/' + this.componentName + '/components/_' + this.componentName + '.scss');
};

AsimovComponentGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.template('_jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('Gemfile', 'Gemfile');
    this.write('CHANGELOG.md', ' ');
};
