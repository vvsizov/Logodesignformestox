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

// CSS в теге style для оптимизации
const styles = `
  .nav-link {
    transition: color 0.2s;
  }
  .nav-link:hover {
    color: ${C.white} !important;
  }
  .btn-primary {
    transition: all 0.2s;
  }
  .btn-primary:hover {
    transform: scale(1.05);
  }
  .btn-hero {
    transition: all 0.2s;
  }
  .btn-hero:hover {
    background: #08d4f0 !important;
    transform: scale(1.02);
  }
  .feature-card {
    transition: all 0.3s;
  }
  .feature-card:hover {
    border-color: rgba(6,182,212,0.3) !important;
    transform: translateY(-4px);
  }
  .tms-card {
    transition: all 0.2s;
  }
  .tms-card:hover {
    border-color: rgba(6,182,212,0.4) !important;
    background: rgba(6,182,212,0.05) !important;
  }
  .tms-add {
    transition: all 0.2s;
  }
  .tms-add:hover {
    border-color: ${C.cyan} !important;
    background: rgba(6,182,212,0.05) !important;
  }
  .input-focus {
    transition: border-color 0.2s;
  }
  .input-focus:focus {
    border-color: ${C.cyan} !important;
  }
  .btn-cta {
    transition: all 0.2s;
  }
  .btn-cta:hover {
    transform: scale(1.05);
    box-shadow: 0 0 32px rgba(6,182,212,0.5) !important;
  }
  .footer-link {
    transition: color 0.2s;
  }
  .footer-link:hover {
    color: ${C.white} !important;
  }
`;

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
    <div className="feature-card" style={{
      background: C.navy,
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 16,
      padding: "28px 24px",
    }}>
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
    { name: "Atrucks", status: "connected" },
    { name: "Pooling", status: "connected" },
    { name: "Ozon", status: "inProgress" },
    { name: "X5", status: "inProgress" },
    { name: "Torg Trans", status: "inProgress" },
    { name: "Газпромнефть снабжение", status: "inProgress" },
    { name: "Умная Логистика", status: "inProgress" },
  ];

  return (
    <>
      <style>{styles}</style>
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
              <a href="#features" className="nav-link" style={{ fontSize: 14, color: C.muted, textDecoration: "none" }}>
                Возможности
              </a>
              <a href="#tms" className="nav-link" style={{ fontSize: 14, color: C.muted, textDecoration: "none" }}>
                TMS
              </a>
              <a href="#pricing" className="nav-link" style={{ fontSize: 14, color: C.muted, textDecoration: "none" }}>
                Тарифы
              </a>
              <a href="http://5.42.112.231/login" className="btn-primary" style={{
                background: C.cyan,
                color: C.ink,
                border: "none",
                padding: "10px 24px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
              }}
              >
                Войти
              </a>
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
              Единое рабочее пространство, где эспедитор управляет всеми транспортными системами без переключения между вкладками
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
                className="input-focus"
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
              />
              <button className="btn-hero" style={{
                background: C.cyan,
                color: C.ink,
                border: "none",
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
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
                <TmsBadge key={tms.name} label={tms.name} />
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section style={{
          padding: "100px 24px",
          background: C.navy,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{
              fontSize: 32,
              marginBottom: 24,
              lineHeight: 1.4,
            }}>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                color: C.white,
              }}>
                mesto<span style={{ color: C.cyan }}>X</span>
              </span>
              <span style={{
                fontWeight: 400,
                color: C.white,
              }}>
                {" "}— это платформа, которую создает сообщество экспедиторов
              </span>
            </div>

            <h2 style={{
              fontSize: 28,
              fontWeight: 600,
              color: C.white,
              marginBottom: 32,
              lineHeight: 1.4,
            }}>
              Продукт развивается голосами экспедиторов
            </h2>

            <div style={{
              background: C.ink,
              borderRadius: 16,
              padding: "40px 48px",
              border: "1px solid rgba(255,255,255,0.08)",
              marginBottom: 32,
            }}>
              <p style={{
                fontSize: 18,
                color: C.muted,
                lineHeight: 1.8,
                marginBottom: 32,
              }}>
                Продукт, разработанный с помощью искусственного интеллекта<br />
                и развиваемый профессиональным сообществом.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 32,
                marginTop: 40,
              }}>
                <div>
                  <div style={{
                    fontSize: 40,
                    marginBottom: 12,
                  }}>
                    💡
                  </div>
                  <div style={{
                    fontSize: 16,
                    color: C.white,
                    lineHeight: 1.6,
                  }}>
                    Экспедиторы<br />предлагают идеи
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: 40,
                    marginBottom: 12,
                  }}>
                    🗳️
                  </div>
                  <div style={{
                    fontSize: 16,
                    color: C.white,
                    lineHeight: 1.6,
                  }}>
                    Сообщество<br />выбирае приоритеты
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: 40,
                    marginBottom: 12,
                  }}>
                    📈
                  </div>
                  <div style={{
                    fontSize: 16,
                    color: C.white,
                    lineHeight: 1.6,
                  }}>
                    Платформа развивается<br />вместе с отраслью
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              padding: "20px 32px",
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.25)",
              borderRadius: 12,
              fontSize: 14,
              color: C.muted,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}>
              <span>Информация о сообществе будет сообщена позже</span>
              <a
                href="https://t.me/+oZyghIJR2L8yYTAy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.cyan,
                  color: C.ink,
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Вступить в сообщество
              </a>
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
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 16,
              }}>
                <LogoSymbol size={48} />
                <h2 style={{
                  fontSize: 40,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}>
                  как центр управления
                </h2>
              </div>
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
                description="Интеграция с TMS занимает минуты. API-ключи, OAuth или логин/пароль — выбирайте добный способ."
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
                <div key={tms.name} className="tms-card" style={{
                  background: C.ink,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
                >
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: tms.status === "connected" ? "#22C55E" : "#FF9500",
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: C.white,
                  }}>
                    {tms.name}
                  </span>
                </div>
              ))}
              
              {/* Add more TMS placeholder */}
              <div className="tms-add" style={{
                background: "transparent",
                border: "1px dashed rgba(37,99,235,0.4)",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
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
                color: C.white,
                margin: 0,
                lineHeight: 1.6,
              }}>
                Не нашли вашу TMS? Зарегистрируйтесь и подайте заявку на добавление —<br />
                вынесем на голосование сообществу{" "}
                <span style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                }}>
                  mesto<span style={{ color: C.cyan }}>X</span>
                </span>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: 24,
              maxWidth: 900,
              margin: "0 auto",
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
              Подключите все ваши TMS за 5 минут.
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
                className="input-focus"
              />
              <button className="btn-cta" style={{
                background: C.cyan,
                color: C.ink,
                border: "none",
                padding: "16px 36px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: `0 0 24px rgba(6,182,212,0.3)`,
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 48,
              gap: 48,
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
                  Сообщество
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a
                    href="https://t.me/+oZyghIJR2L8yYTAy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: C.muted,
                      textDecoration: "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Сообщество mestoX
                  </a>
                  <a
                    href="https://t.me/mestox_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: C.muted,
                      textDecoration: "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Поддержка @mestox_bot
                  </a>
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
    </>
  );
}