// ─── Email: Восстановление пароля ────────────────────────────────────────────

const C = {
  ink: "#0D0F14",
  navy: "#141928",
  blue: "#2563EB",
  cyan: "#06B6D4",
  light: "#F0F4FF",
  muted: "#8892A4",
  white: "#FFFFFF",
};

// Простой логотип символ X для email
function EmailLogoSymbol() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ display: 'block', margin: '0 auto' }}>
      <rect width="48" height="48" rx="9.6" fill={C.ink} />
      <line x1="11.52" y1="11.52" x2="36.48" y2="36.48" stroke={C.white} strokeWidth="5.52" strokeLinecap="round" />
      <line x1="36.48" y1="11.52" x2="11.52" y2="36.48" stroke={C.white} strokeWidth="5.52" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3.456" fill={C.cyan} />
    </svg>
  );
}

export function EmailPasswordReset() {
  return (
    <div style={{
      background: '#F5F5F7',
      padding: '40px 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {/* Email Container */}
      <div style={{
        maxWidth: '560px',
        margin: '0 auto',
        background: C.white,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        
        {/* Header */}
        <div style={{
          background: C.ink,
          padding: '32px 24px',
          textAlign: 'center',
        }}>
          <EmailLogoSymbol />
          <div style={{
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '-0.035em',
            color: C.white,
            marginTop: '16px',
          }}>
            mesto<span style={{ color: C.cyan }}>X</span>
          </div>
          <div style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '4px',
            letterSpacing: '0.01em',
          }}>
            Рабочее место экспедитора
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '40px 32px' }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: C.ink,
            margin: '0 0 12px',
            lineHeight: 1.3,
          }}>
            Восстановление пароля
          </h1>
          
          <p style={{
            fontSize: '14px',
            color: C.muted,
            lineHeight: 1.6,
            margin: '0 0 8px',
          }}>
            Получен запрос на восстановление пароля для вашего аккаунта в mestoX.
          </p>

          <p style={{
            fontSize: '14px',
            color: C.muted,
            lineHeight: 1.6,
            margin: '0 0 28px',
          }}>
            Нажмите кнопку ниже, чтобы создать новый пароль:
          </p>

          {/* CTA Button */}
          <a
            href="https://mestox.ru/reset-password?token=EXAMPLE_TOKEN"
            style={{
              display: 'inline-block',
              background: C.ink,
              color: C.white,
              textDecoration: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              transition: 'all 0.2s',
            }}
          >
            Сбросить пароль
          </a>

          {/* Alternative link */}
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#F9FAFB',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <p style={{
              fontSize: '12px',
              color: C.muted,
              margin: '0 0 8px',
              lineHeight: 1.5,
            }}>
              Если кнопка не работает, скопируйте эту ссылку в браузер:
            </p>
            <a href="https://mestox.ru/reset-password?token=EXAMPLE_TOKEN" style={{
              fontSize: '11px',
              color: C.blue,
              wordBreak: 'break-all',
              fontFamily: 'monospace',
            }}>
              https://mestox.ru/reset-password?token=EXAMPLE_TOKEN_123456
            </a>
          </div>

          {/* Security warning */}
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: 'rgba(245, 158, 11, 0.08)',
            borderLeft: `3px solid #F59E0B`,
            borderRadius: '4px',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#D97706',
              marginBottom: '4px',
            }}>
              Безопасность
            </div>
            <div style={{
              fontSize: '12px',
              color: C.muted,
              lineHeight: 1.6,
            }}>
              Если вы не запрашивали восстановление пароля, проигнорируйте это письмо. Ваш пароль останется без изменений.
            </div>
          </div>

          {/* Expiry notice */}
          <div style={{
            marginTop: '24px',
            fontSize: '12px',
            color: C.muted,
            lineHeight: 1.6,
          }}>
            Ссылка действительна в течение 1 часа.<br />
            После создания нового пароля, старый пароль больше не будет работать.
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: '#FAFBFC',
          borderTop: '1px solid #E5E7EB',
          padding: '24px 32px',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '11px',
            color: C.muted,
            lineHeight: 1.6,
            marginBottom: '12px',
          }}>
            B2B SaaS-платформа для экспедиторов<br />
            Объединяет работу со всеми TMS-системами в едином пространстве
          </div>
          
          <div style={{
            fontSize: '11px',
            color: C.muted,
            marginTop: '12px',
          }}>
            <a href="https://mestox.ru" style={{ color: C.blue, textDecoration: 'none', marginRight: '16px' }}>
              mestox.ru
            </a>
            <a href="https://mestox.ru/support" style={{ color: C.muted, textDecoration: 'none', marginRight: '16px' }}>
              Поддержка
            </a>
            <a href="https://mestox.ru/privacy" style={{ color: C.muted, textDecoration: 'none' }}>
              Политика
            </a>
          </div>

          <div style={{
            marginTop: '16px',
            fontSize: '10px',
            color: '#9CA3AF',
            letterSpacing: '0.05em',
          }}>
            © 2026 mestoX. Все права защищены.
          </div>
        </div>
      </div>

      {/* Preview Note - remove in production */}
      <div style={{
        maxWidth: '560px',
        margin: '20px auto 0',
        padding: '12px',
        background: 'rgba(6,182,212,0.1)',
        border: '1px solid rgba(6,182,212,0.25)',
        borderRadius: '6px',
        fontSize: '11px',
        color: C.cyan,
        textAlign: 'center',
      }}>
        ⓘ Это превью email-шаблона. В продакшене используйте HTML-экспорт.
      </div>
    </div>
  );
}