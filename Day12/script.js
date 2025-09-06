
    const statusEl  = document.getElementById('status');
    const fillEl    = document.getElementById('fill');
    const percentEl = document.getElementById('percent');
    const speedSel  = document.getElementById('speed');

    const startBtn = document.getElementById('start');
    const pauseBtn = document.getElementById('pause');
    const resetBtn = document.getElementById('reset');
    const ffwdBtn  = document.getElementById('ffwd');

    let progress = 0;           // 0..100
    let tick = null;            // interval id
    let startingDelay = null;   // timeout id (before starting)
    let finishingDelay = null;  // timeout id (after reaching 100)

    function updateUI() {
      fillEl.style.width = progress + '%';
      percentEl.textContent = Math.floor(progress) + '%';
      document.querySelector('.progress').setAttribute('aria-valuenow', Math.floor(progress));
    }

    function clearTimers() {
      if (tick) { clearInterval(tick); tick = null; }
      if (startingDelay) { clearTimeout(startingDelay); startingDelay = null; }
      if (finishingDelay) { clearTimeout(finishingDelay); finishingDelay = null; }
    }

    function startDownload() {
      if (tick || startingDelay) return; // already running or waiting

      statusEl.textContent = 'Preparing…';

      // Simulate a small prep delay using setTimeout
      startingDelay = setTimeout(() => {
        startingDelay = null;
        statusEl.textContent = 'Downloading…';

        // setInterval to increment progress periodically
        const baseIncrementPerTick = 0.8;   // percent per tick at normal speed
        const intervalMs = 80;              // tick every 80ms

        tick = setInterval(() => {
          const speedMultiplier = parseFloat(speedSel.value);
          progress = Math.min(100, progress + baseIncrementPerTick * speedMultiplier);
          updateUI();

          if (progress >= 100) {
            clearInterval(tick);
            tick = null;
            statusEl.textContent = 'Processing file…';

            // A short finalizing delay with setTimeout
            finishingDelay = setTimeout(() => {
              finishingDelay = null;
              statusEl.textContent = 'Completed ✅';
            }, 600);
          }
        }, intervalMs);
      }, 500); // initial start delay
    }

    function pauseDownload() {
      if (tick) {
        clearInterval(tick);
        tick = null;
        statusEl.textContent = 'Paused';
      }
    }

    function resetDownload() {
      clearTimers();
      progress = 0;
      updateUI();
      statusEl.textContent = 'Ready';
    }

    function fastForward() {
      // quick bump using setTimeout to show it can queue actions
      setTimeout(() => {
        progress = Math.min(100, progress + 10);
        updateUI();
      }, 0);
    }

    // Wire up controls
    startBtn.addEventListener('click', startDownload);
    pauseBtn.addEventListener('click', pauseDownload);
    resetBtn.addEventListener('click', resetDownload);
    ffwdBtn.addEventListener('click', fastForward);

    // Keyboard accessibility (Space/Enter on focused buttons)
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') e.preventDefault();
    });

    // Initialize
    updateUI();
  