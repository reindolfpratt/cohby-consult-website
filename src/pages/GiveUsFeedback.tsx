import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/FeedbackForm";
import FormDialog from "@/components/FormDialog";
import { useState } from "react";

export default function GiveUsFeedback() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <FormDialog open={formOpen} onOpenChange={setFormOpen} />

      <main className="flex-1 pt-28 pb-16">
        {/* Header Hero */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4 tracking-tight">
            We Value Your Feedback
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your insights allow us to continually refine our placement and guidance process. Please take a moment to share your experience with Cohby Consult.
          </p>
        </section>

        {/* Feedback Form Container */}
        <section className="container mx-auto px-4">
          <FeedbackForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
