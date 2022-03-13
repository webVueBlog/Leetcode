(function(modules)) { // webpackBootstrap
	// The module cache
	var installedModules = {};
	// The require function 
	// 引入一个模块
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		if (installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			exports: {}
		};
		// Execute the module functionx
		modules[module].call(module.exports, module, module.exports, __webpack_require__);
		// Return the exports of the module
		return module.exports;
	}
	// Load entry module and return exports 
	return __webpack_require__('./src/index.js');
}