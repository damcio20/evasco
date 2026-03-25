(function () {
  const body = document.body;
  const navToggle = document.querySelector('[data-nav-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  const overlay = document.querySelector('[data-drawer-overlay]');
  const yearEls = document.querySelectorAll('[data-current-year]');

  yearEls.forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  function closeDrawer() {
    body.classList.remove('mobile-nav-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      body.classList.toggle('mobile-nav-open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  document.querySelectorAll('[data-drawer-close]').forEach((btn) => {
    btn.addEventListener('click', closeDrawer);
  });

  document.querySelectorAll('[data-mobile-drawer] a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  const products = window.VASCO_PRODUCTS || [];
  const params = new URLSearchParams(window.location.search);

  function formatProductCard(product) {
    const badgeClass = /promocja/i.test(product.badge || '') ? 'badge sale' : 'badge';
    return `
      <article class="product-card">
        <a href="produkt.html?id=${encodeURIComponent(product.id)}" aria-label="${product.name}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <div class="product-card-body">
          <div class="card-topline">
            <span class="product-brand">${product.brand}</span>
            ${product.badge ? `<span class="${badgeClass}">${product.badge}</span>` : ''}
          </div>
          <a href="produkt.html?id=${encodeURIComponent(product.id)}" class="product-title"><strong>${product.name}</strong></a>
          <p>${product.excerpt}</p>
          <div class="price-row">
            <span class="price">${product.price}</span>
            ${product.oldPrice ? `<span class="price-old">${product.oldPrice}</span>` : ''}
          </div>
          <div class="product-actions">
            <a class="btn btn-primary" href="produkt.html?id=${encodeURIComponent(product.id)}">Zobacz produkt</a>
            <a class="btn btn-secondary" href="kontakt.html">Zapytaj</a>
          </div>
        </div>
      </article>`;
  }

  const featuredGrid = document.querySelector('[data-products="featured"]');
  if (featuredGrid) {
    featuredGrid.innerHTML = products.slice(0, 8).map(formatProductCard).join('');
  }

  const listingGrid = document.querySelector('[data-products="listing"]');
  if (listingGrid) {
    const category = params.get('category');
    const brand = params.get('brand');
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    }
    if (brand) {
      filtered = filtered.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
    }

    const titleEl = document.querySelector('[data-listing-title]');
    const countEl = document.querySelector('[data-listing-count]');
    if (titleEl && category) {
      titleEl.textContent = category;
    }
    if (countEl) {
      countEl.textContent = `${filtered.length} modeli`;
    }

    listingGrid.innerHTML = filtered.map(formatProductCard).join('');
  }

  const detailNode = document.querySelector('[data-product-detail]');
  if (detailNode) {
    const id = params.get('id') || products[0]?.id;
    const product = products.find((entry) => entry.id === id) || products[0];

    if (product) {
      const detailTitle = document.querySelector('[data-product-title]');
      const detailBrand = document.querySelector('[data-product-brand]');
      const detailPrice = document.querySelector('[data-product-price]');
      const detailOldPrice = document.querySelector('[data-product-old-price]');
      const detailImage = document.querySelector('[data-product-image]');
      const detailSummary = document.querySelector('[data-product-summary]');
      const detailBreadcrumb = document.querySelector('[data-product-breadcrumb]');
      const detailBadge = document.querySelector('[data-product-badge]');

      if (detailTitle) detailTitle.textContent = product.name;
      if (detailBrand) detailBrand.textContent = product.brand;
      if (detailPrice) detailPrice.textContent = product.price;
      if (detailOldPrice) detailOldPrice.textContent = product.oldPrice || '';
      if (detailImage) {
        detailImage.src = product.image;
        detailImage.alt = product.name;
      }
      if (detailSummary) detailSummary.textContent = product.excerpt;
      if (detailBreadcrumb) detailBreadcrumb.textContent = product.name;
      if (detailBadge) {
        detailBadge.textContent = product.badge || 'Demo';
      }

      document.title = `${product.name} - VASCO`;
    }
  }

  const newsletterForms = document.querySelectorAll('[data-newsletter-form], [data-contact-form]');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector('[data-form-feedback]');
      if (note) {
        note.textContent = 'To demo frontu. W Shoperze podepnij formularz do modułu systemowego lub endpointu sklepu.';
      }
      form.reset();
    });
  });

  const categoryChips = document.querySelector('[data-category-chips]');
  if (categoryChips && window.VASCO_CATEGORIES) {
    const current = params.get('category');
    categoryChips.innerHTML = window.VASCO_CATEGORIES.map((category) => {
      const active = current && current.toLowerCase() === category.toLowerCase() ? ' filter-chip is-active' : ' filter-chip';
      return `<a class="${active}" href="kategoria.html?category=${encodeURIComponent(category)}">${category}</a>`;
    }).join('');
  }

  const brandWall = document.querySelector('[data-brand-wall]');
  if (brandWall && window.VASCO_BRANDS) {
    brandWall.innerHTML = window.VASCO_BRANDS.map((brand) => {
      return `<a class="brand-card" href="kategoria.html?brand=${encodeURIComponent(brand)}">${brand}</a>`;
    }).join('');
  }
})();
