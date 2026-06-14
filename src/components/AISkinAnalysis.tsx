import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  CheckCircle,
  Flame,
  Droplets,
  Smile,
  HelpCircle,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SkinQuestion, Product } from "../types";

interface AISkinAnalysisProps {
  questions: SkinQuestion[];
  products: Product[];
  onSubmitRecord: (
    userName: string,
    userEmail: string,
    answers: Record<string, string>,
    resultType: string,
    recommendedIds: string[],
  ) => void;
}

export default function AISkinAnalysis({
  questions,
  products,
  onSubmitRecord,
}: AISkinAnalysisProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [collectingInfo, setCollectingInfo] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [diagnosing, setDiagnosing] = useState(false);

  // States inside the result report
  const [reportData, setReportData] = useState<{
    typeKey: string;
    typeName: string;
    concernKey: string;
    concernName: string;
    description: string;
    routines: string[];
    recomProducts: Product[];
  } | null>(null);

  const handleOptionSelect = (qId: string, optVal: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optVal,
    }));

    // Auto-advance with natural delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Formulate registration fields screen
        setCollectingInfo(true);
      }
    }, 400);
  };

  const calculateSkinDiagnosis = () => {
    setDiagnosing(true);

    const skinType = userAnswers["q-skintype"] || "normal";
    const concern = userAnswers["q-concern"] || "aging";
    const sensitivity = userAnswers["q-sensitivity"] || "resilient";

    // Map of diagnostics outcomes
    let typeName = "Normal & Balanced Skin";
    let description =
      "Your skin is in a healthy, balanced state with perfect oil and water levels. We recommend maintaining this resilient barrier with a simple routine of gentle cleansing, a daily sunscreen like Sunco 50, and a soft light moisturizer.";

    if (skinType === "dry") {
      typeName = "Dry & Dehydrated Skin";
      description =
        "Your skin is producing less natural oils than required to seal moisture. This lack of essential protective lipids leads to dry patches, flakiness, or dullness. Moistcom Lite is highly recommended to restore your soft, plump skin barrier and lock hydration perfectly in Nepal.";
    } else if (skinType === "oily") {
      typeName = "Oily & Breakout-Prone Skin";
      description =
        "Your face produces excess natural oils, leading to a shiny look and dilated pores that can easily get clogged by dust and sweat. Sunco 50 Silicone Gel is perfect here because it absorbs excess oil and blurs pores with zero white cast.";
    } else if (skinType === "combination") {
      typeName = "Combination Skin Type";
      description =
        "Your face has mixed areas: typically a shiny or oily T-zone (forehead, nose, chin) paired with dry or tight cheeks. Tailored, light moisturizers like Moistcom Lite balance both environments without feeling heavy.";
    }

    // Concerns mapping
    let concernName = "Support Firm & Bouncy Skin";
    if (concern === "aging")
      concernName = "Reducing Wrinkles & Boosting Firmer Skin";
    if (concern === "dullness")
      concernName = "Clearing Dark Spots & Getting a Brighter Glow";
    if (concern === "redness")
      concernName = "Calming Irritation, Redness & Sensitivity";
    if (concern === "congestion")
      concernName = "Clearing Blackheads, Clogged Pores & Acne Breakouts";

    // Tailor custom skincare product matches
    let matches: Product[] = [];
    if (skinType === "dry" || concern === "redness") {
      // Find cleanser, serum and moisturizer
      matches = products.filter(
        (p) => p.id === "prod-4" || p.id === "prod-1" || p.id === "prod-2",
      );
    } else if (skinType === "oily" || concern === "congestion") {
      matches = products.filter(
        (p) => p.id === "prod-4" || p.id === "prod-3" || p.id === "prod-5",
      );
    } else {
      matches = products.slice(0, 3);
    }

    const routinesList = [
      "AM Step 1: Cleanse with a mild pH-balanced skin cleanser",
      `AM Step 2: Massage 4 drops of ${matches[0]?.name || "RENEW NIACINAMIDE SERUM"} onto damp skin`,
      `AM Step 3: Seal hydration with ${matches[1]?.name || "THE GOOD MOISTURISER"}`,
      "PM Step 1: Double cellular cleanse to wash off pollutants & sebum",
      `PM Step 2: Repair skin overnight using ${matches[2]?.name || "MOISTCOM LITE Skin lightning Moisturiser"}`,
    ];

    setTimeout(() => {
      setReportData({
        typeKey: skinType,
        typeName,
        concernKey: concern,
        concernName,
        description,
        routines: routinesList,
        recomProducts: matches,
      });

      // Save submission onto the global state so admin sees it!
      const recIds = matches.map((m) => m.id);
      onSubmitRecord(
        userInfo.name,
        userInfo.email,
        userAnswers,
        typeName,
        recIds,
      );

      setDiagnosing(false);
      setCollectingInfo(false);
      setShowResult(true);
    }, 1500);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email) return;
    calculateSkinDiagnosis();
  };

  const handleReset = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setUserInfo({ name: "", email: "" });
    setCollectingInfo(false);
    setShowResult(false);
    setReportData(null);
  };

  return (
    <div
      id="ai-skin-analysis-view"
      className="bg-[#fafaf9] text-[#1c1c1a] min-h-screen"
    >
      {/* Elevated Header Panel */}
      <section
        className="relative py-28 bg-brand-dark text-center overflow-hidden"
        id="analysis-header"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=1600"
            alt="Hydrating water and scientific patterns"
            className="w-full h-full object-cover opacity-35 scale-102 filter blur-[0.5px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/75 to-brand-dark/40"></div>

          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[110px] mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] text-brand-gold uppercase bg-white/10 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4 font-bold backdrop-blur-md">
            FREE ONLINE SKIN QUIZ • NEPAL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-5">
            Which Skin Type Do I Have? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-pink-dark to-brand-chalk italic font-light">
              Free Skin Test
            </span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-stone-300 max-w-xl mx-auto tracking-wide uppercase mb-2">
            Find your skin type, clear up key goals, and get custom
            dermatologist product recommendations
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink-dark to-transparent mx-auto mt-6"></div>
        </div>
      </section>

      {/* Main Interactive Interactive container */}
      <section
        className="py-20 max-w-4xl mx-auto px-4"
        id="analysis-interaction-space"
      >
        <AnimatePresence mode="wait">
          {/* Phase A: Multi-step Questionnaire */}
          {!collectingInfo && !showResult && (
            <motion.div
              key="questionnaire"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-3xl border border-stone-200/60 p-8 sm:p-12 shadow-sm"
              id="analysis-box-card"
            >
              {/* Progress and indicators */}
              <div
                className="flex items-center justify-between mb-8"
                id="analysis-meta"
              >
                <span className="font-sans text-[10px] tracking-widest text-brand-dark uppercase font-bold">
                  Diagnostic Progress
                </span>
                <span className="font-mono text-xs text-stone-400">
                  Step {currentStep + 1} of {questions.length}
                </span>
              </div>

              {/* Graphical Progress Bar */}
              <div
                className="w-full h-1 bg-stone-100 rounded-full overflow-hidden mb-12"
                id="progressbar-track"
              >
                <div
                  className="h-full bg-gradient-to-r from-brand-dark to-brand-gold transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                  id="progressbar-fill"
                ></div>
              </div>

              {/* Question Text */}
              <div className="mb-10 text-left" id="question-text-zone">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5a880] mb-2 block font-bold">
                  TOPIC:{" "}
                  {questions[currentStep]?.category === "skintype"
                    ? "Skin Type Guide"
                    : questions[currentStep]?.category === "concern"
                      ? "Skincare Goals"
                      : questions[currentStep]?.category === "sensitivity"
                        ? "Skin Sensitivity Check"
                        : questions[currentStep]?.category === "age"
                          ? "Your Age Group"
                          : "My Daily Routine & Environment"}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brand-dark tracking-tight leading-snug font-bold">
                  {questions[currentStep]?.text}
                </h2>
              </div>

              {/* Options list */}
              <div className="space-y-4" id="question-options">
                {questions[currentStep]?.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      handleOptionSelect(questions[currentStep].id, opt.value)
                    }
                    id={`opt-${opt.value}`}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex justify-between items-center cursor-pointer ${
                      userAnswers[questions[currentStep].id] === opt.value
                        ? "border-brand-dark bg-brand-dark/5 text-[#c5a880]"
                        : "border-stone-200/60 bg-[#ffffff] hover:bg-[#fafaf9]"
                    }`}
                  >
                    <div>
                      <span className="font-serif text-sm sm:text-base text-brand-dark block font-bold">
                        {opt.text}
                      </span>
                      {opt.description && (
                        <p className="font-sans text-[11px] text-stone-500 mt-1 font-light italic">
                          {opt.description}
                        </p>
                      )}
                    </div>
                    {userAnswers[questions[currentStep].id] === opt.value && (
                      <CheckCircle className="w-5 h-5 text-[#c5a880] flex-shrink-0 ml-4 animate-scale-up" />
                    )}
                  </button>
                ))}
              </div>

              {/* Controls footer */}
              {currentStep > 0 && (
                <div className="mt-10 pt-6 border-t border-stone-100 text-left">
                  <button
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    id="back-step-btn"
                    className="inline-flex items-center space-x-2 text-xs text-stone-400 hover:text-brand-dark transition-colors uppercase tracking-widest font-bold cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to previous question</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Phase B: Contact details registration before showing report */}
          {collectingInfo && (
            <motion.div
              key="info"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl border border-stone-200/60 p-8 sm:p-12 shadow-sm text-center"
              id="analysis-info-register"
            >
              <div className="w-16 h-16 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark mx-auto mb-6">
                <FileText className="w-8 h-8 text-brand-gold" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-brand-dark mb-2 font-bold select-none">
                Get Your Free Skin Report
              </h2>
              <p className="font-sans text-stone-500 text-xs sm:text-sm max-w-md mx-auto mb-8 font-light">
                Please enter your name and email to view your skin type, custom
                goals, and curated product recommendations instantly!
              </p>

              <form
                onSubmit={handleInfoSubmit}
                className="max-w-md mx-auto text-left space-y-5"
                id="analysis-reg-form"
              >
                <div className="flex flex-col">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-brand-dark/60 mb-1.5 font-bold">
                    My Full Name
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Enter your name here"
                    className="bg-brand-chalk border border-stone-200/85 rounded-xl p-3 text-xs font-sans focus:outline-none focus:border-brand-dark"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-brand-dark/60 mb-1.5 font-bold">
                    My Email Address
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="Enter your email address here"
                    className="bg-brand-chalk border border-stone-200/85 rounded-xl p-3 text-xs font-sans focus:outline-none focus:border-brand-dark"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={diagnosing}
                  className="w-full py-4 bg-brand-dark hover:bg-brand-dark-accent text-brand-chalk hover:text-brand-gold font-sans text-xs tracking-widest uppercase font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all transition-transform hover:scale-102 cursor-pointer"
                  id="clinical-recomp-trigger"
                >
                  <span>
                    {diagnosing
                      ? "ANALYZING YOUR PROFILE..."
                      : "SHOW MY SKIN TYPE & ROUTINE NOW"}
                  </span>
                </button>
              </form>
            </motion.div>
          )}

          {/* Phase C: Pristine Diagnostic Result Report */}
          {showResult && reportData && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
              id="analysis-result-report"
            >
              {/* Main Certificate Display Card */}
              <div
                className="bg-white rounded-3xl border border-brand-gold/30 p-8 sm:p-12 shadow-md relative overflow-hidden text-left"
                id="report-sheet"
              >
                {/* Visual ambient gold light */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[90px] -z-10"></div>

                {/* Header Sheet layout */}
                <div
                  className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-stone-200/60 pb-8 mb-8"
                  id="report-sheet-header"
                >
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.4em] text-brand-dark uppercase block mb-1 font-bold">
                      THE SKIN PROFESSIONALS NEPAL • ONLINE REPORT
                    </span>
                    <h3 className="font-serif text-3xl text-brand-dark font-bold uppercase tracking-tight">
                      YOUR SKIN REPORT
                    </h3>
                  </div>
                  <div className="text-left sm:text-right" id="patient-details">
                    <span className="font-sans text-[9px] text-stone-400 block uppercase tracking-widest font-bold">
                      FREE REPORT NUMBER
                    </span>
                    <span className="font-sans text-xs text-brand-dark font-mono block mb-1">
                      SKINPRO-{Math.floor(Math.random() * 900000 + 100000)}
                    </span>
                    <span className="font-sans text-[10px] text-stone-500 block font-sans">
                      Name: {userInfo.name}
                    </span>
                  </div>
                </div>

                {/* Grid details */}
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10"
                  id="report-sheet-body"
                >
                  {/* Left block parameters */}
                  <div className="md:col-span-8 space-y-6">
                    <div>
                      <span className="font-sans text-[9px] tracking-[0.3em] text-[#c5a880] uppercase block mb-1.5 font-bold">
                        MY SKIN CLASSIFICATION
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl text-brand-dark mb-3 font-extrabold uppercase">
                        {reportData.typeName}
                      </h4>
                      <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                        {reportData.description}
                      </p>
                    </div>

                    <div className="p-4 bg-[#fafaf9] rounded-xl border border-stone-100">
                      <span className="font-sans text-[9px] text-stone-400 uppercase tracking-widest block mb-1 font-bold">
                        IMMEDIATE SKINCARE FOCUS LEVEL
                      </span>
                      <p className="font-serif text-sm text-brand-dark font-bold">
                        {reportData.concernName}
                      </p>
                    </div>
                  </div>

                  {/* Right block metrics */}
                  <div
                    className="md:col-span-4 bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/10 space-y-4"
                    id="micro-telemetry"
                  >
                    <h5 className="font-serif text-xs text-brand-dark uppercase tracking-widest font-bold border-b border-brand-dark/10 pb-2">
                      Your Core Skin Stats
                    </h5>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-500 font-sans">
                        Sensitivity Level:
                      </span>
                      <span className="font-mono text-brand-dark tracking-wide uppercase font-bold">
                        {userAnswers["q-sensitivity"] === "highly"
                          ? "SENSITIVE SKIN"
                          : userAnswers["q-sensitivity"] === "moderately"
                            ? "SLIGHTLY SENSITIVE"
                            : "STABLE & STRONG"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-500 font-sans">
                        Age Bracket Stage:
                      </span>
                      <span className="font-mono text-brand-dark uppercase font-bold">
                        {userAnswers["q-age"] === "early"
                          ? "UNDER 25 YEARS"
                          : userAnswers["q-age"] === "mid"
                            ? "25 TO 45 YEARS"
                            : "OVER 45 YEARS"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-500 font-sans">
                        Main Stress Factor:
                      </span>
                      <span className="font-mono text-brand-dark uppercase font-bold">
                        {userAnswers["q-lifestyle"] === "city"
                          ? "CITY (POLLUTION)"
                          : userAnswers["q-lifestyle"] === "outdoor"
                            ? "OUTDOOR SUNLIGHT"
                            : "WORK STRESS / SCREEN"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skincare Routine Blueprint layout */}
                <div
                  className="border-t border-stone-200/60 pt-8 mb-10"
                  id="routine-blueprint"
                >
                  <h4 className="font-serif text-lg text-brand-dark mb-4 uppercase tracking-widest font-bold">
                    Your Personalized Daily Routine Guide
                  </h4>
                  <div className="space-y-3">
                    {reportData.routines.map((rt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start bg-[#fafaf9] border border-stone-250/20 p-3 rounded-xl sm:space-x-3 text-xs text-stone-600"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-dark/10 text-brand-dark flex items-center justify-center font-serif text-[10px] font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="font-sans leading-relaxed flex-grow">
                          {rt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended products shelf */}
                <div
                  className="border-t border-stone-200/60 pt-8"
                  id="recommended-products-shelf"
                >
                  <h4 className="font-serif text-lg text-[#001c26] mb-4 uppercase tracking-widest font-bold">
                    Our Recommended Products For You
                  </h4>
                  <p className="font-sans text-stone-500 text-xs mb-6 font-light">
                    We suggest these active formulations and custom
                    dermatologist-approved creams to target your answers
                    perfectly:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {reportData.recomProducts.map((p) => (
                      <div
                        key={p.id}
                        className="bg-[#fafaf9] rounded-xl border border-stone-200/50 p-4 flex flex-col justify-between hover:border-[#c5a880]/30 transition-all"
                      >
                        <div>
                          <div className="h-32 rounded-lg overflow-hidden mb-3 bg-stone-100">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400";
                              }}
                            />
                          </div>
                          <h5 className="font-serif text-xs px-1 text-brand-dark font-bold leading-tight">
                            {p.name}
                          </h5>
                          <span className="font-mono text-[9px] px-1 text-stone-400 uppercase block mt-1">
                            {p.category} • {p.price}
                          </span>
                        </div>

                        <div className="border-t border-stone-100/50 pt-2 mt-3 flex items-center justify-between text-[10px]">
                          <span className="font-mono text-brand-dark font-bold">
                            Clinical grade
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reset controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-brand-dark text-white hover:text-brand-gold text-xs font-sans tracking-widest uppercase font-bold rounded-xl flex items-center justify-center space-x-2 transition-all cursor-pointer shadow"
                  id="diagnose-again-btn"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Diagnose another skin profile</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
