import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, Loader2 } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 – Personal Details
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  state: string;
  country: string;
  mobile: string; // whatsapp

  // Step 2 – Previous Study
  "00NSj000002uvYj": string; // Level of Education
  educationOther: string;
  "00NSj000002uvaL": string; // Last Institution
  "00NSj000002uvgn": string; // English Language Test
  "00NSj000002uufu": string; // Programme Studied

  // Step 3 – Program & Country of Interest
  "00NSj000002uvld": string[]; // Country of Interest (multi)
  countryInterestOther: string;
  "00NSj000002uvor": string; // Program of Interest

  // Step 4 – Newsletter & Comments
  "00NSj000002uvth": string; // How Did You Hear
  hearOther: string;
  "00NSj000002uvwv": boolean; // Newsletter
  "00NSj000002uvyXMAQ": string; // Comments
}

const INITIAL_DATA: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  city: "",
  state: "",
  country: "",
  mobile: "",
  "00NSj000002uvYj": "",
  educationOther: "",
  "00NSj000002uvaL": "",
  "00NSj000002uvgn": "",
  "00NSj000002uufu": "",
  "00NSj000002uvld": [],
  countryInterestOther: "",
  "00NSj000002uvor": "",
  "00NSj000002uvth": "",
  hearOther: "",
  "00NSj000002uvwv": false,
  "00NSj000002uvyXMAQ": "",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const STEPS = ["Personal Details", "Previous Study", "Country & Programme", "Newsletter"];

const COUNTRIES_OF_INTEREST = [
  "United Kingdom",
  "Canada",
  "Austria",
  "Poland",
  "Hungary",
  "Denmark",
  "Germany",
  "United States of America",
  "Australia",
  "Other",
];

const REFERRAL_OPTIONS = [
  "Instagram",
  "Facebook",
  "YouTube",
  "Tiktok",
  "LinkedIn",
  "Friend, Family or Colleague",
  "Google Ad",
  "Other",
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const ProgressBar = ({ step, total }: { step: number; total: number }) => (
  <div className="sf-progress-wrapper">
    <div className="sf-progress-steps">
      {STEPS.map((label, i) => (
        <div key={label} className={`sf-step-item ${i <= step ? "active" : ""}`}>
          <div className={`sf-step-circle ${i < step ? "done" : i === step ? "current" : ""}`}>
            {i < step ? <CheckCircle2 size={14} /> : <span>{i + 1}</span>}
          </div>
          <span className="sf-step-label">{label}</span>
        </div>
      ))}
    </div>
    <div className="sf-progress-bar-track">
      <div
        className="sf-progress-bar-fill"
        style={{ width: `${(step / (total - 1)) * 100}%` }}
      />
    </div>
  </div>
);

const FieldWrapper = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <div className="sf-field">
    <label className="sf-label">{label}</label>
    {hint && <p className="sf-hint">{hint}</p>}
    {children}
  </div>
);

const TextInput = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    required={required}
    className="sf-input"
    autoComplete="off"
  />
);

const SelectInput = ({
  id,
  name,
  value,
  onChange,
  options,
  required,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) => (
  <select
    id={id}
    name={name}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
    className="sf-select"
  >
    <option value="">— Select —</option>
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const SalesforceForm = ({ onClose }: { onClose?: () => void }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nativeFormRef = useRef<HTMLFormElement>(null);

  const set = (field: keyof FormData, value: string | boolean | string[]) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const toggleCountry = (country: string) => {
    setData((prev) => {
      const list = prev["00NSj000002uvld"];
      return {
        ...prev,
        "00NSj000002uvld": list.includes(country)
          ? list.filter((c) => c !== country)
          : [...list, country],
      };
    });
  };

  // Validate current step before advancing
  const validateStep = (): boolean => {
    if (step === 0) {
      if (!data.first_name.trim()) { alert("Please enter your first name."); return false; }
      if (!data.last_name.trim()) { alert("Please enter your last name."); return false; }
      if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) { alert("Please enter a valid email."); return false; }
      if (!data.country.trim()) { alert("Please enter your country."); return false; }
      if (!data.mobile.trim()) { alert("Please enter your WhatsApp number."); return false; }
    }
    if (step === 1) {
      if (!data["00NSj000002uvYj"]) { alert("Please select your level of education."); return false; }
      if (data["00NSj000002uvYj"] === "Other" && !data.educationOther.trim()) {
        alert("Please specify your level of education."); return false;
      }
      if (!data["00NSj000002uvgn"]) { alert("Please answer the English language test question."); return false; }
    }
    if (step === 2) {
      if (data["00NSj000002uvld"].length === 0) { alert("Please select at least one country of interest."); return false; }
      if (data["00NSj000002uvld"].includes("Other") && !data.countryInterestOther.trim()) {
        alert("Please specify the country."); return false;
      }
    }
    if (step === 3) {
      if (!data["00NSj000002uvth"]) { alert("Please tell us how you heard about us."); return false; }
      if (data["00NSj000002uvth"] === "Other" && !data.hearOther.trim()) {
        alert("Please specify how you heard about us."); return false;
      }
    }
    return true;
  };

  const [isChangingStep, setIsChangingStep] = useState(false);

  const next = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (isChangingStep) return;
    if (!validateStep()) return;
    
    setIsChangingStep(true);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    
    // Add a small cooldown to prevent double-clicks from submitting
    setTimeout(() => setIsChangingStep(false), 500);
  };
  const back = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setStep((s) => Math.max(s - 1, 0));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only allow submission if we are on the final step AND not in the middle of a step change
    if (step < STEPS.length - 1 || isChangingStep) return;
    
    if (!validateStep()) return;
    setIsSubmitting(true);

    // Build a native form and submit it directly to Salesforce
    const form = nativeFormRef.current;
    if (form) {
      // Populate hidden inputs
      const setValue = (name: string, value: string) => {
        let input = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
        if (!input) {
          input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          form.appendChild(input);
        }
        input.value = value;
      };

      setValue("first_name", data.first_name);
      setValue("last_name", data.last_name);
      setValue("email", data.email);
      setValue("city", data.city);
      setValue("state", data.state);
      setValue("country", data.country);
      setValue("mobile", data.mobile);
      setValue(
        "00NSj000002uvYj",
        data["00NSj000002uvYj"] === "Other" ? data.educationOther : data["00NSj000002uvYj"]
      );
      setValue("00NSj000002uvaL", data["00NSj000002uvaL"]);
      setValue("00NSj000002uvgn", data["00NSj000002uvgn"]);
      setValue("00NSj000002uufu", data["00NSj000002uufu"]);
      // Country of interest – Salesforce expects multiple values with same name
      const existing = form.querySelectorAll<HTMLInputElement>('[name="00NSj000002uvld"]');
      existing.forEach((el) => el.remove());
      const selectedCountries = data["00NSj000002uvld"].includes("Other")
        ? [...data["00NSj000002uvld"].filter((c) => c !== "Other"), data.countryInterestOther || "Other"]
        : data["00NSj000002uvld"];
      selectedCountries.forEach((c) => {
        const inp = document.createElement("input");
        inp.type = "hidden";
        inp.name = "00NSj000002uvld";
        inp.value = c;
        form.appendChild(inp);
      });
      setValue("00NSj000002uvor", data["00NSj000002uvor"]);
      setValue(
        "00NSj000002uvth",
        data["00NSj000002uvth"] === "Other" ? data.hearOther : data["00NSj000002uvth"]
      );
      setValue("00NSj000002uvwv", data["00NSj000002uvwv"] ? "1" : "0");
      setValue("00NSj000002uvyXMAQ", data["00NSj000002uvyXMAQ"]);

      form.target = "sf_submission_frame"; // Submit to the hidden iframe
      form.submit();
      setSubmitted(true);
    }
    setIsSubmitting(false);
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div className="sf-success">
        <CheckCircle2 className="sf-success-icon" />
        <h2>Application Submitted!</h2>
        <p>Thank you for reaching out. Our team will get back to you shortly.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="sf-btn-primary" onClick={onClose}>
            Stay on Page
          </button>
          <a href="/" className="sf-btn-submit text-center no-underline">
            Go to Home Page
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hidden native form that submits to Salesforce via iframe */}
      <iframe name="sf_submission_frame" style={{ display: "none" }}></iframe>
      <form
        ref={nativeFormRef}
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000GzkH"
        method="POST"
        style={{ display: "none" }}
      >
        <input type="hidden" name="oid" value="00DgD000000GzkH" />
        <input type="hidden" name="retURL" value="https://www.cohbyconsult.com/" />
      </form>

      <div className="sf-form-container">
        <ProgressBar step={step} total={STEPS.length} />

        <form onSubmit={onFormSubmit} noValidate>
          {/* ─── Step 1: Personal Details ─────────────────────────────── */}
          {step === 0 && (
            <div className="sf-step">
              <h3 className="sf-step-title">Personal Details</h3>
              <div className="sf-grid-2">
                <FieldWrapper label="First Name *">
                  <TextInput
                    name="first_name"
                    value={data.first_name}
                    onChange={(v) => set("first_name", v)}
                    placeholder="Your first name"
                    required
                  />
                </FieldWrapper>
                <FieldWrapper label="Last Name *">
                  <TextInput
                    name="last_name"
                    value={data.last_name}
                    onChange={(v) => set("last_name", v)}
                    placeholder="Your last name"
                    required
                  />
                </FieldWrapper>
              </div>
              <FieldWrapper label="Email Address *">
                <TextInput
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(v) => set("email", v)}
                  placeholder="your@email.com"
                  required
                />
              </FieldWrapper>
              <div className="sf-grid-2">
                <FieldWrapper label="City">
                  <TextInput
                    name="city"
                    value={data.city}
                    onChange={(v) => set("city", v)}
                    placeholder="Your city"
                  />
                </FieldWrapper>
                <FieldWrapper label="State / Province">
                  <TextInput
                    name="state"
                    value={data.state}
                    onChange={(v) => set("state", v)}
                    placeholder="Your state or province"
                  />
                </FieldWrapper>
              </div>
              <FieldWrapper label="Country *">
                <TextInput
                  name="country"
                  value={data.country}
                  onChange={(v) => set("country", v)}
                  placeholder="Your country"
                  required
                />
              </FieldWrapper>
              <FieldWrapper
                label="WhatsApp Number *"
                hint="Please include your country code (e.g. +44 7700 900000)"
              >
                <TextInput
                  name="mobile"
                  type="tel"
                  value={data.mobile}
                  onChange={(v) => set("mobile", v)}
                  placeholder="+1 234 567 8900"
                  required
                />
              </FieldWrapper>
            </div>
          )}

          {/* ─── Step 2: Previous Study ───────────────────────────────── */}
          {step === 1 && (
            <div className="sf-step">
              <h3 className="sf-step-title">Previous Study</h3>
              <FieldWrapper label="Level of Education *">
                <SelectInput
                  id="00NSj000002uvYj"
                  name="00NSj000002uvYj"
                  value={data["00NSj000002uvYj"]}
                  onChange={(v) => set("00NSj000002uvYj", v)}
                  options={[
                    { value: "Senior High School", label: "Senior High School" },
                    { value: "Bachelor's Degree", label: "Bachelor's Degree" },
                    { value: "Master's Degree", label: "Master's Degree" },
                    { value: "Doctorate", label: "Doctorate" },
                    { value: "Other", label: "Other" },
                  ]}
                  required
                />
              </FieldWrapper>
              {data["00NSj000002uvYj"] === "Other" && (
                <FieldWrapper label="Please specify your level of education *">
                  <TextInput
                    name="educationOther"
                    value={data.educationOther}
                    onChange={(v) => set("educationOther", v)}
                    placeholder="Please describe your level of education"
                    required
                  />
                </FieldWrapper>
              )}
              <FieldWrapper label="Name of Your Last Institution">
                <TextInput
                  name="00NSj000002uvaL"
                  value={data["00NSj000002uvaL"]}
                  onChange={(v) => set("00NSj000002uvaL", v)}
                  placeholder="e.g. University of Lagos"
                />
              </FieldWrapper>
              <FieldWrapper
                label="Do You Have A Valid English Language Test? *"
                hint="IELTS, TOEFL, CAEL, PTE, CELPIP, MELAB, DET"
              >
                <SelectInput
                  id="00NSj000002uvgn"
                  name="00NSj000002uvgn"
                  value={data["00NSj000002uvgn"]}
                  onChange={(v) => set("00NSj000002uvgn", v)}
                  options={[
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" },
                  ]}
                  required
                />
              </FieldWrapper>
              <FieldWrapper label="What Programme Did You Study?">
                <TextInput
                  name="00NSj000002uufu"
                  value={data["00NSj000002uufu"]}
                  onChange={(v) => set("00NSj000002uufu", v)}
                  placeholder="e.g. Business Administration"
                />
              </FieldWrapper>
            </div>
          )}

          {/* ─── Step 3: Country & Programme of Interest ──────────────── */}
          {step === 2 && (
            <div className="sf-step">
              <h3 className="sf-step-title">Country & Programme of Interest</h3>
              <FieldWrapper label="Countries of Interest" hint="Select all that apply">
                <div className="sf-checkbox-group">
                  {COUNTRIES_OF_INTEREST.map((c) => (
                    <label key={c} className="sf-checkbox-item">
                      <input
                        type="checkbox"
                        checked={data["00NSj000002uvld"].includes(c)}
                        onChange={() => toggleCountry(c)}
                        className="sf-checkbox"
                      />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </FieldWrapper>
              {data["00NSj000002uvld"].includes("Other") && (
                <FieldWrapper label="Please specify the country *">
                  <TextInput
                    name="countryInterestOther"
                    value={data.countryInterestOther}
                    onChange={(v) => set("countryInterestOther", v)}
                    placeholder="e.g. Netherlands"
                    required
                  />
                </FieldWrapper>
              )}
              <FieldWrapper label="What is Your Programme of Interest?">
                <TextInput
                  name="00NSj000002uvor"
                  value={data["00NSj000002uvor"]}
                  onChange={(v) => set("00NSj000002uvor", v)}
                  placeholder="e.g. MSc Computer Science"
                />
              </FieldWrapper>
            </div>
          )}

          {/* ─── Step 4: Newsletter & Comments ───────────────────────── */}
          {step === 3 && (
            <div className="sf-step">
              <h3 className="sf-step-title">Almost Done!</h3>
              <FieldWrapper label="How Did You Hear About Us?">
                <div className="sf-checkbox-group">
                  {REFERRAL_OPTIONS.map((opt) => (
                    <label key={opt} className="sf-checkbox-item">
                      <input
                        type="radio"
                        name="hearAboutUs"
                        value={opt}
                        checked={data["00NSj000002uvth"] === opt}
                        onChange={() => set("00NSj000002uvth", opt)}
                        className="sf-checkbox"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </FieldWrapper>
              {data["00NSj000002uvth"] === "Other" && (
                <FieldWrapper label="Please tell us how you heard about us *">
                  <TextInput
                    name="hearOther"
                    value={data.hearOther}
                    onChange={(v) => set("hearOther", v)}
                    placeholder="Please describe"
                    required
                  />
                </FieldWrapper>
              )}
              <FieldWrapper label="Would You Like To Receive Our Newsletter?">
                <label className="sf-newsletter-toggle">
                  <input
                    type="checkbox"
                    checked={data["00NSj000002uvwv"]}
                    onChange={(e) => set("00NSj000002uvwv", e.target.checked)}
                    className="sf-toggle-input"
                    id="newsletter-checkbox"
                  />
                  <span className="sf-toggle-slider" />
                  <span className="sf-toggle-label">
                    {data["00NSj000002uvwv"] ? "Yes, sign me up!" : "No thanks"}
                  </span>
                </label>
              </FieldWrapper>
              <FieldWrapper label="Any Questions or Comments?">
                <textarea
                  name="00NSj000002uvyXMAQ"
                  id="00NSj000002uvyXMAQ"
                  value={data["00NSj000002uvyXMAQ"]}
                  onChange={(e) => set("00NSj000002uvyXMAQ", e.target.value)}
                  placeholder="Feel free to share any questions or additional details..."
                  rows={5}
                  className="sf-textarea"
                />
              </FieldWrapper>
            </div>
          )}

          {/* ─── Navigation ──────────────────────────────────────────── */}
          <div className="sf-nav">
            {step > 0 && (
              <button type="button" className="sf-btn-ghost" onClick={back}>
                <ChevronLeft size={16} />
                Back
              </button>
            )}
            <div style={{ flex: 1 }} />
            
            {step < STEPS.length - 1 ? (
              <button 
                type="button" 
                className="sf-btn-primary" 
                onClick={next}
                disabled={isChangingStep}
              >
                Save & Continue
                <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                type="submit" 
                className="sf-btn-submit" 
                disabled={isSubmitting || isChangingStep}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="sf-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle2 size={16} />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default SalesforceForm;
