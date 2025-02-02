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
  a.innerHTML += n;
}

function flxHtml(a, tagName, [Params], CLASS, value) {
  const Arr = [`${Params}`].join(",");
  const n = `<${tagName} ${Arr} class="${CLASS}">${value}</${tagName}>`;
  a.innerHTML += n;
}

function sngTHtml(a, tagName, [Params], CLASS) {
  const Arr = [`${Params}`].join(",");
  const n = `<${tagName} ${Arr} class="${CLASS}" />`;
  a.innerHTML += n;
}

function sngHtml(a, tagName, [Params], CLASS) {
  const Arr = [`${Params}`].join(",");
  const n = `<${tagName} ${Arr} class="${CLASS}">`;
  a.innerHTML += n;
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
//html..
fmtHtml(nav, "div", "BtnSc", "", "");
flxHtml(
  BtnSc,
  "button",
  ["data-target=rootContainer"],
  "btn btn-primary",
  "Button",
);

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
fmtHtml(root, "div", "rootContainer", "", "");
fmtHtml(rootContainer, "h2", "titlRoot", "", "Little Sources");
fmtHtml(rootContainer, "div", "rootNav", "", "");
fmtHtml(rootNav, "span", "rootNavTitle", "", "");
fmtHtml(rootNavTitle, "ul", "forLists", "", "");
fmtHtml(forLists, "li", "nav-ui", "", "ui");
fmtHtml(forLists, "li", "nav-color", "", "color");
fmtHtml(forLists, "li", "nav-icons", "", "icons");
fmtHtml(forLists, "li", "nav-other", "", "other");
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
  $('[id^="rootContainer"]').show();
  // Add click event listeners to buttons
  $("button[data-target]").click(function () {
    const targetId = $(this).attr("data-target"); // Get the target content ID
    // $('[id^="root"]').hide(); // Hide all content sections
    $(`#${targetId}`).toggle(); // Show the target content section
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
