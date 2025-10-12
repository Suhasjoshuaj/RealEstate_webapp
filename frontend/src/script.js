// Convex fetch
import { ConvexClient } from "convex/browser";

// Convex deployment URL
const client = new ConvexClient("https://beaming-dachshund-33.convex.cloud");

// Where to inject properties
const propertyList = document.getElementById("property-list");

// Render properties
async function renderProperties() {
  try {
    const properties = await client.query("property:listProperties");
    propertyList.innerHTML = "";

    if (!properties || properties.length === 0) {
      propertyList.innerHTML = "<p>No properties available yet.</p>";
      return;
    }

    properties.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.imageUrl}" alt="${p.title}">
        <div class="card-body">
          <h4>${p.title}</h4>
          <p>${p.location}</p>
          <p>From <strong>₹${p.price.toLocaleString()}</strong></p>
        </div>`;
      propertyList.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching properties:", err);
    propertyList.innerHTML = "<p>⚠️ Failed to load properties.</p>";
  }
}
renderProperties();


// Contact form submit
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("http://localhost:5000/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    document.getElementById("form-status").innerText = result.success
      ? " Message sent!"
      : " Failed to send message.";
      form.reset();
  } catch (err) {
    console.error("Error submitting contact form:", err);
    document.getElementById("form-status").innerText = "⚠️ Error sending form.";
  }
});
