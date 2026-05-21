// Koordinat Telah Disesuaikan Dengan Proporsi Peta DIY Baru
const incidents = [
    {id:1,  title:'Kekerasan/Perkelahian',  loc:'Jl. Malioboro',           area:'Kota Yogyakarta', lvl:'kritis', color:'#ef4444', x:340, y:210, time:'22:14', type:'Kekerasan'},
    {id:2,  title:'Pencurian Kendaraan',    loc:'Mirota Kampus',           area:'Sleman',          lvl:'tinggi', color:'#f97316', x:340, y:150, time:'21:58', type:'Pencurian'},
    {id:3,  title:'Jambret',                loc:'Ring Road Selatan',       area:'Bantul',          lvl:'kritis', color:'#ef4444', x:330, y:260, time:'22:02', type:'Jambret'},
    {id:4,  title:'Kecelakaan Lalu Lintas', loc:'Jl. Magelang KM 5',       area:'Sleman',          lvl:'tinggi', color:'#f97316', x:310, y:130, time:'21:45', type:'Lakalantas'},
    {id:5,  title:'Pengerusakan Fasilitas', loc:'Stadion Kridosono',       area:'Kota Yogyakarta', lvl:'sedang', color:'#f59e0b', x:355, y:205, time:'21:30', type:'Vandalisme'},
    {id:6,  title:'Narkotika',              loc:'Gang Sosrowijayan',       area:'Kota Yogyakarta', lvl:'tinggi', color:'#f97316', x:335, y:212, time:'21:20', type:'Narkotika'},
    {id:7,  title:'Penipuan Online',        loc:'Jl. Kaliurang',           area:'Sleman',          lvl:'sedang', color:'#f59e0b', x:350, y:80,  time:'21:05', type:'Siber'},
    {id:8,  title:'KDRT',                   loc:'Kotagede',                area:'Kota Yogyakarta', lvl:'tinggi', color:'#f97316', x:365, y:225, time:'20:50', type:'KDRT'},
    {id:9,  title:'Kelitih (Tawuran)',      loc:'Jl. Parangtritis',        area:'Bantul',          lvl:'kritis', color:'#ef4444', x:320, y:375, time:'20:35', type:'Kelitih'},
    {id:10, title:'Penggelapan Dana',       loc:'Wonosari',                area:'Gunungkidul',     lvl:'sedang', color:'#f59e0b', x:530, y:260, time:'20:20', type:'Penipuan'},
    {id:11, title:'Gangguan Kamtibmas',     loc:'Wates',                   area:'Kulonprogo',      lvl:'sedang', color:'#f59e0b', x:120, y:250, time:'20:10', type:'Kamtibmas'},
    {id:12, title:'Curanmor',               loc:'Pasar Beringharjo',       area:'Kota Yogyakarta', lvl:'tinggi', color:'#f97316', x:345, y:215, time:'19:55', type:'Pencurian'},
  ];
  
  const posts = [
    {name:'Polsek Gedongtengen', area:'Kota Yogyakarta', personel:14, patroli:2, aktif:12, x:330, y:215, cap:86, units:['Reskrim','Lantas']},
    {name:'Polsek Mlati',        area:'Sleman',          personel:12, patroli:1, aktif:10, x:300, y:140, cap:83, units:['Binmas','Sabhara']},
    {name:'Polsek Sewon',        area:'Bantul',          personel:10, patroli:2, aktif:9,  x:330, y:245, cap:90, units:['Reskrim','Sabhara']},
    {name:'Polsek Wates',        area:'Kulonprogo',      personel:9,  patroli:1, aktif:7,  x:125, y:245, cap:78, units:['Lantas','Binmas']},
    {name:'Polsek Wonosari',     area:'Gunungkidul',     personel:11, patroli:1, aktif:9,  x:540, y:265, cap:82, units:['Reskrim','Lantas']},
    {name:'Polsek Depok',        area:'Sleman',          personel:13, patroli:1, aktif:11, x:360, y:160, cap:85, units:['Reskrim','Sabhara','Densus']},
  ];
  
  const patrols = [
    {x:350, y:220}, {x:320, y:150}, {x:340, y:280},
    {x:140, y:260}, {x:510, y:270}, {x:370, y:150},
  ];
  
  const units = [
    {name:'Anti-Teror (Densus)',  kode:'AT',     total:8,  siaga:6,  tugas:2, color:'#ef4444'},
    {name:'Anti Huru-Hara',       kode:'AHH',    total:20, siaga:12, tugas:8, color:'#f97316'},
    {name:'Polisi Masyarakat',    kode:'Binmas', total:18, siaga:15, tugas:3, color:'#3b82f6'},
    {name:'Lalu Lintas',          kode:'Lantas', total:16, siaga:8,  tugas:8, color:'#10b981'},
    {name:'Reskrim',              kode:'Resk',   total:14, siaga:9,  tugas:5, color:'#8b5cf6'},
    {name:'Sabhara (Patroli)',    kode:'Sab',    total:12, siaga:4,  tugas:8, color:'#06b6d4'},
  ];
  
  const caps = [
    {lbl:'Anti-Teror', pct:75, color:'#ef4444'},
    {lbl:'Anti H-H',   pct:60, color:'#f97316'},
    {lbl:'Binmas',     pct:83, color:'#3b82f6'},
    {lbl:'Lantas',     pct:50, color:'#10b981'},
    {lbl:'Reskrim',    pct:64, color:'#8b5cf6'},
    {lbl:'Sabhara',    pct:33, color:'#06b6d4'},
  ];
  
  let logs = [
    {action:'Unit Sabhara-3 dideploykan ke Malioboro',          time:'22:17', color:'#ef4444', icon:'🚔'},
    {action:'Laporan jambret diterima dari Ring Road Selatan',  time:'22:02', color:'#f97316', icon:'📞'},
    {action:'Patroli Rutin Sektor A — laporan normal',          time:'21:50', color:'#10b981', icon:'✓'},
    {action:'Koordinasi Polsek Sewon soal kelitih Parangtritis',time:'21:40', color:'#f97316', icon:'📡'},
    {action:'Backup 2 personel ke TKP laka Jl. Magelang',      time:'21:48', color:'#3b82f6', icon:'🚑'},
    {action:'Densus siaga tinggi — informasi intelijen',        time:'21:00', color:'#ef4444', icon:'⚠'},
  ];
  
  let currentView   = 'semua';
  let selectedInc   = null;
  
  function updateClock() {
    const now  = new Date();
    document.getElementById('clock').textContent =
      now.toLocaleTimeString('id', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
    document.getElementById('dateTag').textContent =
      now.toLocaleDateString('id', {day:'numeric', month:'short', year:'numeric'});
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  function renderIncidents() {
    document.getElementById('incidentList').innerHTML = incidents.map((inc, i) => `
      <div class="inc-row ${selectedInc === i ? 'active' : ''}" onclick="selectIncident(${i})">
        <div class="inc-dot" style="background:${inc.color}"></div>
        <div style="flex:1">
          <div class="inc-title">
            <span class="inc-badge badge-${inc.lvl}">${inc.lvl.toUpperCase()}</span>
            ${inc.title}
          </div>
          <div class="inc-meta">${inc.loc} · ${inc.time} WIB</div>
        </div>
      </div>
    `).join('');
  }
  
  function selectIncident(i) {
    selectedInc = i;
    const inc = incidents[i];
    document.getElementById('popup-title').textContent = inc.title;
    document.getElementById('popup-loc').textContent   = inc.loc;
    document.getElementById('popup-area').textContent  = inc.area;
    document.getElementById('popup-time').textContent  = inc.time + ' WIB';
    document.getElementById('popup-lvl').textContent   = inc.lvl.toUpperCase();
    document.getElementById('popup-type').textContent  = inc.type;
    document.getElementById('incPopup').classList.add('show');
    
    document.getElementById('deployPanel').classList.add('show');
    document.getElementById('deployBody').textContent  =
      `${inc.title} di ${inc.loc} (${inc.area}) — ${inc.time} WIB. Pilih unit terdekat untuk direspon.`;
  
    renderIncidents();
    renderMarkers();
  }
  
  function closePopup() {
    document.getElementById('incPopup').classList.remove('show');
    selectedInc = null;
    document.getElementById('deployPanel').classList.remove('show');
    renderIncidents();
    renderMarkers();
  }
  
  function deployUnit() {
    if (selectedInc === null) return;
    const inc = incidents[selectedInc];
    const t   = new Date().toLocaleTimeString('id', {hour:'2-digit', minute:'2-digit'});
    logs.unshift({ action: `🚔 Unit dideploykan → ${inc.title} di ${inc.loc}`, time: t, color: '#3b82f6', icon: '🚔' });
    renderTimeline();
    closePopup();
  }
  
  function renderMarkers() {
    let html = '';
    if (currentView === 'semua' || currentView === 'insiden') {
      incidents.forEach((inc, i) => {
        const sel = selectedInc === i;
        const r   = sel ? 10 : 6;
        const op  = sel ? '1' : '0.85';
        html += `<circle cx="${inc.x}" cy="${inc.y}" r="${r}" fill="${inc.color}" opacity="${op}" stroke="${sel ? '#fff' : 'rgba(0,0,0,0.35)'}" stroke-width="${sel ? 2 : 1}" style="cursor:pointer;transition:r .15s" onclick="selectIncident(${i})"/>`;
        if (sel) {
          html += `<circle cx="${inc.x}" cy="${inc.y}" r="18" fill="none" stroke="${inc.color}" stroke-width="1.5" opacity="0.35"/>`;
          html += `<circle cx="${inc.x}" cy="${inc.y}" r="26" fill="none" stroke="${inc.color}" stroke-width="0.8" opacity="0.18"/>`;
          const shortTitle = inc.title.length > 16 ? inc.title.substring(0, 16) + '…' : inc.title;
          html += `<text x="${inc.x}" y="${inc.y - 15}" text-anchor="middle" font-size="9" fill="${inc.color}" font-weight="600">${shortTitle}</text>`;
        }
      });
    }
    if (currentView === 'semua' || currentView === 'personel') {
      posts.forEach(p => {
        html += `<rect x="${p.x - 8}" y="${p.y - 8}" width="16" height="16" rx="2" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>`;
        html += `<text x="${p.x}" y="${p.y + 4.5}" text-anchor="middle" font-size="8" fill="#93c5fd" font-weight="700">P</text>`;
      });
    }
    if (currentView === 'semua' || currentView === 'patroli') {
      patrols.forEach(p => {
        html += `<polygon points="${p.x},${p.y - 9} ${p.x + 8},${p.y + 6} ${p.x - 8},${p.y + 6}" fill="#0e7490" stroke="#06b6d4" stroke-width="1.5"/>`;
      });
    }
    document.getElementById('markers').innerHTML = html;
  }
  
  function setView(v, el) {
    currentView = v;
    document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    renderMarkers();
  }
  
  function setTab(t, el) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('posPanel').style.display   = t === 'pos'  ? 'block' : 'none';
    document.getElementById('unitPanel').style.display  = t === 'unit' ? 'block' : 'none';
  }
  
  function renderPosts() {
    document.getElementById('posPanel').innerHTML = posts.map(p => `
      <div class="pos-card ${p.cap > 87 ? 'overload' : ''}">
        <div class="pos-header">
          <div><div class="pos-name">${p.name}</div><div class="pos-area">${p.area}</div></div>
          <div class="pos-units">${p.units.join(' · ')}</div>
        </div>
        <div class="pos-stats">
          <div class="ps-item"><div class="ps-val" style="color:var(--blue)">${p.personel}</div><div class="ps-lbl">Total</div></div>
          <div class="ps-item"><div class="ps-val" style="color:var(--green)">${p.aktif}</div><div class="ps-lbl">Aktif</div></div>
          <div class="ps-item"><div class="ps-val" style="color:var(--cyan)">${p.patroli}</div><div class="ps-lbl">Patroli</div></div>
        </div>
        <div class="mini-bar"><div class="mini-fill" style="width:${p.cap}%;background:${p.cap > 87 ? '#ef4444' : p.cap > 75 ? '#f59e0b' : '#10b981'}"></div></div>
      </div>
    `).join('');
  }
  
  function renderUnits() {
    document.getElementById('unitPanel').innerHTML = units.map(u => {
      const pct = Math.round(u.siaga / u.total * 100);
      return `
      <div class="pos-card">
        <div class="pos-header">
          <div><div class="pos-name">${u.name}</div><div class="pos-area">Kode: ${u.kode}</div></div>
          <div style="background:${u.color}20;color:${u.color};font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid ${u.color}40">${u.tugas} bertugas</div>
        </div>
        <div class="pos-stats">
          <div class="ps-item"><div class="ps-val" style="color:${u.color}">${u.total}</div><div class="ps-lbl">Total</div></div>
          <div class="ps-item"><div class="ps-val" style="color:var(--green)">${u.siaga}</div><div class="ps-lbl">Siaga</div></div>
          <div class="ps-item"><div class="ps-val" style="color:var(--amber)">${u.tugas}</div><div class="ps-lbl">Tugas</div></div>
        </div>
        <div class="mini-bar"><div class="mini-fill" style="width:${pct}%;background:${u.color}"></div></div>
      </div>`
    }).join('');
  }
  
  function renderTimeline() {
    document.getElementById('timeline').innerHTML = logs.slice(0, 7).map(l => `
      <div class="tl-item">
        <div class="tl-icon" style="background:${l.color}18;border-color:${l.color}40;color:${l.color}">${l.icon}</div>
        <div><div class="tl-action">${l.action}</div><div class="tl-time">${l.time} WIB</div></div>
      </div>
    `).join('');
  }
  
  function renderCapBars() {
    document.getElementById('capBars').innerHTML = caps.map(c => `
      <div class="cap-bar">
        <div class="cap-label">${c.lbl}</div>
        <div class="cap-track"><div class="cap-fill" style="width:${c.pct}%;background:${c.color}"></div></div>
        <div class="cap-pct">${c.pct}%</div>
      </div>
    `).join('');
  }
  
  function initTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sel','Rab','Kam','Jum','Sab','Min','Sen'],
        datasets: [{
          label: 'Insiden', data: [8, 11, 7, 14, 16, 12, 12],
          borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.14)',
          fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#3b82f6', borderWidth: 1.5,
        }]
      },
      options: {
        responsive: false, plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#64748b', font: { size: 9 } }, grid: { display: false } },
          y: { ticks: { color: '#64748b', font: { size: 9 } }, grid: { display: false } },
        },
      }
    });
  }
  
  function showAlerts() { 
    const msg = [
        '⚠ 3 INSIDEN PRIORITAS AKTIF',
        '',
        '1. [KRITIS] Kekerasan di Jl. Malioboro — 22:14 WIB',
        '2. [KRITIS] Jambret di Ring Road Selatan — 22:02 WIB',
        '3. [KRITIS] Kelitih di Jl. Parangtritis — 20:35 WIB',
        '',
        'Klik insiden di panel kiri untuk deploy unit.',
      ].join('\n');
      alert(msg);
   }
  
  renderIncidents(); renderMarkers(); renderPosts(); renderUnits(); renderTimeline(); renderCapBars(); initTrendChart();