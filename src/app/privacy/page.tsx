import { COMPANY_NAME, CONTACT_EMAIL, CURRENT_YEAR } from "@/lib/constants";
import { SummaryBox } from "@/components/ui/summary-box";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last updated: 24 July 2025
          </p>

          <p className="text-slate-600 dark:text-slate-400 mb-8">
            SenseFlow, Inc. (&ldquo;SenseFlow&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the websites available at senseflow.io and app.senseflow.io (the &ldquo;Site&rdquo;) and any early-access or beta services we may offer (together, the &ldquo;Services&rdquo;). This policy explains, in plain English, what we collect, why we collect it, and how you can reach us about your data.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              1. What we collect
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We keep this lean and only collect what we need to run and improve the Services:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mb-4 ml-4">
              <li>Call data &ndash; call history/metadata (time, duration, participants), call recordings, and transcripts.</li>
              <li>Contact info you give us &ndash; email address, name, company, role, phone number, etc.</li>
              <li>Technical/session data &ndash; IP address, device/browser info, and basic logs needed to keep the site secure and functional.</li>
              <li>Support messages or feedback &ndash; anything you choose to send us by email or forms.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400">
              We do not intentionally collect sensitive personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              2. Why we use your data
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We use the information above to:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mb-4 ml-4">
              <li>Provide and operate our calling/communication features</li>
              <li>Secure, debug, and improve the Site and Services</li>
              <li>Respond to your requests and provide support</li>
              <li>Send essential service-related notices (no marketing blasts)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              3. Legal bases (for EU/UK users)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Our processing is generally based on one of these grounds:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mb-4 ml-4">
              <li>Legitimate interests (running and improving our Services)</li>
              <li>Consent (e.g., when you sign up for anything that clearly requires consent)</li>
              <li>Contract (providing requested Services)</li>
              <li>Legal obligation (where required by law)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              4. Cookies & similar tech
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We currently use only essential/session cookies and similar technologies required to run the Site. We do not use analytical or marketing cookies right now. You can block cookies in your browser; some parts of the Site may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              5. Sharing & vendors
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We don&apos;t sell personal data. We may share limited information with trusted service providers who help us host, deliver, analyze, or support the Services (e.g., cloud hosting, email delivery). They only access your data to perform services for us and must protect it.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              We may also disclose information if required by law or to protect rights, safety, or property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              6. Data retention
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We keep personal data only as long as needed for the purposes above, then delete or anonymize it. If you ask us to delete your data, we&apos;ll do so unless we must keep it for legal reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              7. Your rights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Depending on where you live (e.g., EU/UK GDPR, California CPRA), you may have rights to:
            </p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mb-4 ml-4">
              <li>Access, correct, or delete your personal data</li>
              <li>Object to or restrict certain processing</li>
              <li>Receive a portable copy of your data</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400">
              To exercise rights, email us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>. We may need to verify your identity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              8. Children
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Our Services are not directed to individuals under 18. If you believe a child provided us data, contact us and we&apos;ll delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              9. Security
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We use reasonable technical and organizational measures to protect your data. No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              10. Changes to this policy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the latest version. Material changes will be highlighted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              11. Contact us
            </h2>
            <div className="text-slate-600 dark:text-slate-400 mb-4">
              <p className="mb-2">SenseFlow, Inc.</p>
              <p className="mb-2">3 Germay Drive, Unit 4</p>
              <p className="mb-2">Wilmington, DE 19804, USA</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a></p>
            </div>
          </section>

          <SummaryBox>
            <strong>Short version:</strong> We collect call data and contact info to run SenseFlow. We don&apos;t sell your data or use analytics cookies. Email us anytime to see or delete what we have.
          </SummaryBox>

          <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
} 