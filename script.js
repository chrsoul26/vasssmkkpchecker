const appRoot = document.getElementById("page");
const navLinks = document.querySelector(".nav-links");
const subMenuBar = document.getElementById("subMenuBar");
const root = document.documentElement;

let currentSection = "Kehadiran Sesi Pagi"; 
let currentHeroIndex = 1; 
let currentLang = "bm";
let lastSearchRawStatus = ""; 

const translations = {
    bm: {
        navA: "Informasi",
        navB: "Semak",
        navC: "Tetapan",
        subKokum: "Kehadiran Kokum",
        subPagi: "Kehadiran Sesi Persekolahan",
        camTitle: "SYSTEM CAMERA / CCTV MONITOR",
        camDesc: "PANTAU KAMERA CCTV SECARA LIVE",
        camBtnTxt: "BUKA KAMERA",
        schIntroTitle: "PENGENALAN SEKOLAH",
        schIntroDesc: "<b>SMK Kuala Penyu</b> merupakan sebuah sekolah menengah tertua yang terdapat di daerah Kuala Penyu, Sabah yang dahulunya ialah sekolah kayu di Pekan Kuala Penyu and dikenali sebagai <b>Gresman Memorial School</b>.",
        schMottoTitle: "MOTO SEKOLAH:",
        schMottoDesc: '"Pengetahuan adalah kemajuan" <br> "Sekolahku menerajui kemajuan"',
        schLocTitle: "LOKASI SEKOLAH",
        schInfoTitle: "MAKLUMAT SEKOLAH",
        schAddr: "Alamat:",
        schTel: "No. Tel:",
        schFax: "No. Fax:",
        schEmail: "E-mel:",
        schTeachersTitle: "WARGA PENDIDIK",
        vassDesc1: "<b>Visual Attendance Security System (V.A.S.S)</b> merupakan produk yang menggunakan teknologi RFID dan dicipta khusus untuk <u>mengambil kehadiran murid dengan menggunakan kad RFID</u> manakala guru-guru dapat <u>memantau kehadiran murid melalui website yang di sediakan.</u>",
        vassWhyTitle: "KENAPA KAMI MENCIPTAKAN PRODUCT INI?",
        vassWhyDesc: "Kerana kami menyedari bahawa terdapat masalah yang sering dihadapi oleh guru-guru ketika mengambil kehadiran murid secara manual.<br><br>Hal ini dikatakan demikian kerana <u>mudah berlakunya kesilapan</u> dan <u>lambat ataupun terlupa untuk merekodkan kehadiran murid-murid.</u><br><br>Selain itu, produk ini juga diciptakan untuk <u>mengurangi kebimbangan ibubapa</u> apabila anak-anak mereka ponteng atau tidak hadir ke sekolah.<br><br>Oleh kerana itu, kami memutuskan untuk menciptakan suatu produk yang dapat <u>meringankan beban guru-guru dan kebimbangan ibubapa</u> iaitu <b>V.A.S.S</b>.",
        vassAdvTitle: "KELEBIHAN V.A.S.S:",
        vassAdvList: "<li>Memudahkan guru-guru mengambil kehadiran murid-murid.</li><li>Boleh mengambil kehadiran kokurikulum dan kehadiran sekolah biasa.</li><li>Mengurangkan penggunaan kertas.</li><li>Boleh memantau murid-murid dari jauh (terdapat kamera pada product).</li><li>Tiada lagi berlakunya lupa mengambil kehadiran murid atau hilang kertas rekod.</li>",
        roleEllisa: "Pembangun Web/Pereka Grafik.",
        roleAleesya: "Ketua Grup/Pengaturcaraan Arduino/Pereka Produk.",
        roleDelvina: "Menulis dan menyediakan buku laporan",
        trailerTitle: "TRAILER VIDEO",
        trailerDesc: "TONTON TRAILER KAMI DI YOUTUBE",
        playVidTxt: "Mainkan Video",
        guideTitle: "PANDUAN LAMAN WEB",
        faqQ1: "Apakah fungsi laman sesawang ini?",
        faqA1: "Laman sesawang ini disediakan khas untuk memudahkan guru merekod kehadiran serta membolehkan warga sekolah dan ibu bapa memantau kehadiran murid semasa sesi persekolahan dan aktiviti kokurikulum.",
        faqQ2: "Bagaimana saya mahu cek kehadiran murid?",
        faqA2: "Pilih sub-menu Kehadiran Sesi Pagi atau Kehadiran Kokum, masukkan nama penuh murid di dalam ruangan carian, dan tekan butang Semak.",
        settingMainTitle: "TETAPAN",
        labelTheme: "TEMA:",
        labelLang: "BAHASA:",
        themeDark: "Gelap",
        themeLight: "Terang",
        btnSemakAction: "Semak",
        infoCardHeader: "MAKLUMAT KEHADIRAN MURID",
        lblInfoName: "NAMA:",
        lblInfoClass: "KELAS:",
        lblInfoKokum: "AKTIVITI KOKUM:",
        lblInfoStatus: "STATUS KEHADIRAN:",
        phStudentName: "MASUKKAN NAMA MURID"
    },
    en: {
        navA: "Information",
        navB: "Check",
        navC: "Settings",
        subKokum: "Co-curricular Attendance",
        subPagi: "School Session Attendance",
        camTitle: "SYSTEM CAMERA / CCTV MONITOR",
        camDesc: "MONITOR CCTV CAMERA LIVE",
        camBtnTxt: "OPEN CAMERA",
        schIntroTitle: "SCHOOL INTRODUCTION",
        schIntroDesc: "<b>SMK Kuala Penyu</b> is the oldest secondary school located in the district of Kuala Penyu, Sabah, which formerly was a wooden school in Pekan Kuala Penyu and known as <b>Gresman Memorial School.</b>",
        schMottoTitle: "SCHOOL MOTTO:",
        schMottoDesc: '"Pengtahuan adalah kemajuan" <br> "Sekolahku menerajui kemajuan"',
        schLocTitle: "SCHOOL LOCATION",
        schInfoTitle: "SCHOOL INFORMATION",
        schAddr: "Address:",
        schTel: "Tel No:",
        schFax: "Fax No:",
        schEmail: "Email:",
        schTeachersTitle: "TEACHING STAFF",
        vassDesc1: "<b>Visual Attendance Security System (V.A.S.S)</b> is a product that using RFID technology and specifically created to <u>record student attendance using RFID cards</u> and teachers can <u>monitor attendance by the provided website.</u>",
        vassWhyTitle: "WHY DID WE CREATE THIS PRODUCT?",
        vassWhyDesc: "Because we realized the common issues teachers face when manually taking student attendance.<br><br>This is due to <u>frequent human errors</u> and <u>delay or forgetting to record student attendance.</u><br><br>On top of that, this product was created to <u>reduce parents' anxiety</u> regarding student truancy.<br><br>Therefore, we decided to create a product that can <u>ease the burden on teachers and relieve parental concern</u>, which is <b>V.A.S.S</b>.",
        vassAdvTitle: "ADVANTAGES OF V.A.S.S:",
        vassAdvList: "<li>Teacher can take students attendance easily.</li><li>Supports both co-curricular and regular morning session attendance.</li><li>Reduces paper consumption.</li><li>Allows remote student monitoring via integrated camera.</li><li>Said no more to lost attendance records or forgot to take attendance.</li>",
        roleEllisa: "Web Developer / Graphic Designer",
        roleAleesya: "Group Leader / Arduino Programmer / Product Designer",
        roleDelvina: "Writing and preparing a report book",
        trailerTitle: "VIDEO TRAILER",
        trailerDesc: "WATCH OUR TRAILER ON YOUTUBE",
        playVidTxt: "Play Video",
        guideTitle: "WEBSITE GUIDE",
        faqQ1: "What is the purpose of this website?",
        faqA1: "This website is designed to make it easier for teachers to record and monitor student attendance.",
        faqQ2: "How do I check a student's attendance?",
        faqA2: "Select Morning or Co-curricular Attendance sub-menu, enter the full student name, and click Check.",
        settingMainTitle: "SETTINGS",
        labelTheme: "THEME:",
        labelLang: "LANGUAGE:",
        themeDark: "Dark",
        themeLight: "Light",
        btnSemakAction: "Check",
        infoCardHeader: "STUDENT ATTENDANCE DETAILS",
        lblInfoName: "NAME:",
        lblInfoClass: "CLASS:",
        lblInfoKokum: "ACTIVITY CO-CURRICULUM:",
        lblInfoStatus: "ATTENDANCE STATUS:",
        phStudentName: "ENTER STUDENT NAME"
    }
};

const translateStatus = (statusStr) => {
    if (!statusStr) return "-";
    const statusUpper = statusStr.trim().toUpperCase();
    
    if (statusUpper === "HADIR" || statusUpper === "PRESENT") {
        return currentLang === "en" ? "PRESENT" : "HADIR";
    } else if (statusUpper === "LEWAT" || statusUpper === "LATE") {
        return currentLang === "en" ? "LATE" : "LEWAT";
    } else if (statusUpper === "TIDAK HADIR" || statusUpper === "ABSENT") {
        return currentLang === "en" ? "ABSENT" : "TIDAK HADIR";
    } else if (statusUpper === "BELUM SCAN" || statusUpper === "NOT SCANNED YET") {
        return currentLang === "en" ? "NOT SCANNED YET" : "BELUM SCAN";
    }
    return statusUpper;
};

const getSectionTitle = (section) => {
    if (section === "Kehadiran Sesi Pagi") {
        return currentLang === "en" ? "MORNING SESSION ATTENDANCE" : "KEHADIRAN SESI PAGI";
    } else if (section === "Kehadiran Kokum") {
        return currentLang === "en" ? "CO-CURRICULAR ATTENDANCE" : "KEHADIRAN KOKUM";
    }
    return section;
};

const setLanguage = (lang) => {
    currentLang = lang;
    const t = translations[lang];

    const bmBtn = document.getElementById("lang-bm-btn");
    const enBtn = document.getElementById("lang-en-btn");
    
    if (lang === "en") {
        bmBtn.classList.remove("active");
        enBtn.classList.add("active");
    } else {
        enBtn.classList.remove("active");
        bmBtn.classList.add("active");
    }

    document.getElementById("nav-a").innerText = t.navA;
    document.getElementById("semakMenuBtn").innerText = t.navB;
    document.getElementById("nav-c").innerText = t.navC;
    document.getElementById("sub-kokum").innerText = t.subKokum;
    document.getElementById("sub-pagi").innerText = t.subPagi;
    document.getElementById("cam-title").innerText = t.camTitle;
    document.getElementById("cam-desc").innerText = t.camDesc;
    document.getElementById("cam-btn-txt").innerText = t.camBtnTxt;
    document.getElementById("sch-intro-title").innerText = t.schIntroTitle;
    document.getElementById("sch-intro-desc").innerHTML = t.schIntroDesc;
    document.getElementById("sch-motto-title").innerText = t.schMottoTitle;
    document.getElementById("sch-motto-desc").innerHTML = t.schMottoDesc;
    document.getElementById("sch-loc-title").innerText = t.schLocTitle;
    document.getElementById("sch-info-title").innerText = t.schInfoTitle;
    document.getElementById("sch-addr").innerText = t.schAddr;
    document.getElementById("sch-tel").innerText = t.schTel;
    document.getElementById("sch-fax").innerText = t.schFax;
    document.getElementById("sch-email").innerText = t.schEmail;
    document.getElementById("sch-teachers-title").innerText = t.schTeachersTitle;
    document.getElementById("vass-desc-1").innerHTML = t.vassDesc1;
    document.getElementById("vass-why-title").innerText = t.vassWhyTitle;
    document.getElementById("vass-why-desc").innerHTML = t.vassWhyDesc;
    document.getElementById("vass-adv-title").innerText = t.vassAdvTitle;
    document.getElementById("vass-adv-list").innerHTML = t.vassAdvList;
    document.getElementById("role-ellisa").innerText = t.roleEllisa;
    document.getElementById("role-aleesya").innerText = t.roleAleesya;
    document.getElementById("role-delvina").innerText = t.roleDelvina;
    document.getElementById("trailer-title").innerText = t.trailerTitle;
    document.getElementById("trailer-desc").innerText = t.trailerDesc;
    document.getElementById("play-vid-txt").innerText = t.playVidTxt;
    document.getElementById("guide-title").innerText = t.guideTitle;
    document.getElementById("faq-q1").innerText = t.faqQ1;
    document.getElementById("faq-a1").innerText = t.faqA1;
    document.getElementById("faq-q2").innerText = t.faqQ2;
    document.getElementById("faq-a2").innerHTML = t.faqA2;
    document.getElementById("setting-main-title").innerText = t.settingMainTitle;
    document.getElementById("label-theme").innerText = t.labelTheme;
    document.getElementById("label-lang").innerText = t.labelLang;
    document.getElementById("theme-dark-btn").innerText = t.themeDark;
    document.getElementById("theme-light-btn").innerText = t.themeLight;
    document.getElementById("btn-semak-action").innerText = t.btnSemakAction;
    document.getElementById("info-card-header").innerText = t.infoCardHeader;
    document.getElementById("lbl-info-name").innerText = t.lblInfoName;
    document.getElementById("lbl-info-class").innerText = t.lblInfoClass;
    document.getElementById("lbl-info-kokum").innerText = t.lblInfoKokum;
    document.getElementById("lbl-info-status").innerText = t.lblInfoStatus;
    document.getElementById("studentSearchInput").placeholder = t.phStudentName;
    document.getElementById("currentSectionTitle").innerText = getSectionTitle(currentSection);

    if (lastSearchRawStatus) {
        document.getElementById("resStatus").innerText = translateStatus(lastSearchRawStatus);
    }
};

const heroImages = ["hero1.png", "hero2.png", "hero3.png"];

const slideHero = (direction) => {
    currentHeroIndex += direction;
    if (currentHeroIndex > 3) currentHeroIndex = 1;
    if (currentHeroIndex < 1) currentHeroIndex = 3;
    document.getElementById("heroImageDisplay").src = heroImages[currentHeroIndex - 1];
};

const handleHeroClick = () => {
    if (currentHeroIndex === 1) document.getElementById("sectionSekolah")?.scrollIntoView({ behavior: 'smooth' });
    else if (currentHeroIndex === 2) document.getElementById("sectionProductIntro")?.scrollIntoView({ behavior: 'smooth' });
    else if (currentHeroIndex === 3) document.getElementById("sectionWebGuide")?.scrollIntoView({ behavior: 'smooth' });
};

const jumpToSemakMenu = (targetSection) => {
    onRouteClick('b');
    setTimeout(() => { changeSubSection(targetSection); }, 650); 
};

const changeSubSection = (sectionName) => {
    currentSection = sectionName;
    const titleCard = document.getElementById("currentSectionTitle");
    if(titleCard) titleCard.innerText = getSectionTitle(sectionName);
    
    subMenuBar.querySelectorAll('.submenu-btn').forEach(btn => {
        const btnText = btn.innerText.trim().toUpperCase();
        btn.classList.toggle('active', btnText === getSectionTitle(sectionName).toUpperCase() || btnText === sectionName.toUpperCase());
    });
    
    document.getElementById("maklumatCard").style.display = "none";
    document.getElementById("studentSearchInput").value = "";
};

const handleSubMenuBarVisibility = (route) => { 
    subMenuBar.style.display = (route === 'b') ? "flex" : "none"; 
};

const triggerSemak = async () => {
    try {
        const inputNamaElemen = document.getElementById("studentSearchInput");
        if (!inputNamaElemen) { alert("Ralat: Elemen input carian tidak ditemui!"); return; }
        
        const inputNama = inputNamaElemen.value.trim();
        if (!inputNama) { alert(currentLang === "en" ? "PLEASE ENTER STUDENT NAME" : "SILA MASUKKAN NAMA MURID"); return; }

        const maklumatCard = document.getElementById("maklumatCard");
        const kokumRow = document.getElementById("kokumActivityRow");

        const elNama = document.getElementById("resNama");
        const elKelas = document.getElementById("resKelas");
        const elStatus = document.getElementById("resStatus");
        const elKokum = document.getElementById("resKokum");

        if (maklumatCard) maklumatCard.style.display = "flex";

        const URL_SESI_PAGI = "https://script.google.com/macros/s/AKfycbycZJA9wswfNeXcyaiifFc-l9Q0xTtLTNLX-117Ne6JmT3PUSbFTF3Qoq7Q4SXz4QQflw/exec"; 
        const URL_KOKUM      = "https://script.google.com/macros/s/AKfycbxAqnKDnaaheC08-cm2AFP2WgKsKuTFt1dP9Yu5sEtUtWJBPEsoU065b5Iy7QBqEomS/exec"; 
        
        let targetURL = "";

        if (currentSection === "Kehadiran Kokum") {
            targetURL = URL_KOKUM;
            if (kokumRow) kokumRow.style.display = "block";
        } else {
            targetURL = URL_SESI_PAGI;
            if (kokumRow) kokumRow.style.display = "none";
        }

        const searchingTxt = currentLang === "en" ? "SEARCHING..." : "MENCARI...";
        if (elNama) elNama.innerText = searchingTxt;
        if (elKelas) elKelas.innerText = searchingTxt;
        if (elKokum) elKokum.innerText = searchingTxt;
        if (elStatus) {
            elStatus.innerText = searchingTxt;
            elStatus.style.color = "#333";
        }

        const fullFetchURL = targetURL + "?nama=" + encodeURIComponent(inputNama);
        const response = await fetch(fullFetchURL);
        const data = await response.json();

        if (data && data.status === "ditemui") {
            if (elNama) elNama.innerText = data.nama.toUpperCase();
            if (elKelas) elKelas.innerText = data.kelas.toUpperCase();
            
            let rawStatus = "";

            if (currentSection === "Kehadiran Kokum") {
                rawStatus = data.statusKokum || "BELUM SCAN";
                if (elKokum) elKokum.innerText = (data.aktiviti || "-").toUpperCase();
            } else {
                rawStatus = data.statusPagi || "BELUM SCAN";
            }

            lastSearchRawStatus = rawStatus; 

            if (elStatus) {
                elStatus.innerText = translateStatus(rawStatus);
                const checkUpper = rawStatus.trim().toUpperCase();
                if (checkUpper === "HADIR" || checkUpper === "PRESENT") {
                    elStatus.style.color = "#2e7d32";
                } else if (checkUpper === "LEWAT" || checkUpper === "LATE") {
                    elStatus.style.color = "#ed6c02";
                } else if (checkUpper === "TIDAK HADIR" || checkUpper === "ABSENT") {
                    elStatus.style.color = "#d32f2f";
                } else {
                    elStatus.style.color = "#757575";
                }
            }
        } else {
            lastSearchRawStatus = "";
            if (elNama) elNama.innerText = inputNama.toUpperCase();
            if (elKelas) elKelas.innerText = "-";
            if (elKokum) elKokum.innerText = "-";
            if (elStatus) {
                elStatus.innerText = currentLang === "en" ? "NOT FOUND" : "TIDAK DITEMUI";
                elStatus.style.color = "#d32f2f";
            }
        }
    } catch (error) {
        console.error("Ralat carian:", error);
        lastSearchRawStatus = "";
        if (document.getElementById("resStatus")) {
            document.getElementById("resStatus").innerText = currentLang === "en" ? "CONNECTION ERROR" : "RALAT SAMBUNGAN";
            document.getElementById("resStatus").style.color = "#d32f2f";
        }
    }
};

const setTheme = (theme) => {
    const darkBtn = document.getElementById("theme-dark-btn");
    const lightBtn = document.getElementById("theme-light-btn");
    if (theme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        darkBtn.classList.add("active"); lightBtn.classList.remove("active");
    } else {
        document.body.removeAttribute("data-theme");
        lightBtn.classList.add("active"); darkBtn.classList.remove("active");
    }
};

const endTransition = (route) => {
	const loader = document.querySelector(".loader");
	loader.style.transition = "none"; loader.style.transform = "translateX(0)";
	loader.offsetHeight; 
	loader.style.transition = "transform 0.6s cubic-bezier(0.7, 0, 0.3, 1)";
	loader.style.transform = "translateX(100vw)";
	
	loader.addEventListener("transitionend", () => {
		appRoot.dataset.route = route;
        handleSubMenuBarVisibility(route);
		Array.from(navLinks.children).forEach((link) => {
			link.classList.toggle("active", link.getAttribute('onClick').includes(`'${route}'`));
		});
		loader.style.transform = "translateX(200vw)";
		loader.addEventListener("transitionend", () => { root.classList.remove("disable-hover"); }, { once: true });
	}, { once: true });
};

navLinks.addEventListener("click", (e) => { if (e.target.nodeName === "A") e.preventDefault(); });
const onRouteClick = (route) => {
	if (appRoot.dataset.route === route) return;
	root.classList.add("disable-hover");
	endTransition(route);
};

const scrollTeachersHorizontal = (direction) => {
    const container = document.getElementById("teachersScrollContainer");
    container.scrollBy({ left: direction * 150, behavior: 'smooth' });
};

setInterval(() => { slideHero(1); }, 15000);

const toggleFaq = (element) => {
    const faqItem = element.parentElement;
    faqItem.classList.toggle("active");
    document.querySelectorAll(".faq-item").forEach(item => { if (item !== faqItem) item.classList.remove("active"); });
};

document.addEventListener("DOMContentLoaded", () => {
    const inputNama = document.getElementById("studentSearchInput");
    if (inputNama) {
        inputNama.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                triggerSemak();
            }
        });
    }
});