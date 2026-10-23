
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  MapPin,
  Handshake,
  Landmark,
  Users,
  Network,
  BriefcaseBusiness,
  TrendingUp,
  Compass,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import "./GlobalNetwork.css";

const regions = [
  {
    id: "middle-east",
    number: "01",
    name: "Middle East",
    heading: "A strategic gateway to opportunity.",
    description:
      "The UAE is a key focus of TConsult's cross-border approach. We help international businesses explore local market-entry pathways, build relevant relationships, and connect with participants in the regional business ecosystem.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    alt: "Dubai skyline and the UAE business landscape",
    tag: "UAE MARKET ACCESS",
    details: [
      "UAE soft-landing pathways",
      "Local commercial connections",
      "Institutional and ecosystem engagement",
    ],
  },
  {
    id: "africa",
    number: "02",
    name: "Africa",
    heading: "Exploring opportunities across emerging markets.",
    description:
      "We seek to facilitate cross-border relationships that help businesses explore new markets, understand local business environments, and identify potential partners aligned with their commercial objectives.",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1400&q=85",
    alt: "African urban landscape",
    tag: "CROSS-BORDER OPPORTUNITIES",
    details: [
      "Potential business introductions",
      "Market and ecosystem exploration",
      "Commercial partnership opportunities",
    ],
  },
  {
    id: "south-asia",
    number: "03",
    name: "South Asia",
    heading: "Connecting innovation with global markets.",
    description:
      "We help connect entrepreneurs, technology businesses, and organisations with potential international opportunities, supporting conversations around commercialisation, collaboration, and expansion.",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1400&q=85",
    alt: "South Asian urban business environment",
    tag: "INNOVATION & EXPANSION",
    details: [
      "Entrepreneur and business connections",
      "Technology and commercial collaboration",
      "International expansion pathways",
    ],
  },
];

const networkAreas = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Business & Industry",
    description:
      "Connect with potential customers, B2B partners, distribution channels, and relevant industry participants.",
    keywords: ["Customers", "B2B partners", "Industry"],
  },
  {
    number: "02",
    icon: Landmark,
    title: "Institutions & Authorities",
    description:
      "Facilitate relevant engagement with institutions, authorities, economic zones, and ecosystem organisations.",
    keywords: ["Institutions", "Authorities", "Ecosystems"],
  },
  {
    number: "03",
    icon: Users,
    title: "Entrepreneurs & Innovators",
    description:
      "Create opportunities for founders, innovators, and technology businesses to explore collaboration and growth.",
    keywords: ["Founders", "Innovation", "Collaboration"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Investors & Growth Partners",
    description:
      "Help identify relevant investor connections and potential growth relationships based on business needs.",
    keywords: ["Investor access", "Growth", "Expansion"],
  },
];

const connectionStages = [
  {
    number: "01",
    title: "Understand the opportunity",
    description:
      "Clarify the business objective, target market, and type of relationship required.",
  },
  {
    number: "02",
    title: "Identify relevant connections",
    description:
      "Explore suitable stakeholders, potential partners, and ecosystem participants.",
  },
  {
    number: "03",
    title: "Facilitate engagement",
    description:
      "Help create relevant introductions and opportunities for business conversations.",
  },
  {
    number: "04",
    title: "Explore the next step",
    description:
      "Support discussions around commercial opportunities, collaboration, or market expansion.",
  },
];

const faqs = [
  {
    question: "What does TConsult's global network represent?",
    answer:
      "It represents an international ecosystem for cross-border engagement and business opportunities. The wider ecosystem reach spans 71 countries; this should not be interpreted as 71 TConsult offices or a claim of direct operations in every country.",
  },
  {
    question: "Which regions are highlighted on this page?",
    answer:
      "The page highlights the Middle East, Africa, and South Asia as important regional perspectives for cross-border business opportunities. The availability of specific connections depends on the market and the individual engagement.",
  },
  {
    question: "Who can explore opportunities through the network?",
    answer:
      "Businesses, entrepreneurs, technology companies, potential commercial partners, investors, and relevant institutions can contact TConsult to discuss their objectives and explore whether a suitable engagement is possible.",
  },
  {
    question: "Does a network introduction guarantee a business outcome?",
    answer:
      "No. Introductions and ecosystem engagement can create opportunities for discussion, but customers, contracts, investments, and market-entry outcomes depend on the parties involved and their individual circumstances.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

/*
 * Reusable image with a fallback.
 * If the primary image fails, try the fallback once.
 * If both URLs fail, hide the broken image icon and retain
 * the designed background and image overlays.
 */
function NetworkImage({
  src,
  fallback,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  function handleError() {
    if (currentSrc !== fallback && fallback) {
      setCurrentSrc(fallback);
    } else {
      setFailed(true);
    }
  }

  return (
    <img
      className={className}
      src={failed ? undefined : currentSrc}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={handleError}
      aria-hidden={failed ? "true" : undefined}
    />
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`gn-eyebrow ${light ? "gn-eyebrow--light" : ""}`}>
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
        "gn-heading",
        centered ? "gn-heading--center" : "",
        light ? "gn-heading--light" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function RegionCard({ region }) {
  return (
    <motion.article
      className="gn-region-card"
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="gn-region-photo">
        <NetworkImage
          src={region.image}
          fallback="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
          alt={region.alt}
        />

        <div className="gn-region-photo-shade" />
        <span className="gn-region-number">{region.number}</span>

        <span className="gn-region-photo-pin">
          <MapPin size={17} />
        </span>

        <div className="gn-region-photo-caption">
          <span>{region.tag}</span>
          <h3>{region.name}</h3>
        </div>
      </div>

      <div className="gn-region-body">
        <h4>{region.heading}</h4>
        <p>{region.description}</p>

        <ul className="gn-region-list">
          {region.details.map((detail) => (
            <li key={detail}>
              <CheckCircle2 size={16} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="gn-inline-link"
          aria-label={`Discuss ${region.name} opportunities`}
        >
          Discuss regional opportunities <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

function NetworkDiagram() {
  const [activeNode, setActiveNode] = useState("business");

  const nodes = [
    {
      id: "business",
      label: "BUSINESS",
      x: 50,
      y: 15,
      description:
        "Connect business objectives with relevant market opportunities and potential commercial relationships.",
    },
    {
      id: "institutions",
      label: "INSTITUTIONS",
      x: 84,
      y: 43,
      description:
        "Explore relevant institutional relationships and engagement with ecosystem organisations.",
    },
    {
      id: "innovation",
      label: "INNOVATION",
      x: 72,
      y: 82,
      description:
        "Create opportunities for entrepreneurs and technology businesses to explore collaboration.",
    },
    {
      id: "markets",
      label: "MARKETS",
      x: 20,
      y: 78,
      description:
        "Explore market-entry pathways, local context, and potential cross-border business opportunities.",
    },
    {
      id: "partners",
      label: "PARTNERS",
      x: 13,
      y: 38,
      description:
        "Identify potential B2B partners, customers, distribution relationships, and industry connections.",
    },
  ];

  const active = nodes.find((node) => node.id === activeNode) || nodes[0];

  return (
    <div className="gn-network-diagram">
      <div className="gn-diagram-topline">
        <span>THE CONNECTION MODEL</span>
        <span className="gn-diagram-live">
          <i />
          INTERCONNECTED ECOSYSTEM
        </span>
      </div>

      <div className="gn-diagram-stage">
        <div className="gn-diagram-orbit gn-diagram-orbit--outer" />
        <div className="gn-diagram-orbit gn-diagram-orbit--inner" />

        <svg
          className="gn-diagram-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.map((node) => (
            <line
              key={node.id}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              className={`gn-diagram-line ${
                activeNode === node.id ? "is-active" : ""
              }`}
            />
          ))}

          <line x1="50" y1="15" x2="84" y2="43" />
          <line x1="84" y1="43" x2="72" y2="82" />
          <line x1="72" y1="82" x2="20" y2="78" />
          <line x1="20" y1="78" x2="13" y2="38" />
          <line x1="13" y1="38" x2="50" y2="15" />
        </svg>

        <div className="gn-diagram-center">
          <Globe2 size={34} strokeWidth={1.4} />
          <strong>TCONSULT</strong>
          <span>GLOBAL NETWORK</span>
        </div>

        {nodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            className={`gn-diagram-node gn-diagram-node--${index} ${
              activeNode === node.id ? "is-active" : ""
            }`}
            style={{
              "--node-x": `${node.x}%`,
              "--node-y": `${node.y}%`,
            }}
            onClick={() => setActiveNode(node.id)}
            aria-pressed={activeNode === node.id}
            aria-label={`Explore ${node.label}`}
          >
            <span className="gn-diagram-node-dot" />
            <span className="gn-diagram-node-label">{node.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="gn-diagram-description"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.22 }}
        >
          <span className="gn-diagram-description-number">
            0{nodes.findIndex((node) => node.id === active.id) + 1}
          </span>

          <div>
            <strong>{active.label}</strong>
            <p>{active.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="gn-diagram-instruction">
        Select a connection point to explore its role.
      </div>
    </div>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className={`gn-faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="gn-faq-question"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <ChevronDown size={19} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="gn-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GlobalNetwork() {
  return (
    <main className="global-network-page">
      {/* 01 — PHOTOGRAPHIC INTRODUCTION */}
      <section className="gn-intro-section">
        <div className="gn-container gn-intro-layout">
          <motion.div
            className="gn-intro-copy"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>OUR GLOBAL NETWORK</Eyebrow>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Where connections
              <br />
              create <span>possibilities.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              A strong network connects more than places. It brings together
              businesses, institutions, innovators, and local knowledge to
              help opportunities travel across borders.
            </motion.p>

            <motion.p
              className="gn-intro-secondary"
              variants={fadeUp}
            >
              TConsult helps businesses explore these connections through
              cross-border engagement, UAE market-entry pathways, and
              relevant commercial relationships.
            </motion.p>

            <motion.div className="gn-intro-actions" variants={fadeUp}>
              <Link to="/contact" className="gn-button gn-button--gold">
                Explore a connection <ArrowUpRight size={17} />
              </Link>

              <a href="#gn-regions" className="gn-simple-link">
                Explore our regions <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div className="gn-intro-meta" variants={fadeUp}>
              <Globe2 size={17} />
              <span>International perspective. Local relevance.</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="gn-intro-visual"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <NetworkImage
              className="gn-intro-photo"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
              fallback="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Business professionals collaborating as a team"
              loading="eager"
              fetchPriority="high"
            />

            <div className="gn-intro-image-overlay" />

            <div className="gn-photo-index">
              <span>01</span>
              <span />
              <span>GLOBAL COLLABORATION</span>
            </div>

            <div className="gn-photo-caption">
              <span>PEOPLE · IDEAS · OPPORTUNITIES</span>
              <strong>Relationships are where progress begins.</strong>
            </div>

            <motion.div
              className="gn-floating-note"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>
                <Network size={20} />
              </span>
              <div>
                <strong>Connected by purpose</strong>
                <small>Built around shared opportunities</small>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 02 — ECOSYSTEM REACH */}
      <section className="gn-reach-section">
        <div className="gn-container gn-reach-layout">
          <motion.div
            className="gn-reach-number-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <span className="gn-reach-label">WIDER ECOSYSTEM REACH</span>

            <div className="gn-reach-number">
              71<span>+</span>
            </div>

            <h2>Countries</h2>

            <p>
              An international ecosystem spanning countries and creating
              potential pathways for cross-border engagement.
            </p>

            <div className="gn-reach-rule" />

            <span className="gn-reach-footnote">
              Ecosystem reach, not a count of TConsult offices.
            </span>
          </motion.div>

          <div className="gn-reach-content">
            <SectionHeading
              eyebrow="A WIDER PERSPECTIVE"
              title={
                <>
                  The world is connected.
                  <br />
                  <span>Opportunity is local.</span>
                </>
              }
              description="Every market has its own context, relationships, and ways of doing business. Our network approach recognises these differences while helping organisations explore where shared interests can lead."
            />

            <motion.div
              className="gn-reach-points"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="gn-reach-point" variants={fadeUp}>
                <span><MapPin size={19} /></span>
                <div>
                  <h3>Understand the market</h3>
                  <p>
                    Explore local context and identify relevant opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.div className="gn-reach-point" variants={fadeUp}>
                <span><Handshake size={19} /></span>
                <div>
                  <h3>Find relevant relationships</h3>
                  <p>
                    Connect with potential partners and ecosystem participants.
                  </p>
                </div>
              </motion.div>

              <motion.div className="gn-reach-point" variants={fadeUp}>
                <span><TrendingUp size={19} /></span>
                <div>
                  <h3>Explore what comes next</h3>
                  <p>
                    Move conversations towards potential commercial pathways.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — REGIONAL PHOTOGRAPHY */}
      <section className="gn-regions-section" id="gn-regions">
        <div className="gn-container">
          <SectionHeading
            eyebrow="OUR REGIONAL PERSPECTIVE"
            title={
              <>
                Different markets.
                <br />
                <span>Connected opportunities.</span>
              </>
            }
            description="We focus on cross-border relationships that help businesses explore regional markets, engage with relevant stakeholders, and identify potential paths to growth."
            centered
          />

          <motion.div
            className="gn-regions-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {regions.map((region) => (
              <RegionCard key={region.id} region={region} />
            ))}
          </motion.div>

          <motion.div
            className="gn-regions-note"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span><Compass size={20} /></span>
            <p>
              Regional focus areas illustrate the kinds of cross-border
              opportunities we explore. Specific relationships and support
              depend on each market and engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 04 — INTERACTIVE CONNECTION MODEL */}
      <section className="gn-model-section">
        <div className="gn-container gn-model-layout">
          <div className="gn-model-copy">
            <SectionHeading
              eyebrow="HOW THE NETWORK WORKS"
              title={
                <>
                  Every connection
                  <br />
                  has a <span>purpose.</span>
                </>
              }
              description="Global engagement becomes meaningful when the right participants come together around a clear business objective. Our approach considers the connections that can help move an opportunity forward."
            />

            <div className="gn-model-examples">
              <div>
                <span className="gn-model-example-number">01</span>
                <p>
                  Businesses seeking new commercial relationships.
                </p>
              </div>

              <div>
                <span className="gn-model-example-number">02</span>
                <p>
                  Organisations exploring international market access.
                </p>
              </div>

              <div>
                <span className="gn-model-example-number">03</span>
                <p>
                  Innovators and institutions exploring collaboration.
                </p>
              </div>
            </div>

            <Link to="/services" className="gn-inline-link">
              Explore our services <ArrowRight size={17} />
            </Link>
          </div>

          <motion.div
            className="gn-model-visual"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <NetworkDiagram />
          </motion.div>
        </div>
      </section>

      {/* 05 — WHO THE NETWORK CONNECTS */}
      <section className="gn-ecosystem-section">
        <div className="gn-container">
          <SectionHeading
            eyebrow="WHO WE CONNECT"
            title={
              <>
                Different participants.
                <br />
                <span>Shared ambitions.</span>
              </>
            }
            description="A connected ecosystem brings different strengths together. Depending on the opportunity, relevant participants may include:"
          />

          <motion.div
            className="gn-ecosystem-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {networkAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.article
                  className="gn-ecosystem-card"
                  key={area.number}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="gn-ecosystem-card-top">
                    <span className="gn-ecosystem-icon">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="gn-ecosystem-number">
                      {area.number}
                    </span>
                  </div>

                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <div className="gn-keyword-list">
                    {area.keywords.map((keyword) => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 06 — FROM CONNECTION TO OPPORTUNITY */}
      <section className="gn-process-section">
        <div className="gn-container">
          <SectionHeading
            eyebrow="FROM CONNECTION TO POSSIBILITY"
            title={
              <>
                A relationship is a start.
                <br />
                <span>What follows matters.</span>
              </>
            }
            description="We approach cross-border engagement as a process: understanding the objective, identifying relevant participants, facilitating engagement, and exploring practical next steps."
          />

          <motion.div
            className="gn-process-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {connectionStages.map((stage, index) => (
              <motion.article
                className="gn-process-card"
                key={stage.number}
                variants={fadeUp}
              >
                <div className="gn-process-card-top">
                  <span>{stage.number}</span>
                  {index < connectionStages.length - 1 && (
                    <ArrowRight size={18} />
                  )}
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07 — FAQ */}
      <section className="gn-faq-section">
        <div className="gn-container gn-faq-layout">
          <div className="gn-faq-intro">
            <SectionHeading
              eyebrow="GLOBAL NETWORK FAQ"
              title={
                <>
                  A few things
                  <br />
                  worth <span>knowing.</span>
                </>
              }
              description="Learn more about our global network, regional focus, and approach to cross-border engagement."
            />

            <Link to="/contact" className="gn-simple-link">
              Have another question? Contact us <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="gn-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 08 — PHOTOGRAPHIC CTA */}
      <section className="gn-cta-section">
        <div className="gn-cta-image">
          <NetworkImage
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
            fallback="https://images.unsplash.com/photo-1521737711867-e3b97375c902?auto=format&fit=crop&w=1400&q=85"
            alt="Modern professional workspace"
          />
          <div className="gn-cta-image-overlay" />
        </div>

        <div className="gn-container gn-cta-content">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow light>YOUR NEXT CONNECTION STARTS HERE</Eyebrow>
            </motion.div>

            <motion.h2 variants={fadeUp}>
              Let's explore
              <br />
              what's possible.
            </motion.h2>

            <motion.p variants={fadeUp}>
              Tell us where your business wants to go. Together, we can explore
              relevant relationships, market opportunities, and potential
              pathways for cross-border growth.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link to="/contact" className="gn-button gn-button--gold">
                Start a conversation <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
