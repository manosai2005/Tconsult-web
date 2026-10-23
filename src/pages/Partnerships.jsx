
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Handshake,
  Building2,
  BriefcaseBusiness,
  Users,
  Lightbulb,
  Network,
  TrendingUp,
  MapPin,
  Target,
  Landmark,
  CheckCircle2,
  Compass,
  Layers3,
} from "lucide-react";
import "./Partnerships.css";

const partnershipTypes = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Commercial Partnerships",
    description:
      "Build relevant business relationships with potential customers, B2B partners, distribution channels, and industry participants.",
    points: [
      "Business introductions",
      "Potential customer connections",
      "Commercial collaboration",
    ],
  },
  {
    number: "02",
    icon: Landmark,
    title: "Institutional Engagement",
    description:
      "Explore engagement with relevant institutions, authorities, economic zones, and organisations within the business ecosystem.",
    points: [
      "Institutional connections",
      "Ecosystem engagement",
      "Relevant local pathways",
    ],
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Innovation Partnerships",
    description:
      "Bring innovators, technology businesses, and ecosystem participants together to explore technology commercialisation and collaboration.",
    points: [
      "Innovation collaboration",
      "Technology commercialisation",
      "Entrepreneurial connections",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Strategic Growth Partnerships",
    description:
      "Explore potential growth relationships, investor introductions, and expansion pathways that align with a business's objectives.",
    points: [
      "Potential investor access",
      "Strategic relationships",
      "Expansion opportunities",
    ],
  },
];

const ecosystemItems = [
  {
    icon: Building2,
    title: "Businesses & Industry",
    description:
      "Companies looking to develop commercial relationships, reach potential customers, and explore new markets.",
  },
  {
    icon: Users,
    title: "Entrepreneurs & Innovators",
    description:
      "Founders and innovators seeking relevant connections to develop ideas, commercialise technology, and explore growth.",
  },
  {
    icon: Landmark,
    title: "Institutions & Ecosystems",
    description:
      "Relevant institutions, authorities, economic zones, and ecosystem organisations that contribute to market engagement.",
  },
  {
    icon: Handshake,
    title: "Investors & Growth Partners",
    description:
      "Potential investors and strategic partners whose interests and objectives may align with a venture's growth plans.",
  },
];

const journey = [
  {
    number: "01",
    title: "Understand",
    subtitle: "The objective",
    description:
      "Understand the business, its ambitions, target market, and the relationships it needs to explore.",
  },
  {
    number: "02",
    title: "Identify",
    subtitle: "Relevant connections",
    description:
      "Explore suitable stakeholders, potential commercial partners, and relevant ecosystem participants.",
  },
  {
    number: "03",
    title: "Connect",
    subtitle: "The right people",
    description:
      "Facilitate relevant introductions and create opportunities for meaningful business conversations.",
  },
  {
    number: "04",
    title: "Collaborate",
    subtitle: "Explore possibilities",
    description:
      "Support discussions around market access, commercial cooperation, and potential strategic relationships.",
  },
  {
    number: "05",
    title: "Grow",
    subtitle: "Look ahead",
    description:
      "Explore practical next steps and potential pathways for further regional or international expansion.",
  },
];

const markets = [
  {
    name: "Middle East",
    label: "MARKET ACCESS",
    title: "A pathway into the UAE ecosystem.",
    description:
      "Explore UAE soft-landing pathways and relevant connections across local business and institutional ecosystems.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    alt: "Dubai skyline representing the UAE business environment",
  },
  {
    name: "Africa",
    label: "CROSS-BORDER ENGAGEMENT",
    title: "Discover new commercial possibilities.",
    description:
      "Explore potential business relationships, local market context, and opportunities for cross-border collaboration.",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1200&q=85",
    alt: "African city landscape",
  },
  {
    name: "South Asia",
    label: "INNOVATION & GROWTH",
    title: "Connect innovation with opportunity.",
    description:
      "Explore connections between entrepreneurs, technology businesses, and potential international opportunities.",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=85",
    alt: "South Asian urban landscape",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function PartnershipEyebrow({ children, light = false }) {
  return (
    <div
      className={`pt-eyebrow ${light ? "pt-eyebrow--light" : ""}`}
    >
      <span />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <motion.div
      className={[
        "pt-heading",
        centered ? "pt-heading--center" : "",
        light ? "pt-heading--light" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <PartnershipEyebrow light={light}>
        {eyebrow}
      </PartnershipEyebrow>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

/*
 * Reusable photographic component.
 * Tries a secondary source if the primary image fails.
 * If both fail, the styled background remains visible.
 */
function PartnershipImage({
  src,
  fallback,
  alt,
  className = "",
  loading = "lazy",
}) {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    setImageSrc(src);
    setFailed(false);
  }, [src]);

  function handleError() {
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback);
    } else {
      setFailed(true);
    }
  }

  return (
    <img
      className={className}
      src={failed ? undefined : imageSrc}
      alt={alt}
      loading={loading}
      onError={handleError}
      aria-hidden={failed ? "true" : undefined}
    />
  );
}

function PartnershipCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="pt-partnership-card"
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="pt-card-top">
        <span className="pt-card-icon">
          <Icon size={24} strokeWidth={1.6} />
        </span>
        <span className="pt-card-number">{item.number}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <ul className="pt-card-points">
        {item.points.map((point) => (
          <li key={point}>
            <CheckCircle2 size={16} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function MarketCard({ market }) {
  return (
    <motion.article
      className="pt-market-card"
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <div className="pt-market-image">
        <PartnershipImage
          src={market.image}
          fallback="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
          alt={market.alt}
        />

        <div className="pt-market-image-overlay" />

        <span className="pt-market-label">{market.label}</span>

        <h3>{market.name}</h3>

        <span className="pt-market-location">
          <MapPin size={15} />
          Regional perspective
        </span>
      </div>

      <div className="pt-market-body">
        <h4>{market.title}</h4>
        <p>{market.description}</p>

        <Link
          to="/contact"
          className="pt-text-link"
          aria-label={`Discuss ${market.name} partnerships`}
        >
          Explore a connection <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Partnerships() {
  const [activeJourney, setActiveJourney] = React.useState(0);

  const activeStage = journey[activeJourney];

  return (
    <main className="partnerships-page">
      {/* 01 — EDITORIAL INTRODUCTION, NOT A FULL-SCREEN HERO */}
      <section className="pt-intro-section">
        <div className="pt-container pt-intro-layout">
          <motion.div
            className="pt-intro-copy"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <PartnershipEyebrow>
                PARTNERSHIPS & COLLABORATION
              </PartnershipEyebrow>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Stronger
              <br />
              <span>connections.</span>
              <br />
              Greater possibilities.
            </motion.h1>

            <motion.p variants={fadeUp}>
              Progress happens when the right people, ideas, and
              opportunities come together. TConsult helps businesses
              explore meaningful commercial relationships and cross-border
              pathways for growth.
            </motion.p>

            <motion.div
              className="pt-intro-actions"
              variants={fadeUp}
            >
              <Link to="/contact" className="pt-button pt-button--gold">
                Discuss a partnership <ArrowUpRight size={17} />
              </Link>

              <a href="#pt-partnership-types" className="pt-text-link">
                Explore our approach <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div className="pt-intro-note" variants={fadeUp}>
              <Globe2 size={18} />
              <span>
                People. Ideas. Opportunities. Beyond borders.
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="pt-intro-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <PartnershipImage
              className="pt-intro-photo"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375c902?auto=format&fit=crop&w=1400&q=85"
              fallback="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
              alt="Professionals collaborating on a business project"
              loading="eager"
            />

            <div className="pt-intro-overlay" />

            <div className="pt-image-topline">
              <span>01</span>
              <i />
              <span>BUILDING RELATIONSHIPS</span>
            </div>

            <div className="pt-image-caption">
              <span>COLLABORATION WITH PURPOSE</span>
              <strong>
                Better connections create room for growth.
              </strong>
            </div>

            <motion.div
              className="pt-floating-card"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="pt-floating-icon">
                <Handshake size={22} />
              </span>
              <div>
                <strong>Partnerships that matter</strong>
                <small>Built around shared objectives</small>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 02 — PARTNERSHIP POSITIONING */}
      <section className="pt-purpose-section">
        <div className="pt-container pt-purpose-layout">
          <motion.div
            className="pt-purpose-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <PartnershipEyebrow>THE PURPOSE OF PARTNERSHIP</PartnershipEyebrow>

            <h2>
              Not just opening doors.
              <br />
              <span>Creating pathways forward.</span>
            </h2>

            <p>
              Businesses may have the right ideas, products, and ambition,
              yet still need local knowledge, relevant connections, and
              practical support to explore a new market.
            </p>

            <p>
              TConsult bridges that gap by bringing business objectives
              together with potential commercial partners, institutions,
              investors, and wider ecosystem opportunities.
            </p>

            <Link to="/services" className="pt-text-link">
              Discover what we do <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            className="pt-purpose-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <PartnershipImage
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
              fallback="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Contemporary professional collaboration space"
            />

            <div className="pt-purpose-image-shade" />

            <div className="pt-purpose-image-copy">
              <span>THE TCONSULT APPROACH</span>
              <strong>One objective. Relevant connections. Multiple pathways.</strong>
            </div>

            <div className="pt-purpose-stamp">
              <Network size={23} />
              <span>CROSS-BORDER<br />CONNECTIVITY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 — FOUR PARTNERSHIP CATEGORIES */}
      <section
        className="pt-partnership-types-section"
        id="pt-partnership-types"
      >
        <div className="pt-container">
          <SectionHeading
            eyebrow="WAYS TO COLLABORATE"
            title={
              <>
                Different strengths.
                <br />
                <span>Shared opportunities.</span>
              </>
            }
            description="Partnerships can take different forms depending on the business objective, the market, and the participants involved."
          />

          <motion.div
            className="pt-partnership-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {partnershipTypes.map((item) => (
              <PartnershipCard key={item.number} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04 — THE CONNECTED ECOSYSTEM */}
      <section className="pt-ecosystem-section">
        <div className="pt-container">
          <div className="pt-ecosystem-header">
            <SectionHeading
              eyebrow="THE PARTNERSHIP ECOSYSTEM"
              title={
                <>
                  Bringing the right
                  <br />
                  participants together.
                </>
              }
              description="A meaningful business relationship starts with a clear purpose. Depending on the opportunity, TConsult can help explore connections across different parts of the ecosystem."
            />

            <div className="pt-ecosystem-side-note">
              <Globe2 size={24} />
              <p>
                Cross-border engagement
                <span>Local context. Shared ambition.</span>
              </p>
            </div>
          </div>

          <motion.div
            className="pt-ecosystem-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="pt-ecosystem-card"
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="pt-ecosystem-card-top">
                    <span>
                      <Icon size={23} strokeWidth={1.6} />
                    </span>
                    <small>0{index + 1}</small>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="pt-card-bottom-line" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 05 — REGIONAL COLLABORATION */}
      <section className="pt-markets-section">
        <div className="pt-container">
          <SectionHeading
            eyebrow="PARTNERSHIPS ACROSS MARKETS"
            title={
              <>
                Local relevance.
                <br />
                <span>International perspective.</span>
              </>
            }
            description="We explore relationships and market opportunities across regions, recognising that every business environment has its own context and requirements."
            centered
          />

          <motion.div
            className="pt-markets-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {markets.map((market) => (
              <MarketCard key={market.name} market={market} />
            ))}
          </motion.div>

          <div className="pt-markets-footnote">
            <MapPin size={18} />
            <p>
              These are regional areas of focus for exploring opportunities,
              not a claim of offices or direct operations in every market.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — THE FIVE-STAGE PARTNERSHIP JOURNEY */}
      <section className="pt-journey-section">
        <div className="pt-container">
          <SectionHeading
            eyebrow="FROM INTRODUCTION TO OPPORTUNITY"
            title={
              <>
                A considered path
                <br />
                <span>from connection to growth.</span>
              </>
            }
            description="Our approach is tailored to each business. Explore the stages below to see how a potential partnership can progress."
            light
          />

          <div className="pt-journey-layout">
            <div
              className="pt-journey-steps"
              role="tablist"
              aria-label="Partnership journey stages"
            >
              {journey.map((stage, index) => (
                <button
                  type="button"
                  role="tab"
                  key={stage.number}
                  className={`pt-journey-step ${
                    activeJourney === index ? "is-active" : ""
                  }`}
                  aria-selected={activeJourney === index}
                  onClick={() => setActiveJourney(index)}
                >
                  <span className="pt-journey-step-number">
                    {stage.number}
                  </span>

                  <span className="pt-journey-step-copy">
                    <strong>{stage.title}</strong>
                    <small>{stage.subtitle}</small>
                  </span>

                  <ArrowRight size={18} />
                </button>
              ))}
            </div>

            <motion.div
              className="pt-journey-detail"
              key={activeStage.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
            >
              <span className="pt-journey-detail-number">
                {activeStage.number}
              </span>

              <Compass size={29} className="pt-journey-detail-icon" />

              <span className="pt-journey-detail-label">
                STAGE {activeStage.number} OF 05
              </span>

              <h3>{activeStage.title}</h3>

              <p>{activeStage.description}</p>

              <div className="pt-journey-detail-footer">
                <Layers3 size={17} />
                <span>Tailored to the business and its objectives</span>
              </div>
            </motion.div>
          </div>

          <div className="pt-journey-bottom">
            <span>THE TCONSULT DIFFERENCE</span>
            <strong>
              One cross-border partner. Multiple pathways to growth.
            </strong>
          </div>
        </div>
      </section>

      {/* 07 — SELECTIVE STRATEGIC GROWTH PARTNERSHIPS */}
      <section className="pt-growth-section">
        <div className="pt-container pt-growth-layout">
          <motion.div
            className="pt-growth-visual"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <PartnershipImage
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
              fallback="https://images.unsplash.com/photo-1521737711867-e3b97375c902?auto=format&fit=crop&w=1200&q=85"
              alt="Business team discussing strategy and growth"
            />

            <div className="pt-growth-overlay" />

            <div className="pt-growth-photo-caption">
              <span>SELECTIVE VENTURE PARTNERSHIP</span>
              <strong>Strategic support. Long-term value creation.</strong>
            </div>
          </motion.div>

          <motion.div
            className="pt-growth-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <PartnershipEyebrow>BEYOND MARKET ENTRY</PartnershipEyebrow>

            <h2>
              Into business
              <br />
              <span>growth.</span>
            </h2>

            <p>
              In addition to market-entry support, TConsult's business
              model includes selectively partnering with high-potential
              ventures to explore strategic growth and long-term value
              creation.
            </p>

            <p>
              For selected ventures, the model may include equity
              participation, customer acquisition support, investor access,
              and institutional connections.
            </p>

            <div className="pt-growth-points">
              <div>
                <CheckCircle2 size={18} />
                <span>Selective venture participation</span>
              </div>
              <div>
                <CheckCircle2 size={18} />
                <span>Strategic and commercial support</span>
              </div>
              <div>
                <CheckCircle2 size={18} />
                <span>Potential pathways to growth and exit</span>
              </div>
            </div>

            <p className="pt-growth-disclaimer">
              Venture participation is selective. Equity terms, timelines,
              and exit arrangements depend on the specific venture and
              agreed terms; they are not universal commitments.
            </p>

            <Link to="/contact" className="pt-text-link">
              Discuss strategic collaboration <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 08 — FINAL PARTNERSHIP CALL TO ACTION */}
      <section className="pt-cta-section">
        <div className="pt-cta-background">
          <PartnershipImage
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
            fallback="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
            alt="Modern collaborative business workspace"
          />
          <div className="pt-cta-overlay" />
        </div>

        <div className="pt-container pt-cta-content">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <PartnershipEyebrow light>
                LET'S BUILD SOMETHING MEANINGFUL
              </PartnershipEyebrow>
            </motion.div>

            <motion.h2 variants={fadeUp}>
              The right connection
              <br />
              can change what's possible.
            </motion.h2>

            <motion.p variants={fadeUp}>
              Whether you're exploring a commercial partnership, entering
              a new market, or looking for strategic collaboration, let's
              start with the opportunity you want to create.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link to="/contact" className="pt-button pt-button--gold">
                Start a conversation <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
