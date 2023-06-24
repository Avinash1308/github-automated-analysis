// main.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');

    // Attach an event listener to the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the input value
        const githubUrl = document.querySelector('#github_url').value;

        // Perform any additional validation if needed

        // Make an AJAX request to the server for repository analysis
        fetch('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ github_url: githubUrl }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            displayResult(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    });

    // Function to display the analysis result
    function displayResult(result) {
        // Get the result container element
        const resultContainer = document.querySelector('.result');

        // Clear any existing content
        resultContainer.innerHTML = '';

        // Create and append the result elements
        const heading = document.createElement('h2');
        heading.textContent = 'Analysis Result';
        resultContainer.appendChild(heading);

        const repositoryLink = document.createElement('a');
        repositoryLink.href = result.repository.url;
        repositoryLink.textContent = result.repository.name;
        resultContainer.appendChild(repositoryLink);

        const gptAnalysis = document.createElement('div');
        gptAnalysis.classList.add('gpt-analysis');
        const analysisHeading = document.createElement('h4');
        analysisHeading.textContent = 'GPT Analysis';
        const analysisText = document.createElement('p');
        analysisText.textContent = result.repository.gpt_analysis;
        gptAnalysis.appendChild(analysisHeading);
        gptAnalysis.appendChild(analysisText);
        resultContainer.appendChild(gptAnalysis);

        const additionalInfo = document.createElement('div');
        additionalInfo.classList.add('additional-info');
        const additionalInfoHeading = document.createElement('h4');
        additionalInfoHeading.textContent = 'Additional Information';
        const infoList = document.createElement('ul');
        const ownerItem = document.createElement('li');
        ownerItem.textContent = 'Owner: ' + result.repository.owner;
        const starsItem = document.createElement('li');
        starsItem.textContent = 'Stars: ' + result.repository.stars;
        const languageItem = document.createElement('li');
        languageItem.textContent = 'Language: ' + result.repository.language;
        infoList.appendChild(ownerItem);
        infoList.appendChild(starsItem);
        infoList.appendChild(languageItem);
        additionalInfo.appendChild(additionalInfoHeading);
        additionalInfo.appendChild(infoList);
        resultContainer.appendChild(additionalInfo);
    }
});

