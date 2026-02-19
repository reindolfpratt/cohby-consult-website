import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import FormDialog from "@/components/FormDialog";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>


          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                Cohby Consult ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. The Data We Collect About You</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Academic Data:</strong> includes educational history, grades, and language proficiency scores (collected via our application forms).</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How Is Your Personal Data Collected?</h2>
              <p>
                We use different methods to collect data from and about you including through:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Direct interactions:</strong> You may give us your Identity, Contact, and Academic Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you apply for our services or request marketing to be sent to you.</li>
                <li><strong>Automated technologies or interactions:</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To facilitate your application to educational institutions.</li>
                <li>To communicate with you about your application status or our services.</li>
                <li>To improve our website and services.</li>
                <li>To comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclosures of Your Personal Data</h2>
              <p>
                We may share your personal data with the parties set out below for the purposes set out in standard business operations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Educational institutions and universities for the purpose of submitting your application.</li>
                <li>Service providers who provide IT and system administration services.</li>
                <li>Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@cohbyconsult.com" className="text-primary hover:underline">info@cohbyconsult.com</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
