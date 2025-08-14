import React, { useState } from "react";

type Quote = {
  id: number;
  customerName: string;
  customerEmail: string;
  company: string;
  features: number;
  bugs: number;
  text: string;
  tags: string[];
  date: string;
};

const quotes: Quote[] = [
  {
    id: 1,
    customerName: "Sacha Patzer",
    customerEmail: "sacha@notion.com",
    company: "Notion",
    features: 5,
    bugs: 10,
    text: "It would be incredibly helpful to have a real-time latency dashboard.",
    tags: ["Real-time latency in all dashboard"],
    date: "June, 2025",
  },
  {
    id: 2,
    customerName: "Daffi Galler",
    customerEmail: "daffi@airbnb.com",
    company: "Airbnb",
    features: 0,
    bugs: 1,
    text: "Exploring user feedback analysis to enhance feature prioritization.",
    tags: ["Rate-limit header discrepancy"],
    date: "June, 2025",
  },
];

export default function EnterprisePainPointsUI() {
  const [hoveredQuote, setHoveredQuote] = useState<Quote | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        padding: "30px 20px",
        gap: "30px",
      }}
    >
      {/* Big Gray Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // stack main and bottom inside
          justifyContent: "center",
          borderRadius: "15px",
          width: "80%",
          backgroundColor: "#e5e7eb",
          minHeight: "80vh",
          padding: "30px",
          boxSizing: "border-box",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          gap: "20px",
        }}
      >
        {/* Evy + Main Section */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
          }}
        >
          {/* Evy Sidebar */}
          <aside
            style={{
              width: "240px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "16px",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Evy
            </h2>
            {[
              "Search",
              "Ask Cycle",
              "Welcome",
              "My profile",
              "Workspace",
              "Feedback",
              "Requests",
              "Releases",
              "Customers",
              "Product areas",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f3f4f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {item}
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <main
            style={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "24px",
              overflow: "auto",
            }}
          >
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "8px",
              }}
            >
              Main pain points from enterprise customers
            </h1>

            {/* Tags */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              <span
                style={{
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  fontSize: "14px",
                  padding: "4px 8px",
                  borderRadius: "6px",
                }}
              >
                Enterprise
              </span>
              <span
                style={{
                  backgroundColor: "#e5e7eb",
                  color: "#374151",
                  fontSize: "14px",
                  padding: "4px 8px",
                  borderRadius: "6px",
                }}
              >
                June, 2025
              </span>
            </div>

            {/* Content Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {/* Quotes List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "16px",
                      position: "relative",
                    }}
                    onMouseEnter={() => setHoveredQuote(quote)}
                    onMouseLeave={() => setHoveredQuote(null)}
                  >
                    <p style={{ fontWeight: "500", marginBottom: "4px" }}>
                      {quote.customerName}
                    </p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>
                      {quote.customerEmail} · {quote.company}
                    </p>
                    <p style={{ marginTop: "8px", color: "#374151" }}>
                      {quote.text}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        marginTop: "8px",
                      }}
                    >
                      {quote.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: "#dcfce7",
                            color: "#166534",
                            fontSize: "12px",
                            padding: "2px 6px",
                            borderRadius: "6px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {hoveredQuote?.id === quote.id && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-80px",
                          left: "0",
                          backgroundColor: "#fff",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          padding: "10px",
                          width: "200px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          zIndex: 10,
                        }}
                      >
                        <p style={{ fontWeight: "500" }}>
                          {quote.customerName}
                        </p>
                        <p style={{ fontSize: "12px", color: "#6b7280" }}>
                          {quote.customerEmail} · {quote.company}
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#374151",
                            marginTop: "4px",
                          }}
                        >
                          {quote.features} features · {quote.bugs} bugs
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Details Panel */}
              <div
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <h2 style={{ fontWeight: "600", marginBottom: "8px" }}>
                  The main pain points include:
                </h2>
                <ol
                  style={{
                    paddingLeft: "20px",
                    color: "#374151",
                    fontSize: "14px",
                  }}
                >
                  <li style={{ marginBottom: "8px" }}>
                    <strong>Lack of visibility and monitoring tools</strong>
                    <p>
                      Enterprise teams need real-time dashboards, latency
                      tracking, and usage analytics to confidently deploy AI in
                      production.
                    </p>
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    <strong>Performance instability during peak hours</strong>
                    <p>
                      Latency spikes and unpredictable response times impact
                      real-time use cases and user experience.
                    </p>
                  </li>
                  <li>
                    <strong>Limited control and customization</strong>
                    <p>
                      Customers want more control over models (fine-tuning,
                      constraints) to adapt AI behavior to their specific
                      business needs.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </main>
        </div>

        {/* Bottom Section (Ask Cycle etc.) */}
        <div
  style={{
    display: "flex",
    justifyContent: "center", // space-around hata diya
    alignItems: "center",
    gap: "6px", // gap yahan se control karo
    width: "fit-content", // sirf content jitna width
    margin: "0 auto",
  }}
>
  {[
    "Ask Cycle",
    "Feedback",
    "Requests",
    "Releases",
    "Customers",
    "Product areas",
  ].map((item) => (
    <div
      key={item}
      style={{
        padding: "8px 12px",
        textAlign: "center",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f3f4f6"; // light gray
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; // soft shadow
        e.currentTarget.style.border = "none"; // no border
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.border = "none"; // no border
      }}
    >
      {item}
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
