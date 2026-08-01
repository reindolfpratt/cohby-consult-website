import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, Star, Loader2 } from "lucide-react";

interface FeedbackFormData {
  // Step 1: Basic Info
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service_used: string;
  destination_country: string;
  service_date: string;

  // Step 2: Ratings (1-5)
  overall_satisfaction: number;
  communication_rating: number;
  clarity_of_process_rating: number;
  professionalism_rating: number;
  value_for_fee_rating: number;

  // Step 3: Outcome
  application_visa_outcome: string;
  outcome_comments: string;

  // Step 4: Open Feedback
  what_went_well: string;
  what_could_improve: string;
  explanation_gaps: string;

  // Step 5: Advocacy & Permissions
  will_you_recommend_us: string;
  what_would_you_tell_others: string;
  testimonial_permission: string;
  open_to_reference_call: string;
}

const INITIAL_DATA: FeedbackFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  service_used: "",
  destination_country: "",
  service_date: "",
  overall_satisfaction: 0,
  communication_rating: 0,
  clarity_of_process_rating: 0,
  professionalism_rating: 0,
  value_for_fee_rating: 0,
  application_visa_outcome: "",
  outcome_comments: "",
  what_went_well: "",
  what_could_improve: "",
  explanation_gaps: "",
  will_you_recommend_us: "",
  what_would_you_tell_others: "",
  testimonial_permission: "",
  open_to_reference_call: "",
};

const STEPS = ["Basic Details", "Ratings", "Outcome", "Open Feedback", "Advocacy"];

const SERVICE_OPTIONS = [
  "Initial Consultation",
  "University & Course Selection",
  "Application & Document Preparation",
  "Visa/Study Permit Guidance",
  "Full End-to-End Placement",
  "Other",
];

const DESTINATION_OPTIONS = ["UK", "Canada", "Other"];

const OUTCOME_OPTIONS = ["Successful", "Unsuccessful", "Still Pending", "Withdrew"];

const RECOMMEND_OPTIONS = ["Yes", "No", "Maybe"];

const TESTIMONIAL_OPTIONS = ["Yes - With Name", "Yes - Anonymous", "No"];

const REFERENCE_OPTIONS = ["Yes", "No"];

interface FeedbackFormProps {
  onClose?: () => void;
}

export default function FeedbackForm({ onClose }: FeedbackFormProps) {
  const [step, setStep] = useState(0);
  const [stepLocked, setStepLocked] = useState(false);
  const [data, setData] = useState<FeedbackFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const changeStep = (newStep: number) => {
    if (stepLocked) return;
    setStep(newStep);
    setStepLocked(true);
    setTimeout(() => setStepLocked(false), 400);
  };

  const set = (key: keyof FeedbackFormData, val: any) => {
    setData((prev) => ({ ...prev, [key]: val }));
  };

  const handleRating = (key: keyof FeedbackFormData, rating: number) => {
    set(key, rating);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !(e.target instanceof HTMLTextAreaElement) && step < STEPS.length - 1) {
      e.preventDefault();
      changeStep(step + 1);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleActualSubmit = async () => {
    if (stepLocked || isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const loginUrl = import.meta.env.VITE_SF_LOGIN_URL || "https://login.salesforce.com";
      const clientId = import.meta.env.VITE_SF_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_SF_CLIENT_SECRET;
      const username = import.meta.env.VITE_SF_USERNAME;
      const password = import.meta.env.VITE_SF_PASSWORD;

      const tokenParams = new URLSearchParams();
      tokenParams.append("grant_type", "password");
      tokenParams.append("client_id", clientId);
      tokenParams.append("client_secret", clientSecret);
      tokenParams.append("username", username);
      tokenParams.append("password", password);

      const tokenResponse = await fetch(`${loginUrl}/services/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: tokenParams.toString(),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok || !tokenData.access_token) {
        throw new Error(tokenData.error_description || "Authentication with Salesforce failed.");
      }

      const payload: Record<string, any> = {
        First_Name__c: data.first_name,
        Last_Name__c: data.last_name,
        Email__c: data.email,
        Phone__c: data.phone || null,
        Service_Used__c: data.service_used || null,
        Destination_Country__c: data.destination_country || null,
        Service_Date__c: data.service_date || null,
        Overall_Satisfaction__c: data.overall_satisfaction > 0 ? data.overall_satisfaction : null,
        Communication_Rating__c: data.communication_rating > 0 ? data.communication_rating : null,
        Clarity_of_Process_Rating__c: data.clarity_of_process_rating > 0 ? data.clarity_of_process_rating : null,
        Professionalism_Rating__c: data.professionalism_rating > 0 ? data.professionalism_rating : null,
        Value_for_Fee_Rating__c: data.value_for_fee_rating > 0 ? data.value_for_fee_rating : null,
        Application_Visa_Outcome__c: data.application_visa_outcome || null,
        Outcome_Comments__c: data.outcome_comments || null,
        What_Went_Well__c: data.what_went_well || null,
        What_Could_Improve__c: data.what_could_improve || null,
        Explanation_Gaps__c: data.explanation_gaps || null,
        Will_You_Recommend_Us_To_Others__c: data.will_you_recommend_us || null,
        What_Would_You_Tell_Others_About_Us__c: data.what_would_you_tell_others || null,
        Testimonial_Permission__c: data.testimonial_permission || null,
        Open_to_Reference_Call__c: data.open_to_reference_call || null,
      };

      const instanceUrl = tokenData.instance_url;
      const recordResponse = await fetch(`${instanceUrl}/services/data/v67.0/sobjects/Client_Feedback__c/`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const recordData = await recordResponse.json();

      if (!recordResponse.ok) {
        const message = Array.isArray(recordData) ? recordData[0]?.message : recordData.message;
        throw new Error(message || "Failed to create feedback record in Salesforce.");
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err: any) {
      console.error("Salesforce Submission Error:", err);
      setIsSubmitting(false);
      setErrorMessage(err.message || "An unexpected error occurred while submitting to Salesforce.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 px-6 animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Thank You for Your Feedback!</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Your feedback has been received and will help us continuously elevate our services.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setData(INITIAL_DATA);
            }}
            className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Submit Another Feedback
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-card rounded-2xl border border-border shadow-xl overflow-hidden my-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white text-center">
        <h2 className="text-2xl font-heading font-bold mb-1">Client Feedback Survey</h2>
        <p className="text-white/80 text-sm">Help us refine our service and deliver excellence.</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex border-b border-border bg-muted/30 overflow-x-auto">
        {STEPS.map((sLabel, index) => (
          <div
            key={sLabel}
            className={`flex-1 min-w-[100px] text-center py-3 px-2 text-xs font-semibold border-b-2 transition-all ${
              index === step
                ? "border-primary text-primary bg-background"
                : index < step
                ? "border-emerald-500 text-emerald-600"
                : "border-transparent text-muted-foreground"
            }`}
          >
            <span className="block">{index + 1}. {sLabel}</span>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8 space-y-6">
        {errorMessage && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium">
            {errorMessage}
          </div>
        )}

        {/* Step 0: Basic Details */}
        {step === 0 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-foreground border-b pb-2">Section 1 — Basic Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  value={data.first_name}
                  onChange={(e) => set("first_name", e.target.value)}
                  placeholder="Your first name"
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  value={data.last_name}
                  onChange={(e) => set("last_name", e.target.value)}
                  placeholder="Your last name"
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+44 7700 900000"
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Service Used</label>
                <select
                  value={data.service_used}
                  onChange={(e) => set("service_used", e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select Service...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Destination Country</label>
                <select
                  value={data.destination_country}
                  onChange={(e) => set("destination_country", e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select Country...</option>
                  {DESTINATION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Service Date</label>
              <input
                type="date"
                value={data.service_date}
                onChange={(e) => set("service_date", e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Step 1: Ratings */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-foreground border-b pb-2">Section 2 — Ratings (1–5)</h3>
            
            {[
              { label: "Overall Satisfaction", key: "overall_satisfaction" as const },
              { label: "Communication Rating", key: "communication_rating" as const },
              { label: "Clarity of Process Rating", key: "clarity_of_process_rating" as const },
              { label: "Professionalism Rating", key: "professionalism_rating" as const },
              { label: "Value for Fee Rating", key: "value_for_fee_rating" as const },
            ].map(({ label, key }) => (
              <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-muted/40 rounded-xl border border-border/50">
                <span className="text-sm font-medium text-foreground mb-2 sm:mb-0">{label}</span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((starNum) => (
                    <button
                      key={starNum}
                      type="button"
                      onClick={() => handleRating(key, starNum)}
                      className={`p-1 text-2xl transition-transform hover:scale-125 focus:outline-none ${
                        starNum <= data[key] ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-600"
                      }`}
                    >
                      <Star size={24} className={starNum <= data[key] ? "fill-amber-400" : ""} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Outcome */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-foreground border-b pb-2">Section 3 — Outcome</h3>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Application / Visa Outcome</label>
              <select
                value={data.application_visa_outcome}
                onChange={(e) => set("application_visa_outcome", e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="">Select Outcome...</option>
                {OUTCOME_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Outcome Comments</label>
              <textarea
                rows={4}
                value={data.outcome_comments}
                onChange={(e) => set("outcome_comments", e.target.value)}
                placeholder="Share any comments regarding your application or visa outcome..."
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Step 3: Open Feedback */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-foreground border-b pb-2">Section 4 — Open Feedback</h3>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">What Went Well?</label>
              <textarea
                rows={3}
                value={data.what_went_well}
                onChange={(e) => set("what_went_well", e.target.value)}
                placeholder="Tell us what you liked about working with us..."
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">What Could Improve?</label>
              <textarea
                rows={3}
                value={data.what_could_improve}
                onChange={(e) => set("what_could_improve", e.target.value)}
                placeholder="How could we make our service even better?"
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Explanation Gaps</label>
              <p className="text-xs text-muted-foreground mb-1">Anything you wish had been explained earlier or differently?</p>
              <textarea
                rows={3}
                value={data.explanation_gaps}
                onChange={(e) => set("explanation_gaps", e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Step 4: Advocacy & Permissions */}
        {step === 4 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-foreground border-b pb-2">Section 5 — Advocacy & Permissions</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Will You Recommend Us To Others?</label>
                <select
                  value={data.will_you_recommend_us}
                  onChange={(e) => set("will_you_recommend_us", e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select Option...</option>
                  {RECOMMEND_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Testimonial Permission</label>
                <select
                  value={data.testimonial_permission}
                  onChange={(e) => set("testimonial_permission", e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select Permission...</option>
                  {TESTIMONIAL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Open to Reference Call?</label>
              <select
                value={data.open_to_reference_call}
                onChange={(e) => set("open_to_reference_call", e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="">Select Option...</option>
                {REFERENCE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">What Would You Tell Others About Us?</label>
              <textarea
                rows={3}
                value={data.what_would_you_tell_others}
                onChange={(e) => set("what_would_you_tell_others", e.target.value)}
                placeholder="Write a brief testimonial or note..."
                className="w-full px-3.5 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Buttons Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => changeStep(step - 1)}
              disabled={stepLocked}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-input text-foreground font-medium hover:bg-muted transition-colors disabled:opacity-50"
            >
              <ChevronLeft size={16} /> Back
            </button>
          ) : <div />}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => changeStep(step + 1)}
              disabled={stepLocked}
              className="flex items-center gap-1 px-6 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              Next <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleActualSubmit}
              disabled={isSubmitting || stepLocked}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  Submit Feedback <CheckCircle2 size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
