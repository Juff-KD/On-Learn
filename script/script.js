// JS..
//-------------------------------+++++++++++++---------------------------------//

//-----------------------------+++++++-----------------------------------------//


const dataKeys = [
	"tools",
	"gui-tools",
	"helpers",
	"ui",
	"colors",
	"quick-cmds",
	"schemes",
];
const searchInput = document.querySelector('#searchExpand input[type="text"]');
const resultsContainer = document.getElementById('searchResult');
const swapid = document.getElementById('swapid');

function toggleClass(element, className, swClass) {
	if (element.classList.contains(className)) {
		element.classList.remove(className);
		element.classList.add(swClass);
	} else {
		element.classList.add(className);
	}
}

function showResults(query) {
	resultsContainer.innerHTML = '';

	const filteredResults = dataKeys.filter(item =>
		item.toLowerCase().includes(query.toLowerCase())
	);

	if (filteredResults.length > 0) {
		filteredResults.forEach(result => {
			const resultItem = document.createElement('div');
			resultItem.id = 'resultItem';
			resultItem.className = 'result-item btn btn-ghost flex flex-row';
			resultItem.textContent = result;
			resultsContainer.appendChild(resultItem);

			if (resultItem) {
				resultItem.addEventListener('click', (event) => {
					searchInput.value = resultItem.textContent.toString();
					toggleClass(resultItem, 'btn-ghost', 'btn-info');
					// }

				});

			}
			if (searchInput) {
				searchInput.addEventListener('pointerdown', () => {
					toggleClass(resultItem, 'btn-info', 'btn-ghost');
				})
			}

		});

	} else {
		resultsContainer.innerHTML = '<div class="result-item btn btn-ghost">No results found.</div>';
	}
}

if (searchInput) {
	searchInput.addEventListener('input', (event) => {
		const query = event.target.value;
		showResults(query);
	});

	searchInput.addEventListener('pointerdown', (event) => {
		const query = event.target.value;
		swapid.className = 'swap-active';
		showResults(query);
		resultsContainer.style.display = 'block';
	})

	if (swapid) {
		swapid.addEventListener('click', () => {
			swapid.className = 'swap';
			searchInput.value = '';
			resultsContainer.style.display = 'none';
		})

	}
}

// Show all results initially
// showResults('');


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


const rootNavbtn = ["lilAi", "lilUi", "lilColors"];
const rootNavbtnData = ["lilAiData", "lilUiData", "lilColorsData"];

rootNavbtnData.forEach(rootData => {
	const rootNavResult = document.getElementById(rootData);
	if (rootNavResult != document.getElementById("lilAiData")) {
		rootNavResult.style.display = "none";

	}
})

rootNavbtn.forEach(navBtn => {
	const navFou = document.getElementById(navBtn);
	if (navFou) {
		navFou.addEventListener('click', function() {
			const navTarget = navFou.getAttribute("data-target");
			const navTargetData = document.getElementById(navTarget);
			if (navTarget) {
				navTargetData.style.display = "flex";

				rootNavbtnData.forEach(navDatas => {
					const navDatasG = document.getElementById(navDatas);
					if (navDatasG != navTargetData) {
						navDatasG.style.display = "none";
					}
				})
			}
		})
	}
})
//
//







