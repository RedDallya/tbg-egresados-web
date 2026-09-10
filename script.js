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
    description: '7 modelos de la colección TBG 2027. Los colores, nombres, números y bordados se pueden personalizar para cada promo.',
    models: [
      { name: 'Diseño Islas', detail: 'Disruptivo · urbano · identitario', image: 'assets/models/camperas/islas.webp' },
      { name: 'Diseño Pulsar · líneas curvas', detail: 'Dinámico · urbano · identitario', image: 'assets/models/camperas/pulsar.webp' },
      { name: 'Diseño Bloques', detail: 'Clásico · contemporáneo · dinámico', image: 'assets/models/camperas/bloques.webp' },
      { name: 'Diseño Casanova', detail: 'Dominante · urbano · gráfico', image: 'assets/models/camperas/casanova.webp' },
      { name: 'Diseño Puente', detail: 'Atractivo · urbano · fresco', image: 'assets/models/camperas/puente.webp' },
      { name: 'Diseño Pulsar · alto voltaje', detail: 'Vanguardia · urbano · fuerza', image: 'assets/models/camperas/pulser.webp' },
      { name: 'Diseño Universitario', detail: 'Clásico · personalizable · identidad', image: 'assets/models/camperas/universitario.webp' }
    ]
  },
  buzos: {
    title: 'Buzos',
    description: '8 modelos TBG 2027 en calce boxy, over y clásico. Podés adaptar paleta, curso, nombres, números y detalles.',
    models: [
      { name: 'Diseño Aurora', detail: 'Boxy · simbólico · urbano · contemporáneo', image: 'assets/models/buzos/aurora.webp' },
      { name: 'Diseño Nacional', detail: 'Over/clásico · clásico · urbano · identitario', image: 'assets/models/buzos/nacional.webp' },
      { name: 'Diseños Interactivos', detail: 'Over · deportivo · moderno · dinámico', image: 'assets/models/buzos/interactivos.webp' },
      { name: 'Diseño Eclipse', detail: 'Over · moderno · urbano · cómodo', image: 'assets/models/buzos/eclipse.webp' },
      { name: 'Diseño Belén', detail: 'Over · street · deportivo · audaz', image: 'assets/models/buzos/belen.webp' },
      { name: 'Diseño Vortex', detail: 'Over · universitario · deportivo · moderno', image: 'assets/models/buzos/vortex.webp' },
      { name: 'Diseños Fraternidad', detail: 'Over · universitario · clásico · identitario', image: 'assets/models/buzos/fraternidad.webp' },
      { name: 'Diseño Legado', detail: 'Over · simbólico · elegante · institucional', image: 'assets/models/buzos/legado.webp' }
    ]
  },
  chombas: {
    title: 'Chombas',
    description: '7 modelos de chombas con distintas líneas, recortes y combinaciones. Todos admiten personalización.',
    models: [
      { name: 'Modelo Greta-G', detail: 'Moderno · tendencia', image: 'assets/models/chombas/greta-g.webp' },
      { name: 'Modelo Mono', detail: 'Moderno · monocromático', image: 'assets/models/chombas/mono.webp' },
      { name: 'Modelo Jodi', detail: 'Cortes curvados · tendencia', image: 'assets/models/chombas/jodi.webp' },
      { name: 'Modelo Lateral', detail: 'El más elegido · tendencia', image: 'assets/models/chombas/lateral.webp' },
      { name: 'Modelo Lateral doble', detail: 'Colores atrevidos · tendencia', image: 'assets/models/chombas/lateral-doble.webp' },
      { name: 'Modelo Franco', detail: 'Elegante · sobrio', image: 'assets/models/chombas/franco.webp' },
      { name: 'Modelo Indiana', detail: 'Simpleza · detalles', image: 'assets/models/chombas/indiana.webp' }
    ]
  },
  remeras: {
    title: 'Remeras',
    description: '3 modelos de remeras TBG 2027 para combinar con el resto de la indumentaria de la promo.',
    models: [
      { name: 'Modelo Clásico', detail: 'Clásico · atemporal', image: 'assets/models/remeras/clasico.webp' },
      { name: 'Modelo Koala', detail: 'Clásico · atemporal · estilo universitario', image: 'assets/models/remeras/koala.webp' },
      { name: 'Modelo Greta', detail: 'Moderno · tendencia · recortes laterales', image: 'assets/models/remeras/greta.webp' }
    ]
  },
  banderas: {
    title: 'Banderas',
    description: '12 diseños de referencia. Los nombres, colores, curso, colegio y composición se personalizan para cada promo.',
    models: [
      { name: 'Bandera 01', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-01.webp' },
      { name: 'Bandera 02', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-02.webp' },
      { name: 'Bandera 03', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-03.webp' },
      { name: 'Bandera 04', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-04.webp' },
      { name: 'Bandera 05', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-05.webp' },
      { name: 'Bandera 06', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-06.webp' },
      { name: 'Bandera 07', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-07.webp' },
      { name: 'Bandera 08', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-08.webp' },
      { name: 'Bandera 09', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-09.webp' },
      { name: 'Bandera 10', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-10.webp' },
      { name: 'Bandera 11', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-11.webp' },
      { name: 'Bandera 12', detail: 'Diseño personalizable', image: 'assets/models/banderas/modelo-12.webp' }
    ]
  },
  egresaditos: {
    title: 'Egresaditos',
    description: '7 propuestas pensadas para jardín y primer egreso, con camperas, buzos, varsity, chombas y remeras.',
    models: [
      { name: 'Próxima Parada · Varsity', detail: 'Campera varsity + remera', image: 'assets/models/egresaditos/proxima-parada-varsity.webp' },
      { name: 'Corona', detail: 'Campera con capucha + chomba', image: 'assets/models/egresaditos/corona.webp' },
      { name: 'Grandes Sueños', detail: 'Campera con capucha + chomba', image: 'assets/models/egresaditos/grandes-suenos.webp' },
      { name: 'Nueva Aventura', detail: 'Campera con capucha + remera', image: 'assets/models/egresaditos/nueva-aventura.webp' },
      { name: 'Próxima Parada · Buzo', detail: 'Buzo con cierre + remera', image: 'assets/models/egresaditos/proxima-parada-buzo.webp' },
      { name: 'Globo Aerostático', detail: 'Buzo con cierre + remera', image: 'assets/models/egresaditos/globo-aerostatico.webp' },
      { name: 'Dejando Huellas', detail: 'Campera personalizada', image: 'assets/models/egresaditos/dejando-huellas.webp' }
    ]
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

  modelsGrid.innerHTML = data.models.map(model => `
    <article class="model-item">
      <img src="${model.image}" alt="${model.name} TBG" loading="lazy" decoding="async">
      <div class="model-info">
        <strong>${model.name}</strong>
        <span>${model.detail}</span>
      </div>
    </article>
  `).join('');

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
  modalDialog?.scrollTo({ top: 0, behavior: 'instant' });
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
