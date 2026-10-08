import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AYSENT Privacy Policy - how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: October 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              AYSENT ("we", "our", or "us") operates www.aysentsmartfilm.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal information:</strong> Name, email address, phone number, company name, and country when you submit our inquiry form.</li>
              <li><strong>Usage data:</strong> Pages visited, time spent, referring URLs, browser type, and IP address (anonymized).</li>
              <li><strong>Cookies:</strong> See our <a href="/cookie-policy" className="text-blue-600 underline">Cookie Policy</a> for details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide product information.</li>
              <li>To improve our website and customer experience.</li>
              <li>To send periodic emails regarding products or services (only with your consent).</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
            <p>
              We do not sell or rent your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in website operations (e.g., Formspree for form submissions, Vercel for hosting).</li>
              <li>CRM systems for lead management (e.g., Xiaoman/Okki).</li>
              <li>Legal authorities when required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights (GDPR)</h2>
            <p>If you are located in the European Economic Area (EEA), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Withdraw consent at any time (via our cookie settings).</li>
              <li>Data portability.</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:aaronliu@aysentglass.com" className="text-blue-600 underline">aaronliu@aysentglass.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p>
              We retain inquiry data for up to 3 years from the last interaction, after which it is securely deleted. Analytics data is retained for 14 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p>
              AYSENT<br />
              Headquarters Building of Huantou Center, No.1728, Shanguo South Road,<br />
              Jinghe Sub-district, Tengzhou City, Shandong Province, China 277500<br />
              Email: <a href="mailto:aaronliu@aysentglass.com" className="text-blue-600 underline">aaronliu@aysentglass.com</a><br />
              Phone/WhatsApp: +86-15163206207
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
