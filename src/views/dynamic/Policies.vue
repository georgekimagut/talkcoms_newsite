<template>
  <Spinner v-if="page_is_loading" />
  <div
    v-if="page_is_loading === false"
    class="w-full flex justify-center flex-wrap"
  >
    <Navbar />
    <div
      v-if="this.id === 'cookie-policy'"
      class="w-[90%] mt-10 p-10 bg-white rounded-2xl"
    >
      <h1 class="font-bold text-3xl">Cookie Policy</h1>
      <p class="text-xl mb-4"><strong>Effective Date:</strong> [Insert Date]</p>
      <p class="text-xl mb-4">
        This Cookie Policy explains how Talkcoms Limited ("we", "us", and "our")
        uses cookies and similar technologies to recognize you when you visit
        our website or use our services. It explains what these technologies are
        and why we use them, as well as your rights to control our use of them.
      </p>

      <h1 class="font-bold text-3xl">1. What Are Cookies?</h1>
      <p class="text-xl mb-4">
        Cookies are small data files placed on your device when you visit a
        website. Cookies are widely used to make websites work more efficiently,
        as well as to provide reporting information and personalized
        experiences.
      </p>

      <h1 class="font-bold text-3xl">2. Types of Cookies We Use</h1>
      <p class="text-xl mb-4">
        <strong>Essential Cookies:</strong> These are necessary for the website
        to function properly and cannot be switched off in our systems.
      </p>
      <p class="text-xl mb-4">
        <strong>Performance Cookies:</strong> These cookies help us understand
        how visitors interact with the website, allowing us to improve
        performance and user experience.
      </p>
      <p class="text-xl mb-4">
        <strong>Functionality Cookies:</strong> These cookies allow the website
        to remember choices you make to provide enhanced functionality.
      </p>
      <p class="text-xl mb-4">
        <strong>Targeting Cookies:</strong> These cookies are used to deliver
        relevant advertisements and track the effectiveness of marketing
        campaigns.
      </p>

      <h1 class="font-bold text-3xl">3. How You Can Control Cookies</h1>
      <p class="text-xl mb-4">
        You can set your browser to refuse all or some browser cookies, or to
        alert you when websites set or access cookies. You can also adjust your
        preferences through our cookie consent banner if available.
      </p>

      <h1 class="font-bold text-3xl">4. Third-Party Cookies</h1>
      <p class="text-xl mb-4">
        We may also allow third-party services to use cookies on our website for
        analytics or advertising purposes. These cookies are subject to the
        respective privacy policies of these providers.
      </p>

      <h1 class="font-bold text-3xl">5. Changes to This Policy</h1>
      <p class="text-xl mb-4">
        We may update this Cookie Policy from time to time. When we do, we will
        revise the "Effective Date" at the top. We encourage you to review this
        policy periodically for any changes.
      </p>

      <h1 class="font-bold text-3xl">6. Contact Us</h1>
      <p class="text-xl mb-4">
        If you have any questions about our use of cookies, please contact us
        at:
      </p>
    </div>
    <div
      v-if="this.id === 'Terms & Conditions'"
      class="w-[90%] mt-10 p-10 bg-white rounded-2xl"
    >
      <h1 class="font-bold text-3xl">Terms and Conditions</h1>
      <p class="text-xl mb-4"><strong>Effective Date:</strong> [Insert Date]</p>
      <p class="text-xl mb-4">
        These Terms and Conditions ("Terms") govern your use of the services,
        products, and website operated by Talkcoms Limited. By accessing or
        using our services, you agree to be bound by these Terms.
      </p>

      <h1 class="font-bold text-3xl">1. Use of Our Services</h1>
      <p class="text-xl mb-4">
        You agree to use our services only for lawful purposes and in a way that
        does not infringe on the rights of others. Misuse of our services may
        result in suspension or termination of access.
      </p>

      <h1 class="font-bold text-3xl">2. Intellectual Property</h1>
      <p class="text-xl mb-4">
        All content on our website, including logos, text, graphics, software,
        and service names, is the intellectual property of Talkcoms Limited or
        its licensors. You may not use, copy, or distribute our content without
        written permission.
      </p>

      <h1 class="font-bold text-3xl">3. User Accounts</h1>
      <p class="text-xl mb-4">
        When you create an account with us, you must provide accurate
        information and keep it updated. You are responsible for maintaining the
        confidentiality of your account credentials.
      </p>

      <h1 class="font-bold text-3xl">4. Payments and Billing</h1>
      <p class="text-xl mb-4">
        All payments for services must be made as agreed in your contract or
        invoice. Late or failed payments may result in service suspension or
        additional fees.
      </p>

      <h1 class="font-bold text-3xl">5. Limitation of Liability</h1>
      <p class="text-xl mb-4">
        Talkcoms Limited is not liable for any direct, indirect, incidental, or
        consequential damages resulting from your use of our services or
        website. We provide services "as is" without warranties of any kind.
      </p>

      <h1 class="font-bold text-3xl">6. Termination</h1>
      <p class="text-xl mb-4">
        We may suspend or terminate your access to our services at any time for
        violations of these Terms or for any other reason deemed necessary.
      </p>

      <h1 class="font-bold text-3xl">7. Governing Law</h1>
      <p class="text-xl mb-4">
        These Terms are governed by and interpreted in accordance with the laws
        of [Insert Jurisdiction], and you agree to submit to the exclusive
        jurisdiction of its courts.
      </p>

      <h1 class="font-bold text-3xl">8. Changes to Terms</h1>
      <p class="text-xl mb-4">
        We reserve the right to modify these Terms at any time. Changes will be
        effective immediately upon posting. Continued use of our services
        constitutes your acceptance of the revised Terms.
      </p>

      <h1 class="font-bold text-3xl">9. Contact Us</h1>
      <p class="text-xl mb-4">
        If you have any questions about these Terms, please contact us at:
      </p>
    </div>

    <div
      v-if="this.id === 'privacy-policy'"
      class="w-[90%] mt-10 p-10 bg-white rounded-2xl"
    >
      <h1 class="text-3xl font-bold">Privacy Policy</h1>
      <p class="text-xl mb-4"><strong>Effective Date:</strong> [Insert Date]</p>
      <p class="text-xl mb-4">
        At Talkcoms Limited, we are committed to protecting your privacy and
        ensuring that your personal information is handled in a safe and
        responsible manner. This Privacy Policy outlines how we collect, use,
        disclose, and protect your information when you interact with our
        company, including through our websites, applications, and services.
      </p>

      <h1 class="text-3xl font-bold">1. Information We Collect</h1>
      <p class="text-xl mb-4">
        We may collect the following types of personal and technical
        information:
      </p>

      <p class="text-xl mb-4"><strong>a) Personal Information</strong></p>
      <p class="text-xl mb-4">
        - Full name<br />
        - Email address<br />
        - Phone number<br />
        - Company name<br />
        - Job title or role<br />
        - Billing and payment details (for clients)<br />
        - Any other information you voluntarily provide through forms, emails,
        or customer support
      </p>

      <p class="text-xl mb-4"><strong>b) Technical Data</strong></p>
      <p class="text-xl mb-4">
        - IP address<br />
        - Browser type and version<br />
        - Device information<br />
        - Operating system<br />
        - Referring website<br />
        - Usage data such as pages visited, time spent, and navigation patterns
      </p>

      <h1 class="text-3xl font-bold">2. How We Use Your Information</h1>
      <p class="text-xl mb-4">
        We use the information we collect for the following purposes:
      </p>
      <p class="text-xl mb-4">
        - To provide our IT services and fulfill contracts<br />
        - To communicate with you, including customer service and updates<br />
        - To improve our services, website, and user experience<br />
        - To process payments and invoices<br />
        - To send marketing and promotional materials (with your consent)<br />
        - To comply with legal obligations and prevent fraud
      </p>

      <h1 class="text-3xl font-bold">3. Sharing and Disclosure</h1>
      <p class="text-xl mb-4">
        We do not sell your personal information. However, we may share your
        information in the following limited circumstances:
      </p>
      <p class="text-xl mb-4">
        <strong>Service Providers:</strong> We may engage third-party vendors to
        assist in providing services such as hosting, payment processing, or
        analytics. These vendors are contractually obligated to protect your
        data.
      </p>
      <p class="text-xl mb-4">
        <strong>Legal Requirements:</strong> We may disclose your data if
        required to do so by law or in response to valid legal requests.
      </p>
      <p class="text-xl mb-4">
        <strong>Business Transfers:</strong> If we are involved in a merger,
        acquisition, or asset sale, your information may be transferred as part
        of the transaction.
      </p>

      <h1 class="text-3xl font-bold">4. Data Retention</h1>
      <p class="text-xl mb-4">
        We retain your personal information only as long as necessary for the
        purposes stated in this policy, including legal, accounting, and
        regulatory requirements. Once no longer needed, we securely delete or
        anonymize the data.
      </p>

      <h1 class="text-3xl font-bold">5. Data Security</h1>
      <p class="text-xl mb-4">
        We take reasonable and appropriate measures to protect your information
        from unauthorized access, disclosure, alteration, or destruction. These
        include:
      </p>
      <p class="text-xl mb-4">
        - Encryption of sensitive data<br />
        - Access control restrictions<br />
        - Regular security audits<br />
        - Use of secure servers and firewalls
      </p>
      <p class="text-xl mb-4">
        While we strive to protect your data, no method of transmission over the
        Internet is 100% secure.
      </p>

      <h1 class="text-3xl font-bold">6. Your Rights</h1>
      <p class="text-xl mb-4">
        Depending on your location, you may have the following rights:
      </p>
      <p class="text-xl mb-4">
        - Access to the personal data we hold about you<br />
        - Request correction or deletion of your information<br />
        - Object to or restrict certain data processing activities<br />
        - Withdraw consent where applicable<br />
        - File a complaint with a relevant data protection authority
      </p>
      <p class="text-xl mb-4">
        To exercise any of these rights, please contact us at [Insert Contact
        Email].
      </p>

      <h1 class="text-3xl font-bold">7. Cookies and Tracking Technologies</h1>
      <p class="text-xl mb-4">
        Our website uses cookies and similar technologies to enhance your
        browsing experience, analyze site usage, and support marketing efforts.
        You can manage cookie preferences through your browser settings or
        cookie banner on our site.
      </p>

      <h1 class="text-3xl font-bold">8. Third-Party Links</h1>
      <p class="text-xl mb-4">
        Our website or communications may contain links to third-party websites.
        We are not responsible for the privacy practices or content of those
        sites. We encourage you to read their privacy policies.
      </p>

      <h1 class="text-3xl font-bold">9. Children’s Privacy</h1>
      <p class="text-xl mb-4">
        Our services are not directed to children under the age of 13. We do not
        knowingly collect personal information from minors. If we become aware
        that we have collected such data, we will delete it immediately.
      </p>

      <h1 class="text-3xl font-bold">10. Policy Updates</h1>
      <p class="text-xl mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in law, technology, or our practices. When we do, we will revise the
        “Effective Date” at the top. We encourage you to review the policy
        periodically.
      </p>

      <h1 class="text-3xl font-bold">11. Contact Us</h1>
      <p class="text-xl mb-4">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us:
      </p>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Privacy",
  props: ["id"],
  components: { Navbar, Footer, Spinner },
  data() {
    return {
      page_is_loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.page_is_loading = false;
    }, 2000);
  },
};
</script>
