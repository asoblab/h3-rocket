"use client";

import { useEffect } from "react";
import Image from "next/image";

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
   SVG ILLUSTRATIONS
══════════════════════════════ */

/** H3ロケット — イラスト風カラー（実写真の代替） */
function RocketSVG() {
  return (
    <svg viewBox="0 0 220 600" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 200, height: "auto" }}>
      <defs>
        <linearGradient id="fairingG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d8d8d8"/>
          <stop offset="40%" stopColor="#f5f5f5"/>
          <stop offset="100%" stopColor="#e0e0e0"/>
        </linearGradient>
        <linearGradient id="bodyG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--tan)"/>
          <stop offset="35%" stopColor="#d4a574"/>
          <stop offset="65%" stopColor="#e0b882"/>
          <stop offset="100%" stopColor="#c89050"/>
        </linearGradient>
        <linearGradient id="srbG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#cccccc"/>
          <stop offset="50%" stopColor="#f0f0f0"/>
          <stop offset="100%" stopColor="#d8d8d8"/>
        </linearGradient>
        <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#aaaaaa"/>
          <stop offset="50%" stopColor="#dddddd"/>
          <stop offset="100%" stopColor="#b8b8b8"/>
        </linearGradient>
        <linearGradient id="engineG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#888"/>
          <stop offset="100%" stopColor="#555"/>
        </linearGradient>
      </defs>

      {/* ── フェアリング ── */}
      <path d="M 90 12 Q 110 2 130 12 L 138 52 L 138 88 L 82 88 L 82 52 Z"
        fill="url(#fairingG)" stroke="#c0c0c0" strokeWidth="1"/>
      {/* フェアリング先端 */}
      <path d="M 100 28 Q 110 16 120 28 L 124 44 L 96 44 Z"
        fill="#e8e8e8" stroke="#c8c8c8" strokeWidth="0.8"/>
      {/* フェアリングパネルライン */}
      <line x1="110" y1="18" x2="110" y2="86" stroke="rgba(0,0,0,0.08)" strokeWidth="0.7"/>
      <line x1="95" y1="52" x2="125" y2="52" stroke="rgba(0,0,0,0.08)" strokeWidth="0.7"/>
      {/* 小窓 */}
      <rect x="105" y="62" width="10" height="8" rx="1.5" fill="#d0d8e0" stroke="#b0b8c0" strokeWidth="0.7"/>

      {/* ── リング1（フェアリング/2段の間） ── */}
      <rect x="80" y="88" width="60" height="10" rx="1" fill="url(#ringG)" stroke="#aaa" strokeWidth="0.8"/>

      {/* ── 第2段 ── */}
      <rect x="84" y="98" width="52" height="95" fill="url(#fairingG)" stroke="#c0c0c0" strokeWidth="1"/>
      <line x1="110" y1="100" x2="110" y2="192" stroke="rgba(0,0,0,0.06)" strokeWidth="0.7"/>
      <line x1="86" y1="140" x2="134" y2="140" stroke="rgba(0,0,0,0.08)" strokeWidth="0.7"/>

      {/* ── リング2（段間部） ── */}
      <rect x="78" y="193" width="64" height="14" rx="1.5" fill="url(#ringG)" stroke="#aaa" strokeWidth="1"/>
      {/* リング2のコネクタ */}
      {[88, 100, 120, 132].map(x => (
        <rect key={x} x={x} y="196" width="5" height="8" rx="1" fill="#bbb" stroke="#aaa" strokeWidth="0.5"/>
      ))}

      {/* ── SRB 左 ── */}
      <g>
        {/* SRB本体 */}
        <path d="M 42 248 L 44 210 Q 46 198 50 198 Q 54 198 56 210 L 58 248 L 58 395 Q 56 405 54 412 L 46 412 Q 44 405 42 395 Z"
          fill="url(#srbG)" stroke="#c0c0c0" strokeWidth="1"/>
        {/* SRBキャップ */}
        <path d="M 50 198 Q 50 186 50 180 L 50 198" stroke="#c8c8c8" strokeWidth="0" fill="none"/>
        <ellipse cx="50" cy="198" rx="6" ry="10" fill="#e8e8e8" stroke="#c0c0c0" strokeWidth="1"/>
        <path d="M 44 188 Q 50 178 56 188" fill="#d8d8d8" stroke="#c0c0c0" strokeWidth="0.8"/>
        {/* SRBノズル */}
        <path d="M 44 412 Q 40 425 38 440 L 62 440 Q 60 425 56 412 Z"
          fill="url(#engineG)" stroke="#888" strokeWidth="1"/>
        <ellipse cx="50" cy="440" rx="12" ry="4" fill="none" stroke="#666" strokeWidth="1"/>
        {/* SRBの赤帯 */}
        <rect x="42" y="350" width="16" height="6" rx="1" fill="#E8002D" opacity="0.7"/>
      </g>

      {/* ── SRB 右 ── */}
      <g>
        <path d="M 162 248 L 164 210 Q 166 198 170 198 Q 174 198 176 210 L 178 248 L 178 395 Q 176 405 174 412 L 166 412 Q 164 405 162 395 Z"
          fill="url(#srbG)" stroke="#c0c0c0" strokeWidth="1"/>
        <ellipse cx="170" cy="198" rx="6" ry="10" fill="#e8e8e8" stroke="#c0c0c0" strokeWidth="1"/>
        <path d="M 164 188 Q 170 178 176 188" fill="#d8d8d8" stroke="#c0c0c0" strokeWidth="0.8"/>
        <path d="M 164 412 Q 160 425 158 440 L 182 440 Q 180 425 176 412 Z"
          fill="url(#engineG)" stroke="#888" strokeWidth="1"/>
        <ellipse cx="170" cy="440" rx="12" ry="4" fill="none" stroke="#666" strokeWidth="1"/>
        <rect x="162" y="350" width="16" height="6" rx="1" fill="#E8002D" opacity="0.7"/>
      </g>

      {/* ── 第1段（メイン） ── */}
      <rect x="70" y="207" width="80" height="215" fill="url(#bodyG)" stroke="#b07838" strokeWidth="1"/>

      {/* 第1段パネルライン */}
      <line x1="110" y1="209" x2="110" y2="420" stroke="rgba(0,0,0,0.07)" strokeWidth="0.8"/>
      {[250, 295, 340].map(y => (
        <line key={y} x1="70" y1={y} x2="150" y2={y} stroke="rgba(0,0,0,0.08)" strokeWidth="0.6"/>
      ))}

      {/* ── H3 ロゴ ── */}
      <text x="110" y="298" textAnchor="middle" fill="var(--navy)"
        fontSize="22" fontWeight="700" fontFamily="Helvetica Neue, Arial, sans-serif"
        letterSpacing="-0.5">H3</text>

      {/* 日の丸 */}
      <rect x="97" y="305" width="26" height="17" rx="1.5" fill="white" stroke="#e0e0e0" strokeWidth="0.7"/>
      <circle cx="110" cy="313.5" r="5.5" fill="#E8002D"/>

      {/* JAPAN */}
      <text x="110" y="334" textAnchor="middle" fill="var(--navy)"
        fontSize="10" fontWeight="600" fontFamily="Helvetica Neue, Arial, sans-serif"
        letterSpacing="2">JAPAN</text>

      {/* JAXAロゴ（簡略版） */}
      <text x="110" y="390" textAnchor="middle" fill="var(--navy)"
        fontSize="9" fontWeight="500" fontFamily="Helvetica Neue, Arial, sans-serif"
        letterSpacing="1.5">JAXA</text>

      {/* ── エンジン下部リング ── */}
      <rect x="68" y="422" width="84" height="12" rx="1.5" fill="url(#ringG)" stroke="#aaa" strokeWidth="1"/>

      {/* ── LE-9 エンジン × 2 ── */}
      {[90, 130].map((cx, i) => (
        <g key={i}>
          <path d={`M ${cx-12} 434 Q ${cx-15} 454 ${cx-18} 472 L ${cx+18} 472 Q ${cx+15} 454 ${cx+12} 434 Z`}
            fill="url(#engineG)" stroke="#777" strokeWidth="1"/>
          <ellipse cx={cx} cy="472" rx="18" ry="5" fill="#444" stroke="#666" strokeWidth="0.8"/>
          {/* ノズル内側 */}
          <ellipse cx={cx} cy="471" rx="13" ry="3.5" fill="#333"/>
        </g>
      ))}

      {/* ── 炎 ── */}
      <path d="M 74 472 Q 90 510 110 530 Q 130 510 146 472 Z" fill="#E8002D" opacity="0.12"/>
      <path d="M 80 472 Q 90 504 110 520 Q 130 504 140 472 Z" fill="#E8002D" opacity="0.2"/>
      <path d="M 84 472 Q 92 500 110 515 Q 128 500 136 472 Z" fill="#ff8020" opacity="0.15"/>

      {/* SRB炎 */}
      <path d="M 40 440 Q 50 462 50 475 Q 50 462 60 440 Z" fill="#E8002D" opacity="0.15"/>
      <path d="M 160 440 Q 170 462 170 475 Q 170 462 180 440 Z" fill="#E8002D" opacity="0.15"/>

      {/* ── SRB接続アーム ── */}
      <line x1="58" y1="280" x2="70" y2="295" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="162" y1="280" x2="150" y2="295" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="58" y1="360" x2="70" y2="370" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="162" y1="360" x2="150" y2="370" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/** 軌道イラスト */
function OrbitIllustration() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}>
      <defs>
        <style>{`
          @keyframes sp1 { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes sp2 { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
          .orb1 { animation: sp1 18s linear infinite; transform-origin: 110px 150px; }
          .orb2 { animation: sp2 9s linear infinite; transform-origin: 320px 150px; }
        `}</style>
      </defs>

      {/* 太陽 */}
      <circle cx="28" cy="150" r="20" fill="#fff8e0" stroke="#e8c840" strokeWidth="1.5"/>
      <text x="28" y="154" textAnchor="middle" fill="#b09020" fontSize="7" fontFamily="monospace">SUN</text>

      {/* 地球軌道 */}
      <ellipse cx="110" cy="150" rx="50" ry="18" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
      {/* 地球 */}
      <circle cx="110" cy="150" r="16" fill="#dce8ff" stroke="#7799cc" strokeWidth="1.2"/>
      <text x="110" y="154" textAnchor="middle" fill="#3355aa" fontSize="7" fontFamily="monospace">EARTH</text>
      {/* 月 */}
      <g className="orb1">
        <circle cx="160" cy="150" r="5" fill="#f0f0f0" stroke="#bbb" strokeWidth="1"/>
      </g>

      {/* ホーマン遷移軌道 */}
      <path d="M 110 133 Q 215 38 320 118" fill="none"
        stroke="#E8002D" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.55"/>
      <polygon points="316,113 326,121 314,126" fill="#E8002D" opacity="0.55"/>

      {/* 火星軌道 */}
      <ellipse cx="320" cy="150" rx="80" ry="28" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
      {/* 火星 */}
      <circle cx="320" cy="150" r="20" fill="#ffe0d0" stroke="#cc6644" strokeWidth="1.2"/>
      <text x="320" y="154" textAnchor="middle" fill="#993322" fontSize="7" fontFamily="monospace">MARS</text>
      {/* フォボス */}
      <g className="orb2">
        <ellipse cx="400" cy="150" rx="7" ry="5" fill="#e8e0d8" stroke="#bbb" strokeWidth="1"/>
        <text x="410" y="138" fill="#998877" fontSize="6.5" fontFamily="monospace">PHOBOS</text>
      </g>

      {/* MMX探査機 */}
      <g transform="translate(218,72)">
        <rect x="-6" y="-4" width="12" height="8" rx="1" fill="#555"/>
        <rect x="-18" y="-2" width="11" height="4" rx="0.5" fill="#7799bb" stroke="#5577aa" strokeWidth="0.6"/>
        <rect x="7" y="-2" width="11" height="4" rx="0.5" fill="#7799bb" stroke="#5577aa" strokeWidth="0.6"/>
        <text x="0" y="18" textAnchor="middle" fill="#E8002D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">MMX</text>
      </g>

      {/* 凡例 */}
      <line x1="380" y1="16" x2="400" y2="16" stroke="#E8002D" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.6"/>
      <text x="405" y="20" fill="#888" fontSize="8" fontFamily="monospace">Transfer orbit</text>
      <line x1="380" y1="30" x2="400" y2="30" stroke="#ccc" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="405" y="34" fill="#888" fontSize="8" fontFamily="monospace">Orbit</text>
    </svg>
  );
}

/** スペックアイコン */
function SpecIcon({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "var(--tan)", marginBottom: 14 }}>{children}</div>;
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
    { year:"2014",   text:"開発正式決定。予算約2,000億円。三菱重工がプライム契約社に。" },
    { year:"2017",   text:"LE-9エンジン燃焼試験開始。エキスパンダーブリードサイクルに世界初挑戦。" },
    { year:"2020",   text:"タービンブレード亀裂を発見。設計を抜本的に見直し全面再設計へ。" },
    { year:"2023.02",text:"初の打ち上げ試み。直前に電気系統の問題で中止。" },
    { year:"2023.03",text:"試験機1号機、第2段エンジン不着火。「だいち3号」喪失。指令破壊。" },
    { year:"2024.02",text:"試験機2号機、同じ2月17日に軌道投入に成功。H3、初の快挙。", accent:true },
    { year:"2024〜", text:"F3・F4・F5・F7と連続成功。日本の宇宙インフラとして本格稼働。", accent:true },
  ];

  const TECH = [
    { n:"01", title:"LE-9 エンジン",    body:"エキスパンダーブリードサイクルを大型エンジンに世界初採用。補助燃焼器をなくし部品点数を20%削減。3Dプリンティングで複数部品を一体化。推力147 tf、比推力426秒。" },
    { n:"02", title:"民生グレード部品", body:"全部品の約90%に一般産業向け部品を採用。宇宙専用規格の呪縛を解き放ち、村田製作所などの量産技術を活用。コストと品質を同時に改善する調達革命。" },
    { n:"03", title:"柔軟な打ち上げ構成",body:"H3-22S/H3-30S/H3-24L など6種類以上の構成。LE-9を2〜3基、SRB-3を0〜4本の組み合わせで低軌道から月遷移軌道まで対応。" },
  ];

  const resultBadge = (r: string) => {
    if (r === "success") return { color:"#1a6a3a", bg:"#eaf5ee", border:"1px solid #b8ddc8", label:"成功" };
    if (r === "abort")   return { color:"#7a5500", bg:"#fff8e0", border:"1px solid #e0cc70", label:"中止" };
    return { color:"#b00020", bg:"#fff0f2", border:"1px solid #f0b8c0", label:"失敗" };
  };

  const S = {
    container: { maxWidth:1060, margin:"0 auto", padding:"0 36px" } as React.CSSProperties,
    section: { padding:"88px 0" } as React.CSSProperties,
    eyebrow: { fontSize:"0.68rem", letterSpacing:"0.32em", textTransform:"uppercase" as const, color:"var(--tan)", fontFamily:"'SF Mono','Fira Code',monospace", marginBottom:16 },
    h2: { fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:200, letterSpacing:"-0.01em", lineHeight:1.15, color:"var(--navy)" },
    body: { fontSize:"0.95rem", fontWeight:300, lineHeight:1.9, color:"#5a5248" },
  };

  return (
    <div style={{ background:"var(--bg)" }}>

      {/* ══ NAV ══ */}
      <header style={{
        position:"sticky", top:0, zIndex:100,
        background:"rgba(250,250,248,0.95)", backdropFilter:"blur(12px)",
        borderBottom:"1px solid var(--line)",
      }}>
        <div style={{...S.container, height:54, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span className="mono" style={{fontSize:"0.9rem", letterSpacing:"0.45em", fontWeight:400, color:"var(--navy)"}}>H3</span>
          <nav style={{display:"flex", gap:28}}>
            {[["#story","沿革"],["#tech","技術"],["#launches","記録"],["#future","未来"]].map(([href,label])=>(
              <a key={href} href={href} style={{
                fontSize:"0.78rem", color:"var(--dim)", textDecoration:"none",
                letterSpacing:"0.04em", transition:"color 0.2s",
              }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--ink)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--dim)")}
              >{label}</a>
            ))}
          </nav>
        </div>
      </header>


      {/* ══ HERO ══ */}
      <section style={{ ...S.section, paddingTop:72, paddingBottom:80 }}>
        <div style={{ ...S.container, display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>

          {/* テキスト */}
          <div style={{ animation:"fadeUp 0.9s ease both" }}>
            <p style={S.eyebrow}>Japan H3 Launch Vehicle</p>

            <h1 style={{
              fontSize:"clamp(4.5rem,11vw,8.5rem)", fontWeight:100,
              letterSpacing:"-0.04em", lineHeight:0.9,
              color:"var(--navy)", marginBottom:28,
            }}>H3</h1>


            <p style={{
              ...S.body,
              fontSize:"clamp(1rem,1.8vw,1.15rem)",
              maxWidth:420, marginBottom:36,
            }}>
              日本の次世代基幹ロケット。<br/>
              H-IIAの後継として、打ち上げコストの半減と<br/>
              高い信頼性の両立を目標に開発された。
            </p>

            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              {[
                { href:"#story", label:"沿革を読む", primary:false },
                { href:"#launches", label:"打ち上げ記録", primary:true },
              ].map(({href,label,primary})=>(
                <a key={href} href={href} style={{
                  padding:"10px 26px",
                  border: primary ? "1.5px solid var(--tan)" : "1.5px solid #ccc",
                  fontSize:"0.76rem", letterSpacing:"0.08em",
                  color: primary ? "var(--tan)" : "#666",
                  textDecoration:"none",
                  borderRadius:2,
                  transition:"background 0.2s, color 0.2s",
                }}
                  onMouseEnter={e=>{
                    e.currentTarget.style.background = primary ? "var(--tan)" : "#111";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = primary ? "var(--tan)" : "#111";
                  }}
                  onMouseLeave={e=>{
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.color = primary ? "var(--tan)" : "#666";
                    e.currentTarget.style.borderColor = primary ? "var(--tan)" : "#ccc";
                  }}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* ロケットイラスト */}
          <div style={{ animation:"fadeUp 1s 0.1s ease both", display:"flex", alignItems:"center", justifyContent:"center" }}>
            {/* 実際の画像があれば表示、なければSVGで代替 */}
            <RocketWithFallback/>
          </div>
        </div>
      </section>


      {/* ══ SPECS ══ */}
      <section style={{ background:"var(--bg2)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)" }}>
        <div style={{ ...S.container }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
            {[
              { v:"63",  u:"m",    l:"全高",             desc:"H-IIAより10m高く" },
              { v:"574", u:"t",    l:"離昇重量",          desc:"H3-24L 最大構成" },
              { v:"6.5", u:"t",    l:"GTO 投入能力",      desc:"静止トランスファ軌道" },
              { v:"50",  u:"%",    l:"コスト削減目標",    desc:"H-IIAの約100億円から" },
            ].map(({v,u,l,desc},i)=>(
              <div key={i} className="reveal" style={{
                transitionDelay:`${i*70}ms`,
                padding:"40px 28px",
                borderRight: i<3 ? "1px solid var(--line)" : "none",
              }}>
                <div style={{
                  fontSize:"clamp(2.2rem,4vw,3rem)", fontWeight:100,
                  letterSpacing:"-0.04em", lineHeight:1, color:"var(--navy)",
                  marginBottom:6,
                }}>
                  {v}<span style={{fontSize:"0.42em", color:"var(--tan)", marginLeft:4}}>{u}</span>
                </div>
                <div style={{fontSize:"0.82rem", fontWeight:500, color:"var(--ink)", marginBottom:4}}>{l}</div>
                <div className="mono" style={{fontSize:"0.62rem", color:"var(--dim)", letterSpacing:"0.04em"}}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ STORY ══ */}
      <section id="story" style={{...S.section, scrollMarginTop:54}}>
        <div style={S.container}>
          <div className="reveal" style={{marginBottom:52}}>
            <p style={S.eyebrow}>Story</p>
            <h2 style={S.h2}>10年間の挑戦。</h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"start" }}>
            <div className="reveal" style={{transitionDelay:"80ms"}}>
              <p style={{...S.body, marginBottom:20}}>
                H3は2014年に開発が正式決定された。H-IIAの後継として、打ち上げコストの抜本的削減と高い信頼性の両立を目標に掲げた野心的プロジェクトだ。
              </p>
              <p style={{...S.body, marginBottom:20}}>
                だが道のりは平坦ではなかった。2023年3月、試験機1号機は第2段エンジンが着火せず、指令破壊。「だいち3号」を喪失した。
              </p>
              <p style={{...S.body, marginBottom:36}}>
                それでもJAXAと三菱重工は諦めなかった。徹底的な原因究明と改良を重ね、2024年2月17日——奇しくも失敗から1年後の同じ日に——試験機2号機が初の軌道投入に成功した。
              </p>
              <div style={{
                padding:"22px 26px",
                background:"var(--bg2)",
                borderLeft:"3px solid var(--tan)",
              }}>
                <p style={{fontSize:"1rem", fontWeight:300, lineHeight:1.75, color:"#4a4038", fontStyle:"italic"}}>
                  "失敗はロケット開発の一部だ。<br/>諦めないことが、日本の真骨頂である。"
                </p>
              </div>
            </div>

            {/* タイムライン */}
            <div className="reveal" style={{transitionDelay:"150ms"}}>
              {HISTORY.map((h, i) => (
                <div key={i} style={{
                  display:"grid", gridTemplateColumns:"14px 1fr", gap:18, marginBottom:24,
                }}>
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", paddingTop:3}}>
                    <div style={{
                      width:12, height:12, borderRadius:"50%", flexShrink:0,
                      background: h.accent ? "var(--tan)" : "white",
                      border: h.accent ? "2px solid var(--tan)" : "2px solid #ccc",
                    }}/>
                    {i < HISTORY.length - 1 && (
                      <div style={{width:1, flex:1, background:"var(--line)", marginTop:4}}/>
                    )}
                  </div>
                  <div style={{paddingBottom:4}}>
                    <p className="mono" style={{
                      fontSize:"0.65rem", letterSpacing:"0.1em",
                      color: h.accent ? "var(--tan)" : "var(--dim)",
                      marginBottom:5,
                    }}>{h.year}</p>
                    <p style={{
                      fontSize:"0.88rem",
                      fontWeight: h.accent ? 400 : 300,
                      lineHeight:1.7,
                      color: h.accent ? "var(--ink)" : "#555",
                    }}>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══ TECH ══ */}
      <section id="tech" style={{
        ...S.section,
        background:"var(--bg2)",
        borderTop:"1px solid var(--line)",
        scrollMarginTop:54,
      }}>
        <div style={S.container}>
          <div className="reveal" style={{marginBottom:52}}>
            <p style={S.eyebrow}>Technology</p>
            <h2 style={S.h2}>技術革新の核心。</h2>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2}}>
            {TECH.map((t,i)=>(
              <div key={i} className="reveal" style={{
                transitionDelay:`${i*90}ms`,
                background:"var(--bg)", padding:"36px 32px",
                borderTop:"2px solid var(--tan)",
              }}>
                <p className="mono" style={{fontSize:"0.65rem", color:"var(--tan)", letterSpacing:"0.2em", marginBottom:16}}>{t.n}</p>
                <h3 style={{fontSize:"1.05rem", fontWeight:500, color:"var(--navy)", marginBottom:14, letterSpacing:"0.01em"}}>{t.title}</h3>
                <p style={{...S.body, fontSize:"0.88rem"}}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ LAUNCHES ══ */}
      <section id="launches" style={{...S.section, scrollMarginTop:54}}>
        <div style={S.container}>
          <div className="reveal" style={{marginBottom:16}}>
            <p style={S.eyebrow}>Launch Record</p>
            <div style={{display:"flex", alignItems:"flex-end", gap:40, flexWrap:"wrap", marginBottom:44}}>
              <h2 style={S.h2}>打ち上げ記録。</h2>
              <div style={{display:"flex", gap:32, paddingBottom:4}}>
                {[
                  {v:LAUNCHES.filter(l=>l.result==="success").length, l:"成功"},
                  {v:LAUNCHES.filter(l=>l.result==="failure").length, l:"失敗"},
                  {v:LAUNCHES.length, l:"合計"},
                ].map(({v,l})=>(
                  <div key={l}>
                    <div style={{fontSize:"2.2rem", fontWeight:100, lineHeight:1, letterSpacing:"-0.04em", color:"var(--navy)"}}>{v}</div>
                    <div className="mono" style={{fontSize:"0.62rem", color:"var(--dim)", letterSpacing:"0.1em", marginTop:5}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal" style={{borderTop:"1px solid var(--line)"}}>
            {LAUNCHES.map((l) => {
              const b = resultBadge(l.result);
              return (
                <div key={l.id} style={{
                  display:"grid", gridTemplateColumns:"68px 1fr auto",
                  borderBottom:"1px solid var(--line)", padding:"16px 4px",
                  gap:20, alignItems:"center",
                  transition:"background 0.15s",
                }}
                  onMouseEnter={e=>(e.currentTarget.style.background="var(--bg2)")}
                  onMouseLeave={e=>(e.currentTarget.style.background="")}
                >
                  <span className="mono" style={{fontSize:"0.65rem", color:"var(--dim)", letterSpacing:"0.08em"}}>{l.id}</span>
                  <div>
                    <div style={{fontSize:"0.93rem", fontWeight:400, color:"var(--ink)", marginBottom:3}}>{l.name}</div>
                    <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
                      <span className="mono" style={{fontSize:"0.65rem", color:"var(--dim)"}}>{l.date}</span>
                      <span style={{fontSize:"0.8rem", color:"#8a7e72"}}>{l.note}</span>
                    </div>
                  </div>
                  <span style={{
                    fontSize:"0.65rem", padding:"4px 12px", borderRadius:2,
                    color:b.color, background:b.bg, border:b.border,
                    fontWeight:500, letterSpacing:"0.04em", whiteSpace:"nowrap",
                  }}>{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══ FUTURE ══ */}
      <section id="future" style={{
        ...S.section,
        background:"var(--bg2)",
        borderTop:"1px solid var(--line)",
        scrollMarginTop:54,
      }}>
        <div style={S.container}>
          <div className="reveal" style={{marginBottom:52}}>
            <p style={S.eyebrow}>Future</p>
            <h2 style={S.h2}>次は、<span style={{color:"var(--red)"}}>火星</span>へ。</h2>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center"}}>
            <div className="reveal" style={{transitionDelay:"80ms"}}>
              <p style={{...S.body, marginBottom:20}}>
                2026年、H3-24LはMMX（火星月探査機）を打ち上げる。フォボスに着陸し表面サンプルを採取、2031年に地球へ帰還——人類史上最高難度のミッションだ。
              </p>
              <p style={{...S.body, marginBottom:36}}>
                NASA・ESA・CNES・DLRが参加する国際プロジェクト。H3はその運搬役として日本の存在感を示す。
              </p>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, marginBottom:32}}>
                {[
                  {l:"打ち上げ",v:"2026年後半"},
                  {l:"目標天体",v:"フォボス"},
                  {l:"地球帰還",v:"2031年"},
                  {l:"サンプル", v:"約 10 g"},
                ].map(({l,v})=>(
                  <div key={l} style={{padding:"16px 20px", background:"var(--bg)", border:"1px solid var(--line)"}}>
                    <div className="mono" style={{fontSize:"0.6rem", color:"var(--tan)", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:5}}>{l}</div>
                    <div style={{fontSize:"0.9rem", fontWeight:400, color:"var(--ink)"}}>{v}</div>
                  </div>
                ))}
              </div>
              <a href="https://www.jaxa.jp/projects/rockets/h3/" target="_blank" rel="noopener" style={{
                display:"inline-block", padding:"10px 26px",
                border:"1.5px solid var(--line)", borderRadius:2,
                fontSize:"0.76rem", letterSpacing:"0.08em",
                color:"var(--dim)", textDecoration:"none",
                transition:"all 0.2s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="#111";e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="#111"}}
                onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.color="#666";e.currentTarget.style.borderColor="#ccc"}}
              >JAXA 公式サイト →</a>
            </div>

            <div className="reveal" style={{transitionDelay:"160ms"}}>
              <OrbitIllustration/>
            </div>
          </div>
        </div>
      </section>


      {/* ══ FOOTER ══ */}
      <footer style={{borderTop:"1px solid var(--line)", padding:"36px 0"}}>
        <div style={{
          ...S.container,
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16,
        }}>
          <span className="mono" style={{fontSize:"0.85rem", letterSpacing:"0.4em", fontWeight:400, color:"var(--navy)"}}>H3</span>
          <p className="mono" style={{fontSize:"0.62rem", color:"#c8bfb4", letterSpacing:"0.04em", textAlign:"center"}}>
            JAXA × 三菱重工業 · 日本の次世代基幹ロケット<br/>
            本サイトはH3ロケットの非公式応援サイトです
          </p>
          <p className="mono" style={{fontSize:"0.62rem", color:"#c8bfb4"}}>© {new Date().getFullYear()} FAN SITE</p>
        </div>
      </footer>

    </div>
  );
}

/** ロケット画像 */
function RocketWithFallback() {
  return (
    <Image
      src="/images/rocket-illust.png"
      alt="H3ロケット"
      width={900}
      height={1680}
      style={{ objectFit:"contain", width:"auto", height:1440, maxWidth:840 }}
      priority
    />
  );
}
