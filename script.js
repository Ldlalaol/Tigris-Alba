function crossGenotypes(a, b) {
      const gametes = (g) => g === "WW" ? ["W","W"] : g === "ww" ? ["w","w"] : ["W","w"];
      const A = gametes(a), B = gametes(b);
      const results = {};
      for (let i=0;i<2;i++){
        for (let j=0;j<2;j++){
          const g = [A[i], B[j]].sort().join("");
          const norm = g === "wW" ? "Ww" : g;
          results[norm] = (results[norm] || 0) + 1;
        }
      }
      return {
        WW: Math.round(((results["WW"]||0)/4)*100),
        Ww: Math.round(((results["Ww"]||0)/4)*100),
        ww: Math.round(((results["ww"]||0)/4)*100),
      };
    }

    // связываем селекты и вывод
    const a = document.getElementById('parentA');
    const b = document.getElementById('parentB');
    const outWW = document.getElementById('resWW');
    const outWw = document.getElementById('resWw');
    const outww = document.getElementById('resww');
    const white = document.getElementById('whiteChance');

    function update() {
      const dist = crossGenotypes(a.value, b.value);
      outWW.textContent = dist.WW + "%";
      outWw.textContent = dist.Ww + "%";
      outww.textContent = dist.ww + "%";
      white.textContent = dist.ww + "%";
    }
    a.addEventListener('change', update);
    b.addEventListener('change', update);

    update();


const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
