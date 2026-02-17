
import React from 'react';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Privacy Policy" />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-brand-slate">
          <div className="prose prose-invert prose-lg max-w-none prose-h2:text-brand-light prose-h2:font-bold prose-a:text-brand-blue hover:prose-a:text-brand-cyan">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>DevSpark Soft IT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://DevSparksoft.com.</p>
            
            <h2>1. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you fill out a contact form, such as your name, email address, and phone number. We may also collect non-personal information, such as browser type, operating system, and web pages visited to help us manage our website.</p>
            
            <h2>2. Use of Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Respond to your inquiries and provide customer service.</li>
                <li>Improve our website and services.</li>
                <li>Send you marketing communications, if you have opted in.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
            
            <h2>4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@DevSparkSoft.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;