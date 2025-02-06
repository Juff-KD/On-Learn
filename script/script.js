// JS..
// Less Code.. do more..
//Js Vars..

const rootSideIcon = `
<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
<div class="drawer-content ">
<label for="my-drawer-4" class="drawer-button btn btn-sm btn-neutral">
<svg 
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#f5f5f5"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <line x1="9" y1="3" x2="9" y2="21" />
  <path d="M17 16l-4-4 4-4" />
</svg>
</label>
</div>

<div class="drawer-side mt-30">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
<ul class="menu bg-base-100 text-base-content min-h-full w-56">
  <li><a href="#intro">Introduction</a></li>
  <li>
    <a href="#learnDir">On Learn Directory</a>
    <ul>
      <li><a href="#sectionLearnDirSub1">Learning Preferences</a></li>
      <li><a href="#sectionLearnDirSub2">Deep Learning</a></li>
      <li>
        <a href="#computerTerms">Computer Terms</a>
        <ul>
          <li><a href="#sectionTermSub1">Standard Computer Terms</a></li>
          <li><a href="#sectionTermSub2">Special Computer Terms</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#highlightLearn">On Learn Highlights</a></li>
</ul>
</div>
`;

const rootSideData = `
<article id="intro">
            <h2>Section 1</h2>
            <p>This is the content of section 1.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
        <article id="learnDir">
            <h2>Section 2</h2>
            <p>This is the content of section 2.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </article>
        <article id="sectionLearnDirSub1">
            <h2>Section 3</h2>
            <p>This is the content of section 3.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </article>
        <article id="sectionLearnDirSub2">
            <h2>Section 4</h2>
            <p>This is the content of section 4.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
        <article id="computerTerms">
            <h2>Section 5</h2>
            <p>This is the content of section 5.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
        <article id="sectionTermSub1">
            <h2>Section 6</h2>
            <p>This is the content of section 6.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </article>
`;


const ProfileAvatar = `<div class="avatar online placeholder">
<div class="bg-neutral text-neutral-content w-11 rounded-full">
<span class="text-xl">AI</span></div></div>`;

// const searchSvg= '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="search" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="21" y1="21" x2="15" y2="15" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><circle id="primary" cx="10" cy="10" r="7" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></svg>';
// const searchSvg2 = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>';
const searchSvg = '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.13232 7C6.13232 7.41421 5.79654 7.75 5.38232 7.75L3.26468 7.75C2.85046 7.75 2.51468 7.41421 2.51468 7C2.51468 6.58579 2.85046 6.25 3.26468 6.25L5.38232 6.25C5.79654 6.25 6.13232 6.58579 6.13232 7Z" fill="#00cdb8" fill-rule="evenodd"/><path clip-rule="evenodd" d="M21.4851 7C21.4851 7.41421 21.1493 7.75 20.7351 7.75L13.3233 7.75C12.9091 7.75 12.5733 7.41421 12.5733 7C12.5733 6.58578 12.9091 6.25 13.3233 6.25L20.7351 6.25C21.1493 6.25 21.4851 6.58579 21.4851 7Z" fill="#00cdb8" fill-rule="evenodd"/><path d="M4.85278 7C4.85278 5.60218 4.85278 4.90326 5.08114 4.35195C5.38563 3.61687 5.96965 3.03284 6.70473 2.72836C7.25605 2.5 7.95496 2.5 9.35278 2.5V2.5C10.7506 2.5 11.4495 2.5 12.0008 2.72836C12.7359 3.03284 13.3199 3.61687 13.6244 4.35195C13.8528 4.90326 13.8528 5.60218 13.8528 7V7C13.8528 8.39782 13.8528 9.09674 13.6244 9.64805C13.3199 10.3831 12.7359 10.9672 12.0008 11.2716C11.4495 11.5 10.7506 11.5 9.35278 11.5V11.5C7.95496 11.5 7.25605 11.5 6.70473 11.2716C5.96965 10.9672 5.38563 10.3831 5.08114 9.64805C4.85278 9.09674 4.85278 8.39782 4.85278 7V7Z" fill="#00cdb8"/><path clip-rule="evenodd" d="M17.8674 18C17.8674 17.5858 18.2032 17.25 18.6174 17.25L20.7351 17.25C21.1493 17.25 21.4851 17.5858 21.4851 18C21.4851 18.4142 21.1493 18.75 20.7351 18.75L18.6174 18.75C18.2032 18.75 17.8674 18.4142 17.8674 18Z" fill="#00cdb8" fill-rule="evenodd"/><path clip-rule="evenodd" d="M2.51465 18C2.51465 17.5858 2.85044 17.25 3.26465 17.25L10.6764 17.25C11.0906 17.25 11.4264 17.5858 11.4264 18C11.4264 18.4142 11.0906 18.75 10.6764 18.75L3.26465 18.75C2.85043 18.75 2.51465 18.4142 2.51465 18Z" fill="#00cdb8" fill-rule="evenodd"/><path d="M19.147 18C19.147 19.3978 19.147 20.0967 18.9186 20.6481C18.6141 21.3831 18.0301 21.9672 17.295 22.2716C16.7437 22.5 16.0448 22.5 14.647 22.5V22.5C13.2491 22.5 12.5502 22.5 11.9989 22.2716C11.2638 21.9672 10.6798 21.3831 10.3753 20.648C10.147 20.0967 10.147 19.3978 10.147 18V18C10.147 16.6022 10.147 15.9033 10.3753 15.3519C10.6798 14.6169 11.2638 14.0328 11.9989 13.7284C12.5502 13.5 13.2491 13.5 14.647 13.5V13.5C16.0448 13.5 16.7437 13.5 17.295 13.7284C18.0301 14.0328 18.6141 14.6169 18.9186 15.3519C19.147 15.9033 19.147 16.6022 19.147 18V18Z" fill="#00cdb8"/></svg>';
const searchExpand = `</label>
<label class="input input-sm input-bordered flex items-center gap-2 w-76 place-self-center">
  <input type="text" class="grow" placeholder="Search" />
  <kbd class="kbd kbd-sm">⌘</kbd>
  <kbd class="kbd kbd-sm">K</kbd>
</label>`;

const ThemeChangeBtn = `
<label class="swap swap-rotate">  
  <!-- this hidden checkbox controls the state -->
 <input type="checkbox" class="theme-controller" value="light"/> 
<!-- sun icon -->
  <svg
    class="swap-on h-9 w-9 fill-current "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <!-- moon icon -->
  <svg 
    class="swap-off h-9 w-9 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>`;


const rootNavTitle = `
<ul class="menu menu-sm menu-horizontal place-content-center bg-base-200 rounded-box w-76 h-auto gap-4">
  <li><a>Ai</a></li>
  <li><a>Ui</a></li>
  <li><a>Colors</a></li>
<li>
     <details>
          <summary>Other</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
</li>
</ul>
`;
//-----------------------------+++++++-----------------------------------------//
// import { ProfileAvatar } from './Vars.js';
// import { searchSvg2 } from './Vars.js';
// import { ThemeChangeBtn } from './Vars.js';
// import { rootNavTitle } from './Vars.js';
// import * as Var from './Vars.js';
// const root = document.getElementById("root");
// const nav = document.getElementById("nav");

function fmtHtml(a, tagName, ID, CLASS, value) {
  const n = `<${tagName} id=${ID} class="${CLASS}">${value}</${tagName}>`;
  document.getElementById(a).innerHTML += n;
}

function flxHtml(a, tagName, [Params], CLASS, value) {
  const Arr = [`${Params}`].join(",");
  const n = `<${tagName} ${Arr} class="${CLASS}">${value}</${tagName}>`;
  document.getElementById(a).innerHTML += n;
}

function sngTHtml(a, tagName, [Params], CLASS) {
  const Arr = [`${Params}`].join(",");
  const n = `<${tagName} ${Arr} class="${CLASS}" />`;
  document.getElementById(a).innerHTML += n;
}

function sngHtml(a, tagName, [Params], CLASS) {
  const Arr = [`${Params}`].join(",");
  const n = `<${tagName} ${Arr} class="${CLASS}">`;
  document.getElementById(a).innerHTML += n;
}

//-------------------------------+++++++++++++---------------------------------//

//-----------------------------+++++++-----------------------------------------//
//html..
fmtHtml("nav", "div", "BtnNavMain", "fixed z-100 flex bg-base-100 pl-3 pr-3 pb-20 items-center gap-x-14 place-content-center", "");
fmtHtml("BtnNavMain", "div", "BtnNav", "mt-2", "");

flxHtml(
  "BtnNav",
  "button",
  ["data-target=rootContainer3"],
  "btn btn-md btn-ghost",
  searchSvg
);

fmtHtml(
  "BtnNavMain",
  "span",
  "BtnMenu",
  "flex gap-x-3 items-center place-self-end mt-2 ml-26",
  ""
);

flxHtml(
  "BtnMenu",
  "button",
  ["data-target=rootContainer2"],
  "btn btn-sm btn-accent",
  "Lil' Src"
);

flxHtml(
  "BtnMenu",
  "button",
  ["id=BtnThemeChange"],
  "",
  ThemeChangeBtn
);

flxHtml(
  "BtnMenu",
  "button",
  ["id=Profile"],
  "",
  ProfileAvatar
);

//for rootContainer1
// flxHtml(
//   "rootSrc",
//   "article",
//   ["data-target=rootContainer1"],
//   "",
//   ""
// );

//----------------+nav+--------------------
// fmtHtml("main", "", "", "overflow-y-hidden", "");
// //------------------+root+--------------------
// // root-source
fmtHtml("root", "div", "rootMain", "flex flex-col", "");

fmtHtml("rootMain", "div", "rootContainer1", "", ""); //:TODO: rootContainer1, rootContainer2.. for other data sources..
fmtHtml("rootContainer1", "div", "rootSrc", "", "");
fmtHtml(
  "rootSrc",
  "div",
  "rootSrcData",
  "mt-40 overflow-y-auto h-calc(100vh - 40px) w-60 text-pretty place-self-center",
  rootSideData
);
fmtHtml("rootSrc", "div", "rootSide", "fixed top-20 right-3 z-101", "");
fmtHtml("rootSide", "div", "rootSideIcon", " drawer drawer-end", rootSideIcon);


// Lil' sources..
fmtHtml("rootMain", "div", "rootContainer2", "mt-28 grid place-content-center gap-4 text-2xl", ""); //:TODO: rootContainer1, rootContainer2.. for other data sources..
fmtHtml("rootContainer2", "h1", "titlRoot", "font-mono place-self-center z-101", "Little Sources");
fmtHtml("rootContainer2", "div", "rootNav", "navbar bg-base-100", "");
fmtHtml("rootNav", "div", "rootNavTitle", "", rootNavTitle);

// fmtHtml("forLists", "li", "nav-other", "", "other");

fmtHtml("rootMain", "div", "rootContainer3", "", ""); //:TODO: rootContainer1, rootContainer2.. for other data sources..
fmtHtml("rootContainer3", "div", "searchExpand", "mt-40", searchExpand);
fmtHtml("rootContainer3", "div", "searchResult", "", "");

const dataKeys = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];
const searchInput = document.getElementById('searchExpand');
const resultsContainer = document.getElementById('searchResult');

function showResults(query) {
  resultsContainer.innerHTML = '';

  const filteredResults = dataKeys.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredResults.length > 0) {
    filteredResults.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      resultItem.textContent = result;
      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.innerHTML = '<div class="result-item">No results found.</div>';
  }
}

searchInput.addEventListener('input', (event) => {
  const query = event.target.value;
  showResults(query);
});

// Show all results initially
showResults('');
//-------------------------------+++++++++++++---------------------------------//
// Workspace Handle Seg..
jQuery.noConflict();

// jQuery(document).ready(function ($) {
//   // You can use the locally-scoped $ in here as an alias to jQuery.
//   $("div").hide();
// });

//ready function
function readyDoc($) {
  $('[id^="rootContainer"]').hide();
  $('#rootContainer1').show();
  // Add click event listeners to buttons
  // $('#rootContainer1').show();
  $('button[data-target]').click(function() {
    const targetId = $(this).attr('data-target'); // Get the target content ID
    $('[id^="rootContainer"]').hide(); // Hide all content sections
    // $('#rootContainer1').hide();
    $(`#${targetId}`).show(); // Show the target content section
    // $('[id^="rootContainer"]').toggle();
  });

  //-----------------##########-------------------
  // let isProfileVisible = false;
  //
  // $("#BtnSrc").click(function () {
  //   if (isProfileVisible) {
  //     $("#rootNav").show();
  //     $("#profile").hide();
  //   } else {
  //     $("#rootNav").hide();
  //     $("#profile").show();
  //   }
  //   isProfileVisible = !isProfileVisible;
  //   // Code to run when the document is ready.
  // });
}

jQuery(document).ready(readyDoc);
// or:
// $(window).on("load", readyDoc);
