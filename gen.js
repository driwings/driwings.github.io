const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const driwings = require('./driwings.json');

const TEMPLATE_DIR = "templates";
const TEMPLATE_EXT = ".html";
const STRING_NOT_FOUND = "STRING NOT FOUND"
const lang = "en";

var templates = {};
function template(name) {
    if (templates[tmpl]) return templates[tmpl];
    var data = fs.readFileSync(path.join("templates", name + TEMPLATE_EXT));
    var tmpl = _.template(data);
    templates[name] = tmpl;
    return tmpl;
}

function localize(data, lang) {
    if (_.isArray(data)) {
        return _.reduce(data, (mem, value, key) => {
            mem.push(localize(value, lang));
            return mem;
        }, [])
    }
    else if (_.isPlainObject(data)) {
        return _.reduce(data, (mem, value, key) => {
            if (key.slice(-1) === '*') {
                let localized = value[lang];
                if (localized === undefined) localized = STRING_NOT_FOUND;
                mem[key.slice(0, -1)] = localized;
            }
            else {
                mem[key] = localize(value, lang);
            }
            return mem;
        }, {});
    }
    return data;
}

function output(fname, data) {
    fs.writeFileSync(fname, data);
}

function gen(driwings, fname) {
    var about = driwings.about;

    var categories = _.map(driwings.categories, (category) => {
        return template("category")({lang, category});
    });

    output(fname, template("home")({
        lang, categories, about
    }));
}

gen(localize(driwings, "en"), "index.html");
gen(localize(driwings, "pt"), "pt.html");
gen(localize(driwings, "es"), "es.html");
