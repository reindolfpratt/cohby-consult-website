import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import FormDialog from "@/components/FormDialog";

const TermsOfService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />

      <main className="container mx-auto px-4 py-24 md:py-32">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-secondary mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website operated by Cohby Consult
                ("we," "us," or "our"), you agree to be bound by these Terms of
                Service. If you disagree with any part of these terms, you may
                not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p>
                Cohby Consult provides education consulting services, including
                but not limited to university application assistance, program
                guidance, and study abroad counseling. We act as an intermediary
                between students and educational institutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. User Obligations
              </h2>
              <p>
                You agree to provide accurate, current, and complete information
                during the registration or application process. You are
                responsible for maintaining the confidentiality of your account
                information and for all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Intellectual Property
              </h2>
              <p>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Cohby Consult and its licensors. The Service is protected by
                copyright, trademark, and other laws of both the United States
                and foreign countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Links To Other Web Sites
              </h2>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Cohby Consult. We
                have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any third party web
                sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall Cohby Consult, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Termination
              </h2>
              <p>
                We may terminate or suspend access to our Service immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of Ghana, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Changes
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. By continuing to access or use
                our Service after those revisions become effective, you agree to
                be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:{" "}
                <a
                  href="mailto:info@cohbyconsult.com"
                  className="text-primary hover:underline"
                >
                  info@cohbyconsult.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
