// ========== Device Detection Helper ==========
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// ========== Image Sequence Setup (Moved Up to Fix Initialization Error) ==========
function files(index) {
  var data = `
      ./assets/og/0000.webp
     ./assets/og/0001.webp
     ./assets/og/0002.webp
     ./assets/og/0003.webp
     ./assets/og/0004.webp
     ./assets/og/0005.webp
     ./assets/og/0006.webp
     ./assets/og/0007.webp
     ./assets/og/0008.webp
     ./assets/og/0009.webp
     ./assets/og/0010.webp
     ./assets/og/0011.webp
     ./assets/og/0012.webp
     ./assets/og/0013.webp
     ./assets/og/0014.webp
     ./assets/og/0015.webp
     ./assets/og/0016.webp
     ./assets/og/0017.webp
     ./assets/og/0018.webp
     ./assets/og/0019.webp
     ./assets/og/0020.webp
     ./assets/og/0021.webp
     ./assets/og/0022.webp
     ./assets/og/0023.webp
     ./assets/og/0024.webp
     ./assets/og/0025.webp
     ./assets/og/0026.webp
     ./assets/og/0027.webp
     ./assets/og/0028.webp
     ./assets/og/0029.webp
     ./assets/og/0030.webp
     ./assets/og/0031.webp
     ./assets/og/0032.webp
     ./assets/og/0033.webp
     ./assets/og/0034.webp
     ./assets/og/0035.webp
     ./assets/og/0036.webp
     ./assets/og/0037.webp
     ./assets/og/0038.webp
     ./assets/og/0039.webp
     ./assets/og/0040.webp
     ./assets/og/0041.webp
     ./assets/og/0042.webp
     ./assets/og/0043.webp
     ./assets/og/0044.webp
     ./assets/og/0045.webp
     ./assets/og/0046.webp
     ./assets/og/0047.webp
     ./assets/og/0048.webp
     ./assets/og/0049.webp
     ./assets/og/0050.webp
     ./assets/og/0051.webp
     ./assets/og/0052.webp
     ./assets/og/0053.webp
     ./assets/og/0054.webp
     ./assets/og/0055.webp
     ./assets/og/0056.webp
     ./assets/og/0057.webp
     ./assets/og/0058.webp
     ./assets/og/0059.webp
     ./assets/og/0060.webp
     ./assets/og/0061.webp
     ./assets/og/0062.webp
     ./assets/og/0063.webp
     ./assets/og/0064.webp
     ./assets/og/0065.webp
     ./assets/og/0066.webp
     ./assets/og/0067.webp
     ./assets/og/0068.webp
     ./assets/og/0069.webp
     ./assets/og/0070.webp
     ./assets/og/0071.webp
     ./assets/og/0072.webp
     ./assets/og/0073.webp
     ./assets/og/0074.webp
     ./assets/og/0075.webp
     ./assets/og/0076.webp
     ./assets/og/0077.webp
     ./assets/og/0078.webp
     ./assets/og/0079.webp
     ./assets/og/0080.webp
     ./assets/og/0081.webp
     ./assets/og/0082.webp
     ./assets/og/0083.webp
     ./assets/og/0084.webp
     ./assets/og/0085.webp
     ./assets/og/0086.webp
     ./assets/og/0087.webp
     ./assets/og/0088.webp
     ./assets/og/0089.webp
     ./assets/og/0090.webp
     ./assets/og/0091.webp
     ./assets/og/0092.webp
     ./assets/og/0093.webp
     ./assets/og/0094.webp
     ./assets/og/0095.webp
     ./assets/og/0096.webp
     ./assets/og/0097.webp
     ./assets/og/0098.webp
     ./assets/og/0099.webp
     ./assets/og/0100.webp
     ./assets/og/0101.webp
     ./assets/og/0102.webp
     ./assets/og/0103.webp
     ./assets/og/0104.webp
     ./assets/og/0105.webp
     ./assets/og/0106.webp
     ./assets/og/0107.webp
     ./assets/og/0108.webp
     ./assets/og/0109.webp
     ./assets/og/0110.webp
     ./assets/og/0111.webp
     ./assets/og/0112.webp
     ./assets/og/0113.webp
     ./assets/og/0114.webp
     ./assets/og/0115.webp
     ./assets/og/0116.webp
     ./assets/og/0117.webp
     ./assets/og/0118.webp
     ./assets/og/0119.webp
     ./assets/og/0120.webp
    ./assets/og/0121.webp
    ./assets/og/0123.webp
    ./assets/og/0124.webp
    ./assets/og/0125.webp
    ./assets/og/0126.webp
    ./assets/og/0127.webp
    ./assets/og/0128.webp
    ./assets/og/0129.webp
    ./assets/og/0130.webp
    ./assets/og/0131.webp
    ./assets/og/0132.webp
    ./assets/og/0133.webp
    ./assets/og/0134.webp
    ./assets/og/0135.webp
    ./assets/og/0136.webp
    ./assets/og/0137.webp
    ./assets/og/0138.webp
    ./assets/og/0139.webp
    ./assets/og/0140.webp
    ./assets/og/0141.webp
    ./assets/og/0142.webp
    ./assets/og/0143.webp
    ./assets/og/0144.webp
    ./assets/og/0145.webp
    ./assets/og/0146.webp
    ./assets/og/0147.webp
    ./assets/og/0148.webp
    ./assets/og/0149.webp
    ./assets/og/0150.webp
    ./assets/og/0151.webp
    ./assets/og/0152.webp
    ./assets/og/0153.webp
    ./assets/og/0154.webp
    ./assets/og/0155.webp
    ./assets/og/0156.webp
    ./assets/og/0157.webp
    ./assets/og/0158.webp
    ./assets/og/0159.webp
    ./assets/og/0160.webp
    ./assets/og/0122.webp
    ./assets/og/0161.webp
    ./assets/og/0162.webp
    ./assets/og/0163.webp
    ./assets/og/0164.webp
    ./assets/og/0165.webp
    ./assets/og/0166.webp
    ./assets/og/0167.webp
    ./assets/og/0168.webp
    ./assets/og/0169.webp
    ./assets/og/0170.webp
    ./assets/og/0171.webp
    ./assets/og/0172.webp
    ./assets/og/0173.webp
    ./assets/og/0174.webp
    ./assets/og/0175.webp
    ./assets/og/0176.webp
    ./assets/og/0177.webp
    ./assets/og/0178.webp
    ./assets/og/0179.webp
    ./assets/og/0180.webp
    ./assets/og/0181.webp
    ./assets/og/0182.webp
    ./assets/og/0183.webp
    ./assets/og/0184.webp
    ./assets/og/0185.webp
    ./assets/og/0186.webp
    ./assets/og/0187.webp
    ./assets/og/0188.webp
    ./assets/og/0189.webp
    ./assets/og/0190.webp
    ./assets/og/0191.webp
     `;
  const paths = data
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(line => line);
  return (
    paths[index] ||
    `./assets/og/${index.toString().padStart(4, '0')}.webp`
  );
}

const frameCount = 192;
const images = [];
const imageSeq = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);

  if (i === 0) {
    img.onload = () => {
      console.log(
        'First frame loaded successfully. Canvas background should appear now. Path:',
        img.src
      );
      render();
    };
    img.onerror = () => {
      console.error(
        'Failed to load first frame. Path:',
        img.src,
        '. Check file existence and path. Rendering black fallback.'
      );
      render();
    };
  } else {
    img.onload = () => console.log(`Frame ${i} loaded.`);
    img.onerror = () =>
      console.warn(`Failed to load frame ${i}. Path:`, img.src);
  }
}

// ========== Locomotive Scroll Setup ==========
let locoScroll; // Declare globally

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const smoothScrolling = window.innerWidth > 768 && !isTouchDevice();

  if (smoothScrolling) {
    // Only create Locomotive Scroll on desktop
    locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    // Sync Locomotive with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    window.locoScroll = locoScroll;
  } else {
    // On mobile, no Locomotive Scroll, use native scroll
    locoScroll = null;
    window.locoScroll = null;
  }
}
locomotive();

// ========== Canvas Setup ==========
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function setCanvasSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  console.log('Canvas resized and rendered.');
}

let resizeTimeout;
window.addEventListener('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setCanvasSize, 100);
});
setCanvasSize();
// ===== MOBILE CANVAS SAFETY DRAW =====
window.addEventListener('load', () => {
  if (isTouchDevice()) {
    console.log('Mobile device detected: forcing initial canvas render.');
    if (images[0].complete) {
      render(); // draw first frame immediately if loaded
    } else {
      images[0].addEventListener('load', render);
    }
  }
});

console.log(
  'Canvas initialized with size:',
  canvas.width,
  'x',
  canvas.height
);

// ========== ScrollTrigger Animation ==========
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    scrub: isTouchDevice() ? 2 : 0.15,
    trigger: '#page>canvas',
    start: 'top top',
    end: '600% top',
    scroller: locoScroll ? '#main' : undefined  // Use #main on desktop, window on mobile
  },
  onUpdate: render
});

// ========== Render ==========
function render() {
  const currentFrame = Math.floor(imageSeq.frame);
  if (
    images[currentFrame] &&
    images[currentFrame].complete &&
    images[currentFrame].naturalWidth > 0
  ) {
    scaleImage(images[currentFrame], context);
    console.log('Rendered frame:', currentFrame, 'Path:', images[currentFrame].src);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    console.warn(
      'Rendered fallback black background (frame',
      currentFrame,
      'not ready). Path attempted:',
      images[currentFrame]?.src || 'N/A'
    );
  }
}

function scaleImage(img, ctx) {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);

  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

// ========== ScrollTrigger Pinning ==========
ScrollTrigger.create({
  trigger: '#page>canvas',
  pin: true,
  scroller: locoScroll ? '#main' : undefined,
  start: 'top top',
  end: '600% top'
});

if (!isTouchDevice()) {
  ['#page1', '#page2', '#page3'].forEach(page => {
    gsap.to(page, {
      scrollTrigger: {
        trigger: page,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scroller: '#main'
      }
    });
  });
}



// ========== Smooth Scroll for Nav Links ==========
document.querySelectorAll('.nav-center a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (!targetEl) return;

    if (window.locoScroll && typeof window.locoScroll.scrollTo === 'function') {
      window.locoScroll.scrollTo(targetEl);
    } else {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== HAMBURGER MENU FUNCTIONALITY =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      if (window.locoScroll && typeof window.locoScroll.scrollTo === 'function') {
        window.locoScroll.scrollTo(targetEl);
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }

      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}

if (isTouchDevice()) {
  ScrollTrigger.getAll().forEach(trigger => trigger.disable(true));
  console.log("ScrollTriggers disabled for mobile");
}


// Fade-in observer for glass sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

['#left-text', '#text3'].forEach(id => {
  const el = document.querySelector(id);
  if (el) observer.observe(el);
});

// ===== GLOBAL FADE-IN OBSERVER =====
// ===== GLOBAL FADE-IN OBSERVER =====
// exclude #loop h1 (hero section text)
const fadeElements = document.querySelectorAll(
  '#page h3:not(#loop h3), #page h4:not(#loop h4), #page1 > div, #services-page > *, #page3 > div, footer'
);

fadeElements.forEach(el => el.classList.add('fade-in'));


const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -10% 0px' });


fadeElements.forEach(el => fadeObserver.observe(el));

console.log('Canvas initialized on mobile:', canvas.width, 'x', canvas.height);

setTimeout(() => {
  console.log('Canvas alpha test:', context.getImageData(10, 10, 1, 1).data);
}, 2000);

/* ===== MOBILE CANVAS + SCROLL FIX ===== */
if (isTouchDevice()) {
  // Re-create the ScrollTrigger that drives the frame animation for mobile only
  ScrollTrigger.getAll().forEach(t => t.kill());  // remove the desktop triggers

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.5,             // gentle smoothing on mobile
      trigger: "#page>canvas",
      start: "top top",
      end: "400% top",        // shorter distance for native scroll
      scroller: window        // ✅ explicitly use native scroll
    },
    onUpdate: render
  });

  // Don’t pin each page on mobile; let them flow naturally
  console.log("Mobile ScrollTrigger reset: using native scroll and free flow.");
}


/* ===== FIX: Force Services Section Visibility on Mobile ===== */
if (isTouchDevice()) {
  const serviceElements = document.querySelectorAll('#services-page, #services-page *');
  serviceElements.forEach(el => {
    el.classList.add('visible'); // make sure fade-in applies
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  console.log('Services section made visible on mobile.');
}


/* ===== FINAL MOBILE CANVAS FRAME FIX ===== */
if (isTouchDevice()) {
  // Kill any old triggers
  ScrollTrigger.getAll().forEach(t => t.kill());

  // Create new one for native scroll
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#page>canvas",
      start: "top top",
      end: "400% top",
      scrub: 1.2,
      scroller: window, // native scroll
      invalidateOnRefresh: true
    },
    onUpdate: render
  });

  // Ensure canvas pinned correctly
  ScrollTrigger.create({
    trigger: "#page>canvas",
    start: "top top",
    end: "400% top",
    pin: true,
    scrub: true,
    scroller: window
  });

  console.log("✅ Mobile scroll animation reinitialized with native ScrollTrigger.");
}
