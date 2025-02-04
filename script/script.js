// Notes for later..
// -----------------+++++-------------------------------//
// :NOTE1: tips to handle the workspace..
// function showContent(targetId) {
// Hide all content sections
//   document.querySelectorAll('[id^="content"]').forEach((content) => {
//     content.classList.add('hidden');
//   });
//
//   // Show the target content section
//   const targetContent = document.getElementById(targetId);
//   if (targetContent) {
//     targetContent.classList.remove('hidden');
//   }
// }
//
// document.querySelectorAll('button[data-target]').forEach((button) => {
//   button.addEventListener('click', () => {
//     const targetId = button.getAttribute('data-target');
//     showContent(targetId);
//   });
// });
//
// // Optionally, show the first content by default
// showContent('content1');
//-------------------+++++-----------------------------//
// :NOTE2: tips to handle the workspace..
// // script.js

// $(document).ready(function () {
// Hide all content sections except the first one
//   $('[id^="content"]').hide();
//   $('#content1').show();
//
//   // Add click event listeners to buttons
//   $('button[data-target]').click(function () {
//     const targetId = $(this).attr('data-target'); // Get the target content ID
//     $('[id^="content"]').hide(); // Hide all content sections
//     $(`#${targetId}`).show(); // Show the target content section
//   });
// });
// -----------------------------++++++-------------------//
//// MdRendering in HTML
// const data =
//   "https://raw.githubusercontent.com/Juff-KD/On-Learn/18c750d878a8b53c542593340a6a56a5be16a93c/script/hello.md";

// fetch(data)
//   .then((response) => response.text())
//   .then((markdown) => {
//     // fetchedMarkdownData = markdown;
//
//     const converter = new showdown.Converter();
//     const html = converter.makeHtml(markdown);
//     document.getElementById("ptag").innerHTML += html;
//   })
//   .catch((error) => {
//     console.error("Error fetching or converting Markdown:", error);
//     // Handle errors gracefully, e.g., display an error message to the user
//   });
//---------------------------------++++++++++++---------------------------------------//
// JS..
// Less Code.. do more..
const root = document.getElementById("root");
const nav = document.getElementById("nav");

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

// fmtHtml(
//   root,
//   "p",
//   "testP",
//   "text-8xl font-bold text-purple-500",
//   "RendTest with tailwindcss",
// );
//
// sngHtml(
//   root,
//   "input",
//   // "type = email id = UserEmail placeholder = john@rhcp.com",
//   ["type = email , id = UserEmail , placeholder = john@rhcp.com"],
//   "mt-1 w-sm-20 rounded-md border-red-500",
// );

// fmtHtml(root, "button", "Btn", "btn btn-primary", "Button");
//-------------------------------+++++++++++++---------------------------------//

// const searchSvg= '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="search" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary" x1="21" y1="21" x2="15" y2="15" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><circle id="primary" cx="10" cy="10" r="7" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></svg>';
const searchSvg2='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>';
const ThemeBtn =`
<label class="grid cursor-pointer place-items-center">
  <input
    type="checkbox"
    value="synthwave"
    class="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    class="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    class="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>`;

const ThemeChangeBtn = `
<label class="swap swap-rotate">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="theme-controller" value="autumn" />
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

const ProfileAvatar = `<div class="avatar online placeholder"> 
<div class="bg-neutral text-neutral-content w-12 rounded-full">
<span class="text-xl">AI</span></div></div>`;
//-----------------------------+++++++-----------------------------------------//
//html..
fmtHtml("nav", "div", "BtnNav", "flex","");

flxHtml(
  "BtnNav",
  "button",
  ["id=BtnSearch"],
  "btn btn-ghost btn-circle absolute top-2 left-4",
  searchSvg2
);

fmtHtml(
  "BtnNav",
  "span",
  "BtnMenu",
  "flex gap-x-4 items-center absolute top-2 right-4",
  ""
)
flxHtml(
  "BtnMenu",
  "button",
  ["data-target=rootContainer"],
  "btn btn-sm btn-accent",
  "Little Sources"
)
flxHtml(
  "BtnMenu",
  "button",
  ["id=BtnThemeChange"],
  "",
 ThemeChangeBtn 
)
flxHtml(
  "BtnMenu",
  "button",
  ["id=Profile"],
  "",
 ProfileAvatar 
)
//----------------+nav+--------------------
// sngHtml(nav, "img", ["src=  , alt=search"], "");
// fmtHtml(nav, "span", "navcomp", "", "");
// fmtHtml(navcomp, "li", "", "", "Lil' src");
// fmtHtml(navcomp, "li", "theme", "", "");
// sngHtml(theme, "img", ["src= , alt=themes"]);
// fmtHtml(navcomp, "li", "profile", "", "");
// sngHtml(profile, "img", ["src= , alt=profile-intro"]);
//
// //------------------+root+--------------------
fmtHtml("root", "div", "rootContainer", "", ""); //:TODO: rootContainer1, rootContainer2.. for other data sources..
fmtHtml("rootContainer", "h2", "titlRoot", "", "Little Sources");
fmtHtml("rootContainer", "div", "rootNav", "", "");
fmtHtml("rootNav", "span", "rootNavTitle", "", "");
fmtHtml("rootNavTitle", "ul", "forLists", "", "");
fmtHtml("forLists", "li", "nav-ui", "", "ui");
fmtHtml("forLists", "li", "nav-color", "", "color");
fmtHtml("forLists", "li", "nav-icons", "", "icons");
fmtHtml("forLists", "li", "nav-other", "", "other");
//
// // root-source
// fmtHtml(rootContainer, "div", "rootSrc", "", "");
// fmtHtml(rootSrc, "div", "imgSrc", "", "");
// sngHtml(imgSrc, ["src= , alt=source-imgs"], "", "");
// fmtHtml(rootSrc, "div", "descrSrc", "", "");
// fmtHtml(descrSrc, "h3", "titleSrc", "", "Introduction..");
// fmtHtml(descrSrc, "p", "PSrc", "", "This is a..");

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
  // Add click event listeners to buttons
  $("button[data-target]").click(function () {
    const targetId = $(this).attr("data-target"); // Get the target content ID
    // $('[id^="root"]').hide(); // Hide all content sections
    $(`#${targetId}`).toggle(); // Show the target content section
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
