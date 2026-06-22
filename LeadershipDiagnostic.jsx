// SERICEO 자매 사이트 — 리더십 진단 메인 페이지
const DS = window.SERICEODesignSystem_c98010;
const { Button } = DS;
const TopsModel = window.TopsModel;

// SERICEO 라인 아이콘 (1.5px stroke · currentColor) — materialize된 번들 아이콘이
// 외곽 프레임 rect까지 채워져 흰 사각형으로 깨지는 문제가 있어 동일 스타일로 재작성.
function Icon({ name, size = 24, style }) {
  const paths = {
    Icon24Search: <g><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /></g>,
    Icon24Alerton: <g><path d="M18 8.5a6 6 0 0 0-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5Z" /><path d="M13.7 20.5a2 2 0 0 1-3.4 0" /></g>,
    Icon24User: <g><circle cx="12" cy="8" r="4" /><path d="M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" /></g>,
    Icon24Folder: <path d="M3 7a1.5 1.5 0 0 1 1.5-1.5h4.6l2 2H19.5A1.5 1.5 0 0 1 21 9v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5Z" />,
    Icon24Calendar: <g><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><line x1="3.5" y1="9.5" x2="20.5" y2="9.5" /><line x1="8" y1="3" x2="8" y2="6.5" /><line x1="16" y1="3" x2="16" y2="6.5" /></g>,
    Icon24ArrowLgDirectionRight: <g><line x1="4.5" y1="12" x2="19" y2="12" /><path d="M12.5 5.5 19 12l-6.5 6.5" /></g>,
    Icon16ArrowSmDirectionRight: <path d="M9 6l6 6-6 6" />,
    Icon16Page: <g><path d="M7 3.5h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" /><path d="M14 3.5v5h5" /></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths[name] || null}
    </svg>
  );
}

const ASSET = "assets";

/* ─────────────────────────── Hero ─────────────────────────── */
function Hero() {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll(".fade-up"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !items.length) return;
    const DUR = 700, STAG = 130;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    items.forEach((it) => { it.style.opacity = "0"; it.style.transform = "translateY(26px)"; });
    let rafId;
    const start = performance.now();
    function tick(now) {
      let done = true;
      items.forEach((it, i) => {
        const p = Math.max(0, Math.min(1, (now - start - i * STAG) / DUR));
        it.style.opacity = String(p);
        it.style.transform = "translateY(" + (26 * (1 - ease(p))) + "px)";
        if (p < 1) done = false;
      });
      if (!done) rafId = requestAnimationFrame(tick);
      else items.forEach((it) => { it.style.opacity = ""; it.style.transform = ""; });
    }
    rafId = requestAnimationFrame(tick);
    // fallback: guarantee final visible state even if rAF is throttled
    const fb = setTimeout(() => {
      items.forEach((it) => { it.style.opacity = ""; it.style.transform = ""; });
      cancelAnimationFrame(rafId);
    }, 1600);
    return () => { cancelAnimationFrame(rafId); clearTimeout(fb); };
  }, []);
  return (
    <section className="hero" data-anim ref={ref}>
      <div className="hero-shapes" aria-hidden="true">
        <div className="hero-shape s1"><div className="pill"></div></div>
        <div className="hero-shape s2"><div className="pill"></div></div>
        <div className="hero-shape s3"><div className="pill"></div></div>
        <div className="hero-shape s4"><div className="pill"></div></div>
        <div className="hero-shape s5"><div className="pill"></div></div>
      </div>
      <div className="ld-container hero-inner">
        <div className="hero-badge fade-up d1">
          <span className="dot"></span>
          <span>Multicampus · SERICEO Leadership</span>
        </div>
        <div className="hero-eyebrow fade-up d2">리더가 되는 길, 나의 좌표를 확인하다</div>
        <h1 className="fade-up d2">
          <span className="l1">리더십</span>
          <span className="l2">진단</span>
        </h1>
        <p className="hero-sub fade-up d3">
          T.O.P.s Model 기반 40개 문항으로 나의 리더십 역량을 측정하고,
          강점은 살리고 보완점은 채우는 맞춤 성장 로드맵을 받아보세요.
        </p>
        <div className="hero-cta fade-up d4">
          <Button tone="primary" size="lg" trailingIcon={<Icon name="Icon16ArrowSmDirectionRight" size={16} />}>
            진단 시작하기
          </Button>
          <Button size="lg" style={{ background: "rgba(255,255,255,.08)", color: "#fff", boxShadow: "inset 0 0 0 1px rgba(255,255,255,.28)" }}>
            결과 샘플보기
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── GNB ─────────────────────────── */
function Gnb() {
  const nav = [
    { label: "콘텐츠" }, { label: "라이브러리" }, { label: "마스터클래스" },
    { label: "리더십 진단", active: true },
  ];
  return (
    <header className="gnb">
      <div className="ld-container gnb-inner">
        <div className="gnb-left">
          <img className="gnb-logo" src={(window.__resources && window.__resources.logoDark) || `${ASSET}/brand/logo-dark-bg.png`} alt="SERICEO" />
          <nav className="gnb-nav">
            {nav.map((n, i) => (
              <a key={i} href="#" className={n.active ? "is-active" : ""}>{n.label}</a>
            ))}
          </nav>
        </div>
        <div className="gnb-right">
          <div className="gnb-util">
            <DS.IconButton ariaLabel="검색" tone="invert"><Icon name="Icon24Search" size={24} style={{ color: "#fff" }} /></DS.IconButton>
            <DS.IconButton ariaLabel="알림" tone="invert" alert><Icon name="Icon24Alerton" size={24} style={{ color: "#fff" }} /></DS.IconButton>
            <DS.IconButton ariaLabel="보관함" tone="invert"><Icon name="Icon24Folder" size={24} style={{ color: "#fff" }} /></DS.IconButton>
            <DS.IconButton ariaLabel="일정" tone="invert"><Icon name="Icon24Calendar" size={24} style={{ color: "#fff" }} /></DS.IconButton>
            <DS.IconButton ariaLabel="사용자" tone="invert"><Icon name="Icon24User" size={24} style={{ color: "#fff" }} /></DS.IconButton>
          </div>
          <button className="gnb-hamburger" aria-label="메뉴"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────── LNB ─────────────────────────── */
function Lnb() {
  const tabs = [
    { label: "리더십 진단", active: true }, { label: "진단 결과" },
    { label: "역량 가이드" }, { label: "자료실" }, { label: "FAQ" },
  ];
  return (
    <div className="lnb">
      <nav className="ld-container lnb-inner">
        {tabs.map((t, i) => <a key={i} href="#" className={t.active ? "is-active" : ""}>{t.label}</a>)}
      </nav>
    </div>
  );
}

/* ───────────────────── Available diagnostics ───────────────────── */
function DiagCard({ name, period, point, isNew, tone = "blue" }) {
  return (
    <a href="#" className={"diag-card tone-" + tone}>
      <div className="diag-card-top">
        <div className="diag-card-title">
          {name}{isNew ? <span className="new">NEW</span> : null}
        </div>
        <span className="diag-arrow"><Icon name="Icon24ArrowLgDirectionRight" size={22} style={{ color: "#fff" }} /></span>
      </div>
      <div className="diag-card-meta">
        <span><span className="lbl">기간</span><span className="num">{period}</span></span>
        <span className="pt">리더십 점수 <span className="num">{point}</span>점</span>
      </div>
    </a>
  );
}

function AvailableSection() {
  const list = [
    { name: "2026 상반기 리더십 종합 진단", period: "2026.05.12 ~ 2026.05.25", point: "1,000", tone: "blue" },
    { name: "중간리더 핵심역량 진단", period: "2026.06.01 ~ 2026.06.14", point: "1,000", isNew: true, tone: "slate" },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <h2>참여 가능한 진단</h2>
        <span className="meta">총 <b>{list.length}</b>개</span>
      </div>
      <div className="diag-grid">
        {list.map((d, i) => <DiagCard key={i} {...d} />)}
      </div>
    </section>
  );
}

/* ───────────────────── Recent result ───────────────────── */
function RecentResultSection() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>김멀티 회원님의 최근 진단 결과</h2>
      </div>
      <div className="panel">
        <div className="result-sub">
          <span className="name">2025 하반기 리더십 종합 진단</span>
          <span className="div">|</span>
          <span>기간 <span className="num">2026.01.06 ~ 2026.01.19</span></span>
          <span className="div">|</span>
          <span>김멀티님 <span className="num">2026.01.18</span> 참여</span>
        </div>

        <div className="result-statement">
          <div className="line">
            <span>김멀티 회원님은</span>
            <span className="type-badge"><i>t</i><i>O</i><i>P</i><i className="cap">s</i></span>
            <b>(<span className="change">변화 선호</span> 관리자)</b>
            <span>입니다.</span>
          </div>
          <Button tone="dark" size="lg" trailingIcon={<Icon name="Icon16ArrowSmDirectionRight" size={16} />}>
            결과 상세보기
          </Button>
        </div>

        <div className="comp-table">
          <div className="comp-row">
            <div>
              <div className="label">최고 강점 역량</div>
              <div className="value strong">변화관리</div>
            </div>
            <div className="comment">
              변화의 필요성을 빠르게 감지하고 구성원의 저항을 설득으로 전환하는 힘이 뛰어납니다. 새로운 시도를 두려워하지 않는 추진력이 조직의 전환을 이끕니다.
            </div>
          </div>
          <div className="comp-row">
            <div>
              <div className="label">최우선 보완 역량</div>
              <div className="value gap">비전 제시</div>
            </div>
            <div className="comment">
              장기적 방향성을 명확한 언어로 공유하는 연습이 필요합니다. 구성원이 '왜'에 공감할 수 있도록 비전을 구체화해 보세요.
            </div>
          </div>
        </div>

        <p className="result-note">
          ※ 진단 기간 내에는 타 참여자와의 실시간 비교에 의해 결과가 도출되므로 강점·보완 역량이 바뀔 수 있습니다.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── About diagnostic ───────────────────── */
function AboutSection() {
  return (
    <section className="section">
      <div className="section-head">
        <h2>SERICEO 리더십 진단이란?</h2>
        <span className="spacer"></span>
        <Button variant="line" tone="primary" size="md" trailingIcon={<Icon name="Icon16Page" size={16} />}>
          결과 샘플보기 PDF
        </Button>
      </div>
      <div className="about-panel">
        <div className="about-grid">
          <div className="about-copy">
            <p>
              리더십 역량 체계 <b>T.O.P.s Model</b>을 기반으로, 조직의 현재와 미래를 주도하는 리더가 되기 위한
              역량 개발 목표 수립을 돕는 SERICEO의 리더십 진단 도구입니다. 4개 역량군, 10대 하위 역량에 대해
              40개 문항으로 본인 수준을 측정하여 강점·보완 역량을 도출하고, 보완 역량을 강화하기 위한
              맞춤 솔루션을 제시합니다.
            </p>
            <ul className="about-list">
              <li><span><b>4대 역량군</b> : ① 인재 육성, ② 조직 관리, ③ 성과 추구, ④ SELF</span></li>
              <li><span><b>10대 하위 역량</b> : 동기부여, 커뮤니케이션, 코칭 및 피드백, 관계형성, 변화관리, 조직설계, 비전 제시, 실행력, 성과평가, 자기관리</span></li>
            </ul>
          </div>
          <div className="about-diagram">
            <TopsModel />
            <div className="cap">리더십 역량 체계 <b>T.O.P.s</b> Model</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */
function Footer() {
  const cols = [
    ["고객센터", ["이용안내", "FAQ", "핫라인"]],
    ["About Sericeo", ["회사소개", "사이트맵"]],
    ["Contact Us", ["제휴문의", "채용안내"]],
  ];
  return (
    <footer className="ld-footer">
      <div className="ld-container">
        <div className="ld-footer-top">
          <div className="cols">
            {cols.map(([h, items], i) => (
              <div className="col" key={i}>
                <h4>{h}</h4>
                {items.map((it, j) => <a href="#" key={j}>{it}</a>)}
              </div>
            ))}
          </div>
          <div className="tel">
            <div className="num">02-2143-8400, 8500</div>
            <div className="hours">평일 08:00 ~ 18:00</div>
          </div>
        </div>
        <div className="copy">Copyright by Multicampus Co., Ltd. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
function Page() {
  return (
    <div className="ld-page">
      <Gnb />
      <Lnb />
      <Hero />
      <div className="ld-container">
        <AvailableSection />
        <RecentResultSection />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<Page />);
