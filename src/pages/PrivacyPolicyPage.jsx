import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-black text-white px-6 py-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-gray-700 mb-6">
          Last updated: July 31, 2025
        </p>

        <p className="text-gray-700 mb-6">
          Estatein ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Personal Information:</strong> Name, email, phone number, and address when you submit forms or contact us.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, and browser type.</li>
          <li><strong>Cookies:</strong> For website performance and analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>To respond to inquiries and provide services.</li>
          <li>To improve our website and customer experience.</li>
          <li>To send updates, offers, and newsletters (only if opted in).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Sharing Your Information</h2>
        <p className="text-gray-700 mb-6">
          We do not sell or rent your personal information. We may share it with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Trusted third-party partners who assist in operating our site or services (under strict confidentiality agreements).</li>
          <li>Law enforcement or regulatory bodies, when required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Your Rights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You have the right to access, correct, or delete your personal data.</li>
          <li>You can opt out of marketing communications at any time.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Security</h2>
        <p className="text-gray-700 mb-6">
          We implement appropriate technical and organizational security measures to protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Third-Party Links</h2>
        <p className="text-gray-700 mb-6">
          Our site may contain links to third-party websites. We are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. All changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, you can contact us at:
          <br />
          <a href="mailto:privacy@estatein.com" className="text-blue-600 underline">privacy@estatein.com</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
