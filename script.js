const TRACKS = [
  // 城鎮 / 酒館
  { id: "stonehill", title: "Stonehill Inn", category: "tavern", tags: ["phandalin", "tavern", "inn", "lmop", "doip"], yt: "_e_lnbX8JY0", source: "Bardify" },
  { id: "cozy-tavern", title: "Cozy Tavern", category: "tavern", tags: ["tavern", "inn", "warm"], yt: "orgikrTCKTc", source: "Bardify" },
  { id: "peaceful-village", title: "Peaceful Village", category: "town", tags: ["phandalin", "town", "village"], yt: "jyYnGLh5vL0", source: "Bardify" },
  { id: "large-city", title: "Large City", category: "town", tags: ["city", "neverwinter"], yt: "ddMSMwKQkKI", source: "Bardify" },

  // 荒野旅行
  { id: "wilderness", title: "Wilderness Travel", category: "travel", tags: ["travel", "forest", "road", "lmop"], yt: "bLZApMsorjA", source: "Bardify" },
  { id: "peaceful-travel", title: "Peaceful Travel", category: "travel", tags: ["travel", "calm"], yt: "TZSA5HbOIEA", source: "Bardify" },
  { id: "tense-path", title: "Tense Path", category: "travel", tags: ["travel", "tense", "mystery"], yt: "fv_7EurNAss", source: "Bardify" },
  { id: "mysterious-forest", title: "Mysterious Forest", category: "travel", tags: ["forest", "mystery"], yt: "4Y6n-1XQSfE", source: "Bardify" },
  { id: "forest-amb", title: "Forest Ambience", category: "travel", tags: ["forest", "ambience"], yt: "F8bYaMoQ2sM", source: "Bardify" },

  // 山區 / 寒冷 (DoIP)
  { id: "frostlands", title: "Desolate Frostlands", category: "mountain", tags: ["mountain", "cold", "icespire", "doip"], yt: "eNDr0IAw2po", source: "Bardify" },
  { id: "arctic", title: "Arctic Wilderness", category: "mountain", tags: ["mountain", "cold", "snow", "doip"], yt: "qD2ahwiPRBk", source: "Bardify" },

  // 洞穴 / 地下城
  { id: "spooky-cave", title: "Spooky Cave", category: "dungeon", tags: ["cave", "dungeon", "spooky"], yt: "LAO0LoXDQLs", source: "Bardify" },
  { id: "cave-amb", title: "Cave Ambience", category: "dungeon", tags: ["cave", "ambience"], yt: "OtfgXgclSxU", source: "Bardify" },
  { id: "dark-cave", title: "Dark, Dank Cave", category: "dungeon", tags: ["cave", "dark", "lmop"], yt: "E72yDpAfrgY", source: "Sword Coast Soundscapes" },
  { id: "wave-echo", title: "Wave Echo Cave", category: "dungeon", tags: ["cave", "wave echo", "lmop"], yt: "Z-pbILkmhMk", source: "Sword Coast Soundscapes" },
  { id: "generic-dungeon", title: "Generic Dungeon", category: "dungeon", tags: ["dungeon", "cave"], yt: "wScEFaoqwPM", source: "Sword Coast Soundscapes" },

  // 戰鬥
  { id: "ambush", title: "Ambush!", category: "combat", tags: ["combat", "battle", "goblin"], yt: "8Q7cioftmKs", source: "Bardify" },
  { id: "epic-fight", title: "Epic Fight", category: "combat", tags: ["combat", "boss", "intense"], yt: "H8n7K3jABhI", source: "Bardify" },
  { id: "low-combat", title: "Low Level Combat", category: "combat", tags: ["combat", "easy"], yt: "2GX9lVHfnxs", source: "Bardify" },

  // 懸疑 / 休息
  { id: "suspense", title: "Suspense", category: "tension", tags: ["suspense", "tense", "mystery"], yt: "EApZmmYg_oQ", source: "Bardify" },
  { id: "mystery", title: "Investigating a Mystery", category: "tension", tags: ["mystery", "investigate"], yt: "7wBzL62Va1k", source: "Bardify" },
  { id: "long-rest", title: "Long Rest", category: "rest", tags: ["rest", "camp", "calm"], yt: "7T3SU4Ht1Yw", source: "Bardify" },
  { id: "adventure", title: "The Adventure Begins", category: "travel", tags: ["intro", "adventure"], yt: "Jikm8CCRbdM", source: "Bardify" },
];

const CATEGORIES = [
  { id: "town", name: "城鎮 / Phandalin", desc: "街道、商店、白天活動", icon: "🏘️" },
  { id: "tavern", name: "酒館 / 旅店", desc: "Stonehill Inn、休息角色扮演", icon: "🍺" },
  { id: "travel", name: "荒野旅行", desc: "森林、道路、丘陵移動", icon: "🌲" },
  { id: "mountain", name: "山區 / 寒冷", desc: "冰塔峰、高地、風雪", icon: "🏔️" },
  { id: "dungeon", name: "洞穴 / 地下城", desc: "探索、滴水、神秘", icon: "🕳️" },
  { id: "combat", name: "戰鬥", desc: "小戰、激烈、Boss", icon: "⚔️" },
  { id: "tension", name: "懸疑 / 緊張", desc: "探索未知、埋伏", icon: "🔍" },
  { id: "rest", name: "休息 / 露營", desc: "長休、營火", icon: "🔥" },
  { id: "lmop", name: "LMoP 專區", desc: "凡戴爾的失落礦坑", icon: "⛏️" },
  { id: "doip", name: "DoIP 專區", desc: "冰塔峰之龍", icon: "🐉" },
];

let currentView = "home";
let currentCategory = null;
let player = null;
let currentTrack = null;

const main = document.getElementById("main");
const searchInput = document.getElementById("search");
const nowPlaying = document.getElementById("now-playing");
const stopBtn = document.getElementById("stop-btn");
const loopCheckbox = document.getElementById("loop");
const ytContainer = document.getElementById("youtube-container");

function renderHome() {
  currentView = "home";
  currentCategory = null;
  let html = `<h2 class="section-title">選擇場景</h2><div class="categories">`;
  CATEGORIES.forEach(cat => {
    html += `
      <div class="category-card" data-cat="${cat.id}">
        <h3>${cat.icon} ${cat.name}</h3>
        <p>${cat.desc}</p>
      </div>`;
  });
  html += `</div>`;
  main.innerHTML = html;

  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      showCategory(card.dataset.cat);
    });
  });
}

function getTracksForCategory(catId) {
  if (catId === "lmop") {
    return TRACKS.filter(t => t.tags.includes("lmop") || t.tags.includes("phandalin") || t.tags.includes("wave echo"));
  }
  if (catId === "doip") {
    return TRACKS.filter(t => t.tags.includes("doip") || t.tags.includes("icespire") || t.tags.includes("mountain") || t.tags.includes("cold"));
  }
  return TRACKS.filter(t => t.category === catId);
}

function showCategory(catId) {
  currentView = "category";
  currentCategory = catId;
  const cat = CATEGORIES.find(c => c.id === catId);
  const tracks = getTracksForCategory(catId);

  let html = `<button class="back-btn">← 返回分類</button>`;
  html += `<h2 class="section-title">${cat ? cat.icon + " " + cat.name : catId}</h2>`;
  html += `<div class="tracks">`;

  if (tracks.length === 0) {
    html += `<p>這個分類暫時沒有曲目。</p>`;
  } else {
    tracks.forEach(track => {
      html += `
        <div class="track">
          <div class="track-info">
            <h4>${track.title}</h4>
            <span>${track.source}</span>
          </div>
          <button data-id="${track.id}">播放</button>
        </div>`;
    });
  }
  html += `</div>`;
  main.innerHTML = html;

  document.querySelector(".back-btn").addEventListener("click", renderHome);
  document.querySelectorAll(".track button").forEach(btn => {
    btn.addEventListener("click", () => playTrack(btn.dataset.id));
  });
}

function playTrack(trackId) {
  const track = TRACKS.find(t => t.id === trackId);
  if (!track) return;

  currentTrack = track;
  nowPlaying.textContent = `${track.title} · ${track.source}`;

  // Clear previous
  ytContainer.innerHTML = "";

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${track.yt}?autoplay=1&loop=${loopCheckbox.checked ? 1 : 0}&playlist=${track.yt}&controls=1&modestbranding=1`;
  iframe.allow = "autoplay; encrypted-media";
  iframe.allowFullscreen = true;
  ytContainer.appendChild(iframe);
}

function stopPlayer() {
  ytContainer.innerHTML = "";
  nowPlaying.textContent = "已停止";
  currentTrack = null;
}

function handleSearch() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    renderHome();
    return;
  }

  const results = TRACKS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) ||
    t.source.toLowerCase().includes(q)
  );

  let html = `<button class="back-btn">← 返回</button>`;
  html += `<h2 class="section-title">搜尋結果：${q}</h2><div class="tracks">`;

  if (results.length === 0) {
    html += `<p>沒有找到相關曲目。</p>`;
  } else {
    results.forEach(track => {
      html += `
        <div class="track">
          <div class="track-info">
            <h4>${track.title}</h4>
            <span>${track.source} · ${track.category}</span>
          </div>
          <button data-id="${track.id}">播放</button>
        </div>`;
    });
  }
  html += `</div>`;
  main.innerHTML = html;

  document.querySelector(".back-btn").addEventListener("click", renderHome);
  document.querySelectorAll(".track button").forEach(btn => {
    btn.addEventListener("click", () => playTrack(btn.dataset.id));
  });
}

// Events
searchInput.addEventListener("input", handleSearch);
stopBtn.addEventListener("click", stopPlayer);
loopCheckbox.addEventListener("change", () => {
  if (currentTrack) playTrack(currentTrack.id);
});

// Init
renderHome();