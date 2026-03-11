const C = {
  ink: "#0D0F14",
  cyan: "#06B6D4",
  white: "#FFFFFF",
};

function LogoSymbol({ size = 512 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const pad = s * 0.24;
  const strokeWidth = s * 0.115;
  const dotRadius = s * 0.072;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <rect width={s} height={s} rx={s * 0.2} fill={C.ink} />
      <line
        x1={pad} y1={pad} x2={s - pad} y2={s - pad}
        stroke={C.white} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      <line
        x1={s - pad} y1={pad} x2={pad} y2={s - pad}
        stroke={C.white} strokeWidth={strokeWidth} strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={dotRadius} fill={C.cyan} />
    </svg>
  );
}

export function LogoExport() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#ffffff",
      padding: 40,
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        <div style={{
          padding: 24,
          background: "#f5f5f5",
          borderRadius: 12,
          marginBottom: 48,
          fontSize: 14,
          color: "#333",
          lineHeight: 1.6,
        }}>
          <strong>Инструкция:</strong><br />
          Кликните правой кнопкой мыши на логотип → "Сохранить изображение как..." или сделайте скриншот нужного размера.
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 48,
        }}>
          {/* 512x512 */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}>
            <div style={{
              fontSize: 14,
              color: "#666",
              fontWeight: 600,
            }}>
              512 × 512 px
            </div>
            <LogoSymbol size={512} />
          </div>

          {/* 256x256 */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}>
            <div style={{
              fontSize: 14,
              color: "#666",
              fontWeight: 600,
            }}>
              256 × 256 px
            </div>
            <LogoSymbol size={256} />
          </div>

          {/* 128x128 */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}>
            <div style={{
              fontSize: 14,
              color: "#666",
              fontWeight: 600,
            }}>
              128 × 128 px
            </div>
            <LogoSymbol size={128} />
          </div>
        </div>

        {/* На темном фоне */}
        <div style={{
          marginTop: 48,
          background: C.ink,
          padding: 40,
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}>
          <div style={{
            fontSize: 14,
            color: "#fff",
            fontWeight: 600,
          }}>
            На темном фоне (512 × 512 px)
          </div>
          <LogoSymbol size={512} />
        </div>

        {/* Большой размер для печати */}
        <div style={{
          marginTop: 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}>
          <div style={{
            fontSize: 14,
            color: "#666",
            fontWeight: 600,
          }}>
            Высокое разрешение - 1024 × 1024 px
          </div>
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <LogoSymbol size={1024} />
          </div>
        </div>
      </div>
    </div>
  );
}
