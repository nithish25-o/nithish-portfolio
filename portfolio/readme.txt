!DOCTYPE html
html lang=en
head
meta charset=UTF-8
meta name=viewport content=width=device-width, initial-scale=1.0
titleNITHISH_KS  PORTFOLIO_OS v1.0title
link rel=preconnect href=httpsfonts.googleapis.com
link rel=preconnect href=httpsfonts.gstatic.com crossorigin
link href=httpsfonts.googleapis.comcss2family=JetBrains+Monoital,wght@0,100..800;1,100..800&family=Bebas+Neue&family=Oxaniumwght@200..800&display=swap rel=stylesheet
style
  root {
    --bg       #080c0a;
    --bg2      #0d1410;
    --bg3      #111a13;
    --border   #1a2e1e;
    --green    #00ff6a;
    --green2   #00cc55;
    --green3   #39ff7a;
    --cyan     #00e5ff;
    --cyan2    #00b8cc;
    --amber    #ffb300;
    --amber2   #ff8f00;
    --red      #ff2d55;
    --dim      #2a3d2e;
    --text     #b8d4bc;
    --text2    #7a9980;
    --font-mono 'JetBrains Mono', monospace;
    --font-disp 'Bebas Neue', sans-serif;
    --font-ui   'Oxanium', sans-serif;
  }

  , before, after { box-sizing border-box; margin 0; padding 0; }

  html { scroll-behavior smooth; }

  body {
    background var(--bg);
    color var(--text);
    font-family var(--font-mono);
    font-size 14px;
    overflow-x hidden;
    cursor none;
  }

   ─── CUSTOM CURSOR ─────────────────────────────────── 
  #cursor {
    position fixed;
    width 12px; height 12px;
    background var(--green);
    border-radius 50%;
    pointer-events none;
    z-index 9999;
    transform translate(-50%, -50%);
    transition transform .08s, background .2s;
    box-shadow 0 0 8px var(--green), 0 0 20px var(--green2);
    mix-blend-mode screen;
  }
  #cursor-trail {
    position fixed;
    width 30px; height 30px;
    border 1px solid var(--green2);
    border-radius 50%;
    pointer-events none;
    z-index 9998;
    transform translate(-50%, -50%);
    transition transform .18s, left .18s, top .18s;
    opacity 0.4;
  }

   ─── SCANLINES OVERLAY ─────────────────────────────── 
  bodybefore {
    content '';
    position fixed; inset 0;
    background repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,.18) 2px,
      rgba(0,0,0,.18) 4px
    );
    pointer-events none;
    z-index 1000;
    animation scanMove 8s linear infinite;
  }
  @keyframes scanMove {
    0%   { background-position 0 0; }
    100% { background-position 0 100px; }
  }

   ─── BIOS BOOT SCREEN ──────────────────────────────── 
  #bios {
    position fixed; inset 0;
    background #000;
    z-index 5000;
    display flex;
    flex-direction column;
    padding 32px 40px;
    font-family var(--font-mono);
    font-size 13px;
    color #c8c8c8;
    overflow hidden;
  }
  #bios .bios-line { opacity 0; }
  #bios .bios-bar-wrap {
    margin-top 24px;
    width 340px;
  }
  #bios .bios-bar-label { color #aaa; margin-bottom 4px; font-size 12px; }
  #bios .bios-bar {
    height 10px;
    background #111;
    border 1px solid #333;
    position relative;
    overflow hidden;
  }
  #bios .bios-bar-fill {
    height 100%;
    width 0%;
    background var(--green);
    box-shadow 0 0 8px var(--green);
    transition width .04s linear;
  }
  .bios-green  { color var(--green); }
  .bios-cyan   { color var(--cyan); }
  .bios-amber  { color var(--amber); }

   ─── NAVBAR ────────────────────────────────────────── 
  #navbar {
    position fixed;
    top 0; left 0; right 0;
    height 44px;
    background rgba(8,12,10,.95);
    border-bottom 1px solid var(--border);
    display flex;
    align-items center;
    padding 0 24px;
    z-index 900;
    gap 8px;
    backdrop-filter blur(8px);
  }
  .nav-logo {
    font-family var(--font-disp);
    font-size 18px;
    color var(--green);
    letter-spacing 3px;
    text-shadow 0 0 12px var(--green2);
    margin-right 8px;
  }
  .nav-sep { color var(--dim); margin 0 4px; }
  .nav-links { display flex; gap 2px; flex 1; }
  .nav-link {
    font-family var(--font-mono);
    font-size 11px;
    color var(--text2);
    text-decoration none;
    padding 4px 10px;
    border 1px solid transparent;
    border-radius 2px;
    transition all .2s;
    letter-spacing .5px;
  }
  .nav-linkhover {
    color var(--green);
    border-color var(--green);
    background rgba(0,255,106,.06);
    text-shadow 0 0 8px var(--green);
  }
  .nav-linkbefore { content '.'; color var(--dim); }
  .nav-status {
    display flex;
    align-items center;
    gap 16px;
    margin-left auto;
    font-size 11px;
  }
  .status-dot {
    width 6px; height 6px;
    background var(--green);
    border-radius 50%;
    box-shadow 0 0 6px var(--green);
    animation pulse 2s infinite;
  }
  @keyframes pulse {
    0%,100% { opacity 1; transform scale(1); }
    50%      { opacity .5; transform scale(1.3); }
  }
  #live-clock { color var(--amber); font-size 11px; letter-spacing 1px; }

   ─── GLITCH UTILITY ────────────────────────────────── 
  .glitch {
    position relative;
    display inline-block;
  }
  .glitchbefore,
  .glitchafter {
    content attr(data-text);
    position absolute;
    top 0; left 0;
    width 100%;
    overflow hidden;
  }
  .glitchbefore {
    color var(--cyan);
    animation glitch1 3.5s infinite;
    clip-path polygon(0 30%, 100% 30%, 100% 55%, 0 55%);
  }
  .glitchafter {
    color var(--red);
    animation glitch2 3.5s infinite;
    clip-path polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  }
  @keyframes glitch1 {
    0%,94%,100% { transform translate(0,0); opacity 0; }
    95%          { transform translate(-3px,1px); opacity .7; }
    97%          { transform translate(3px,-1px); opacity .7; }
  }
  @keyframes glitch2 {
    0%,92%,100% { transform translate(0,0); opacity 0; }
    93%          { transform translate(3px,2px); opacity .6; }
    96%          { transform translate(-2px,-2px); opacity .6; }
  }

   ─── SECTION BASE ──────────────────────────────────── 
  section {
    padding 80px 0;
    position relative;
  }
  .container {
    max-width 1100px;
    margin 0 auto;
    padding 0 32px;
  }
  .section-header {
    margin-bottom 48px;
  }
  .section-tag {
    font-family var(--font-mono);
    font-size 11px;
    color var(--green2);
    letter-spacing 3px;
    margin-bottom 8px;
  }
  .section-title {
    font-family var(--font-disp);
    font-size 52px;
    letter-spacing 4px;
    line-height 1;
    color #e0ffe8;
  }
  .section-line {
    margin-top 10px;
    width 80px;
    height 2px;
    background linear-gradient(90deg, var(--green), transparent);
  }

   ─── HERO ──────────────────────────────────────────── 
  #hero {
    min-height 100vh;
    display flex;
    align-items center;
    padding-top 44px;
    position relative;
    overflow hidden;
  }
   Grid bg 
  #herobefore {
    content '';
    position absolute; inset 0;
    background-image
      linear-gradient(rgba(0,255,106,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,255,106,.04) 1px, transparent 1px);
    background-size 40px 40px;
    pointer-events none;
  }
   Radial glow 
  #heroafter {
    content '';
    position absolute;
    top 50%; left 40%;
    transform translate(-50%, -50%);
    width 700px; height 700px;
    background radial-gradient(circle, rgba(0,255,106,.05) 0%, transparent 70%);
    pointer-events none;
  }
  .hero-inner {
    display grid;
    grid-template-columns 1fr 1fr;
    gap 64px;
    align-items center;
    width 100%;
  }
  .hero-eyebrow {
    font-size 12px;
    color var(--cyan);
    letter-spacing 4px;
    margin-bottom 12px;
  }
  .hero-eyebrow span { color var(--dim); }
  .hero-name {
    font-family var(--font-disp);
    font-size clamp(52px, 7vw, 96px);
    line-height .95;
    letter-spacing 5px;
    color #ffffff;
    text-shadow 0 0 40px rgba(0,255,106,.2);
    margin-bottom 16px;
  }
  .hero-role {
    font-family var(--font-ui);
    font-size 20px;
    color var(--amber);
    font-weight 600;
    letter-spacing 3px;
    margin-bottom 24px;
  }
  .hero-desc {
    font-size 13px;
    color var(--text2);
    line-height 1.8;
    max-width 420px;
    margin-bottom 36px;
  }
  .hero-links {
    display flex;
    gap 12px;
    flex-wrap wrap;
  }
  .btn {
    font-family var(--font-mono);
    font-size 12px;
    padding 10px 20px;
    border-radius 2px;
    text-decoration none;
    letter-spacing 1px;
    transition all .2s;
    border 1px solid;
    cursor none;
  }
  .btn-primary {
    background var(--green);
    color #000;
    border-color var(--green);
    font-weight 700;
  }
  .btn-primaryhover {
    background var(--green3);
    box-shadow 0 0 20px var(--green2);
  }
  .btn-ghost {
    background transparent;
    color var(--cyan);
    border-color var(--cyan2);
  }
  .btn-ghosthover {
    background rgba(0,229,255,.08);
    box-shadow 0 0 16px rgba(0,229,255,.2);
  }

   ─── TERMINAL WIDGET ───────────────────────────────── 
  .terminal-box {
    background rgba(0,0,0,.7);
    border 1px solid var(--border);
    border-radius 4px;
    overflow hidden;
    box-shadow 0 0 40px rgba(0,0,0,.6), 0 0 1px var(--green2) inset;
    position relative;
  }
  .terminal-boxbefore {
    content '';
    position absolute; top 0; left 0; right 0;
    height 1px;
    background linear-gradient(90deg, transparent, var(--green2), transparent);
    animation scanH 3s ease-in-out infinite;
  }
  @keyframes scanH {
    0%,100% { opacity 0; }
    50%      { opacity 1; }
  }
  .terminal-titlebar {
    background var(--bg3);
    border-bottom 1px solid var(--border);
    padding 8px 14px;
    display flex;
    align-items center;
    gap 8px;
    font-size 11px;
    color var(--text2);
  }
  .tb-dot {
    width 10px; height 10px;
    border-radius 50%;
  }
  .tb-dot-r { background var(--red);   box-shadow 0 0 4px var(--red); }
  .tb-dot-y { background var(--amber); box-shadow 0 0 4px var(--amber); }
  .tb-dot-g { background var(--green); box-shadow 0 0 4px var(--green); }
  .terminal-title { margin-left 6px; }
  .terminal-body {
    padding 20px;
    min-height 240px;
    font-size 13px;
    line-height 1.8;
  }
  .t-line { margin-bottom 2px; }
  .t-prompt { color var(--green); }
  .t-path   { color var(--cyan2); }
  .t-cmd    { color #fff; }
  .t-out    { color var(--text2); }
  .t-key    { color var(--amber); }
  .t-val    { color var(--green); }
  #typed-output { display inline; }
  .cursor-blink {
    display inline-block;
    width 8px; height 14px;
    background var(--green);
    vertical-align text-bottom;
    animation blink .7s step-end infinite;
  }
  @keyframes blink { 0%,100%{opacity1} 50%{opacity0} }

   ─── STATS ROW ─────────────────────────────────────── 
  .stats-row {
    display flex;
    gap 2px;
    margin-top 32px;
  }
  .stat-item {
    flex 1;
    background var(--bg3);
    border 1px solid var(--border);
    padding 16px;
    text-align center;
    position relative;
    overflow hidden;
  }
  .stat-itembefore {
    content '';
    position absolute; bottom 0; left 0; right 0;
    height 2px;
    background var(--green2);
    transform scaleX(0);
    transition transform .3s;
  }
  .stat-itemhoverbefore { transform scaleX(1); }
  .stat-num {
    font-family var(--font-disp);
    font-size 32px;
    color var(--green);
    text-shadow 0 0 12px var(--green2);
  }
  .stat-lbl {
    font-size 10px;
    color var(--text2);
    letter-spacing 2px;
    margin-top 2px;
  }

   ─── SKILLS SECTION ────────────────────────────────── 
  #skills { background var(--bg2); }
  .skills-grid {
    display grid;
    grid-template-columns repeat(auto-fill, minmax(160px, 1fr));
    gap 12px;
  }
  .skill-card {
    background var(--bg);
    border 1px solid var(--border);
    padding 20px 16px;
    border-radius 2px;
    position relative;
    overflow hidden;
    transition all .25s;
    cursor none;
  }
  .skill-cardafter {
    content '';
    position absolute;
    top 0; left 0; right 0;
    height 2px;
    background linear-gradient(90deg, var(--green), var(--cyan));
    transform scaleX(0);
    transform-origin left;
    transition transform .3s;
  }
  .skill-cardhover { border-color var(--green); background rgba(0,255,106,.03); transform translateY(-2px); }
  .skill-cardhoverafter { transform scaleX(1); }
  .skill-icon { font-size 22px; margin-bottom 10px; }
  .skill-name {
    font-family var(--font-ui);
    font-size 13px;
    font-weight 600;
    color #e0ffe8;
    margin-bottom 10px;
    letter-spacing 1px;
  }
  .skill-bar-bg {
    height 3px;
    background var(--dim);
    border-radius 2px;
    overflow hidden;
  }
  .skill-bar-fill {
    height 100%;
    background linear-gradient(90deg, var(--green), var(--cyan));
    width 0%;
    transition width 1.2s ease;
    box-shadow 0 0 6px var(--green2);
  }
  .skill-pct {
    font-size 10px;
    color var(--text2);
    margin-top 4px;
    text-align right;
  }

   ─── EXPERIENCE ────────────────────────────────────── 
  .timeline {
    position relative;
    padding-left 40px;
  }
  .timelinebefore {
    content '';
    position absolute;
    left 10px; top 0; bottom 0;
    width 1px;
    background linear-gradient(180deg, var(--green2), transparent);
  }
  .tl-item {
    position relative;
    margin-bottom 40px;
  }
  .tl-dot {
    position absolute;
    left -34px;
    top 4px;
    width 12px; height 12px;
    background var(--bg);
    border 2px solid var(--green);
    border-radius 50%;
    box-shadow 0 0 8px var(--green2);
  }
  .tl-dot.active { background var(--green); animation pulse 2s infinite; }
  .tl-card {
    background var(--bg3);
    border 1px solid var(--border);
    padding 24px;
    border-radius 2px;
    transition border-color .2s;
  }
  .tl-cardhover { border-color var(--green2); }
  .tl-date {
    font-size 11px;
    color var(--amber);
    letter-spacing 2px;
    margin-bottom 8px;
  }
  .tl-title {
    font-family var(--font-ui);
    font-size 16px;
    font-weight 700;
    color #fff;
    margin-bottom 4px;
  }
  .tl-org {
    font-size 12px;
    color var(--cyan);
    margin-bottom 12px;
  }
  .tl-desc {
    font-size 12px;
    color var(--text2);
    line-height 1.8;
  }
  .tl-badge {
    display inline-block;
    margin-top 12px;
    padding 3px 10px;
    background rgba(0,255,106,.08);
    border 1px solid var(--green2);
    color var(--green);
    font-size 10px;
    letter-spacing 1.5px;
    border-radius 2px;
  }

   ─── PROJECTS ──────────────────────────────────────── 
  #projects { background var(--bg2); }
  .projects-grid {
    display grid;
    grid-template-columns repeat(auto-fill, minmax(300px, 1fr));
    gap 16px;
  }
  .proj-card {
    background var(--bg);
    border 1px solid var(--border);
    padding 28px;
    border-radius 2px;
    position relative;
    overflow hidden;
    transition all .25s;
    cursor none;
  }
  .proj-cardbefore {
    content '';
    position absolute;
    inset 0;
    background linear-gradient(135deg, rgba(0,255,106,.03), transparent 60%);
    opacity 0;
    transition opacity .3s;
  }
  .proj-cardhover { border-color var(--cyan2); transform translateY(-3px); }
  .proj-cardhoverbefore { opacity 1; }
  .proj-num {
    font-family var(--font-disp);
    font-size 48px;
    color var(--border);
    line-height 1;
    margin-bottom 8px;
    transition color .2s;
  }
  .proj-cardhover .proj-num { color rgba(0,229,255,.15); }
  .proj-title {
    font-family var(--font-ui);
    font-size 16px;
    font-weight 700;
    color #e0ffe8;
    margin-bottom 10px;
    letter-spacing 1px;
  }
  .proj-desc {
    font-size 12px;
    color var(--text2);
    line-height 1.7;
    margin-bottom 16px;
  }
  .proj-tags {
    display flex;
    flex-wrap wrap;
    gap 6px;
  }
  .tag {
    padding 3px 8px;
    font-size 10px;
    letter-spacing 1px;
    border-radius 2px;
  }
  .tag-green { background rgba(0,255,106,.08); border 1px solid var(--green2); color var(--green); }
  .tag-cyan  { background rgba(0,229,255,.08); border 1px solid var(--cyan2);  color var(--cyan); }
  .tag-amber { background rgba(255,179,0,.08); border 1px solid var(--amber2); color var(--amber); }

   ─── CONTACT TERMINAL ──────────────────────────────── 
  #contact { background var(--bg); }
  .contact-grid {
    display grid;
    grid-template-columns 1fr 1fr;
    gap 40px;
    align-items start;
  }
  .contact-info { }
  .contact-info p {
    font-size 13px;
    color var(--text2);
    line-height 1.8;
    margin-bottom 28px;
  }
  .contact-links {
    display flex;
    flex-direction column;
    gap 12px;
  }
  .contact-link-item {
    display flex;
    align-items center;
    gap 12px;
    font-size 12px;
    padding 12px 16px;
    background var(--bg3);
    border 1px solid var(--border);
    border-radius 2px;
    text-decoration none;
    color var(--text);
    transition all .2s;
    cursor none;
  }
  .contact-link-itemhover { border-color var(--green2); color var(--green); }
  .cli-icon { font-size 16px; }
  .cli-val { margin-left auto; color var(--text2); font-size 11px; }

   interactive terminal 
  .iterm-box {
    background #000;
    border 1px solid var(--border);
    border-radius 4px;
    overflow hidden;
    box-shadow 0 0 60px rgba(0,255,106,.06);
  }
  .iterm-titlebar {
    background var(--bg3);
    border-bottom 1px solid var(--border);
    padding 8px 14px;
    display flex;
    gap 6px;
    align-items center;
    font-size 11px;
    color var(--text2);
  }
  .iterm-body {
    padding 16px;
    min-height 280px;
    max-height 340px;
    overflow-y auto;
    font-size 12px;
    line-height 1.7;
    scrollbar-width thin;
    scrollbar-color var(--dim) transparent;
  }
  .iterm-output { margin-bottom 2px; }
  .iterm-input-row {
    display flex;
    align-items center;
    gap 8px;
    margin-top 8px;
    padding-top 8px;
    border-top 1px solid var(--border);
  }
  .iterm-prompt { color var(--green); white-space nowrap; font-size 12px; }
  #term-input {
    flex 1;
    background transparent;
    border none;
    outline none;
    color #fff;
    font-family var(--font-mono);
    font-size 12px;
    caret-color var(--green);
  }

   ─── FOOTER ────────────────────────────────────────── 
  footer {
    background var(--bg);
    border-top 1px solid var(--border);
    padding 24px 32px;
    display flex;
    align-items center;
    justify-content space-between;
    font-size 11px;
    color var(--text2);
  }
  footer .fl { color var(--green2); }

   ─── UTILITY ───────────────────────────────────────── 
  .hidden { display none; }
  @keyframes fadeInUp {
    from { opacity 0; transform translateY(20px); }
    to   { opacity 1; transform translateY(0); }
  }
  .reveal { opacity 0; }
  .reveal.visible { animation fadeInUp .6s forwards; }

  @media (max-width 768px) {
    .hero-inner, .contact-grid { grid-template-columns 1fr; }
    .hero-name { font-size 48px; }
    .section-title { font-size 36px; }
    #navbar .nav-links { display none; }
  }
style
head
body

!-- cursor --
div id=cursordiv
div id=cursor-traildiv

!-- ════════════════ BIOS ════════════════ --
div id=bios
  div class=bios-line id=b0span class=bios-cyanNKSUEFI BIOS v4.0.2 Release 6.0spandiv
  div class=bios-line id=b1Copyright (C) 2024 NKS Technologies, Inc. All Rights Reserved.div
  div class=bios-line id=b2 style=margin-top16px;CPU span class=bios-greenNKS Cortex-G7 @ 3.60 GHz &nbsp;&nbsp; Cores 8 &nbsp;&nbsp; Threads 16spandiv
  div class=bios-line id=b3RAM span class=bios-green16384 MB DDR5 4800MHz ... OKspandiv
  div class=bios-line id=b4Storage span class=bios-greenNVMe SSD 512GB ... DETECTEDspandiv
  div class=bios-line id=b5 style=margin-top12px;Initializing hardware... span class=bios-greenOKspandiv
  div class=bios-line id=b6Loading PORTFOLIO_OS kernel ................ span class=bios-greenOKspandiv
  div class=bios-line id=b7Mounting filesystems ........................ span class=bios-greenOKspandiv
  div class=bios-line id=b8Starting display manager .................... span class=bios-greenOKspandiv
  div class=bios-line id=b9 style=margin-top12px;color#fff;font-size14px;
    span class=bios-amber▶span Launching PORTFOLIO_OS for span class=bios-greenNITHISH K.Sspan...
  div
  div class=bios-bar-wrap bios-line id=b10
    div class=bios-bar-labelBOOT PROGRESSdiv
    div class=bios-bardiv class=bios-bar-fill id=boot-filldivdiv
  div
div

!-- ════════════════ NAVBAR ════════════════ --
nav id=navbar
  span class=nav-logoNKS_OSspan
  span class=nav-sepspan
  div class=nav-links
    a href=#hero       class=nav-linkhomea
    a href=#skills     class=nav-linkskillsa
    a href=#experience class=nav-linkexperiencea
    a href=#projects   class=nav-linkprojectsa
    a href=#contact    class=nav-linkcontacta
  div
  div class=nav-status
    div class=status-dotdiv
    span style=colorvar(--green);font-size11px;ONLINEspan
    span id=live-clockspan
  div
nav

!-- ════════════════ HERO ════════════════ --
section id=hero
  div class=container
    div class=hero-inner
      div class=hero-left
        div class=hero-eyebrow
          span spanUSER@PORTFOLIO_OSspanspan~span$span
        div
        h1 class=hero-name glitch data-text=NITHISH K.SNITHISH K.Sh1
        div class=hero-roleFULL STACK DEVELOPERdiv
        p class=hero-desc
          Motivated ECE undergraduate and aspiring Full Stack Developer
          passionate about Java, web technologies, and database systems.
          Seeking a growth-oriented role to apply skills and gain hands-on experience.
        p
        div class=hero-links
          a href=#contact class=btn btn-primary.contact.sha
          a href=httpswww.linkedin.cominnithish-ks-277b702a6 target=_blank class=btn btn-ghostlinkedin --opena
          a href=#projects class=btn btn-ghostls projectsa
        div
        div class=stats-row
          div class=stat-item
            div class=stat-num7.9div
            div class=stat-lblCGPAdiv
          div
          div class=stat-item
            div class=stat-num8+div
            div class=stat-lblSKILLSdiv
          div
          div class=stat-item
            div class=stat-num2026div
            div class=stat-lblGRAD YEARdiv
          div
        div
      div

      div class=hero-right
        div class=terminal-box
          div class=terminal-titlebar
            div class=tb-dot tb-dot-rdiv
            div class=tb-dot tb-dot-ydiv
            div class=tb-dot tb-dot-gdiv
            span class=terminal-titlenithish@portfolio~span
          div
          div class=terminal-body
            div class=t-linespan class=t-promptnithishspanspan style=colorvar(--text2)@spanspan class=t-pathportfoliospanspan style=colorvar(--text2)~$span span class=t-cmdcat whoami.jsonspandiv
            div class=t-line t-out{div
            div class=t-line t-out&nbsp;&nbsp;span class=t-keynamespan span class=t-valNithish K.Sspan,div
            div class=t-line t-out&nbsp;&nbsp;span class=t-keyrolespan span class=t-valFull Stack Developerspan,div
            div class=t-line t-out&nbsp;&nbsp;span class=t-keyeducationspan span class=t-valBE ECE, Anna Universityspan,div
            div class=t-line t-out&nbsp;&nbsp;span class=t-keycgpaspan span class=t-val7.9span,div
            div class=t-line t-out&nbsp;&nbsp;span class=t-keystatusspan span class=t-valspan style=colorvar(--green)available_to_hirespanspan,div
            div class=t-line t-out&nbsp;&nbsp;span class=t-keyemailspan span class=t-valksn2425@gmail.comspandiv
            div class=t-line t-out}div
            div class=t-line style=margin-top12px;span class=t-promptnithishspanspan style=colorvar(--text2)@spanspan class=t-pathportfoliospanspan style=colorvar(--text2)~$span span id=typed-outputspanspan class=cursor-blinkspandiv
          div
        div
      div
    div
  div
section

!-- ════════════════ SKILLS ════════════════ --
section id=skills
  div class=container
    div class=section-header
      div class=section-tag 02. TECHNICAL_SKILLSdiv
      h2 class=section-titleSKILL SETh2
      div class=section-linediv
    div
    div class=skills-grid id=skills-grid
      !-- filled by JS --
    div
  div
section

!-- ════════════════ EXPERIENCE ════════════════ --
section id=experience
  div class=container
    div class=section-header
      div class=section-tag 03. EXPERIENCEdiv
      h2 class=section-titleTIMELINEh2
      div class=section-linediv
    div
    div class=timeline
      div class=tl-item reveal
        div class=tl-dot activediv
        div class=tl-card
          div class=tl-date2022 — PRESENTdiv
          div class=tl-titleB.E. Electronics & Communication Engineeringdiv
          div class=tl-orgAdhiparasakthi College of Engineering · Anna Universitydiv
          div class=tl-desc
            Pursuing a BE in ECE with a CGPA of 7.9. Developing a strong foundation
            in electronics, communication systems, programming, and software development
            through coursework and self-directed study.
          div
          span class=tl-badgeONGOING · 2022–2026span
        div
      div
      div class=tl-item reveal
        div class=tl-dotdiv
        div class=tl-card
          div class=tl-dateAUGUST 2025 · 4 DAYSdiv
          div class=tl-titleLife Skills Programdiv
          div class=tl-orgGlobal Team Track Foundation · Kalavaidiv
          div class=tl-desc
            Attended an intensive 4-day life skills program conducted by Global Team Track
            Foundation at Adhiparasakthi College of Engineering, Kalavai (6th–11th August 2025).
            Focused on teamwork, communication, and professional development.
          div
          span class=tl-badgeCERTIFIED · COMPLETEDspan
        div
      div
      div class=tl-item reveal
        div class=tl-dotdiv
        div class=tl-card
          div class=tl-date2026 — UPCOMINGdiv
          div class=tl-titleAspiring Full Stack Developerdiv
          div class=tl-orgOpen to Opportunitiesdiv
          div class=tl-desc
            Actively seeking entry-level Full Stack Developer roles where I can apply
            knowledge of Java, databases, and web technologies, and grow within a
            collaborative engineering team.
          div
          span class=tl-badge style=border-colorvar(--amber2);colorvar(--amber);backgroundrgba(255,179,0,.08);FRESHER · OPEN TO HIREspan
        div
      div
    div
  div
section

!-- ════════════════ PROJECTS ════════════════ --
section id=projects
  div class=container
    div class=section-header
      div class=section-tag 04. PROJECTSdiv
      h2 class=section-titleBUILDSh2
      div class=section-linediv
    div
    div class=projects-grid
      div class=proj-card reveal
        div class=proj-num01div
        div class=proj-titleStudent Grade Managerdiv
        div class=proj-descA Java-based console application to manage student records, compute grades, and store results using MySQL backend with JDBC connectivity.div
        div class=proj-tags
          span class=tag tag-greenJavaspan
          span class=tag tag-cyanMySQLspan
          span class=tag tag-amberJDBCspan
        div
      div
      div class=proj-card reveal
        div class=proj-num02div
        div class=proj-titlePortfolio Websitediv
        div class=proj-descResponsive personal portfolio built with HTML, CSS, and JavaScript showcasing projects, skills, and contact details with a modern terminal-inspired UI.div
        div class=proj-tags
          span class=tag tag-greenHTMLspan
          span class=tag tag-cyanCSSspan
          span class=tag tag-amberJavaScriptspan
        div
      div
      div class=proj-card reveal
        div class=proj-num03div
        div class=proj-titleNotes REST APIdiv
        div class=proj-descRESTful API built with Python (Flask) and MongoDB for CRUD operations on notes. Features JSON responses, error handling, and basic authentication.div
        div class=proj-tags
          span class=tag tag-greenPythonspan
          span class=tag tag-cyanMongoDBspan
          span class=tag tag-amberFlaskspan
        div
      div
      div class=proj-card reveal
        div class=proj-num04div
        div class=proj-titleDSA Visualizerdiv
        div class=proj-descWeb-based data structure and algorithm visualizer built to reinforce understanding of sorting, searching, and graph traversal concepts with step-by-step animations.div
        div class=proj-tags
          span class=tag tag-greenHTMLspan
          span class=tag tag-cyanJavaScriptspan
          span class=tag tag-amberDSAspan
        div
      div
    div
  div
section

!-- ════════════════ CONTACT ════════════════ --
section id=contact
  div class=container
    div class=section-header
      div class=section-tag 05. CONTACTdiv
      h2 class=section-titleCONNECTh2
      div class=section-linediv
    div
    div class=contact-grid
      div class=contact-info
        p
          Open to entry-level Full Stack Developer roles, internships, and
          collaborative projects. Let's build something together.
        p
        div class=contact-links
          a href=mailtoksn2425@gmail.com class=contact-link-item
            span class=cli-icon📧span
            spanEmailspan
            span class=cli-valksn2425@gmail.comspan
          a
          a href=tel9150708264 class=contact-link-item
            span class=cli-icon📱span
            spanPhonespan
            span class=cli-val+91 9150708264span
          a
          a href=httpswww.linkedin.cominnithish-ks-277b702a6 target=_blank class=contact-link-item
            span class=cli-icon🔗span
            spanLinkedInspan
            span class=cli-valnithish-ks-277b702a6span
          a
        div
      div

      div
        div class=iterm-box
          div class=iterm-titlebar
            div class=tb-dot tb-dot-rdiv
            div class=tb-dot tb-dot-ydiv
            div class=tb-dot tb-dot-gdiv
            span style=margin-left8px;contact@nithish~ — bashspan
          div
          div class=iterm-body id=iterm-body
            div class=iterm-output style=colorvar(--green)NKS PORTFOLIO_OS Contact Terminal v1.0div
            div class=iterm-output style=colorvar(--text2)Type span style=colorvar(--amber)helpspan to see available commands.div
            div class=iterm-output&nbsp;div
          div
          div class=iterm-input-row
            span class=iterm-promptvisitor@nithish~$span
            input id=term-input type=text autocomplete=off spellcheck=false placeholder=type a command...
          div
        div
      div
    div
  div
section

!-- ════════════════ FOOTER ════════════════ --
footer
  spanPORTFOLIO_OS v1.0 &nbsp;·&nbsp; span class=flNithish K.Sspanspan
  span style=colorvar(--green2);All systems nominal.span
  spanBuilt with span class=fl&lt;&gt;span &amp; ☕span
footer

!-- ════════════════ JS ════════════════ --
script
 ── CURSOR ── 
const cur = document.getElementById('cursor');
const curT = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e = {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});
setInterval(() = {
  tx += (mx - tx)  .15;
  ty += (my - ty)  .15;
  curT.style.left = tx + 'px';
  curT.style.top  = ty + 'px';
}, 16);

 ── CLOCK ── 
function tick() {
  const d = new Date();
  const p = n = String(n).padStart(2,'0');
  document.getElementById('live-clock').textContent =
    `${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
tick(); setInterval(tick, 1000);

 ── BIOS BOOT ── 
(function biosSequence() {
  const lines = document.querySelectorAll('#bios .bios-line');
  const fill  = document.getElementById('boot-fill');
  let i = 0;
  const delay = [0,180,360,520,660,820,1000,1180,1340,1500,1700];
  lines.forEach((el, idx) = {
    setTimeout(() = {
      el.style.opacity = '1';
    }, delay[idx]  idx  160);
  });

   progress bar
  let pct = 0;
  const barTimer = setInterval(() = {
    pct = Math.min(pct + Math.random()  7 + 2, 100);
    fill.style.width = pct + '%';
    if (pct = 100) {
      clearInterval(barTimer);
      setTimeout(() = {
        const bios = document.getElementById('bios');
        bios.style.transition = 'opacity .6s';
        bios.style.opacity = '0';
        setTimeout(() = bios.style.display = 'none', 600);
        startTyping();
        initSkillBars();
        initReveal();
      }, 500);
    }
  }, 60);
})();

 ── TYPING EFFECT HERO ── 
function startTyping() {
  const lines = [
    'echo Hello, World!',
    'Hello, World!',
    '',
    'ls skills',
    'java  html  css  python  mysql  mongodb  dsa  sql',
    '',
    'ssh recruit@nithish.dev -p 22'
  ];
  let lineIdx = 0, charIdx = 0;
  const el = document.getElementById('typed-output');
  let content = '';

  function type() {
    if (lineIdx = lines.length) return;
    const line = lines[lineIdx];
    if (charIdx  line.length) {
      content += line[charIdx];
      el.textContent = content;
      charIdx++;
      setTimeout(type, 45 + Math.random()  30);
    } else {
      content += 'n';
      charIdx = 0; lineIdx++;
      setTimeout(type, lineIdx  lines.length  300  0);
       Convert newlines to DOM for display
      el.innerHTML = content.split('n').map((l,i) = {
        if (!l) return 'br';
        if (i === 0  content.split('n')[i-1] === '') {
          return `span style=displayblockspan class=t-promptnithishspanspan style=colorvar(--text2)@spanspan class=t-pathportfoliospanspan style=colorvar(--text2)~$span span style=color#fff${l}spanspan`;
        }
        return `span style=displayblock;colorvar(--text2)${l}span`;
      }).join('');
    }
  }
  setTimeout(type, 400);
}

 ── SKILLS DATA ── 
const skills = [
  { name 'Java',    icon '☕', pct 80 },
  { name 'HTML',    icon '🌐', pct 85 },
  { name 'CSS',     icon '🎨', pct 80 },
  { name 'Python',  icon '🐍', pct 72 },
  { name 'MySQL',   icon '🗄️',  pct 75 },
  { name 'MongoDB', icon '🍃', pct 65 },
  { name 'SQL',     icon '📊', pct 75 },
  { name 'DSA',     icon '🔗', pct 70 },
];

function initSkillBars() {
  const grid = document.getElementById('skills-grid');
  skills.forEach(s = {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.innerHTML = `
      div class=skill-icon${s.icon}div
      div class=skill-name${s.name}div
      div class=skill-bar-bgdiv class=skill-bar-fill data-pct=${s.pct}divdiv
      div class=skill-pct${s.pct}%div
    `;
    grid.appendChild(card);
  });
}

 ── INTERSECTION OBSERVER (reveal + skill bars) ── 
function initReveal() {
  const obs = new IntersectionObserver((entries) = {
    entries.forEach(entry = {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
         trigger skill bar fill
        const bar = entry.target.querySelector('.skill-bar-fill');
        if (bar) {
          setTimeout(() = bar.style.width = bar.dataset.pct + '%', 200);
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold 0.15 });
  document.querySelectorAll('.reveal').forEach(el = obs.observe(el));
}

 ── INTERACTIVE TERMINAL ── 
const termBody  = document.getElementById('iterm-body');
const termInput = document.getElementById('term-input');

const commands = {
  help () = [
    'span style=colorvar(--amber)Available commandsspan',
    '  span style=colorvar(--green)aboutspan      — Who is Nithish',
    '  span style=colorvar(--green)skillsspan     — List technical skills',
    '  span style=colorvar(--green)contactspan    — Get contact details',
    '  span style=colorvar(--green)hirespan       — Initiate hiring sequence',
    '  span style=colorvar(--green)educationspan  — Academic details',
    '  span style=colorvar(--green)clearspan      — Clear terminal',
    '  span style=colorvar(--green)whoamispan     — Identity check',
  ],
  about () = [
    'span style=colorvar(--cyan)» Nithish K.Sspan',
    '  Motivated ECE undergraduate from Adhiparasakthi College of Engineering.',
    '  Aspiring Full Stack Developer with a passion for Java and web tech.',
    '  CGPA span style=colorvar(--green)7.9span  Status span style=colorvar(--green)Available to hirespan',
  ],
  skills () = [
    'span style=colorvar(--cyan)» Technical Skillsspan',
    ...skills.map(s = `  span style=colorvar(--green)${s.name.padEnd(10)}span span style=colorvar(--text2)${'█'.repeat(Math.floor(s.pct10))}${'░'.repeat(10-Math.floor(s.pct10))}span ${s.pct}%`),
  ],
  contact () = [
    'span style=colorvar(--cyan)» Contact Infospan',
    '  Email   span style=colorvar(--amber)ksn2425@gmail.comspan',
    '  Phone   span style=colorvar(--amber)+91 9150708264span',
    '  LinkedIn span style=colorvar(--amber)nithish-ks-277b702a6span',
  ],
  hire () = [
    'span style=colorvar(--green)Initiating hiring sequence...span',
    '  [■■■■■■■■■■] 100%',
    'span style=colorvar(--amber)→ Send an email to ksn2425@gmail.comspan',
    'span style=colorvar(--green)✓ Nithish is excited to hear from you!span',
  ],
  education () = [
    'span style=colorvar(--cyan)» Educationspan',
    '  Degree   span style=colorvar(--green)B.E. Electronics & Communication Engineeringspan',
    '  College  Adhiparasakthi College of Engineering',
    '  Univ     Anna University',
    '  CGPA     span style=colorvar(--amber)7.9span',
    '  Period   2022 — 2026',
  ],
  whoami () = [
    'span style=colorvar(--green)nithishspan',
    'uid=1000(nithish) gid=1000(dev) groups=1000(dev),4(fullstack),24(java)',
  ],
  clear () = '__CLEAR__',
};

function termPrint(lines) {
  lines.forEach(l = {
    const d = document.createElement('div');
    d.className = 'iterm-output';
    d.innerHTML = l;
    termBody.appendChild(d);
  });
  termBody.scrollTop = termBody.scrollHeight;
}

termInput.addEventListener('keydown', e = {
  if (e.key !== 'Enter') return;
  const raw = termInput.value.trim();
  termInput.value = '';
  if (!raw) return;

   echo command
  const echo = document.createElement('div');
  echo.className = 'iterm-output';
  echo.innerHTML = `span style=colorvar(--text2)visitor@nithish~$span span style=color#fff${raw}span`;
  termBody.appendChild(echo);

  const cmd = raw.toLowerCase().split(' ')[0];
  if (commands[cmd]) {
    const result = commands[cmd]();
    if (result === '__CLEAR__') {
      termBody.innerHTML = '';
    } else {
      termPrint(result);
      const blank = document.createElement('div');
      blank.className = 'iterm-output';
      blank.innerHTML = '&nbsp;';
      termBody.appendChild(blank);
    }
  } else {
    termPrint([
      `span style=colorvar(--red)command not found ${raw}span`,
      `Type span style=colorvar(--amber)helpspan for available commands.`
    ]);
  }
  termBody.scrollTop = termBody.scrollHeight;
});
script
body
html
