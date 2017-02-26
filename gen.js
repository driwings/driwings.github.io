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

function _localize(data, lang) {
    if (_.isArray(data)) {
        return _.reduce(data, (mem, value, key) => {
            mem.push(_localize(value, lang));
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
                mem[key] = _localize(value, lang);
            }
            return mem;
        }, {});
    }
    return data;
}

function localize(data, lang) {
    var data = _localize(data, lang);
    data.langs[lang].current = true;
    return data;
}

function output(fname, data) {
    fs.writeFileSync(fname, data);
}

function genPage(driwings, fname) {
    var base = template("base");
    driwings.content = template("home")(driwings);
    output(fname, base(driwings));
}

function genHome(driwings) {
    Object.keys(driwings.langs).forEach(lang => {
        var langdata = driwings.langs[lang];
        var localized = localize(driwings, lang)
        genPage(localized, langdata.home);
    });
}

genHome(driwings);
