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
const searchInput = document.querySelector('#searchExpand input[type="text"]');
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
if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        showResults(query);
    });
}

// Show all results initially
showResults('');

//-------------------------------+++++++++++++----------------------------//
// Function to handle container switching


const BtnArray = ["BtnSearch", "BtnMenu", "Profile"];
const Containers = ["rootContainer1", "rootContainer2", "rootContainer3"];
// const BtnMenu = document.getElementById("BtnMenu");
//

Containers.forEach(containerID => {
    const container = document.getElementById(containerID);
    if (container != document.getElementById("rootContainer1")) {
        container.style.display = "none";
    }
})

BtnArray.forEach(BtnShi => {
    const BtnFou = document.getElementById(BtnShi);
    if (BtnFou) {
        BtnFou.addEventListener('click', function() {
            const BtnTarget = BtnFou.getAttribute("data-target");
            const BtnCom = document.getElementById(BtnTarget);
            if (BtnTarget) {
                BtnCom.style.display = 'block';

                Containers.forEach(containerID => {
                    const container = document.getElementById(containerID);
                    if (container != BtnCom) {
                        container.style.display = "none";
                    }
                })
            }

        })

    }
})











