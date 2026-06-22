// T.O.P.s Model — SERICEO 리더십 역량 체계 (recreated as a scalable SVG donut + labels)
// Exposes window.TopsModel

(function () {
  const GROUPS = [
    {
      key: "T", en: "Talent Development", ko: "인재 육성",
      color: "var(--seri-blue)", items: ["동기부여", "커뮤니케이션", "코칭 및 피드백"],
      a0: 180, a1: 270, corner: "tl",
    },
    {
      key: "O", en: "Organizational Mgmt.", ko: "조직 관리",
      color: "var(--theme-deeppurple)", items: ["관계형성", "변화관리", "조직설계"],
      a0: -90, a1: 0, corner: "tr",
    },
    {
      key: "s", en: "Self", ko: "자기 자신",
      color: "var(--theme-orange)", items: ["자기 관리"],
      a0: 90, a1: 180, corner: "bl",
    },
    {
      key: "P", en: "Performance Driven", ko: "성과 추구",
      color: "var(--theme-cyan)", items: ["비전 제시", "실행력", "성과평가"],
      a0: 0, a1: 90, corner: "br",
    },
  ];

  const CX = 120, CY = 120, R1 = 112, R0 = 60, GAP = 2.2;
  const rad = (d) => (d * Math.PI) / 180;
  const pt = (r, d) => [CX + r * Math.cos(rad(d)), CY + r * Math.sin(rad(d))];

  function sector(a0, a1) {
    a0 += GAP; a1 -= GAP;
    const [x1, y1] = pt(R1, a0);
    const [x2, y2] = pt(R1, a1);
    const [x3, y3] = pt(R0, a1);
    const [x4, y4] = pt(R0, a0);
    return `M ${x1} ${y1} A ${R1} ${R1} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${R0} ${R0} 0 0 0 ${x4} ${y4} Z`;
  }

  function Donut() {
    return (
      <svg viewBox="0 0 240 240" width="260" height="260" role="img" aria-label="T.O.P.s Model">
        {GROUPS.map((g) => {
          const mid = (g.a0 + g.a1) / 2;
          const [lx, ly] = pt((R0 + R1) / 2, mid);
          return (
            <g key={g.key}>
              <path d={sector(g.a0, g.a1)} fill={g.color} />
              <text x={lx} y={ly - 7} textAnchor="middle"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, fill: "#fff" }}>
                {g.key}
              </text>
              <text x={lx} y={ly + 11} textAnchor="middle"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11, fill: "rgba(255,255,255,.9)" }}>
                {g.ko}
              </text>
            </g>
          );
        })}
        {/* center */}
        <circle cx={CX} cy={CY} r={R0 - 6} fill="#fff" stroke="var(--line-200)" strokeWidth="1" />
        <text x={CX} y={CY - 4} textAnchor="middle"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, fill: "var(--seri-blue)" }}>
          Self
        </text>
        <text x={CX} y={CY + 18} textAnchor="middle"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13, fill: "var(--ink-600)" }}>
          자기 자신
        </text>
      </svg>
    );
  }

  function Box({ g }) {
    return (
      <div className={"tops-box tops-" + g.corner}>
        <div className="tops-box-head">
          <span className="tops-dot" style={{ background: g.color }} />
          <span className="tops-ko">{g.ko}</span>
          <span className="tops-en">{g.en}</span>
        </div>
        <ul className="tops-items">
          {g.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      </div>
    );
  }

  function TopsModel() {
    const byCorner = (c) => GROUPS.find((g) => g.corner === c);
    return (
      <div className="tops-wrap">
        <Box g={byCorner("tl")} />
        <Box g={byCorner("tr")} />
        <div className="tops-center"><Donut /></div>
        <Box g={byCorner("bl")} />
        <Box g={byCorner("br")} />
      </div>
    );
  }

  window.TopsModel = TopsModel;
})();
