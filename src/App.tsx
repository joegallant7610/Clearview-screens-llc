import { useState, useEffect } from 'react';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentYear = new Date().getFullYear();

  const services = [
    {
      title: 'Full pool cage rescreens',
      description: 'Tear-out old screen, inspect frame, install new screening across the whole cage.',
      items: ['18/14 & 20/20 insect screen options', 'Super Screen upgrades available', 'Complete walkthrough before final payment'],
      pricing: 'Typically $1,500 – $5,000+ depending on size & screen type.'
    },
    {
      title: 'Panel repairs & door kits',
      description: 'If only a few panels got wrecked in a storm or by a tree branch, we can swap those out without doing the whole cage.',
      items: ['Single panel or multiple panel swap', 'Sliding screen door replacements', 'Bug sweeps & screen door closers'],
      pricing: 'Panels from $75+ each, door kits start around $300–$500.'
    },
    {
      title: 'Lanai & patio enclosures',
      description: 'Same quality work on smaller screen areas: lanais, patios, front entry doors, and porches.',
      items: ['Standard insect screen or privacy screen', 'Frame inspection & minor repair if needed', 'Keep bugs out while you chill outside'],
      pricing: 'Depends on size – we\'ll ballpark it from photos or a quick site look.'
    },
    {
      title: 'Aluminum & extras',
      description: 'We do not just swap screen - we keep the frame tight and strong so it lasts.',
      items: ['Minor aluminum repair & bracing', 'Door closers, hinges, bug sweeps', 'Optional pressure wash add-on for cage'],
      pricing: 'Pricing quoted after photos or quick walkthrough.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Text us photos of your cage',
      description: 'Send a few wide shots + any close-ups of damage to 941-336-1836. We\'ll ask a couple quick questions about size and height.'
    },
    {
      number: 2,
      title: 'Ballpark price same day',
      description: 'We\'ll give you a realistic range for rescreen vs repairs, plus your options for 18/14, 20/20, or Super Screen.'
    },
    {
      number: 3,
      title: 'Lock in your date',
      description: 'We line up material, show when we say we\'ll show, and keep you posted if weather tries to act up.'
    },
    {
      number: 4,
      title: 'Walkthrough before we roll out',
      description: 'You walk the cage with us, check doors, and make sure everything\'s tight and clean before we call it done.'
    }
  ];

  const pricingOptions = [
    {
      chip: 'Standard 18/14 screen',
      title: 'Most budget-friendly',
      description: 'Good airflow, solid strength, and the most common option on Florida cages.',
      price: '$1,500 – $3,000+',
      unit: 'typical full cage',
      features: ['Best for standard rescreens', 'Good durability vs cost', 'Great for rental properties']
    },
    {
      chip: '20/20 "no-see-um" screen',
      title: 'Smaller bugs, tighter weave',
      description: 'Great if you\'re close to water or sick of tiny gnats sneaking through.',
      price: '$1,900 – $3,800+',
      unit: 'typical full cage',
      features: ['Finer mesh, keeps smaller insects out', 'Slightly less airflow vs 18/14', 'Popular around canals & ponds']
    },
    {
      chip: 'Super Screen upgrade',
      title: 'Long-life premium option',
      description: 'Heavier-duty screen meant to last longer under Florida sun and storms.',
      price: '$2,500 – $5,000+',
      unit: 'typical full cage',
      features: ['High tear strength & UV resistant', 'Great for long-term homeowners', 'Can mix with standard in some areas']
    }
  ];

  const galleryImages = [
    { src: '/KIMG0036.jpg', caption: 'Before – frame ready for screening' },
    { src: '/KIMG0046.jpg', caption: 'After – full rescreen & hardware completed' },
    { src: '/KIMG0017.jpg', caption: 'Work site – before installation' },
    { src: '/KIMG0010.jpg', caption: 'Lanai – finished installation' }
  ];

  const reviews = [
    {
      stars: 5,
      text: 'Showed up on time, knocked out a full cage rescreen, and left everything clean. Pricing was exactly what we talked about.',
      name: 'Mark – Sarasota',
      label: 'Full pool cage rescreen'
    },
    {
      stars: 5,
      text: 'Had a couple storm-damaged panels and a sketchy screen door. Got it all fixed in one visit and the door shuts perfect now.',
      name: 'Tina – Bradenton',
      label: 'Panel repair & door kit'
    },
    {
      stars: 5,
      text: 'Lanai and front entry both rescreened, looks way better. Loved being able to just text photos and get a ballpark first.',
      name: 'Alex – Venice',
      label: 'Lanai & entry rescreen'
    }
  ];

  const areas = ['Sarasota', 'Bradenton', 'Venice', 'North Port', 'Lakewood Ranch', 'Palmetto', 'Ellenton', 'Nokomis'];

  const faqs = [
    {
      question: 'Do I have to be home for a quote?',
      answer: 'Not always. If you can text us clear photos of your cage and tell us your city, we can usually ballpark it without a site visit. For anything complex or tall two-story cages, we may swing by for a look.'
    },
    {
      question: 'How long does a full rescreen take?',
      answer: 'Most single-story cages are 1–2 days depending on size and repairs. Two-story cages and heavy repair jobs can take a little longer, but we\'ll tell you up front what to expect.'
    },
    {
      question: 'What type of screen should I pick?',
      answer: '18/14 is the standard go-to. 20/20 is great if you\'re by water or fight a lot of small bugs. Super Screen is a heavier-duty, longer-life option. We\'ll lay out the pros, cons, and price difference so you can choose.'
    },
    {
      question: 'Can you just fix a few panels?',
      answer: 'Yes. If the rest of the screen is in decent shape, we can swap out the worst sections and keep things matching as best as possible, then plan a full rescreen later if needed.'
    },
    {
      question: 'Do you pressure wash the cage too?',
      answer: 'We can add cage pressure washing as an add-on in many cases, or prep certain areas before screen work when needed. Just mention it when you reach out and we\'ll price it in.'
    },
    {
      question: 'What areas do you service?',
      answer: 'Sarasota, Bradenton, Venice, North Port, Lakewood Ranch, Palmetto, Ellenton, Nokomis, and nearby spots. If you\'re a bit outside that, text us and we\'ll see what we can do.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileNav();
    }
  };

  return (
    <>
      <div className="page">
        <header>
          <div className="nav">
            <div className="nav-left">
              <div className="logo-circle">CV</div>
              <div className="brand-text">
                <span>Clearview Screens LLC</span>
                <span>Pool Cage & Lanai Rescreening – Sarasota & Surrounding Areas</span>
              </div>
            </div>
            <nav className="nav-links">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </nav>
            <div className="nav-cta">
              <div className="phone-pill">
                <span><a href="tel:+19413361836">941-336-1836</a></span>
                <small>Best to text</small>
              </div>
              <button className="btn btn-primary" onClick={() => window.location.href = 'sms:+19413361836?&body=Hi%20Clearview%20Screens%2C%20I%27d%20like%20a%20quote%20for%20rescreening.'}>
                Text for quote
              </button>
              <button className="mobile-menu-btn" onClick={toggleMobileNav}>
                Menu ▾
              </button>
            </div>
          </div>
          {mobileNavOpen && (
            <div className="mobile-nav show">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </div>
          )}
        </header>

        <main>
          <section id="home">
            <div className="hero">
              <div className="hero-left">
                <div className="hero-tag">
                  <span>Licensed & Insured</span>
                  · Sarasota & surrounding areas
                </div>
                <h1>
                  Florida-strong <span>pool cage & lanai rescreening</span> that actually looks clean.
                </h1>
                <p className="hero-sub">
                  Clearview Screens LLC handles full rescreens, repairs, and aluminum fixes so your pool cage looks brand new
                  and keeps the bugs out – without blowing up your budget.
                </p>
                <ul className="hero-bullets">
                  <li>Whole-cage rescreens, panel swaps, and door kits</li>
                  <li>18/14 & 20/20 insect screen + Super Screen options</li>
                  <li>Fast, local, and straight-up communication</li>
                </ul>
                <div className="hero-ctas">
                  <button className="btn btn-primary" onClick={() => window.location.href = 'tel:+19413361836'}>
                    Call now: 941-336-1836
                  </button>
                  <button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>
                    Get a fast text quote →
                  </button>
                </div>
                <p className="hero-small-text">
                  Best to text • Send a few photos of your cage and we'll ballpark it for you.
                </p>
                <div style={{ marginTop: '1rem', padding: '0.85rem', background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.12), rgba(56, 176, 0, 0.12))', borderRadius: '14px', border: '2px solid rgba(0, 180, 216, 0.35)' }}>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--blue-dark)', fontSize: '0.95rem' }}>Now offering custom painted murals on your screen enclosures and pool cages.</strong> Text today to get your custom painted mural of whatever your mind can imagine on your screen enclosure or pool cage today.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.6rem' }}>
                    <img src="/received_667238527548671.jpeg" alt="Artist painting custom mermaid fountain" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                    <img src="/20200918_005801_HDR.jpg" alt="Custom sea turtle ceiling and wall mural" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                    <img src="/received_1160841867636192.jpeg" alt="Completed mermaid fountain mural with water feature" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
                  </div>
                </div>
              </div>

              <div className="hero-right">
                <div className="hero-grid">
                  <div className="hero-img-main">
                    <img src="/1022141823a.jpg" alt="Pool cage rescreening" />
                  </div>
                  <div className="hero-img-side">
                    <div className="hero-img-small">
                      <img src="/1022141823b.jpg" alt="Pool cage close-up" />
                    </div>
                    <div className="hero-img-small">
                      <img src="/1002141450c.jpg" alt="Screen panel installation" />
                    </div>
                  </div>
                </div>

                <div className="badge-card">
                  <div className="badge-dot"></div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.8rem' }}>Same-week scheduling available</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Serving Sarasota, Bradenton, Venice, North Port & more.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services">
            <div className="section-inner">
              <div className="section-header">
                <div>
                  <h2>What we do (and what it costs)</h2>
                  <p>Pool cages, lanais, screen repairs, aluminum work, and pressure washing. No guesswork on pricing.</p>
                </div>
                <div className="pill-row">
                  <span className="pill">Full rescreens</span>
                  <span className="pill">Panel repairs</span>
                  <span className="pill">Aluminum work</span>
                </div>
              </div>

              <div className="services-grid">
                {services.map((service, index) => (
                  <article key={index} className="card">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="price-tag">{service.pricing}</div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="section-inner layout-2col">
              <div>
                <div className="section-header" style={{ marginBottom: '0.6rem' }}>
                  <div>
                    <h2>How it works (no runaround)</h2>
                    <p>Quick quote, real pricing, and work done the right way the first time.</p>
                  </div>
                </div>
                <div className="steps">
                  {steps.map((step) => (
                    <div key={step.number} className="step">
                      <div className="step-number">{step.number}</div>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mini-metrics">
                  <span className="metric-pill">Locally owned & operated</span>
                  <span className="metric-pill">Licensed & insured</span>
                  <span className="metric-pill">Straight-up, no surprise add-ons</span>
                </div>
              </div>

              <div>
                <div className="card">
                  <div className="chip">Why Clearview?</div>
                  <h3>Built by someone who actually does the work</h3>
                  <p className="small-muted">
                    You're not talking to some random call center. You're dealing with the person that's actually out there in the Florida sun doing the job.
                  </p>
                  <div className="highlight">
                    We've rescreened everything from small lanais to big two-story cages across Sarasota, Bradenton, Venice, North Port, Palmetto, and more.
                    If we tell you we can get it done, we mean it.
                  </div>
                  <ul style={{ marginTop: '0.5rem' }}>
                    <li style={{ fontSize: '0.8rem', color: '#475569' }}>We use proven screen brands suited for Florida weather</li>
                    <li style={{ fontSize: '0.8rem', color: '#475569' }}>We don't leave pile-ups of old screen and trash behind</li>
                    <li style={{ fontSize: '0.8rem', color: '#475569' }}>Communication is simple: call or text, no games</li>
                  </ul>
                  <button className="btn btn-primary" style={{ marginTop: '0.5rem' }} onClick={() => scrollToSection('contact')}>
                    Get my cage on the schedule →
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="pricing">
            <div className="section-inner">
              <div className="section-header">
                <div>
                  <h2>Straight-up pricing ranges</h2>
                  <p>Every cage is different, but here's what most Sarasota-area jobs tend to land around.</p>
                </div>
                <div>
                  <span className="small-muted">
                    Final price depends on cage size, height, access, screen type, and repairs needed. You'll see your numbers before we start.
                  </span>
                </div>
              </div>

              <div className="pricing-grid">
                {pricingOptions.map((option, index) => (
                  <article key={index} className="card">
                    <div className="chip">{option.chip}</div>
                    <h3>{option.title}</h3>
                    <p>{option.description}</p>
                    <div className="price-main">
                      {option.price} <span>{option.unit}</span>
                    </div>
                    <ul>
                      {option.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="highlight" style={{ marginTop: '0.7rem' }}>
                <strong>Want a fast ballpark?</strong> Text pictures of your cage to <strong>941-336-1836</strong> and mention the city you're in.
                We'll give you a range and your screen options the same day in most cases.
              </div>
            </div>
          </section>

          <section id="gallery">
            <div className="section-inner">
              <div className="section-header">
                <div>
                  <h2>Before & after snapshots</h2>
                  <p>Real Florida cages, cleaned up and rescreened.</p>
                </div>
                <div className="pill-row">
                  <span className="pill">Single-story cages</span>
                  <span className="pill">Two-story cages</span>
                  <span className="pill">Lanai enclosures</span>
                </div>
              </div>

              <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                  <div key={index} className="gallery-card">
                    <img src={image.src} alt={image.caption} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about">
            <div className="section-inner layout-2col">
              <div>
                <div className="section-header" style={{ marginBottom: '0.6rem' }}>
                  <div>
                    <h2>About Clearview Screens LLC</h2>
                    <p>Local, hands-on, and built around doing solid work in the Sarasota-Manatee area.</p>
                  </div>
                </div>
                <div className="about-text">
                  <p>
                    Clearview Screens LLC is a local, licensed & insured screen outfit focused on pool cages, lanais, and aluminum work.
                    You're not dealing with a big faceless company – you're dealing with someone who's actually been in construction for years.
                  </p>
                  <p>
                    We show up when we say we will, keep things clean, and walk the job with you before anything gets called "done."
                  </p>
                  <div className="badge-row">
                    <span className="badge">Licensed & insured contractor</span>
                    <span className="badge">Pool cages, lanais & entries</span>
                    <span className="badge">Sarasota-based, locally owned</span>
                  </div>
                </div>

                <div style={{ marginTop: '0.9rem' }}>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>Service areas</h3>
                  <div className="areas-grid">
                    {areas.map((area, index) => (
                      <span key={index} className="area-pill">{area}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>What customers say</h3>
                <div className="review-grid">
                  {reviews.map((review, index) => (
                    <article key={index} className="card">
                      <div className="review-stars">{'★'.repeat(review.stars)}</div>
                      <p>{review.text}</p>
                      <div className="review-name">{review.name}</div>
                      <div className="review-label">{review.label}</div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq">
            <div className="section-inner">
              <div className="section-header">
                <div>
                  <h2>FAQ – stuff people always ask</h2>
                  <p>Quick answers so you don't have to guess how this works.</p>
                </div>
              </div>

              <div className="faq-grid">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-q">{faq.question}</div>
                    <div className="faq-a">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="section-inner">
              <div className="section-header">
                <div>
                  <h2>Text, call, or send it in</h2>
                  <p>Fastest way to get rolling is to text photos of your cage. You can also drop your info in the form and we'll reach back out.</p>
                </div>
              </div>

              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-item">
                    <div className="contact-label">Phone / Text</div>
                    <div className="contact-value">
                      <a href="tel:+19413361836">941-336-1836</a> <span style={{ fontSize: '0.78rem', color: '#64748b' }}>(best to text)</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">
                      <a href="mailto:clearviewscreensllc@gmail.com">clearviewscreensllc@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-label">Typical hours</div>
                    <div className="contact-value">Mon – Sat · 7:00 AM – 7:00 PM</div>
                  </div>
                  <div className="highlight" style={{ marginTop: '0.6rem' }}>
                    <strong>Pro tip:</strong> Text us your name, city, and photos of your cage. We'll reply with a ballpark and next available dates.
                  </div>
                </div>

                <div className="contact-card">
                  <form onSubmit={(e) => { e.preventDefault(); alert('Form is just a front-end demo right now. Text 941-336-1836 for the fastest quote.'); }}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone (best to text)</label>
                      <input id="phone" type="tel" placeholder="941-555-1234" required />
                    </div>
                    <div>
                      <label htmlFor="email">Email (optional)</label>
                      <input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="city">City</label>
                      <input id="city" type="text" placeholder="Sarasota, Bradenton, Venice, etc." />
                    </div>
                    <div>
                      <label htmlFor="service">What do you need?</label>
                      <select id="service">
                        <option value="">Select one</option>
                        <option>Full pool cage rescreen</option>
                        <option>Lanai / patio rescreen</option>
                        <option>Panel repairs</option>
                        <option>Screen door repair / replacement</option>
                        <option>Aluminum repair</option>
                        <option>Other (describe below)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message">Details (and if you texted photos)</label>
                      <textarea id="message" placeholder="Tell us about your cage, how high it is, and if you've texted photos."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit request
                    </button>
                    <p className="small-muted" style={{ marginTop: '0.3rem' }}>
                      This form is a front-end template. For now, texting is the fastest way to lock in a quote.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-inner">
            <div>
              © {currentYear} Clearview Screens LLC · Licensed & Insured · Sarasota & surrounding areas
            </div>
            <div>
              <a href="tel:+19413361836">Call/Text: 941-336-1836</a> · <a href="mailto:clearviewscreensllc@gmail.com">clearviewscreensllc@gmail.com</a>
            </div>
            <div className="footer-tag">
              Built for Florida pool cages, lanais, and aluminum work.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
