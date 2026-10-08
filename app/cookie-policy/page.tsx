import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'AYSENT Cookie Policy - what cookies we use and how you can manage them.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: October 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They are widely used to make websites function, improve user experience, and provide analytics information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">cc_cookie</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Stores your cookie consent preferences.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">requires_consent</td>
                    <td className="border border-gray-300 px-4 py-2">Necessary</td>
                    <td className="border border-gray-300 px-4 py-2">Tracks whether cookie consent banner should be shown based on your region.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga, _gid, _gat</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Vercel Analytics to understand how visitors interact with our site.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">okki_*</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Xiaoman/Okki CRM for visitor tracking and chat functionality.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
            <p>
              You can manage your cookie preferences at any time by clicking the "Cookie Settings" link in our website footer, or by clearing your browser cookies.
            </p>
            <p>
              If you are located in the EU/EEA/UK, you will see a cookie consent banner on your first visit. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences.
            </p>
            <p>
              Note: Disabling analytics cookies will not affect the basic functionality of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Cookies</h2>
            <p>
              Some cookies are set by third-party services we use, such as Vercel (hosting and analytics) and Xiaoman/Okki (CRM and chat). These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{' '}
              <a href="mailto:aaronliu@aysentglass.com" className="text-blue-600 underline">aaronliu@aysentglass.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
