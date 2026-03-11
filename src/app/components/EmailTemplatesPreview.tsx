// ─── Email Templates Preview Page ────────────────────────────────────────────

import { useState } from "react";
import { EmailConfirmation } from "./EmailConfirmation";
import { EmailPasswordReset } from "./EmailPasswordReset";

const C = {
  ink: "#0D0F14",
  navy: "#141928",
  cyan: "#06B6D4",
  muted: "#8892A4",
  white: "#FFFFFF",
};

function EmailLogoSymbol({ size = 48 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const pad = s * 0.24;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <rect width={s} height={s} rx={s * 0.2} fill={C.ink} />
      <line
        x1={pad} y1={pad} x2={s - pad} y2={s - pad}
        stroke={C.white} strokeWidth={s * 0.115} strokeLinecap="round"
      />
      <line
        x1={s - pad} y1={pad} x2={pad} y2={s - pad}
        stroke={C.white} strokeWidth={s * 0.115} strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={s * 0.072} fill={C.cyan} />
    </svg>
  );
}

export function EmailTemplatesPreview() {
  const [activeTemplate, setActiveTemplate] = useState<"confirmation" | "reset">("confirmation");

  return (
    <div style={{
      minHeight: "100vh",
      background: C.ink,
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        background: C.navy,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <EmailLogoSymbol size={32} />
          <div>
            <div style={{
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "-0.035em",
              color: C.white,
            }}>
              mesto<span style={{ color: C.cyan }}>X</span>
            </div>
            <div style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.38)",
              marginTop: 2,
            }}>
              Email Templates
            </div>
          </div>
        </div>

        {/* Template Selector */}
        <div style={{
          display: "flex",
          gap: 8,
          background: C.ink,
          padding: 4,
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          <button
            onClick={() => setActiveTemplate("confirmation")}
            style={{
              background: activeTemplate === "confirmation" ? C.cyan : "transparent",
              color: activeTemplate === "confirmation" ? C.ink : C.white,
              border: "none",
              padding: "8px 16px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Подтверждение email
          </button>
          <button
            onClick={() => setActiveTemplate("reset")}
            style={{
              background: activeTemplate === "reset" ? C.cyan : "transparent",
              color: activeTemplate === "reset" ? C.ink : C.white,
              border: "none",
              padding: "8px 16px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Восстановление пароля
          </button>
        </div>
      </div>

      {/* Email Preview */}
      <div style={{
        padding: "40px 20px",
      }}>
        {activeTemplate === "confirmation" && <EmailConfirmation />}
        {activeTemplate === "reset" && <EmailPasswordReset />}
      </div>

      {/* Info Panel */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: C.navy,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{
          fontSize: 11,
          color: C.muted,
        }}>
          Минималистичные email-шаблоны в стиле бренда mesto X
        </div>
        <div style={{
          fontSize: 10,
          fontFamily: "monospace",
          color: C.cyan,
          letterSpacing: "0.1em",
        }}>
          MESTOX.RU
        </div>
      </div>
    </div>
  );
}
