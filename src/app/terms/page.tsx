import { COMPANY_NAME, CURRENT_YEAR } from "@/lib/constants";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Terms of Use
        </h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last updated: 24 July 2025
          </p>

          <p className="text-slate-600 dark:text-slate-400 mb-8">
            These Terms of Use (the <strong>&ldquo;Terms&rdquo;</strong>) are a legal agreement between you (<strong>&ldquo;you&rdquo;</strong> or <strong>&ldquo;User&rdquo;</strong>) and <strong>SenseFlow, Inc.</strong>, a Delaware corporation (<strong>&ldquo;SenseFlow,&rdquo;</strong> <strong>&ldquo;we,&rdquo;</strong> <strong>&ldquo;our,&rdquo;</strong> or <strong>&ldquo;us&rdquo;</strong>). They govern your access to and use of our websites (including <strong>senseflow.io</strong> and <strong>app.senseflow.io</strong>) and any related products, software, or services we provide (collectively, the <strong>&ldquo;Services&rdquo;</strong>).
          </p>

          <p className="text-slate-600 dark:text-slate-400 mb-8">
            By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              1. Eligibility & Accounts
            </h2>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li>You must be at least 16 years old (or the age of majority in your jurisdiction, if higher) to use the Services.</li>
              <li>If you create an account, you must provide accurate information and keep your credentials confidential. You are responsible for all activity under your account.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              2. What SenseFlow Provides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              SenseFlow offers communication/calling tools and related features (including call history, recordings, and transcripts). We may launch or retire features at any time. Some parts of the Services may be offered as beta or pre-release; those parts are provided &ldquo;as is&rdquo; and may change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Fees & Payment
            </h2>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li><strong>Model:</strong> Pay‑as‑you‑go. You are charged based on actual usage as described in the applicable pricing page or order form.</li>
              <li><strong>Billing & Authorization:</strong> You authorize us (and our payment processor) to charge all incurred fees to your provided payment method.</li>
              <li><strong>No refunds:</strong> All payments are non‑refundable and non‑cancelable, except where required by law.</li>
              <li><strong>Price changes:</strong> We may change prices with reasonable notice. New prices apply to future usage/billing periods.</li>
              <li><strong>Taxes:</strong> Fees are exclusive of taxes; you&apos;re responsible for any applicable taxes, duties, or government charges.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              3. Your Responsibilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You agree to:
            </p>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li>Use the Services only for lawful purposes and in accordance with these Terms.</li>
              <li>Obtain and maintain all required consents and notices for recording or transcribing calls, as required by applicable laws (e.g., one-party or all-party consent rules).</li>
              <li>Not misuse, interfere with, reverse engineer, or attempt to gain unauthorized access to the Services or related systems.</li>
              <li>Not upload or transmit malicious code or infringe others' rights.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may suspend or terminate your access if you violate these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              4. User Content & License
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              <strong>&ldquo;User Content&rdquo;</strong> means any data, audio, text, or other material you submit, upload, record, or otherwise provide through the Services (including call recordings and transcripts).
            </p>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li>You retain ownership of your User Content.</li>
              <li>You grant SenseFlow a non-exclusive, worldwide, royalty-free license to host, store, process, transmit, and display User Content as needed to provide and improve the Services and to comply with law.</li>
              <li>You represent that you have all rights necessary to submit the User Content and grant this license.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may remove or disable content that we reasonably believe violates these Terms or applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The Services (excluding your User Content) and all related intellectual property are owned by SenseFlow or our licensors and are protected by law. Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use the Services for your internal business purposes.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You may not copy, modify, distribute, sell, or lease any part of the Services, nor reverse engineer or attempt to extract the source code unless laws prohibit these restrictions or you have our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              6. Third-Party Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The Services may integrate or interact with third-party products or services. Those are governed by their own terms and privacy policies. We are not responsible for third-party services and do not control their content or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              7. Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Your use of the Services is also subject to our <strong>Privacy Policy</strong>, which explains how we collect and use personal data. By using the Services, you consent to our data practices as described there.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              8. Beta / Experimental Features
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              From time to time, we may offer features marked as alpha, beta, preview, or otherwise pre-release. These are provided for evaluation purposes only, may be changed or discontinued at any time, and are provided &ldquo;as is&rdquo; without warranties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              9. Disclaimers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL SENSEFLOW BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOST PROFITS, REVENUE, OR DATA), EVEN IF ADVISED OF THE POSSIBILITY.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES WILL NOT EXCEED THE GREATER OF <strong>(A) USD $100 OR (B) THE AMOUNTS YOU PAID US (IF ANY) FOR THE SERVICES IN THE 12 MONTHS BEFORE THE CLAIM AROSE</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Some jurisdictions do not allow limitations of liability; in those cases, the above limits apply to the fullest extent permitted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              11. Indemnification
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You will indemnify and hold harmless SenseFlow and our officers, directors, employees, and agents from any claim, demand, losses, or damages (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Services; (b) your User Content; or (c) your violation of these Terms or applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              12. Termination
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You may stop using the Services at any time. We may suspend or terminate your access if we believe you have violated these Terms or if we stop providing the Services. Sections that by their nature should survive termination (e.g., ownership, disclaimers, limitations of liability, indemnity) will survive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              13. Changes to the Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may update these Terms occasionally. When we do, we will change the &ldquo;Last updated&rdquo; date above. If changes are material, we will take reasonable steps to notify you. Continued use after changes means you accept the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              14. Governing Law & Dispute Resolution
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              These Terms are governed by the laws of the State of Delaware (United States), without regard to its conflict of law rules.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Any dispute arising out of or relating to these Terms or the Services will be brought exclusively in the state or federal courts located in Delaware, and you consent to their jurisdiction and venue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              15. Export & Compliance
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You must comply with all applicable export control and sanctions laws. You represent that you are not located in, or a resident of, any country embargoed by the U.S. or listed on any U.S. government list of prohibited or restricted parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              16. Miscellaneous
            </h2>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li>These Terms constitute the entire agreement between you and SenseFlow regarding the Services.</li>
              <li>If a court finds any provision unenforceable, the rest remain in effect.</li>
              <li>Our failure to enforce a provision is not a waiver of our right to do so later.</li>
              <li>You may not assign these Terms without our prior written consent. We may assign them in connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              17. Contact
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              <strong>SenseFlow, Inc.</strong><br />
              3 Germay Drive, Unit 4<br />
              Wilmington, DE 19804, USA<br />
              Email:{" "}
              <a href="mailto:call-me-maybe@senseflow.io" className="text-blue-600 hover:underline">
                call-me-maybe@senseflow.io
              </a>
            </p>
          </section>

          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
              <strong>Short version:</strong> Use SenseFlow lawfully, don&apos;t break stuff, and make sure you have consent to record calls. We provide the service &ldquo;as is&rdquo; and limit our liability. If there&apos;s a dispute, Delaware law applies. Reach out if anything&apos;s unclear.
            </p>
          </div>

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