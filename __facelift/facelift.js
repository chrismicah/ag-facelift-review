(() => {
  'use strict';

  // Resolve the site root from this script's own URL so injected internal
  // links work on the origin root (production, local proxy) and on subpath
  // hosts like GitHub Pages (/ag-facelift-review/...).
  const SITE_ROOT = (document.currentScript?.src || '').replace(
    /\/(?:__facelift|wp-content\/plugins\/arcguard-facelift\/assets)\/facelift\.js.*$/,
    ''
  );
  const siteHref = path => (path.startsWith('/') ? `${SITE_ROOT}${path}` : path);

  const PAGE_CONFIG = {
    '/': {
      key: 'home',
      title: 'Welding Connector Safety Device | Arc Guard™',
      description:
        'Arc Guard™ is a patented retrofit for welding lead connectors that helps reduce exposed-end and accidental-separation hazards. Request a walkthrough.',
      h1: 'A Patented Safety Retrofit for Welding Lead Connectors',
      eyebrow: 'Patented · U.S. Patent No. 12,671,212 B1',
      lede:
        'Arc Guard™ adds a spring-assisted cover and locking components to compatible welding lead connectors—helping crews address exposed-end and unintended-separation hazards at the connection.',
      primary: ['Request a Site Walkthrough', '/contact/'],
      secondary: ['See the Connector Design', '/products/']
    },
    '/products/': {
      key: 'product',
      title: 'Welding Lead Locking Sleeve & Connector Cover | Arc Guard™',
      description:
        'See how Arc Guard™ adds a spring-assisted cover and locking sleeves to compatible welding lead connectors. Review features, fit, installation, and demo.',
      h1: 'Lock and Cover Welding Lead Connections with One Retrofit',
      eyebrow: 'Product · Patented · U.S. Patent No. 12,671,212 B1',
      lede:
        'Protected by U.S. Patent No. 12,671,212 B1. Designed to retrofit compatible welding lead connectors; confirm connector model, dimensions, operating conditions, and installation requirements before deployment.',
      primary: ['Watch the Assembly Demo', '#arc-guard-assembly-demo'],
      secondary: ['Review Fit & Installation FAQ', '#arcguard-faq']
    },
    '/welding-safety-solutions-by-industries/': {
      key: 'industries',
      title: 'Industrial Welding Safety Applications | Arc Guard™',
      description:
        'Explore connector-risk applications for oil and gas, industrial maintenance, manufacturing, and steel work. Evaluate fit with your site safety team.',
      h1: 'Welding Connector Risk Controls by Industry',
      eyebrow: 'Oil & gas · Construction · Manufacturing',
      lede:
        'Evaluate a connector-level safeguard within layered hot-work, work-at-height, inspection, PPE, and site-specific hazard controls.',
      primary: ['Discuss a Site-Specific Evaluation', '/contact/'],
      secondary: ['Review the Connector Design', '/products/']
    },
    '/resources/': {
      key: 'resources',
      title: 'Welding Connector Safety Resources | Arc Guard™',
      description:
        'Practical guides on welding lead condition, connector protection, hot-work risk, and dropped-object prevention for industrial safety teams.',
      h1: 'Welding Connector Safety Resources',
      eyebrow: 'Field guides · Rules · Controls',
      lede:
        'Use these resources to examine connector condition, unintended separation, hot-work planning, work at height, and the role of physical safeguards within a broader safety program.',
      primary: ['Review Product Fit', '/products/'],
      secondary: ['Request a Walkthrough', '/contact/']
    },
    '/about/': {
      key: 'about',
      title: 'About Arc Guard™ | Welding Connector Safety Innovation',
      description:
        'Meet the veteran-owned company behind Arc Guard™, a patented welding connector safeguard developed from field experience for compatible welding leads.',
      h1: 'Built from Front-Line Welding Experience',
      eyebrow: 'Louisiana roots · Field-led design',
      lede:
        'Arc Guard™ grew from a practical job-site observation: a small connector-level condition can deserve the same deliberate attention as the larger welding system around it.',
      primary: ['See the Arc Guard Design', '/products/'],
      secondary: ['Request a Walkthrough', '/contact/']
    },
    '/contact/': {
      key: 'contact',
      title: 'Request a Welding Connector Safety Walkthrough | Arc Guard™',
      description:
        'Discuss connector fit, work conditions, and an Arc Guard™ evaluation plan with our team. Request a site walkthrough or product demonstration.',
      h1: 'Request an Arc Guard Site Walkthrough',
      eyebrow: 'Baton Rouge · Product evaluation',
      lede:
        'Discuss your connector configuration, work environment, and evaluation plan with Arc Guard.',
      primary: ['Request a Site Walkthrough', '#arcguard-contact-start'],
      secondary: ['Review Product Fit', '/products/']
    }
  };

  const FAQS = [
    {
      question: 'What is Arc Guard™?',
      answer:
        'Arc Guard™ is a patented welding connector safety device designed to attach directly to compatible welding lead connectors. Its spring-assisted cap and locking mechanism create a physical barrier intended to help reduce accidental contact with the female connector opening and unintended separation of connected leads. Arc Guard™ is covered by U.S. Patent No. 12,671,212 B1, issued June 30, 2026.'
    },
    {
      question: 'How does it improve safety?',
      answer:
        'When the leads are disconnected, the spring-assisted cap is designed to cover the female connector opening. When the leads are connected, the locking components are designed to help resist unintended separation. These features are intended to reduce connector-related contact and dropped-object risk when the device is properly fitted, installed, inspected, and used.'
    },
    {
      question: 'Does it replace PPE or safety procedures?',
      answer:
        'No. Arc Guard™ is a supplemental physical safeguard. It does not replace a site-specific hazard assessment or any PPE, training, inspection, hot-work, lockout/tagout, fire-watch, or other requirement that applies to the task. The employer and site safety team remain responsible for selecting and verifying controls.'
    },
    {
      question: 'What welding connectors is it compatible with?',
      answer:
        'Arc Guard™ is designed to retrofit compatible welding lead connectors. Confirm the connector make, model, size, condition, and service environment before use.'
    },
    {
      question: 'Does it require special tools to install?',
      answer:
        'No. Arc Guard™ installs quickly on existing welding leads without any special tools. Installation is simple and field-friendly, requiring only a standard Phillips-head screwdriver.'
    },
    {
      question: 'Where is it most useful?',
      answer:
        'Arc Guard™ is designed for welding work where a hazard assessment has identified risk from unintended connector separation, accidental contact with the female connector opening, or connector components falling from elevation. Potential applications include industrial maintenance, fabrication, structural steel work, and oil-and-gas turnaround activities. Use remains subject to site-specific equipment and location requirements.'
    },
    {
      question: 'How does it support OSHA and NFPA 70E programs?',
      answer:
        "Arc Guard™ gives safety teams a visible, documentable physical safeguard to evaluate within their hierarchy-of-controls process. It does not by itself establish or guarantee compliance with OSHA, NFPA 70E, or site requirements. Applicability and control selection must be determined through the employer's site- and task-specific hazard assessment."
    },
    {
      question: 'How do I order or request a demo?',
      answer:
        'Contact Arc Guard to arrange a product walkthrough, sample evaluation, or program-level discussion.'
    }
  ];

  const ALT_TEXT_BY_FRAGMENT = [
    ['Product-Image-1', 'Red Arc Guard locking sleeve and spring-assisted welding connector cover'],
    ['TM-Vector-LOGO-with-Phrase', 'Arc Guard logo with “No Arc. No Drop. No Excuse.”'],
    ['generated-image-7', 'Arc Guard company logo'],
    ['ArcGuard-logo-white-bg', 'Arc Guard logo'],
    ['welder-background-1', 'Welder working with industrial welding leads'],
    ['ed-boilermaker-confined-space-1', 'Boilermaker welding in a confined industrial work area'],
    ['elevated-welding', 'Welder working from an elevated structural-steel position'],
    ['small-space-welding', 'Welder working in a restricted fabrication space'],
    ['alain-pham-P_qvsF7Yodw', 'Oil and gas industrial infrastructure'],
    ['SS-pot-fab', 'Stainless-steel fabrication work'],
    ['CS-nozzle-backweld', 'Industrial manufacturing weld preparation'],
    ['safety-slogan', 'Arc Guard field-safety message'],
    ['partner_logos', 'Arc Guard partner and industry logos'],
    ['Prevent-Banner', 'Arc Guard safety-message banner']
  ];

  const normalizePath = pathname => {
    pathname = pathname.replace(/^\/ag-facelift-review/, '') || '/';
    if (pathname === '/') return pathname;
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  };

  const config = PAGE_CONFIG[normalizePath(window.location.pathname)];
  if (!config || !document.body) return;

  const sourceAttribute = element =>
    element.getAttribute('src') || element.getAttribute('data-src') || element.getAttribute('href') || '';

  const mediaInventory = () => {
    const media = [...document.querySelectorAll('img, video, source, iframe')]
      .map(element => ({
        tag: element.tagName.toLowerCase(),
        url: sourceAttribute(element)
      }))
      .filter(item => item.url)
      .sort((a, b) => `${a.tag}:${a.url}`.localeCompare(`${b.tag}:${b.url}`));

    const documents = [...document.querySelectorAll('a[href]')]
      .map(anchor => anchor.getAttribute('href') || '')
      .filter(href => /\.(?:pdf|docx?)(?:[?#]|$)/i.test(href))
      .sort();

    return { media, documents };
  };

  const inventoryContainsSource = (source, current) => {
    const containsAll = (expected, actual, keyFor) => {
      const counts = new Map();
      actual.forEach(item => {
        const key = keyFor(item);
        counts.set(key, (counts.get(key) || 0) + 1);
      });
      return expected.every(item => {
        const key = keyFor(item);
        const remaining = counts.get(key) || 0;
        if (remaining < 1) return false;
        counts.set(key, remaining - 1);
        return true;
      });
    };

    return containsAll(source.media, current.media, item => `${item.tag}:${item.url}`)
      && containsAll(source.documents, current.documents, item => item);
  };

  const mediaBefore = [...document.querySelectorAll('img, video, iframe, source')];
  mediaBefore.forEach((node, index) => {
    node.dataset.agfxPreservedMedia = String(index + 1);
  });

  const initialInventory = mediaInventory();
  let sourceInventory = initialInventory;
  window.__AGFX_AUDIT = {
    route: config.key,
    sourceInventory,
    finalInventory: null,
    mediaParity: null,
    mediaNodesPreserved: null,
    introTextFits: null,
    injectedMediaOverlaps: [],
    horizontalOverflow: null,
    productAssemblyCentered: null,
    productFaqPlacement: null,
    productCorrectedFaqAction: null,
    legacyFaqHref: null,
    homeCarouselState: null,
    homeEmptyCarouselCollapsed: null,
    resourceImagePresentation: null
  };

  document.body.classList.add('agfx-facelift', `agfx-page-${config.key}`);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
  document.body.dataset.agfxPage = config.key;

  const ensureMeta = (name, value) => {
    let meta = document.head.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.append(meta);
    }
    meta.content = value;
  };

  document.title = config.title;
  ensureMeta('description', config.description);

  const qualifyRiskyCopy = () => {
    const replacements = [
      [/patent[ -]pending/gi, 'patented'],
      [/help(?:s)? aid in the elimination of/gi, 'helps reduce'],
      [/aid in the elimination of/gi, 'help reduce'],
      [/is designed to helps reduce/gi, 'is designed to help reduce'],
      [/helps? prevent arc flash and dropped objects/gi,
        'is designed to help reduce connector-related contact and separation hazards'],
      [/The spring-assisted cap automatically covers the energized female end when disconnected/gi,
        'The spring-assisted cap is designed to cover the female connector opening when disconnected'],
      [/the cap and collar lock together preventing unintentional separation/gi,
        'the locking components are designed to help resist unintended separation'],
      [/preventing unintentional separation/gi, 'designed to help resist unintended separation'],
      [/permanently secured/gi, 'designed to help resist unintended separation when properly fitted'],
      [/Prevents Arcing/gi, 'Helps Reduce Unintentional Connector Arcing'],
      [/eliminating unnecessary exposure/gi, 'helping reduce unnecessary exposure'],
      [/by eliminating exposure/gi, 'by helping reduce exposed-end risk'],
      [/Universal Fit/gi, 'Verify Compatible Fit'],
      [/Specific compatibility details are listed on the product datasheet\.?/gi, ''],
      [/secure your site today/gi, 'discuss a site-specific evaluation plan'],
      [/constant arc-ignition and dropped-object risk[^.]*\.?/gi,
        'contact, arcing, and dropped-component scenarios that require layered hot-work planning.'],
      [/PPE alone can(?:not|'t) fully eliminate[^.]*\.?/gi,
        'should be addressed through layered site controls that include PPE, inspection, procedures, and task-specific evaluation.']
    ];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, noscript, textarea, pre, code')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      let next = node.nodeValue;
      for (const [pattern, replacement] of replacements) next = next.replace(pattern, replacement);
      if (next !== node.nodeValue) node.nodeValue = next.replace(/\s{2,}/g, ' ');
    }
  };

  const correctIndustryCopy = () => {
    if (config.key !== 'industries') return;
    const root = document.querySelector('.elementor-element-86aa59e');
    if (!root) return;

    const changes = [
      [
        'Welding and hot work across fabrication shops, heavy manufacturing, and plant maintenance',
        'Welding and hot work across critical-infrastructure builds and maintenance environments—including data centers, hospitals, telecom facilities, and large commercial projects.'
      ],
      [
        'Welding and hot work in critical-infrastructure environments',
        'Welding and hot work across fabrication shops, heavy manufacturing, and plant maintenance—often during shutdowns, turnarounds, and multi-shift production.'
      ],
      [
        'Arc Guard™ helps reduce welding-lead connector incidents during maintenance and modification work, supporting both safety and uptime.',
        'Arc Guard™ provides a connector-level safeguard for teams to evaluate alongside inspection, training, PPE, and operating procedures at each weld station.'
      ]
    ];

    for (const element of root.querySelectorAll('p, li, .elementor-widget-text-editor')) {
      const text = element.textContent.trim();
      const match = changes.find(([current]) => text.includes(current));
      if (!match) continue;
      const [current, replacement] = match;
      element.textContent = text.startsWith('#') ? `${text.slice(0, 3)}${replacement}` : replacement;
      element.dataset.agfxCopyCorrected = 'true';
    }
  };

  const correctProductCopy = () => {
    if (config.key !== 'product') return;
    const root = document.querySelector('.elementor-401');
    if (!root) return;

    const replacements = [
      [
        'Shields the female connector whenever it is not in use.',
        'The spring-assisted cap is designed to cover the female connector opening when disconnected.'
      ],
      [
        'Secures the male and female ends together—even if the internal connection is not fully engaged as designed by the manufacturer',
        'Locking components are designed to help resist unintended separation when compatible connectors are correctly fitted, installed, inspected, and used.'
      ],
      [
        'In hydrocarbon and other flammable environments by helping control exposed energized ends.',
        'Helps reduce accidental contact and exposed-end risk at a disconnected female connector; site-specific hot-work controls still apply.'
      ],
      [
        'Minimizes the risk of connectors falling and causing injuries, equipment damage, or unplanned outages.',
        'Designed to help reduce connector-separation-related dropped-component risk as one part of layered site controls.'
      ],
      [
        'By helping reduce unnecessary exposure at the connector.',
        'Helps reduce accidental contact and exposed-end risk when the female connector is disconnected.'
      ]
    ];

    for (const element of root.querySelectorAll('li, p')) {
      const text = element.textContent.trim();
      const match = replacements.find(([current]) => text.includes(current));
      if (!match) continue;
      element.textContent = match[1];
      element.dataset.agfxCopyCorrected = 'true';
    }

    for (const heading of root.querySelectorAll('h5, h6')) {
      if (/Drop[‑-]Prevention Design/i.test(heading.textContent)) {
        heading.textContent = heading.textContent.replace(/Drop[‑-]Prevention Design/i, 'Connector-Retention Design');
      }
    }
  };

  const correctHomeCopy = () => {
    if (config.key !== 'home') return;
    const root = document.querySelector('.elementor-14043');
    if (!root) return;

    const exact = [
      [
        'THE PROBLEM — ARC FLASH & DROPPED OBJECTS',
        'THE PROBLEM — CONNECTOR ARC EXPOSURE & DROPPED OBJECTS'
      ],
      [
        'Spring-assisted cap mechanism engages automatically and applies downward force to stay engaged in connected collar.',
        'The spring-assisted cap is designed to cover the female connector opening when disconnected.'
      ],
      [
        'When disconnected, the cap springs closed preventing physical contact with the exposed female end.',
        'When disconnected, the cap is designed to cover the female connector opening and help reduce accidental contact.'
      ],
      [
        'Helps Reduce Unintentional Connector Arcing by helping reduce exposed-end risk.',
        'Helps reduce accidental contact and exposed-end risk at the connector.'
      ],
      [
        'Verify Compatible Fit installs directly onto welding connectors — no specialty tools needed.',
        'Designed to retrofit compatible welding lead connectors. Confirm make, model, dimensions, condition, service environment, and installation requirements.'
      ]
    ];

    for (const element of root.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li')) {
      const text = element.textContent.trim();
      const match = exact.find(([current]) => text === current || text.includes(current));
      if (!match) continue;
      element.textContent = match[1];
      element.dataset.agfxCopyCorrected = 'true';
    }
  };

  const correctAboutCopy = () => {
    if (config.key !== 'about') return;
    const root = document.querySelector('.elementor-14346');
    if (!root) return;

    for (const element of root.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .elementor-heading-title')) {
      const text = element.textContent.trim();
      if (/^Resonate with our Story\?$/i.test(text)) {
        element.textContent = 'Bring the field conversation to your site.';
        element.dataset.agfxCopyCorrected = 'true';
      }
      if (/Our mission is to develop cutting-edge safety equipment that protects workers/i.test(text)) {
        element.textContent =
          'Our mission is to develop practical safety equipment that helps teams address connector-related hazards. Arc Guard™ gives safety and operations leaders a physical safeguard to evaluate alongside site-specific procedures, training, inspection, and PPE—supporting thoughtful decisions about safety and operational risk.';
        element.dataset.agfxCopyCorrected = 'true';
      }
    }
  };

  const correctContactCopyAndMap = () => {
    if (config.key !== 'contact') return;
    const root = document.querySelector('.elementor-553');
    if (!root) return;

    for (const element of root.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .elementor-heading-title')) {
      const text = element.textContent.trim();
      if (/Want To Explore A Safety Assessment For Your Facility\?/i.test(text)) {
        element.textContent =
          'Discuss your connector configuration, work environment, and evaluation plan with Arc Guard.';
        element.dataset.agfxCopyCorrected = 'true';
      }
      if (/Click The Link And See How We Can/i.test(text)) {
        element.textContent = 'Choose a walkthrough to review fit, site conditions, and practical next steps.';
        element.dataset.agfxCopyCorrected = 'true';
      }
    }

    const map = document.querySelector('.elementor-element-aff048a');
    if (map && !document.querySelector('.agfx-map-intro')) {
      const section = document.createElement('section');
      section.className = 'agfx-map-intro agfx-reveal';
      section.dataset.agfxInjected = 'map-intro';
      section.innerHTML = `
        <div class="agfx-map-intro__inner">
          <div>
            <p class="agfx-section-label">Arc Guard · Baton Rouge, Louisiana</p>
            <h2>Start with the work conditions and connector details.</h2>
          </div>
          <div>
            <p>11616 Industriplex Blvd, Suite 18<br>Baton Rouge, LA 70809</p>
            <a class="agfx-map-link" href="https://www.google.com/maps/search/?api=1&amp;query=11616%20Industriplex%20Blvd%20Suite%2018%20Baton%20Rouge%20LA%2070809">Open the location in Google Maps</a>
          </div>
        </div>`;
      map.before(section);
    }
  };

  const demoteExistingH1s = () => {
    for (const heading of [...document.querySelectorAll('h1')]) {
      const replacement = document.createElement('h2');
      for (const attribute of heading.attributes) {
        replacement.setAttribute(attribute.name, attribute.value);
      }
      replacement.classList.add('agfx-original-title');
      replacement.innerHTML = heading.innerHTML;
      heading.replaceWith(replacement);
    }
  };

  const splitHeadingWords = heading => {
    const label = heading.textContent.trim();
    heading.setAttribute('aria-label', label);
    heading.textContent = '';
    label.split(/\s+/).forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'agfx-word';
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--agfx-word-index', String(index));
      span.textContent = word;
      heading.append(span, document.createTextNode(' '));
    });
  };

  const buildIntro = () => {
    const intro = document.createElement('section');
    intro.className = 'agfx-intro agfx-reveal';
    intro.dataset.agfxInjected = 'intro';
    intro.setAttribute('aria-labelledby', `agfx-${config.key}-title`);
    intro.innerHTML = `
      <div class="agfx-intro__inner">
        <div class="agfx-intro__copy">
          <p class="agfx-eyebrow">${config.eyebrow}</p>
          <h1 id="agfx-${config.key}-title">${config.h1}</h1>
        </div>
        <div class="agfx-intro__side">
          <p class="agfx-intro__lede">${config.lede}</p>
          <div class="agfx-actions">
            <a class="agfx-button agfx-magnet" href="${siteHref(config.primary[1])}">${config.primary[0]}</a>
            <a class="agfx-button agfx-button--secondary" href="${siteHref(config.secondary[1])}">${config.secondary[0]}</a>
          </div>
        </div>
      </div>`;

    const content = document.querySelector('#content, .site-content, main');
    if (content) content.prepend(intro);
    else document.body.prepend(intro);

    splitHeadingWords(intro.querySelector('h1'));
    return intro;
  };

  const addAltText = () => {
    for (const image of document.querySelectorAll('img')) {
      if ((image.getAttribute('alt') || '').trim()) continue;
      const source = sourceAttribute(image);
      const mapping = ALT_TEXT_BY_FRAGMENT.find(([fragment]) => source.includes(fragment));
      image.alt = mapping ? mapping[1] : 'Arc Guard welding connector safety information';
    }
  };

  const refineResourcePostImages = () => {
    if (config.key !== 'resources') return;

    const specifications = [
      ['post-15765', 'lead', 'Arc Guard logo for ignition risk at welding connectors'],
      ['post-730', 'compact', 'Arc Guard logo for welding connector spark safety'],
      ['post-731', 'compact', 'Arc Guard logo for hot-connector equipment cost']
    ];

    for (const [postId, role, alt] of specifications) {
      const article = document.getElementById(postId);
      const image = article?.querySelector('.entry-thumb img');
      if (!article || !image) continue;
      article.dataset.agfxResourceRole = role;
      image.dataset.agfxResourceRole = role;
      image.alt = alt;
    }
  };

  const manageHomeEmptyCarousel = () => {
    if (config.key !== 'home') return;

    const container = document.querySelector('.elementor-element-2f132f4');
    const widget = container?.querySelector('.elementor-element-35f70ee');
    const wrapper = widget?.querySelector('.swiper-wrapper');
    if (!container || !widget || !wrapper) {
      window.__AGFX_AUDIT.homeCarouselState = 'missing-source-widget';
      return;
    }

    const hasSubstantiveSlide = () => {
      if (wrapper.querySelector('img[src], video[src], video source[src], iframe[src]')) return true;

      const linkedContent = [...wrapper.querySelectorAll('a[href]')].some(anchor =>
        Boolean(anchor.textContent.trim() || anchor.querySelector('img, video, iframe'))
      );
      if (linkedContent) return true;

      return [...wrapper.querySelectorAll('article, .e-loop-item, [data-elementor-type="loop-item"]')].some(
        item => Boolean(item.textContent.trim() || item.querySelector('img, video, iframe, a[href]'))
      );
    };

    const applyState = () => {
      const hasContent = hasSubstantiveSlide();
      container.classList.toggle('agfx-empty-carousel', !hasContent);
      container.dataset.agfxCarouselState = hasContent ? 'content' : 'empty-collapsed';
      widget.setAttribute('aria-hidden', hasContent ? 'false' : 'true');
      window.__AGFX_AUDIT.homeCarouselState = container.dataset.agfxCarouselState;
      window.__AGFX_AUDIT.homeEmptyCarouselCollapsed = !hasContent;
      document.body.dataset.agfxHomeCarousel = hasContent ? 'content' : 'empty-collapsed';
    };

    applyState();
    const observer = new MutationObserver(applyState);
    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ['href', 'src'],
      childList: true,
      subtree: true
    });
    window.setTimeout(applyState, 250);
    window.setTimeout(applyState, 1000);
  };

  const improveMediaSemantics = () => {
    const videos = [...document.querySelectorAll('video')];
    videos.forEach((video, index) => {
      video.preload = 'metadata';
      if (!video.getAttribute('aria-label')) {
        video.setAttribute(
          'aria-label',
          index === 0 && config.key === 'home'
            ? 'Arc Guard brand film'
            : 'Arc Guard product field presentation'
        );
      }
    });

    for (const iframe of document.querySelectorAll('iframe')) {
      const src = sourceAttribute(iframe);
      if (/vimeo\.com/i.test(src) && !iframe.title) iframe.title = 'Arc Guard Assembly Demo';
      if (/google\.com\/maps/i.test(src) && !iframe.title) {
        iframe.title = 'Arc Guard office location in Baton Rouge, Louisiana';
      }
    }

    const assembly = document.querySelector('.elementor-element-a110975');
    if (assembly) assembly.id = 'arc-guard-assembly-demo';

    const captions = [
      ['.elementor-element-8587a0e', 'Arc Guard locking sleeve and spring-assisted connector cover.'],
      ['.elementor-element-a110975', 'Arc Guard Assembly Demo · Vimeo · existing full video.']
    ];
    for (const [selector, copy] of captions) {
      const media = document.querySelector(selector);
      if (!media || media.nextElementSibling?.classList.contains('agfx-media-caption')) continue;
      const caption = document.createElement('p');
      caption.className = 'agfx-media-caption';
      caption.textContent = copy;
      media.after(caption);
    }
  };

  const improveLinksAndActions = () => {
    for (const anchor of document.querySelectorAll('a')) {
      const href = anchor.getAttribute('href') || '';
      const text = anchor.textContent.trim();

      if (/linkedin\.com/i.test(href)) anchor.setAttribute('aria-label', 'Arc Guard on LinkedIn');
      if (/facebook\.com/i.test(href)) anchor.setAttribute('aria-label', 'Arc Guard on Facebook');

      if (/^schedule a consult$/i.test(text)) {
        anchor.textContent =
          config.key === 'industries'
            ? 'Evaluate Arc Guard for This Application'
            : 'Request a Site Walkthrough';
      }

      if (/^read more\b/i.test(text)) {
        const article = anchor.closest('article');
        const title = article?.querySelector('h2, h3')?.textContent.trim();
        if (title) anchor.textContent = `Read: ${title}`;
      }
    }

    if (config.key === 'contact') {
      const start = document.querySelector('.elementor-element-898bff1');
      if (start) start.id = 'arcguard-contact-start';

      for (const element of document.querySelectorAll('.elementor-widget-text-editor, p')) {
        if (!element.innerHTML.includes('J.Crumholt@ArcGuardInc.com')) continue;
        if (element.querySelector('a[href^="mailto:"]')) continue;
        element.innerHTML = element.innerHTML.replace(
          'J.Crumholt@ArcGuardInc.com',
          '<a href="mailto:J.Crumholt@ArcGuardInc.com">J.Crumholt@ArcGuardInc.com</a>'
        );
      }
    }
  };

  const addProductDocumentState = () => {
    if (config.key !== 'product') return;
    const faqLink = [...document.querySelectorAll('a[href]')].find(anchor =>
      /ArcGuard_FAQ|frequently.*asked/i.test(anchor.getAttribute('href') || '')
    );
    const complianceLink = [...document.querySelectorAll('a[href]')].find(anchor =>
      /compliance|standards/i.test(anchor.getAttribute('href') || '')
    );

    if (faqLink) {
      const legacyHref = faqLink.getAttribute('href') || '';
      const label = faqLink.querySelector('.elementor-button-text') || faqLink;
      label.textContent = 'Legacy FAQ PDF · unchanged';
      faqLink.dataset.agfxLegacyFaq = 'true';
      faqLink.setAttribute(
        'aria-label',
        'Open the unchanged legacy FAQ PDF; review the corrected eight-question FAQ below'
      );
      window.__AGFX_AUDIT.legacyFaqHref = legacyHref;
    }
    if (complianceLink) {
      const label = complianceLink.querySelector('.elementor-button-text') || complianceLink;
      label.textContent = 'Technical Reference (review hold)';
      complianceLink.setAttribute(
        'aria-label',
        'Open the existing compliance standards reference; citations and claims remain under review'
      );
    }

    const documentGroup = document.querySelector('.elementor-element-6d3a201');
    let reviewAction = document.querySelector('.agfx-faq-review-action');
    if (documentGroup && !reviewAction) {
      reviewAction = document.createElement('div');
      reviewAction.className = 'agfx-faq-review-action';
      reviewAction.dataset.agfxInjected = 'faq-review-action';
      reviewAction.innerHTML = `
        <a class="agfx-button" href="#arcguard-faq">Review Corrected FAQ Below</a>
        <p>Eight corrected answers are displayed on this Product page. The legacy PDF destination remains unchanged for source comparison.</p>`;
      documentGroup.after(reviewAction);
    }

    if (documentGroup && !document.querySelector('.agfx-document-note')) {
      const note = document.createElement('p');
      note.className = 'agfx-document-note';
      note.textContent =
        'Preview note: the legacy FAQ PDF and technical-reference destinations are preserved. The corrected eight-question HTML FAQ below is the client-review source of truth; the technical reference is not promoted as validated compliance guidance.';
      (reviewAction || documentGroup).after(note);
    }
  };

  const injectFaq = () => {
    if (config.key !== 'product' || document.querySelector('#arcguard-faq')) return;

    const section = document.createElement('section');
    section.className = 'agfx-faq agfx-reveal';
    section.id = 'arcguard-faq';
    section.dataset.agfxInjected = 'faq';
    section.dataset.agfxPlacement = 'after-product-media-before-closing';
    section.setAttribute('aria-labelledby', 'arcguard-faq-title');

    const questions = FAQS.map(
      (item, index) => `
        <details${index === 0 || index === 4 ? ' open' : ''}>
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>`
    ).join('');

    section.innerHTML = `
      <div class="agfx-faq__inner">
        <header class="agfx-faq__head">
          <div>
            <p class="agfx-section-label">Arc Guard™ FAQ · Corrected client draft</p>
            <h2 id="arcguard-faq-title">Frequently Asked Questions</h2>
          </div>
          <p>All eight corrected answers appear directly on the Product page so buyers and field teams do not have to open a PDF.</p>
        </header>
        <ul class="agfx-faq__status" aria-label="FAQ draft updates included">
          <li><strong>Patented</strong><span>Current product status reflected</span></li>
          <li><strong>8 questions</strong><span>Obsolete questions removed</span></li>
          <li><strong>Installation updated</strong><span>Phillips-head screwdriver guidance included</span></li>
        </ul>
        <div class="agfx-faq__list">${questions}</div>
        <div class="agfx-faq__notice">
          <strong>Product information notice</strong>
          <p>Product suitability depends on connector compatibility, installation, service conditions, and the site-specific hazard assessment. This FAQ provides general product information and does not replace qualified safety, engineering, or legal review.</p>
        </div>
      </div>`;

    const before = document.querySelector('.elementor-element-8837c40');
    if (before) before.before(section);
    else (document.querySelector('.elementor-401, main, #content') || document.body).append(section);

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.agfxFaqSchema = 'true';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    });
    document.head.append(schema);
  };

  const injectFaqNavLink = () => {
    const menus = document.querySelectorAll('ul#primary-menu, nav#mainnav ul.menu, nav#mainnav ul.sydney-dropdown-ul');
    for (const menu of menus) {
      if (menu.querySelector('.agfx-nav-faq')) continue;
      const items = [...menu.children].filter(li => li.tagName === 'LI' && li.querySelector('a[href]'));
      const template =
        items.find(li => /\/contact\/?$/i.test(li.querySelector('a')?.getAttribute('href') || '')) ||
        items[items.length - 1];
      if (!template) continue;
      const clone = template.cloneNode(true);
      clone.removeAttribute('id');
      clone.querySelectorAll('ul, .sub-menu, button').forEach(el => el.remove());
      clone.className = `${clone.className.replace(/current[-\w]*/g, '').trim()} agfx-nav-faq`;
      const anchor = clone.querySelector('a');
      if (!anchor) continue;
      anchor.setAttribute('href', siteHref('/products/#arcguard-faq'));
      anchor.textContent = 'FAQ';
      anchor.removeAttribute('aria-current');
      template.after(clone);
    }
  };

  const enhanceFooter = () => {
    const footer = document.querySelector('#colophon');
    if (!footer || footer.classList.contains('agfx-footer')) return;
    footer.classList.add('agfx-footer');

    const columns = footer.querySelectorAll('.shfb-main_footer_row .shfb-column');
    const emptyColumns = [...columns].filter(column => !column.textContent.trim());

    const quickLinks = document.createElement('div');
    quickLinks.className = 'agfx-footer-block agfx-footer-links';
    quickLinks.dataset.agfxInjected = 'footer-links';
    quickLinks.innerHTML = `
      <h3 class="widget-title">Explore</h3>
      <ul>
        <li><a href="${siteHref('/')}">Home</a></li>
        <li><a href="${siteHref('/products/')}">Product</a></li>
        <li><a href="${siteHref('/products/#arcguard-faq')}">FAQ</a></li>
        <li><a href="${siteHref('/welding-safety-solutions-by-industries/')}">Industries</a></li>
        <li><a href="${siteHref('/resources/')}">Resources</a></li>
        <li><a href="${siteHref('/about/')}">About Us</a></li>
        <li><a href="${siteHref('/contact/')}">Contact Us</a></li>
      </ul>`;

    const brand = document.createElement('div');
    brand.className = 'agfx-footer-block agfx-footer-brand';
    brand.dataset.agfxInjected = 'footer-brand';
    brand.innerHTML = `
      <h3 class="widget-title">Arc Guard™</h3>
      <p class="agfx-footer-tagline">No Arc. No Drop. No Excuse.</p>
      <p>A patented physical safeguard for welding lead connectors. U.S. Patent No. 12,671,212 B1.</p>
      <a class="agfx-button agfx-footer-cta" href="${siteHref('/contact/')}">Request a Site Walkthrough</a>`;

    if (emptyColumns.length >= 2) {
      emptyColumns[0].append(quickLinks);
      emptyColumns[1].append(brand);
    } else {
      const row = footer.querySelector('.shfb-main_footer_row .shfb-row') || footer;
      row.append(quickLinks, brand);
    }
    for (const column of columns) {
      if (!column.textContent.trim()) column.classList.add('agfx-footer-col-empty');
    }
  };

  const injectHomeFaqFeature = () => {
    if (config.key !== 'home' || document.querySelector('.agfx-home-faq')) return;

    const featuredQuestions = [
      'How does it support OSHA and NFPA 70E programs?',
      'Does it replace PPE or safety procedures?',
      'How does it improve safety?'
    ];
    const featured = FAQS.filter(item => featuredQuestions.includes(item.question));
    if (!featured.length) return;

    const section = document.createElement('section');
    section.className = 'agfx-home-faq agfx-reveal';
    section.dataset.agfxInjected = 'home-faq-feature';
    section.setAttribute('aria-labelledby', 'agfx-home-faq-title');
    section.innerHTML = `
      <div class="agfx-home-faq__inner">
        <header class="agfx-home-faq__head">
          <p class="agfx-section-label">Compliance self-check</p>
          <h2 id="agfx-home-faq-title">Where Does Your Hot-Work Program Stand?</h2>
          <p>These are the connector-level questions safety teams and inspectors ask — exposed energized ends, unintended separation, dropped-object risk, and where a physical safeguard fits in your hierarchy of controls.</p>
        </header>
        <div class="agfx-home-faq__list">${featured
          .map(
            (item, index) => `
          <details${index === 0 ? ' open' : ''}>
            <summary>${item.question}</summary>
            <p>${item.answer}</p>
          </details>`
          )
          .join('')}</div>
        <div class="agfx-actions agfx-home-faq__actions">
          <a class="agfx-button" href="${siteHref('/products/#arcguard-faq')}">See the Full FAQ</a>
          <a class="agfx-button agfx-button--secondary" href="${siteHref('/contact/')}">Request a Site Walkthrough</a>
        </div>
      </div>`;

    const problemHeading = [...document.querySelectorAll('h2, h3, h4')].find(heading =>
      /THE PROBLEM/i.test(heading.textContent)
    );
    const problemSection = problemHeading?.closest(
      '.elementor > .e-con, .elementor > .elementor-section'
    );
    if (problemSection) {
      const cardsSection = problemSection.nextElementSibling;
      const anchor =
        cardsSection && /Dropped Object|Costly Shutdowns|Unintentional Arcs/i.test(cardsSection.textContent)
          ? cardsSection
          : problemSection;
      anchor.after(section);
    } else {
      const carousel = document.querySelector('.elementor-element-2f132f4');
      const root = document.querySelector('.elementor-14043, main, #content') || document.body;
      if (carousel) carousel.closest('.elementor > .e-con, .elementor > .elementor-section')?.before(section);
      if (!section.isConnected) root.append(section);
    }
  };

  const injectResourceBridge = () => {
    if (config.key !== 'resources' || document.querySelector('.agfx-resource-bridge')) return;
    const section = document.createElement('section');
    section.className = 'agfx-resource-bridge agfx-reveal';
    section.dataset.agfxInjected = 'resource-bridge';
    section.innerHTML = `
      <div class="agfx-resource-bridge__inner">
        <p class="agfx-section-label">Start with the field questions</p>
        <h2>Connector fit, installation, and layered controls</h2>
        <p>Review the corrected Arc Guard FAQ, then use the existing articles below to examine connector condition, hot-work ignition scenarios, and equipment-cost consequences.</p>
        <div class="agfx-actions">
          <a class="agfx-button" href="${siteHref('/products/#arcguard-faq')}">Review the Arc Guard FAQ</a>
          <a class="agfx-button agfx-button--secondary" href="${siteHref('/products/')}">Review the connector design</a>
        </div>
      </div>`;
    const main = document.querySelector('#main.post-wrap, main');
    if (main) main.before(section);
  };

  const addRevealMotion = intro => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const candidates = [
      intro,
      ...document.querySelectorAll(
        '.elementor > .e-con, .elementor > .elementor-section, #main.post-wrap > article, .agfx-faq, .agfx-resource-bridge'
      )
    ].filter(Boolean);
    candidates.forEach(element => element.classList.add('agfx-reveal'));

    if (reduced || !('IntersectionObserver' in window)) {
      candidates.forEach(element => element.classList.add('is-visible'));
      return;
    }

    document.body.classList.add('agfx-motion-ready');
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    candidates.forEach(element => observer.observe(element));
  };

  const addMagnetMotion = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    for (const element of document.querySelectorAll('.agfx-magnet')) {
      element.addEventListener('pointermove', event => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener('pointerleave', () => {
        element.style.transform = '';
      });
      element.addEventListener('blur', () => {
        element.style.transform = '';
      });
    }
  };

  const rectanglesOverlap = (left, right) =>
    left.left < right.right && left.right > right.left && left.top < right.bottom && left.bottom > right.top;

  const updateAudit = () => {
    const finalInventory = mediaInventory();
    const nodesPreserved = mediaBefore.every(node => node.isConnected);
    const parity = inventoryContainsSource(sourceInventory, finalInventory) && nodesPreserved;
    const media = [...document.querySelectorAll('img, video, iframe')].filter(element => {
      const rect = element.getBoundingClientRect();
      return rect.width > 1 && rect.height > 1;
    });
    const injected = [...document.querySelectorAll('[data-agfx-injected]')];
    const overlaps = [];

    for (const layer of injected) {
      const layerRect = layer.getBoundingClientRect();
      for (const item of media) {
        // The source theme's sticky header intentionally sits above page content.
        // Keep its logo in the parity inventory, but do not misreport that global
        // header behavior as an injected content/media collision while scrolling.
        if (item.closest('header, #masthead, .site-header, .shfb-header')) continue;
        if (layer.contains(item) || item.contains(layer)) continue;
        if (rectanglesOverlap(layerRect, item.getBoundingClientRect())) {
          overlaps.push({
            injected: layer.dataset.agfxInjected,
            media: sourceAttribute(item) || item.tagName.toLowerCase()
          });
        }
      }
    }

    const horizontalOverflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    const introTitle = document.querySelector('.agfx-intro h1');
    const introTextFits = !introTitle || introTitle.scrollWidth <= introTitle.clientWidth + 1;
    let productAssemblyCentered = null;
    let productFaqPlacement = null;
    let productCorrectedFaqAction = null;
    let homeEmptyCarouselCollapsed = null;
    let resourceImagePresentation = null;

    if (config.key === 'product') {
      const assembly = document.querySelector('.elementor-element-a110975');
      const mediaRail = document.querySelector('.elementor-element-042cedb');
      const productMedia = document.querySelector('.elementor-element-f0efb4b');
      const faq = document.querySelector('#arcguard-faq');
      const closing = document.querySelector('.elementor-element-8837c40');
      const legacyFaq = document.querySelector('[data-agfx-legacy-faq="true"]');
      const correctedFaqAction = document.querySelector('.agfx-faq-review-action a[href="#arcguard-faq"]');

      if (assembly && mediaRail) {
        const assemblyRect = assembly.getBoundingClientRect();
        const railRect = mediaRail.getBoundingClientRect();
        const assemblyCenter = assemblyRect.left + assemblyRect.width / 2;
        const railCenter = railRect.left + railRect.width / 2;
        productAssemblyCentered = Math.abs(assemblyCenter - railCenter) <= 2;
      }

      if (productMedia && faq && closing) {
        const mediaBeforeFaq = Boolean(
          productMedia.compareDocumentPosition(faq) & Node.DOCUMENT_POSITION_FOLLOWING
        );
        const faqBeforeClosing = Boolean(
          faq.compareDocumentPosition(closing) & Node.DOCUMENT_POSITION_FOLLOWING
        );
        productFaqPlacement = mediaBeforeFaq && faqBeforeClosing;
      }

      productCorrectedFaqAction = Boolean(
        legacyFaq &&
          correctedFaqAction &&
          legacyFaq.getAttribute('href') === window.__AGFX_AUDIT.legacyFaqHref
      );
    }

    if (config.key === 'home') {
      const emptyCarousel = document.querySelector('.elementor-element-2f132f4.agfx-empty-carousel');
      const rect = emptyCarousel?.getBoundingClientRect();
      homeEmptyCarouselCollapsed = Boolean(
        emptyCarousel &&
          rect &&
          rect.height <= 1 &&
          emptyCarousel.dataset.agfxCarouselState === 'empty-collapsed'
      );
    }

    if (config.key === 'resources') {
      const expected = [
        ['post-15765', 'lead', 'Arc Guard logo for ignition risk at welding connectors'],
        ['post-730', 'compact', 'Arc Guard logo for welding connector spark safety'],
        ['post-731', 'compact', 'Arc Guard logo for hot-connector equipment cost']
      ];
      resourceImagePresentation = expected.every(([postId, role, alt]) => {
        const article = document.getElementById(postId);
        const image = article?.querySelector('.entry-thumb img');
        const frame = article?.querySelector('.entry-thumb')?.getBoundingClientRect();
        if (!article || !image || !frame) return false;
        const frameWithinRole = role === 'lead' ? frame.height <= 301 : frame.height >= 179 && frame.height <= 221;
        return article.dataset.agfxResourceRole === role && image.alt === alt && frameWithinRole;
      });
    }

    window.__AGFX_AUDIT.finalInventory = finalInventory;
    window.__AGFX_AUDIT.mediaParity = parity;
    window.__AGFX_AUDIT.mediaNodesPreserved = nodesPreserved;
    window.__AGFX_AUDIT.injectedMediaOverlaps = overlaps;
    window.__AGFX_AUDIT.horizontalOverflow = horizontalOverflow;
    window.__AGFX_AUDIT.introTextFits = introTextFits;
    window.__AGFX_AUDIT.productAssemblyCentered = productAssemblyCentered;
    window.__AGFX_AUDIT.productFaqPlacement = productFaqPlacement;
    window.__AGFX_AUDIT.productCorrectedFaqAction = productCorrectedFaqAction;
    window.__AGFX_AUDIT.homeEmptyCarouselCollapsed = homeEmptyCarouselCollapsed;
    window.__AGFX_AUDIT.resourceImagePresentation = resourceImagePresentation;
    document.body.dataset.agfxMediaParity = parity ? 'pass' : 'fail';
    document.body.dataset.agfxOverlap = overlaps.length === 0 ? 'pass' : 'fail';
    document.body.dataset.agfxOverflow = horizontalOverflow ? 'fail' : 'pass';
    document.body.dataset.agfxIntroTextFits = introTextFits ? 'pass' : 'fail';
    if (config.key === 'product') {
      document.body.dataset.agfxProductAssemblyCentered = productAssemblyCentered ? 'pass' : 'fail';
      document.body.dataset.agfxProductFaqPlacement = productFaqPlacement ? 'pass' : 'fail';
      document.body.dataset.agfxProductCorrectedFaqAction = productCorrectedFaqAction ? 'pass' : 'fail';
    }
    if (config.key === 'home') {
      document.body.dataset.agfxHomeEmptyCarousel = homeEmptyCarouselCollapsed ? 'pass' : 'fail';
    }
    if (config.key === 'resources') {
      document.body.dataset.agfxResourceImages = resourceImagePresentation ? 'pass' : 'fail';
    }
  };

  qualifyRiskyCopy();
  correctIndustryCopy();
  correctProductCopy();
  correctHomeCopy();
  correctAboutCopy();
  correctContactCopyAndMap();
  demoteExistingH1s();
  const intro = buildIntro();
  addAltText();
  refineResourcePostImages();
  improveMediaSemantics();
  manageHomeEmptyCarousel();
  improveLinksAndActions();
  addProductDocumentState();
  injectFaq();
  injectHomeFaqFeature();
  injectFaqNavLink();
  enhanceFooter();
  injectResourceBridge();
  addRevealMotion(intro);
  addMagnetMotion();

  requestAnimationFrame(() => requestAnimationFrame(updateAudit));
  window.addEventListener(
    'load',
    () => {
      // Sydney creates the custom-header video late. Capture the complete source
      // DOM after that source behavior finishes; this facelift never creates media.
      sourceInventory = mediaInventory();
      window.__AGFX_AUDIT.sourceInventory = sourceInventory;
      updateAudit();
    },
    { once: true }
  );
  window.addEventListener('resize', updateAudit, { passive: true });
})();
