
import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Building2,
  Lightbulb,
  Network,
  Landmark,
  Handshake,
  Compass,
  BriefcaseBusiness,
  Cpu,
  ArrowUpRight,
  Quote,
  Sparkles,
  Target,
  Award,
  ShieldCheck,
  HeartHandshake,
  Telescope,
} from "lucide-react";
import "./About.css";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const identity = [
  {
    icon: Globe2,
    number: "01",
    title: "International Outlook",
    text: "A cross-border perspective on business, innovation and institutional relationships.",
  },
  {
    icon: Network,
    number: "02",
    title: "Connected Ecosystems",
    text: "Building relationships among entrepreneurs, businesses, investors and institutions.",
  },
  {
    icon: BriefcaseBusiness,
    number: "03",
    title: "Commercial Perspective",
    text: "Connecting business ambition with relevant market-entry and commercial pathways.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Innovation Orientation",
    text: "Supporting the relationships that help ideas move towards commercial opportunity.",
  },
];

const principles = [
  {
    number: "01",
    title: "Relationships before transactions",
    text: "Meaningful business relationships are a foundation for enduring cross-border collaboration.",
  },
  {
    number: "02",
    title: "Local context, global perspective",
    text: "Understanding the destination market matters as much as recognising international potential.",
  },
  {
    number: "03",
    title: "Practical engagement",
    text: "Market-entry pathways and relevant introductions should reflect each business's circumstances.",
  },
  {
    number: "04",
    title: "Long-term value creation",
    text: "The objective is to explore relationships and opportunities that can support lasting business value.",
  },
];

const focusAreas = [
  {
    icon: Building2,
    title: "Cross-border business",
    text: "International business engagement, UAE market-entry pathways and local ecosystem connections.",
  },
  {
    icon: Cpu,
    title: "Technology commercialisation",
    text: "Connecting technology-led ideas with commercial relationships and opportunities.",
  },
  {
    icon: Landmark,
    title: "Institutional engagement",
    text: "Facilitating relevant engagement with institutions, authorities and strategic stakeholders.",
  },
  {
    icon: Users,
    title: "Entrepreneurial ecosystems",
    text: "Connecting entrepreneurs, investors, business leaders and innovation communities.",
  },
];

const facts = [
  {
    value: "71",
    label: "Countries",
    description: "Reported wider global ecosystem reach",
  },
  {
    value: "2,843",
    label: "Companies",
    description: "WTITC network figure supplied in the company profile",
  },
  {
    value: "200+",
    label: "Businesses",
    description: "Reported businesses soft-landed in the UAE",
  },
];

function Label({ number, children, light = false }) {
  return (
    <div className={`about-label ${light ? "about-label--light" : ""}`}>
      <span className="about-label__number">{number}</span>
      <span className="about-label__rule" />
      <span>{children}</span>
    </div>
  );
}

function About() {
  return (
    <main className="about-page">
      {/* 01 — ABOUT THE ORGANISATION */}
      <section className="about-overview about-section">
        <div className="about-container">
          <motion.div
            className="about-overview__heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="01">ABOUT THE ORGANISATION</Label>
            </motion.div>

            <motion.h1 variants={reveal}>
              An international outlook.
              <br />
              <span>A connected business ecosystem.</span>
            </motion.h1>

            <motion.p className="about-overview__intro" variants={reveal}>
              TConsult Global L.L.C-FZ is a UAE-based organisation focused on
              cross-border business engagement, market-entry support and
              relationships that connect businesses with relevant
              opportunities.
            </motion.p>
          </motion.div>

          <div className="about-overview__layout">
            <motion.div
              className="about-overview__image"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85"
                alt="Contemporary professional workspace"
                loading="lazy"
              />
              <div className="about-overview__image-shade" />
              <div className="about-overview__image-caption">
                <span>TCONSULT GLOBAL L.L.C-FZ</span>
                <p>Dubai, United Arab Emirates</p>
              </div>
              <span className="about-overview__image-index">T / 01</span>
            </motion.div>

            <motion.div
              className="about-overview__story"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.span
                className="about-overview__eyebrow"
                variants={reveal}
              >
                WHO WE ARE
              </motion.span>

              <motion.h2 variants={reveal}>
                Business does not stop at borders. Neither should opportunity.
              </motion.h2>

              <motion.p variants={reveal}>
                Businesses entering unfamiliar markets often need more than
                ambition. They need local knowledge, relevant relationships
                and an understanding of how to engage with a new business
                environment.
              </motion.p>

              <motion.p variants={reveal}>
                TConsult works to bridge these gaps by helping businesses
                navigate UAE market-entry pathways, connect with potential
                customers and B2B partners, and explore relationships with
                investors, institutions and other stakeholders.
              </motion.p>

              <motion.p variants={reveal}>
                Its approach brings together cross-border access, commercial
                engagement and ecosystem connectivity, with support tailored
                to the circumstances of each business.
              </motion.p>

              <motion.div
                className="about-overview__signature"
                variants={reveal}
              >
                <span className="about-overview__signature-mark">T.</span>
                <div>
                  <strong>TConsult Global</strong>
                  <span>People · Ideas · Opportunities · Beyond Borders</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — ORGANISATIONAL IDENTITY */}
      <section className="about-identity about-section">
        <div className="about-container">
          <motion.div
            className="about-section-heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="02">OUR IDENTITY</Label>
            </motion.div>

            <div className="about-section-heading__row">
              <motion.h2 variants={reveal}>
                Built around the connections that matter.
              </motion.h2>
              <motion.p variants={reveal}>
                Our work sits at the intersection of international business,
                local market knowledge, commercial relationships and
                innovation ecosystems.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="about-identity__grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {identity.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-identity-card"
                  key={item.number}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                >
                  <div className="about-identity-card__top">
                    <span>{item.number}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="about-identity-card__bottom">
                    TCONSULT GLOBAL
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 03 — OUR PURPOSE */}
      <section className="about-purpose about-section">
        <div className="about-purpose__texture" />

        <div className="about-container about-purpose__layout">
          <motion.div
            className="about-purpose__content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="03" light>
                OUR PURPOSE
              </Label>
            </motion.div>

            <motion.h2 variants={reveal}>
              Making international business relationships more meaningful.
            </motion.h2>

            <motion.p variants={reveal}>
              Cross-border business is about more than entering a new
              geography. It involves understanding the market, finding
              relevant people, establishing trust and identifying practical
              ways to work together.
            </motion.p>

            <motion.p variants={reveal}>
              TConsult's purpose is to connect these elements through
              business engagement, ecosystem relationships and support for
              companies exploring opportunities in the UAE and beyond.
            </motion.p>

            <motion.div className="about-purpose__statement" variants={reveal}>
              <Sparkles size={22} />
              <p>
                Connecting people, ideas and opportunities beyond borders.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-purpose__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=90"
              alt="Professionals collaborating in a business environment"
              loading="lazy"
            />
            <div className="about-purpose__image-overlay" />
            <div className="about-purpose__image-note">
              <span>OUR PURPOSE</span>
              <h3>Relationships that connect possibility with action.</h3>
            </div>
            <div className="about-purpose__image-symbol">
              <Globe2 size={30} strokeWidth={1.3} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04 — OUR AREAS OF WORK */}
      <section className="about-focus about-section">
        <div className="about-container">
          <motion.div
            className="about-section-heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="04">AREAS OF ENGAGEMENT</Label>
            </motion.div>

            <div className="about-section-heading__row">
              <motion.h2 variants={reveal}>
                Where business meets ecosystem.
              </motion.h2>
              <motion.p variants={reveal}>
                TConsult's stated areas of work span commercial relationships,
                technology-led activity, institutional engagement and
                entrepreneurial networks.
              </motion.p>
            </div>
          </motion.div>

          <div className="about-focus__layout">
            <motion.div
              className="about-focus__image"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1300&q=85"
                alt="Modern international business district architecture"
                loading="lazy"
              />
              <div className="about-focus__image-shade" />
              <div className="about-focus__image-label">
                <span>OUR AREAS OF WORK</span>
                <p>Business · Technology · Institutions · People</p>
              </div>
            </motion.div>

            <motion.div
              className="about-focus__list"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {focusAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    className="about-focus-item"
                    key={item.title}
                    variants={reveal}
                  >
                    <span className="about-focus-item__number">
                      0{index + 1}
                    </span>
                    <div className="about-focus-item__icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="about-focus-item__content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="about-focus-item__arrow"
                    />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 — GUIDING PRINCIPLES */}
      <section className="about-principles about-section">
        <div className="about-container">
          <motion.div
            className="about-principles__heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="05">OUR GUIDING PRINCIPLES</Label>
            </motion.div>

            <motion.h2 variants={reveal}>
              How we approach cross-border relationships.
            </motion.h2>

            <motion.p variants={reveal}>
              These principles describe the approach reflected in TConsult's
              stated focus on market access, relationships and business
              development.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-principles__grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {principles.map((item) => (
              <motion.article
                className="about-principle-card"
                key={item.number}
                variants={reveal}
              >
                <span className="about-principle-card__number">
                  {item.number}
                </span>
                <div className="about-principle-card__rule" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 06 — ECOSYSTEM REACH */}
      <section className="about-reach about-section">
        <div className="about-reach__background" />

        <div className="about-container">
          <motion.div
            className="about-reach__heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="06" light>
                NETWORK & ECOSYSTEM
              </Label>
            </motion.div>

            <motion.h2 variants={reveal}>
              A wider network of relationships.
            </motion.h2>

            <motion.p variants={reveal}>
              TConsult's wider ecosystem and associated professional
              engagements connect business, technology and international
              communities.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-reach__stats"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {facts.map((fact, index) => (
              <motion.div
                className="about-reach-stat"
                key={fact.label}
                variants={reveal}
              >
                <span className="about-reach-stat__index">
                  NETWORK / 0{index + 1}
                </span>
                <strong>{fact.value}</strong>
                <h3>{fact.label}</h3>
                <p>{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="about-reach__note">
            These figures describe different reported measures and should not
            be interpreted as offices in 71 countries or as a single
            consolidated TConsult operating footprint.
          </p>
        </div>
      </section>

      {/* 07 — LEADERSHIP */}
      <section className="about-leadership about-section">
        <div className="about-container about-leadership__layout">
          <motion.div
            className="about-leadership__visual"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=90"
              alt="Illustrative professional portrait; replace with an approved portrait of Sundeep Kumar Makthala"
              loading="lazy"
            />
            <div className="about-leadership__image-shade" />
            <div className="about-leadership__image-caption">
              <span>LEADERSHIP & VISION</span>
              <p>Global business strategy and ecosystem building</p>
            </div>
            <div className="about-leadership__image-mark">T.</div>
          </motion.div>

          <motion.div
            className="about-leadership__content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="07">LEADERSHIP</Label>
            </motion.div>

            <motion.span
              className="about-leadership__eyebrow"
              variants={reveal}
            >
              GLOBAL BUSINESS STRATEGIST & ECOSYSTEM BUILDER
            </motion.span>

            <motion.h2 variants={reveal}>
              Sundeep Kumar
              <br />
              <span>Makthala.</span>
            </motion.h2>

            <motion.p variants={reveal}>
              Mr. Sundeep Kumar Makthala is an international business
              strategist and innovation ecosystem builder connecting
              entrepreneurs, investors and institutions across borders.
            </motion.p>

            <motion.p variants={reveal}>
              As Chairman of TConsult Global, he advances cross-border
              business expansion and global investment opportunities. His
              work spans technology commercialisation, semiconductor
              ecosystem development and international institutional
              engagement.
            </motion.p>

            <motion.p variants={reveal}>
              His international engagements include a meeting with global
              business leader Carlos Slim to discuss investment and business
              expansion, and collaboration with Ela Gandhi, granddaughter of
              Mahatma Gandhi, through the Cyber Satyagraha Peace Mission.
            </motion.p>

            <motion.p variants={reveal}>
              He also chairs the World Telugu Information Technology Council
              (WTITC), whose network is reported in the supplied profile as
              representing 2,843 companies across 63 countries, and founded
              the Telangana Information Technology Association (TITA).
            </motion.p>

            <motion.p variants={reveal}>
              The supplied profile also identifies him as a UAE Golden Visa
              honouree and a speaker at the United Nations and Nobel Peace
              Summit.
            </motion.p>

            <motion.div
              className="about-leadership__roles"
              variants={reveal}
            >
              <div>
                <Globe2 size={19} />
                <span>Chairman, TConsult Global</span>
              </div>
              <div>
                <Network size={19} />
                <span>Chairman, WTITC</span>
              </div>
              <div>
                <Users size={19} />
                <span>Founder, TITA</span>
              </div>
            </motion.div>

            <motion.div
              className="about-leadership__mission"
              variants={reveal}
            >
              <Quote size={23} />
              <p>
                Driven by a global mission to turn innovation and connections
                into opportunities with lasting impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 08 — BUSINESS IMPACT */}
      <section className="about-impact about-section">
        <div className="about-container">
          <motion.div
            className="about-impact__heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={reveal}>
              <Label number="08">BUSINESS IMPACT</Label>
            </motion.div>

            <motion.h2 variants={reveal}>
              A model that combines access with engagement.
            </motion.h2>

            <motion.p variants={reveal}>
              TConsult's stated business model combines market-entry support
              with selective strategic participation in promising ventures.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-impact__layout"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.article
              className="about-impact-card"
              variants={reveal}
            >
              <div className="about-impact-card__icon">
                <Compass size={25} />
              </div>
              <span>BUSINESS MODEL / 01</span>
              <h3>Market-entry support</h3>
              <p>
                Guidance on UAE soft landing, establishment pathways and
                relevant business connections.
              </p>
            </motion.article>

            <motion.article
              className="about-impact-card about-impact-card--dark"
              variants={reveal}
            >
              <div className="about-impact-card__icon">
                <Target size={25} />
              </div>
              <span>BUSINESS MODEL / 02</span>
              <h3>Selective venture participation</h3>
              <p>
                Strategic support, customer acquisition, investor access and
                institutional connections for selected ventures.
              </p>
            </motion.article>
          </motion.div>

          <motion.div
            className="about-impact__venture"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-impact__venture-intro">
              <span>SELECTIVE VENTURE MODEL</span>
              <h3>Strategic participation. Defined horizons.</h3>
              <p>
                The company profile describes a model for selected ventures,
                rather than a universal arrangement for every client.
              </p>
            </div>

            <div className="about-impact__venture-stat">
              <strong>5%</strong>
              <span>Equity participation</span>
            </div>

            <div className="about-impact__venture-stat">
              <strong>2–4</strong>
              <span>Year value-creation horizon</span>
            </div>

            <div className="about-impact__venture-stat">
              <strong>Exit</strong>
              <span>Planned pathway</span>
            </div>
          </motion.div>

          <p className="about-disclaimer">
            The supplied company profile reports USD 25 million in investment
            raised across supported businesses. The precise attribution and
            status of the reported amount should be confirmed before
            publication. Investment outcomes are not guaranteed.
          </p>
        </div>
      </section>

      {/* 09 — CLOSING STATEMENT */}
      <section className="about-closing">
        <div className="about-closing__texture" />

        <div className="about-container">
          <motion.div
            className="about-closing__content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-closing__symbol">
              <HeartHandshake size={27} strokeWidth={1.4} />
            </div>

            <span className="about-closing__eyebrow">
              TCONSULT GLOBAL L.L.C-FZ
            </span>

            <h2>
              The future of business is built through meaningful connections.
            </h2>

            <p>
              TConsult brings an international outlook to business engagement,
              innovation ecosystems and cross-border relationships.
            </p>

            <div className="about-closing__details">
              <span>PEOPLE</span>
              <span>IDEAS</span>
              <span>OPPORTUNITIES</span>
              <span>BEYOND BORDERS</span>
            </div>

            <span className="about-closing__location">
              DUBAI, UNITED ARAB EMIRATES
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;
