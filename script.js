const topbar = document.querySelector('.topbar');
const btn = document.querySelector('.menu-btn');
btn?.addEventListener('click', () => {
  const open = topbar.classList.toggle('menu-open');
  btn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  topbar.classList.remove('menu-open');
  btn?.setAttribute('aria-expanded','false');
}));

const modelCatalog = {
  camperas: {
    title: 'Camperas',
    description: 'Modelos varsity, universitarios y combinados para personalizar con los colores de tu promo.',
    models: [
      { name: 'Varsity clásica', detail: 'Frente personalizado', image: 'assets/varsity-front.webp' },
      { name: 'Varsity personalizada', detail: 'Diseño de espalda', image: 'assets/varsity-back.webp' },
      { name: 'Varsity verde', detail: 'Combinación personalizada', image: 'assets/green-varsity.webp' },
      { name: 'Varsity bordó', detail: 'Bordó y beige', image: 'assets/burgundy.webp' }
    ]
  },
  buzos: {
    title: 'Buzos',
    description: 'Modelos clásicos, oversize y boxy adaptables al diseño de cada curso.',
    models: [
      { name: 'Buzo personalizado', detail: 'Modelo con capucha', image: 'assets/hoodie.webp' }
    ]
  },
  chombas: {
    title: 'Chombas',
    description: 'Chombas deportivas y combinadas con colores, escudos y detalles personalizados.',
    models: [
      { name: 'Chomba combinada', detail: 'Modelo verde personalizado', image: 'assets/green-polo.webp' }
    ]
  },
  remeras: {
    title: 'Remeras',
    description: 'Remeras para completar la indumentaria de la promo con diseños personalizados.',
    models: []
  },
  banderas: {
    title: 'Banderas',
    description: 'Diseños personalizados para representar a toda la promo.',
    models: []
  },
  egresaditos: {
    title: 'Egresaditos',
    description: 'Opciones pensadas especialmente para jardín y primer egreso.',
    models: []
  }
};

const modal = document.querySelector('#modelsModal');
const modalDialog = modal?.querySelector('.models-dialog');
const modalClose = modal?.querySelector('.models-close');
const modalTitle = document.querySelector('#modelsTitle');
const modalDescription = document.querySelector('#modelsDescription');
const modelsGrid = document.querySelector('#modelsGrid');
const modelsWhatsapp = document.querySelector('#modelsWhatsapp');
let lastFocusedElement = null;

function renderModels(category) {
  const data = modelCatalog[category];
  if (!data || !modal || !modelsGrid) return;

  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;

  if (data.models.length) {
    modelsGrid.innerHTML = data.models.map(model => `
      <article class="model-item">
        <img src="${model.image}" alt="${model.name} TBG" loading="lazy">
        <div class="model-info">
          <strong>${model.name}</strong>
          <span>${model.detail}</span>
        </div>
      </article>
    `).join('');
  } else {
    modelsGrid.innerHTML = `
      <div class="models-empty">
        Próximamente vamos a cargar todos los modelos de ${data.title.toLowerCase()} acá. Mientras tanto podés pedir el catálogo completo por WhatsApp.
      </div>
    `;
  }

  const message = encodeURIComponent(`Hola TBG, quiero consultar por los modelos de ${data.title.toLowerCase()} para mi promo.`);
  modelsWhatsapp.href = `https://wa.me/5491123958808?text=${message}`;
}

function openModelsModal(category, trigger) {
  if (!modal) return;
  renderModels(category);
  lastFocusedElement = trigger || document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modalClose?.focus());
}

function closeModelsModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lastFocusedElement?.focus?.();
}

document.querySelectorAll('.product-card[data-category]').forEach(card => {
  card.addEventListener('click', () => openModelsModal(card.dataset.category, card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModelsModal(card.dataset.category, card);
    }
  });
});

modalClose?.addEventListener('click', closeModelsModal);
modal?.addEventListener('click', event => {
  if (event.target === modal) closeModelsModal();
});
modalDialog?.addEventListener('click', event => event.stopPropagation());

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal?.classList.contains('is-open')) {
    closeModelsModal();
  }
});
