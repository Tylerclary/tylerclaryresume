const counterElement = document.getElementById("visitor-count");

const apiEndpoint = "https://7qm6k5vs21.execute-api.us-east-2.amazonaws.com/visitorcount";

async function updateVisitorCount() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    counterElement.textContent = `Visitor Count: ${data.count}`;
  } catch (err) {
    console.error("Visitor count error:", err);
    counterElement.textContent = "Visitor Count: Unavailable";
  }
}

updateVisitorCount();