
import { Link } from 'react-router-dom'
import './Footer.css'

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Tconsult®', to: '/about' },
      { label: 'Our Story', to: '/about/our-story' },
      { label: 'Leadership', to: '/about/leadership' },
      { label: 'Chairman’s Profile', to: '/about/leadership/chairman' },
      { label: 'Testimonials', to: '/about/testimonials' },
      { label: 'Values & Governance', to: '/about/values-governance' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'What We Do', to: '/services' },
      { label: 'Market Entry & Soft Landing', to: '/services/market-entry' },
      {
        label: 'Innovation Commercialisation',
        to: '/services/innovation-commercialisation',
      },
      { label: 'Strategic Partnerships', to: '/services/strategic-partnerships' },
      { label: 'Global Network', to: '/global-network' },
      { label: 'Priority Regions', to: '/global-network' },
      { label: 'Country Directory', to: '/global-network/countries' },
    ],
  },
  {
    title: 'Newsroom',
    links: [
      {
        label: 'Press Releases',
        to: '/insights-media/press-releases',
      },
      { label: 'In the News', to: '/insights-media/in-the-news' },
      { label: 'Insights & Perspectives', to: '/insights-media/insights' },
      { label: 'Events & Announcements', to: '/insights-media/events' },
      { label: 'Company News', to: '/insights-media/company-news' },
      { label: 'Media Enquiries', to: '/insights-media/media-enquiries' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'UAE Headquarters', to: '/global-network/middle-east/uae' },
      { label: 'India', to: '/global-network/countries/india' },
      { label: 'Business Enquiries', to: '/contact/business-expansion' },
      { label: 'Innovation Partnerships', to: '/contact/innovation' },
      { label: 'Institutional Enquiries', to: '/contact/institutions' },
      { label: 'Country Chapter Enquiries', to: '/contact/country-chapter' },
      { label: 'Start a Conversation', to: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Legal Entity & Disclosures', to: '/legal' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Accessibility', to: '/accessibility' },
]

export default function Footer() {
  return (
    <footer className="tc-footer">
      <div className="tc-footer-container">
        {/* Final call to action */}

        {/* Brand and four footer columns */}
        <div className="tc-footer-main">
          <div className="tc-footer-brand">
            <Link to="/" className="tc-footer-logo" aria-label="Tconsult home">
              Tconsult<span>®</span>
            </Link>

            <p className="tc-footer-tagline">
              Connect Locally. Expand Globally.
            </p>

            <p className="tc-footer-description">
              A UAE-headquartered global platform connecting businesses,
              innovations, investors, institutions and international markets.
            </p>

            <p className="tc-footer-markets">
              UAE <span>·</span> India <span>·</span> International Markets
            </p>
          </div>

          {footerColumns.map((column) => (
            <div className="tc-footer-column" key={column.title}>
              <h3>{column.title}</h3>

              {column.links.map((link) => (
                <Link to={link.to} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Legal entities */}
        <div className="tc-footer-entities">
          <span>UAE Entity</span>
          <p>Tconsult Global L.L.C-FZ</p>

          <span>India Entity</span>
          <p>Tconsult Global Private Limited</p>

          <small>
            Entity names are provided for identification. Confirm registered
            details and applicable disclosures before publication.
          </small>
        </div>

        {/* Copyright and legal navigation */}
        <div className="tc-footer-bottom">
          <p className="tc-footer-copyright">
            © {new Date().getFullYear()} Tconsult®. All rights reserved.
          </p>

          <nav className="tc-footer-legal" aria-label="Legal navigation">
            {legalLinks.map((link) => (
              <Link to={link.to} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="tc-footer-back-top" to="/" aria-label="Back to home">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
