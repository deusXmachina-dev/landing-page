import { COMPANY_NAME, CURRENT_YEAR } from "@/lib/constants";
import { SummaryBox } from "@/components/ui/summary-box";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Terms of Use
        </h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Last updated: 25 July 2025
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
              <li>You must be at least <strong>18 years old</strong> (or the age of majority in your jurisdiction, if higher) to use the Services.</li>
              <li>If you create an account, you must provide accurate information and keep your credentials confidential. You are responsible for all activity that occurs under your account.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              2. What SenseFlow Provides
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              SenseFlow offers cloud-based communication and calling tools together with related features (such as call history, recordings, and transcripts). We may add, modify, or retire features at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              3. Acceptance of Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              By using the Services, you agree to be bound by these Terms. These Terms expressly supersede and replace any prior agreements or understandings—written or oral—relating to the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              4. Fees & Payment
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              If your plan is subject to fees, you agree to pay all amounts due—plus applicable taxes—in accordance with the pricing and payment terms presented when you order the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              5. Prohibited Uses
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You agree <strong>not</strong> to use the Services for any unlawful purpose or in any way that violates local, state, national, or international law. Prohibited uses include, but are not limited to:
            </p>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li><strong>Criminal activities</strong> or instructions facilitating such activities;</li>
              <li><strong>Malicious, fraudulent, or illegal purposes</strong>;</li>
              <li><strong>Infringement of SenseFlow&apos;s or any third‑party intellectual‑property rights</strong>;</li>
              <li><strong>Defamatory, harassing, abusive, or threatening conduct</strong>;</li>
              <li><strong>Distribution of unauthorised spam or bulk communications</strong>;</li>
              <li><strong>Transmission of viruses, malware, or other destructive code</strong>;</li>
              <li><strong>Collecting, processing, or transmitting personal information without proper consent</strong>;</li>
              <li><strong>Interfering with, disrupting, or undermining the functionality or security of the Services</strong>.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              SenseFlow may suspend or terminate your access, or remove content, if we reasonably believe you have violated this section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              6. User Content & Licence
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              <strong>&ldquo;User Content&rdquo;</strong> means any data, audio, text, or other material you submit, upload, record, or otherwise provide through the Services (including call recordings and transcripts).
            </p>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li><strong>Ownership.</strong> You retain ownership of your User Content.</li>
              <li><strong>Licence to SenseFlow.</strong> You grant SenseFlow a non‑exclusive, worldwide, royalty‑free licence to host, store, process, transmit, and display User Content as necessary to operate, maintain, and improve the Services and to comply with applicable law.</li>
              <li><strong>Representations.</strong> You represent that you have all rights necessary to submit the User Content and grant this licence.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may remove or disable User Content that we reasonably believe violates these Terms or applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The Services (excluding your User Content) and all related intellectual‑property rights are owned by SenseFlow or our licensors. Subject to your compliance with these Terms, we grant you a limited, non‑exclusive, non‑transferable licence to access and use the Services for your internal business purposes.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You may not copy, modify, distribute, sell, or lease any part of the Services, nor reverse‑engineer or attempt to extract source code, except to the extent such restrictions are prohibited by law or we have given you written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              8. Third‑Party Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The Services may integrate with, or depend on, third‑party products or services. Those third‑party services are governed by their own terms and privacy policies. We do not control and are not responsible for third‑party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              9. Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Your use of the Services is also subject to our <strong>Privacy Policy</strong>, which explains how we collect, use, and protect personal data. By using the Services, you consent to our data practices as described in that policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              10. Beta / Experimental Features
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may offer features labelled alpha, beta, preview, or otherwise pre‑release. Such features are provided for evaluation only, may be changed or discontinued at any time, and are provided <strong>&ldquo;as is.&rdquo;</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              11. Disclaimers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              THE SERVICES ARE PROVIDED <strong>&ldquo;AS IS&rdquo;</strong> AND <strong>&ldquo;AS AVAILABLE.&rdquo;</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES—EXPRESS OR IMPLIED—INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR‑FREE, OR SECURE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              12. Limitation of Liability
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL SENSEFLOW BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOST PROFITS, REVENUE, OR DATA), EVEN IF ADVISED OF THE POSSIBILITY.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES WILL NOT EXCEED THE <strong>GREATER OF (A) USD $100 OR (B) THE AMOUNTS YOU PAID US (IF ANY) FOR THE SERVICES DURING THE 12 MONTHS BEFORE THE CLAIM AROSE</strong>. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS OF LIABILITY; IN THOSE CASES, THE ABOVE LIMITS APPLY TO THE FULLEST EXTENT PERMITTED.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              13. Indemnification
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You will indemnify and hold harmless SenseFlow and its affiliates (including their officers, directors, employees, and agents) from and against any third‑party claims arising out of your use of the Services or violation of these Terms, including reasonable attorneys&apos; fees and costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              14. Termination
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You may discontinue use of the Services at any time.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We reserve the <strong>right, at our sole discretion, to suspend or terminate the Services or your account—wholly or partially—at any time, with or without notice, for any reason or no reason</strong>, including (without limitation):
            </p>
            <ol className="text-slate-600 dark:text-slate-400 mb-4 list-[lower-alpha] pl-6">
              <li>your actual or suspected violation of these Terms or any policy;</li>
              <li>unlawful, fraudulent, or abusive use of the Services;</li>
              <li>compliance with a law‑enforcement request, court order, or applicable law;</li>
              <li>our determination that providing the Services to you is no longer commercially viable;</li>
              <li>extended inactivity on your account; or</li>
              <li>our decision to discontinue the Services generally.</li>
            </ol>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Upon termination or suspension:
            </p>
            <ul className="text-slate-600 dark:text-slate-400 mb-4 list-disc pl-6">
              <li>Your right to access or use the Services will immediately cease;</li>
              <li>We may deactivate or delete your account and all related information and files; and</li>
              <li>We will have no liability to you or any third party for terminating access or deleting your account or any User Content.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Sections that by their nature should survive termination—including ownership provisions, warranty disclaimers, indemnities, and limitations of liability—will survive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              15. Changes to the Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              We may update these Terms from time to time. We will post the revised Terms and update the &ldquo;Last updated&rdquo; date. Material changes will be highlighted on the website or via email where practical. Continued use after changes means you accept the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              16. Governing Law & Dispute Resolution
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict‑of‑law rules. Any dispute arising out of or relating to these Terms or the Services will be brought exclusively in the state or federal courts located in Delaware, and you consent to their jurisdiction and venue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              17. Export & Compliance
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You must comply with all applicable export‑control and sanctions laws. You represent that you are not located in, or a resident of, any country embargoed by the United States or listed on any U.S. government list of prohibited or restricted parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              18. Miscellaneous
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              If any provision of these Terms is found unenforceable, it will be severed, and the remaining provisions will remain in full force. These Terms do not create any agency, partnership, joint venture, or employment relationship. You may not assign these Terms without our consent; we may assign them without restriction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              19. Contact
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

          <SummaryBox className="mt-8">
            <strong>Short version:</strong> Use SenseFlow lawfully, don&apos;t break stuff, and make sure you have consent to record calls. We provide the Services &ldquo;as is&rdquo; and limit our liability. If there&apos;s a dispute, Delaware law applies. Reach out if anything&apos;s unclear.
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