/* YOUNESS SALMI, offline translator (EN / FR / AR / ES / DE) */
(function () {
  'use strict';

  var LANGS = ['en', 'fr', 'ar', 'es', 'de'];

  var DICT = {
    /* ---------- nav ---------- */
    'nav.home':       { en: 'Home',  fr: 'Accueil', ar: 'الرئيسية', es: 'Inicio', de: 'Start' },
    'nav.about':      { en: 'About', fr: 'À propos', ar: 'عني', es: 'Sobre mí', de: 'Über mich' },
    'nav.experience': { en: 'Experience', fr: 'Expérience', ar: 'الخبرة', es: 'Experiencia', de: 'Berufserfahrung' },
    'nav.projects':   { en: 'Projects', fr: 'Projets', ar: 'المشاريع', es: 'Proyectos', de: 'Projekte' },
    'nav.contact':    { en: 'Contact', fr: 'Contact', ar: 'اتصال', es: 'Contacto', de: 'Kontakt' },

    'footer.email':   { en: 'Email', fr: 'E-mail', ar: 'البريد الإلكتروني', es: 'Correo', de: 'E-Mail' },
    'footer.linkedin':{ en: 'LinkedIn', fr: 'LinkedIn', ar: 'لينكدإن', es: 'LinkedIn', de: 'LinkedIn' },

    /* ---------- home ---------- */
    'home.badge': { en: 'Open to opportunities', fr: 'Ouvert aux opportunités', ar: 'متاح للفرص', es: 'Abierto a oportunidades', de: 'Offen für Chancen' },
    'home.role': {
      en: 'Mechanical Engineering Technician skilled across mechanical design, CAD (SolidWorks, AutoCAD), manufacturing processes, and CNC machining, plus industrial maintenance and quality control.',
      fr: 'Technicien en génie mécanique, conception CAO, fabrication, développement produit. Je transforme les idées de produits en CAO dimensionnée et fabricable.',
      ar: 'تقني في الهندسة الميكانيكية, تصميم CAD، التصنيع، تطوير المنتجات. أحوّل أفكار المنتجات إلى تصميمات CAD قابلة للتصنيع بأبعاد دقيقة.',
      es: 'Técnico en Ingeniería Mecánica, diseño CAD, fabricación, desarrollo de productos. Convierto ideas de producto en CAD dimensionado y fabricable.',
      de: 'Techniker für Maschinenbau, CAD-Konstruktion, Fertigung, Produktentwicklung. Ich mache aus Produktideen bemaßbare, fertigbare CAD-Modelle.'
    },
    'home.cta.projects': { en: 'View Projects', fr: 'Voir les projets', ar: 'عرض المشاريع', es: 'Ver proyectos', de: 'Projekte ansehen' },
    'home.cta.contact': { en: 'Contact me', fr: 'Me contacter', ar: 'تواصل معي', es: 'Contáctame', de: 'Kontaktieren Sie mich' },
    'home.projectsTitle':{ en: 'Selected projects', fr: 'Projets sélectionnés', ar: 'مشاريع مختارة', es: 'Proyectos seleccionados', de: 'Ausgewählte Projekte' },
    'home.aboutLabel':   { en: 'About', fr: 'À propos', ar: 'حول', es: 'Sobre mí', de: 'Über mich' },
    'home.aboutText': {
      en: 'Hands-on in CAD design, product development, and manufacturing engineering, including real experience on a live production line. Looking for an Engineering Trainee role in product development.',
      fr: 'Expérience concrète en conception CAO, développement produit et ingénierie de fabrication, y compris une vraie expérience sur une ligne de production. Je recherche un poste d\u2019ingénieur stagiaire en développement produit.',
      ar: 'خبرة عملية في تصميم CAD، تطوير المنتجات، وهندسة التصنيع, بما في ذلك تجربة حقيقية على خط إنتاج فعلي. أبحث عن منصب مهندس متدرب في تطوير المنتجات.',
      es: 'Experiencia práctica en diseño CAD, desarrollo de productos e ingeniería de fabricación, incluida experiencia real en una línea de producción. Busco un puesto de becario de ingeniería en desarrollo de productos.',
      de: 'Praktische Erfahrung in CAD-Konstruktion, Produktentwicklung und Fertigungstechnik, einschließlich echter Erfahrung an einer Produktionslinie. Ich suche eine Stelle als Ingenieurpraktikant in der Produktentwicklung.'
    },
    'home.aboutLink': { en: 'About me →', fr: 'À propos de moi →', ar: 'المزيد عني ←', es: 'Sobre mí →', de: 'Über mich →' },
    'home.contactLabel': { en: 'Contact', fr: 'Contact', ar: 'اتصال', es: 'Contacto', de: 'Kontakt' },
    'home.contactLine': {
      en: 'Available for internships & freelance CAD work',
      fr: 'Disponible pour des stages et de la conception CAO en freelance',
      ar: 'متاح للتدريب والعمل الحر في تصميم CAD',
      es: 'Disponible para prácticas y trabajo freelance de CAD',
      de: 'Verfügbar für Praktika und freie CAD-Projekte'
    },

    /* ---------- shared project cards ---------- */
    'p.velora.title': { en: 'VELORA, Urban Cargo Bike', fr: 'VELORA, Cargo bike urbain', ar: 'فيليورا, دراجة شحن حضرية', es: 'VELORA, Bicicleta de carga urbana', de: 'VELORA, Urbanes Lastenrad' },
    'p.velora.sum': {
      en: 'Clean-sheet cargo bike in SolidWorks: chassis optimized for strength and weight, stable load platform, manufacturing method recommended.',
      fr: 'Cargo bike conçu de zéro dans SolidWorks : châssis optimisé en résistance et poids, plateforme de charge stable, méthode de fabrication recommandée.',
      ar: 'دراجة شحن مصممة من الصفر في SolidWorks: هيكل محسّن للصلابة والوزن، منصة تحميل مستقرة، وطريقة تصنيع موصى بها.',
      es: 'Bicicleta de carga diseñada desde cero en SolidWorks: chasis optimizado en resistencia y peso, plataforma de carga estable, método de fabricación recomendado.',
      de: 'Lastenrad von Grund auf in SolidWorks konstruiert: Rahmen optimiert für Festigkeit und Gewicht, stabile Ladefläche, empfohlenes Fertigungsverfahren.'
    },
    'p.turbo.title': { en: 'Hybrid Turbo-Compressor System', fr: 'Système de turbocompresseur hybride', ar: 'نظام ضاغط توربيني هجين', es: 'Sistema de turbocompresor híbrido', de: 'Hybrid-Turboverdichter-System' },
    'p.turbo.sum': {
      en: 'Full 3D assembly of a motor-assisted turbo-compressor, with duty-driven material selection and technical drawings.',
      fr: 'Assemblage 3D complet d\u2019un turbocompresseur assisté électriquement, avec sélection de matériaux selon l\u2019usage et plans techniques.',
      ar: 'تجميع ثلاثي الأبعاد كامل لضاغط توربيني بمساعدة محرك، مع اختيار المواد حسب الاستخدام ورسومات تقنية.',
      es: 'Ensamblaje 3D completo de un turbocompresor asistido por motor, con selección de materiales según el servicio y planos técnicos.',
      de: 'Komplette 3D-Baugruppe eines motorunterstützten Turboverdichters, mit einsatzgerechter Materialauswahl und technischen Zeichnungen.'
    },
    'p.voltbox.title': { en: 'VoltBox, Portable Battery', fr: 'VoltBox, Batterie portable', ar: 'فولت بوكس, بطارية محمولة', es: 'VoltBox, Batería portátil', de: 'VoltBox, Tragbare Batterie' },
    'p.voltbox.sum': {
      en: 'Portable power bank for electric scooter riders, an on-the-go charging solution independent of fixed infrastructure. Finalist at the first CMC Trophy.',
      fr: 'Batterie externe portable pour usagers de trottinettes \u00e9lectriques \u2014 une solution de recharge en d\u00e9placement, ind\u00e9pendante des infrastructures fixes. Finaliste du premier Troph\u00e9e CMC.',
      ar: 'بنك طاقة محمول لراكبي الدراجات الكهربائية, حل شحن أثناء التنقل مستقل عن البنية التحتية الثابتة. ضمن نهائيات النسخة الأولى من كأس CMC.',
      es: 'Banco de energ\u00eda port\u00e1til para usuarios de patinetes el\u00e9ctricos \u2014 una soluci\u00f3n de recarga en movimiento, independiente de la infraestructura fija. Finalista del primer Trofeo CMC.',
      de: 'Tragbare Powerbank f\u00fcr E-Scooter-Fahrer \u2014 eine Unterwegs-Ladel\u00f6sung unabh\u00e4ngig von fester Infrastruktur. Finalist der ersten CMC Trophy.'
    },
    'p.fujikura.title': { en: 'Fujikura, Maintenance Data System', fr: 'Fujikura, Système de données de maintenance', ar: 'فوجيكورا, نظام بيانات الصيانة', es: 'Fujikura, Sistema de datos de mantenimiento', de: 'Fujikura, Instandhaltungs-Datensystem' },
    'p.fujikura.sum': {
      en: 'Maintenance Failure Analysis Tool, a browser-only app that turns Excel maintenance logs into risk analysis, forecasts and a 2026 preventive plan.',
      fr: 'Outil d\u2019analyse des d\u00e9faillances de maintenance, une application navigateur qui transforme les journaux Excel en analyse de risque, pr\u00e9visions et plan pr\u00e9ventif 2026.',
      ar: 'أداة تحليل أعطال الصيانة, تطبيق يعمل في المتصفح يحوّل سجلات إكسل إلى تحليل مخاطر وتنبؤات وخطة وقائية لعام 2026.',
      es: 'Herramienta de an\u00e1lisis de aver\u00edas de mantenimiento, una app de navegador que convierte los registros Excel en an\u00e1lisis de riesgo, pron\u00f3sticos y un plan preventivo 2026.',
      de: 'Maintenance-Failure-Analysis-Tool, eine Browseranwendung, die Excel-Protokolle in Risikoanalyse, Prognosen und einen Pr\u00e4ventivplan 2026 verwandelt.'
    },
    'p.link': { en: 'Read case study →', fr: 'Lire l\u2019étude de cas →', ar: 'اقرأ دراسة الحالة ←', es: 'Leer caso de estudio →', de: 'Fallstudie lesen →' },

    /* ---------- about ---------- */
    'about.badge': { en: 'About', fr: 'À propos', ar: 'عني', es: 'Sobre mí', de: 'Über mich' },
    'about.h1': { en: 'Really, it\u2019s simple.', fr: 'En fait, c\u2019est simple.', ar: 'ببساطة، الأمر واضح.', es: 'En realidad es simple.', de: 'Eigentlich ist es einfach.' },
    'about.role': {
      en: 'I turn ideas into solutions, a concept becomes a model, a model becomes a drawing, a drawing becomes something a machinist can build.',
      fr: 'Je transforme les idées en solutions : un concept devient un modèle, un modèle devient un plan, un plan devient quelque chose qu\u2019un machiniste peut fabriquer.',
      ar: 'أحوّل الأفكار إلى حلول, الفكرة تتحول إلى نموذج، والنموذج إلى رسم، والرسم إلى ما يمكن للخبير التقني تصنيعه.',
      es: 'Convierto ideas en soluciones: un concepto se vuelve modelo, un modelo plano, un plano algo que un maquinista puede construir.',
      de: 'Ich mache aus Ideen Lösungen, aus einem Konzept wird ein Modell, aus einem Modell eine Zeichnung, aus einer Zeichnung etwas, das ein Maschinist bauen kann.'
    },
    'about.bio': {
      en: 'Mechanical Engineering Technician with hands-on experience in CAD design, product development, and manufacturing engineering. Proficient in SolidWorks and AutoCAD. I spent summer 2026 at Fujikura Automotive (Kenitra) as a Maintenance Assistant, where I contributed to a maintenance data system and prepared preventive maintenance plans. Seeking an Engineering Trainee role in product development in an international engineering environment.',
      fr: 'Technicien en génie mécanique avec une expérience pratique en conception CAO, développement produit et ingénierie de fabrication. Maîtrise de SolidWorks et AutoCAD. J\u2019ai passé l\u2019été 2026 chez Fujikura Automotive (Kénitra) comme assistant en maintenance, où j\u2019ai contribué à un système de données de maintenance et préparé des plans de maintenance préventive. Je recherche un poste d\u2019ingénieur stagiaire en développement produit dans un environnement d\u2019ingénierie international.',
      ar: 'تقني في الهندسة الميكانيكية بخبرة عملية في تصميم CAD وتطوير المنتجات وهندسة التصنيع، وكفاءة في SolidWorks و AutoCAD. قضيت صيف 2026 لدى فوجيكورا أوتوموتيف (القنيطرة) كمساعد صيانة، حيث ساهمت في نظام بيانات الصيانة وأعددت خطط الصيانة الوقائية. أبحث عن منصب مهندس متدرب في تطوير المنتجات في بيئة هندسية دولية.',
      es: 'Técnico en Ingeniería Mecánica con experiencia práctica en diseño CAD, desarrollo de productos e ingeniería de fabricación. Competente en SolidWorks y AutoCAD. Pasé el verano de 2026 en Fujikura Automotive (Kenitra) como asistente de mantenimiento, donde contribuí a un sistema de datos de mantenimiento y elaboré planes de mantenimiento preventivo. Busco un puesto de becario de ingeniería en desarrollo de productos en un entorno de ingeniería internacional.',
      de: 'Techniker für Maschinenbau mit praktischer Erfahrung in CAD-Konstruktion, Produktentwicklung und Fertigungstechnik. Kenntnisse in SolidWorks und AutoCAD. Im Sommer 2026 arbeitete ich bei Fujikura Automotive (Kenitra) als Instandhaltungsassistent, wo ich an einem Instandhaltungs-Datensystem mitwirkte und präventive Instandhaltungspläne vorbereitete. Ich suche eine Stelle als Ingenieurpraktikant in der Produktentwicklung in einem internationalen Ingenieurumfeld.'
    },
    'about.education': { en: 'Education', fr: 'Formation', ar: 'التعليم', es: 'Educación', de: 'Ausbildung' },
    'about.edu1': {
      en: '<strong>DTS Mechanical Engineering</strong>, Cité des Métiers et des Compétences de L\u2019Oriental, 2024–2026',
      fr: '<strong>DTS Génie Mécanique</strong>, Cité des Métiers et des Compétences de l\u2019Oriental, 2024–2026',
      ar: '<strong>دبلوم التقني المتخصص في الهندسة الميكانيكية</strong>، مدينة المهن والكفاءات بجهة الشرق, 2024–2026',
      es: '<strong>DTS en Ingeniería Mecánica</strong>, Cité des Métiers et des Compétences de L\u2019Oriental, 2024–2026',
      de: '<strong>DTS Maschinenbau</strong>, Cité des Métiers et des Compétences de L\u2019Oriental, 2024–2026'
    },
    'about.edu2': {
      en: '<strong>Baccalauréat Sciences Physiques</strong>, 2024',
      fr: '<strong>Baccalauréat Sciences Physiques</strong>, 2024',
      ar: '<strong>بكالوريا العلوم الفيزيائية</strong>, 2024',
      es: '<strong>Bachillerato en Ciencias Físicas</strong>, 2024',
      de: '<strong>Baccalauréat Sciences Physiques</strong>, 2024'
    },
    'about.skills': { en: 'Skills', fr: 'Compétences', ar: 'المهارات', es: 'Habilidades', de: 'Fähigkeiten' },
    'about.technical': { en: 'Technical', fr: 'Techniques', ar: 'تقنية', es: 'Técnicas', de: 'Fachlich' },
    'about.soft':      { en: 'Soft', fr: 'Savoir-être', ar: 'مهارات شخصية', es: 'Interpersonales', de: 'Soft Skills' },
    'about.langTitle': { en: 'Languages', fr: 'Langues', ar: 'اللغات', es: 'Idiomas', de: 'Sprachen' },
    'about.sk.cad':  { en: 'CNC Machining', fr: 'Usinage CNC', ar: 'تصنيع CNC', es: 'Mecanizado CNC', de: 'CNC-Bearbeitung' },
    'about.sk.proc': { en: 'Manufacturing Processes', fr: 'Procédés de fabrication', ar: 'عمليات التصنيع', es: 'Procesos de fabricación', de: 'Fertigungsverfahren' },
    'about.sk.mat':  { en: 'Materials Science', fr: 'Science des matériaux', ar: 'علم المواد', es: 'Ciencia de los materiales', de: 'Werkstoffkunde' },
    'about.sk.lean': { en: 'Lean Manufacturing', fr: 'Lean Manufacturing', ar: 'التصنيع الخالي من الهدر', es: 'Lean Manufacturing', de: 'Lean-Manufacturing' },
    'about.sk.draw': { en: 'Engineering Drawings', fr: 'Plans techniques', ar: 'الرسومات الهندسية', es: 'Planos técnicos', de: 'Technische Zeichnungen' },
    'about.so.prob': { en: 'Problem Solving', fr: 'Résolution de problèmes', ar: 'حل المشكلات', es: 'Resolución de problemas', de: 'Problemlösung' },
    'about.so.crit': { en: 'Critical Thinking', fr: 'Pensée critique', ar: 'التفكير النقدي', es: 'Pensamiento crítico', de: 'Kritisches Denken' },
    'about.so.comm': { en: 'Communication', fr: 'Communication', ar: 'التواصل', es: 'Comunicación', de: 'Kommunikation' },
    'about.so.team': { en: 'Teamwork', fr: 'Travail d\u2019équipe', ar: 'العمل الجماعي', es: 'Trabajo en equipo', de: 'Teamarbeit' },
    'about.so.time': { en: 'Time Management', fr: 'Gestion du temps', ar: 'إدارة الوقت', es: 'Gestión del tiempo', de: 'Zeitmanagement' },
    'about.so.lead': { en: 'Leadership', fr: 'Leadership', ar: 'القيادة', es: 'Liderazgo', de: 'Führung' },
    'about.lang.ar': { en: 'Arabic, native', fr: 'Arabe, natif', ar: 'العربية, اللغة الأم', es: 'Árabe, nativo', de: 'Arabisch, Muttersprache' },
    'about.lang.en': { en: 'English, fluent', fr: 'Anglais, courant', ar: 'الإنجليزية, بطلاقة', es: 'Inglés, fluido', de: 'Englisch, fließend' },
    'about.lang.fr': { en: 'French, fluent', fr: 'Français, courant', ar: 'الفرنسية, بطلاقة', es: 'Francés, fluido', de: 'Französisch, fließend' },

    /* ---------- projects index ---------- */
    'proj.badge': { en: 'Projects', fr: 'Projets', ar: 'المشاريع', es: 'Proyectos', de: 'Projekte' },
    'proj.h1': { en: 'Four projects, documented.', fr: 'Quatre projets, documentés.', ar: 'أربعة مشاريع موثقة.', es: 'Cuatro proyectos documentados.', de: 'Vier Projekte, dokumentiert.' },
    'proj.role': {
      en: 'Each one follows the same simple template: the problem, what I did, and the result.',
      fr: 'Chacun suit le même modèle simple : le problème, ce que j\u2019ai fait, et le résultat.',
      ar: 'كل مشروع يتبع نفس القالب البسيط: المشكلة، ما قمت به، والنتيجة.',
      es: 'Cada uno sigue una plantilla sencilla: el problema, lo que hice y el resultado.',
      de: 'Jedes folgt derselben einfachen Struktur: das Problem, was ich getan habe und das Ergebnis.'
    },

    /* ---------- professional experience page ---------- */
    'exp.h1': { en: 'Professional experience.', fr: 'Expérience professionnelle.', ar: 'الخبرة المهنية.', es: 'Experiencia profesional.', de: 'Berufserfahrung.' },
    'exp.intro': {
      en: 'Two months as a Maintenance Assistant on a live automotive production line, real maintenance, real data, real teams.',
      fr: 'Deux mois comme assistant en maintenance sur une ligne de production automobile réelle, vraie maintenance, vraies données, vraies équipes.',
      ar: 'شهران كمساعد صيانة على خط إنتاج سيارات فعلي, صيانة حقيقية، بيانات حقيقية، فرق عمل حقيقية.',
      es: 'Dos meses como asistente de mantenimiento en una línea de producción automotriz real: mantenimiento real, datos reales, equipos reales.',
      de: 'Zwei Monate als Instandhaltungsassistent an einer echten Automobilproduktionslinie, echte Instandhaltung, echte Daten, echte Teams.'
    },
    'exp.company': { en: 'Fujikura Automotive Morocco', fr: 'Fujikura Automotive Maroc', ar: 'فوجيكورا أوتوموتيف المغرب', es: 'Fujikura Automotive Marruecos', de: 'Fujikura Automotive Marokko' },
    'exp.city': { en: 'Kenitra, Morocco', fr: 'Kénitra, Maroc', ar: 'القنيطرة، المغرب', es: 'Kenitra, Marruecos', de: 'Kenitra, Marokko' },
    'exp.role': { en: 'Maintenance Assistant', fr: 'Assistant en maintenance', ar: 'مساعد صيانة', es: 'Asistente de mantenimiento', de: 'Instandhaltungsassistent' },
    'exp.dates': { en: 'Summer 2026, 2-month internship', fr: 'Été 2026, stage de 2 mois', ar: 'صيف 2026, تدريب لمدة شهرين', es: 'Verano 2026, prácticas de 2 meses', de: 'Sommer 2026, 2-monatiges Praktikum' },
    'exp.what': { en: 'What I did', fr: 'Ce que j\u2019ai fait', ar: 'ما قمت به', es: 'Lo que hice', de: 'Was ich getan habe' },
    'exp.item1': {
      en: 'Supported preventive and corrective maintenance on production line equipment.',
      fr: 'Participation à la maintenance préventive et corrective des équipements de la ligne de production.',
      ar: 'دعمت الصيانة الوقائية والتصحيحية لمعدات خط الإنتاج.',
      es: 'Apoyé el mantenimiento preventivo y correctivo de los equipos de la línea de producción.',
      de: 'Unterstützung der präventiven und korrektiven Instandhaltung der Produktionslinienausrüstung.'
    },
    'exp.item2': {
      en: 'Contributed to a maintenance data analysis system, structuring how interventions are logged.',
      fr: 'Contribution à un système d\u2019analyse des données de maintenance, structurer la saisie des interventions.',
      ar: 'ساهمت في نظام تحليل بيانات الصيانة, تنظيم طريقة تسجيل التدخلات.',
      es: 'Contribuí a un sistema de análisis de datos de mantenimiento, estructurando el registro de intervenciones.',
      de: 'Mitwirkung an einem Instandhaltungs-Datenanalysesystem, Strukturierung der Erfassung von Eingriffen.'
    },
    'exp.item3': {
      en: 'Prepared preventive maintenance plans from real floor data.',
      fr: 'Préparation de plans de maintenance préventive à partir de données terrain réelles.',
      ar: 'أعددت خطط الصيانة الوقائية من بيانات ميدانية حقيقية.',
      es: 'Elaboré planes de mantenimiento preventivo a partir de datos reales de planta.',
      de: 'Erstellung präventiver Instandhaltungspläne aus realen Daten der Halle.'
    },
    'exp.item4': {
      en: 'Collaborated with production teams on continuous improvement.',
      fr: 'Collaboration avec les équipes de production sur l\u2019amélioration continue.',
      ar: 'تعاونت مع فرق الإنتاج على التحسين المستمر.',
      es: 'Colaboré con los equipos de producción en la mejora continua.',
      de: 'Zusammenarbeit mit Produktionsteams an kontinuierlicher Verbesserung.'
    },

    /* ---------- contact ---------- */
    'ct.badge': { en: 'Available, open to any opportunity', fr: 'Disponible, ouvert à toute opportunité', ar: 'متاح, مفتوح لأي فرصة', es: 'Disponible, abierto a cualquier oportunidad', de: 'Verfügbar, offen für jede Gelegenheit' },
    'ct.h1': { en: 'Let\u2019s talk.', fr: 'Parlons-en.', ar: 'لنتحدث.', es: 'Hablemos.', de: 'Reden wir.' },
    'ct.email': { en: 'Email', fr: 'E-mail', ar: 'البريد الإلكتروني', es: 'Correo electrónico', de: 'E-Mail' },
    'ct.phone': { en: 'Phone', fr: 'Téléphone', ar: 'الهاتف', es: 'Teléfono', de: 'Telefon' },
    'ct.linkedin': { en: 'LinkedIn', fr: 'LinkedIn', ar: 'لينكدإن', es: 'LinkedIn', de: 'LinkedIn' },
    'ct.cv': { en: 'Curriculum Vitae', fr: 'Curriculum Vitae', ar: 'السيرة الذاتية', es: 'Currículum Vitae', de: 'Lebenslauf' },
    'ct.cv.en': { en: 'Download CV, English', fr: 'Télécharger le CV, anglais', ar: 'تحميل السيرة الذاتية, بالإنجليزية', es: 'Descargar CV, inglés', de: 'Lebenslauf herunterladen, Englisch' },
    'ct.cv.fr': { en: 'Download CV, Français', fr: 'Télécharger le CV, français', ar: 'تحميل السيرة الذاتية, بالفرنسية', es: 'Descargar CV, francés', de: 'Lebenslauf herunterladen, Französisch' },
    'ct.formLabel': { en: 'Or send a message', fr: 'Ou envoyez un message', ar: 'أو أرسل رسالة', es: 'O envía un mensaje', de: 'Oder senden Sie eine Nachricht' },
    'ct.form.name': { en: 'Name', fr: 'Nom', ar: 'الاسم', es: 'Nombre', de: 'Name' },
    'ct.form.mail': { en: 'Email', fr: 'E-mail', ar: 'البريد الإلكتروني', es: 'Correo electrónico', de: 'E-Mail' },
    'ct.form.msg': { en: 'Message', fr: 'Message', ar: 'الرسالة', es: 'Mensaje', de: 'Nachricht' },
    'ct.form.send': { en: 'Send', fr: 'Envoyer', ar: 'إرسال', es: 'Enviar', de: 'Senden' },
    'form.sent': { en: 'Message sent, I will get back to you shortly.', fr: 'Message envoyé, je vous répondrai rapidement.', ar: 'تم إرسال الرسالة, سأرد عليك قريبًا.', es: 'Mensaje enviado, te responderé en breve.', de: 'Nachricht gesendet, ich melde mich in Kürze.' },
    'form.error': { en: 'Something went wrong, please email me directly or try again.', fr: 'Une erreur est survenue, veuillez m\u2019\u00e9crire directement ou r\u00e9essayer.', ar: 'حدث خطأ ما, يرجى مراسلتي مباشرة أو المحاولة مجددًا.', es: 'Algo salió mal, escríbeme directamente o inténtalo de nuevo.', de: 'Etwas ist schiefgelaufen, bitte schreiben Sie mir direkt oder versuchen Sie es erneut.' },
    'ct.ph.name': { en: 'Your name', fr: 'Votre nom', ar: 'اسمك', es: 'Tu nombre', de: 'Ihr Name' },
    'ct.ph.msg': { en: 'Briefly describe the project or role.', fr: 'Décrivez brièvement le projet ou le poste.', ar: 'صف المشروع أو الدور بإيجاز.', es: 'Describe brevemente el proyecto o el puesto.', de: 'Beschreiben Sie kurz das Projekt oder die Stelle.' },

    /* ---------- case study (shared) ---------- */
    'cs.back':    { en: '← Projects', fr: '← Projets', ar: '← المشاريع', es: '← Proyectos', de: '← Projekte' },
    'cs.problem': { en: 'The problem', fr: 'Le problème', ar: 'المشكلة', es: 'El problema', de: 'Das Problem' },
    'cs.did':     { en: 'What I did', fr: 'Ce que j\u2019ai fait', ar: 'ما قمت به', es: 'Lo que hice', de: 'Was ich getan habe' },
    'cs.result':  { en: 'Result', fr: 'Résultat', ar: 'النتيجة', es: 'Resultado', de: 'Ergebnis' },
    'meta.role':  { en: 'Role', fr: 'Rôle', ar: 'الدور', es: 'Rol', de: 'Rolle' },
    'meta.tools': { en: 'Tools', fr: 'Outils', ar: 'الأدوات', es: 'Herramientas', de: 'Werkzeuge' },
    'meta.date':  { en: 'Date', fr: 'Date', ar: 'التاريخ', es: 'Fecha', de: 'Datum' },
    'meta.where': { en: 'Where', fr: 'Lieu', ar: 'المكان', es: 'Dónde', de: 'Ort' },

    /* ---------- VELORA ---------- */
    'velora.role': { en: 'Sole designer', fr: 'Concepteur unique', ar: 'مصمم وحيد', es: 'Diseñador único', de: 'Alleinkonstrukteur' },
    'velora.date': { en: 'June 2026', fr: 'Juin 2026', ar: 'يونيو 2026', es: 'Junio 2026', de: 'Juni 2026' },
    'velora.problem': {
      en: 'Urban delivery runs are short and light, but the last-mile fleet runs on oversized fuel-based vans. Cargo bikes could fix that, but most are sold as kits, not designed for local streets, budgets, and maintenance. <strong>VELORA proves a pedal-powered cargo bike can be designed, not just assembled.</strong>',
      fr: 'Les livraisons urbaines sont courtes et légères, mais la flotte du dernier kilomètre repose sur des fourgonnettes surdimensionnées à essence. Les cargo bikes pourraient résoudre cela, mais la plupart se vendent en kit, sans être conçus pour les rues locales, les budgets et la maintenance. <strong>VELORA prouve qu\u2019un cargo bike à pédales peut être conçu, pas seulement assemblé.</strong>',
      ar: 'رحلات التوصيل الحضرية قصيرة وخفيفة، لكن أسطول الميل الأخير يعتمد على شاحنات كبيرة تعمل بالوقود. يمكن لدراجات الشحن أن تحل ذلك, لكن معظمها يُباع كأطقم، دون تصميم للشوارع المحلية والميزانيات والصيانة. <strong>فيليورا تثبت أن دراجة الشحن بالدواسات يمكن تصميمها، لا مجرد تجميعها.</strong>',
      es: 'Los repartos urbanos son cortos y ligeros, pero la flota de última milla se apoya en furgonetas sobredimensionadas de gasolina. Las bicicletas de carga podrían solucionarlo, pero la mayoría se vende en kit, sin diseñarse para calles, presupuestos y mantenimiento locales. <strong>VELORA demuestra que una bicicleta de carga a pedales puede diseñarse, no solo ensamblarse.</strong>',
      de: 'Städtische Lieferfahrten sind kurz und leicht, doch die letzte Meile läuft mit übergroßen, benzinbetriebenen Transportern. Lastenräder könnten das ändern, doch die meisten werden als Bausatz verkauft, ohne für lokale Straßen, Budgets und Wartung konstruiert zu sein. <strong>VELORA beweist, dass ein Pedal-Lastenrad konstruiert und nicht nur zusammengesetzt werden kann.</strong>'
    },
    'velora.did': {
      en: 'Studied cargo-bike families and delivery loads; chose a longtail layout so the load sits low over the rear axle. Built a full SolidWorks assembly, frame, fork, wheels, drivetrain, cargo platform. Iterated the chassis for the best strength-to-weight with standard steel tubes, sized the platform for stable load distribution, checked rider ergonomics, and recommended a welded, jig-built production method.',
      fr: 'J\u2019ai étudié les familles de cargo bikes et les charges de livraison ; j\u2019ai choisi une configuration longtail pour une charge basse au-dessus de l\u2019essieu arrière. J\u2019ai construit un assemblage SolidWorks complet, cadre, fourche, roues, transmission, plateforme de charge. J\u2019ai itéré le châssis pour le meilleur rapport résistance/poids avec des tubes en acier standard, dimensionné la plateforme pour une répartition stable de la charge, vérifié l\u2019ergonomie du cycliste et recommandé une méthode de production soudée sur gabarit.',
      ar: 'درست أنواع دراجات الشحن وأحمال التوصيل؛ اخترت تصميم لونغ تايل بحيث تكون الحمولة منخفضة فوق المحور الخلفي. بنيت تجميعًا كاملاً في SolidWorks, الهيكل، الشوكة، العجلات، نظام الدفع، منصة التحميل. طوّرت الهيكل لأفضل نسبة صلابة إلى وزن باستخدام أنابيب فولاذية قياسية، وحددت أبعاد المنصة لتوزيع حمولة مستقر، وفحصت بيئة العمل، وأوصيت بطريقة إنتاج ملحومة على تركيبات.',
      es: 'Estudié las familias de bicicletas de carga y las cargas de reparto; elegí una configuración longtail para llevar la carga baja sobre el eje trasero. Construí un ensamblaje completo en SolidWorks, cuadro, horquilla, ruedas, transmisión, plataforma de carga. Iteré el chasis para el mejor ratio resistencia-peso con tubos de acero estándar, dimensioné la plataforma para una distribución estable, revisé la ergonomía del ciclista y recomendé un método de producción soldado con plantillas.',
      de: 'Ich untersuchte Lastenrad-Familien und Lieferlasten; gewählt wurde ein Longtail-Konzept, damit die Last tief über der Hinterachse sitzt. Ich baute eine vollständige SolidWorks-Baugruppe, Rahmen, Gabel, Räder, Antrieb, Ladefläche. Ich iterierte den Rahmen für das beste Festigkeits-Gewichts-Verhältnis mit Standard-Stahlrohren, dimensionierte die Ladefläche für stabile Lastverteilung, prüfte die Fahrerergonomie und empfahl ein geschweißtes, lehrengefertigtes Produktionsverfahren.'
    },
    'velora.result': {
      en: 'A complete, dimensioned model ready for prototyping, chassis optimized, load platform stable, and a clear manufacturing method. <strong>If I did it again:</strong> run FEA on the weldment and test a physical prototype before finalizing tube sizes. The lesson: manufacturability and ergonomics constrain geometry from the first sketch, not at the end.',
      fr: 'Un modèle complet et dimensionné prêt pour le prototypage, châssis optimisé, plateforme de charge stable, et une méthode de fabrication claire. <strong>Si c\u2019était à refaire :</strong> réaliser une analyse par éléments finis de la soudure et tester un prototype physique avant de figer les diamètres de tubes. La leçon : la fabricabilité et l\u2019ergonomie contraignent la géométrie dès le premier croquis, pas à la fin.',
      ar: 'نموذج كامل بأبعاد دقيقة جاهز للنمذجة الأولية, هيكل محسّن، منصة تحميل مستقرة، وطريقة تصنيع واضحة. <strong>لو أعدت ذلك:</strong> لإجراء تحليل بالعناصر المحدودة على اللحام واختبار نموذج مادي قبل تثبيت أقطار الأنابيب. الدرس: قابلية التصنيع وبيئة العمل تحددان الهندسة من أول رسم، لا في النهاية.',
      es: 'Un modelo completo y dimensionado listo para prototipar: chasis optimizado, plataforma estable y un método de fabricación claro. <strong>Si lo repitiera:</strong> haría un análisis de elementos finitos de la soldadura y probaría un prototipo físico antes de fijar los diámetros de tubo. La lección: la fabricabilidad y la ergonomía condicionan la geometría desde el primer boceto, no al final.',
      de: 'Ein vollständiges, bemaßtes Modell, bereit für die Prototypenphase, optimierter Rahmen, stabile Ladefläche und ein klares Fertigungsverfahren. <strong>Würde ich es erneut tun:</strong> eine FEM-Analyse der Schweißnaht durchführen und einen physischen Prototyp testen, bevor die Rohrdurchmesser finalisiert werden. Die Lehre: Fertigbarkeit und Ergonomie bestimmen die Geometrie vom ersten Entwurf an, nicht am Ende.'
    },
 
    /* ---------- TURBO ---------- */
    'turbo.role': { en: 'Mechanical designer', fr: 'Concepteur mécanique', ar: 'مصمم ميكانيكي', es: 'Diseñador mecánico', de: 'Mechanischer Konstrukteur' },
    'turbo.date': { en: '2025', fr: '2025', ar: '2025', es: '2025', de: '2025' },
    'turbo.problem': {
      en: 'A fixed single-stage turbo-compressor locks you into one pressure/flow compromise. Plants with fluctuating load run oversized and waste energy, or undersized and bottleneck. <strong>The brief: prove a motor-assisted hybrid layout, packaging, and materials before any hardware is cut.</strong>',
      fr: 'Un turbocompresseur à un étage fixe vous enferme dans un seul compromis pression/débit. Les usines à charge fluctuante tournent surdimensionnées et gaspillent de l\u2019énergie, ou sous-dimensionnées et deviennent un goulot. <strong>Le cahier des charges : prouver la configuration hybride assistée par moteur, le packaging et les matériaux avant de couper du métal.</strong>',
      ar: 'الضاغط التوربيني أحادي المرحلة الثابت يفرض حلًا واحدًا للضغط/التدفق. المصانع ذات الأحمال المتغيرة تعمل بحجم أكبر وتهدر الطاقة، أو بحجم أصغر وتتسبب في عنق زجاجة. <strong>الهدف: إثبات التصميم الهجين بمساعدة محرك، والتغليف، والمواد قبل أي تصنيع فعلي.</strong>',
      es: 'Un turbocompresor de una sola etapa fija te encierra en un único compromiso presión/caudal. Las plantas con carga fluctuante van sobredimensionadas y desperdician energía, o subdimensionadas y hacen cuello de botella. <strong>La tarea: probar la configuración híbrida asistida por motor, el empaquetado y los materiales antes de cortar cualquier pieza.</strong>',
      de: 'Ein fester einstufiger Turboverdichter erzwingt einen einzigen Druck/Durchsatz-Kompromiss. Anlagen mit schwankender Last laufen entweder überdimensioniert und verschwenden Energie oder unterdimensioniert und bilden einen Engpass. <strong>Die Aufgabe: ein motorunterstütztes Hybrid-Layout, Packaging und Materialien nachweisen, bevor irgendetwas gefertigt wird.</strong>'
    },
    'turbo.did': {
      en: 'Mapped compressor configurations and defined the operating envelope. Built the full SolidWorks assembly, housings, impeller, motor, bearings, couplings, checking fit, access, and thermal separation at each stage. Chose materials by duty (temperature, wear, corrosion) and produced manufacturing drawings of the housings and rotating parts.',
      fr: 'J\u2019ai cartographié les configurations de compresseurs et défini l\u2019enveloppe de fonctionnement. J\u2019ai construit l\u2019assemblage SolidWorks complet, carters, roue, moteur, paliers, accouplements, en vérifiant à chaque étape l\u2019ajustement, l\u2019accès et la séparation thermique. J\u2019ai choisi les matériaux selon l\u2019usage (température, usure, corrosion) et produit les plans de fabrication des carters et des pièces en rotation.',
      ar: 'حددت تصاميم الضواغط وعرفت نطاق التشغيل. بنيت التجميع الكامل في SolidWorks, الأغلفة، المروحة، المحرك، المحامل، الوصلات, مع التحقق من الملاءمة والوصول والعزل الحراري في كل مرحلة. اخترت المواد حسب الظروف (الحرارة، التآكل والصدأ) وأعددت رسومات تصنيع للأغلفة والأجزاء الدوارة.',
      es: 'Mapeé las configuraciones de compresores y definí el rango de operación. Construí el ensamblaje completo en SolidWorks, carcasas, impulsor, motor, cojinetes, acoplamientos, comprobando ajuste, acceso y separación térmica en cada etapa. Elegí materiales según el servicio (temperatura, desgaste, corrosión) y elaboré planos de fabricación de las carcasas y piezas rotativas.',
      de: 'Ich kartierte Verdichterkonfigurationen und definierte den Betriebsbereich. Ich baute die vollständige SolidWorks-Baugruppe, Gehäuse, Laufrad, Motor, Lager, Kupplungen, und prüfte in jeder Stufe Passung, Zugänglichkeit und thermische Trennung. Die Materialien wurden nach Einsatzbedingungen gewählt (Temperatur, Verschleiß, Korrosion) und Fertigungszeichnungen für Gehäuse und rotierende Teile erstellt.'
    },
    'turbo.result': {
      en: 'A fully modeled assembly with justified materials and drawings, showing how motor assist widens the efficient operating window. <strong>If I did it again:</strong> spend more time on bearing and coupling selection and thermal clearance, it reads small in a model and decides everything in a running machine.',
      fr: 'Un assemblage entièrement modélisé avec des matériaux justifiés et des plans, montrant comment l\u2019assistance moteur élargit la fenêtre de fonctionnement efficace. <strong>Si c\u2019était à refaire :</strong> consacrer plus de temps au choix des paliers et accouplements et aux jeux thermiques, cela paraît petit dans un modèle et décide de tout dans une machine en fonctionnement.',
      ar: 'تجميع مكتمل النمذجة بمواد موثقة ورسومات، يوضح كيف يوسّع المحرك نافذة التشغيل الفعالة. <strong>لو أعدت ذلك:</strong> لقضيت وقتًا أطول في اختيار المحامل والوصلات والخلوص الحراري, يبدو صغيرًا في النموذج لكنه يحدد كل شيء في الآلة العاملة.',
      es: 'Un ensamblaje totalmente modelado con materiales justificados y planos, que muestra cómo el asistente de motor amplía la ventana de operación eficiente. <strong>Si lo repitiera:</strong> dedicaría más tiempo a elegir cojinetes y acoplamientos y a los huelgos térmicos, parece poco en un modelo, pero lo decide todo en una máquina en marcha.',
      de: 'Eine vollständig modellierte Baugruppe mit begründeten Materialien und Zeichnungen, die zeigt, wie der Motorassistent das effiziente Betriebsfenster erweitert. <strong>Würde ich es erneut tun:</strong> mehr Zeit für Lager- und Kupplungswahl und thermische Spiele aufwenden, das wirkt im Modell klein und entscheidet in einer laufenden Maschine über alles.'
    },
 
    /* ---------- VOLTBOX ---------- */
    'voltbox.role': { en: 'Product designer', fr: 'Designer produit', ar: 'مصمم منتجات', es: 'Diseñador de producto', de: 'Produktdesigner' },
    'voltbox.date': { en: '2025', fr: '2025', ar: '2025', es: '2025', de: '2025' },
    'voltbox.problem': {
      en: 'Morocco\u2019s electric scooter infrastructure suffers from a significant lack of public charging ports, limiting the practicality and range confidence of electric scooter users. Riders often have no reliable way to recharge on the go, which discourages adoption and restricts the everyday usability of electric scooters as a mobility solution.',
      fr: 'L\u2019infrastructure marocaine des trottinettes \u00e9lectriques souffre d\u2019un manque significatif de bornes de recharge publiques, limitant l\u2019aspect pratique et la confiance en l\u2019autonomie des utilisateurs. Les usagers n\u2019ont souvent aucun moyen fiable de recharger en d\u00e9placement, ce qui freine l\u2019adoption et restreint l\u2019usage quotidien de la trottinette \u00e9lectrique comme solution de mobilit\u00e9.',
      ar: 'البنية التحتية للدراجات الكهربائية في المغرب تعاني من نقص كبير في نقاط الشحن العامة، مما يحد من عمليتها وثقة المستخدمين في مدى سيرها. لا يجد الراكبون غالبًا وسيلة موثوقة للشحن أثناء التنقل، وهو ما يثني عن اعتمادها ويقيّد استخدام الدراجة الكهربائية يوميًا كحل تنقل.',
      es: 'La infraestructura de patinetes el\u00e9ctricos en Marruecos sufre una falta significativa de puntos de carga p\u00fablicos, lo que limita la practicidad y la confianza en la autonom\u00eda de los usuarios. Los conductores a menudo no tienen una forma fiable de recargar en marcha, lo que desincentiva la adopci\u00f3n y restringe el uso cotidiano del patinete el\u00e9ctrico como soluci\u00f3n de movilidad.',
      de: 'Die marokkanische E-Scooter-Infrastruktur leidet unter einem erheblichen Mangel an \u00f6ffentlichen Ladepunkten, was die Praktikabilit\u00e4t und die Reichweiten-Sicherheit der Nutzer einschr\u00e4nkt. Fahrer haben oft keine zuverl\u00e4ssige M\u00f6glichkeit, unterwegs aufzuladen, was die Verbreitung hemmt und die allt\u00e4gliche Nutzbarkeit von E-Scootern als Mobilit\u00e4tsl\u00f6sung einschr\u00e4nkt.'
    },
    'voltbox.did': {
      en: 'I designed VoltBox, a portable power bank built specifically for electric scooters, to give riders an on-the-go charging solution independent of fixed infrastructure. I built a complete 3D model in SolidWorks to evaluate component packaging, battery placement, and overall usability, while carefully balancing energy storage capacity against weight, safety, and ease of use to keep the device compact and easy to carry.',
      fr: 'J\u2019ai con\u00e7u VoltBox, une batterie externe portable sp\u00e9cialement pens\u00e9e pour les trottinettes \u00e9lectriques, afin d\u2019offrir aux usagers une solution de recharge en d\u00e9placement, ind\u00e9pendante des infrastructures fixes. J\u2019ai construit un mod\u00e8le 3D complet dans SolidWorks pour \u00e9valuer le conditionnement des composants, le placement de la batterie et l\u2019ergonomie globale, tout en \u00e9quilibrant soigneusement la capacit\u00e9 de stockage d\u2019\u00e9nergie face au poids, \u00e0 la s\u00e9curit\u00e9 et \u00e0 la facilit\u00e9 d\u2019utilisation pour garder l\u2019appareil compact et facile \u00e0 transporter.',
      ar: 'صممتُ فولت بوكس، وهو بنك طاقة محمول صُمم خصيصًا للدراجات الكهربائية، ليمنح الراكبين حل شحن أثناء التنقل مستقلًا عن البنية التحتية الثابتة. بنيتُ نموذجًا ثلاثي الأبعاد كاملًا في SolidWorks لتقييم تغليف المكونات وموقع البطارية وسهولة الاستخدام العامة، مع الموازنة بعناية بين سعة تخزين الطاقة والوزن والأمان وسهولة الاستخدام للحفاظ على الجهاز صغيرًا وسهل الحمل.',
      es: 'Dise\u00f1\u00e9 VoltBox, un banco de energ\u00eda port\u00e1til pensado espec\u00edficamente para patinetes el\u00e9ctricos, para dar a los usuarios una soluci\u00f3n de recarga en movimiento, independiente de la infraestructura fija. Constru\u00ed un modelo 3D completo en SolidWorks para evaluar el empaquetado de componentes, la ubicaci\u00f3n de la bater\u00eda y la usabilidad general, equilibrando cuidadosamente la capacidad de almacenamiento de energ\u00eda con el peso, la seguridad y la facilidad de uso para mantener el dispositivo compacto y f\u00e1cil de llevar.',
      de: 'Ich habe VoltBox entworfen, eine tragbare Powerbank speziell f\u00fcr E-Scooter, die den Fahrern eine Unterwegs-Ladel\u00f6sung unabh\u00e4ngig von fester Infrastruktur bietet. Ich baute ein vollst\u00e4ndiges 3D-Modell in SolidWorks auf, um die Komponentenpackung, die Batterieplatzierung und die Gesamt-Benutzerfreundlichkeit zu bewerten, w\u00e4hrend ich die Energiespeicherkapazit\u00e4t sorgf\u00e4ltig gegen Gewicht, Sicherheit und Bedienkomfort abwog, um das Ger\u00e4t kompakt und leicht zu tragen.'
    },
    'voltbox.result': {
      en: 'VoltBox was selected as a finalist in the first edition of the CMC Trophy, where I presented it before industry professionals, institutional representatives, and entrepreneurship stakeholders \u2014 with the jury notably including the Honorary Consul of the Netherlands in Morocco. The project validated a practical approach to solving a real infrastructure gap in Moroccan electric mobility, and the experience gave me hands-on exposure to innovation showcases, project presentation, and real-world product development, reinforcing my interest in applying mechanical design to sustainable transportation challenges.',
      fr: 'VoltBox a \u00e9t\u00e9 s\u00e9lectionn\u00e9 comme finaliste de la premi\u00e8re \u00e9dition du Troph\u00e9e CMC, o\u00f9 je l\u2019ai pr\u00e9sent\u00e9 devant des professionnels de l\u2019industrie, des repr\u00e9sentants institutionnels et des acteurs de l\u2019entrepreneuriat \u2014 le jury comprenant notamment le Consul honoraire des Pays-Bas au Maroc. Le projet a valid\u00e9 une approche pratique pour combler un vrai manque d\u2019infrastructure dans la mobilit\u00e9 \u00e9lectrique marocaine, et l\u2019exp\u00e9rience m\u2019a apport\u00e9 une exposition concr\u00e8te aux salons d\u2019innovation, \u00e0 la pr\u00e9sentation de projets et au d\u00e9veloppement r\u00e9el de produit, renfor\u00e7ant mon int\u00e9r\u00eat pour l\u2019application du design m\u00e9canique aux transports durables.',
      ar: 'تم اختيار فولت بوكس ضمن النهائيات في النسخة الأولى من كأس CMC، حيث قدمته أمام مختصين صناعيين وممثلين مؤسساتيين وفاعلين في ريادة الأعمال, مع قاضٍ ضم من بين أعضائه القنصل الفخري لهولندا في المغرب. أكد المشروع منهجًا عمليًا لسد فجوة بنيوية حقيقية في التنقل الكهربائي المغربي، وأعطتني التجربة وقوفًا عمليًا على معارض الابتكار وعرض المشاريع وتطوير المنتجات الواقعية، مما عزز اهتمامي بتطبيق التصميم الميكانيكي على تحديات النقل المستدام.',
      es: 'VoltBox fue seleccionado finalista en la primera edici\u00f3n del Trofeo CMC, donde lo present\u00e9 ante profesionales de la industria, representantes institucionales y actores del emprendimiento \u2014 con un jurado que inclu\u00eda al C\u00f3nsul Honorario de los Pa\u00edses Bajos en Marruecos. El proyecto valid\u00f3 un enfoque pr\u00e1ctico para resolver una brecha real de infraestructura en la movilidad el\u00e9ctrica marroqu\u00ed, y la experiencia me dio exposici\u00f3n directa a escaparates de innovaci\u00f3n, presentaci\u00f3n de proyectos y desarrollo real de producto, reforzando mi inter\u00e9s por aplicar el dise\u00f1o mec\u00e1nico a los retos del transporte sostenible.',
      de: 'VoltBox wurde als Finalist der ersten Auflage der CMC Trophy ausgew\u00e4hlt, wo ich es vor Branchenprofis, institutionellen Vertretern und Akteuren des Unternehmertums pr\u00e4sentierte \u2014 die Jury umfasste insbesondere den Honorarkonsul der Niederlande in Marokko. Das Projekt best\u00e4tigte einen praktischen Ansatz zur L\u00f6sung einer echten Infrastrukturl\u00fccke in der marokkanischen Elektromobilit\u00e4t, und die Erfahrung gab mir direkte Einblicke in Innovationspr\u00e4sentationen, Projektvorstellung und reale Produktentwicklung \u2014 und st\u00e4rkte mein Interesse, mechanisches Design auf Herausforderungen nachhaltiger Mobilit\u00e4t anzuwenden.'
    },
 
    /* ---------- FUJIKURA ---------- */
    'fujikura.role': { en: 'Maintenance Assistant (internship)', fr: 'Assistant maintenance (stage)', ar: 'مساعد صيانة (تدريب)', es: 'Asistente de mantenimiento (becario)', de: 'Instandhaltungsassistent (Praktikum)' },
    'fujikura.where': { en: 'Fujikura Automotive, Kenitra', fr: 'Fujikura Automotive, Kénitra', ar: 'فوجيكورا أوتوموتيف، القنيطرة', es: 'Fujikura Automotive, Kenitra', de: 'Fujikura Automotive, Kenitra' },
    'fujikura.date': { en: 'Jul–Sep 2026', fr: 'Juil–Sep 2026', ar: 'يوليو–سبتمبر 2026', es: 'Jul–Sep 2026', de: 'Juli–Sep 2026' },
    'fujikura.problem': {
      en: 'Maintenance at Fujikura ran on reaction: failures were logged into Excel files, but each file had its own schema, so records were not comparable, predictable or planable. <strong>The data was being collected, it just was not usable.</strong>',
      fr: 'Chez Fujikura, la maintenance fonctionnait en réaction : les pannes étaient saisies dans des fichiers Excel, mais chaque fichier avait son propre schéma, si bien que rien n\u2019était comparable, prévisible ni planifiable. <strong>Les données étaient collectées, elles n\u2019étaient tout simplement pas exploitables.</strong>',
      ar: 'في فوجيكورا كانت الصيانة تعمل برد الفعل: تُسجَّل الأعطال في ملفات إكسل، لكن لكل ملف بنيته الخاصة، فكانت السجلات غير قابلة للمقارنة أو التنبؤ أو التخطيط. <strong>البيانات كانت تُجمع, لكنها ببساطة لم تكن قابلة للاستخدام.</strong>',
      es: 'En Fujikura, el mantenimiento funcionaba por reacción: las averías se registraban en archivos Excel, pero cada archivo tenía su propio esquema, de modo que los registros no eran comparables, predecibles ni planificables. <strong>Los datos se recogían; simplemente no eran utilizables.</strong>',
      de: 'Bei Fujikura lief die Instandhaltung reaktiv: Störungen wurden in Excel-Dateien erfasst, aber jede Datei hatte ihr eigenes Schema, sodass die Aufzeichnungen weder vergleichbar noch vorhersagbar oder planbar waren. <strong>Die Daten wurden erfasst, nur waren sie nicht nutzbar.</strong>'
    },
    'fujikura.did': {
      en: '<p style="margin-bottom:14px;">I designed and built the <strong>Maintenance Failure Analysis Tool</strong>, a browser-only application (open index.html, no server) that reads Excel maintenance logs and turns them into machine risk analysis, forecasts, dashboards and a yearly preventive plan. Everything persists in localStorage.</p><ul><li><strong>Upload &amp; column mapping:</strong> drag-and-drop .xlsx/.xls files; column roles are auto-guessed and can be corrected, and files with different schemas can be mixed without losing rows.</li><li><strong>Failure analysis:</strong> per-machine corrective failure counts with repeat-row dedupe, mean/median MTBF, standard deviation, MTTR, downtime, availability, trend, next-failure forecast with risk window, and a High/Medium/Low risk level with confidence, machines under 2 failures are marked insufficient.</li><li><strong>Machines page:</strong> machines grouped by class as risk-colored cards, detail view with full history, manual add/remove, bulk delete, asset tags (ACTIVO), and Excel export grouped by category.</li><li><strong>Dashboard:</strong> filters by week, class, machine, action and counterpart; KPIs; downtime, intervention and MTTR charts; a backtest of predicted vs actual failure dates; root-cause ranking and a priority list of machines to act on.</li><li><strong>Calendar:</strong> 2026 risk board (W01–W52) plus a planning board with 4-week cadence auto-plan, snapshotted so it survives data clears, preventive task recurrences and export of <em>isolon-2026-preventive-plan.xlsx</em>.</li><li><strong>Data management:</strong> merged export, clear-all, and full state persistence across reloads.</li></ul>',
      fr: '<p style="margin-bottom:14px;">J\u2019ai conçu et développé l\u2019<strong>outil d\u2019analyse des défaillances de maintenance</strong>, une application 100% navigateur (ouvrez index.html, aucun serveur) qui lit les journaux de maintenance Excel et les transforme en analyse de risque des machines, prévisions, tableaux de bord et plan préventif annuel. Tout est conservé en localStorage.</p><ul><li><strong>Téléversement et mappage des colonnes :</strong> glisser-déposer de fichiers .xlsx/.xls ; les rôles des colonnes sont devinés automatiquement et corrigibles, et des fichiers de schémas différents peuvent être mélangés sans perte de lignes.</li><li><strong>Analyse des défaillances :</strong> comptage des pannes correctives par machine avec dédoublonnage, MTBF moyenne/médiane, écart-type, MTTR, indisponibilité, disponibilité, tendance, prévision de la prochaine panne avec fenêtre de risque, et niveau de risque Elevé/Moyen/Faible avec confiance, les machines à moins de 2 pannes sont marquées insuffisantes.</li><li><strong>Page machines :</strong> machines groupées par classe en cartes colorées selon le risque, vue détaillée avec historique complet, ajout/suppression manuels, suppression groupée, étiquettes d\u2019immobilisation (ACTIVO) et export Excel groupé par catégorie.</li><li><strong>Tableau de bord :</strong> filtres par semaine, classe, machine, action et contrepartie ; KPI ; graphiques d\u2019indisponibilité, d\u2019interventions et de MTTR ; rétro-test des dates de panne prédites vs réelles ; classement des causes racines et liste prioritaire des machines à traiter.</li><li><strong>Calendrier :</strong> tableau de risque 2026 (S01–S52) plus tableau de planification avec auto-plan à cadence de 4 semaines, photographié pour survivre à l\u2019effacement des données, récurrences de tâches préventives et export de <em>isolon-2026-preventive-plan.xlsx</em>.</li><li><strong>Gestion des données :</strong> export fusionné, effacement complet et persistance totale de l\u2019état au rechargement.</li></ul>',
      ar: '<p style="margin-bottom:14px;">صممتُ وبنيتُ <strong>أداة تحليل أعطال الصيانة</strong>, تطبيق يعمل في المتصفح فقط (افتح index.html، لا خادم) يقرأ سجلات الصيانة من إكسل ويحولها إلى تحليل مخاطر للآلات، وتنبؤات، ولوحات متابعة، وخطة وقائية سنوية. كل شيء يُحفظ في localStorage.</p><ul><li><strong>الرفع وربط الأعمدة:</strong> سحب وإفلات ملفات .xlsx/.xls؛ أدوار الأعمدة تُكتشف تلقائيًا وقابلة للتصحيح، ويمكن خلط ملفات ذات بنيات مختلفة دون فقدان أي سطر.</li><li><strong>تحليل الأعطال:</strong> عدّ الأعطال التصحيحية لكل آلة مع إزالة التكرارات، MTBF (متوسط/وسيط)، الانحراف المعياري، MTTR، وقت التوقف، التوافر، الاتجاه، التنبؤ بالعطل التالي مع نافذة المخاطر، ومستوى خطر مرتفع/متوسط/منخفض مع الثقة, الآلات التي لديها أقل من عطلين تُظهر "غير كافٍ".</li><li><strong>صفحة الآلات:</strong> الآلات مجمعة حسب الفئة في بطاقات ملوّنة حسب المخاطر، عرض تفصيلي بالتاريخ الكامل، إضافة/إزالة يدوية، حذف جماعي، علامات الأصول (ACTIVO)، وتصدير إكسل مجمّع حسب الفئة.</li><li><strong>لوحة المتابعة:</strong> تصفية حسب الأسبوع والفئة والآلة والإجراء والطرف؛ مؤشرات أداء؛ رسوم بيانية لوقت التوقف والتدخلات وMTTR؛ اختبار رجعي للتنبؤات مقابل التواريخ الفعلية؛ ترتيب الأسباب الجذرية وقائمة أولويات الآلات.</li><li><strong>التقويم:</strong> لوحة مخاطر 2026 (الأسبوع 01–52) ولوحة تخطيط بجدولة تلقائية كل 4 أسابيع، مع لقطة ثابتة تبقى حتى بعد مسح البيانات، وتكرار المهام الوقائية، وتصدير <em>isolon-2026-preventive-plan.xlsx</em>.</li><li><strong>إدارة البيانات:</strong> تصدير مدمج، مسح كل شيء، وحفظ كامل للحالة عند إعادة التحميل.</li></ul>',
      es: '<p style="margin-bottom:14px;">Diseñé y construí la <strong>herramienta de análisis de averías de mantenimiento</strong>, una aplicación solo de navegador (abrir index.html, sin servidor) que lee los registros de mantenimiento de Excel y los convierte en análisis de riesgo de máquinas, pronósticos, paneles y un plan preventivo anual. Todo persiste en localStorage.</p><ul><li><strong>Carga y mapeo de columnas:</strong> arrastrar y soltar archivos .xlsx/.xls; los roles de columna se adivinan automáticamente y se pueden corregir; archivos con esquemas distintos pueden mezclarse sin perder filas.</li><li><strong>Análisis de averías:</strong> recuento de fallos correctivos por máquina con deduplicación de repetidos, MTBF media/mediana, desviación estándar, MTTR, tiempo de inactividad, disponibilidad, tendencia, previsión de la próxima avería con ventana de riesgo, y nivel de riesgo Alto/Medio/Bajo con confianza, las máquinas con menos de 2 fallos se muestran como insuficientes.</li><li><strong>Página de máquinas:</strong> máquinas agrupadas por clase en tarjetas de color por riesgo, vista de detalle con historial completo, alta/baja manuales, borrado en bloque, etiquetas de activo (ACTIVO) y exportación a Excel agrupada por categoría.</li><li><strong>Panel:</strong> filtros por semana, clase, máquina, acción y contraparte; KPIs; gráficos de inactividad, intervenciones y MTTR; prueba retrospectiva de predicciones frente a fechas reales; ranking de causas raíz y lista prioritaria de máquinas.</li><li><strong>Calendario:</strong> panel de riesgo 2026 (S01–S52) más panel de planificación con auto-plan de cadencia de 4 semanas, fotografiado para sobrevivir a borrados, recurrencias de tareas preventivas y exportación de <em>isolon-2026-preventive-plan.xlsx</em>.</li><li><strong>Gestión de datos:</strong> exportación combinada, borrado total y persistencia completa del estado al recargar.</li></ul>',
      de: '<p style="margin-bottom:14px;">Ich habe das <strong>Maintenance-Failure-Analysis-Tool</strong> entworfen und gebaut, eine reine Browseranwendung (index.html öffnen, kein Server), die Excel-Instandhaltungsprotokolle liest und in Maschinenrisikoanalyse, Prognosen, Dashboards und einen jährlichen Präventivplan verwandelt. Alles bleibt in localStorage erhalten.</p><ul><li><strong>Upload und Spaltenzuordnung:</strong> Ziehen-und-Ablegen von .xlsx/.xls-Dateien; Spaltenrollen werden automatisch erraten und können korrigiert werden; Dateien mit unterschiedlichen Schemata können gemischt werden, ohne Zeilen zu verlieren.</li><li><strong>Fehleranalyse:</strong> korrektive Fehlerzählung je Maschine mit Deduplizierung von Wiederholungen, mittlerer/mediane MTBF, Standardabweichung, MTTR, Ausfallzeit, Verfügbarkeit, Trend, Vorhersage des nächsten Fehlers mit Risikofenster und Risikostufe Hoch/Mittel/Niedrig mit Konfidenz, Maschinen mit unter 2 Fehlern gelten als unzureichend.</li><li><strong>Maschinenseite:</strong> Maschinen nach Klasse gruppiert als risikofarbene Karten, Detailansicht mit voller Historie, manuelles Hinzufügen/Entfernen, Massenlöschung, Anlagen-Tags (ACTIVO) und Excel-Export gruppiert nach Kategorie.</li><li><strong>Dashboard:</strong> Filter nach Woche, Klasse, Maschine, Aktion und Gegenstelle; KPIs; Ausfallzeit-, Eingriffs- und MTTR-Diagramme; Backtest von Prognosen gegen tatsächliche Fehlerdaten; Root-Cause-Ranking und Prioritätenliste der Maschinen.</li><li><strong>Kalender:</strong> 2026-Risikoboard (W01–W52) plus Planungsboard mit Auto-Plan im 4-Wochen-Takt, gesnapshottet, sodass es Datenlöschungen übersteht, wiederkehrende Präventivaufgaben und Export von <em>isolon-2026-preventive-plan.xlsx</em>.</li><li><strong>Datenmanagement:</strong> zusammengeführter Export, Alles-löschen und vollständige Zustandspersistenz über Neuladungen hinweg.</li></ul>'
    },
    'fujikura.result': {
      en: 'Excel logs became a single decision view: risk-colored machines, next-failure predictions, a full 2026 preventive plan and a dashboard that maintenance and production can both read. <strong>The best data system is the one people actually use.</strong>',
      fr: 'Les journaux Excel sont devenus une vue de décision unique : machines colorées par risque, prévisions de prochaine panne, plan préventif 2026 complet et tableau de bord que la maintenance comme la production peuvent lire. <strong>Le meilleur système de données est celui que les gens utilisent vraiment.</strong>',
      ar: 'أصبحت سجلات إكسل عرضًا واحدًا للقرارات: آلات ملوّنة حسب المخاطر، تنبؤات بالعطل التالي، خطة وقائية كاملة لعام 2026، ولوحة متابعة يستطيع الصيانة والإنتاج قراءتها معًا. <strong>أفضل نظام بيانات هو الذي يستخدمه الناس فعلاً.</strong>',
      es: 'Los registros de Excel se convirtieron en una vista de decisión única: máquinas de color según el riesgo, predicciones de próxima avería, un plan preventivo 2026 completo y un panel que mantenimiento y producción pueden leer. <strong>El mejor sistema de datos es el que la gente realmente usa.</strong>',
      de: 'Excel-Protokolle wurden zu einer einzigen Entscheidungssicht: risikofarbene Maschinen, Fehlervorhersagen, ein vollständiger Präventivplan 2026 und ein Dashboard, das Instandhaltung und Produktion gleichermaßen lesen können. <strong>Das beste Datensystem ist das, das die Menschen wirklich nutzen.</strong>'
    }
  };

  function getLang() {
    try { var l = localStorage.getItem('ys_lang'); } catch (e) { return 'en'; }
    return LANGS.indexOf(l) > -1 ? l : 'en';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var t = DICT[nodes[i].getAttribute('data-i18n')];
      if (t && t[lang]) nodes[i].innerHTML = t[lang];
    }

    var ph = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < ph.length; j++) {
      var tp = DICT[ph[j].getAttribute('data-i18n-ph')];
      if (tp && tp[lang]) ph[j].setAttribute('placeholder', tp[lang]);
    }

    var sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
  }

  function boot() {
    apply(getLang());
    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.addEventListener('change', function () {
        try { localStorage.setItem('ys_lang', sel.value); } catch (e) {}
        apply(sel.value);
      });
    }
  }

  if (document.readyState !== 'loading') { boot(); }
  else { document.addEventListener('DOMContentLoaded', boot); }
})();