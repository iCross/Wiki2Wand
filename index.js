// ==UserScript==
// @name         Wikipedia 2 Wikiwand
// @version      0.1
// @description  Redirect Wikipedia to Wikiwand.
// @namespace    Wiki2Wand
// @run-at       document-start
// @include      https://*.wikipedia.*/*
// @include      http://*.wikipedia.*/*
// @exclude      http://*.wikipedia.org/wiki/*?oldformat=true
// @exclude      https://*.wikipedia.org/wiki/*?oldformat=true
// @homepageURL  https://github.com/iCross/Wiki2Wand
// @downloadURL  https://raw.githubusercontent.com/iCross/Wiki2Wand/main/index.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const url = document.URL;
  const regex1 = /^https?:\/\/(\w+)\.m?.?wikipedia\.org\/wiki\/([^\?#]+)(\?[^#]+)?(#.+)?/;
  const regex2 = /^https?:\/\/\w+\.m?.?wikipedia\.org\/([\w-]+)\/([^\?#]+)(\?[^#]+)?(#.+)?/;

  /**
   * Replace and redirect URL to Wikiwand
   * @param {RegExp} regex - Regular expression to match URL
   * @returns {boolean} - If the URL matched and was replaced
   */
  function redirectToWikiwand(regex) {
    if (regex.test(url)) {
      window.location.replace(url.replace(regex, 'https://www.wikiwand.com/$1/$2$4'));
      return true;
    }
    return false;
  }

  if (!redirectToWikiwand(regex1) && !redirectToWikiwand(regex2)) {
    console.log('Wiki script: no matched wiki url pattern.');
  }
})();

