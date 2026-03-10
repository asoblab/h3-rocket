"use client";

import { useEffect } from "react";

/* ─── scroll reveal ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); }),
      { rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ══════════════════════════════
   ILLUSTRATIONS
══════════════════════════════ */

/** ロケット全体図 */
function RocketIllustration() {
  return (
    <svg viewBox="0 0 200 520" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 160, height: "auto" }}>

      {/* ── SRB 左 ── */}
      <path d="M 38 200 L 40 155 Q 41 145 44 145 Q 47 145 48 155 L 50 200 L 50 365 Q 48 375 46 380 L 46 395 L 54 395 L 54 380 Q 52 375 50 365 L 50 200" fill="#f0f0f0" stroke="#bbb" strokeWidth="1"/>
      <path d="M 44 145 Q 46 128 48 145" fill="#e0e0e0" stroke="#bbb" strokeWidth="1"/>
      <path d="M 46 395 Q 42 410 40 425 L 60 425 Q 58 410 54 395 Z" fill="#e8e8e8" stroke="#bbb" strokeWidth="1"/>
      <line x1="40" y1="310" x2="60" y2="310" stroke="#E8002D" strokeWidth="1.5"/>

      {/* ── SRB 右 ── */}
      <path d="M 150 200 L 152 155 Q 153 145 156 145 Q 159 145 160 155 L 162 200 L 162 365 Q 160 375 158 380 L 158 395 L 166 395 L 166 380 Q 164 375 162 365 L 162 200" fill="#f0f0f0" stroke="#bbb" strokeWidth="1"/>
      <path d="M 156 145 Q 158 128 160 145" fill="#e0e0e0" stroke="#bbb" strokeWidth="1"/>
      <path d="M 158 395 Q 154 410 152 425 L 172 425 Q 170 410 166 395 Z" fill="#e8e8e8" stroke="#bbb" strokeWidth="1"/>
      <line x1="152" y1="310" x2="172" y2="310" stroke="#E8002D" strokeWidth="1.5"/>

      {/* ── フェアリング ── */}
      <path d="M 82 14 Q 100 4 118 14 L 126 52 L 126 80 L 74 80 L 74 52 Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1.2"/>
      <line x1="74" y1="80" x2="126" y2="80" stroke="#E8002D" strokeWidth="1.2"/>

      {/* ── 第2段 ── */}
      <rect x="74" y="80" width="52" height="115" fill="#efefef" stroke="#ccc" strokeWidth="1.2"/>
      <line x1="72" y1="195" x2="128" y2="195" stroke="#E8002D" strokeWidth="1.5"/>

      {/* ── 第1段 ── */}
      <rect x="68" y="197" width="64" height="185" fill="#ebebeb" stroke="#ccc" strokeWidth="1.2"/>
      {[245, 290, 340].map(y => (
        <line key={y} x1="68" y1={y} x2="132" y2={y} stroke="#ddd" strokeWidth="0.7"/>
      ))}

      {/* ── エンジン部 ── */}
      <path d="M 68 382 L 60 394 L 60 402 L 140 402 L 140 394 L 132 382 Z" fill="#e0e0e0" stroke="#ccc" strokeWidth="1"/>

      {/* ── LE-9 ノズル ── */}
      {[88, 112].map((cx, i) => (
        <g key={i}>
          <path d={`M ${cx - 10} 402 Q ${cx - 14} 422 ${cx - 17} 440 L ${cx + 17} 440 Q ${cx + 14} 422 ${cx + 10} 402 Z`}
            fill="#e8e8e8" stroke="#bbb" strokeWidth="1"/>
          <ellipse cx={cx} cy="440" rx="17" ry="4.5" fill="none" stroke="#E8002D" strokeWidth="1"/>
        </g>
      ))}

      {/* ── 炎 ── */}
      <path d="M 72 440 Q 88 480 100 500 Q 112 480 128 440 Z"
        fill="#E8002D" opacity="0.15"/>
      <path d="M 78 440 Q 88 472 100 490 Q 112 472 122 440 Z"
        fill="#E8002D" opacity="0.25"/>

      {/* ── SRB 炎 ── */}
      <path d="M 43 425 Q 50 448 53 460 Q 56 448 63 425 Z" fill="#E8002D" opacity="0.15"/>
      <path d="M 155 425 Q 162 448 165 460 Q 168 448 175 425 Z" fill="#E8002D" opacity="0.15"/>

      {/* ── 中心線 ── */}
      <line x1="100" y1="0" x2="100" y2="520"
        stroke="#E8002D" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"/>
    </svg>
  );
}

/** タイムライン用アイコン */
function DotIcon({ accent }: { accent?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke={accent ? "#E8002D" : "#ccc"} strokeWidth="1.5"
        fill={accent ? "#E8002D" : "white"}/>
    </svg>
  );
}

/** 軌道イラスト（Future用） */
function OrbitIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}>
      <defs>
        <style>{`
          @keyframes spin1 { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes spin2 { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
          .sp1 { animation: spin1 18s linear infinite; transform-origin: 120px 160px; }
          .sp2 { animation: spin2 9s linear infinite; transform-origin: 300px 160px; }
        `}</style>
      </defs>

      {/* 太陽（左外） */}
      <circle cx="30" cy="160" r="22" fill="#fff5e0" stroke="#f0d060" strokeWidth="1.5"/>
      <text x="30" y="164" textAnchor="middle" fill="#c09020" fontSize="7" fontFamily="monospace">SUN</text>

      {/* 地球軌道 */}
      <ellipse cx="120" cy="160" rx="52" ry="20"
        fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
      {/* 地球 */}
      <circle cx="120" cy="160" r="18" fill="#dce8ff" stroke="#88aadd" strokeWidth="1.2"/>
      <text x="120" y="164" textAnchor="middle" fill="#3355aa" fontSize="7" fontFamily="monospace">EARTH</text>
      {/* 月 */}
      <g className="sp1">
        <circle cx="172" cy="160" r="6" fill="#f0f0f0" stroke="#bbb" strokeWidth="1"/>
      </g>

      {/* ホーマン遷移軌道 */}
      <path d="M 120 140 Q 210 30 300 120" fill="none"
        stroke="#E8002D" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.6"/>
      <polygon points="295,116 305,123 294,128" fill="#E8002D" opacity="0.6"/>

      {/* 火星軌道 */}
      <ellipse cx="300" cy="160" rx="78" ry="30"
        fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
      {/* 火星 */}
      <circle cx="300" cy="160" r="22" fill="#ffe0d5" stroke="#cc6644" strokeWidth="1.2"/>
      <text x="300" y="164" textAnchor="middle" fill="#993322" fontSize="7" fontFamily="monospace">MARS</text>
      {/* フォボス */}
      <g className="sp2">
        <ellipse cx="378" cy="160" rx="7" ry="5" fill="#e8e0d8" stroke="#bbb" strokeWidth="1"/>
        <text x="386" y="148" fill="#998877" fontSize="6.5" fontFamily="monospace">PHOBOS</text>
      </g>

      {/* MMX探査機 */}
      <g transform="translate(210,80)">
        <rect x="-6" y="-4" width="12" height="8" rx="1" fill="#555" stroke="#333" strokeWidth="0.8"/>
        <rect x="-18" y="-2" width="10" height="4" rx="0.5" fill="#88aacc" stroke="#668899" strokeWidth="0.6"/>
        <rect x="8" y="-2" width="10" height="4" rx="0.5" fill="#88aacc" stroke="#668899" strokeWidth="0.6"/>
        <text x="0" y="18" textAnchor="middle" fill="#E8002D" fontSize="7" fontFamily="monospace">MMX</text>
      </g>

      {/* 凡例 */}
      <line x1="360" y1="20" x2="380" y2="20" stroke="#E8002D" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.6"/>
      <text x="385" y="24" fill="#888" fontSize="8" fontFamily="monospace">Transfer orbit</text>
      <line x1="360" y1="36" x2="380" y2="36" stroke="#ccc" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="385" y="40" fill="#888" fontSize="8" fontFamily="monospace">Orbit</text>
    </svg>
  );
}

/** スペックカード用アイコン群 */
function IconHeight() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <line x1="20" y1="4" x2="20" y2="36" stroke="#E8002D" strokeWidth="2"/>
      <line x1="14" y1="4" x2="26" y2="4" stroke="#E8002D" strokeWidth="2"/>
      <line x1="14" y1="36" x2="26" y2="36" stroke="#E8002D" strokeWidth="2"/>
      <text x="20" y="23" textAnchor="middle" fill="#111" fontSize="9" fontFamily="monospace">H</text>
    </svg>
  );
}
function IconWeight() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="9" stroke="#E8002D" strokeWidth="2" fill="none"/>
      <line x1="20" y1="25" x2="20" y2="32" stroke="#E8002D" strokeWidth="2"/>
      <line x1="10" y1="32" x2="30" y2="32" stroke="#E8002D" strokeWidth="2"/>
      <line x1="10" y1="28" x2="10" y2="36" stroke="#E8002D" strokeWidth="1.5"/>
      <line x1="30" y1="28" x2="30" y2="36" stroke="#E8002D" strokeWidth="1.5"/>
    </svg>
  );
}
function IconPayload() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="10" y="14" width="20" height="18" rx="2" stroke="#E8002D" strokeWidth="2" fill="none"/>
      <path d="M 14 14 L 14 10 Q 14 8 16 8 L 24 8 Q 26 8 26 10 L 26 14" stroke="#E8002D" strokeWidth="2" fill="none"/>
      <line x1="10" y1="22" x2="30" y2="22" stroke="#E8002D" strokeWidth="1.5"/>
    </svg>
  );
}
function IconCost() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="13" stroke="#E8002D" strokeWidth="2" fill="none"/>
      <text x="20" y="25" textAnchor="middle" fill="#E8002D" fontSize="14" fontWeight="300">¥</text>
      <line x1="28" y1="12" x2="12" y2="28" stroke="#E8002D" strokeWidth="1.5" strokeDasharray="3 2"/>
    </svg>
  );
}

/* ══════════════════════════════
   PAGE
══════════════════════════════ */
export default function Page() {
  useReveal();

  const LAUNCHES = [
    { id:"TF1-A", date:"2023.02.17", result:"abort",   name:"試験機1号機 第1回試み", note:"打ち上げ直前中止" },
    { id:"TF1",   date:"2023.03.07", result:"failure", name:"試験機1号機",            note:"第2段不着火・指令破壊" },
    { id:"TF2",   date:"2024.02.17", result:"success", name:"試験機2号機",            note:"初の軌道投入成功" },
    { id:"F3",    date:"2024.07.01", result:"success", name:"3号機",                  note:"SAR衛星 ALOS-4" },
    { id:"F4",    date:"2024.11.04", result:"success", name:"4号機",                  note:"防衛通信衛星 DSN-3" },
    { id:"F5",    date:"2025.02.02", result:"success", name:"5号機",                  note:"準天頂衛星 QZS-6" },
    { id:"F7",    date:"2025.10.26", result:"success", name:"7号機",                  note:"ISS補給 HTV-X1" },
    { id:"F8",    date:"2025.12.22", result:"failure", name:"8号機",                  note:"第2段異常・失敗" },
  ];

  const HISTORY = [
    { year:"2014", text:"開発正式決定。予算約2,000億円。三菱重工がプライム契約社に。" },
    { year:"2017", text:"LE-9エンジン燃焼試験開始。エキスパンダーブリードサイクルに初挑戦。" },
    { year:"2020", text:"タービンブレード亀裂を発見。設計を抜本的に見直し全面再設計へ。" },
    { year:"2023.02", text:"初の打ち上げ試み。直前に電気系統の問題で中止。" },
    { year:"2023.03", text:"試験機1号機、第2段エンジン不着火。「だいち3号」喪失。指令破壊。" },
    { year:"2024.02", text:"試験機2号機、同じ2月17日に軌道投入に成功。H3、初の快挙。", accent: true },
    { year:"2024〜",  text:"F3・F4・F5・F7と連続成功。日本の宇宙インフラとして本格稼働。", accent: true },
  ];

  const SPECS = [
    { icon: <IconHeight/>,  value:"63",  unit:"m",   label:"全高" },
    { icon: <IconWeight/>,  value:"574", unit:"t",   label:"離昇重量" },
    { icon: <IconPayload/>, value:"6.5", unit:"t",   label:"GTO 投入能力" },
    { icon: <IconCost/>,    value:"50",  unit:"%削減", label:"打ち上げコスト削減目標" },
  ];

  const TECH = [
    {
      title:"LE-9 エンジン",
      body:"エキスパンダーブリードサイクルを大型エンジンに世界初採用。補助燃焼器をなくし、部品点数を20%削減。3Dプリンティングで複数部品を一体化。推力147 tf、比推力426秒。",
    },
    {
      title:"民生グレード部品",
      body:"全部品の約90%に一般産業向け部品を採用。宇宙専用規格の呪縛を解き放ち、村田製作所などの量産技術を活用。コストと品質を同時に改善する調達革命。",
    },
    {
      title:"柔軟な打ち上げ構成",
      body:"H3-22S、H3-30S、H3-24L など6種類以上の構成を用意。LE-9を2〜3基、SRB-3を0〜4本の組み合わせで、低軌道から月遷移軌道まで幅広い用途に対応。",
    },
  ];

  const resultStyle = (r: string) => {
    if (r === "success") return { color: "#1a7a45", background: "#e8f5ee", border:"1px solid #b8e0c8" };
    if (r === "abort")   return { color: "#7a5a00", background: "#fff8e0", border:"1px solid #e8d870" };
    return { color: "#c00020", background: "#fff0f2", border:"1px solid #f0b8c0" };
  };

  const resultLabel = (r: string) => r === "success" ? "成功" : r === "abort" ? "中止" : "失敗";

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ══════ NAV ══════ */}
      <header style={{
        position:"sticky", top:0, zIndex:100,
        background:"rgba(255,255,255,0.95)", backdropFilter:"blur(12px)",
        borderBottom:"1px solid var(--line)",
      }}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"0 32px",
          height:56, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span className="mono" style={{fontSize:"0.95rem", letterSpacing:"0.4em", fontWeight:300}}>H3</span>
          <nav style={{display:"flex", gap:32}}>
            {[["#story","沿革"],["#tech","技術"],["#launches","記録"],["#future","未来"]].map(([href,label])=>(
              <a key={href} href={href} style={{
                fontSize:"0.78rem", color:"var(--dim)", textDecoration:"none",
                letterSpacing:"0.05em", transition:"color 0.2s",
              }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--ink)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--dim)")}
              >{label}</a>
            ))}
          </nav>
        </div>
      </header>


      {/* ══════ HERO ══════ */}
      <section style={{
        maxWidth:1100, margin:"0 auto", padding:"80px 32px 100px",
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center",
      }}>
        <div style={{animation:"fadeUp 0.9s ease both"}}>
          <p className="mono" style={{
            fontSize:"0.7rem", letterSpacing:"0.35em", color:"var(--red)",
            marginBottom:24, textTransform:"uppercase",
          }}>Japan H3 Launch Vehicle</p>

          <h1 style={{
            fontSize:"clamp(4rem,10vw,8rem)", fontWeight:100,
            letterSpacing:"-0.03em", lineHeight:0.9,
            color:"var(--ink)", marginBottom:32,
          }}>H3</h1>

          <p style={{
            fontSize:"clamp(1rem,2vw,1.2rem)", fontWeight:300,
            lineHeight:1.75, color:"#444", marginBottom:40, maxWidth:440,
          }}>
            日本の次世代基幹ロケット。<br/>
            宇宙輸送のコストを半減させ、<br/>
            日本の技術を世界の宇宙市場へ。
          </p>

          <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
            <a href="#story" style={{
              padding:"11px 28px", border:"1px solid var(--ink)",
              fontSize:"0.75rem", letterSpacing:"0.1em",
              color:"var(--ink)", textDecoration:"none",
              transition:"background 0.2s, color 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--ink)";e.currentTarget.style.color="#fff"}}
              onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.color="var(--ink)"}}
            >沿革を読む</a>
            <a href="#launches" style={{
              padding:"11px 28px", border:"1px solid var(--red)",
              fontSize:"0.75rem", letterSpacing:"0.1em",
              color:"var(--red)", textDecoration:"none",
              transition:"background 0.2s, color 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="var(--red)";e.currentTarget.style.color="#fff"}}
              onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.color="var(--red)"}}
            >打ち上げ記録</a>
          </div>
        </div>

        <div style={{display:"flex", justifyContent:"center", animation:"fadeUp 1.1s 0.15s ease both"}}>
          <RocketIllustration/>
        </div>
      </section>


      {/* ══════ SPECS ══════ */}
      <section style={{background:"var(--bg2)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"0 32px",
          display:"grid", gridTemplateColumns:"repeat(4,1fr)",
        }}>
          {SPECS.map(({icon,value,unit,label},i)=>(
            <div key={i} className="reveal" style={{
              transitionDelay:`${i*80}ms`,
              padding:"44px 32px",
              borderRight: i < 3 ? "1px solid var(--line)" : "none",
            }}>
              <div style={{marginBottom:16}}>{icon}</div>
              <div style={{
                fontSize:"clamp(2rem,4vw,3rem)", fontWeight:100,
                letterSpacing:"-0.03em", lineHeight:1, color:"var(--ink)", marginBottom:4,
              }}>
                {value}<span style={{fontSize:"0.45em", color:"var(--red)", marginLeft:4}}>{unit}</span>
              </div>
              <div className="mono" style={{fontSize:"0.68rem", color:"var(--dim)", letterSpacing:"0.1em", textTransform:"uppercase"}}>{label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ══════ STORY ══════ */}
      <section id="story" style={{scrollMarginTop:56}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"100px 32px"}}>
          <div className="reveal" style={{marginBottom:64}}>
            <p className="mono" style={{fontSize:"0.68rem", color:"var(--red)", letterSpacing:"0.3em", marginBottom:16, textTransform:"uppercase"}}>Story</p>
            <h2 style={{fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:100, letterSpacing:"-0.02em", lineHeight:1.1}}>
              10年間の挑戦。
            </h2>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start"}}>
            {/* テキスト */}
            <div className="reveal" style={{transitionDelay:"80ms"}}>
              <p style={{fontSize:"1rem", fontWeight:300, lineHeight:1.9, color:"#444", marginBottom:28}}>
                H3は2014年に開発が正式決定された。H-IIAの後継として、打ち上げコストの抜本的削減と高い信頼性の両立を目標に掲げた野心的プロジェクトだ。
              </p>
              <p style={{fontSize:"1rem", fontWeight:300, lineHeight:1.9, color:"#444", marginBottom:28}}>
                だが道のりは平坦ではなかった。2023年3月、試験機1号機は第2段エンジンが着火せず、指令破壊。「だいち3号」を喪失した。
              </p>
              <p style={{fontSize:"1rem", fontWeight:300, lineHeight:1.9, color:"#444"}}>
                それでもJAXAと三菱重工は諦めなかった。徹底的な原因究明と改良を重ね、2024年2月17日——奇しくも失敗から1年後の同じ日に——試験機2号機が初の軌道投入に成功した。
              </p>

              <div style={{marginTop:40, padding:"24px 28px", background:"var(--bg2)", borderLeft:"3px solid var(--red)"}}>
                <p style={{fontSize:"1.05rem", fontWeight:300, lineHeight:1.7, color:"#333", fontStyle:"italic"}}>
                  "失敗はロケット開発の一部だ。<br/>諦めないことが、日本の真骨頂である。"
                </p>
              </div>
            </div>

            {/* タイムライン */}
            <div className="reveal" style={{transitionDelay:"160ms"}}>
              {HISTORY.map((h, i) => (
                <div key={i} style={{
                  display:"grid", gridTemplateColumns:"16px 1fr", gap:20,
                  marginBottom: i < HISTORY.length - 1 ? 28 : 0,
                }}>
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <DotIcon accent={h.accent}/>
                    {i < HISTORY.length - 1 && (
                      <div style={{width:1, flex:1, background:"var(--line)", margin:"4px 0"}}/>
                    )}
                  </div>
                  <div style={{paddingBottom: i < HISTORY.length - 1 ? 0 : 0}}>
                    <p className="mono" style={{
                      fontSize:"0.65rem", color: h.accent ? "var(--red)" : "var(--dim)",
                      letterSpacing:"0.1em", marginBottom:5,
                    }}>{h.year}</p>
                    <p style={{
                      fontSize:"0.88rem", fontWeight: h.accent ? 400 : 300,
                      lineHeight:1.65, color: h.accent ? "var(--ink)" : "#555",
                    }}>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════ TECH ══════ */}
      <section id="tech" style={{background:"var(--bg2)", borderTop:"1px solid var(--line)", scrollMarginTop:56}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"100px 32px"}}>
          <div className="reveal" style={{marginBottom:64}}>
            <p className="mono" style={{fontSize:"0.68rem", color:"var(--red)", letterSpacing:"0.3em", marginBottom:16, textTransform:"uppercase"}}>Technology</p>
            <h2 style={{fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:100, letterSpacing:"-0.02em", lineHeight:1.1}}>
              技術革新の核心。
            </h2>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1}}>
            {TECH.map((t, i) => (
              <div key={i} className="reveal" style={{
                transitionDelay:`${i*100}ms`,
                background:"var(--bg)", padding:"40px 36px",
                borderTop:"2px solid var(--red)",
              }}>
                <p className="mono" style={{
                  fontSize:"0.62rem", color:"var(--red)", letterSpacing:"0.25em",
                  marginBottom:20, textTransform:"uppercase",
                }}>0{i+1}</p>
                <h3 style={{
                  fontSize:"1.15rem", fontWeight:500, marginBottom:16,
                  letterSpacing:"0.02em", color:"var(--ink)",
                }}>{t.title}</h3>
                <p style={{fontSize:"0.88rem", fontWeight:300, lineHeight:1.85, color:"#555"}}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════ LAUNCHES ══════ */}
      <section id="launches" style={{scrollMarginTop:56}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"100px 32px"}}>
          <div className="reveal" style={{marginBottom:20}}>
            <p className="mono" style={{fontSize:"0.68rem", color:"var(--red)", letterSpacing:"0.3em", marginBottom:16, textTransform:"uppercase"}}>Launch Record</p>
            <div style={{display:"flex", alignItems:"flex-end", gap:40, flexWrap:"wrap", marginBottom:48}}>
              <h2 style={{fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:100, letterSpacing:"-0.02em", lineHeight:1.1}}>
                打ち上げ記録。
              </h2>
              <div style={{display:"flex", gap:36, paddingBottom:6}}>
                {[
                  {v:LAUNCHES.filter(l=>l.result==="success").length, l:"成功"},
                  {v:LAUNCHES.filter(l=>l.result==="failure").length, l:"失敗"},
                  {v:LAUNCHES.length, l:"合計"},
                ].map(({v,l})=>(
                  <div key={l}>
                    <div style={{fontSize:"2.4rem", fontWeight:100, lineHeight:1, letterSpacing:"-0.04em", color:"var(--ink)"}}>{v}</div>
                    <div className="mono" style={{fontSize:"0.65rem", color:"var(--dim)", letterSpacing:"0.1em", marginTop:4}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal" style={{borderTop:"1px solid var(--line)"}}>
            {LAUNCHES.map((l, i) => {
              const rs = resultStyle(l.result);
              return (
                <div key={l.id} style={{
                  display:"grid", gridTemplateColumns:"72px 1fr auto",
                  borderBottom:"1px solid var(--line)",
                  padding:"18px 4px", gap:20, alignItems:"center",
                  transitionDelay:`${i*40}ms`,
                }}>
                  <div>
                    <span className="mono" style={{fontSize:"0.68rem", color:"var(--dim)", letterSpacing:"0.1em"}}>{l.id}</span>
                  </div>
                  <div>
                    <div style={{fontSize:"0.95rem", fontWeight:400, color:"var(--ink)", marginBottom:3}}>{l.name}</div>
                    <div style={{display:"flex", gap:16, alignItems:"center", flexWrap:"wrap"}}>
                      <span className="mono" style={{fontSize:"0.68rem", color:"var(--dim)"}}>{l.date}</span>
                      <span style={{fontSize:"0.82rem", color:"#666"}}>{l.note}</span>
                    </div>
                  </div>
                  <div>
                    <span style={{
                      ...rs,
                      fontSize:"0.65rem", padding:"4px 12px",
                      borderRadius:2, fontWeight:500,
                      letterSpacing:"0.05em",
                    }}>{resultLabel(l.result)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════ FUTURE ══════ */}
      <section id="future" style={{background:"var(--bg2)", borderTop:"1px solid var(--line)", scrollMarginTop:56}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"100px 32px"}}>
          <div className="reveal" style={{marginBottom:64}}>
            <p className="mono" style={{fontSize:"0.68rem", color:"var(--red)", letterSpacing:"0.3em", marginBottom:16, textTransform:"uppercase"}}>Future</p>
            <h2 style={{fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:100, letterSpacing:"-0.02em", lineHeight:1.1}}>
              次は、<span style={{color:"var(--red)"}}>火星</span>へ。
            </h2>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center"}}>
            <div className="reveal" style={{transitionDelay:"80ms"}}>
              <p style={{fontSize:"1rem", fontWeight:300, lineHeight:1.9, color:"#444", marginBottom:32}}>
                2026年、H3-24LはMMX（火星月探査機）を打ち上げる。フォボスに着陸し表面サンプルを採取、2031年に地球へ帰還——人類史上最高難度のミッションだ。
              </p>
              <p style={{fontSize:"1rem", fontWeight:300, lineHeight:1.9, color:"#444", marginBottom:40}}>
                NASA・ESA・CNES・DLRが参加する国際プロジェクト。H3はその運搬役として日本の存在感を示す。
              </p>

              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:1}}>
                {[
                  {l:"打ち上げ",  v:"2026年後半"},
                  {l:"目標天体",  v:"フォボス"},
                  {l:"地球帰還",  v:"2031年"},
                  {l:"サンプル",  v:"約 10 g"},
                ].map(({l,v})=>(
                  <div key={l} style={{padding:"18px 20px", background:"var(--bg)", border:"1px solid var(--line)"}}>
                    <div className="mono" style={{fontSize:"0.62rem", color:"var(--red)", letterSpacing:"0.15em", marginBottom:6, textTransform:"uppercase"}}>{l}</div>
                    <div style={{fontSize:"0.9rem", fontWeight:400, color:"var(--ink)"}}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{marginTop:32}}>
                <a href="https://www.jaxa.jp/projects/rockets/h3/" target="_blank" rel="noopener" style={{
                  display:"inline-block",
                  padding:"11px 28px", border:"1px solid var(--ink)",
                  fontSize:"0.75rem", letterSpacing:"0.1em",
                  color:"var(--ink)", textDecoration:"none",
                  transition:"background 0.2s, color 0.2s",
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--ink)";e.currentTarget.style.color="#fff"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.color="var(--ink)"}}
                >JAXA 公式サイト →</a>
              </div>
            </div>

            <div className="reveal" style={{transitionDelay:"160ms"}}>
              <OrbitIllustration/>
            </div>
          </div>
        </div>
      </section>


      {/* ══════ FOOTER ══════ */}
      <footer style={{borderTop:"1px solid var(--line)", padding:"40px 32px"}}>
        <div style={{maxWidth:1100, margin:"0 auto",
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16}}>
          <span className="mono" style={{fontSize:"0.9rem", letterSpacing:"0.4em", fontWeight:200, color:"var(--dim)"}}>H3</span>
          <p className="mono" style={{fontSize:"0.65rem", color:"#bbb", letterSpacing:"0.05em", textAlign:"center"}}>
            JAXA × 三菱重工業 · 日本の次世代基幹ロケット<br/>
            本サイトはH3ロケットの非公式応援サイトです
          </p>
          <p className="mono" style={{fontSize:"0.65rem", color:"#bbb"}}>© {new Date().getFullYear()} FAN SITE</p>
        </div>
      </footer>

    </div>
  );
}
