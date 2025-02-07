// JS..
//-------------------------------+++++++++++++---------------------------------//

//-----------------------------+++++++-----------------------------------------//

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
//
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
  $('button[data-target]').click(function () {
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
