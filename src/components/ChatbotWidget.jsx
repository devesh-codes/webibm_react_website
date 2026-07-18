import React, { useState, useRef, useEffect } from "react";

// ------------------------------------------------------------------
// EDIT THIS ARRAY to change what the bot knows. That's the only part
// of this file you need to touch for new content.
// ------------------------------------------------------------------
const faqData = [
  {
    id: "pricing",
    label: "Pricing",
    keywords: ["price", "pricing", "cost", "plan", "plans", "how much", "fee"],
    answer:
      "We offer three plans: Starter (free), Pro ($12/mo), and Team ($9/user/mo). Pro and Team add priority support and integrations.",
    related: ["trial", "payment"],
  },
  {
    id: "trial",
    label: "Free trial",
    keywords: ["trial", "free trial", "try before", "demo"],
    answer:
      "Yes — every paid plan includes a 14-day free trial, no credit card required to start.",
    related: ["pricing", "cancel"],
  },
  {
    id: "payment",
    label: "Payment methods",
    keywords: ["payment", "pay", "credit card", "paypal", "invoice", "billing"],
    answer:
      "We accept all major credit cards, PayPal, and — for Team plans — invoicing via bank transfer.",
    related: ["pricing"],
  },
  {
    id: "cancel",
    label: "Cancel subscription",
    keywords: ["cancel", "unsubscribe", "stop billing", "end subscription"],
    answer:
      "Go to Account Settings → Billing → Cancel Plan. Access continues until the end of the billing period, no cancellation fees.",
    related: ["refund"],
  },
  {
    id: "refund",
    label: "Refunds",
    keywords: ["refund", "money back", "reimburse"],
    answer:
      "We offer a full refund within 30 days of purchase. Just contact support with your order details.",
    related: ["contact"],
  },
  {
    id: "getting-started",
    label: "Getting started",
    keywords: ["start", "getting started", "setup", "onboarding", "begin"],
    answer:
      "Getting started takes about 2 minutes: create an account, verify your email, then follow the setup wizard.",
    related: ["trial", "contact"],
  },
  {
    id: "contact",
    label: "Contact support",
    keywords: ["contact", "support", "help", "human", "email", "talk to someone"],
    answer:
      "Reach our support team at support@example.com, or through live chat in your dashboard (Mon–Fri, 9am–6pm).",
    related: [],
  },
];

const menuItemIds = ["pricing", "trial", "getting-started", "contact"];
const faqById = Object.fromEntries(faqData.map((item) => [item.id, item]));

const ACCENT = "#2f6f5e";
const ACCENT_SOFT = "#e7f1ee";

function findBestMatch(userText) {
  const text = userText.toLowerCase().trim();
  if (!text) return null;
  let best = null;
  let bestScore = 0;
  for (const item of faqData) {
    let score = 0;
    for (const kw of item.keywords) {
      if (text.includes(kw.toLowerCase())) score += kw.split(" ").length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore > 0 ? best : null;
}

let idCounter = 0;
const nextId = () => `m-${Date.now()}-${idCounter++}`;

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      pushBot([
        { type: "text", text: "Hi, I'm Aria 👋 Pick a question below or type your own." },
        { type: "quick", ids: menuItemIds },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  function pushBot(items) {
    setMessages((prev) => [...prev, ...items.map((i) => ({ id: nextId(), from: "bot", ...i }))]);
  }
  function pushUser(text) {
    setMessages((prev) => [...prev, { id: nextId(), from: "user", type: "text", text }]);
  }

  function answerWith(item) {
    const parts = [{ type: "text", text: item.answer }];
    if (item.related?.length) parts.push({ type: "quick", ids: item.related });
    setTimeout(() => pushBot(parts), 300);
  }

  function handleQuick(id) {
    const item = faqById[id];
    if (!item) return;
    pushUser(item.label);
    answerWith(item);
  }

  function handleSend(e) {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    pushUser(text);
    setInputValue("");
    const match = findBestMatch(text);
    if (match) {
      answerWith(match);
    } else {
      setTimeout(() => {
        pushBot([
          { type: "text", text: "I don't have an answer for that yet. Try one of these:" },
          { type: "quick", ids: menuItemIds },
        ]);
      }, 300);
    }
  }

  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 9999, fontFamily: "system-ui, sans-serif" }}>
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat support"
          style={{
            width: 340,
            maxWidth: "calc(100vw - 32px)",
            height: 460,
            maxHeight: "calc(100vh - 120px)",
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          <div style={{ background: ACCENT, color: "#fff", padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, flexShrink: 0 }}>
              A
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Aria</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Usually replies instantly</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{ background: "transparent", border: "none", color: "#fff", fontSize: 20, cursor: "pointer", padding: "2px 8px", borderRadius: 6 }}
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10, background: "#f5f6f8" }}>
            {messages.map((m) => {
              if (m.type === "text") {
                return (
                  <div key={m.id} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                    <div
                      style={{
                        maxWidth: "78%",
                        padding: "10px 14px",
                        borderRadius: 14,
                        fontSize: 14,
                        lineHeight: 1.45,
                        background: m.from === "user" ? ACCENT : "#fff",
                        color: m.from === "user" ? "#fff" : "#1f2937",
                        boxShadow: m.from === "bot" ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
                        borderBottomRightRadius: m.from === "user" ? 4 : 14,
                        borderBottomLeftRadius: m.from === "bot" ? 4 : 14,
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              }
              if (m.type === "quick") {
                return (
                  <div key={m.id} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {m.ids.map((id) => {
                      const item = faqById[id];
                      if (!item) return null;
                      return (
                        <button
                          key={id}
                          onClick={() => handleQuick(id)}
                          style={{
                            background: ACCENT_SOFT,
                            color: ACCENT,
                            border: "none",
                            padding: "7px 12px",
                            borderRadius: 999,
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: "pointer",
                          }}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                );
              }
              return null;
            })}
          </div>

          <form onSubmit={handleSend} style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid #ececef", background: "#fff" }}>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
              style={{ flex: 1, border: "1px solid #dfe1e6", borderRadius: 999, padding: "10px 16px", fontSize: 14, outline: "none" }}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send message"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                background: inputValue.trim() ? ACCENT : "#c9cdd3",
                color: "#fff",
                cursor: inputValue.trim() ? "pointer" : "not-allowed",
                flexShrink: 0,
              }}
            >
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "none",
          background: ACCENT,
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(47,111,94,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
        }}
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
}