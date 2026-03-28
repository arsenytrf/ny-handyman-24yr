"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, ArrowLeft, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";

type Step = "service" | "urgency" | "property" | "description" | "contact" | "done";

const serviceOptions = [
  "Demolition",
  "Carpentry",
  "Renovations / Additions",
  "Drywall & Plaster",
  "Painting / Power Washing",
  "Doors & Windows",
  "Deck Work",
  "Kitchen Work",
  "Water Heater",
  "Plumbing / Leak Repair",
  "Other",
];

const urgencyOptions = [
  "ASAP — need it done now",
  "This week",
  "This month",
  "Just getting quotes",
];

const propertyOptions = [
  "Single-family home",
  "Condo / Townhouse",
  "Apartment",
  "Rental property",
  "Commercial",
];

interface Message {
  from: "bot" | "user";
  text: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hey! What kind of work do you need done?" },
  ]);
  const [typing, setTyping] = useState(false);
  const [form, setForm] = useState({
    service: "",
    urgency: "",
    property: "",
    description: "",
    name: "",
    phone: "",
    email: "",
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const addBotMessage = (text: string, nextStep: Step) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text }]);
      setStep(nextStep);
    }, 350);
  };

  const handleSelect = (value: string) => {
    setMessages((prev) => [...prev, { from: "user", text: value }]);

    if (step === "service") {
      setForm((prev) => ({ ...prev, service: value }));
      addBotMessage("How soon do you need this done?", "urgency");
    } else if (step === "urgency") {
      setForm((prev) => ({ ...prev, urgency: value }));
      addBotMessage("What type of property is this for?", "property");
    } else if (step === "property") {
      setForm((prev) => ({ ...prev, property: value }));
      addBotMessage(
        "Tell me a bit more — what needs to be done?",
        "description"
      );
    }
  };

  const handleDescription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const desc = fd.get("desc") as string;
    if (!desc.trim()) return;
    setForm((prev) => ({ ...prev, description: desc }));
    setMessages((prev) => [...prev, { from: "user", text: desc }]);
    e.currentTarget.reset();
    addBotMessage(
      "Almost done — drop your name and phone so we can reach you.",
      "contact"
    );
  };

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const email = (fd.get("email") as string) || "";

    if (!name.trim() || !phone.trim()) return;

    const updatedForm = { ...form, name, phone, email };
    setForm(updatedForm);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: `${name} — ${phone}` },
    ]);

    // POST to formspree
    fetch(company.formAction, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "Chat Widget",
        ...updatedForm,
      }),
    }).catch(() => {});

    addBotMessage(
      `Got it! We'll reach out shortly. If it's urgent, call ${company.phone} directly.`,
      "done"
    );
  };

  const reset = () => {
    setStep("service");
    setMessages([
      { from: "bot", text: "Hey! What kind of work do you need done?" },
    ]);
    setForm({
      service: "",
      urgency: "",
      property: "",
      description: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const options =
    step === "service"
      ? serviceOptions
      : step === "urgency"
      ? urgencyOptions
      : step === "property"
      ? propertyOptions
      : null;

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 z-40 flex items-center gap-2 bg-white text-forest-800 px-5 py-3 rounded-xl shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300 group"
          >
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold">
              Hey, how can we help?
            </span>
            <MessageCircle className="w-4 h-4 text-forest-600 group-hover:text-forest-700 transition-colors duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:w-[360px] max-h-[520px] bg-white shadow-2xl border border-neutral-200 rounded-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-forest-800 text-white px-5 py-4 flex items-center justify-between rounded-t-xl">
              <div>
                <p className="font-heading font-bold text-sm">
                  NY Handyman
                </p>
                <p className="text-white/70 text-xs">Responds instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[380px]"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed rounded-xl ${
                      msg.from === "user"
                        ? "bg-forest-700 text-white"
                        : "bg-neutral-100 text-neutral-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-neutral-100 px-4 py-3 rounded-xl flex gap-1">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              )}

              {/* Option buttons */}
              {!typing && options && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className="text-xs px-3 py-2 border border-forest-300 text-forest-700 rounded-lg hover:bg-forest-50 transition-colors duration-300"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Description input */}
              {!typing && step === "description" && (
                <form onSubmit={handleDescription} className="flex gap-2 pt-1">
                  <input
                    name="desc"
                    placeholder="Describe the work needed..."
                    autoFocus
                    className="flex-1 text-sm px-3 py-2 border border-neutral-200 rounded-lg focus:border-forest-500 focus:outline-none transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="bg-forest-700 text-white p-2 rounded-lg hover:bg-forest-800 transition-colors duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* Contact form */}
              {!typing && step === "contact" && (
                <form onSubmit={handleContact} className="space-y-2 pt-1">
                  <input
                    name="name"
                    placeholder="Your name *"
                    required
                    className="w-full text-sm px-3 py-2 border border-neutral-200 rounded-lg focus:border-forest-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number *"
                    required
                    className="w-full text-sm px-3 py-2 border border-neutral-200 rounded-lg focus:border-forest-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email (optional)"
                    className="w-full text-sm px-3 py-2 border border-neutral-200 rounded-lg focus:border-forest-500 focus:outline-none transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    className="w-full bg-forest-700 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-forest-800 transition-colors duration-300"
                  >
                    Send My Info
                  </button>
                </form>
              )}

              {/* Done state */}
              {!typing && step === "done" && (
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setOpen(false)}
                    className="flex-1 text-xs px-3 py-2 border border-neutral-200 text-neutral-600 rounded-lg hover:bg-neutral-50 transition-colors duration-300"
                  >
                    Close
                  </button>
                  <button
                    onClick={reset}
                    className="flex-1 text-xs px-3 py-2 bg-forest-50 text-forest-700 border border-forest-200 rounded-lg hover:bg-forest-100 transition-colors duration-300 flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Start Over
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
