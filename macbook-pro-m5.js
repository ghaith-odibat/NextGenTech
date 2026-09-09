const SIZES = {
  '14': {
    label: '14-inch',
    pros: [
      'Lighter, so it is easier to carry every day.',
      'Fits on small desks and airline tray tables.',
      'Costs less than the 16-inch at every chip tier.'
    ],
    cons: [
      'Less room for video timelines and side-by-side windows.',
      'Smaller battery than the 16-inch.',
      'Speakers do not fill a room as well.'
    ]
  },
  '16': {
    label: '16-inch',
    pros: [
      'Much more room for timelines, spreadsheets and split-screen work.',
      'Biggest battery in the lineup.',
      'Noticeably better speakers.'
    ],
    cons: [
      'Heavier, and you feel it in a backpack.',
      'Costs $500 more than the same 14-inch.',
      'Not offered with the entry M5 chip.'
    ]
  }
};

const CHIPS = {
  m5: {
    label: 'M5',
    blurb: '10-core CPU, 10-core GPU',
    sizes: ['14'],
    basePrice: { '14': 1999 },
    memory: [
      { gb: 16, price: 0 },
      { gb: 24, price: 200 },
      { gb: 32, price: 400 }
    ],
    storage: [
      { tb: 1, price: 0 },
      { tb: 2, price: 400 },
      { tb: 4, price: 1000 }
    ],
    pros: [
      'The cheapest way into a MacBook Pro.',
      'Plenty for browsing, writing, code and photo editing.',
      'Handles 4K video without complaining.',
      'Runs cool and quiet.'
    ],
    cons: [
      'Only comes in the 14-inch.',
      'Fewer graphics cores, so long exports and 3D work take longer.',
      'Stops at 32GB of memory.'
    ]
  },
  m5pro: {
    label: 'M5 Pro',
    blurb: 'Up to 18-core CPU, up to 20-core GPU',
    sizes: ['14', '16'],
    basePrice: { '14': 2499, '16': 2999 },
    memory: [
      { gb: 24, price: 0 },
      { gb: 36, price: 200 },
      { gb: 48, price: 400 },
      { gb: 64, price: 800 }
    ],
    storage: [
      { tb: 1, price: 0 },
      { tb: 2, price: 400 },
      { tb: 4, price: 1000 }
    ],
    pros: [
      'Roughly double the graphics power of the M5.',
      'Comfortable with 4K timelines, large builds and many apps at once.',
      'Available in both screen sizes.',
      'Takes up to 64GB of memory.'
    ],
    cons: [
      'Costs $500 more than the M5.',
      'Overkill if you mostly browse, write and edit photos.'
    ]
  },
  m5max: {
    label: 'M5 Max',
    blurb: '18-core CPU, up to 40-core GPU',
    sizes: ['14', '16'],
    basePrice: { '14': 4099, '16': 4399 },
    memory: [
      { gb: 48, price: 0 },
      { gb: 64, price: 400 },
      { gb: 128, price: 1200 }
    ],
    storage: [
      { tb: 2, price: 0 },
      { tb: 4, price: 600 },
      { tb: 8, price: 1600 }
    ],
    pros: [
      'Up to 40 graphics cores and 128GB of memory.',
      'Built for 8K video, 3D rendering and running large AI models on the laptop.',
      'Fastest memory bandwidth in the lineup, up to 614GB/s.'
    ],
    cons: [
      'Starts about $1,600 above the M5 Pro.',
      'Fans spin up under long, heavy loads.',
      'No 1TB option, so storage starts at 2TB.',
      'Most people will never use all of it.'
    ]
  }
};

const DISPLAYS = {
  standard: {
    label: 'Standard glass',
    price: 0,
    pros: [
      'Brightest, punchiest version of the screen.',
      'No extra cost.',
      'Wipes clean with any soft cloth.'
    ],
    cons: [
      'Reflections show up near windows and bright lights.'
    ]
  },
  nano: {
    label: 'Nano-texture glass',
    price: 150,
    pros: [
      'Cuts glare badly enough that you can work facing a window.',
      'Easier on the eyes over a long day.'
    ],
    cons: [
      'Adds $150.',
      'Image looks very slightly softer.',
      'Needs the special cloth to clean safely.'
    ]
  }
};

const COLORS = {
  'space-black': {
    label: 'Space Black',
    swatch: '#2e2c2e',
    pros: ['Looks sharp.', 'Coated to resist fingerprints better than older dark finishes.'],
    cons: ['Still shows smudges more than silver.']
  },
  silver: {
    label: 'Silver',
    swatch: '#d8d9db',
    pros: ['Hides fingerprints and scuffs best.', 'The classic MacBook look.'],
    cons: ['Plainer than Space Black.']
  }
};

const MEMORY_NOTES = {
  pros: [
    'More memory means more apps, tabs and timelines open before things slow down.',
    'Large photo, video and AI workloads lean on it heavily.'
  ],
  cons: [
    'It is soldered in. You cannot add more later.',
    'If you only browse, write and stream, the base amount is already enough.'
  ]
};

const STORAGE_NOTES = {
  pros: [
    'Every model now starts at 1TB, which is a lot of breathing room.',
    'These drives are quick, up to 14.5GB/s on the Pro and Max.'
  ],
  cons: [
    'Also soldered in, so pick carefully now.',
    '4K and 8K video fills any of these faster than you expect.'
  ]
};

const state = {
  size: '14',
  chip: 'm5',
  memory: 16,
  storage: 1,
  display: 'standard',
  color: 'space-black'
};

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

function currentChip() {
  return CHIPS[state.chip];
}

function memoryOption() {
  return currentChip().memory.find(option => option.gb === state.memory);
}

function storageOption() {
  return currentChip().storage.find(option => option.tb === state.storage);
}

function totalPrice() {
  return currentChip().basePrice[state.size]
    + memoryOption().price
    + storageOption().price
    + DISPLAYS[state.display].price;
}

function reconcile() {
  const chip = currentChip();

  if (!chip.sizes.includes(state.size)) {
    state.size = chip.sizes[0];
  }
  if (!chip.memory.some(option => option.gb === state.memory)) {
    state.memory = chip.memory[0].gb;
  }
  if (!chip.storage.some(option => option.tb === state.storage)) {
    state.storage = chip.storage[0].tb;
  }
}

function createOption({ group, value, title, meta, selected, disabled, disabledNote }) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'option';
  button.dataset.group = group;
  button.dataset.value = value;
  button.setAttribute('aria-pressed', String(selected));

  if (selected) {
    button.classList.add('is-selected');
  }
  if (disabled) {
    button.disabled = true;
    button.classList.add('is-disabled');
  }

  const titleEl = document.createElement('span');
  titleEl.className = 'option-title';
  titleEl.textContent = title;
  button.appendChild(titleEl);

  const metaEl = document.createElement('span');
  metaEl.className = 'option-meta';
  metaEl.textContent = disabled && disabledNote ? disabledNote : meta;
  button.appendChild(metaEl);

  return button;
}

function priceLabel(delta) {
  return delta === 0 ? 'Included' : `+ ${priceFormatter.format(delta)}`;
}

function renderProsCons(container, pros, cons) {
  container.innerHTML = '';

  const build = (heading, items, className) => {
    const wrapper = document.createElement('div');
    wrapper.className = `proscons-column ${className}`;

    const title = document.createElement('h4');
    title.textContent = heading;
    wrapper.appendChild(title);

    const list = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    wrapper.appendChild(list);
    return wrapper;
  };

  container.appendChild(build('Good', pros, 'pros'));
  container.appendChild(build('Trade-offs', cons, 'cons'));
}

function renderSizes() {
  const chip = currentChip();
  const container = document.getElementById('sizeOptions');
  container.innerHTML = '';

  Object.entries(SIZES).forEach(([value, size]) => {
    const available = chip.sizes.includes(value);
    const delta = available ? chip.basePrice[value] - chip.basePrice[chip.sizes[0]] : 0;

    container.appendChild(createOption({
      group: 'size',
      value,
      title: size.label,
      meta: priceLabel(delta),
      selected: state.size === value,
      disabled: !available,
      disabledNote: `Not available with ${chip.label}`
    }));
  });

  renderProsCons(document.getElementById('sizeProsCons'), SIZES[state.size].pros, SIZES[state.size].cons);
}

function renderChips() {
  const container = document.getElementById('chipOptions');
  container.innerHTML = '';

  Object.entries(CHIPS).forEach(([value, chip]) => {
    const startsAt = Math.min(...Object.values(chip.basePrice));

    container.appendChild(createOption({
      group: 'chip',
      value,
      title: chip.label,
      meta: `${chip.blurb} · from ${priceFormatter.format(startsAt)}`,
      selected: state.chip === value
    }));
  });

  const chip = currentChip();
  renderProsCons(document.getElementById('chipProsCons'), chip.pros, chip.cons);
}

function renderMemory() {
  const chip = currentChip();
  const container = document.getElementById('memoryOptions');
  container.innerHTML = '';

  chip.memory.forEach(option => {
    container.appendChild(createOption({
      group: 'memory',
      value: String(option.gb),
      title: `${option.gb}GB`,
      meta: priceLabel(option.price),
      selected: state.memory === option.gb
    }));
  });

  renderProsCons(document.getElementById('memoryProsCons'), MEMORY_NOTES.pros, MEMORY_NOTES.cons);
}

function renderStorage() {
  const chip = currentChip();
  const container = document.getElementById('storageOptions');
  container.innerHTML = '';

  chip.storage.forEach(option => {
    container.appendChild(createOption({
      group: 'storage',
      value: String(option.tb),
      title: `${option.tb}TB`,
      meta: priceLabel(option.price),
      selected: state.storage === option.tb
    }));
  });

  renderProsCons(document.getElementById('storageProsCons'), STORAGE_NOTES.pros, STORAGE_NOTES.cons);
}

function renderDisplay() {
  const container = document.getElementById('displayOptions');
  container.innerHTML = '';

  Object.entries(DISPLAYS).forEach(([value, display]) => {
    container.appendChild(createOption({
      group: 'display',
      value,
      title: display.label,
      meta: priceLabel(display.price),
      selected: state.display === value
    }));
  });

  const display = DISPLAYS[state.display];
  renderProsCons(document.getElementById('displayProsCons'), display.pros, display.cons);
}

function renderColor() {
  const container = document.getElementById('colorOptions');
  container.innerHTML = '';

  Object.entries(COLORS).forEach(([value, color]) => {
    const button = createOption({
      group: 'color',
      value,
      title: color.label,
      meta: 'Included',
      selected: state.color === value
    });

    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color.swatch;
    button.prepend(swatch);

    container.appendChild(button);
  });

  const color = COLORS[state.color];
  renderProsCons(document.getElementById('colorProsCons'), color.pros, color.cons);
}

function renderSummary() {
  const chip = currentChip();

  document.getElementById('summaryLine').textContent =
    `${SIZES[state.size].label} MacBook Pro · ${chip.label} · ${state.memory}GB memory · ${state.storage}TB storage · ${DISPLAYS[state.display].label} · ${COLORS[state.color].label}`;

  document.getElementById('totalPrice').textContent = priceFormatter.format(totalPrice());

  const base = chip.basePrice[state.size];
  const upgrades = totalPrice() - base;
  document.getElementById('priceBreakdown').textContent = upgrades === 0
    ? `Base configuration, no upgrades.`
    : `${priceFormatter.format(base)} base + ${priceFormatter.format(upgrades)} in upgrades.`;

  const illustration = document.getElementById('macbookIllustration');
  illustration.dataset.color = state.color;
  illustration.dataset.size = state.size;
}

function render() {
  reconcile();
  renderSizes();
  renderChips();
  renderMemory();
  renderStorage();
  renderDisplay();
  renderColor();
  renderSummary();
}

document.getElementById('configurator').addEventListener('click', event => {
  const option = event.target.closest('.option');
  if (!option || option.disabled) {
    return;
  }

  const { group, value } = option.dataset;

  if (group === 'memory' || group === 'storage') {
    state[group] = Number(value);
  } else {
    state[group] = value;
  }

  render();
});

render();
