
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Newspaper,
  Lightbulb,
  TrendingUp,
  Building2,
  CalendarDays,
  ExternalLink,
  BookOpen,
  Network,
  Search,
  Radio,
  Handshake,
  BriefcaseBusiness,
  Mic2,
} from "lucide-react";
import "./Insights.css";

const featuredStory = {
  category: "International Engagement",
  title:
    "ICIE and TConsult Global delegation meets India's Consul General in Dubai",
  description:
    "A delegation led by Sundeep Kumar Makthala met Dr E. Vishnu Vardhan Reddy to discuss India–UAE collaboration in innovation, investment, technology exchange, entrepreneurship, and international market access.",
  publisher: "Telangana Today",
  date: "3 August 2026",
  url: "https://telanganatoday.com/icie-delegation-meets-indias-new-consul-general-in-dubai",
  image:
    "https://media.telanganatoday.com/wp-content/uploads/2026/08/TConsult.jpg",
  imageAlt:
    "Photograph published with Telangana Today's coverage of the TConsult and ICIE delegation",
};

const publishedStories = [
  {
    id: "t-hub-mou",
    category: "Media Coverage",
    topic: "Innovation & Startups",
    title: "T-Hub and TConsult join hands to connect startups with global markets",
    description:
      "The report covers a memorandum of understanding intended to help Telangana startups explore international markets through advisory support, company-formation guidance, business expansion tours, networking, and international trade fairs.",
    publisher: "The Times of India",
    date: "7 July 2024",
    url: "https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms",
    image:
      "https://static.toiimg.com/thumb/msid-111559146,imgsize-16724,width-1200,height-675,resizemode-72/t-hub-tconsult-join-hands.jpg",
    alt: "Image associated with Times of India's T-Hub and TConsult report",
  },
  {
    id: "collaborative-summit",
    category: "Media Coverage",
    topic: "Events & Ecosystems",
    title: "117 agreements reported at the T-Consult Collaborative Summit",
    description:
      "Telangana Tribune covered the 2024 summit at T-Hub in Gachibowli, reporting on agreements and discussions involving innovators, investors, talent, and business programmes.",
    publisher: "Telangana Tribune",
    date: "1 December 2024",
    url: "https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    alt: "Conference setting representing business and innovation events",
  },
  {
    id: "investor-pool",
    category: "Media Coverage",
    topic: "Investment & Growth",
    title: "Bu Abdullah Group joins the TConsult Global Investor Pool",
    description:
      "HITEX published coverage of the group's participation in the investor-pool initiative, which aims to connect international investors with businesses exploring global expansion.",
    publisher: "HITEX",
    date: null,
    url: "https://hitex.co.in/news/bu-abdullah-group-joins-tconsult-global-investor-pool.html",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary commercial buildings representing business investment",
  },
];

const perspectives = [
  {
    id: "cross-border",
    category: "Perspectives",
    topic: "Global Expansion",
    title: "Beyond market entry: building relationships that create opportunity",
    description:
      "A proposed editorial topic exploring local knowledge, stakeholder relationships, and the preparation required to explore a new market.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375c902?auto=format&fit=crop&w=1000&q=85",
    alt: "Professionals working together around a table",
    icon: Globe2,
  },
  {
    id: "innovation",
    category: "Perspectives",
    topic: "Innovation & Technology",
    title: "From innovation to commercial possibility",
    description:
      "A proposed perspective on how founders, technology, customers, and business networks can come together to explore commercial opportunities.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
    alt: "Team discussing ideas and business strategy",
    icon: Lightbulb,
  },
  {
    id: "market-entry",
    category: "Perspectives",
    topic: "Market Entry",
    title: "A considered approach to exploring the UAE market",
    description:
      "A proposed guide to market research, local requirements, business setup pathways, and the importance of qualified local guidance.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
    alt: "Dubai skyline representing a potential market for expansion",
    icon: Building2,
  },
];

const categories = [
  "All",
  "Media Coverage",
  "Perspectives",
];

const focusAreas = [
  {
    number: "01",
    title: "Global Business Expansion",
    description:
      "Market analysis, market-entry pathways, company-formation guidance, and connections for businesses exploring new markets.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Innovation & Entrepreneurship",
    description:
      "The people, institutions, founders, and business relationships that can help innovation move towards commercial opportunities.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Investment & Business Growth",
    description:
      "Investor connections, customer introductions, business visibility, and opportunities to explore strategic collaboration.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Partnerships & Ecosystems",
    description:
      "Cross-border engagement involving businesses, institutions, investors, startups, and wider innovation ecosystems.",
    icon: Handshake,
  },
];

const imageFallback =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Eyebrow({ children, light = false }) {
  return (
    <div className={`ins-eyebrow ${light ? "ins-eyebrow--light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

function Photo({ src, alt, className = "" }) {
  const [currentSrc, setCurrentSrc] = React.useState(src);
  const [usedFallback, setUsedFallback] = React.useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setUsedFallback(false);
  }, [src]);

  return (
    <img
      className={className}
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (!usedFallback) {
          setCurrentSrc(imageFallback);
          setUsedFallback(true);
        }
      }}
    />
  );
}

function StoryCard({ story }) {
  const isPerspective = story.category === "Perspectives";
  const Icon = story.icon || Newspaper;

  return (
    <motion.article
      className="ins-story-card"
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <div className="ins-story-photo">
        <Photo src={story.image} alt={story.alt} />

        <span className="ins-story-category">{story.category}</span>

        <span className="ins-story-icon">
          <Icon size={19} />
        </span>
      </div>

      <div className="ins-story-body">
        <div className="ins-story-meta">
          <span>{story.topic}</span>
          {story.date && (
            <span className="ins-story-date">
              <CalendarDays size={13} />
              {story.date}
            </span>
          )}
        </div>

        <h3>{story.title}</h3>
        <p>{story.description}</p>

        {isPerspective ? (
          <a className="ins-read-link" href="#ins-focus">
            Explore the topic <ArrowRight size={16} />
          </a>
        ) : (
          <a
            className="ins-read-link"
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read original coverage <ExternalLink size={15} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const allStories = [...publishedStories, ...perspectives];

  const visibleStories = allStories.filter((story) => {
    const categoryMatches =
      activeCategory === "All" || story.category === activeCategory;

    const query = searchTerm.trim().toLowerCase();

    const searchMatches =
      !query ||
      [
        story.title,
        story.description,
        story.topic,
        story.category,
        story.publisher,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);

    return categoryMatches && searchMatches;
  });

  return (
    <main className="insights-page">
      {/* 01 — INTRODUCTION */}
      <section className="ins-intro">
        <div className="ins-container ins-intro-layout">
          <motion.div
            className="ins-intro-copy"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>INSIGHTS & MEDIA</Eyebrow>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Ideas that move
              <br />
              <span>business forward.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Discover TConsult's published media coverage, company
              developments, and perspectives on global business expansion,
              innovation, investment, and cross-border collaboration.
            </motion.p>

            <motion.div className="ins-intro-points" variants={fadeUp}>
              <span><Newspaper size={16} /> Published coverage</span>
              <span><Globe2 size={16} /> Global business</span>
              <span><Lightbulb size={16} /> Ideas & perspectives</span>
            </motion.div>

            <motion.a
              className="ins-text-link"
              href="#ins-stories"
              variants={fadeUp}
            >
              Explore stories <ArrowRight size={17} />
            </motion.a>
          </motion.div>

          <motion.div
            className="ins-intro-visual"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Photo
              src={featuredStory.image}
              alt={featuredStory.imageAlt}
              className="ins-intro-image"
            />

            <div className="ins-intro-overlay" />

            <div className="ins-intro-label">
              <Radio size={16} />
              COMPANY NEWS · IDEAS · MEDIA
            </div>

            <div className="ins-intro-caption">
              <span>THE TCONSULT PERSPECTIVE</span>
              <strong>
                Connecting people, ideas, and opportunities beyond borders.
              </strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — FEATURED VERIFIED STORY */}
      <section className="ins-featured-section">
        <div className="ins-container">
          <div className="ins-section-topline">
            <Eyebrow>FEATURED COVERAGE</Eyebrow>
            <span className="ins-section-number">01 / IN THE NEWS</span>
          </div>

          <motion.article
            className="ins-featured-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <a
              className="ins-featured-photo"
              href={featuredStory.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the original Telangana Today article"
            >
              <Photo
                src={featuredStory.image}
                alt={featuredStory.imageAlt}
              />

              <span className="ins-featured-photo-label">
                <Newspaper size={15} /> PUBLISHED MEDIA
              </span>

              <span className="ins-featured-photo-arrow">
                <ArrowUpRight size={23} />
              </span>
            </a>

            <div className="ins-featured-content">
              <div className="ins-featured-meta">
                <span>{featuredStory.publisher}</span>
                <i />
                <span>{featuredStory.date}</span>
              </div>

              <h2>{featuredStory.title}</h2>

              <p>{featuredStory.description}</p>

              <div className="ins-featured-note">
                <Globe2 size={20} />
                <p>
                  The reported discussion explored strategic partnerships,
                  innovation-led investment, business expansion, technology
                  exchange, and access to international markets.
                </p>
              </div>

              <a
                className="ins-button ins-button--gold"
                href={featuredStory.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the original article <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* 03 — SEARCHABLE NEWSROOM */}
      <section className="ins-stories-section" id="ins-stories">
        <div className="ins-container">
          <motion.div
            className="ins-stories-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="ins-stories-heading-copy">
              <Eyebrow>THE NEWSROOM</Eyebrow>
              <h2>
                Stories, developments
                <br />
                <span>& perspectives.</span>
              </h2>
              <p>
                Explore independently published coverage and clearly
                identified editorial topics connected to TConsult's work.
              </p>
            </div>

            <label className="ins-search">
              <Search size={18} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search insights..."
                aria-label="Search media stories and insights"
              />
            </label>
          </motion.div>

          <div className="ins-filter-row" aria-label="Filter insights">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`ins-filter-button ${
                  activeCategory === category ? "is-active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}

            <span className="ins-result-count">
              {visibleStories.length}{" "}
              {visibleStories.length === 1 ? "result" : "results"}
            </span>
          </div>

          {visibleStories.length > 0 ? (
            <motion.div
              className="ins-stories-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.06 }}
            >
              {visibleStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </motion.div>
          ) : (
            <div className="ins-empty-state">
              <Search size={27} />
              <h3>No matching stories</h3>
              <p>
                Try another keyword or select a different category.
              </p>
              <button
                className="ins-button ins-button--outline"
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
              >
                Clear search
              </button>
            </div>
          )}

          <p className="ins-editorial-disclaimer">
            The Perspectives cards identify proposed editorial topics.
            They are not represented as already published articles.
          </p>
        </div>
      </section>

      {/* 04 — COMPANY DEVELOPMENTS */}
      <section className="ins-developments-section">
        <div className="ins-container">
          <motion.div
            className="ins-developments-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Eyebrow>COMPANY DEVELOPMENTS</Eyebrow>
            <h2>
              Connections that
              <br />
              <span>bring ecosystems together.</span>
            </h2>
            <p>
              The following milestones are drawn from published reporting
              and the TConsult company-profile material.
            </p>
          </motion.div>

          <div className="ins-timeline">
            <motion.article
              className="ins-timeline-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="ins-timeline-marker">
                <span>2026</span>
              </div>
              <div className="ins-timeline-content">
                <span className="ins-timeline-label">3 AUGUST 2026 · MEDIA REPORT</span>
                <h3>India–UAE innovation and business dialogue</h3>
                <p>
                  Telangana Today reported on a meeting involving TConsult
                  Global and ICIE representatives and India's Consul General
                  in Dubai, covering investment, technology exchange,
                  entrepreneurship, and market access.
                </p>
                <a
                  href={featuredStory.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ins-text-link"
                >
                  Read the report <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>

            <motion.article
              className="ins-timeline-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="ins-timeline-marker">
                <span>2024</span>
              </div>
              <div className="ins-timeline-content">
                <span className="ins-timeline-label">7 JULY 2024 · MEDIA REPORT</span>
                <h3>T-Hub and TConsult collaboration</h3>
                <p>
                  The Times of India reported on an MoU focused on helping
                  Telangana startups explore international markets through
                  advisory support, company formation, expansion tours,
                  networking, and trade-fair opportunities.
                </p>
                <a
                  href="https://timesofindia.indiatimes.com/city/hyderabad/telangana-t-hub-tconsult-join-hands-to-link-global-markets-to-startups/articleshow/111559123.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ins-text-link"
                >
                  Read the report <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>

            <motion.article
              className="ins-timeline-item"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="ins-timeline-marker">
                <span>2024</span>
              </div>
              <div className="ins-timeline-content">
                <span className="ins-timeline-label">1 DECEMBER 2024 · MEDIA REPORT</span>
                <h3>T-Consult Collaborative Summit</h3>
                <p>
                  Telangana Tribune reported that 117 agreements were
                  finalized during the summit at T-Hub in Gachibowli.
                  The coverage discussed engagement between innovators,
                  investors, and business programmes.
                </p>
                <a
                  href="https://www.telanganatribune.com/117-agreements-finalized-at-t-consult-summit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ins-text-link"
                >
                  Read the report <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* 05 — EDITORIAL FOCUS */}
      <section className="ins-focus-section" id="ins-focus">
        <div className="ins-container">
          <motion.div
            className="ins-focus-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Eyebrow light>AREAS OF FOCUS</Eyebrow>
            <h2>
              The conversations
              <br />
              <span>that shape opportunity.</span>
            </h2>
            <p>
              These themes reflect TConsult's company-profile focus and
              cross-border business orientation.
            </p>
          </motion.div>

          <motion.div
            className="ins-focus-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.article
                  className="ins-focus-card"
                  variants={fadeUp}
                  key={area.number}
                  whileHover={{ y: -4 }}
                >
                  <span className="ins-focus-number">{area.number}</span>
                  <Icon size={28} />
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="ins-focus-rule" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 06 — ABOUT TCONSULT */}
      <section className="ins-company-section">
        <div className="ins-container ins-company-layout">
          <motion.div
            className="ins-company-photo"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Photo
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
              alt="Contemporary business workspace representing collaboration"
            />
            <div className="ins-company-photo-overlay" />
            <div className="ins-company-photo-caption">
              <span>THE TCONSULT APPROACH</span>
              <strong>
                From local ambition to global opportunity.
              </strong>
            </div>
          </motion.div>

          <motion.div
            className="ins-company-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>ABOUT TCONSULT GLOBAL</Eyebrow>

            <h2>
              A business bridge
              <br />
              built around <span>connections.</span>
            </h2>

            <p>
              TConsult describes its role as connecting people and
              businesses with relevant expertise, practical guidance,
              market-entry support, and international business networks.
            </p>

            <p>
              Its company-profile material identifies advisory and market
              analysis, regulatory and certification guidance, company
              formation support, expert consultation, global network access,
              and startup visibility as areas of support.
            </p>

            <div className="ins-company-points">
              <div>
                <span><BookOpen size={19} /></span>
                <div>
                  <strong>Practical guidance</strong>
                  <small>Market research and expansion pathways</small>
                </div>
              </div>

              <div>
                <span><Network size={19} /></span>
                <div>
                  <strong>Cross-border connections</strong>
                  <small>Relevant stakeholders and business networks</small>
                </div>
              </div>

              <div>
                <span><BriefcaseBusiness size={19} /></span>
                <div>
                  <strong>Business development</strong>
                  <small>Support to explore growth and market access</small>
                </div>
              </div>
            </div>

            <Link to="/about" className="ins-text-link">
              Discover TConsult <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 07 — MEDIA AND COLLABORATION CTA */}
      <section className="ins-cta-section">
        <div className="ins-cta-photo">
          <Photo
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
            alt="Contemporary meeting space"
          />
        </div>
        <div className="ins-cta-overlay" />

        <div className="ins-container ins-cta-content">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow light>LET'S START A CONVERSATION</Eyebrow>
            </motion.div>

            <motion.h2 variants={fadeUp}>
              Have a story, idea,
              <br />
              or opportunity to share?
            </motion.h2>

            <motion.p variants={fadeUp}>
              Connect with TConsult to discuss business collaboration,
              cross-border opportunities, media enquiries, or ideas for
              future conversations.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link to="/contact" className="ins-button ins-button--gold">
                Contact TConsult <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
