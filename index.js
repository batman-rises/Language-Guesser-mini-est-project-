const franc = require("franc");
const langs = require("langs");

const input = 'আমি বাঙালি ভাষা বুঝি';

const langCode = franc(input);

if (langCode) {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(`Our best guess is ${language.name}`);
    } else {
        console.log("Language not found in the 'langs' database.");
    }
} else {
    console.log("Language detection failed or input text not recognized.");
}