/**
 * ENLISTED MODERN KNOWLEDGE BASE - Application Engine
 * Bento UI Cards, Multi-Color Dynamic Accents, Audio Synthesizer & Modals
 */

let soundEnabled = true;
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playModernSound(type = 'click') {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'heavy') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  initAudioToggle();
  initNavigation();
  initFactionsShowcase();
  initBattleRatings();
  initArsenal();
  initSquadBuilder();
  initWeaponComparison();
  initGuides();
  initModalLightDismiss();

  document.querySelectorAll('button, a.btn-modern-pill, .bento-card').forEach(el => {
    el.addEventListener('mouseenter', () => playModernSound('click'));
  });
});

/* ==========================================================================
   Sound Toggle
   ========================================================================== */
function initAudioToggle() {
  const toggleBtn = document.getElementById("audio-toggle-btn");
  const audioText = document.getElementById("audio-status-text");
  if (!toggleBtn) return;

  const saved = localStorage.getItem("enlisted_sound");
  if (saved !== null) soundEnabled = saved === "true";
  updateAudioUI(toggleBtn, audioText);

  toggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("enlisted_sound", soundEnabled);
    updateAudioUI(toggleBtn, audioText);
    if (soundEnabled) playModernSound('heavy');
  });
}

function updateAudioUI(btn, text) {
  if (soundEnabled) {
    text.textContent = "Звук: Увімкнено";
    text.className = "text-emerald-400 font-semibold";
  } else {
    text.textContent = "Звук: Вимкнено";
    text.className = "text-slate-400 font-normal";
  }
}

/* ==========================================================================
   Navigation
   ========================================================================== */
function initNavigation() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.clientHeight) {
        current = sec.getAttribute("id");
      }
    });

    links.forEach(l => {
      l.classList.remove("text-white", "bg-white/10");
      if (l.getAttribute("href") === `#${current}`) {
        l.classList.add("text-white", "bg-white/10");
      }
    });
  });

  const mobBtn = document.getElementById("mobile-menu-btn");
  const mobMenu = document.getElementById("mobile-menu");
  if (mobBtn && mobMenu) {
    mobBtn.addEventListener("click", () => {
      mobMenu.classList.toggle("hidden");
      playModernSound('heavy');
    });
    mobMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobMenu.classList.add("hidden"));
    });
  }
}

/* ==========================================================================
   Factions Showcase (Matching the User Reference Image)
   ========================================================================== */
function initFactionsShowcase() {
  const container = document.getElementById("factions-cards-grid");
  if (!container) return;

  container.innerHTML = ENLISTED_DATA.factions.map(f => `
    <div class="pricing-card ${f.cardClass} p-6 sm:p-7 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-2xl font-bold text-white tracking-tight leading-tight">
            ${f.titlePrefix} <span class="${f.gradientClass}">${f.titleHighlight}</span> <span class="text-sm">${f.titleBadge}</span>
          </h3>
        </div>
        <p class="text-xs text-slate-400 mb-5 leading-relaxed font-normal">${f.description}</p>
        
        <div class="mb-5">
          <div class="mb-4">
            <span class="pill-badge ${f.pillClass}">${f.badgeText}</span>
          </div>
          <ul class="space-y-2.5 text-xs text-slate-300">
            ${f.features.map(feat => `
              <li class="flex items-start gap-2.5">
                <span class="feature-bullet ${f.bulletColor}"></span>
                <span class="leading-snug">${feat}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="pt-6 border-t border-white/10 space-y-4">
        <div>
          <div class="flex items-baseline gap-2">
            <span class="text-3xl font-extrabold text-white tracking-tight">${f.bigStat}</span>
          </div>
          <span class="text-[11px] text-slate-400 block mt-0.5">${f.bigStatSub}</span>
        </div>

        <button onclick="deployFactionInBuilder('${f.id}')" class="btn-modern-pill">
          ${f.buttonText}
        </button>
      </div>
    </div>
  `).join('');
}

window.deployFactionInBuilder = function(id) {
  playModernSound('heavy');
  const nationBtn = document.querySelector(`[data-squad-nation="${id}"]`);
  if (nationBtn) nationBtn.click();
  const builder = document.getElementById("builder");
  if (builder) builder.scrollIntoView({ behavior: 'smooth' });
};

/* ==========================================================================
   Battle Ratings Section (BR I - V)
   ========================================================================== */
function initBattleRatings() {
  const container = document.getElementById("br-cards-container");
  if (!container) return;

  container.innerHTML = ENLISTED_DATA.battleRatings.map(br => `
    <div class="bento-card p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-2xl font-extrabold text-white tracking-tight">${br.br}</span>
          <span class="pill-badge ${br.pillClass} text-[10px]">${br.badgeText}</span>
        </div>
        <span class="text-xs font-semibold text-slate-400 block mb-1">${br.tier}</span>
        <h4 class="text-base font-bold text-white mb-2 leading-snug">${br.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">${br.description}</p>
      </div>

      <div class="space-y-2 pt-3 border-t border-white/10 text-xs">
        <div class="p-2.5 rounded-xl bg-black/40 border border-white/5">
          <span class="text-slate-400 font-semibold block mb-0.5">Черга матчмейкінгу:</span>
          <span class="text-white">${br.queue}</span>
        </div>
        <div class="text-[11px] text-slate-400">
          <strong class="text-slate-300">Типовий арсенал:</strong> ${br.weapons}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Arsenal & Armory
   ========================================================================== */
let arsenalNation = "all";
let arsenalCategory = "all";
let arsenalBR = "all";
let arsenalSearch = "";

function initArsenal() {
  renderArsenal();

  const searchInput = document.getElementById("arsenal-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      arsenalSearch = e.target.value.toLowerCase().trim();
      renderArsenal();
    });
  }

  document.querySelectorAll("[data-arsenal-nation]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-arsenal-nation]").forEach(b => {
        b.classList.remove("btn-modern-primary", "text-white");
        b.classList.add("bg-white/5", "text-slate-300");
      });
      btn.classList.add("btn-modern-primary", "text-white");
      btn.classList.remove("bg-white/5", "text-slate-300");
      arsenalNation = btn.getAttribute("data-arsenal-nation");
      playModernSound('click');
      renderArsenal();
    });
  });

  const catSelect = document.getElementById("arsenal-category-select");
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      arsenalCategory = e.target.value;
      playModernSound('click');
      renderArsenal();
    });
  }

  const brSelect = document.getElementById("arsenal-br-select");
  if (brSelect) {
    brSelect.addEventListener("change", (e) => {
      arsenalBR = e.target.value;
      playModernSound('click');
      renderArsenal();
    });
  }
}

function renderArsenal() {
  const grid = document.getElementById("arsenal-grid");
  if (!grid) return;

  const isVehicle = arsenalCategory === "tank" || arsenalCategory === "plane";

  let items = [];
  if (arsenalCategory === "all") {
    items = [
      ...ENLISTED_DATA.weapons.map(w => ({ ...w, itemKind: "weapon" })),
      ...ENLISTED_DATA.vehicles.map(v => ({ ...v, itemKind: "vehicle", category: v.type }))
    ];
  } else if (isVehicle) {
    items = ENLISTED_DATA.vehicles
      .filter(v => v.type === arsenalCategory)
      .map(v => ({ ...v, itemKind: "vehicle", category: v.type }));
  } else {
    items = ENLISTED_DATA.weapons
      .filter(w => w.category === arsenalCategory)
      .map(w => ({ ...w, itemKind: "weapon" }));
  }

  if (arsenalNation !== "all") {
    items = items.filter(i => i.nation === arsenalNation);
  }

  if (arsenalBR !== "all") {
    items = items.filter(i => i.br === arsenalBR);
  }

  if (arsenalSearch) {
    items = items.filter(i => 
      i.name.toLowerCase().includes(arsenalSearch) || 
      (i.description && i.description.toLowerCase().includes(arsenalSearch)) ||
      (i.caliber && i.caliber.toLowerCase().includes(arsenalSearch))
    );
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 bento-card p-8">
        <p class="text-xl font-bold text-white mb-1">Озброєння не знайдено</p>
        <p class="text-xs text-slate-400">Спробуйте змінити фільтри нації, категорії або пошуковий запит.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => {
    const isWep = item.itemKind === "weapon";
    let pillColor = "pill-cyan";
    if (item.br === "BR III") pillColor = "pill-amber";
    if (item.br === "BR IV") pillColor = "pill-purple";
    if (item.br === "BR V") pillColor = "pill-pink";

    return `
      <div 
        class="bento-card p-5 flex flex-col justify-between hover:scale-[1.01] transition-transform cursor-pointer group"
        onclick="${isWep ? `openGunsmithModal('${item.id}')` : `openVehicleModal('${item.id}')`}"
      >
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">${item.nation.toUpperCase()}</span>
            <span class="pill-badge ${pillColor} text-[10px]">${item.br}</span>
          </div>

          <div class="h-32 bg-black/30 rounded-xl p-3 flex items-center justify-center overflow-hidden relative mb-3 border border-white/5 group-hover:bg-black/50 transition-colors">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              class="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300" 
              loading="lazy"
            />
          </div>

          <h4 class="text-lg font-bold text-white group-hover:text-pink-400 transition-colors leading-snug mb-1">${item.name}</h4>
          <span class="text-[11px] font-mono-code text-cyan-400 block mb-2">${item.caliber || item.role || ''}</span>
          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">${item.description}</p>
        </div>

        <div class="pt-3 border-t border-white/10 text-xs space-y-1.5 font-mono-code">
          ${isWep ? `
            <div class="flex justify-between text-slate-400">
              <span>Шкода:</span>
              <span class="text-pink-400 font-bold">${item.damage} HP</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Темп:</span>
              <span class="text-cyan-400 font-bold">${item.fireRate} RPM</span>
            </div>
          ` : `
            <div class="flex justify-between text-slate-400">
              <span>Швидкість:</span>
              <span class="text-amber-400 font-bold">${item.speed}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Екіпаж:</span>
              <span class="text-slate-200">${item.crew} осіб</span>
            </div>
          `}
          <div class="pt-2 text-right">
            <span class="text-[11px] text-pink-400 font-semibold group-hover:underline">Детальний огляд ►</span>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Modals
   ========================================================================== */
window.openGunsmithModal = function(id) {
  playModernSound('click');
  const w = ENLISTED_DATA.weapons.find(item => item.id === id);
  if (!w) return;

  const modal = document.getElementById("modern-modal");
  const content = document.getElementById("modern-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="outer-showcase-box p-6 sm:p-8 relative">
      <button onclick="closeModernModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
        ✕
      </button>

      <div class="flex items-center gap-2 mb-3">
        <span class="pill-badge pill-pink text-xs">${w.br}</span>
        <span class="text-xs font-mono-code text-cyan-400">${w.caliber}</span>
      </div>

      <h3 class="text-3xl font-bold text-white mb-1">${w.name}</h3>
      <p class="text-xs text-slate-400 mb-6">Країна: ${w.nation.toUpperCase()} // Категорія: ${w.category.toUpperCase()}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-black/40 rounded-2xl p-6 border border-white/10 flex items-center justify-center">
          <img src="${w.image}" alt="${w.name}" class="max-h-48 object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]" />
        </div>

        <div class="bento-card p-5 space-y-3 font-mono-code text-xs">
          <span class="text-xs font-bold text-slate-300 uppercase block mb-1">Тактико-технічні характеристики:</span>
          
          <div class="flex justify-between pb-1.5 border-b border-white/5">
            <span class="text-slate-400">Урон за кулю:</span>
            <span class="text-pink-400 font-bold">${w.damage} HP</span>
          </div>

          <div class="flex justify-between pb-1.5 border-b border-white/5">
            <span class="text-slate-400">Скорострільність:</span>
            <span class="text-cyan-400 font-bold">${w.fireRate} постр./хв</span>
          </div>

          <div class="flex justify-between pb-1.5 border-b border-white/5">
            <span class="text-slate-400">Ємність магазина:</span>
            <span class="text-white">${w.magazine} набоїв</span>
          </div>

          <div class="flex justify-between pb-1.5 border-b border-white/5">
            <span class="text-slate-400">Швидкість кулі:</span>
            <span class="text-white">${w.muzzleVelocity} м/с</span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-400">Час перезарядки:</span>
            <span class="text-white">${w.reloadTime} сек</span>
          </div>
        </div>
      </div>

      <p class="text-sm text-slate-300 leading-relaxed mb-6">${w.description}</p>

      <button onclick="addToCompare('${w.id}'); closeModernModal();" class="btn-modern-pill btn-modern-primary">
        Додати до порівняння зброї ►
      </button>
    </div>
  `;

  modal.showModal();
};

window.openVehicleModal = function(id) {
  playModernSound('click');
  const v = ENLISTED_DATA.vehicles.find(item => item.id === id);
  if (!v) return;

  const modal = document.getElementById("modern-modal");
  const content = document.getElementById("modern-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="outer-showcase-box p-6 sm:p-8 relative">
      <button onclick="closeModernModal()" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
        ✕
      </button>

      <div class="flex items-center gap-2 mb-3">
        <span class="pill-badge pill-amber text-xs">${v.br}</span>
        <span class="text-xs font-mono-code text-cyan-400">${v.role}</span>
      </div>

      <h3 class="text-3xl font-bold text-white mb-1">${v.name}</h3>
      <p class="text-xs text-slate-400 mb-6">Фракція: ${v.nation.toUpperCase()}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-black/40 rounded-2xl p-4 border border-white/10 flex items-center justify-center overflow-hidden">
          <img src="${v.image}" alt="${v.name}" class="max-h-52 object-contain rounded-xl" />
        </div>

        <div class="bento-card p-5 space-y-2.5 font-mono-code text-xs">
          <div class="pb-1.5 border-b border-white/5">
            <span class="text-slate-400 block mb-0.5">Озброєння:</span>
            <span class="text-white font-bold">${v.caliber}</span>
          </div>

          <div class="pb-1.5 border-b border-white/5">
            <span class="text-slate-400 block mb-0.5">Бронювання:</span>
            <span class="text-white">${v.armor}</span>
          </div>

          <div class="flex justify-between pb-1.5 border-b border-white/5">
            <span class="text-slate-400">Швидкість:</span>
            <span class="text-amber-400 font-bold">${v.speed}</span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-400">Екіпаж:</span>
            <span class="text-white">${v.crew} бійців</span>
          </div>
        </div>
      </div>

      <p class="text-sm text-slate-300 leading-relaxed">${v.description}</p>
    </div>
  `;

  modal.showModal();
};

window.closeModernModal = function() {
  const modal = document.getElementById("modern-modal");
  if (modal) modal.close();
};

function initModalLightDismiss() {
  const modal = document.getElementById("modern-modal");
  if (!modal) return;
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const inDialog = (
      rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width
    );
    if (!inDialog) modal.close();
  });
}

/* ==========================================================================
   Platoon Squad Builder
   ========================================================================== */
const squadState = {
  nation: "ussr",
  soldiers: [
    { callsign: "ВОРОН", role: "Командир / Штурмовик", rank: "Старшина", weaponId: "pps-43", gear: "Вибуховий пакет" },
    { callsign: "МОЛОТ", role: "Інженер загону", rank: "Сержант", weaponId: "mosin-1891-30", gear: "Ящик набоїв" },
    { callsign: "ГРОМ", role: "Кулеметник", rank: "Молодший сержант", weaponId: "dp-27", gear: "Велика аптечка" },
    { callsign: "СОКІЛ", role: "Бронебійник", rank: "Рядовий", weaponId: "mosin-1891-30", gear: "Panzerfaust 60" },
    { callsign: "СТРІЛА", role: "Стрілець", rank: "Рядовий", weaponId: "mosin-1891-30", gear: "Димова граната" }
  ]
};

function initSquadBuilder() {
  renderSquad();

  document.querySelectorAll("[data-squad-nation]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-squad-nation]").forEach(b => {
        b.classList.remove("btn-modern-primary", "text-white");
        b.classList.add("bg-white/5", "text-slate-400");
      });
      btn.classList.add("btn-modern-primary", "text-white");
      btn.classList.remove("bg-white/5", "text-slate-400");

      const nation = btn.getAttribute("data-squad-nation");
      squadState.nation = nation;

      const factionWeapons = ENLISTED_DATA.weapons.filter(w => w.nation === nation);
      const defaultWep = factionWeapons[0]?.id || "mosin-1891-30";
      squadState.soldiers.forEach(s => {
        const valid = factionWeapons.some(w => w.id === s.weaponId);
        if (!valid) s.weaponId = defaultWep;
      });

      playModernSound('heavy');
      renderSquad();
    });
  });

  const exportBtn = document.getElementById("export-order-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      playModernSound('click');
      openOrderModal();
    });
  }
}

function calculateMaxSquadBR() {
  let max = 1;
  squadState.soldiers.forEach(s => {
    const wep = ENLISTED_DATA.weapons.find(w => w.id === s.weaponId);
    if (wep) {
      const num = brToNum(wep.br);
      if (num > max) max = num;
    }
  });
  return numToBr(max);
}

function brToNum(br) {
  if (br === "BR I") return 1;
  if (br === "BR II") return 2;
  if (br === "BR III") return 3;
  if (br === "BR IV") return 4;
  if (br === "BR V") return 5;
  return 1;
}

function numToBr(num) {
  const map = { 1: "BR I", 2: "BR II", 3: "BR III", 4: "BR IV", 5: "BR V" };
  return map[num] || "BR I";
}

function renderSquad() {
  const list = document.getElementById("squad-soldiers-list");
  const brBadge = document.getElementById("squad-br-indicator");
  const bracketNotice = document.getElementById("squad-bracket-notice");
  if (!list || !brBadge) return;

  const currentBR = calculateMaxSquadBR();
  brBadge.textContent = currentBR;

  if (currentBR === "BR I" || currentBR === "BR II") {
    brBadge.className = "text-3xl font-extrabold text-emerald-400";
    bracketNotice.innerHTML = `
      <span class="text-emerald-400 font-bold block mb-1">🟢 Комфортний діапазон (BR I - II)</span>
      Ваш загін грає у збалансованому лобі піхоти без важких танків Tiger II та StG 44.
    `;
  } else if (currentBR === "BR III") {
    brBadge.className = "text-3xl font-extrabold text-amber-400";
    bracketNotice.innerHTML = `
      <span class="text-amber-400 font-bold block mb-1">🟡 Перехідний діапазон (BR III)</span>
      Увага! Пул підбору плаваючий: ви можете потрапити як у легкий матч, так і до топ-ветеранів BR IV-V.
    `;
  } else {
    brBadge.className = "text-3xl font-extrabold text-pink-400";
    bracketNotice.innerHTML = `
      <span class="text-pink-400 font-bold block mb-1">🔴 Максимальна бойова зона (${currentBR})</span>
      Топ-рівень боїв із максимальною щільністю штурмової зброї та бронетехніки.
    `;
  }

  const availableWeapons = ENLISTED_DATA.weapons.filter(w => w.nation === squadState.nation);

  list.innerHTML = squadState.soldiers.map((soldier, idx) => {
    return `
      <div class="bento-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400 text-sm">
            0${idx + 1}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold text-white text-sm">${soldier.callsign}</span>
              <span class="pill-badge pill-purple text-[10px] py-0 px-2">${soldier.rank}</span>
            </div>
            <span class="text-xs text-slate-400">${soldier.role}</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div class="flex-1 sm:w-48">
            <select onchange="updateSoldierWeapon(${idx}, this.value)" class="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono-code text-white focus:border-pink-500">
              ${availableWeapons.map(w => `
                <option value="${w.id}" ${w.id === soldier.weaponId ? 'selected' : ''}>
                  ${w.name} [${w.br}]
                </option>
              `).join('')}
            </select>
          </div>

          <div class="flex-1 sm:w-40">
            <select onchange="updateSoldierGear(${idx}, this.value)" class="w-full bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono-code text-white focus:border-pink-500">
              <option value="Вибуховий пакет" ${soldier.gear === 'Вибуховий пакет' ? 'selected' : ''}>Вибуховий пакет</option>
              <option value="Ящик набоїв" ${soldier.gear === 'Ящик набоїв' ? 'selected' : ''}>Ящик набоїв</option>
              <option value="Велика аптечка" ${soldier.gear === 'Велика аптечка' ? 'selected' : ''}>Велика аптечка</option>
              <option value="Panzerfaust 60" ${soldier.gear === 'Panzerfaust 60' ? 'selected' : ''}>Panzerfaust 60</option>
              <option value="Димова граната" ${soldier.gear === 'Димова граната' ? 'selected' : ''}>Димова граната</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.updateSoldierWeapon = function(idx, wepId) {
  playModernSound('click');
  squadState.soldiers[idx].weaponId = wepId;
  renderSquad();
};

window.updateSoldierGear = function(idx, gear) {
  playModernSound('click');
  squadState.soldiers[idx].gear = gear;
  renderSquad();
};

function openOrderModal() {
  const modal = document.getElementById("modern-modal");
  const content = document.getElementById("modern-modal-content");
  if (!modal || !content) return;

  const maxBr = calculateMaxSquadBR();

  content.innerHTML = `
    <div class="outer-showcase-box p-6 sm:p-8 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <span class="pill-badge pill-pink text-xs mb-1">БОЙОВИЙ РОЗПИС</span>
          <h4 class="text-2xl font-bold text-white">Штатний розпис взводу</h4>
        </div>
        <button onclick="closeModernModal()" class="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>

      <div class="p-3 bg-black/40 rounded-xl border border-white/5 space-y-1 text-xs font-mono-code">
        <p><strong class="text-cyan-400">ФРАКЦІЯ:</strong> ${squadState.nation.toUpperCase()}</p>
        <p><strong class="text-pink-400">БОЙОВИЙ РЕЙТИНГ:</strong> ${maxBr}</p>
      </div>

      <div class="space-y-2 text-xs">
        ${squadState.soldiers.map((s, i) => {
          const wep = ENLISTED_DATA.weapons.find(w => w.id === s.weaponId);
          return `
            <div class="flex justify-between p-2.5 bento-card">
              <span>0${i+1}. [${s.rank}] "${s.callsign}" // ${s.role}</span>
              <span class="text-pink-400 font-mono-code font-bold">${wep ? wep.name : 'Штатне'} (${wep?.br || 'BR I'})</span>
            </div>
          `;
        }).join('')}
      </div>

      <div class="pt-2 flex justify-end">
        <button onclick="navigator.clipboard.writeText('РОЗПИС ВЗВОДУ - ${squadState.nation.toUpperCase()} - ${maxBr}'); closeModernModal();" class="btn-modern-pill btn-modern-primary py-2.5 px-6">
          Скопіювати в буфер обміну
        </button>
      </div>
    </div>
  `;

  modal.showModal();
}

/* ==========================================================================
   Weapon Comparison Tool
   ========================================================================== */
let compare1 = "ppsh-41";
let compare2 = "stg-44";

function initWeaponComparison() {
  const sel1 = document.getElementById("compare-weapon-1-select");
  const sel2 = document.getElementById("compare-weapon-2-select");
  if (!sel1 || !sel2) return;

  const html = ENLISTED_DATA.weapons.map(w => `
    <option value="${w.id}">${w.name} [${w.br}] - ${w.nation.toUpperCase()}</option>
  `).join('');

  sel1.innerHTML = html;
  sel2.innerHTML = html;

  sel1.value = compare1;
  sel2.value = compare2;

  sel1.addEventListener("change", (e) => {
    compare1 = e.target.value;
    playModernSound('click');
    renderComparison();
  });

  sel2.addEventListener("change", (e) => {
    compare2 = e.target.value;
    playModernSound('click');
    renderComparison();
  });

  renderComparison();
}

window.addToCompare = function(id) {
  compare2 = compare1;
  compare1 = id;

  const sel1 = document.getElementById("compare-weapon-1-select");
  const sel2 = document.getElementById("compare-weapon-2-select");
  if (sel1 && sel2) {
    sel1.value = compare1;
    sel2.value = compare2;
  }

  renderComparison();
  const comp = document.getElementById("comparison");
  if (comp) comp.scrollIntoView({ behavior: 'smooth' });
};

function renderComparison() {
  const box = document.getElementById("comparison-results");
  if (!box) return;

  const w1 = ENLISTED_DATA.weapons.find(w => w.id === compare1) || ENLISTED_DATA.weapons[0];
  const w2 = ENLISTED_DATA.weapons.find(w => w.id === compare2) || ENLISTED_DATA.weapons[1];

  const metrics = [
    { label: "Урон (Damage HP)", v1: w1.damage, v2: w2.damage, max: 25, unit: "HP" },
    { label: "Скорострільність (RPM)", v1: w1.fireRate, v2: w2.fireRate, max: 1200, unit: "постр/хв" },
    { label: "Швидкість кулі", v1: w1.muzzleVelocity, v2: w2.muzzleVelocity, max: 950, unit: "м/с" },
    { label: "Місткість магазина", v1: w1.magazine, v2: w2.magazine, max: 71, unit: "наб" },
    { label: "Ефективна дальність", v1: w1.effectiveRange, v2: w2.effectiveRange, max: 380, unit: "м" }
  ];

  box.innerHTML = `
    <div class="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
      <div class="bento-card p-4">
        <span class="pill-badge pill-pink text-xs mb-2">${w1.br}</span>
        <h4 class="text-xl font-bold text-white">${w1.name}</h4>
        <span class="text-xs font-mono-code text-cyan-400 block">${w1.caliber}</span>
      </div>

      <div class="bento-card p-4 text-right">
        <span class="pill-badge pill-cyan text-xs mb-2">${w2.br}</span>
        <h4 class="text-xl font-bold text-white">${w2.name}</h4>
        <span class="text-xs font-mono-code text-cyan-400 block">${w2.caliber}</span>
      </div>
    </div>

    <div class="space-y-4 pt-6 font-mono-code text-xs">
      ${metrics.map(m => {
        const is1Wins = m.v1 > m.v2;
        const is2Wins = m.v2 > m.v1;
        return `
          <div>
            <div class="flex justify-between items-center mb-1.5">
              <span class="${is1Wins ? 'text-pink-400 font-bold' : 'text-slate-400'}">${m.v1} ${m.unit}</span>
              <span class="font-sans font-semibold text-slate-200">${m.label}</span>
              <span class="${is2Wins ? 'text-cyan-400 font-bold' : 'text-slate-400'}">${m.v2} ${m.unit}</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div class="h-2 bg-neutral-900 rounded-full overflow-hidden flex justify-end">
                <div class="h-full ${is1Wins ? 'bg-gradient-to-l from-pink-500 to-rose-400' : 'bg-slate-700'} rounded-full" style="width: ${(m.v1 / m.max) * 100}%"></div>
              </div>
              <div class="h-2 bg-neutral-900 rounded-full overflow-hidden">
                <div class="h-full ${is2Wins ? 'bg-gradient-to-r from-cyan-400 to-emerald-400' : 'bg-slate-700'} rounded-full" style="width: ${(m.v2 / m.max) * 100}%"></div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ==========================================================================
   Guides
   ========================================================================== */
function initGuides() {
  const container = document.getElementById("guides-list-container");
  if (!container) return;

  container.innerHTML = ENLISTED_DATA.guides.map(g => `
    <div class="bento-card p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="pill-badge ${g.pillClass} text-xs">${g.category}</span>
          <span class="text-xs text-slate-400 font-mono-code">${g.readTime}</span>
        </div>

        <h3 class="text-lg font-bold text-white mb-2 leading-snug">${g.title}</h3>
        <p class="text-xs text-slate-300 mb-4 leading-relaxed">${g.summary}</p>
      </div>

      <div class="pt-4 border-t border-white/10">
        ${g.content}
      </div>
    </div>
  `).join('');
}
