import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/FeedbackForm";
import FormDialog from "@/components/FormDialog";
import { useState } from "react";
import { MessageSquareHeart, Star, ShieldCheck } from "lucide-react";

export default function GiveUsFeedback() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onOpenForm={() => setFormOpen(true)} />
      <FormDialog open={formOpen} onOpenChange={setFormOpen} />

      <main className="flex-1 pt-28 pb-16">
        {/* Header Hero */}
        <section className="container mx-auto px-4 text-center max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <MessageSquareHeart size={18} /> Client Voice &amp; Evaluation
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4 tracking-tight">
            We Value Your Feedback
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your insights allow us to continually refine our placement and guidance process. Please take a moment to share your experience with Cohby Consult.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3 text-left">
              <Star className="text-amber-500 shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-sm">Quick Ratings</h4>
                <p className="text-xs text-muted-foreground">Rate your satisfaction in seconds</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3 text-left">
              <MessageSquareHeart className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-sm">Open Feedback</h4>
                <p className="text-xs text-muted-foreground">Share what went well &amp; what to improve</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3 text-left">
              <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-sm">Confidential</h4>
                <p className="text-xs text-muted-foreground">Your permissions are fully respected</p>
              </div>
            </div>
          </div>
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
