// Convex fetch
import { ConvexClient } from "convex/browser";

// Convex deployment URL
const client = new ConvexClient(import.meta.env.VITE_CONVEX_URL);

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

  const statusEl = document.getElementById("form-status"); 

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    // trial two--
    // result.success ? statusEl.innerText = "✅ Message sent!" : statusEl.innerText = "❌ Failed to send message.";

    // trial one--  
    // document.getElementById("form-status").innerText = result.success
      // ? " Message sent!"
      // : " Failed to send message.";
      // form.reset();
      
      // trial three-- 
      if (result.success){
        statusEl.innerText = "✅ Message sent!";
        form.reset();
      } else {
        statusEl.innerText = "❌ Failed to send message.";
      }
  } catch (err) {
    console.error("Error submitting contact form:", err);
    statusEl.innerText = "⚠️ Error sending form.";
  }

  setTimeout(() => {
    statusEl.innerText = "";
  }, 3000);
});

//hamburger menu toggle 
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
const navItems = document.querySelectorAll("nav ul li a");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});

// Close menu on link click 
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInsideNav = navLinks.contains(event.target);
  const isToggleButton = menuToggle.contains(event.target);

  if (!isClickInsideNav && !isToggleButton) {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
