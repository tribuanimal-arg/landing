// TRIBU Animal - Main JavaScript File

// ============================================
// MODAL FUNCTIONALITY
// ============================================

// Variable to store scroll position
let scrollPosition = 0;

// Regulations Modal
function openRegulationsModal(event) {
  if (event) event.preventDefault();

  // Store current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Apply modal open styles
  document.body.classList.add("modal-open");
  document.body.style.top = `-${scrollPosition}px`;

  // Show modal
  document.getElementById("regulationsModal").style.display = "block";
}

function closeRegulationsModal(event) {
  if (event) event.preventDefault();

  // Hide modal
  document.getElementById("regulationsModal").style.display = "none";

  // Remove modal styles and restore scroll position
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}

// TRIBU Modal
function openTribuModal(event) {
  if (event) event.preventDefault();

  // Store current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Apply modal open styles
  document.body.classList.add("modal-open");
  document.body.style.top = `-${scrollPosition}px`;

  // Show modal
  document.getElementById("tribuModal").style.display = "block";
}

function closeTribuModal(event) {
  if (event) event.preventDefault();

  // Hide modal
  document.getElementById("tribuModal").style.display = "none";

  // Remove modal styles and restore scroll position
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}

// Sedes Modal
function openSedesModal(event) {
  if (event) event.preventDefault();

  // Store current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Apply modal open styles
  document.body.classList.add("modal-open");
  document.body.style.top = `-${scrollPosition}px`;

  // Show modal
  document.getElementById("sedesModal").style.display = "block";
}

function closeSedesModal(event) {
  if (event) event.preventDefault();

  // Hide modal
  document.getElementById("sedesModal").style.display = "none";

  // Remove modal styles and restore scroll position
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}

// ============================================
// MOBILE NAVIGATION
// ============================================

function toggleMobileMenu() {
  console.log("Toggle mobile menu clicked"); // Debug log
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) {
    console.error("Hamburger or nav-links element not found");
    return;
  }

  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  console.log("Nav links classes:", navLinks.className); // Debug log

  // Prevent body scroll when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  document.body.style.overflow = "auto";
}

// ============================================
// TRIBU REQUIREMENTS TOGGLE
// ============================================

function toggleRequirements(event) {
  const requirements = document.getElementById("tribu-requirements");
  const button = event.target;

  if (requirements.style.display === "none") {
    requirements.style.display = "block";
    button.textContent = "Ocultar Requisitos";
  } else {
    requirements.style.display = "none";
    button.textContent = "Ver Requisitos";
  }
}

// ============================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleScrollButton() {
  const scrollButton = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 300) {
    scrollButton.classList.add("visible");
  } else {
    scrollButton.classList.remove("visible");
  }
}

// ============================================
// EVENT LISTENERS
// ============================================

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("TRIBU Animal scripts loaded");
});

// Close modals when clicking outside
window.onclick = function (event) {
  const regulationsModal = document.getElementById("regulationsModal");
  const tribuModal = document.getElementById("tribuModal");
  const sedesModal = document.getElementById("sedesModal");
  const cyberModal = document.getElementById("cyberMondayModal");

  if (event.target === regulationsModal) {
    closeRegulationsModal();
  }
  if (event.target === tribuModal) {
    closeTribuModal();
  }
  if (event.target === sedesModal) {
    closeSedesModal();
  }
  if (event.target === cyberModal) {
    closeCyberModal();
  }
};

// Close modals and mobile menu with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeRegulationsModal();
    closeTribuModal();
    closeSedesModal();
    closeCyberModal();
    closeMobileMenu();
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      if (navLinks.classList.contains("active")) {
        closeMobileMenu();
      }
    }
  }
});

// Close mobile menu on window resize if screen becomes larger
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Show/hide scroll to top button on scroll
window.addEventListener("scroll", toggleScrollButton);

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

// Optional: Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// MAIN TABBED INTERFACE - NEW STRUCTURE V3
// ============================================

// Main tab functionality
function initMainTabs() {
  const mainTabButtons = document.querySelectorAll(".main-tab-button");
  const mainTabPanels = document.querySelectorAll(".main-tab-panel");

  mainTabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetMainTab = this.getAttribute("data-main-tab");

      // Remove active class from all buttons and panels
      mainTabButtons.forEach((btn) => btn.classList.remove("active"));
      mainTabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to clicked button and corresponding panel
      this.classList.add("active");
      document.getElementById(targetMainTab).classList.add("active");

      console.log("Switched to main tab:", targetMainTab);
    });
  });
}

// Lateral section selectors functionality
function initLateralSelectors() {
  // Escuela section selectors
  const escuelaSectionInputs = document.querySelectorAll(
    'input[name="escuela-section"]'
  );
  escuelaSectionInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked) {
        showEscuelaSection(this.value);
      }
    });
  });

  // Individual section selectors
  const individualSectionInputs = document.querySelectorAll(
    'input[name="individual-section"]'
  );
  individualSectionInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked) {
        showIndividualSection(this.value);
      }
    });
  });

  // Socialización section selectors
  const socializacionSectionInputs = document.querySelectorAll(
    'input[name="socializacion-section"]'
  );
  socializacionSectionInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked) {
        showSocializacionSection(this.value);
      }
    });
  });
}

// Show specific section in Escuela tab
function showEscuelaSection(sectionName) {
  const escuelaPanel = document.getElementById("escuela");
  const sectionContents = escuelaPanel.querySelectorAll(".section-content");

  // Hide all sections
  sectionContents.forEach((section) => {
    section.classList.remove("active");
  });

  // Show selected section
  const targetSection = escuelaPanel.querySelector(
    `[data-section="${sectionName}"]`
  );
  if (targetSection) {
    targetSection.classList.add("active");
  }

  console.log("Switched to escuela section:", sectionName);
}

// Show specific section in Individual tab
function showIndividualSection(sectionName) {
  const individualPanel = document.getElementById("individual");
  const sectionContents = individualPanel.querySelectorAll(".section-content");

  // Hide all sections
  sectionContents.forEach((section) => {
    section.classList.remove("active");
  });

  // Show selected section
  const targetSection = individualPanel.querySelector(
    `[data-section="${sectionName}"]`
  );
  if (targetSection) {
    targetSection.classList.add("active");
  }

  console.log("Switched to individual section:", sectionName);
}

// Show specific section in Socialización tab
function showSocializacionSection(sectionName) {
  const socializacionPanel = document.getElementById("socializacion");
  const sectionContents =
    socializacionPanel.querySelectorAll(".section-content");

  // Hide all sections
  sectionContents.forEach((section) => {
    section.classList.remove("active");
  });

  // Show selected section
  const targetSection = socializacionPanel.querySelector(
    `[data-section="${sectionName}"]`
  );
  if (targetSection) {
    targetSection.classList.add("active");
  }

  console.log("Switched to socialización section:", sectionName);
}

// ============================================
// POPOVER FUNCTIONALITY
// ============================================

function initPopover() {
  const popoverTriggers = document.querySelectorAll(".info-popover-trigger");
  const popover = document.getElementById("dogdancing-info-popover");
  const popoverClose = document.querySelector(".popover-close");

  if (!popover) return;

  // Open popover
  popoverTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      popover.style.display = "flex";
      document.body.style.overflow = "hidden";
      console.log("Popover opened");
    });
  });

  // Close popover
  function closePopover() {
    popover.style.display = "none";
    document.body.style.overflow = "auto";
    console.log("Popover closed");
  }

  if (popoverClose) {
    popoverClose.addEventListener("click", closePopover);
  }

  // Close on background click
  popover.addEventListener("click", function (e) {
    if (e.target === popover) {
      closePopover();
    }
  });

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popover.style.display === "flex") {
      closePopover();
    }
  });
}

// ============================================
// DARK MODE FUNCTIONALITY
// ============================================

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const icon = themeToggle.querySelector("i");

  // Check current theme
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    // Switch to light mode
    body.removeAttribute("data-theme");
    icon.className = "fas fa-moon";
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark mode
    body.setAttribute("data-theme", "dark");
    icon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark");
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) return;

  const icon = themeToggle.querySelector("i");

  // Check for saved theme preference or default to system preference
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    body.setAttribute("data-theme", "dark");
    icon.className = "fas fa-sun";
  } else {
    body.removeAttribute("data-theme");
    icon.className = "fas fa-moon";
  }
}

// ============================================
// DYNAMIC PRICING DATA
// ============================================

// Load pricing data from JSON
async function loadPricingData() {
  try {
    const response = await fetch("./data/precios.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading pricing data:", error);
    return null;
  }
}

// Render mobile price cards for Escuela Canina
function renderEscuelaMobileCards(modalidades) {
  const container = document.querySelector(
    "#precios-mobile .mobile-price-cards"
  );
  if (!container) return;

  container.innerHTML = modalidades
    .map(
      (modalidad) => `
    <div class="mobile-price-card ${modalidad.tipo.toLowerCase()}">
      <div class="price-card-header">
        ${
          modalidad.tipo.toLowerCase() === "presencial"
            ? '<i class="fas fa-home"></i><h4>Presencial</h4>'
            : '<i class="fas fa-video"></i><h4>Online</h4>'
        }
      </div>
      <div class="price-card-content">
        <div class="price-amount">$${modalidad.precio.toLocaleString()}</div>
        <div class="price-period">por mes</div>
        <div class="price-details">
          <div class="detail-item">
            <i class="fas fa-clock"></i>
            <span>${modalidad.horario}</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-${
              modalidad.tipo === "online" ? "globe" : "map-marker-alt"
            }"></i>
            <span>${modalidad.ubicacion}</span>
          </div>
        </div>
        ${
          modalidad.link_tienda
            ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top: 1rem; display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center;">Inscribirme</a>`
            : ""
        }
      </div>
    </div>
  `
    )
    .join("");
}

// Render desktop price table for Escuela Canina
function renderEscuelaDesktopTable(modalidades) {
  const tableBody = document.querySelector(".price-table-main");
  if (!tableBody) return;

  // Keep the header row, replace content rows
  const header = tableBody.querySelector(".price-header-main");
  tableBody.innerHTML = "";
  if (header) tableBody.appendChild(header);

  modalidades.forEach((modalidad) => {
    const row = document.createElement("div");
    row.className = "price-row-main";
    row.innerHTML = `
      <div class="price-cell-main modalidad-cell ${modalidad.tipo.toLowerCase()}">
        ${
          modalidad.tipo.toLowerCase() === "presencial"
            ? '<i class="fas fa-home"></i>Presencial'
            : '<i class="fas fa-video"></i>Online'
        }
      </div>
      <div class="price-cell-main">${modalidad.horario}</div>
      <div class="price-cell-main">${modalidad.ubicacion}</div>
      <div class="price-cell-main price-amount-main">
        <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center;">
          <span style="font-size: 1.5rem; font-weight: 700;">$${modalidad.precio.toLocaleString()}</span>
          ${
            modalidad.link_tienda
              ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-block; text-decoration: none; padding: 0.5rem 1rem; border-radius: 8px; text-align: center; font-size: 0.85rem; white-space: nowrap;">Inscribirme</a>`
              : ""
          }
        </div>
      </div>
    `;
    tableBody.appendChild(row);
  });
}

// Render Socialización prices
function renderSocializacionPrices(modalidades) {
  const container = document.querySelector(
    "#precios-social-mobile .mobile-price-cards"
  );
  if (!container || !modalidades.length) return;

  const modalidad = modalidades[0];
  // Calcular precios dinámicamente
  const precioSinDescuento =
    modalidad.precio_individual * modalidad.cantidad_pack;
  const precioConDescuento =
    precioSinDescuento * (1 - modalidad.descuento_porcentaje / 100);

  container.innerHTML = `
    <div class="mobile-price-card presencial">
      <div class="price-card-header">
        <i class="fas fa-calendar-alt"></i>
        <h4>${modalidad.horario} (${modalidad.ubicacion})</h4>
      </div>
      <div class="price-card-content">
        <div class="price-options-social-mobile">
          <div class="price-option-social-mobile">
            <span class="price-label-social">1 clase:</span>
            <span class="price-value-social">$${modalidad.precio_individual.toLocaleString()}</span>
          </div>
          <div class="price-option-social-mobile">
            <span class="price-label-social">${
              modalidad.cantidad_pack
            } clases:</span>
            <div class="price-discount-container">
              <span class="price-value-social-crossed">$${precioSinDescuento.toLocaleString()}</span>
              <span class="price-value-social">$${Math.round(
                precioConDescuento
              ).toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div class="price-details">
          <div class="detail-item">
            <i class="fas fa-clock"></i>
            <span>${modalidad.duracion}</span>
          </div>
        </div>
        ${
          modalidad.link_tienda
            ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top: 1rem; display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center; width: 100%;">Inscribirme</a>`
            : ""
        }
      </div>
    </div>
  `;
}

// Render Clases Individuales prices
function renderIndividualesPrices(modalidades) {
  const container = document.querySelector(
    "#precios-individuales-mobile .mobile-price-cards"
  );
  if (!container) return;

  container.innerHTML = modalidades
    .map((modalidad) => {
      // Calcular precios dinámicamente
      const precioSinDescuento =
        modalidad.precio_individual * modalidad.cantidad_pack;
      const precioConDescuento =
        precioSinDescuento * (1 - modalidad.descuento_porcentaje / 100);

      return `
    <div class="mobile-price-card ${modalidad.tipo.toLowerCase()}">
      <div class="price-card-header">
        ${
          modalidad.tipo.toLowerCase() === "presencial"
            ? '<i class="fas fa-home"></i><h4>Presencial</h4>'
            : '<i class="fas fa-video"></i><h4>Online</h4>'
        }
      </div>
      <div class="price-card-content">
        <div class="price-options-individual-mobile">
          <div class="price-option-individual-mobile">
            <span class="price-label-individual">1 clase:</span>
            <span class="price-value-individual">$${modalidad.precio_individual.toLocaleString()}</span>
          </div>
          <div class="price-option-individual-mobile">
            <span class="price-label-individual">${
              modalidad.cantidad_pack
            } clases:</span>
            <div class="price-discount-container">
              <span class="price-value-individual-crossed">$${precioSinDescuento.toLocaleString()}</span>
              <span class="price-value-individual">$${Math.round(
                precioConDescuento
              ).toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div class="includes-individual-mobile">
          <i class="fab fa-whatsapp"></i>
          <span>${modalidad.incluye}</span>
        </div>
        ${
          modalidad.link_tienda
            ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top: 1rem; display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center; width: 100%;">Inscribirme</a>`
            : ""
        }
      </div>
    </div>
  `;
    })
    .join("");
}

// Render desktop prices for Socialización
function renderSocializacionDesktop(modalidades) {
  const container = document.querySelector(".price-options-social");
  if (!container || !modalidades.length) return;

  const modalidad = modalidades[0];
  // Calcular precios dinámicamente
  const precioSinDescuento =
    modalidad.precio_individual * modalidad.cantidad_pack;
  const precioConDescuento =
    precioSinDescuento * (1 - modalidad.descuento_porcentaje / 100);

  container.innerHTML = `
    <div class="price-option-social">
      <span class="price-label">Clase suelta:</span>
      <span class="price-value-social">$${modalidad.precio_individual.toLocaleString()}</span>
    </div>
    <div class="price-option-social">
      <span class="price-label">Pack de ${
        modalidad.cantidad_pack
      } clases:</span>
      <div class="price-discount-container">
        <span class="price-value-social-crossed">$${precioSinDescuento.toLocaleString()}</span>
        <span class="price-value-social">$${Math.round(
          precioConDescuento
        ).toLocaleString()}</span>
      </div>
    </div>
    ${
      modalidad.link_tienda
        ? `<div style="margin-top: 1.5rem; text-align: center;"><a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center;">Inscribirme</a></div>`
        : ""
    }
  `;
}

// Render desktop prices for Clases Individuales
function renderIndividualesDesktop(modalidades) {
  const container = document.querySelector(".individual-price-cards");
  if (!container) return;

  container.innerHTML = modalidades
    .map((modalidad) => {
      // Calcular precios dinámicamente
      const precioSinDescuento =
        modalidad.precio_individual * modalidad.cantidad_pack;
      const precioConDescuento =
        precioSinDescuento * (1 - modalidad.descuento_porcentaje / 100);

      const iconClass =
        modalidad.tipo.toLowerCase() === "online"
          ? "fas fa-video"
          : "fas fa-home";
      const title =
        modalidad.tipo.toLowerCase() === "online"
          ? "Clases Online"
          : "Domicilio en CABA";

      return `
          <div class="individual-price-card">
            <div class="price-header-individual ${modalidad.tipo.toLowerCase()}">
              <h4><i class="${iconClass}"></i> ${title}</h4>
            </div>
            <div class="price-options-individual">
              <div class="price-option-individual">
                <span class="price-value">$${modalidad.precio_individual.toLocaleString()}</span>
                <span class="price-detail">por clase de 60min aprox</span>
              </div>
              <div class="price-option-individual">
                <div class="price-discount-container">
                  <span class="price-value-crossed">$${precioSinDescuento.toLocaleString()}</span>
                  <span class="price-value">$${Math.round(
                    precioConDescuento
                  ).toLocaleString()}</span>
                </div>
                <span class="price-detail">pack de ${
                  modalidad.cantidad_pack
                } clases</span>
              </div>
            </div>
            <p class="includes-individual">
              <i class="fab fa-whatsapp"></i>
              ${modalidad.incluye}
            </p>
            ${
              modalidad.link_tienda
                ? `<div style="margin-top: 1rem; text-align: center;"><a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-block; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center; width: 100%;">Inscribirme</a></div>`
                : ""
            }
          </div>
        `;
    })
    .join("");
}

// Initialize pricing data
async function initPricingData() {
  const data = await loadPricingData();
  if (!data) {
    console.log("Using static pricing data");
    return;
  }

  console.log("Loading dynamic pricing data...");

  // Render mobile cards
  renderEscuelaMobileCards(data.escuela_canina.modalidades);
  renderSocializacionPrices(data.socializacion.modalidades);
  renderIndividualesPrices(data.clases_individuales.modalidades);

  // Render desktop tables and prices
  renderEscuelaDesktopTable(data.escuela_canina.modalidades);
  renderSocializacionDesktop(data.socializacion.modalidades);
  console.log(
    "About to call renderIndividualesDesktop with:",
    data.clases_individuales.modalidades
  );
  renderIndividualesDesktop(data.clases_individuales.modalidades);

  console.log("Dynamic pricing data loaded successfully");
}

// ============================================
// PROXIMAS SEDES FUNCTIONALITY
// ============================================

// Load and display proximas sedes
async function loadProximasSedes() {
  try {
    const data = await loadPricingData();
    const proximasSedesSection = document.getElementById("proximas-sedes");

    // Check if data exists and proximas_plazas array has content
    if (
      !data ||
      !data.configuracion ||
      !data.configuracion.proximas_plazas ||
      data.configuracion.proximas_plazas.length === 0
    ) {
      console.log(
        "No proximas sedes data available or array is empty - hiding section"
      );

      // Hide the section if no sedes are available
      if (proximasSedesSection) {
        proximasSedesSection.style.display = "none";
      }
      return;
    }

    const sedes = data.configuracion.proximas_plazas;

    // Show the section since we have sedes
    if (proximasSedesSection) {
      proximasSedesSection.style.display = "block";
    }

    // Render sedes list in the section
    const sedesList = document.getElementById("sedes-list");
    if (sedesList) {
      sedesList.innerHTML = sedes
        .map(
          (sede) => `
        <div class="sede-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>${sede}</span>
        </div>
      `
        )
        .join("");
    }

    // Populate select options in modal
    const sedesSelect = document.getElementById("sedes-ubicacion");
    if (sedesSelect) {
      // Clear existing options except the first one
      sedesSelect.innerHTML = '<option value="">Seleccionar Sede</option>';

      sedes.forEach((sede) => {
        const option = document.createElement("option");
        option.value = sede;
        option.textContent = sede;
        sedesSelect.appendChild(option);
      });
    }

    console.log("Proximas sedes loaded successfully:", sedes);
  } catch (error) {
    console.error("Error loading proximas sedes:", error);

    // Hide section on error as well
    const proximasSedesSection = document.getElementById("proximas-sedes");
    if (proximasSedesSection) {
      proximasSedesSection.style.display = "none";
    }
  }
}

// ============================================
// FORM SUBMISSION HANDLERS
// ============================================

// Apps Script URL - Replace with your actual URL
const APPS_SCRIPT_URL = "YOUR_APPS_SCRIPT_URL_HERE";

// Handle sedes form submission
function handleSedesFormSubmission(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Enviando...";
  submitButton.disabled = true;

  // Submit to Google Apps Script endpoint
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        // Show success message
        alert(
          "¡Gracias por tu interés! Te contactaremos cuando tengamos novedades sobre estas sedes."
        );

        // Reset form and close modal
        form.reset();
        closeSedesModal();
      } else {
        throw new Error(data.message || "Error al enviar el formulario");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    })
    .finally(() => {
      // Restore button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
}

// Handle entrevista form submission
function handleEntrevistaFormSubmission(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Enviando...";
  submitButton.disabled = true;

  // Submit to Google Apps Script endpoint
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        // Show success message
        alert(
          "¡Gracias por tu solicitud! Te contactaremos en las próximas 24 horas para coordinar tu evaluación gratuita."
        );

        // Reset form
        form.reset();
      } else {
        throw new Error(data.message || "Error al enviar el formulario");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    })
    .finally(() => {
      // Restore button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
}

// Handle TRIBU registration form submission
function handleTribuFormSubmission(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Enviando...";
  submitButton.disabled = true;

  // Submit to Google Apps Script endpoint
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        // Show success message
        alert(
          "¡Gracias por tu interés en unirte a TRIBU! Te contactaremos en un plazo de 3-5 días hábiles para evaluar tu perfil."
        );

        // Reset form and close modal
        form.reset();
        closeTribuModal();
      } else {
        throw new Error(data.message || "Error al enviar el formulario");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    })
    .finally(() => {
      // Restore button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
}

// Initialize form handlers
function initFormHandlers() {
  const sedesForm = document.querySelector(".sedes-form");
  if (sedesForm) {
    sedesForm.addEventListener("submit", handleSedesFormSubmission);
    console.log("Sedes form handler initialized");
  }

  const entrevistaForm = document.querySelector(".entrevista-form");
  if (entrevistaForm) {
    entrevistaForm.addEventListener("submit", handleEntrevistaFormSubmission);
    console.log("Entrevista form handler initialized");
  }

  const tribuForm = document.querySelector(".tribu-form");
  if (tribuForm) {
    tribuForm.addEventListener("submit", handleTribuFormSubmission);
    console.log("TRIBU form handler initialized");
  }
}

// ============================================
// MOBILE TAB FUNCTIONALITY
// ============================================

// Mobile Education Tab Functionality
function initMobileTabs() {
  console.log("Initializing mobile tabs...");

  // Find all mobile tab containers (each section has its own)
  const tabContainers = document.querySelectorAll(".mobile-tab-navigation");

  if (tabContainers.length === 0) {
    console.log("No mobile tab containers found, skipping initialization");
    return;
  }

  // Initialize each tab container independently
  tabContainers.forEach((container, containerIndex) => {
    const tabButtons = container.querySelectorAll(".mobile-tab-button");
    const sectionElement = container.closest("section");
    const tabPanels = sectionElement
      ? sectionElement.querySelectorAll(".mobile-tab-panel")
      : [];

    if (tabButtons.length === 0 || tabPanels.length === 0) {
      console.log(`No tabs found in container ${containerIndex}, skipping`);
      return;
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetTab = this.getAttribute("data-mobile-tab");

        // Remove active class from buttons ONLY in this container
        tabButtons.forEach((btn) => btn.classList.remove("active"));

        // Remove active class from panels ONLY in this section
        tabPanels.forEach((panel) => panel.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        // Show corresponding panel (search only within this section)
        const targetPanel = sectionElement.querySelector(`#${targetTab}`);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }

        console.log(
          `Mobile tab switched to: ${targetTab} in section ${containerIndex}`
        );
      });
    });

    console.log(`Mobile tabs initialized for container ${containerIndex}`);
  });

  console.log("All mobile tabs initialized successfully");
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Requirements toggle functionality (from the original socialización section)
function toggleRequirements(event) {
  event.preventDefault();
  const requirements = document.getElementById("tribu-requirements");
  if (requirements) {
    requirements.style.display =
      requirements.style.display === "none" ? "block" : "none";
  }
}

// Initialize all functionality for the new structure
function initMainInterface() {
  console.log("Initializing main tabbed interface...");

  // Initialize main tabs
  initMainTabs();

  // Initialize lateral selectors
  initLateralSelectors();

  // Initialize popover
  initPopover();

  console.log("Main interface initialized successfully");
}

// ============================================
// PRICING DATA MANAGEMENT
// ============================================

// Load pricing data from JSON
async function loadPricingData() {
  try {
    const response = await fetch("./data/precios.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading pricing data:", error);
    return null;
  }
}

// Render mobile pricing cards for escuela canina
function renderEscuelaCaninaMobile(modalidades) {
  return modalidades
    .map(
      (modalidad) => `
    <div class="mobile-pricing-card">
      <div class="pricing-header">
        ${
          modalidad.tipo.toLowerCase() === "presencial"
            ? '<i class="fas fa-home"></i><h4>Presencial</h4>'
            : '<i class="fas fa-video"></i><h4>Online</h4>'
        }
      </div>
      <div class="pricing-details">
        <div class="price">$${modalidad.precio.toLocaleString()}</div>
        <div class="schedule">${modalidad.horario}</div>
        <div class="location">${modalidad.ubicacion}</div>
        ${
          modalidad.link_tienda
            ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top: 1rem; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center; display: block;">Inscribirme</a>`
            : ""
        }
      </div>
    </div>
  `
    )
    .join("");
}

// Render mobile pricing cards for socializacion
function renderSocializacionMobile(modalidades) {
  return modalidades
    .map((modalidad) => {
      // Calcular precios dinámicamente
      const precioSinDescuento =
        modalidad.precio_individual * modalidad.cantidad_pack;
      const precioConDescuento =
        precioSinDescuento * (1 - modalidad.descuento_porcentaje / 100);

      return `
    <div class="mobile-pricing-card">
      <div class="pricing-header">
        <i class="fas fa-users"></i>
        <h4>Socialización Canina</h4>
      </div>
      <div class="pricing-details">
        <div class="pricing-options">
          <div class="price-option">
            <span class="option-label">1 clase</span>
            <span class="price">$${modalidad.precio_individual.toLocaleString()}</span>
          </div>
          <div class="price-option featured">
            <span class="option-label">${modalidad.cantidad_pack} clases</span>
            <div class="price-comparison">
              <span class="price-crossed">$${precioSinDescuento.toLocaleString()}</span>
              <span class="price">$${Math.round(
                precioConDescuento
              ).toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div class="schedule">${modalidad.horario}</div>
        <div class="location">${modalidad.ubicacion}</div>
        <div class="duration">${modalidad.duracion}</div>
        ${
          modalidad.link_tienda
            ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top: 1rem; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center; display: block;">Inscribirme</a>`
            : ""
        }
      </div>
    </div>
  `;
    })
    .join("");
}

// Render mobile pricing cards for clases individuales
function renderClasesIndividualesMobile(modalidades) {
  return modalidades
    .map((modalidad) => {
      // Calcular precios dinámicamente
      const precioSinDescuento =
        modalidad.precio_individual * modalidad.cantidad_pack;
      const precioConDescuento =
        precioSinDescuento * (1 - modalidad.descuento_porcentaje / 100);

      return `
    <div class="mobile-pricing-card">
      <div class="pricing-header">
        ${
          modalidad.tipo.toLowerCase() === "presencial"
            ? '<i class="fas fa-home"></i><h4>Domicilio en CABA</h4>'
            : '<i class="fas fa-video"></i><h4>Clases Online</h4>'
        }
      </div>
      <div class="pricing-details">
        <div class="pricing-options">
          <div class="price-option">
            <span class="option-label">1 clase</span>
            <span class="price">$${modalidad.precio_individual.toLocaleString()}</span>
          </div>
          <div class="price-option featured">
            <span class="option-label">${modalidad.cantidad_pack} clases</span>
            <div class="price-comparison">
              <span class="price-crossed">$${precioSinDescuento.toLocaleString()}</span>
              <span class="price">$${Math.round(
                precioConDescuento
              ).toLocaleString()}</span>
            </div>
          </div>
        </div>
        ${
          modalidad.incluye
            ? `<div class="includes">${modalidad.incluye}</div>`
            : ""
        }
        ${
          modalidad.link_tienda
            ? `<a href="${modalidad.link_tienda}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="margin-top: 1rem; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; text-align: center; display: block;">Inscribirme</a>`
            : ""
        }
      </div>
    </div>
  `;
    })
    .join("");
}

// Initialize pricing data and render to DOM
async function initPricingData() {
  console.log("Initializing pricing data...");

  const pricingData = await loadPricingData();
  if (!pricingData) {
    console.log("No pricing data available, using static content");
    return;
  }

  // Render escuela canina mobile pricing
  const educacionPricing = document.getElementById("educacion-mobile-pricing");
  if (educacionPricing && pricingData.escuela_canina) {
    educacionPricing.innerHTML = renderEscuelaCaninaMobile(
      pricingData.escuela_canina.modalidades
    );
  }

  // Render socializacion mobile pricing
  const socializacionPricing = document.getElementById(
    "socializacion-mobile-pricing"
  );
  if (socializacionPricing && pricingData.socializacion) {
    socializacionPricing.innerHTML = renderSocializacionMobile(
      pricingData.socializacion.modalidades
    );
  }

  // Render clases individuales mobile pricing
  const clasesIndividualesPricing = document.getElementById(
    "clases-individuales-mobile-pricing"
  );
  if (clasesIndividualesPricing && pricingData.clases_individuales) {
    clasesIndividualesPricing.innerHTML = renderClasesIndividualesMobile(
      pricingData.clases_individuales.modalidades
    );
  }

  // Render desktop pricing
  renderEscuelaDesktopTable(pricingData.escuela_canina.modalidades);
  renderSocializacionDesktop(pricingData.socializacion.modalidades);
  renderIndividualesDesktop(pricingData.clases_individuales.modalidades);

  console.log("Pricing data initialized successfully");
}

// Updated DOM Content Loaded handler
document.addEventListener("DOMContentLoaded", async function () {
  // Initialize existing functionality
  console.log("TRIBU Animal scripts loaded");

  // Initialize theme
  initTheme();

  // Initialize pricing data first
  await initPricingData();

  // Initialize proximas sedes
  await loadProximasSedes();

  // Initialize form handlers
  initFormHandlers();

  // Initialize new main interface if present
  if (document.querySelector(".main-tabbed-interface")) {
    initMainInterface();
  }

  // Initialize mobile tabs if present
  if (document.querySelector(".mobile-tab-navigation")) {
    initMobileTabs();
  }

  // Initialize bio carousel
  initBioCarousel();

  // Initialize modal buttons with event listeners
  initModalButtons();

  // Initialize Cyber Monday popup
  initCyberModal();
});

// ============================================
// BIO CAROUSEL FUNCTIONALITY
// ============================================

let currentBioSlide = 0;
const totalBioSlides = 3;

function nextSlide() {
  currentBioSlide = (currentBioSlide + 1) % totalBioSlides;
  updateCarousel();
}

function prevSlide() {
  currentBioSlide = (currentBioSlide - 1 + totalBioSlides) % totalBioSlides;
  updateCarousel();
}

function currentSlide(slideNumber) {
  currentBioSlide = slideNumber - 1;
  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById("bioCarouselTrack");
  const dots = document.querySelectorAll(".carousel-dots .dot");

  if (track) {
    const translateX = -currentBioSlide * 100;
    track.style.transform = `translateX(${translateX}%)`;
  }

  // Update dots
  dots.forEach((dot, index) => {
    if (index === currentBioSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function initBioCarousel() {
  // Auto-advance carousel every 5 seconds
  setInterval(() => {
    const carousel = document.querySelector(".mobile-bio-carousel");
    if (carousel && window.getComputedStyle(carousel).display !== "none") {
      nextSlide();
    }
  }, 5000);

  // Initialize carousel position
  updateCarousel();
}

// ============================================
// CYBER MONDAY POPUP
// ============================================

function openCyberModal() {
  // Store current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Apply modal open styles
  document.body.classList.add("modal-open");
  document.body.style.top = `-${scrollPosition}px`;

  // Show modal
  document.getElementById("cyberMondayModal").style.display = "block";
}

function closeCyberModal() {
  // Hide modal
  document.getElementById("cyberMondayModal").style.display = "none";

  // Remove modal styles and restore scroll position
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);

  // Set a flag to not show again in this session
  sessionStorage.setItem("cyberModalShown", "true");
}

// Show cyber modal on page load (with delay)
function initCyberModal() {
  // Check if modal was already shown in this session
  const wasShown = sessionStorage.getItem("cyberModalShown");

  // Validar que la fecha actual sea hasta el 7 de noviembre de 2025 incluido
  const currentDate = new Date();
  const endDate = new Date(2025, 10, 7, 23, 59, 59); // 10 = noviembre (0-indexed), 7 de noviembre 23:59:59

  // Solo mostrar si no se mostró antes Y si estamos antes o durante el 7 de noviembre
  if (!wasShown && currentDate <= endDate) {
    // Show modal after 2 seconds
    setTimeout(() => {
      openCyberModal();
    }, 2000);
  }
}

// ============================================
// MODAL BUTTONS INITIALIZATION
// ============================================

function initModalButtons() {
  // Add event listeners to all modal buttons
  const modalButtons = [
    {
      selector: 'button[onclick*="openRegulationsModal"]',
      action: openRegulationsModal,
    },
    { selector: 'button[onclick*="openTribuModal"]', action: openTribuModal },
    { selector: 'button[onclick*="openSedesModal"]', action: openSedesModal },
    {
      selector: '.modal-close[onclick*="closeRegulationsModal"]',
      action: closeRegulationsModal,
    },
    {
      selector: '.modal-close[onclick*="closeTribuModal"]',
      action: closeTribuModal,
    },
    {
      selector: '.modal-close[onclick*="closeSedesModal"]',
      action: closeSedesModal,
    },
  ];

  modalButtons.forEach(({ selector, action }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
      });

      // Remove the onclick attribute to avoid conflicts
      element.removeAttribute("onclick");
    });
  });

  console.log("Modal buttons initialized with event listeners");
}
