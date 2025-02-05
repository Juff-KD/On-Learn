// JS..
// Less Code.. do more..
//Js Vars..
const ProfileAvatar = `<div class="avatar online placeholder">
<div class="bg-neutral text-neutral-content w-11 rounded-full">
<span class="text-xl">AI</span></div></div>`;

// const searchSvg= '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="search" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="21" y1="21" x2="15" y2="15" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><circle id="primary" cx="10" cy="10" r="7" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></svg>';
const searchSvg2 = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>';


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
<ul class="menu menu-sm menu-horizontal place-content-center bg-base-200 rounded-box">
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
fmtHtml("nav", "div", "BtnNav", "static m-0 flex items-center gap-x-16 place-content-center", "");

flxHtml(
  "BtnNav",
  "button",
  ["id=BtnSearch"],
  "btn btn-ghost btn-circle mt-2",
  searchSvg2
);

fmtHtml(
  "BtnNav",
  "span",
  "BtnMenu",
  "flex gap-x-4 items-center mt-2",
  ""
);

flxHtml(
  "BtnMenu",
  "button",
  ["data-target=rootContainer2"],
  "btn btn-sm btn-accent",
  "Lil' Sources"
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
//
// //------------------+root+--------------------
// // root-source
fmtHtml("root", "div", "rootMain", "static m-0 mt-30", "");
fmtHtml("rootMain", "div", "rootContainer1", "", ""); //:TODO: rootContainer1, rootContainer2.. for other data sources..
fmtHtml("rootContainer1", "div", "rootSrc", "", "");
fmtHtml("rootSrc", "div", "imgSrc", "", "");
sngHtml("imgSrc", ["src= , alt=source-imgs"], "", "");
fmtHtml("rootSrc", "div", "descrSrc", "", "");
fmtHtml("descrSrc", "h3", "titleSrc", "", "Introduction..");
fmtHtml("descrSrc", "p", "PSrc", "", "This is a..");

// Lil' sources..
fmtHtml("rootMain", "div", "rootContainer2", "grid place-content-center gap-4 text-3xl", ""); //:TODO: rootContainer1, rootContainer2.. for other data sources..
fmtHtml("rootContainer2", "h1", "titlRoot", "font-mono place-self-center", "Little Sources");
fmtHtml("rootContainer2", "div", "rootNav", "navbar bg-base-100", "");
fmtHtml("rootNav", "div", "rootNavTitle", "", rootNavTitle);

// fmtHtml("rootNavTitle", "ul", "forLists", "", "");
// fmtHtml("forLists", "li", "nav-ai", "", "ai");
// fmtHtml("forLists", "li", "nav-ui", "", "ui");
// fmtHtml("forLists", "li", "nav-colors", "", "colors");
// fmtHtml("forLists", "li", "nav-other", "", "other");

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
