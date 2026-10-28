import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Building2,
  Users,
  Handshake,
  Lightbulb,
  TrendingUp,
  Target,
  Landmark,
  Network,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  MapPin,
  Quote,
  ChevronLeft,
  ChevronRight,
  MoveUpRight,
  Sparkles,
  Compass,
  ShieldCheck,
  Building,
  CircleDollarSign,
  Earth,
  Layers3,
} from "lucide-react";
import "./Home.css";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Market Entry & Soft Landing",
    description:
      "Help businesses understand UAE market-entry pathways and connect with relevant local service providers and ecosystem partners.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Business Expansion",
    description:
      "Identify relevant markets, commercial relationships and practical opportunities for international growth.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Innovation Commercialisation",
    description:
      "Connect promising innovations with potential customers, industry partners and routes to market.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Facilitate relevant business, institutional and ecosystem connections that can support long-term collaboration.",
  },
  {
    number: "05",
    icon: CircleDollarSign,
    title: "Investor Connections",
    description:
      "Help suitable ventures explore relevant investor introductions and potential capital-raising opportunities.",
  },
];

const stages = [
  {
    number: "01",
    icon: Network,
    title: "Connect",
    description:
      "Bring businesses, people, institutions and opportunities together across borders.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Innovate",
    description:
      "Identify ideas, technologies and collaborations with potential to create value.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Commercialise",
    description:
      "Explore customer needs, business partnerships and practical routes to market.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Expand",
    description:
      "Build pathways into relevant markets through local knowledge and strategic connections.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Build",
    description:
      "Develop relationships and opportunities that can support lasting business growth.",
  },
];

const regions = [
  {
    title: "Middle East",
    kicker: "Regional gateway",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1100&q=85",
    description:
      "A gateway to regional business opportunities, international connections and market access, with the UAE as the headquarters.",
    href: "/global-network/middle-east",
  },
  {
    title: "Africa",
    kicker: "Emerging opportunities",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=85",
    description:
      "Explore cross-border relationships, commercial opportunities and partnerships across diverse African markets.",
    href: "/global-network/africa",
  },
  {
    title: "Southeast Asia",
    kicker: "Innovation & trade",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1100&q=85",
    description:
      "Connect with dynamic business ecosystems, innovation networks and potential regional growth opportunities.",
    href: "/global-network/southeast-asia",
  },
  {
    title: "India",
    kicker: "A key innovation ecosystem",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1100&q=85",
    description:
      "Engage with a major source of technology, talent, enterprise and innovation, with opportunities to connect internationally.",
    href: "/global-network/countries/india",
  },
];

const metrics = [
  {
    value: "71",
    suffix: "",
    label: "Countries in the wider network",
    icon: Globe2,
  },
  {
    value: "200+",
    suffix: "",
    label: "Businesses soft-landed in the UAE",
    icon: Building2,
  },
  {
    value: "USD 25M",
    suffix: "",
    label: "Reported investment raised across supported businesses",
    icon: TrendingUp,
  },
  {
    value: "3",
    suffix: "",
    label: "Priority regions for cross-border growth",
    icon: Network,
  },
];

const partnershipTypes = [
  {
    icon: Landmark,
    title: "Government & Institutional Engagement",
  },
  {
    icon: Network,
    title: "Strategic Business Partnerships",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation Ecosystems",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Investment & Industry Ecosystems",
  },
];

const testimonials = [
  {
    number: "01",
    category: "Entrepreneurial Impact",
    name: "Raghunath Rapeen (Raghu)",
    role: "Founder, KAARV",
    image: "/images/testimonials/raghunath-rapeen.jpg",
    quote:
      "Sundeep mentored me, refined my approach, strengthened my pitch, introduced me to global ecosystems, governments, investors, and business leaders.",
    outcomeTitle: "KAARV’s international journey",
    outcome: "Culminated in a reported US $4 million investment raised.",
    source: "Company profile · Verify supporting documentation before publication",
    sourceLabel: "Reported outcome",
  },
  {
    number: "02",
    category: "Innovation & Global Expansion",
    name: "Madhu Samala",
    role: "HyRecruitAI / PrepVerse ecosystem",
    image: "/images/testimonials/madhu-samala.jpg",
    quote:
      "A heartfelt thank you to Mr. Sundeep Kumar Makthala for believing in our vision and pushing the boundaries of what’s possible for Indian AI startups on a global scale.",
    outcomeTitle: "Publicly shared in connection with a TConsult partnership announcement",
    outcome: "Source: LinkedIn",
    source: "LinkedIn · Confirm the original post and permission before publication",
    sourceLabel: "Source",
  },
  {
    number: "03",
    category: "Ecosystem Building",
    name: "Ponnala Lakshmaiah",
    role: "Former IT Minister",
    image: "/images/testimonials/ponnala-lakshmaiah.jpg",
    quote:
      "Connecting talent with technology, technology with opportunity, and opportunity with international partnerships.",
    outcomeTitle: "Public remarks recognising ecosystem building",
    outcome: "Associated in the supplied reference with WTITC’s international engagement.",
    source: "LinkedIn · Verify the original public remarks and attribution",
    sourceLabel: "Source",
  },
  {
    number: "04",
    category: "Global Recognition",
    name: "Carlos Slim",
    role: "Telecommunications entrepreneur",
    image: "/images/testimonials/carlos-slim.jpg",
    quote:
      "Connecting businesses, technology and investment across borders is essential to creating new opportunities. TConsult’s global vision represents an approach to bringing people, ideas and international markets closer together.",
    outcomeTitle: "Source shown in supplied reference",
    outcome: "Republic TV",
    source: "Republic TV · Verify the original segment and quotation before publication",
    sourceLabel: "Source",
  },
];

const newsItems = [
  {
    category: "Company updates",
    date: "Latest updates",
    title: "TConsult Global: Building Pathways to International Growth",
    description:
      "Explore TConsult’s cross-border business model, market-entry support and approach to global partnerships.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    href: "/insights-media/company-news",
  },
  {
    category: "Global business",
    date: "Insights",
    title: "Connecting Businesses with New Markets",
    description:
      "Discover how local knowledge, commercial relationships and ecosystem collaboration can support international expansion.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=85",
    href: "/insights-media/insights",
  },
  {
    category: "Innovation",
    date: "Perspectives",
    title: "From Innovation to Commercial Opportunity",
    description:
      "A look at the relationships, market understanding and practical steps that help innovations pursue commercial pathways.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=85",
    href: "/insights-media/insights",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <div className={`tc-eyebrow ${light ? "tc-eyebrow-light" : ""}`}>
      <span className="tc-eyebrow-line" />
      <span>{children}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`tc-section-heading ${light ? "is-light" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`tc-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="tc-hero" id="home">
      <div className="tc-hero-image" />
      <div className="tc-hero-shade" />
      <div className="tc-hero-grid" />
      <div className="tc-hero-network" aria-hidden="true">
        <span className="tc-network-node node-one" />
        <span className="tc-network-node node-two" />
        <span className="tc-network-node node-three" />
        <span className="tc-network-node node-four" />
        <span className="tc-network-node node-five" />
        <span className="tc-network-line line-one" />
        <span className="tc-network-line line-two" />
        <span className="tc-network-line line-three" />
        <span className="tc-network-line line-four" />
      </div>
      <div className="tc-hero-orbit tc-orbit-one" />
      <div className="tc-hero-orbit tc-orbit-two" />

      <div className="tc-wide tc-hero-inner">
        <div className="tc-hero-copy">
          <div className="tc-hero-kicker">
            <span className="tc-live-dot" />
            TCONSULT GLOBAL L.L.C-FZ · UNITED ARAB EMIRATES
          </div>

          <h1>
            Your Business.
            <br />
            New Markets.
            <br />
            <span>Global Opportunities.</span>
          </h1>

          <p className="tc-hero-tagline">
            Connect Locally. Expand Globally.
          </p>

          <p className="tc-hero-description">
            TConsult® connects businesses, innovations, investors and
            institutions with the partners, market access and strategic support
            needed to pursue international opportunities.
          </p>

          <div className="tc-hero-actions">
            <a className="tc-btn tc-btn-gold" href="/contact">
              Start a Conversation <ArrowRight size={17} />
            </a>
            <a className="tc-btn tc-btn-glass" href="/global-network">
              Explore Our Global Network <ArrowRight size={17} />
            </a>
          </div>

          <div className="tc-hero-signature">
            <span>MIDDLE EAST</span>
            <span className="tc-signature-dot">|</span>
            <span>SOUTHEAST ASIA</span>
            <span className="tc-signature-dot">|</span>
            <span>AFRICA</span>
            <span className="tc-signature-dot">|</span>
            <span>INDIA</span>
            <span className="tc-signature-dot">|</span>
            <span>AND BEYOND</span>
          </div>
        </div>

        <div className="tc-hero-side">
          <div className="tc-hero-side-label">
            <Globe2 size={16} />
            <span>A CONNECTED WORLD OF OPPORTUNITY</span>
          </div>

          <div className="tc-hero-world">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
              alt="Illuminated Earth representing international connectivity"
            />
            <div className="tc-world-overlay" />
            <div className="tc-world-center">
              <Network size={27} />
            </div>
            <div className="tc-world-marker marker-uae">
              <span /> UAE
            </div>
            <div className="tc-world-marker marker-india">
              <span /> INDIA
            </div>
            <div className="tc-world-marker marker-africa">
              <span /> AFRICA
            </div>
            <div className="tc-world-marker marker-asia">
              <span /> SOUTHEAST ASIA
            </div>
          </div>

          <div className="tc-hero-side-footer">
            <span>PEOPLE</span>
            <span>IDEAS</span>
            <span>INVESTMENT</span>
            <span>OPPORTUNITY</span>
          </div>
        </div>
      </div>

      <a className="tc-scroll-cue" href="#about">
        DISCOVER TCONSULT <ArrowDownRight size={16} />
      </a>
    </section>
  );
}

function TrustBar() {
  const trustItems = [
    { icon: Landmark, label: "Government &\ninstitutions" },
    { icon: Globe2, label: "International\nmarkets" },
    { icon: Building2, label: "Business & industry\npartners" },
    { icon: Users, label: "Entrepreneurs &\ninvestors" },
    { icon: Network, label: "Innovation\necosystems" },
  ];

  return (
    <section className="tc-trust">
      <div className="tc-wide tc-trust-inner">
        <div className="tc-trust-heading">
          <span>BUILT AROUND CONNECTION</span>
          <strong>Global thinking. Local relationships.</strong>
        </div>
        {trustItems.map(({ icon: Icon, label }) => (
          <div className="tc-trust-item" key={label}>
            <Icon size={27} strokeWidth={1.5} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="tc-section tc-about" id="about">
      <div className="tc-wide tc-about-grid">
        <Reveal className="tc-about-copy">
          <Eyebrow>About TConsult</Eyebrow>
          <h2>
            A Global Platform for Business, Innovation and <span>Impact.</span>
          </h2>
          <p className="tc-about-lead">
            Great businesses deserve to go global.
          </p>
          <p>
            Innovators and businesses often have the right ideas, products and
            ambition—but crossing borders can require local knowledge,
            commercial relationships and execution support.
          </p>
          <p>
            TConsult bridges that gap, helping businesses explore UAE market
            entry, connect with potential customers and investors, and build
            meaningful relationships across markets.
          </p>
          <a className="tc-text-link" href="/about">
            Learn More About TConsult <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal className="tc-about-visual-wrap" delay={130}>
          <div className="tc-about-visual">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
              alt="Contemporary glass office building representing global business"
              loading="lazy"
            />
            <div className="tc-about-image-shade" />
            <div className="tc-about-corner">
              <Sparkles size={19} />
              <span>CONNECTING MARKETS</span>
            </div>
            <a className="tc-about-image-caption" href="/about">
              <span className="tc-caption-icon">
                <ArrowUpRight size={23} />
              </span>
              <span>
                <strong>Watch Our Story</strong>
                <small>Discover the TConsult approach</small>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="tc-section tc-approach" id="approach">
      <div className="tc-wide">
        <Reveal>
          <SectionHeading
            eyebrow="The TConsult Approach"
            title={
              <>
                From Connection to <span>Global Growth.</span>
              </>
            }
            description="A connected approach to cross-border growth—bringing the right people, ideas and opportunities together."
          />
        </Reveal>

        <div className="tc-stages">
          {stages.map(({ number, icon: Icon, title, description }, index) => (
            <Reveal
              className="tc-stage-wrap"
              delay={index * 90}
              key={number}
            >
              <article className="tc-stage">
                <div className="tc-stage-top">
                  <span className="tc-stage-icon">
                    <Icon size={24} />
                  </span>
                  <span className="tc-stage-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {index !== stages.length - 1 && (
                  <span className="tc-stage-connector" aria-hidden="true">
                    <ArrowRight size={15} />
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="tc-section tc-services" id="services">
      <div className="tc-wide">
        <Reveal>
          <div className="tc-services-heading">
            <SectionHeading
              eyebrow="What We Do"
              title={
                <>
                  End-to-End Support for <span>Global Growth.</span>
                </>
              }
              description="Practical, relationship-led support to help businesses explore new markets and build the connections that matter."
            />
            <a className="tc-text-link tc-services-all" href="/services">
              Explore All Services <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="tc-services-grid">
          {services.map(({ number, icon: Icon, title, description }, index) => (
            <Reveal
              className="tc-service-wrap"
              delay={index * 70}
              key={number}
            >
              <a className="tc-service-card" href="/services">
                <div className="tc-service-top">
                  <span className="tc-service-icon">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <span className="tc-service-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tc-service-bottom">
                  <span>Explore capability</span>
                  <span className="tc-service-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Exchange() {
  return (
    <section className="tc-section tc-exchange" id="global-model">
      <div className="tc-wide tc-exchange-grid">
        <Reveal className="tc-exchange-copy">
          <Eyebrow>Two-Way Growth</Eyebrow>
          <h2>
            International Ambition. <span>Local Opportunity.</span>
          </h2>
          <p>
            TConsult’s cross-border model is designed to support opportunity in
            both directions. Businesses from the UAE, India and other markets
            can explore relevant international customers, partners, investors
            and institutions.
          </p>
          <p>
            We focus on practical connections and tailored pathways—not a
            one-directional market-entry model.
          </p>
          <a className="tc-text-link" href="/global-network">
            Explore Our Global Model <ArrowRight size={16} />
          </a>
        </Reveal>

        <Reveal className="tc-exchange-visual-wrap" delay={130}>
          <div className="tc-exchange-visual">
            <div className="tc-exchange-node exchange-node-top">
              <span className="tc-exchange-node-icon">
                <Building2 size={23} />
              </span>
              <strong>Businesses</strong>
              <small>Products, services & ambition</small>
            </div>

            <div className="tc-exchange-node exchange-node-bottom">
              <span className="tc-exchange-node-icon">
                <Landmark size={23} />
              </span>
              <strong>Markets & Institutions</strong>
              <small>Customers, partners & ecosystems</small>
            </div>

            <div className="tc-exchange-orbit">
              <span className="tc-orbit-ring ring-a" />
              <span className="tc-orbit-ring ring-b" />
              <span className="tc-exchange-point point-a" />
              <span className="tc-exchange-point point-b" />
              <span className="tc-exchange-point point-c" />
              <span className="tc-exchange-point point-d" />
              <div className="tc-exchange-core">
                <Network size={34} />
                <strong>TConsult</strong>
                <small>CONNECT · ENABLE</small>
              </div>
            </div>

            <div className="tc-exchange-direction direction-one">
              <ArrowRight size={16} /> OUTBOUND GROWTH
            </div>
            <div className="tc-exchange-direction direction-two">
              <ArrowRight size={16} /> INBOUND OPPORTUNITY
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Regions() {
  return (
    <section className="tc-section tc-regions" id="regions">
      <div className="tc-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Three Priority Regions"
            title={
              <>
                Driving Two-Way Growth <span>Between Markets.</span>
              </>
            }
            description="Regional priorities that connect international business ambition with local knowledge, potential partners and opportunities."
          />
        </Reveal>

        <div className="tc-region-grid">
          {regions.map((region, index) => (
            <Reveal
              className="tc-region-wrap"
              delay={index * 100}
              key={region.title}
            >
              <a className="tc-region-card" href={region.href}>
                <img src={region.image} alt="" loading="lazy" />
                <div className="tc-region-overlay" />
                <span className="tc-region-number">
                  0{index + 1}
                </span>
                <div className="tc-region-content">
                  <span className="tc-region-subtitle">{region.kicker}</span>
                  <h3>{region.title}</h3>
                  <p>{region.description}</p>
                  <span className="tc-region-link">
                    Explore {region.title} <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="tc-india-note">
            <span className="tc-india-icon">
              <Compass size={25} />
            </span>
            <div>
              <strong>India: A Key Innovation Ecosystem</strong>
              <p>
                India is an important market and innovation ecosystem within
                TConsult’s wider cross-border perspective—not a limitation on
                the direction of expansion.
              </p>
            </div>
            <a href="/global-network" aria-label="Explore India">
              <ArrowUpRight size={20} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="tc-impact" id="impact">
      <div className="tc-impact-backdrop" />
      <div className="tc-wide tc-impact-inner">
        <Reveal>
          <div className="tc-impact-heading">
            <Eyebrow light>Global Reach & Business Model</Eyebrow>
            <h2>
              Relationships That Create <span>Possibilities.</span>
            </h2>
            <p>
              A cross-border ecosystem connecting businesses, institutions and
              innovation with potential pathways to growth.
            </p>
          </div>
        </Reveal>

        <div className="tc-impact-grid">
          {metrics.map(({ value, label, icon: Icon }, index) => (
            <Reveal className="tc-impact-wrap" delay={index * 90} key={label}>
              <div className="tc-impact-card">
                <span className="tc-impact-icon">
                  <Icon size={25} />
                </span>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="tc-impact-disclaimer">
          Figures supplied in the company profile; verify definitions,
          attribution and supporting documentation before publication. The
          country figure refers to network reach, not necessarily TConsult
          offices or direct operations.
        </p>
      </div>
    </section>
  );
}

function Partnerships() {
  return (
    <section className="tc-section tc-partnerships" id="partnerships">
      <div className="tc-wide tc-partnership-grid">
        <Reveal className="tc-partnership-visual-wrap">
          <div className="tc-partnership-visual">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"
              alt="Professionals meeting and building collaborative relationships"
              loading="lazy"
            />
            <div className="tc-partnership-visual-overlay" />
            <div className="tc-partnership-stamp">
              <Network size={29} />
              <span>PEOPLE · IDEAS · OPPORTUNITIES · BEYOND BORDERS</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="tc-partnership-copy" delay={130}>
          <Eyebrow>Impact Through Partnerships</Eyebrow>
          <h2>
            Stronger Together for a <span>Larger Impact.</span>
          </h2>
          <p>
            We work to connect businesses, institutions and innovation
            ecosystems to explore collaboration, market access and sustainable
            opportunities.
          </p>

          <div className="tc-partnership-list">
            {partnershipTypes.map(({ icon: Icon, title }) => (
              <div className="tc-partnership-list-item" key={title}>
                <span>
                  <Icon size={21} />
                </span>
                <strong>{title}</strong>
              </div>
            ))}
          </div>

          <a className="tc-btn tc-btn-navy" href="/partnerships">
            Explore Our Partnerships <ArrowRight size={16} />
          </a>

          <p className="tc-partnership-disclaimer">
            Published collaborations should identify the actual signatories,
            dates, scope and TConsult’s role. Associated-organisation agreements
            are not automatically TConsult agreements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[activeIndex];

  const goTo = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 9000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  return (
    <section className="tc-section tc-testimonials" id="testimonials">
      <div className="tc-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Voices of Impact"
            title={<>Testimonials & <span>Global Recognition.</span></>}
            description="Perspectives on mentorship, innovation, ecosystem building and cross-border opportunity."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            className="tc-testimonial-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
            }}
          >
            <article className="tc-testimonial-slide" key={active.number} aria-live="polite">
              <div className="tc-testimonial-slide-photo">
                <img
                  src={active.image}
                  alt={`Portrait of ${active.name}`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.classList.add("has-placeholder");
                  }}
                />
                <span className="tc-testimonial-slide-initials" aria-hidden="true">
                  {active.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("")}
                </span>
                <span className="tc-testimonial-photo-index">{active.number} / 04</span>
              </div>

              <div className="tc-testimonial-slide-content">
                <div className="tc-testimonial-slide-category">
                  <span className="tc-testimonial-gold-rule" />
                  {active.category}
                </div>

                <div className="tc-testimonial-slide-person">
                  <h3>{active.name}</h3>
                  <p>{active.role}</p>
                </div>

                <div className="tc-testimonial-slide-quote-mark" aria-hidden="true">“</div>
                <blockquote>{active.quote}</blockquote>

                <div className="tc-testimonial-slide-source">
                  <span className="tc-testimonial-source-icon" aria-hidden="true">
                    <Quote size={22} />
                  </span>
                  <div>
                    <strong>{active.outcomeTitle}</strong>
                    <p>{active.outcome}</p>
                    <small>{active.source}</small>
                  </div>
                </div>
              </div>
            </article>

            <div className="tc-testimonial-carousel-controls">
              <div className="tc-testimonial-counter">
                <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
                <span className="tc-testimonial-counter-line" />
                <span>{String(testimonials.length).padStart(2, "0")} STORIES</span>
                <span className="tc-testimonial-auto-label">{isPaused ? "PAUSED" : "AUTO-ADVANCE · 9 SEC"}</span>
              </div>

              <div className="tc-testimonial-pagination" aria-label="Choose testimonial">
                {testimonials.map((item, index) => (
                  <button
                    type="button"
                    key={item.number}
                    className={index === activeIndex ? "is-active" : ""}
                    onClick={() => goTo(index)}
                    aria-label={`Show testimonial ${index + 1}: ${item.name}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>

              <div className="tc-testimonial-carousel-actions">
                <button
                  type="button"
                  onClick={() => setIsPaused((value) => !value)}
                  aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
                  title={isPaused ? "Resume carousel" : "Pause carousel"}
                >
                  {isPaused ? <ArrowRight size={17} /> : <Layers3 size={17} />}
                </button>
                <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous testimonial">
                  <ChevronLeft size={19} />
                </button>
                <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next testimonial">
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="tc-section tc-insights" id="insights">
      <div className="tc-wide">
        <Reveal>
          <div className="tc-insights-heading">
            <SectionHeading
              eyebrow="Latest from TConsult"
              title={
                <>
                  News, Insights & <span>Announcements.</span>
                </>
              }
              description="Perspectives on international business, market development, innovation and cross-border collaboration."
            />
            <a className="tc-text-link" href="/insights-media">
              View All Insights <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="tc-news-grid">
          {newsItems.map((item, index) => (
            <Reveal
              className="tc-news-wrap"
              delay={index * 100}
              key={item.title}
            >
              <article className="tc-news-card">
                <a className="tc-news-image" href={item.href}>
                  <img src={item.image} alt="" loading="lazy" />
                  <span>{item.category}</span>
                  <span className="tc-news-image-arrow">
                    <MoveUpRight size={20} />
                  </span>
                </a>
                <div className="tc-news-content">
                  <span className="tc-news-date">{item.date}</span>
                  <h3>
                    <a href={item.href}>{item.title}</a>
                  </h3>
                  <p>{item.description}</p>
                  <a className="tc-news-read" href={item.href}>
                    Explore Insight <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="tc-news-note">
          These are homepage editorial cards. Replace them with published,
          verified news items and approved dates before launch.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="tc-final-cta" id="contact">
      <div className="tc-final-cta-image" />
      <div className="tc-final-cta-overlay" />
      <div className="tc-wide tc-final-cta-inner">
        <Reveal>
          <div>
            <Eyebrow light>Start a Conversation</Eyebrow>
            <h2>
              Let’s Build What’s <span>Next, Together.</span>
            </h2>
            <p>
              Whether you are exploring a new market, seeking strategic
              partnerships or looking to commercialise an innovation, let’s
              discuss the opportunities ahead.
            </p>
            <a className="tc-btn tc-btn-gold" href="/contact">
              Start a Conversation <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="tc-home">
      <Hero />
      <TrustBar />
      <About />
      <Approach />
      <Services />
      <Exchange />
      <Regions />
      <Impact />
      <Partnerships />
      <Testimonials />
      <Insights />
      <FinalCTA />
    </main>
  );
}