# ScrapeAmazon

## Description
ScrapeAmazon is a web scraping application designed to extract product information from the Amazon website. Using the Axios library for making HTTP requests, the project provides a foundation for creating custom web scrapers.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Common Troubleshooting](#common-troubleshooting)


## Prerequisites

Before you begin, make sure you have Node.js and NPM installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:Eriberto-lab/ScrapeAmazon.git
   ```

2. Navigate to the project directory:

   ```bash
   cd src
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Configuration

In the `server.js` file, you can configure the Amazon URL you want to scrape. For example:

```javascript
const amazonURL = 'https://www.amazon.com/s?k=${keyword}';
```

## Usage

1. Open the terminal and navigate to the project directory.

2. Run the script:

   ```bash
   node server.js
   ```

## Common Troubleshooting

### Error: "Request failed with status code 503"

- **Description**: This error indicates that Amazon is blocking or limiting your requests.
- **Solutions**:
  - Check if the URL is correct.
  - Use a custom User-Agent.
  - Ensure you are scraping ethically and in compliance with Amazon's Terms of Service.
  - Consider adjusting delays between requests.


