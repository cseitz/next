module.exports = {};
// try {
//     Object.assign(module.exports, require('esm')(module)(process.cwd() + '/next.config.mjs'));
// } catch(e) {

// }
try {
    Object.assign(module.exports, require(process.cwd() + '/next.config.js'));
} catch(e) {
    
}