function applyImageFallback(img, fallback) {
  img.onerror = () => {
    img.src = fallback;
  };
}

document.addEventListener("DOMContentLoaded", () => {

  function mulberry32(seed) {
    return function() {
      seed |= 0;
      seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(array, seed) {
    const rand = mulberry32(seed);
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const now = new Date();
  const yearStart = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
  const days = Math.floor((now - yearStart) / 86400000);
  const week = Math.ceil((days + yearStart.getUTCDay() + 1) / 7);
  const seed = week + now.getUTCFullYear() * 100;

  fetch("/listofplaces.json")
    .then(response => {
      if (!response.ok) throw new Error("Place list not configured");
      return response.json();
    })
    .then(data => {
      if (!data || !Array.isArray(data.places) || data.places.length === 0) return;
      const shuffled = seededShuffle(data.places, seed);
      applyCoolPlaces(shuffled.slice(0, 4));
    })
    .catch(() => {
      // Built-in homepage cards remain visible until listofplaces.json is added.
    });

  function applyCoolPlaces(selected) {
    for (let i = 0; i < 4; i++) {
      const place = selected[i];
      const link = document.getElementById(`Place${i + 1}`);
      const img = link.querySelector("img");
      link.href = "/place?id=" + encodeURIComponent(place.id);
      if (img) {
        img.src = place.thumbnail || "/images/games/Fallback.png";
        img.alt = place.name || "Community favorite";
        applyImageFallback(img, "/images/games/Fallback.png");
      }
      const label = link.querySelector(".place-label");
      if (label) label.textContent = place.name || "Community favorite";
    }
  }
});
