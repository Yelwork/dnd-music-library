const TRACKS = [
  // 城鎮 / 酒館
  { id: "stonehill", title: "Stonehill Inn", category: "tavern", tags: ["phandalin", "tavern", "inn", "lmop", "doip"], yt: "_e_lnbX8JY0", source: "Bardify" },
  { id: "cozy-tavern", title: "Cozy Tavern", category: "tavern", tags: ["tavern", "inn", "warm"], yt: "orgikrTCKTc", source: "Bardify" },
  { id: "wandering-bard", title: "The Wandering Bard Tavern", category: "tavern", tags: ["tavern", "inn", "bard"], yt: "HH8pp-RifzY", source: "Bardify" },
  { id: "tavern-dance", title: "Tavern Dance", category: "tavern", tags: ["tavern", "lively", "dance"], yt: "JyyQlYRqvRs", source: "Bardify" },
  { id: "ale-anecdotes", title: "Ale and Anecdotes", category: "tavern", tags: ["tavern", "inn"], yt: "u2jLHdpo2AQ", source: "Bardify" },
  { id: "shady-tavern", title: "Shady Tavern", category: "tavern", tags: ["tavern", "shady", "tense"], yt: "iQiUgrHqB9w", source: "Bardify" },
  { id: "peaceful-village", title: "Peaceful Village", category: "town", tags: ["phandalin", "town", "village"], yt: "jyYnGLh5vL0", source: "Bardify" },
  { id: "large-city", title: "Large City", category: "town", tags: ["city", "neverwinter"], yt: "ddMSMwKQkKI", source: "Bardify" },
  { id: "phandalin-streets", title: "Phandalin Streets", category: "town", tags: ["phandalin", "town", "lmop", "doip"], yt: "pOPLDhKn9cg", source: "Sword Coast Soundscapes" },

  // 荒野旅行
  { id: "wilderness", title: "Wilderness Travel", category: "travel", tags: ["travel", "forest", "road", "lmop"], yt: "bLZApMsorjA", source: "Bardify" },
  { id: "peaceful-travel", title: "Peaceful Travel", category: "travel", tags: ["travel", "calm"], yt: "TZSA5HbOIEA", source: "Bardify" },
  { id: "tense-path", title: "Tense Path", category: "travel", tags: ["travel", "tense", "mystery"], yt: "fv_7EurNAss", source: "Bardify" },
  { id: "mysterious-forest", title: "Mysterious Forest", category: "travel", tags: ["forest", "mystery"], yt: "4Y6n-1XQSfE", source: "Bardify" },
  { id: "forest-amb", title: "Forest Ambience", category: "travel", tags: ["forest", "ambience"], yt: "F8bYaMoQ2sM", source: "Bardify" },
  { id: "adventure", title: "The Adventure Begins", category: "travel", tags: ["intro", "adventure"], yt: "Jikm8CCRbdM", source: "Bardify" },

  // 山區 / 寒冷 (DoIP)
  { id: "frostlands", title: "Desolate Frostlands", category: "mountain", tags: ["mountain", "cold", "icespire", "doip"], yt: "eNDr0IAw2po", source: "Bardify" },
  { id: "arctic", title: "Arctic Wilderness", category: "mountain", tags: ["mountain", "cold", "snow", "doip"], yt: "qD2ahwiPRBk", source: "Bardify" },

  // 洞穴 / 地下城
  { id: "spooky-cave", title: "Spooky Cave", category: "dungeon", tags: ["cave", "dungeon", "spooky"], yt: "LAO0LoXDQLs", source: "Bardify" },
  { id: "cave-amb", title: "Cave Ambience", category: "dungeon", tags: ["cave", "ambience"], yt: "OtfgXgclSxU", source: "Bardify" },
  { id: "dark-cave", title: "Dark, Dank Cave", category: "dungeon", tags: ["cave", "dark", "lmop"], yt: "E72yDpAfrgY", source: "Sword Coast Soundscapes" },
  { id: "wave-echo", title: "Wave Echo Cave", category: "dungeon", tags: ["cave", "wave echo", "lmop"], yt: "Z-pbILkmhMk", source: "Sword Coast Soundscapes" },
  { id: "generic-dungeon", title: "Generic Dungeon", category: "dungeon", tags: ["dungeon", "cave"], yt: "wScEFaoqwPM", source: "Sword Coast Soundscapes" },
  { id: "creepy-dungeon", title: "Creepy Dungeon", category: "dungeon", tags: ["dungeon", "creepy", "tense"], yt: "KZNoPUbaVnk", source: "Bardify" },
  { id: "abandoned-ruins", title: "Abandoned Ruins", category: "dungeon", tags: ["ruins", "dungeon", "lmop"], yt: "205meIww0zg", source: "Bardify" },
  { id: "lost-temple", title: "Lost Temple Ruins", category: "dungeon", tags: ["ruins", "temple"], yt: "cr7MHs7DyXA", source: "Bardify" },

  // 戰鬥
  { id: "ambush", title: "Ambush!", category: "combat", tags: ["combat", "battle", "goblin"], yt: "8Q7cioftmKs", source: "Bardify" },
  { id: "epic-fight", title: "Epic Fight", category: "combat", tags: ["combat", "boss", "intense"], yt: "H8n7K3jABhI", source: "Bardify" },
  { id: "low-combat", title: "Low Level Combat", category: "combat", tags: ["combat", "easy"], yt: "2GX9lVHfnxs", source: "Bardify" },
  { id: "dungeon-boss", title: "Dungeon Boss", category: "combat", tags: ["combat", "boss", "dungeon"], yt: "tBI63CPbW9c", source: "Bardify" },
  { id: "final-boss", title: "Final Boss", category: "combat", tags: ["combat", "boss", "epic"], yt: "mWT11B_-sjQ", source: "Bardify" },
  { id: "chase", title: "Chase", category: "combat", tags: ["combat", "chase", "tense"], yt: "fq8OSrIUST4", source: "Bardify" },

  // 懸疑 / 休息
  { id: "suspense", title: "Suspense", category: "tension", tags: ["suspense", "tense", "mystery"], yt: "EApZmmYg_oQ", source: "Bardify" },
  { id: "mystery", title: "Investigating a Mystery", category: "tension", tags: ["mystery", "investigate"], yt: "7wBzL62Va1k", source: "Bardify" },
  { id: "long-rest", title: "Long Rest", category: "rest", tags: ["rest", "camp", "calm"], yt: "7T3SU4Ht1Yw", source: "Bardify" },
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
  { id: "favorites", name: "我的收藏", desc: "你收藏的曲目", icon: "⭐" },
];

const QUICK_SCENES = [
  { id: "tavern", label: "🍺 酒館", key: "1" },
  { id: "combat", label: "⚔️ 戰鬥", key: "2" },
  { id: "dungeon", label: "🕳️ 洞穴", key: "3" },
  { id: "travel", label: "🌲 旅行", key: "4" },
  { id: "rest", label: "🔥 休息", key: "5" },
  { id: "mountain", label: "🏔️ 山區", key: "6" },
  { id: "town", label: "🏘️ Phandalin", key: "7" },
];

let currentView = "home";
let currentCategory = null;
let ytPlayer = null;
let ytPlayerAmb = null;
let currentTrack = null;
let currentTrackAmb = null;
let currentVolume = parseInt(localStorage.getItem("dnd-volume") || "70");
let currentVolumeAmb = parseInt(localStorage.getItem("dnd-volume-amb") || "40");

const main = document.getElementById("main");
const searchInput = document.getElementById("search");
const nowPlaying = document.getElementById("now-playing");
const nowPlayingAmb = document.getElementById("now-playing-amb");
const stopBtn = document.getElementById("stop-btn");
const stopAmbBtn = document.getElementById("stop-amb-btn");
const loopCheckbox = document.getElementById("loop");
const favBtn = document.getElementById("fav-btn");
const volumeSlider = document.getElementById("volume");
const volumeSliderAmb = document.getElementById("volume-amb");

volumeSlider.value = currentVolume;
volumeSliderAmb.value = currentVolumeAmb;

function getFavorites() {
  return JSON.parse(localStorage.getItem("dnd-favs") || "[]");
}

function saveFavorites(favs) {
  localStorage.setItem("dnd-favs", JSON.stringify(favs));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  saveFavorites(favs);
  if (currentView === "category" && currentCategory === "favorites") {
    showCategory("favorites");
  } else if (currentView === "category") {
    showCategory(currentCategory);
  } else if (currentView === "search") {
    handleSearch();
  }
}

function fadeVolume(player, targetVol, duration = 1800, intervalRef) {
  if (!player || !player.getVolume) return;
  if (intervalRef.current) clearInterval(intervalRef.current);

  const startVol = player.getVolume();
  const steps = 24;
  const stepTime = duration / steps;
  const delta = (targetVol - startVol) / steps;
  let current = startVol;
  let step = 0;

  intervalRef.current = setInterval(() => {
    step++;
    current += delta;
    player.setVolume(Math.max(0, Math.min(100, Math.round(current))));
    if (step >= steps) {
      clearInterval(intervalRef.current);
      player.setVolume(targetVol);
    }
  }, stepTime);
}

const fadeRef = { current: null };
const fadeRefAmb = { current: null };

function initPlayer() {
  if (ytPlayer) return;
  ytPlayer = new YT.Player("youtube-container", {
    height: "48",
    width: "200",
    playerVars: { autoplay: 0, controls: 1, modestbranding: 1, rel: 0 },
    events: { onReady: () => ytPlayer.setVolume(0) }
  });
}

function initPlayerAmb() {
  if (ytPlayerAmb) return;
  ytPlayerAmb = new YT.Player("youtube-container-amb", {
    height: "48",
    width: "200",
    playerVars: { autoplay: 0, controls: 1, modestbranding: 1, rel: 0 },
    events: { onReady: () => ytPlayerAmb.setVolume(0) }
  });
}

function renderHome() {
  currentView = "home";
  currentCategory = null;
  let html = `<div class="quick-scenes">`;
  QUICK_SCENES.forEach(s => {
    html += `<button class="quick-btn" data-cat="${s.id}">${s.label} <small style="opacity:0.6">${s.key}</small></button>`;
  });
  html += `</div>`;
  html += `<h2 class="section-title">選擇場景</h2><div class="categories">`;
  CATEGORIES.forEach(cat => {
    html += `
      <div class="category-card" data-cat="${cat.id}">
        <h3>${cat.icon} ${cat.name}</h3>
        <p>${cat.desc}</p>
      </div>`;
  });
  html += `</div>`;
  main.innerHTML = html;

  document.querySelectorAll(".quick-btn, .category-card").forEach(el => {
    el.addEventListener("click", () => showCategory(el.dataset.cat));
  });
}

function getTracksForCategory(catId) {
  if (catId === "favorites") {
    const favIds = getFavorites();
    return TRACKS.filter(t => favIds.includes(t.id));
  }
  if (catId === "lmop") {
    return TRACKS.filter(t => t.tags.includes("lmop") || t.tags.includes("phandalin") || t.tags.includes("wave echo"));
  }
  if (catId === "doip") {
    return TRACKS.filter(t => t.tags.includes("doip") || t.tags.includes("icespire") || t.tags.includes("mountain") || t.tags.includes("cold"));
  }
  return TRACKS.filter(t => t.category === catId);
}

function renderTrackList(tracks, title, showBack = true) {
  let html = showBack ? `<button class="back-btn" id="category-back-btn">← 返回</button>` : "";
  html += `<h2 class="section-title">${title}</h2><div class="tracks">`;

  if (tracks.length === 0) {
    html += `<p>這個分類暫時沒有曲目。</p>`;
  } else {
    tracks.forEach(track => {
      const favIcon = isFavorite(track.id) ? "⭐" : "☆";
      html += `
        <div class="track">
          <div class="track-info">
            <h4>${track.title}</h4>
            <span>${track.source}</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="fav-toggle" data-id="${track.id}" style="background:#333; color:var(--accent); border:1px solid var(--border); padding:8px 10px; border-radius:6px; cursor:pointer;">${favIcon}</button>
            <button class="play-btn" data-id="${track.id}">音樂</button>
            <button class="amb-btn" data-id="${track.id}">環境</button>
          </div>
        </div>`;
    });
  }
  html += `</div>`;
  main.innerHTML = html;

  // Fix: query within main so we get the correct back button
  if (showBack) {
    const backBtn = main.querySelector("#category-back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", renderHome);
    }
  }
  document.querySelectorAll(".play-btn").forEach(btn => {
    btn.addEventListener("click", () => playTrack(btn.dataset.id, false));
  });
  document.querySelectorAll(".amb-btn").forEach(btn => {
    btn.addEventListener("click", () => playTrack(btn.dataset.id, true));
  });
  document.querySelectorAll(".fav-toggle").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(btn.dataset.id));
  });
}

function showCategory(catId) {
  currentView = "category";
  currentCategory = catId;
  const cat = CATEGORIES.find(c => c.id === catId);
  const tracks = getTracksForCategory(catId);
  const title = cat ? `${cat.icon} ${cat.name}` : catId;
  renderTrackList(tracks, title);
}

function playTrack(trackId, isAmbience = false) {
  const track = TRACKS.find(t => t.id === trackId);
  if (!track) return;

  const initFn = isAmbience ? initPlayerAmb : initPlayer;
  const vol = isAmbience ? currentVolumeAmb : currentVolume;
  const nowEl = isAmbience ? nowPlayingAmb : nowPlaying;
  const fadeRefObj = isAmbience ? fadeRefAmb : fadeRef;

  initFn();

  const doPlay = () => {
    if (isAmbience) currentTrackAmb = track;
    else currentTrack = track;
    nowEl.textContent = `${track.title} · ${track.source}`;

    const p = isAmbience ? ytPlayerAmb : ytPlayer;
    const loop = !isAmbience && loopCheckbox.checked;

    if (!p || !p.loadVideoById) return;

    p.loadVideoById({ videoId: track.yt, startSeconds: 0 });

    setTimeout(() => {
      if (loop && p.loadPlaylist) {
        p.loadPlaylist([track.yt], 0, 0);
        p.setLoop(true);
      }
    }, 300);

    setTimeout(() => {
      fadeVolume(p, vol, 1600, fadeRefObj);
    }, 600);
  };

  const activeTrack = isAmbience ? currentTrackAmb : currentTrack;
  const activePlayer = isAmbience ? ytPlayerAmb : ytPlayer;

  if (activeTrack && activePlayer && activePlayer.getPlayerState && activePlayer.getPlayerState() === 1) {
    fadeVolume(activePlayer, 0, 1200, fadeRefObj);
    setTimeout(doPlay, 1300);
  } else {
    doPlay();
  }
}

function stopPlayer(isAmbience = false) {
  const p = isAmbience ? ytPlayerAmb : ytPlayer;
  const nowEl = isAmbience ? nowPlayingAmb : nowPlaying;
  const fadeRefObj = isAmbience ? fadeRefAmb : fadeRef;

  if (p && p.stopVideo) {
    fadeVolume(p, 0, 800, fadeRefObj);
    setTimeout(() => {
      p.stopVideo();
      nowEl.textContent = isAmbience ? "無環境音" : "已停止";
      if (isAmbience) currentTrackAmb = null;
      else currentTrack = null;
    }, 900);
  } else {
    nowEl.textContent = isAmbience ? "無環境音" : "已停止";
    if (isAmbience) currentTrackAmb = null;
    else currentTrack = null;
  }
}

function handleSearch() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    renderHome();
    return;
  }
  currentView = "search";
  const results = TRACKS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) ||
    t.source.toLowerCase().includes(q)
  );
  renderTrackList(results, `搜尋結果：${q}`);
}

// Events
searchInput.addEventListener("input", handleSearch);
stopBtn.addEventListener("click", () => stopPlayer(false));
stopAmbBtn.addEventListener("click", () => stopPlayer(true));
loopCheckbox.addEventListener("change", () => {
  if (currentTrack) playTrack(currentTrack.id, false);
});
favBtn.addEventListener("click", () => showCategory("favorites"));

volumeSlider.addEventListener("input", (e) => {
  currentVolume = parseInt(e.target.value);
  localStorage.setItem("dnd-volume", currentVolume);
  if (ytPlayer && ytPlayer.setVolume) {
    if (fadeRef.current) clearInterval(fadeRef.current);
    ytPlayer.setVolume(currentVolume);
  }
});

volumeSliderAmb.addEventListener("input", (e) => {
  currentVolumeAmb = parseInt(e.target.value);
  localStorage.setItem("dnd-volume-amb", currentVolumeAmb);
  if (ytPlayerAmb && ytPlayerAmb.setVolume) {
    if (fadeRefAmb.current) clearInterval(fadeRefAmb.current);
    ytPlayerAmb.setVolume(currentVolumeAmb);
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  const key = e.key.toLowerCase();

  const scene = QUICK_SCENES.find(s => s.key === e.key);
  if (scene) {
    e.preventDefault();
    showCategory(scene.id);
    return;
  }

  if (key === " ") {
    e.preventDefault();
    stopPlayer(false);
  }

  if (key === "m") {
    e.preventDefault();
    if (ytPlayer && ytPlayer.isMuted) {
      if (ytPlayer.isMuted()) ytPlayer.unMute();
      else ytPlayer.mute();
    }
  }

  if (key === "escape") {
    renderHome();
  }
});

window.onYouTubeIframeAPIReady = function() {
  initPlayer();
  initPlayerAmb();
};

renderHome();