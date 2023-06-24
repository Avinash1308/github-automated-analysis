# github-automated-analysis

 The GitHub Automated Analysis tool is a Python-based application that assesses the technical complexity of GitHub repositories. It uses GPT and LangChain to evaluate each repository individually and determine the most challenging one.

## Project Structure

The project structure is organized as follows:
github-automated-analysis/
├── app.py
├── templates/
│ ├── index.html
│ ├── result.html
│ └── base.html
├── static/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── main.js
└── README.md

- `app.py`: The main Python file that implements the backend logic of the application.
- `templates/`: Contains the HTML templates used for rendering the web pages.
  - `index.html`: The homepage template where users can input a GitHub user URL.
  - `result.html`: The template that displays the analysis result and GPT analysis justification.
  - `base.html`: The base template that provides the common structure for all pages.
- `static/`: Contains the static assets used in the project, such as CSS and JavaScript files.
  - `css/`: Contains the `style.css` file for styling the web pages.
  - `js/`: Contains the `main.js` file for adding custom JavaScript functionality.
- `README.md`: The documentation file you're currently reading.

## Requirements

To run the GitHub Automated Analysis tool locally, make sure you have the following dependencies installed:

- Python 3.x
- Flask

## Installation

1. Clone this repository:


2. Navigate to the project directory:


3. Install the required Python packages:


## Usage

1. Start the application by running the following command:


2. Open your web browser and visit `http://localhost:5000` to access the GitHub Automated Analysis tool.

3. Enter a GitHub user URL and submit the form to initiate the analysis.

4. The tool will fetch the user's repositories, assess their technical complexity using GPT, and display the most challenging repository along with the GPT analysis justification.

## Contributing

Contributions to the GitHub Automated Analysis project are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.


## Acknowledgements

Special thanks to Mercor for providing the project requirements and guidance.



