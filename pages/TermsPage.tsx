
import React from 'react';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const TermsPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Terms & Conditions" />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-brand-slate">
           <div className="prose prose-invert prose-lg max-w-none prose-h2:text-brand-light prose-h2:font-bold prose-a:text-brand-blue hover:prose-a:text-brand-cyan">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>Please read these Terms and Conditions ("Terms") carefully before using the https://DevSparksoft.com website (the "Service") operated by DevSpark Soft IT ("us", "we", or "our").</p>

            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            
            <h2>2. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of DevSpark Soft IT and its licensors. The Service is protected by copyright, trademark, and other laws of both Bangladesh and foreign countries.</p>

            <h2>3. Links to Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by DevSpark Soft IT. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

            <h2>4. Limitation of Liability</h2>
            <p>In no event shall DevSpark Soft IT, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2>5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.</p>

            <h2>6. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2>7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at info@DevSparkSoft.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;