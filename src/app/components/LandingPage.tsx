// ─── Landing Page для mesto X ────────────────────────────────────────────────

import { useState } from "react";

const C = {
  ink: "#0D0F14",
  navy: "#141928",
  blue: "#2563EB",
  cyan: "#06B6D4",
  light: "#F0F4FF",
  muted: "#8892A4",
  white: "#FFFFFF",
};

// Логотип символ X
function LogoSymbol({ size = 64 }: { size?: number }) {
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

// Wordmark
function LogoWordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: { sym: 32, title: 19, sub: 9, gap: 10 },
    md: { sym: 44, title: 26, sub: 10, gap: 12 },
    lg: { sym: 60, title: 36, sub: 12, gap: 16 },
  };
  const { sym, title, sub, gap } = sizeMap[size];

  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <LogoSymbol size={sym} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: title,
          letterSpacing: "-0.035em",
          color: C.white,
          lineHeight: 1,
        }}>
          mesto<span style={{ color: C.cyan }}>X</span>
        </div>
        <div style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: sub,
          letterSpacing: "0.01em",
          color: "rgba(255,255,255,0.38)",
          marginTop: sym * 0.09,
          lineHeight: 1,
        }}>
          Рабочее место экспедитора
        </div>
      </div>
    </div>
  );
}

// TMS Badge
function TmsBadge({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: "system-ui",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.04em",
      color: C.cyan,
      background: "rgba(6,182,212,0.1)",
      border: "1px solid rgba(6,182,212,0.25)",
      borderRadius: 6,
      padding: "6px 12px",
      whiteSpace: "nowrap",
    }}>
      {label}
    </div>
  );
}

// Feature Card
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div style={{
      background: C.navy,
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 16,
      padding: "28px 24px",
      transition: "all 0.3s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
    >
      <div style={{
        fontSize: 32,
        marginBottom: 16,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: 18,
        fontWeight: 600,
        color: C.white,
        marginBottom: 8,
        lineHeight: 1.3,
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: 14,
        color: C.muted,
        lineHeight: 1.6,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

export function LandingPage() {
  const [email, setEmail] = useState("");

  const tmsSystems = [
    "Novardis", "Умная логистика", "Trucker", "Axelot", "Редсофт",
    "1СКСУ", "IT Vectura", "Адвантум", "ATrucks", "Vezubr",
    "1С-Логистика", "CargoPoint", "Bitrix TMS", "Mantis", "WMS Pro"
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: C.ink,
      fontFamily: "'Inter', system-ui, sans-serif",
      color: C.white,
    }}>
      {/* Header / Navigation */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(13,15,20,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <LogoWordmark size="sm" />
          
          <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <a href="#features" style={{ fontSize: 14, color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
               onMouseEnter={(e) => e.currentTarget.style.color = C.white}
               onMouseLeave={(e) => e.currentTarget.style.color = C.muted}>
              Возможности
            </a>
            <a href="#tms" style={{ fontSize: 14, color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
               onMouseEnter={(e) => e.currentTarget.style.color = C.white}
               onMouseLeave={(e) => e.currentTarget.style.color = C.muted}>
              TMS
            </a>
            <a href="#pricing" style={{ fontSize: 14, color: C.muted, textDecoration: "none", transition: "color 0.2s" }}
               onMouseEnter={(e) => e.currentTarget.style.color = C.white}
               onMouseLeave={(e) => e.currentTarget.style.color = C.muted}>
              Тарифы
            </a>
            <button style={{
              background: C.cyan,
              color: C.ink,
              border: "none",
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Попробовать
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%), ${C.ink}`,
        padding: "120px 24px 100px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.25)",
            borderRadius: 100,
            padding: "6px 16px 6px 6px",
            marginBottom: 32,
          }}>
            <div style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: C.cyan,
              boxShadow: `0 0 12px ${C.cyan}`,
            }} />
            <span style={{ fontSize: 12, color: C.cyan, fontWeight: 600, letterSpacing: "0.05em" }}>
              B2B SAAS ДЛЯ ЭКСПЕДИТОРОВ
            </span>
          </div>

          <h1 style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 24,
            background: `linear-gradient(180deg, ${C.white} 0%, rgba(255,255,255,0.7) 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Все TMS-системы<br />в одном окне
          </h1>

          <p style={{
            fontSize: 18,
            color: C.muted,
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 40px",
          }}>
            Единое рабочее пространство, где экспедитор управляет всеми транспортными системами без переключения между вкладками
          </p>

          {/* Email Sign-up */}
          <div style={{
            display: "flex",
            gap: 12,
            maxWidth: 480,
            margin: "0 auto 48px",
          }}>
            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: C.navy,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "14px 20px",
                fontSize: 15,
                color: C.white,
                outline: "none",
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = C.cyan}
              onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            <button style={{
              background: C.cyan,
              color: C.ink,
              border: "none",
              padding: "14px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#08d4f0";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.cyan;
              e.currentTarget.style.transform = "scale(1)";
            }}
            >
              Начать бесплатно
            </button>
          </div>

          {/* TMS Badges */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            maxWidth: 700,
            margin: "0 auto",
          }}>
            {tmsSystems.slice(0, 8).map(tms => (
              <TmsBadge key={tms} label={tms} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: "100px 24px",
        background: C.ink,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}>
              X как центр управления
            </h2>
            <p style={{
              fontSize: 16,
              color: C.muted,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Не переключайтесь между системами. Работайте в едином пространстве.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}>
            <FeatureCard
              icon="🎯"
              title="Единый интерфейс"
              description="Все заявки, маршруты и документы из разных TMS в одном окне. Больше никаких вкладок."
            />
            <FeatureCard
              icon="🔄"
              title="Синхронизация в реальном времени"
              description="Изменения автоматически отражаются во всех подключенных системах. Данные всегда актуальны."
            />
            <FeatureCard
              icon="⚡"
              title="Быстрое подключение"
              description="Интеграция с TMS занимает минуты. API-ключи, OAuth или логин/пароль — выбирайте удобный способ."
            />
            <FeatureCard
              icon="📊"
              title="Сводная аналитика"
              description="Отчёты и метрики по всем системам сразу. Видьте полную картину без экспорта данных."
            />
            <FeatureCard
              icon="🔔"
              title="Умные уведомления"
              description="Настройте оповещения о важных событиях из любой TMS. Не пропустите критичные изменения."
            />
            <FeatureCard
              icon="🔒"
              title="Безопасность"
              description="Все данные защищены. Доступы к TMS хранятся в зашифрованном виде. Соответствие GDPR."
            />
          </div>
        </div>
      </section>

      {/* TMS List Section */}
      <section id="tms" style={{
        padding: "100px 24px",
        background: C.navy,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}>
              Поддерживаемые TMS
            </h2>
            <p style={{
              fontSize: 16,
              color: C.muted,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Подключайте любые системы управления транспортом. Список постоянно пополняется.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}>
            {tmsSystems.map(tms => (
              <div key={tms} style={{
                background: C.ink,
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)";
                e.currentTarget.style.background = "rgba(6,182,212,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = C.ink;
              }}
              >
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22C55E",
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: C.white,
                }}>
                  {tms}
                </span>
              </div>
            ))}
            
            {/* Add more TMS placeholder */}
            <div style={{
              background: "transparent",
              border: "1px dashed rgba(37,99,235,0.4)",
              borderRadius: 12,
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.cyan;
              e.currentTarget.style.background = "rgba(6,182,212,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
              e.currentTarget.style.background = "transparent";
            }}
            >
              <span style={{ fontSize: 18, color: C.cyan }}>+</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.cyan }}>
                Ваша TMS
              </span>
            </div>
          </div>

          <div style={{
            marginTop: 48,
            textAlign: "center",
            padding: 24,
            background: "rgba(37,99,235,0.08)",
            border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: 12,
          }}>
            <p style={{
              fontSize: 14,
              color: C.muted,
              margin: 0,
            }}>
              Не нашли вашу TMS? Напишите нам на{" "}
              <a href="mailto:support@mestox.ru" style={{ color: C.cyan, textDecoration: "none" }}>
                support@mestox.ru
              </a>
              {" "}— добавим интеграцию в приоритетном порядке
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: "100px 24px",
        background: C.ink,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}>
              Прозрачная модель оплаты
            </h2>
            <p style={{
              fontSize: 16,
              color: C.muted,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}>
              Платформа бесплатная. Платите только за то, что используете.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}>
            {/* Free Platform */}
            <div style={{
              background: C.navy,
              border: "2px solid rgba(6,182,212,0.3)",
              borderRadius: 20,
              padding: 32,
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: -12,
                left: 24,
                background: C.cyan,
                color: C.ink,
                padding: "4px 12px",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}>
                БЕСПЛАТНО
              </div>

              <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 8,
                marginTop: 12,
              }}>
                Платформа mestoX
              </h3>
              <p style={{
                fontSize: 14,
                color: C.muted,
                marginBottom: 24,
                lineHeight: 1.6,
              }}>
                Единое рабочее место экспедитора
              </p>

              <div style={{
                fontSize: 48,
                fontWeight: 700,
                marginBottom: 8,
                color: C.cyan,
              }}>
                0 ₽
              </div>
              <div style={{
                fontSize: 13,
                color: C.muted,
                marginBottom: 28,
              }}>
                навсегда бесплатно
              </div>

              <div style={{ marginBottom: 24 }}>
                {[
                  "Неограниченное количество TMS",
                  "Синхронизация в реальном времени",
                  "Сводная аналитика",
                  "Умные уведомления",
                  "Техническая поддержка 24/7",
                ].map(feature => (
                  <div key={feature} style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}>
                    <span style={{ color: C.cyan, fontSize: 18, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: C.white, lineHeight: 1.5 }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TMS Payments */}
            <div style={{
              background: C.navy,
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: 32,
            }}>
              <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 8,
              }}>
                Оплата TMS-систем
              </h3>
              <p style={{
                fontSize: 14,
                color: C.muted,
                marginBottom: 24,
                lineHeight: 1.6,
              }}>
                Напрямую в системы управления
              </p>

              <div style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 28,
                color: C.white,
              }}>
                По тарифам TMS
              </div>

              <div style={{ marginBottom: 24 }}>
                {[
                  "Оплата идёт напрямую в каждую TMS",
                  "Без комиссий и наценок от mestoX",
                  "Ваши существующие тарифы остаются",
                  "Управление подписками в одном месте",
                ].map(feature => (
                  <div key={feature} style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}>
                    <span style={{ color: C.muted, fontSize: 18, flexShrink: 0 }}>•</span>
                    <span style={{ fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{
                padding: 16,
                background: "rgba(37,99,235,0.08)",
                borderRadius: 10,
                fontSize: 12,
                color: C.muted,
                lineHeight: 1.6,
              }}>
                💡 mestoX не берёт комиссию за использование TMS. Вы платите напрямую поставщикам.
              </div>
            </div>

            {/* Optional Services */}
            <div style={{
              background: C.navy,
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              padding: 32,
            }}>
              <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 8,
              }}>
                Опциональные сервисы
              </h3>
              <p style={{
                fontSize: 14,
                color: C.muted,
                marginBottom: 24,
                lineHeight: 1.6,
              }}>
                Дополнительные услуги по запросу
              </p>

              <div style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 28,
                color: C.white,
              }}>
                По факту использования
              </div>

              <div style={{ marginBottom: 24 }}>
                {[
                  { name: "ЭТрН (электронные транспортные накладные)", price: "от 50 ₽/шт" },
                  { name: "Страхование грузов", price: "по тарифам СК" },
                  { name: "Премиум-поддержка", price: "от 5 000 ₽/мес" },
                  { name: "Кастомные интеграции", price: "по запросу" },
                ].map(service => (
                  <div key={service.name} style={{
                    marginBottom: 16,
                    paddingBottom: 16,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    <div style={{ fontSize: 14, color: C.white, marginBottom: 4, fontWeight: 600 }}>
                      {service.name}
                    </div>
                    <div style={{ fontSize: 13, color: C.cyan }}>
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "100px 24px",
        background: `linear-gradient(180deg, ${C.ink} 0%, ${C.navy} 100%)`,
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
        }}>
          <div style={{ marginBottom: 32 }}>
            <LogoSymbol size={80} />
          </div>

          <h2 style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            Начните работать<br />в едином пространстве
          </h2>

          <p style={{
            fontSize: 16,
            color: C.muted,
            marginBottom: 40,
            lineHeight: 1.6,
          }}>
            Подключите все ваши TMS за 5 минут. Никаких кредитных карт для старта.
          </p>

          <div style={{
            display: "flex",
            gap: 12,
            maxWidth: 480,
            margin: "0 auto 32px",
          }}>
            <input
              type="email"
              placeholder="Ваш рабочий email"
              style={{
                flex: 1,
                background: C.ink,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "16px 20px",
                fontSize: 15,
                color: C.white,
                outline: "none",
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = C.cyan}
              onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            <button style={{
              background: C.cyan,
              color: C.ink,
              border: "none",
              padding: "16px 36px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              boxShadow: `0 0 24px rgba(6,182,212,0.3)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = `0 0 32px rgba(6,182,212,0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 0 24px rgba(6,182,212,0.3)`;
            }}
            >
              Создать аккаунт
            </button>
          </div>

          <div style={{
            fontSize: 12,
            color: C.muted,
          }}>
            Регистрируясь, вы соглашаетесь с{" "}
            <a href="#" style={{ color: C.cyan, textDecoration: "none" }}>условиями использования</a>
            {" "}и{" "}
            <a href="#" style={{ color: C.cyan, textDecoration: "none" }}>политикой конфиденциальности</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: C.navy,
        padding: "48px 24px",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}>
            <div>
              <LogoWordmark size="sm" />
              <p style={{
                fontSize: 13,
                color: C.muted,
                marginTop: 16,
                lineHeight: 1.6,
                maxWidth: 300,
              }}>
                B2B SaaS-платформа для экспедиторов. Объединяем работу со всеми TMS-системами в едином рабочем пространстве.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.white }}>
                Продукт
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Возможности", "Интеграции", "Тарифы", "Документация"].map(link => (
                  <a key={link} href="#" style={{
                    fontSize: 13,
                    color: C.muted,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = C.white}
                  onMouseLeave={(e) => e.currentTarget.style.color = C.muted}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.white }}>
                Компания
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["О нас", "Блог", "Карьера", "Контакты"].map(link => (
                  <a key={link} href="#" style={{
                    fontSize: 13,
                    color: C.muted,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = C.white}
                  onMouseLeave={(e) => e.currentTarget.style.color = C.muted}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.white }}>
                Поддержка
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Помощь", "API", "Статус", "Безопасность"].map(link => (
                  <a key={link} href="#" style={{
                    fontSize: 13,
                    color: C.muted,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = C.white}
                  onMouseLeave={(e) => e.currentTarget.style.color = C.muted}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{ fontSize: 12, color: C.muted }}>
              © 2026 mestoX. Все права защищены.
            </div>
            <div style={{
              fontSize: 11,
              fontFamily: "monospace",
              color: C.cyan,
              letterSpacing: "0.1em",
            }}>
              MESTOX.RU
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
