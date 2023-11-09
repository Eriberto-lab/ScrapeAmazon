document.getElementById("scrapeButton").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;

  if (!keyword) {
    alert("Please enter a keyword to search on Amazon.");
    return;
  }

  try {
    const response = await fetch(`/api/scrape?keyword=${keyword}`);
    const data = await response.json();

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    data.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>Rating: ${product.rating}⭐</p>
                    <p>Reviews: ${product.reviews}</p>
                    <img src="${product.imageUrl}" alt="Product Image">
                `;
      resultsContainer.appendChild(productDiv);
    });
  } catch (error) {
    console.error(error);
    alert("An error occurred while scraping Amazon.");
  }
});
