
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Globe2,
  Building2,
  Users,
  Handshake,
  TrendingUp,
  Target,
  Network,
  BriefcaseBusiness,
  MapPinned,
  Search,
  ChartNoAxesCombined,
  Landmark,
  Route,
} from "lucide-react";
import "./Services.css";

const capabilities = [
  {
    number: "01",
    icon: Globe2,
    title: "Cross-Border Access",
    description:
      "Connect international business ambitions with relevant local market opportunities, relationships, and ecosystem participants.",
    points: [
      "Explore opportunities in the UAE",
      "Identify relevant local connections",
      "Navigate cross-border business relationships",
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Modern international business workspace",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "UAE Market Entry",
    description:
      "Help businesses understand their entry options and work towards a practical soft landing in the United Arab Emirates.",
    points: [
      "Market-entry readiness and planning",
      "Guidance on local setup pathways",
      "Connections with relevant service providers and economic zones",
    ],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Dubai skyline representing the UAE business environment",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Commercial Connections",
    description:
      "Help businesses discover potential customers, B2B partners, distribution channels, and relevant commercial opportunities.",
    points: [
      "Customer and B2B opportunity identification",
      "Commercial partner introductions",
      "Distribution and industry connections",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375c902?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Professionals collaborating on commercial opportunities",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Facilitate relevant investor and institutional connections while helping businesses explore pathways for continued commercial growth.",
    points: [
      "Investor introductions and engagement",
      "Institutional and stakeholder connections",
      "Regional and international expansion opportunities",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Business analytics used to evaluate growth opportunities",
  },
];

const journey = [
  {
    number: "01",
    icon: Search,
    title: "Strategy & Market Readiness",
    description:
      "Understand the business, identify suitable opportunities, and map a practical route into the target market.",
    tag: "ASSESS",
  },
  {
    number: "02",
    icon: Building2,
    title: "UAE Soft Landing",
    description:
      "Guide businesses through local setup pathways and connect them with relevant service providers and economic zones.",
    tag: "ESTABLISH",
  },
  {
    number: "03",
    icon: Users,
    title: "Customer & B2B Acquisition",
    description:
      "Identify potential customers, distribution channels, commercial partners, and business opportunities.",
    tag: "CONNECT",
  },
  {
    number: "04",
    icon: Landmark,
    title: "Investor & Institutional Connections",
    description:
      "Facilitate relevant introductions to investors, local authorities, institutions, and strategic stakeholders.",
    tag: "ENGAGE",
  },
  {
    number: "05",
    icon: ChartNoAxesCombined,
    title: "Expansion & Growth",
    description:
      "Support commercial development and explore opportunities for further regional or international expansion.",
    tag: "EXPAND",
  },
];

const engagementModels = [
  {
    icon: Compass,
    number: "01",
    title: "Market Entry",
    description:
      "For businesses seeking to establish a presence in the UAE and build relevant commercial connections.",
    features: [
      "UAE soft landing",
      "Establishment guidance",
      "Relevant business connections",
    ],
  },
  {
    icon: Network,
    number: "02",
    title: "Strategic Growth",
    description:
      "For selected opportunities requiring deeper engagement around commercial development and growth.",
    features: [
      "Customer acquisition support",
      "Investor access and introductions",
      "Institutional connections",
    ],
  },
];

const servicePrinciples = [
  {
    icon: Target,
    title: "Business-specific",
    description:
      "Support is tailored to each business, its objectives, and its target market.",
  },
  {
    icon: Network,
    title: "Relationship-led",
    description:
      "We focus on relevant introductions and connections aligned with the opportunity.",
  },
  {
    icon: Route,
    title: "End-to-end perspective",
    description:
      "We consider the journey from market readiness to commercial development and expansion.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function SectionLabel({ children }) {
  return (
    <div className="services-label">
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
}) {
  return (
    <motion.div
      className={`services-heading ${
        centered ? "services-heading--center" : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function CapabilityCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="services-capability-card"
      variants={fadeUp}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
    >
      <div className="services-capability-image">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
        />
        <div className="services-image-overlay" />
        <span className="services-card-number">{item.number}</span>
        <span className="services-capability-icon">
          <Icon size={23} strokeWidth={1.6} />
        </span>
      </div>

      <div className="services-capability-body">
        <span className="services-card-kicker">
          CAPABILITY {item.number}
        </span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <ul className="services-check-list">
          {item.points.map((point) => (
            <li key={point}>
              <Check size={15} strokeWidth={2} />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="services-card-link"
          aria-label={`Enquire about ${item.title}`}
        >
          Discuss your requirements
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}

function JourneyStep({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="services-journey-step"
      variants={fadeUp}
    >
      <div className="services-journey-marker">
        <span>{item.number}</span>
        <div className="services-journey-icon">
          <Icon size={22} strokeWidth={1.6} />
        </div>
      </div>

      <div className="services-journey-content">
        <span className="services-journey-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      {index !== journey.length - 1 && (
        <div className="services-journey-connector" aria-hidden="true" />
      )}
    </motion.article>
  );
}

export default function Services() {
  return (
    <main className="services-page">
      {/* 01 — SERVICES HERO */}
      <section className="services-hero">
        <div className="services-hero-grid" aria-hidden="true" />
        <div className="services-hero-glow" aria-hidden="true" />

        <div className="services-container services-hero-layout">
          <motion.div
            className="services-hero-copy"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>OUR SERVICES</SectionLabel>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              From market entry
              <br />
              to <span>business growth.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              We help businesses cross borders, enter new markets, establish
              meaningful commercial connections, and explore pathways to
              sustainable growth.
            </motion.p>

            <motion.div
              className="services-hero-actions"
              variants={fadeUp}
            >
              <Link
                to="/contact"
                className="services-button services-button--gold"
              >
                Explore a partnership
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#services-capabilities"
                className="services-hero-secondary"
              >
                Discover our capabilities
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div className="services-hero-footnote" variants={fadeUp}>
              <span className="services-hero-footnote-line" />
              <span>
                Cross-border expansion · Commercial connections · Growth
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="services-hero-visual"
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="services-hero-image">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1500&q=90"
                alt="Dubai skyline and the UAE business landscape"
                fetchPriority="high"
              />
              <div className="services-hero-image-shade" />
              <div className="services-hero-image-caption">
                <span>YOUR NEXT MARKET</span>
                <strong>A pathway into the UAE.</strong>
              </div>
            </div>

            <motion.div
              className="services-hero-floating"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="services-floating-icon">
                <Globe2 size={21} />
              </span>
              <span>
                <strong>Beyond borders</strong>
                <small>Connected to opportunity</small>
              </span>
            </motion.div>

            <span
              className="services-hero-orbit services-hero-orbit--one"
              aria-hidden="true"
            />
            <span
              className="services-hero-orbit services-hero-orbit--two"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="services-hero-bottom">
          <span>01 — OUR CAPABILITIES</span>
          <span className="services-hero-bottom-line" />
          <span>TCONSULT GLOBAL</span>
        </div>
      </section>

      {/* 02 — CAPABILITIES */}
      <section
        className="services-capabilities services-section"
        id="services-capabilities"
      >
        <div className="services-container">
          <SectionHeading
            eyebrow="WHAT WE HELP YOU DO"
            title={
              <>
                The connections that move
                <br />
                <span className="services-gold-text">business forward.</span>
              </>
            }
            description="Our services focus on four practical areas that help businesses explore the UAE market, build commercial relationships, and identify opportunities for growth."
            centered
          />

          <motion.div
            className="services-capabilities-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {capabilities.map((item, index) => (
              <CapabilityCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 03 — END-TO-END JOURNEY */}
      <section className="services-journey-section services-section">
        <div className="services-container">
          <div className="services-journey-intro">
            <SectionHeading
              eyebrow="OUR EXPANSION JOURNEY"
              title={
                <>
                  A practical path from
                  <br />
                  <span className="services-gold-text">
                    ambition to opportunity.
                  </span>
                </>
              }
              description="Every business has a different starting point. Our approach can span the following stages, depending on the business, its objectives, and the support required."
            />

            <motion.div
              className="services-journey-aside"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="services-aside-icon">
                <Compass size={25} />
              </span>
              <span className="services-aside-label">
                A BUSINESS-SPECIFIC APPROACH
              </span>
              <p>
                From preparing for a new market to developing commercial
                relationships, support is shaped around the individual
                opportunity.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="services-journey-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {journey.map((item, index) => (
              <JourneyStep
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04 — TWO ENGAGEMENT MODELS */}
      <section className="services-models-section services-section">
        <div className="services-container">
          <SectionHeading
            eyebrow="HOW WE ENGAGE"
            title={
              <>
                Different needs.
                <br />
                <span className="services-gold-text">
                  Relevant pathways.
                </span>
              </>
            }
            description="Our work brings together two complementary models: supporting businesses entering the UAE and selectively partnering with high-potential ventures to pursue growth."
          />

          <div className="services-models-grid">
            {engagementModels.map((model, index) => {
              const Icon = model.icon;

              return (
                <motion.article
                  className="services-model-card"
                  key={model.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="services-model-top">
                    <span className="services-model-icon">
                      <Icon size={24} strokeWidth={1.6} />
                    </span>
                    <span className="services-model-number">
                      {model.number}
                    </span>
                  </div>

                  <h3>{model.title}</h3>
                  <p>{model.description}</p>

                  <div className="services-model-divider" />

                  <ul className="services-check-list">
                    {model.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="services-model-link"
                  >
                    Discuss this pathway
                    <ArrowRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <motion.p
            className="services-model-disclaimer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Strategic growth and venture participation are selective
            arrangements, subject to the suitability of the opportunity and
            mutually agreed terms. Services and outcomes depend on each
            engagement.
          </motion.p>
        </div>
      </section>

      {/* 05 — HOW WE WORK */}
      <section className="services-principles-section services-section">
        <div className="services-container services-principles-layout">
          <motion.div
            className="services-principles-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Business professionals working together on a strategy"
              loading="lazy"
            />
            <div className="services-principles-photo-overlay" />
            <div className="services-principles-photo-caption">
              <span>THE TCONSULT APPROACH</span>
              <strong>One cross-border partner. Multiple pathways to growth.</strong>
            </div>
          </motion.div>

          <div className="services-principles-content">
            <SectionHeading
              eyebrow="THE WAY WE WORK"
              title={
                <>
                  Built around your
                  <br />
                  <span className="services-gold-text">
                    business objectives.
                  </span>
                </>
              }
              description="Cross-border growth requires more than a single introduction. It takes a clear understanding of the opportunity and the relationships that can help move it forward."
            />

            <div className="services-principles-list">
              {servicePrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    className="services-principle"
                    key={principle.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="services-principle-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CONTACT CTA */}
      <section className="services-cta-section">
        <div className="services-cta-pattern" aria-hidden="true" />
        <div className="services-container services-cta-inner">
          <motion.div
            className="services-cta-copy"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>LET'S EXPLORE WHAT'S POSSIBLE</SectionLabel>
            <motion.h2 variants={fadeUp}>
              Your next market.
              <br />
              <span>Your next opportunity.</span>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Tell us about your business, your target market, and where you
              want to go next. Let’s explore the connections and pathways that
              may help you move forward.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="services-button services-button--gold"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="services-cta-symbol"
            initial={{ opacity: 0, rotate: -12, scale: 0.85 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="services-cta-ring services-cta-ring--outer" />
            <div className="services-cta-ring services-cta-ring--middle" />
            <div className="services-cta-ring services-cta-ring--inner" />
            <div className="services-cta-center">
              <Globe2 size={43} strokeWidth={1.2} />
              <span>TCONSULT</span>
            </div>
            <span className="services-cta-node services-cta-node--one" />
            <span className="services-cta-node services-cta-node--two" />
            <span className="services-cta-node services-cta-node--three" />
            <span className="services-cta-node services-cta-node--four" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
