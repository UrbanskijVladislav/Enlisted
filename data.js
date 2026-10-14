/**
 * ENLISTED MODERN KNOWLEDGE BASE - Data Module
 * База даних фракцій, озброєння, техніки, бойових рейтингів та гайдів
 * Адаптована під структуру сучасних Bento-карток
 */

const ENLISTED_DATA = {
  factions: [
    {
      id: "ussr",
      name: "СРСР",
      titlePrefix: "Армія",
      titleHighlight: "СРСР",
      titleBadge: "✦",
      cardClass: "pricing-card-ussr",
      gradientClass: "gradient-text-pink",
      pillClass: "pill-pink",
      badgeText: "ТОП БЛИЖНІЙ БІЙ",
      bulletColor: "bg-rose-500",
      description: "Абсолютна домінація в міських боях та вузьких окопах завдяки високій скорострільності.",
      features: [
        "Легендарний ППШ-41 з барабанним магазином на 71 набій",
        "Колосальний темп стрільби до 1000 пострілів на хвилину",
        "Важкі танки Т-34-85 та ІС-2 з нищівними 122-мм фугасами",
        "Надійна похила броня, що викликає часті рикошети ворожих снарядів",
        "Штурмові автомати АС-44 та Федорова для топ-рангів BR V",
        "Висока живучість штурмових піхотних загонів у будівлях",
        "Швидка перезарядка коробчатих магазинів у пістолетів-кулеметів ППС-43",
        "Історичні битви: Захист Москви, Сталінград та Штурм Берліна"
      ],
      bigStat: "1000 RPM",
      bigStatSub: "швидкострільність ППШ-41",
      signatureWeapon: "ППШ-41 (барабанний)",
      signatureTank: "Т-34-85",
      buttonText: "Обрати армію СРСР"
    },
    {
      id: "usa",
      name: "США / Велика Британія",
      titlePrefix: "Союзники",
      titleHighlight: "USA & UK",
      titleBadge: "🛡️",
      cardClass: "pricing-card-usa",
      gradientClass: "gradient-text-cyan",
      pillClass: "pill-cyan",
      badgeText: "ПАНУВАННЯ В НЕБІ",
      bulletColor: "bg-emerald-500",
      description: "Висока універсальність піхоти, масова напівавтоматика та найкраща авіація у грі.",
      features: [
        "Масова напівавтоматична гвинтівка M1 Garand на 8 патронів",
        "Найпотужніша штурмова авіація: P-47 Thunderbolt з 10 ракетами HVAR",
        "Комфортний та стабільний контроль віддачі кулеметів BAR M1918",
        "Потужна зупиняюча дія пістолетів-кулеметів Thompson калібру .45 ACP",
        "Універсальні танки M4 Sherman із великокаліберним .50 Browning",
        "Легкі та мобільні автоматичні карабіни M2 Carbine на 30 набоїв",
        "Швидкісний танк-винищувач M18 Hellcat та САУ M8 Scott",
        "Історичні битви: Висадка в Нормандії (Омаха), Туніс та Арденни"
      ],
      bigStat: "10x HVAR",
      bigStatSub: "ракетний залп штурмовика P-47",
      signatureWeapon: "M1 Garand (.30-06)",
      signatureTank: "M4A2 (76)W Sherman",
      buttonText: "Обрати Союзників"
    },
    {
      id: "germany",
      name: "Німеччина",
      titlePrefix: "Вермахт",
      titleHighlight: "Німеччина",
      titleBadge: "⚡",
      cardClass: "pricing-card-germany",
      gradientClass: "gradient-text-gold",
      pillClass: "pill-amber",
      badgeText: "ВАЖКА ВОГНЕВА МІЦЬ",
      bulletColor: "bg-amber-500",
      description: "Передова військова інженерія: перший у світі штурмовий автомат StG 44 та важкі танки.",
      features: [
        "Рекордні єдині кулемети MG 42 зі скорострільністю 1200 постр./хв",
        "Еталонні штурмові автомати StG 44 з ідеальною кучністю стрільби",
        "Непробивна лобова броня та снайперські гармати танків Tiger II (H)",
        "Легендарний танк Panther з чудовою балістикою довгоствольної 75-мм гармати",
        "Прецизійні гвинтівки Kar98k з найвищою точністю прицілу",
        "Висока щільність вогню на далеких і середніх дистанціях",
        "Парашутні автоматичні гвинтівки FG 42 II для десантників",
        "Участь у всіх ключових кампаніях Європейського театру війни"
      ],
      bigStat: "1200 RPM",
      bigStatSub: "скорострільність кулемета MG 42",
      signatureWeapon: "StG 44 / MG 42",
      signatureTank: "Tiger II (H) «Королівський тигр»",
      buttonText: "Обрати Німеччину"
    },
    {
      id: "japan",
      name: "Японія",
      titlePrefix: "Імперія",
      titleHighlight: "Японія",
      titleBadge: "🌸",
      cardClass: "pricing-card-japan",
      gradientClass: "gradient-text-purple",
      pillClass: "pill-purple",
      badgeText: "БЛИСКАВИЧНИЙ ШТУРМ",
      bulletColor: "bg-fuchsia-500",
      description: "Неймовірна маневреність винищувачів Zero, довгі багнети та смертоносні банзай-атаки.",
      features: [
        "Багнети на 95% озброєння та спеціальний швидкісний 'Банзай-ривок'",
        "Гвинтівка Arisaka Type 38 з рекордною швидкістю польоту кулі 910 м/с",
        "Легендарні винищувачі A6M Zero з неперевершеною маневреністю на віражах",
        "Скорострільні пістолети-кулемети Type 100 з вмонтованими сошками",
        "Автоматичні гвинтівки Type Hei для штурмових операцій",
        "Висока швидкість пересування піхоти у джунглях та заростях",
        "Протитанкові шестові міни для раптових засідок на ворожі танки",
        "Тихоокеанський театр: Битва за Гуадалканал та острови"
      ],
      bigStat: "910 м/с",
      bigStatSub: "початкова швидкість кулі Arisaka",
      signatureWeapon: "Type 100 SMG / Arisaka",
      signatureTank: "Ho-Ri Production",
      buttonText: "Обрати Японію"
    }
  ],

  battleRatings: [
    {
      br: "BR I",
      tier: "Рівень 1",
      title: "Ранній фронт",
      pillClass: "pill-cyan",
      badgeText: "БЕЗПЕЧНА ЗОНА",
      description: "Атмосферний тактичний бій болтових гвинтівок (Мосін, Kar98k, Springfield) та легких танків. Ідеально для вивчення гри без спаму важкої техніки.",
      queue: "Виключно черга BR I - II.",
      weapons: "Мосін, Kar98k, Springfield, Т-26, Stuart"
    },
    {
      br: "BR II",
      tier: "Рівень 2",
      title: "Золотий піхотний баланс",
      pillClass: "pill-pink",
      badgeText: "ГОЛОВНА МЕТА",
      description: "Найпопулярніший діапазон у грі: збалансовані автомати (ППС-42, MP 40, Type 100) та надійні танки Т-50 і Pz.III без загрози важких танків.",
      queue: "Черга BR I - II або BR III.",
      weapons: "ППС-42, MP 40, Bren Mk II, Т-50, Pz.III J"
    },
    {
      br: "BR III",
      tier: "Рівень 3",
      title: "Переломна епоха",
      pillClass: "pill-amber",
      badgeText: "ПЛАВАЮЧА ЧЕРГА",
      description: "Міст між епохами. З'являються напівавтоматичні гвинтівки M1 Garand та СВТ-38, танки Sherman та Т-34. Може закинути як до новачків, так і до ветеранів.",
      queue: "Пул BR I-III або BR III-V.",
      weapons: "M1 Garand, СВТ-38, Т-34 (1941), Sherman"
    },
    {
      br: "BR IV",
      tier: "Рівень 4",
      title: "Важка броня",
      pillClass: "pill-purple",
      badgeText: "ШТУРМОВИЙ ТІР",
      description: "Епоха запеклих міських боїв: барабанні ППШ-41, легендарні німецькі Panther та радянські Т-34-85, потужні авіаційні удари.",
      queue: "Високий пул підбору (BR III - V).",
      weapons: "ППШ-41, Panther D, Т-34-85, Sherman 76W"
    },
    {
      br: "BR V",
      tier: "Рівень 5",
      title: "Апогей технологій",
      pillClass: "pill-pink",
      badgeText: "МАКСИМАЛЬНА МОГУТНІСТЬ",
      description: "Максимальна вогнева міць: штурмові автомати StG 44, АС-44, важкі броньовані гіганти Tiger II (H) та ІС-2 (1944), ракети HVAR.",
      queue: "Топ-лобі найвищого рівня.",
      weapons: "StG 44, АС-44, Tiger II (H), ІС-2, P-47"
    }
  ],

  weapons: [
    {
      id: "ppsh-41",
      name: "ППШ-41 (барабанний)",
      nation: "ussr",
      category: "smg",
      br: "BR IV",
      caliber: "7.62×25мм Токарєв",
      damage: 6.8,
      fireRate: 1000,
      magazine: 71,
      reloadTime: 3.2,
      effectiveRange: 85,
      muzzleVelocity: 500,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/PPSh-41_from_soviet_noBG.png",
      description: "Барабанний пістолет-кулемет на 71 набій. Скорострільність 1000 постр./хв робить його абсолютним королем штурму будівель.",
      tags: ["Ближній бій", "1000 RPM", "Барабан 71 набій"]
    },
    {
      id: "as-44",
      name: "АС-44 (Автомат Судаєва)",
      nation: "ussr",
      category: "assault",
      br: "BR V",
      caliber: "7.62×39мм",
      damage: 10.5,
      fireRate: 650,
      magazine: 30,
      reloadTime: 2.7,
      effectiveRange: 160,
      muzzleVelocity: 710,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/PPSh-41_with_box_magazine_1942_001.jpg/640px-PPSh-41_with_box_magazine_1942_001.jpg",
      description: "Радянська штурмова гвинтівка кінця війни з високим разовим уроном та відмінною кучністю.",
      tags: ["Топ-тир", "Автомат", "Універсальний"]
    },
    {
      id: "mosin-1891-30",
      name: "Гвинтівка Мосіна 1891/30",
      nation: "ussr",
      category: "rifle",
      br: "BR I",
      caliber: "7.62×54мм R",
      damage: 23.5,
      fireRate: 48,
      magazine: 5,
      reloadTime: 3.0,
      effectiveRange: 350,
      muzzleVelocity: 865,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/M91-30.jpg/640px-M91-30.jpg",
      description: "Класична трилінійка. Знищує ворожого піхотинця з одного влучного пострілу в корпус на будь-якій реальній відстані.",
      tags: ["Болтова", "Ваншот", "Ранній фронт"]
    },
    {
      id: "dp-27",
      name: "ДП-27 («Дегтярьов»)",
      nation: "ussr",
      category: "mg",
      br: "BR III",
      caliber: "7.62×54мм R",
      damage: 13.8,
      fireRate: 580,
      magazine: 47,
      reloadTime: 4.1,
      effectiveRange: 200,
      muzzleVelocity: 840,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/DP-27-latrun-1.jpg/640px-DP-27-latrun-1.jpg",
      description: "Ручний кулемет із дисковим магазином на 47 набоїв. Стабільна балістика та надійний контроль секторів.",
      tags: ["Кулемет", "Оборона", "47 набоїв"]
    },
    {
      id: "pps-43",
      name: "ППС-43",
      nation: "ussr",
      category: "smg",
      br: "BR II",
      caliber: "7.62×25мм Токарєв",
      damage: 6.2,
      fireRate: 600,
      magazine: 35,
      reloadTime: 2.4,
      effectiveRange: 100,
      muzzleVelocity: 480,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/PPS-43.jpg/640px-PPS-43.jpg",
      description: "Ідеальний вибір для рейтингу BR II: дуже м'яка віддача, швидка перезарядка та висока точність.",
      tags: ["Мета BR II", "М'яка віддача", "Швидка перезарядка"]
    },
    {
      id: "stg-44",
      name: "StG 44 (Sturmgewehr)",
      nation: "germany",
      category: "assault",
      br: "BR V",
      caliber: "7.92×33мм Kurz",
      damage: 10.2,
      fireRate: 600,
      magazine: 30,
      reloadTime: 2.6,
      effectiveRange: 180,
      muzzleVelocity: 685,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/StG_44.JPG/640px-StG_44.JPG",
      description: "Еталон штурмових гвинтівок. Прецизійна кучність черги, комфортна віддача та висока ефективність.",
      tags: ["Легенда", "Штурмова гвинтівка", "Топ-тир"]
    },
    {
      id: "mg-42",
      name: "MG 42 («Пила Гітлера»)",
      nation: "germany",
      category: "mg",
      br: "BR IV",
      caliber: "7.92×57мм Mauser",
      damage: 12.8,
      fireRate: 1200,
      magazine: 50,
      reloadTime: 4.8,
      effectiveRange: 220,
      muzzleVelocity: 755,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Maschinengewehr_42.jpg/640px-Maschinengewehr_42.jpg",
      description: "Рекордна скорострільність 1200 пострілів на хвилину. Зрізає цілі ворожі загони за секунди.",
      tags: ["1200 RPM", "Придушення", "Кулемет"]
    },
    {
      id: "kar98k",
      name: "Karabiner 98k",
      nation: "germany",
      category: "rifle",
      br: "BR I",
      caliber: "7.92×57мм Mauser",
      damage: 24.0,
      fireRate: 46,
      magazine: 5,
      reloadTime: 3.1,
      effectiveRange: 350,
      muzzleVelocity: 860,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Mauser_Karabiner_98k.jpg/640px-Mauser_Karabiner_98k.jpg",
      description: "Штатна німецька гвинтівка. Бездоганна балістика та гарантований ваншот у корпус.",
      tags: ["Точність", "Ваншот", "BR I"]
    },
    {
      id: "mp-40",
      name: "MP 40",
      nation: "germany",
      category: "smg",
      br: "BR II",
      caliber: "9×19мм Parabellum",
      damage: 6.4,
      fireRate: 550,
      magazine: 32,
      reloadTime: 2.5,
      effectiveRange: 90,
      muzzleVelocity: 400,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/MP_40_AYF_3.JPG/640px-MP_40_AYF_3.JPG",
      description: "Комфортний та передбачуваний темп вогню дозволяє контролювати зброю під час безперервної черги.",
      tags: ["BR II Мета", "Зручний контроль", "Міський бій"]
    },
    {
      id: "m1-garand",
      name: "M1 Garand",
      nation: "usa",
      category: "rifle",
      br: "BR III",
      caliber: ".30-06 Springfield",
      damage: 15.0,
      fireRate: 320,
      magazine: 8,
      reloadTime: 2.6,
      effectiveRange: 260,
      muzzleVelocity: 853,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/M1_Garand_rifle_USA_noBG.png/640px-M1_Garand_rifle_USA_noBG.png",
      description: "Напівавтоматична гвинтівка союзників. Висока вогнева продуктивність та фірмовий звук 'пінг'.",
      tags: ["Легенда", "Напівавтомат", "Союзники"]
    },
    {
      id: "m2-carbine",
      name: "M2 Carbine",
      nation: "usa",
      category: "assault",
      br: "BR V",
      caliber: ".30 Carbine (7.62×33мм)",
      damage: 8.8,
      fireRate: 750,
      magazine: 30,
      reloadTime: 2.4,
      effectiveRange: 130,
      muzzleVelocity: 610,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/M1_Carbine_noBG.png/640px-M1_Carbine_noBG.png",
      description: "Автоматичний карабін із магазином на 30 набоїв для швидкого штурму позицій ворога.",
      tags: ["Топ-тир", "Автомат", "30 набоїв"]
    },
    {
      id: "thompson-m1a1",
      name: "Thompson M1A1",
      nation: "usa",
      category: "smg",
      br: "BR III",
      caliber: ".45 ACP (11.43×23мм)",
      damage: 7.8,
      fireRate: 700,
      magazine: 30,
      reloadTime: 2.6,
      effectiveRange: 90,
      muzzleVelocity: 285,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thompson_1928_noBG.png/640px-Thompson_1928_noBG.png",
      description: "Потужний набій .45 ACP забезпечує колосальну зупиняючу силу та збиває приціл противника.",
      tags: [".45 ACP", "Зупиняюча дія", "Штурм"]
    },
    {
      id: "type-100",
      name: "Type 100 SMG",
      nation: "japan",
      category: "smg",
      br: "BR II",
      caliber: "8×22мм Nambu",
      damage: 6.0,
      fireRate: 720,
      magazine: 30,
      reloadTime: 2.5,
      effectiveRange: 85,
      muzzleVelocity: 335,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Type_100_submachine_gun.jpg/640px-Type_100_submachine_gun.jpg",
      description: "Швидкострільний пістолет-кулемет із бічним магазином та штатними сошками для стрільби лежачи.",
      tags: ["Сошки", "Тихий океан", "BR II"]
    },
    {
      id: "type-38-arisaka",
      name: "Type 38 Arisaka",
      nation: "japan",
      category: "rifle",
      br: "BR I",
      caliber: "6.5×50мм SR",
      damage: 24.5,
      fireRate: 50,
      magazine: 5,
      reloadTime: 3.0,
      effectiveRange: 380,
      muzzleVelocity: 910,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Arisaka_Type_38.jpg/640px-Arisaka_Type_38.jpg",
      description: "Рекордна швидкість кулі 910 м/с та довгий багнет для смертоносного банзай-ривка.",
      tags: ["Багнет", "910 м/с куля", "Болтова"]
    },
    {
      id: "panzerfaust-60",
      name: "Panzerfaust 60",
      nation: "germany",
      category: "at",
      br: "BR III",
      caliber: "149-мм кумулятив",
      damage: 200.0,
      fireRate: 10,
      magazine: 1,
      reloadTime: 4.8,
      effectiveRange: 60,
      muzzleVelocity: 45,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Panzerfaust60.jpg/640px-Panzerfaust60.jpg",
      description: "Одноразовий піхотний гранатомет, що пропалює до 200 мм броні та знищує будь-який танк.",
      tags: ["Протитанковий", "Ваншот танка", "BR III"]
    }
  ],

  vehicles: [
    {
      id: "t-34-85",
      name: "Т-34-85",
      nation: "ussr",
      type: "tank",
      br: "BR IV",
      role: "Середній танк прориву",
      caliber: "85-мм ЗИС-С-53",
      armor: "Лоб башти 90 мм / Лоб корпусу 45 мм",
      speed: "55 км/год",
      crew: 5,
      engineHp: "500 к.с.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/T-34-85_in_Pozna%C5%84.jpg/640px-T-34-85_in_Pozna%C5%84.jpg",
      description: "Легендарний танк із чудовою швидкістю, рикошетною бронею та гарматою проти важких танків."
    },
    {
      id: "tiger-2-h",
      name: "Tiger II (H) «Королівський тигр»",
      nation: "germany",
      type: "tank",
      br: "BR V",
      role: "Важкий танк прориву",
      caliber: "Довгоствольна 88-мм KwK 43",
      armor: "Лоб корпусу 150 мм / Лоб башти 185 мм",
      speed: "38 км/год",
      crew: 5,
      engineHp: "700 к.с.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Tiger_II_side_view_at_The_Tank_Museum.jpg/640px-Tiger_II_side_view_at_The_Tank_Museum.jpg",
      description: "Найміцніший важкий танк у грі. Його броня витримує прямі попадання більшості гармат."
    },
    {
      id: "m4a2-76-sherman",
      name: "M4A2 (76)W Sherman",
      nation: "usa",
      type: "tank",
      br: "BR IV",
      role: "Середній танк підтримки",
      caliber: "76-мм M1A2 + .50 Browning",
      armor: "Лоб корпусу 63 мм / Маска 89 мм",
      speed: "48 км/год",
      crew: 5,
      engineHp: "410 к.с.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/M4A2_%2876%29_W_in_the_Kubinka_Museum.jpg/640px-M4A2_%2876%29_W_in_the_Kubinka_Museum.jpg",
      description: "Модифікація з довгоствольною 76-мм гарматою та зенітним великокаліберним кулеметом."
    },
    {
      id: "p-47d-28",
      name: "P-47D-28 Thunderbolt",
      nation: "usa",
      type: "plane",
      br: "BR V",
      role: "Штурмовик",
      caliber: "8x 12.7-мм M2 + 10x ракет HVAR + бомба",
      armor: "Броньована кабіна",
      speed: "690 км/год",
      crew: 1,
      engineHp: "2535 к.с.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Republic_P-47D_Thunderbolt_%E2%80%9845-49295_-_Tallahassee_Lassie%E2%80%99_%2827179009772%29.jpg/640px-Republic_P-47D_Thunderbolt_%E2%80%9845-49295_-_Tallahassee_Lassie%E2%80%99_%2827179009772%29.jpg",
      description: "Нищівний штурмовик: залп із 10 ракет HVAR за один захід очищає цілу захоплену точку."
    }
  ],

  soldierClasses: [
    {
      id: "engineer",
      name: "Інженер",
      role: "Будівництво точок",
      pillClass: "pill-cyan",
      badgeText: "КЛЮЧ ДО ПЕРЕМОГИ",
      description: "Будує точки відродження (Rally Points) за 60 метрів від прапора, ящики з набоями, мішки з піском та протитанкові гармати.",
      weapons: "Гвинтівки, молоток інженера",
      perk: "Швидкість будівництва (+50%)"
    },
    {
      id: "assaulter",
      name: "Штурмовик",
      role: "Зачистка будівель",
      pillClass: "pill-pink",
      badgeText: "ГОЛОВНИЙ ШТУРМ",
      description: "Основний боєць ближнього контакту: озброєний пістолетами-кулеметами та автоматами StG 44 / АС-44.",
      weapons: "ППШ-41, StG 44, Thompson",
      perk: "Зниження віддачі (-15%)"
    },
    {
      id: "gunner",
      name: "Кулеметник",
      role: "Придушення вогнем",
      pillClass: "pill-amber",
      badgeText: "КОНТРОЛЬ СЕКТОРА",
      description: "Створює стіну вогню з кулеметів MG 42, ДП-27 чи BAR, не даючи ворожій піхоті перебігати відкриті простори.",
      weapons: "MG 42, ДП-27, BAR",
      perk: "Стійкість до струсу від вибухів"
    },
    {
      id: "at-gunner",
      name: "Бронебійник",
      role: "Анти-танк",
      pillClass: "pill-purple",
      badgeText: "ЗНИЩЕННЯ БРОНІ",
      description: "Спеціаліст із фаустпатронів та базук. Здатний одним кумулятивним пострілом у борт знищити танк ворога.",
      weapons: "Panzerfaust 60, Bazooka, ПТРД",
      perk: "Дальність кидка гранати (+50%)"
    }
  ],

  guides: [
    {
      id: "engineer-doctrine",
      title: "Золоте правило Інженера: точки відродження (Rally Points)",
      category: "СТРАТЕГІЯ",
      pillClass: "pill-cyan",
      readTime: "4 хв читання",
      summary: "Чому команда без мобільних респаунів інженера гарантовано програє 80% боїв, та де правильно ставити точки.",
      content: `
        <div class="space-y-3 text-sm text-neutral-300">
          <p><strong class="text-emerald-400">Правило 60 метрів:</strong> Стандартна точка відродження за замовчуванням знаходиться за 150-200 метрів від прапора. Інженер може поставити точку за 50-70 метрів! Це скорочує шлях підкріплень у 4 рази.</p>
          <div class="p-3 bg-neutral-900/80 rounded-xl border border-white/10 text-xs font-mono-code space-y-1">
            <span class="text-amber-400 font-bold block mb-1">ЧЕК-ЛІСТ ІНЖЕНЕРА:</span>
            • Ставте точку під дахом або в підвалі (захист від мінометів та авіанальотів).<br>
            • Не будуйте респаун на прямій лінії вогню від захоплюваної точки.<br>
            • Завжди ставте поруч ящик з набоями для союзних кулеметників та штурмовиків.
          </div>
        </div>
      `
    },
    {
      id: "br-doctrine",
      title: "Механіка Бойового Рейтингу (BR): помилка одного предмета",
      category: "МАТЧМЕЙКІНГ",
      pillClass: "pill-pink",
      readTime: "3 хв читання",
      summary: "Як формується рейтинг вашої армії і чому одна випадкова гвинтівка BR III може закинути весь взвод до ветеранів.",
      content: `
        <div class="space-y-3 text-sm text-neutral-300">
          <p>Матчмейкер гри перевіряє <strong>АБСОЛЮТНО ВСІ</strong> предмети у вашому сетапі. Бойовий рейтинг сетапу дорівнює <span class="text-pink-400 font-bold">НАЙВИЩОМУ BR серед усіх солдатів та техніки</span>.</p>
          <div class="p-3 bg-neutral-900/80 rounded-xl border border-white/10 text-xs font-mono-code">
            <span class="text-pink-400 font-bold block mb-1">ПОРАДА ДЛЯ КОМФОРТНОГО ФАРМУ:</span>
            Збирайте загін строго під <strong>BR II</strong> (наприклад, ППС-42, гвинтівки Мосіна, Т-50 або MP 40, Kar98k, Pz.III). Це гарантує швидкий пошук та комфортні рівні боїв без важких танків.
          </div>
        </div>
      `
    },
    {
      id: "bot-management",
      title: "Керування ботами: перетворіть ШІ на смертоносний загін",
      category: "ТАКТИКА",
      pillClass: "pill-amber",
      readTime: "4 хв читання",
      summary: "Як правильно роздавати накази ШІ-союзникам через клавішу 'X', щоб вони не гинули від першої гранати.",
      content: `
        <div class="space-y-3 text-sm text-neutral-300">
          <p>Ніколи не біжіть у штурм будівлі, коли весь загін тупо біжить за вашою спиною гуськом. Ворожий кулеметник або граната знищить усіх миттєво.</p>
          <p><strong class="text-amber-400">Наказ «Тримати позицію» (клавіша X):</strong> Залиште ботів у безпечній кімнаті чи траншеї, а самі йдіть вперед командиром. Якщо вас поранять — ви миттєво переключитесь на живого бійця через клавішу 'Y'.</p>
        </div>
      `
    }
  ]
};
