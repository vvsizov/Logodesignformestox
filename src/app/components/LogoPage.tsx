import { useState } from "react";

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  ink: "#0D0F14",
  navy: "#141928",
  blue: "#2563EB",
  cyan: "#06B6D4",
  light: "#F0F4FF",
  muted: "#8892A4",
  white: "#FFFFFF",
  accent: "#3B82F6",
};

// ─── Core Logo Symbol ─────────────────────────────────────────────────────────
// Clean, minimal X in a rounded square. Bold strokes, single cyan center dot.
function LogoSymbol({
  size = 64,
  theme = "dark",
}: {
  size?: number;
  theme?: "dark" | "light" | "blue";
}) {
  const bg = theme === "dark" ? C.ink : theme === "blue" ? C.blue : C.white;
  const xStroke = theme === "dark" ? C.white : theme === "blue" ? C.white : C.ink;
  const dotColor = theme === "dark" ? C.cyan : theme === "blue" ? "rgba(255,255,255,0.7)" : C.blue;

  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const pad = s * 0.24;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      {/* Background */}
      <rect width={s} height={s} rx={s * 0.2} fill={bg} />

      {/* X — two clean strokes */}
      <line
        x1={pad} y1={pad} x2={s - pad} y2={s - pad}
        stroke={xStroke} strokeWidth={s * 0.115} strokeLinecap="round"
      />
      <line
        x1={s - pad} y1={pad} x2={pad} y2={s - pad}
        stroke={xStroke} strokeWidth={s * 0.115} strokeLinecap="round"
      />

      {/* Center dot — the single hub hint */}
      <circle cx={cx} cy={cy} r={s * 0.072} fill={dotColor} />
    </svg>
  );
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────
function LogoWordmark({
  size = "lg",
  theme = "dark",
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  theme?: "dark" | "light" | "blue";
}) {
  const sizeMap = {
    xs: { sym: 24, title: 15, sub: 8, gap: 8 },
    sm: { sym: 32, title: 19, sub: 9, gap: 10 },
    md: { sym: 44, title: 26, sub: 10, gap: 12 },
    lg: { sym: 60, title: 36, sub: 12, gap: 16 },
    xl: { sym: 84, title: 50, sub: 14, gap: 20 },
  };
  const { sym, title, sub, gap } = sizeMap[size];

  const mainColor = theme === "light" ? C.ink : C.white;
  const subColor = theme === "light" ? "rgba(13,15,20,0.38)" : "rgba(255,255,255,0.38)";

  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <LogoSymbol size={sym} theme={theme === "light" ? "light" : "dark"} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: title,
          letterSpacing: "-0.035em",
          color: mainColor,
          lineHeight: 1,
        }}>
          mesto<span style={{ color: C.cyan }}>X</span>
        </div>
        <div style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: sub,
          letterSpacing: "0.01em",
          color: subColor,
          marginTop: sym * 0.09,
          lineHeight: 1,
        }}>
          Рабочее место экспедитора
        </div>
      </div>
    </div>
  );
}

// ─── Color Chip ───────────────────────────────────────────────────────────────
function ColorChip({ hex, name, role, textDark }: { hex: string; name: string; role: string; textDark?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="group overflow-hidden rounded-xl text-left transition-transform hover:scale-105 active:scale-95"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div style={{ height: 72, background: hex }} />
      <div style={{ background: "#181D2A", padding: "10px 14px" }}>
        <div style={{ fontSize: 10, fontFamily: "system-ui", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted }}>{role}</div>
        <div style={{ fontSize: 13, fontFamily: "system-ui", fontWeight: 700, color: C.white, marginTop: 2 }}>{name}</div>
        <div style={{ fontSize: 11, fontFamily: "monospace", color: C.muted, marginTop: 1 }}>{copied ? "Скопировано ✓" : hex}</div>
      </div>
    </button>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontFamily: "system-ui", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.muted, marginBottom: 16 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", ...style }}>
      {children}
    </div>
  );
}

// ─── TMS Badge ──────────────────────────────────────────────────────────────
function TmsBadge({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: "system-ui", fontWeight: 600, fontSize: 11,
      letterSpacing: "0.04em", color: C.cyan,
      background: "rgba(6,182,212,0.1)",
      border: "1px solid rgba(6,182,212,0.25)",
      borderRadius: 6, padding: "4px 10px",
    }}>
      {label}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function LogoPage() {
  return (
    <div style={{ minHeight: "100vh", background: C.ink, fontFamily: "'Inter', system-ui, sans-serif", color: C.white }}>

      {/* ── HERO ── */}
      <div style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%), ${C.ink}`,
        padding: "96px 24px 80px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 32,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <LogoWordmark size="xl" theme="dark" />

        <p style={{ fontSize: 16, color: C.muted, textAlign: "center", maxWidth: 420, lineHeight: 1.6, margin: 0 }}>
          Единое рабочее пространство, где экспедитор управляет всеми TMS-системами из одного окна
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {["1С-Логистика", "CargoPoint", "Bitrix TMS", "Axelot", "Mantis", "WMS Pro"].map(t => (
            <TmsBadge key={t} label={t} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          <a
            href="http://5.42.112.231/login"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.blue, color: C.white,
              fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: 15,
              padding: "14px 32px", borderRadius: 12,
              textDecoration: "none",
              transition: "opacity 0.2s",
              border: "none", cursor: "pointer",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Войти
          </a>
          <a
            href="http://5.42.112.231/login"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(6,182,212,0.12)", color: C.cyan,
              fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, fontSize: 15,
              padding: "14px 32px", borderRadius: 12,
              textDecoration: "none",
              border: `1px solid rgba(6,182,212,0.3)`, cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Подключиться
          </a>
        </div>

        {/* Telegram Bot */}
        <a
          href="https://t.me/mestox_bot"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: C.muted, fontSize: 13, textDecoration: "none",
            fontFamily: "'Inter', system-ui, sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.cyan)}
          onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          @mestox_bot
        </a>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "72px 24px", display: "flex", flexDirection: "column", gap: 64 }}>

        {/* Концепция символа */}
        <Section label="Концепция символа">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Big symbol explainer */}
            <Card style={{ background: "#141928", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
              <LogoSymbol size={140} theme="dark" />
              <div style={{ fontSize: 12, color: C.muted, textAlign: "center", lineHeight: 1.7, maxWidth: 220 }}>
                X — единый хаб экспедитора.<br />
                Два штриха — два потока: входящий и исходящий.<br />
                Центральная точка — место контроля.
              </div>
            </Card>

            {/* Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "Хаб, не место на карте", desc: "X — это перекрёсток, точка схождения. Все системы сходятся здесь." },
                { title: "Минимализм = мощь", desc: "Два штриха. Никаких деталей. Логотип читается с любого расстояния и в любом размере." },
                { title: "Центральная точка", desc: "Циановая точка — единственный акцент. Экспедитор в центре процесса, не в хаосе систем." },
                { title: "X как имя инструмента", desc: "Не просто буква — X читается как «среда», «платформа», рабочее пространство." },
              ].map(item => (
                <div key={item.title} style={{
                  background: "#141928", borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "14px 16px",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Варианты */}
        <Section label="Варианты логотипа">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Dark — primary */}
            <Card>
              <div style={{ background: C.ink, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 32px", position: "relative" }}>
                <div style={{ position: "absolute", top: 10, left: 14, fontSize: 10, color: C.muted, letterSpacing: "0.1em" }}>PRIMARY · DARK</div>
                <LogoWordmark size="lg" theme="dark" />
              </div>
            </Card>

            {/* Navy */}
            <Card>
              <div style={{ background: "#141928", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 32px", position: "relative" }}>
                <div style={{ position: "absolute", top: 10, left: 14, fontSize: 10, color: C.muted, letterSpacing: "0.1em" }}>NAVY · SECONDARY</div>
                <LogoWordmark size="lg" theme="dark" />
              </div>
            </Card>

            {/* Blue */}
            <Card>
              <div style={{ background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 32px", position: "relative" }}>
                <div style={{ position: "absolute", top: 10, left: 14, fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>BLUE · ACCENT</div>
                <LogoWordmark size="lg" theme="dark" />
              </div>
            </Card>

            {/* Light */}
            <Card>
              <div style={{ background: "#F0F4FF", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 32px", position: "relative" }}>
                <div style={{ position: "absolute", top: 10, left: 14, fontSize: 10, color: "#8892A4", letterSpacing: "0.1em" }}>LIGHT · REVERSED</div>
                <LogoWordmark size="lg" theme="light" />
              </div>
            </Card>
          </div>
        </Section>

        {/* Иконка / Фавикон */}
        <Section label="Иконка / Фавикон">
          <Card style={{ background: "#141928", padding: 32 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-end" }}>
              {[96, 72, 56, 40, 32, 24, 16].map(s => (
                <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <LogoSymbol size={s} theme="dark" />
                  <span style={{ fontSize: 10, fontFamily: "monospace", color: C.muted }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              {(["dark", "blue", "light"] as const).map(t => (
                <div key={t} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    background: t === "light" ? "#F0F4FF" : t === "blue" ? C.blue : C.navy,
                    borderRadius: 14, padding: 6,
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    <LogoSymbol size={48} theme={t} />
                  </div>
                  <span style={{ fontSize: 10, fontFamily: "monospace", color: C.muted }}>{t}</span>
                </div>
              ))}
            </div>
          </Card>
        </Section>

        {/* Масштаб */}
        <Section label="Масштаб">
          <Card style={{ background: "#141928", padding: "28px 36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {(["xl", "lg", "md", "sm", "xs"] as const).map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ width: 24, fontSize: 11, fontFamily: "monospace", color: C.muted }}>{s}</span>
                  <LogoWordmark size={s} theme="dark" />
                </div>
              ))}
            </div>
          </Card>
        </Section>

        {/* Цвета */}
        <Section label="Цветовая палитра">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
            <ColorChip hex="#0D0F14" name="Чернила" role="Primary BG" />
            <ColorChip hex="#141928" name="Тёмно-синий" role="Surface" />
            <ColorChip hex="#2563EB" name="Синий" role="Brand Blue" />
            <ColorChip hex="#06B6D4" name="Циан" role="Accent / X" />
            <ColorChip hex="#F0F4FF" name="Ледяной" role="Light BG" />
            <ColorChip hex="#8892A4" name="Туман" role="Muted Text" />
          </div>
        </Section>

        {/* Типографика */}
        <Section label="Типографика">
          <Card style={{ background: "#141928", padding: "32px 36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Логотип — Inter Bold 700</div>
                <div style={{ fontFamily: "system-ui", fontWeight: 700, fontSize: 42, letterSpacing: "-0.035em", color: C.white, lineHeight: 1 }}>
                  mesto<span style={{ color: C.cyan }}>X</span>
                </div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
              <div>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Заголовки — Inter SemiBold 600</div>
                <div style={{ fontFamily: "system-ui", fontWeight: 600, fontSize: 22, color: C.white, lineHeight: 1.3 }}>
                  Все TMS в одном окне
                </div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
              <div>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Текст интерфейса — Inter Regular 400</div>
                <div style={{ fontFamily: "system-ui", fontWeight: 400, fontSize: 14, color: C.muted, lineHeight: 1.6 }}>
                  Экспедитор работает в единой среде, не переключаясь между системами.
                </div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
              <div>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Метки / домен — Mono / All-caps</div>
                <div style={{ fontFamily: "monospace", fontWeight: 500, fontSize: 12, color: C.cyan, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  MESTOX.RU
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Применение */}
        <Section label="Применение в интерфейсе">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

            {/* App header */}
            <Card style={{ background: "#141928" }}>
              <div style={{ padding: "0 0 0 0" }}>
                <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", padding: "12px 16px 0", marginBottom: 12 }}>Шапка приложения</div>
                <div style={{ background: C.ink, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
                  <LogoWordmark size="xs" theme="dark" />
                  <div style={{ display: "flex", gap: 16 }}>
                    {["Заявки", "Маршруты", "TMS", "Отчёты"].map(i => (
                      <span key={i} style={{ fontSize: 11, color: C.muted }}>{i}</span>
                    ))}
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.blue, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>А</div>
                </div>
                <div style={{ background: "#0D0F14", height: 64, display: "flex", alignItems: "center", padding: "0 16px", gap: 8 }}>
                  <div style={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.06)", width: 120 }} />
                  <div style={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.04)", width: 80 }} />
                </div>
              </div>
            </Card>

            {/* Favicon / Tab */}
            <Card style={{ background: "#141928", padding: 20 }}>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Вкладка браузера</div>
              <div style={{
                background: "#1E2330", borderRadius: 8, padding: "8px 12px",
                display: "flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.08)",
                maxWidth: 220,
              }}>
                <LogoSymbol size={16} theme="dark" />
                <span style={{ fontSize: 12, color: C.white, fontFamily: "system-ui" }}>mestoX — Заявки</span>
              </div>
              <div style={{ marginTop: 20, fontSize: 10, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Push-уведомление</div>
              <div style={{
                background: "#1E2330", borderRadius: 10, padding: "10px 14px",
                display: "flex", gap: 10, alignItems: "flex-start",
                border: "1px solid rgba(255,255,255,0.08)",
                maxWidth: 280,
              }}>
                <LogoSymbol size={32} theme="dark" />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.white, fontFamily: "system-ui" }}>mestoX</div>
                  <div style={{ fontSize: 11, color: C.muted, fontFamily: "system-ui", marginTop: 2 }}>Заявка №4821 изменила статус в CargoPoint</div>
                </div>
              </div>
            </Card>

            {/* TMS Connect card */}
            <Card style={{ background: "#141928", padding: 20, gridColumn: "span 2" }}>
              <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Карточка подключения TMS</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { name: "1С-Логистика", status: "подключено", dot: "#22C55E" },
                  { name: "CargoPoint", status: "подключено", dot: "#22C55E" },
                  { name: "Axelot WMS", status: "синхронизация", dot: C.cyan },
                  { name: "Bitrix TMS", status: "ожидание", dot: "#F59E0B" },
                  { name: "Mantis", status: "не подключено", dot: "#8892A4" },
                ].map(item => (
                  <div key={item.name} style={{
                    background: C.ink, borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "10px 14px", minWidth: 140,
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.white, fontFamily: "system-ui", marginBottom: 6 }}>{item.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.dot }} />
                      <span style={{ fontSize: 11, color: item.dot, fontFamily: "system-ui" }}>{item.status}</span>
                    </div>
                  </div>
                ))}
                <div style={{
                  background: "transparent", borderRadius: 10,
                  border: `1px dashed rgba(37,99,235,0.4)`,
                  padding: "10px 14px", minWidth: 140,
                  display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                }}>
                  <span style={{ fontSize: 18, color: C.blue, lineHeight: 1 }}>+</span>
                  <span style={{ fontSize: 12, color: C.blue, fontFamily: "system-ui" }}>Добавить TMS</span>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Правила */}
        <Section label="Правила использования">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Card style={{ background: "#141928", padding: 24 }}>
              <div style={{ fontSize: 12, color: "#22C55E", letterSpacing: "0.1em", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span>✓</span> <span>Правильно</span>
              </div>
              {["Тёмный или синий фон — основная среда", "X всегда в цвете #06B6D4 (циан)", "Сохраняйте соотношение символ : текст", "Минимальный размер символа — 16px", "Центральная точка — обязательная часть символа"].map(t => (
                <div key={t} style={{ fontSize: 12, color: C.muted, display: "flex", gap: 8, marginBottom: 8, lineHeight: 1.5 }}>
                  <span style={{ color: "#22C55E", flexShrink: 0 }}>✓</span>{t}
                </div>
              ))}
            </Card>
            <Card style={{ background: "#141928", padding: 24 }}>
              <div style={{ fontSize: 12, color: "#EF4444", letterSpacing: "0.1em", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span>✕</span> <span>Неправильно</span>
              </div>
              {["Не меняйте цвет X на произвольный", "Не убирайте центральную точку", "Не размещайте на пёстрых фонах", "Не вращайте и не искажайте символ", "Не используйте без защитного пространства"].map(t => (
                <div key={t} style={{ fontSize: 12, color: C.muted, display: "flex", gap: 8, marginBottom: 8, lineHeight: 1.5 }}>
                  <span style={{ color: "#EF4444", flexShrink: 0 }}>✕</span>{t}
                </div>
              ))}
            </Card>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 48px",
        background: "#141928",
      }}>
        <LogoWordmark size="xs" theme="dark" />
        <span style={{ fontSize: 12, fontFamily: "monospace", color: C.muted, letterSpacing: "0.1em" }}>
          MESTOX.RU · BRANDBOOK v1.0 · 2026
        </span>
      </div>
    </div>
  );
}