const { loadStyles } = require('@microsoft/load-themed-styles');

module.exports = {
    loadStyles(...styles) {
        console.log(styles);
        loadStyles(...styles);
    }
}