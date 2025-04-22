import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-secondary)] font-sans px-6 py-12 lg:px-32">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-[var(--color-accent)] text-4xl font-bold">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400">Effective Date: April 1, 2025</p>

        <p>
          PerformAce Media (“we”, “us”, or “our”) respects your privacy. This
          Privacy Policy outlines how we collect, use, store, and protect your
          personal information when you interact with our website
          (www.performacemedia.com) and related services.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            a) <strong>Automatically Collected Data:</strong> IP address,
            location, browser type, device type, OS, referring pages, pages
            visited, interaction behavior, advertising ID, cookies, analytics
            tools.
          </p>
          <p>
            b) <strong>Voluntarily Provided Data:</strong> Contact details
            (name, email, phone), forms, communication preferences, feedback.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            2. How We Use Your Data
          </h2>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Deliver and optimize targeted digital advertising</li>
            <li>Improve website performance and user experience</li>
            <li>Communicate with you regarding services and updates</li>
            <li>Analyze campaign metrics</li>
            <li>Comply with legal obligations and prevent fraud</li>
          </ul>
          <p className="mt-2">
            We use services such as Google Analytics and Google Tag Manager.
            These tools collect information to help us understand user behavior
            and deliver more relevant content and advertising. See Google’s
            policy:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              className="underline text-blue-400"
            >
              Google Partner Sites
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            3. Data Retention
          </h2>
          <p>
            We retain data only as long as necessary. For marketing
            communications, data is retained until you opt out. We securely
            delete or anonymize it thereafter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            4. Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, restrict, or object to data processing. Contact us
            at{" "}
            <a
              href="mailto:dpo@performacemedia.com"
              className="underline text-blue-400"
            >
              dpo@performacemedia.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            5. Security Measures
          </h2>
          <p>
            We use HTTPS, secure storage, and limited access protocols to
            protect your data. While we strive to safeguard your information, no
            method is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            6. Updates
          </h2>
          <p>
            We may revise this policy from time to time. The updated policy will
            be available on our website, with changes reflected in the
            “Effective Date”.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)]">
            7. Contact Us
          </h2>
          <p>
            If you have any questions, reach out to our Data Protection Officer
            at{" "}
            <a
              href="mailto:dpo@performacemedia.com"
              className="underline text-blue-400"
            >
              dpo@performacemedia.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
