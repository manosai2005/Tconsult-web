
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import GlobalNetwork from './pages/GlobalNetwork'
import Partnerships from './pages/Partnerships'
import Insights from './pages/Insights'

import './App.css'

const CONTACT_EMAIL = 'tconsult@gmail.com'

// Placeholder contact number — verify before publishing.
const CONTACT_PHONE = '+91 93470 06783'
const WHATSAPP_NUMBER = '919347006783'

const enquiryOptions = [
  'Business & Strategic Partnerships',
  'International Market Expansion',
  'Startup & Innovation Ecosystem',
  'Investor & Funding Connections',
  'Institutional Collaboration',
  'Events, Summits & Delegations',
  'Media & General Enquiries',
  'Other',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    enquiryType: '',
    location: '',
    message: '',
    consent: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `TConsult Website Enquiry — ${formData.enquiryType}`
    )

    const body = encodeURIComponent(
      `Hello TConsult Team,

I would like to connect with your team.

CONTACT DETAILS
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Location: ${formData.location || 'Not provided'}

ENQUIRY TYPE
${formData.enquiryType}

MESSAGE
${formData.message}`
    )

    setSubmitted(true)

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const whatsappMessage = encodeURIComponent(
    'Hello TConsult team! I would like to connect regarding your services and business opportunities.'
  )

  return (
    <div className="tc-contact-page">
      {/* HERO SECTION */}
      <section className="tc-contact-hero">
        <div className="tc-contact-hero-glow" />

        <div className="tc-contact-hero-inner">
          <div className="tc-contact-eyebrow">
            <span className="tc-contact-eyebrow-line" />
            LET'S CONNECT
          </div>

          <h1>
            Every great
            <br />
            <span>partnership starts</span>
            <br />
            with a conversation.
          </h1>

          <p className="tc-contact-hero-copy">
            Have an idea, a business ambition, or a vision for
            international growth? Tell us what you are building.
            Let's explore what we can accomplish together.
          </p>

          <a
            href="#tc-contact-form"
            className="tc-contact-hero-link"
          >
            START A CONVERSATION
            <ArrowDownRight size={18} />
          </a>

          <div className="tc-contact-hero-bottom">
            <span>PEOPLE</span>
            <i />
            <span>IDEAS</span>
            <i />
            <span>OPPORTUNITIES</span>
            <i />
            <span>BEYOND BORDERS</span>
          </div>
        </div>

        <div className="tc-contact-hero-number" aria-hidden="true">
          01
        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}
      <section
        className="tc-contact-main"
        id="tc-contact-form"
      >
        <div className="tc-contact-layout">
          <aside className="tc-contact-sidebar">
            <span className="tc-contact-label">GET IN TOUCH</span>

            <h2>
              Let's make
              <br />
              <span>things happen.</span>
            </h2>

            <p className="tc-contact-sidebar-copy">
              Whether you represent a startup, an established
              business, an institution, or an international
              ecosystem, we welcome meaningful conversations.
            </p>

            <div className="tc-contact-methods">
              <a
                className="tc-contact-method"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <span className="tc-contact-method-icon">
                  <Mail size={20} />
                </span>

                <span className="tc-contact-method-text">
                  <small>EMAIL OUR TEAM</small>
                  <strong>{CONTACT_EMAIL}</strong>
                  <span>Send us your enquiry</span>
                </span>

                <ArrowRight
                  className="tc-contact-method-arrow"
                  size={18}
                />
              </a>

              <a
                className="tc-contact-method"
                href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}
              >
                <span className="tc-contact-method-icon">
                  <Phone size={20} />
                </span>

                <span className="tc-contact-method-text">
                  <small>CALL US</small>
                  <strong>{CONTACT_PHONE}</strong>
                  <span>Speak with our team</span>
                </span>

                <ArrowRight
                  className="tc-contact-method-arrow"
                  size={18}
                />
              </a>

              <a
                className="tc-contact-method"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tc-contact-method-icon tc-whatsapp-icon">
                  <MessageCircle size={20} />
                </span>

                <span className="tc-contact-method-text">
                  <small>CONNECT ON WHATSAPP</small>
                  <strong>Let's chat</strong>
                  <span>Continue the conversation online</span>
                </span>

                <ArrowRight
                  className="tc-contact-method-arrow"
                  size={18}
                />
              </a>
            </div>

            <div className="tc-contact-sidebar-note">
              <Globe2 size={20} />

              <div>
                <strong>Think beyond borders.</strong>
                <p>
                  Start a conversation about collaboration,
                  innovation, and new market opportunities.
                </p>
              </div>
            </div>
          </aside>

          {/* ENQUIRY FORM */}
          <div className="tc-contact-form-panel">
            <div className="tc-contact-form-heading">
              <div>
                <span className="tc-contact-label">
                  YOUR NEXT OPPORTUNITY
                </span>

                <h2>Tell us what you have in mind.</h2>

                <p>
                  Share a few details so we can understand your enquiry.
                </p>
              </div>

              <div className="tc-contact-form-symbol">
                <Sparkles size={24} />
              </div>
            </div>

            <form
              className="tc-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="tc-contact-form-row">
                <div className="tc-contact-field">
                  <label htmlFor="tc-name">
                    Full name <span>*</span>
                  </label>

                  <input
                    id="tc-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="tc-contact-field">
                  <label htmlFor="tc-email">
                    Business email <span>*</span>
                  </label>

                  <input
                    id="tc-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="tc-contact-form-row">
                <div className="tc-contact-field">
                  <label htmlFor="tc-organization">
                    Company / Institution
                  </label>

                  <div className="tc-contact-input-icon">
                    <Building2 size={17} />

                    <input
                      id="tc-organization"
                      name="organization"
                      type="text"
                      placeholder="Your organization"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="tc-contact-field">
                  <label htmlFor="tc-phone">Phone number</label>

                  <input
                    id="tc-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="tc-contact-form-row">
                <div className="tc-contact-field">
                  <label htmlFor="tc-enquiry">
                    Enquiry type <span>*</span>
                  </label>

                  <select
                    id="tc-enquiry"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    {enquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="tc-contact-field">
                  <label htmlFor="tc-location">
                    Country / City
                  </label>

                  <div className="tc-contact-input-icon">
                    <MapPin size={17} />

                    <input
                      id="tc-location"
                      name="location"
                      type="text"
                      placeholder="e.g. Hyderabad, India"
                      autoComplete="address-level2"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="tc-contact-field">
                <label htmlFor="tc-message">
                  Tell us about your goals <span>*</span>
                </label>

                <textarea
                  id="tc-message"
                  name="message"
                  placeholder="Tell us about your idea, project, challenge, or the opportunity you would like to explore..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  minLength={10}
                  required
                />

                <span className="tc-contact-field-hint">
                  A few details will help us understand your requirements.
                </span>
              </div>

              <label className="tc-contact-consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />

                <span>
                  I agree to be contacted by TConsult regarding this
                  enquiry and understand that my information will be
                  used to respond to my request.
                </span>
              </label>

              {submitted && (
                <div
                  className="tc-contact-submit-notice"
                  role="status"
                >
                  <CheckCircle2 size={19} />

                  <span>
                    Your email application should open with the enquiry
                    prepared. Send the email there to complete submission.
                  </span>
                </div>
              )}

              <button
                className="tc-contact-submit"
                type="submit"
              >
                <span>PREPARE MY ENQUIRY</span>
                <Send size={17} />
              </button>

              <p className="tc-contact-form-disclaimer">
                Submitting opens your default email application.
                This website does not automatically store or send enquiries.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tc-contact-cta">
        <div className="tc-contact-cta-orb" />

        <div className="tc-contact-cta-content">
          <span className="tc-contact-label">
            THE NEXT STEP STARTS HERE
          </span>

          <h2>
            Good ideas grow
            <br />
            <span>when we connect.</span>
          </h2>

          <p>
            Let's explore the people, partnerships, and possibilities
            that can move your ambitions forward.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-contact-cta-button"
          >
            <MessageCircle size={19} />
            CONNECT ON WHATSAPP
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}

function NotFound() {
  return (
    <section className="tc-basic-page">
      <span className="tc-section-label">404 — PAGE NOT FOUND</span>
      <h1>This page is not available yet.</h1>
      <p>
        Explore the Tconsult® Global website using the main navigation.
      </p>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="tc-site">
        <Navbar />

        <main className="tc-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/global-network/*" element={<GlobalNetwork />} />
            <Route path="/partnerships/*" element={<Partnerships />} />
            <Route path="/insights-media/*" element={<Insights />} />
            <Route path="/contact/*" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
