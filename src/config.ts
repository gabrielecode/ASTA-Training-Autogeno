/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ORG_EMAIL = "info@associazioneta.ch";
export const ORG_NAME = "Associazione di Training Autogeno Svizzera (ASTA)";
export const ORG_SEDE = "Lugano, Canton Ticino, Svizzera";
export const ORG_PHONE = "+41 (0)91 922 40 50";

export const LANGS = ["it", "fr", "de", "en"] as const;
export type Lang = typeof LANGS[number];

export const LANG_META: Record<Lang, { htmlLang: string; title: string; description: string }> = {
  it: { 
    htmlLang: "it-CH", 
    title: "Training Autogeno a Lugano | Terapiste RME – ASTA Svizzera", 
    description: "Scopri il Training Autogeno a Lugano con terapiste riconosciute RME. Riduci stress e ansia, migliora il sonno. Rimborso cassa malati complementare." 
  },
  fr: { 
    htmlLang: "fr-CH", 
    title: "Training Autogène à Lugano | Thérapeutes RME – ASTA Suisse", 
    description: "Découvrez le Training Autogène à Lugano avec des thérapeutes reconnues RME. Réduisez le stress et l'anxiété, améliorez votre sommeil. Remboursement assurance complémentaire." 
  },
  de: { 
    htmlLang: "de-CH", 
    title: "Autogenes Training in Lugano | RME-Therapeutinnen – ASTA Schweiz", 
    description: "Autogenes Training in Lugano mit anerkannten RME-Therapeutinnen. Stress und Ängste abbauen, Schlaf verbessern. Rückvergütung durch die Zusatzversicherung." 
  },
  en: { 
    htmlLang: "en-CH", 
    title: "Autogenic Training in Lugano | RME Therapists – ASTA Switzerland", 
    description: "Autogenic Training in Lugano with RME-recognized therapists. Reduce stress and anxiety, improve sleep. Complementary health insurance reimbursement." 
  },
};

export const DEFAULT_LANG: Lang = "it";
export const LANG_STORAGE_KEY = "asta_lang";

export const TRANSLATIONS: Record<Lang, {
  brandTitle: string;
  brandSubtitle: string;
  navMetodo: string;
  navAudio: string;
  navTerapiste: string;
  navRimborso: string;
  navFaq: string;
  navAbout: string;
  ctaBook: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  statRme: string;
  statRmeDesc: string;
  statSede: string;
  statSedeDesc: string;
  statRimborso: string;
  statRimborsoDesc: string;
  heroImageCaption: string;
  heroImageTitle: string;
  rmeBadgeText: string;
  rmeBadgeSub: string;
  methodTag: string;
  methodTitle: string;
  methodDesc: string;
  method1Title: string;
  method1Desc: string;
  method2Title: string;
  method2Desc: string;
  method3Title: string;
  method3Desc: string;
  method4Title: string;
  method4Desc: string;
  journeyTag: string;
  journeyTitle: string;
  journeySubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  therapistsTag: string;
  therapistsTitle: string;
  therapistsSubtitle: string;
  filterAll: string;
  filterLugano: string;
  filterOnline: string;
  bookButton: string;
  reimburseTag: string;
  reimburseTitle: string;
  reimburseP1: string;
  reimburseP2: string;
  reimburseCheck1: string;
  reimburseCheck2: string;
  reimburseCheck3: string;
  reimburseStepsTitle: string;
  reimburseStep1Title: string;
  reimburseStep1Desc: string;
  reimburseStep2Title: string;
  reimburseStep2Desc: string;
  reimburseStep3Title: string;
  reimburseStep3Desc: string;
  reimburseCta: string;
  faqTag: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
  faq6Q: string;
  faq6A: string;
  asta: {
    title: string;
    intro: string;
    goalsTitle: string;
    goals: readonly string[];
  };
  joinAsta: {
    tag: string;
    title: string;
    subtitle: string;
    therapistTitle: string;
    therapistBadge: string;
    therapistDesc: string;
    therapistCta: string;
    supporterTitle: string;
    supporterBadge: string;
    supporterDesc: string;
    supporterCta: string;
    modalTag: string;
    modalTitle: string;
    modalRecipientLabel: string;
    fieldType: string;
    typeActive: string;
    typeSupporter: string;
    fieldNameOrg: string;
    fieldNameOrgPlaceholder: string;
    fieldRmeNumber: string;
    fieldRmePlaceholder: string;
    fieldNotesPlaceholderActive: string;
    fieldNotesPlaceholderSupporter: string;
    submitButton: string;
    successTitle: string;
    successDesc: string;
    mailtoButton: string;
    emailSubjectActive: string;
    emailSubjectSupporter: string;
  };
  footerDesc: string;
  footerSedeTitle: string;
  footerContactTitle: string;
  footerHours: string;
  rightsText: string;
  footerLegal: string;
  footerPrivacy: string;
  footerRme: string;
  modalBookingTitle: string;
  modalBookingSub: string;
  modalSuccessTitle: string;
  modalSuccessDesc: string;
  fieldName: string;
  fieldEmail: string;
  fieldPhone: string;
  fieldLocation: string;
  fieldNotes: string;
  fieldConsent: string;
  submitButton: string;
  cookieBannerText: string;
  cookieOnlyNec: string;
  cookieCustom: string;
  cookieAcceptAll: string;
  privacyModalTitle: string;
  tabPolicy: string;
  tabRights: string;
  tabCookies: string;
  closeBtn: string;
}> = {
  it: {
    brandTitle: "ASTA",
    brandSubtitle: "Associazione di Training Autogeno Svizzera",
    navMetodo: "Il Metodo",
    navAudio: "Il Percorso",
    navTerapiste: "Terapiste RME",
    navRimborso: "Cassa Malati",
    navFaq: "FAQ",
    navAbout: "Chi siamo",
    ctaBook: "Prenota Colloquio",
    heroBadge: "Sede Legale a Lugano • Riconosciuto RME & ASCA",
    heroTitle: "Training Autogeno: impara a ritrovare la calma, da solo.",
    heroSubtitle: "Un metodo scientificamente fondato di autodistensione, per il benessere di mente e corpo.",
    heroCtaPrimary: "Prenota una consulenza",
    heroCtaSecondary: "Cerca Terapista RME",
    statRme: "100%",
    statRmeDesc: "Terapiste RME certificate",
    statSede: "Lugano",
    statSedeDesc: "Sede centrale e online CH",
    statRimborso: "70-90%",
    statRimborsoDesc: "Rimborso cassa malati",
    heroImageCaption: "Sede Principale Lugano • Via Nassa 29",
    heroImageTitle: "Spazi dedicati al benessere interiore",
    rmeBadgeText: "Standard RME & ASCA",
    rmeBadgeSub: "Standard qualitativi svizzeri rigorosi",
    methodTag: "Il Metodo Scientifico",
    methodTitle: "Cos'è il Training Autogeno",
    methodDesc: "Il Training Autogeno (TA) è un metodo di autodistensione da concentrazione psichica, ideato dallo psichiatra Johannes Heinrich Schultz (1884-1970). Attraverso un allenamento (training) costante, permette di raggiungere uno stato di calma e rilassamento che si genera da sé (autogeno). È un metodo semplice e non invasivo per distendersi, ristabilire l'equilibrio psicosomatico e ritrovare l'armonia tra mente e corpo, agendo a livello fisico, psicologico e fisiologico.",
    method1Title: "Pesantezza Corporea",
    method1Desc: "Il primo esercizio induce un gradevole senso di rilassamento muscolare profondo, sciogliendo contratture e rigidità da stress.",
    method2Title: "Calore Distensivo",
    method2Desc: "Favorisce la vasodilatazione periferica, regalando una piacevole sensazione di calore e ristoro in tutto il corpo.",
    method3Title: "Regolazione Cardiaca",
    method3Desc: "Armonizza il battito cardiaco e la pressione sanguigna, riducendo l'iperattivazione del sistema nervoso simpatico.",
    method4Title: "Respiro & Mente",
    method4Desc: "Regola spontaneamente la respirazione e dona una calma mentale profonda, ideale contro insonnia e stati d'ansia.",
    journeyTag: "Il percorso in 4 fasi",
    journeyTitle: "Come funziona nella vita quotidiana",
    journeySubtitle: "Un approccio graduale e strutturato per integrare il Training Autogeno nella tua routine e ritrovare stabilità interiore.",
    step1Title: "Concentrazione psichica",
    step1Desc: "Impari a rivolgere l'attenzione verso l'interno, riducendo gradualmente gli stimoli esterni.",
    step2Title: "Rilassamento somatico",
    step2Desc: "Attraverso formule specifiche, il corpo sperimenta distensione, pesantezza e calore.",
    step3Title: "Esercizio quotidiano",
    step3Desc: "Bastano pochi minuti al giorno a casa per consolidare il riflesso naturale di calma.",
    step4Title: "Piena autonomia",
    step4Desc: "Applichi la tecnica in indipendenza nei momenti di tensione lavorativa o personale.",
    therapistsTag: "Rete Ufficiale ASTA Ticino",
    therapistsTitle: "Terapiste RME riconosciute RME",
    therapistsSubtitle: "Visita la nostra sede centrale a Lugano o prenota una seduta online in videoconferenza con professioniste accreditate dalle casse malati.",
    filterAll: "Tutti i Centri",
    filterLugano: "Lugano Centro",
    filterOnline: "Online / Svizzera",
    bookButton: "Prenota con",
    reimburseTag: "Copertura Assicurativa",
    reimburseTitle: "Riconoscimento e rimborso",
    reimburseP1: "Il Training Autogeno è un metodo di medicina complementare riconosciuto dal registro RME, e le sedute possono essere rimborsate dalle casse malati complementari che lo prevedono.",
    reimburseP2: "Questo garantisce il rimborso parziale (solitamente dal 70% al 90% del costo della seduta) tramite la propria assicurazione malattie complementare (es. Helsana, Sanitas, Swica, CSS, Concordia, Visana).",
    reimburseCheck1: "Verifica preventiva consigliata con la tua cassa malati per la polizza complementare specifica.",
    reimburseCheck2: "Fattura dettagliata rilasciata a fine seduta pronta per il rimborso online.",
    reimburseCheck3: "Nessuna prescrizione medica obbligatoria per la maggior parte delle casse malati.",
    reimburseStepsTitle: "Come richiedere il rimborso",
    reimburseStep1Title: "Prenota la tua seduta",
    reimburseStep1Desc: "Scegli una terapista RME certificata ASTA a Lugano, Gordevio, Preonzo o online.",
    reimburseStep2Title: "Ricevi la fattura RME",
    reimburseStep2Desc: "A fine trattamento riceverai la nota d'onorario con numero RME e ZSR.",
    reimburseStep3Title: "Invia alla cassa malati",
    reimburseStep3Desc: "Carica la fattura sull'app della tua assicurazione o spediscila per posta.",
    reimburseCta: "Verifica disponibilità terapiste",
    faqTag: "Domande Frequenti",
    faqTitle: "Tutto quello che c'è da sapere sul Training Autogeno",
    faq1Q: "Il Training Autogeno è rimborsato dalla cassa malati in Svizzera?",
    faq1A: "Sì, il Training Autogeno è un metodo di medicina complementare riconosciuto dal Registro di Medicina Empirica (RME). Le sedute svolte presso le terapiste ASTA certificate RME in Ticino (a Lugano, Gordevio e Preonzo) possono essere rimborsate dalle assicurazioni complementari (LCA) che includono questo metodo. Si consiglia di verificare preventivamente la propria copertura presso la propria cassa malati.",
    faq2Q: "Serve la prescrizione medica per ottenere il rimborso RME?",
    faq2A: "Nella maggior parte dei casi, per le terapie complementari riconosciute RME non è necessaria una prescrizione medica, poiché il rimborso rientra nell'assicurazione complementare. Tuttavia, condizioni e franchigie variano in base alla singola cassa malati: ti invitiamo a chiedere conferma diretta al tuo assicuratore prima di iniziare il percorso.",
    faq3Q: "Quante sedute servono e quanto tempo richiede l'esercizio quotidiano?",
    faq3A: "Il percorso standard prevede 10 incontri con una terapista qualificata per apprendere gradualmente le formule del metodo. Tra una seduta e l'altra, l'allenamento quotidiano a casa richiede solo 5-10 minuti, ripetuti 2 o 3 volte al giorno: la costanza permette di rendere il rilassamento automatico e duraturo.",
    faq4Q: "Che differenza c'è tra Training Autogeno, meditazione o ipnosi?",
    faq4A: "Ideato dallo psichiatra J.H. Schultz, il Training Autogeno è una tecnica di autodistensione psicosomatica strutturata in esercizi fisici e mentali precisi (pesantezza, calore, respiro). A differenza dell'ipnosi, non prevede suggestioni esterne da parte del terapeuta: è la persona stessa a generare lo stato di calma in piena autonomia e coscienza.",
    faq5Q: "Posso praticare il Training Autogeno se assumo farmaci o ho una patologia?",
    faq5A: "Il Training Autogeno è un metodo complementare di prevenzione e benessere che non sostituisce diagnosi o cure mediche. In presenza di patologie fisiche o psichiche, o se si assumono farmaci, è sempre consigliato parlarne preventivamente con il proprio medico e con la terapista per valutare l'idoneità del percorso.",
    faq6Q: "Dove posso seguire un corso di Training Autogeno in Ticino?",
    faq6A: "Puoi rivolgerti alle terapiste certificate RME affiliate ad ASTA attive sul territorio ticinese: a Lugano (Francesca Betteni), a Gordevio nel Locarnese (Cristina Bettini) e a Preonzo nel Bellinzonese (Tamara Ghisletta), per percorsi individuali o in piccolo gruppo.",
    asta: {
      title: "ASTA: chi siamo",
      intro: "L'Associazione Svizzera di Training Autogeno (ASTA) è nata nel 2026, con sede a Lugano, come associazione senza scopo di lucro. Riunisce i professionisti del Training Autogeno con l'obiettivo di promuoverne la corretta applicazione e di diffondere informazioni scientificamente fondate.",
      goalsTitle: "I nostri scopi",
      goals: [
        "Divulgare il Training Autogeno, la sua corretta applicazione e i suoi benefici psicofisici.",
        "Promuovere seminari, eventi e pubblicazioni, per i membri e per il pubblico.",
        "Favorire lo scambio professionale con spazi di confronto e intervisione tra professionisti, nel rispetto di riservatezza e deontologia.",
        "Sostenere la supervisione, individuale e di gruppo, per garantire un'applicazione di alta qualità.",
        "Definire standard ed etica condivisi in Ticino e in Svizzera, a tutela di chi pratica e di chi ne beneficia.",
        "Collaborare con istituzioni, enti sanitari, assicuratori e reti professionali per il riconoscimento del TA nella prevenzione e nel benessere complementare.",
        "Dialogare con i registri e le casse malati (RME/EMR, ASCA, SNE/EGK), per mantenere i requisiti di riconoscimento.",
        "Rispondere ai bisogni della comunità con strumenti non invasivi e sicuri per la gestione di stress e tensioni."
      ] as const
    },
    joinAsta: {
      tag: "Adesione all'Associazione",
      title: "Entra in ASTA",
      subtitle: "Scegli la formula più adatta al tuo profilo e contribuisci alla diffusione di un Training Autogeno di qualità in Svizzera.",
      therapistTitle: "Terapisti complementari TA RME",
      therapistBadge: "Socio attivo",
      therapistDesc: "Sei un/una terapista complementare TA RME? Unisciti all'associazione per partecipare a supervisioni e intervisioni, eventi formativi e a una rete professionale che promuove qualità ed etica.",
      therapistCta: "Richiedi l'ammissione",
      supporterTitle: "Sostieni ASTA",
      supporterBadge: "Membro passivo",
      supporterDesc: "Vuoi sostenere il Training Autogeno? Persone e organizzazioni possono sostenere ASTA come soci sostenitori (membri passivi).",
      supporterCta: "Diventa sostenitore",
      modalTag: "Richiesta di Adesione ASTA",
      modalTitle: "Entra in ASTA",
      modalRecipientLabel: "Destinatario:",
      fieldType: "Tipologia di adesione *",
      typeActive: "Socio attivo – Terapista TA RME",
      typeSupporter: "Socio sostenitore (membro passivo)",
      fieldNameOrg: "Nome e Cognome / Organizzazione *",
      fieldNameOrgPlaceholder: "es. Anna Rossi oppure Studio / Ente",
      fieldRmeNumber: "Numero RME / ASCA (opzionale)",
      fieldRmePlaceholder: "es. RME #123456",
      fieldNotesPlaceholderActive: "Es. Sede di attività, formazione in Training Autogeno, motivazione...",
      fieldNotesPlaceholderSupporter: "Es. Adesione individuale o organizzazione, eventuali domande sul sostegno ad ASTA...",
      submitButton: "Invia Richiesta di Adesione",
      successTitle: "Richiesta Preparata per l'Invio!",
      successDesc: "La tua richiesta è pronta per essere inviata a",
      mailtoButton: "Apri Email Precompilata",
      emailSubjectActive: "Richiesta ammissione ASTA – Socio attivo (Terapista TA RME)",
      emailSubjectSupporter: "Richiesta adesione ASTA – Socio sostenitore (membro passivo)"
    },
    footerDesc: "L'Associazione Svizzera di Training Autogeno (ASTA) è nata nel 2026, con sede a Lugano, come associazione senza scopo di lucro. Riunisce i professionisti del Training Autogeno con l'obiettivo di promuoverne la corretta applicazione e di diffondere informazioni scientificamente fondate.",
    footerSedeTitle: "Sede Centrale",
    footerContactTitle: "Contatti & Info",
    footerHours: "Lun - Ven: 08:30 - 18:30",
    rightsText: "Tutti i diritti riservati.",
    footerLegal: "Note Legali",
    footerPrivacy: "Protezione Dati",
    footerRme: "Accreditamento RME",
    modalBookingTitle: "Prenotazione Colloquio",
    modalBookingSub: "Richiedi consulenza iniziale",
    modalSuccessTitle: "Richiesta Inviata con Successo!",
    modalSuccessDesc: "La nostra segreteria o la terapista prescelta ti ricontatterà entro 24 ore lavorative per confermare data e orario del colloquio.",
    fieldName: "Nome e Cognome *",
    fieldEmail: "Email *",
    fieldPhone: "Telefono *",
    fieldLocation: "Sede di Preferenza",
    fieldNotes: "Note o Esigenze Particolari (opzionale)",
    fieldConsent: "Acconsento al trattamento dei dati personali inseriti per la gestione della richiesta di colloquio, in conformità alla",
    submitButton: "Conferma e Invia Richiesta",
    cookieBannerText: "Utilizziamo cookie tecnici essenziali per il funzionamento del sito e, previo consenso, cookie analitici per migliorare l'esperienza e misurare l'efficacia dei servizi ASTA Lugano.",
    cookieOnlyNec: "Solo Necessari",
    cookieCustom: "Personalizza",
    cookieAcceptAll: "Accetta Tutti",
    privacyModalTitle: "Protezione dei Dati (nLPD & GDPR)",
    tabPolicy: "Informativa sulla Privacy",
    tabRights: "Centro Privacy & Diritti",
    tabCookies: "Politica sui Cookie",
    closeBtn: "Chiudi"
  },
  fr: {
    brandTitle: "ASTA",
    brandSubtitle: "Association Suisse de Training Autogène",
    navMetodo: "La Méthode",
    navAudio: "Le Parcours",
    navTerapiste: "Thérapeutes RME",
    navRimborso: "Assurance Maladie",
    navFaq: "FAQ",
    navAbout: "À propos",
    ctaBook: "Réserver",
    heroBadge: "Siège Unique à Lugano • Reconnu RME & ASCA",
    heroTitle: "Training Autogène à Lugano pour retrouver équilibre et sérénité",
    heroSubtitle: "Confiez-vous à des thérapeutes qualifiées à notre siège de Lugano et en ligne dans toute la Suisse. Une méthode scientifiquement prouvée pour réduire l'anxiété et améliorer le sommeil.",
    heroCtaPrimary: "Réserver une consultation",
    heroCtaSecondary: "Trouver Thérapeute RME",
    statRme: "100%",
    statRmeDesc: "Thérapeutes RME certifiées",
    statSede: "Lugano",
    statSedeDesc: "Siège central et en ligne CH",
    statRimborso: "70-90%",
    statRimborsoDesc: "Remboursement assurance",
    heroImageCaption: "Siège Principal Lugano • Via Nassa 29",
    heroImageTitle: "Espaces dédiés au bien-être intérieur",
    rmeBadgeText: "Standards RME & ASCA",
    rmeBadgeSub: "Normes de qualité suisses rigoureuses",
    methodTag: "La Méthode Scientifique",
    methodTitle: "Qu'est-ce que le Training Autogène et comment transforme-t-il votre bien-être",
    methodDesc: "Développé par le neurologiste J.H. Schultz, le Training Autogène est une technique d'autorelaxation basée sur la concentration passive.",
    method1Title: "Lourdeur Corporelle",
    method1Desc: "Le premier exercice induit une agréable sensation de détente musculaire profonde.",
    method2Title: "Chaleur Distensive",
    method2Desc: "Favorise la vasodilatation périphérique et procure une sensation de chaleur et de repos.",
    method3Title: "Régulation Cardiaque",
    method3Desc: "Harmonise les battements du cœur et réduit l'hyperactivation du système nerveux.",
    method4Title: "Respiration & Esprit",
    method4Desc: "Régule spontanément la respiration et apporte un calme mental profond.",
    journeyTag: "Le parcours en 4 étapes",
    journeyTitle: "Comment cela fonctionne dans la vie quotidienne",
    journeySubtitle: "Une approche progressive et structurée pour intégrer le Training Autogène dans votre routine et retrouver stabilité.",
    step1Title: "Concentration psychique",
    step1Desc: "Vous apprenez à tourner votre attention vers l'intérieur en réduisant les stimuli extérieurs.",
    step2Title: "Relaxation somatique",
    step2Desc: "Grâce à des formules spécifiques, le corps ressent détente, lourdeur et chaleur.",
    step3Title: "Pratique quotidienne",
    step3Desc: "Quelques minutes par jour à la maison suffisent pour consolider le réflexe de calme.",
    step4Title: "Pleine autonomie",
    step4Desc: "Vous appliquez la technique de manière autonome lors des moments de tension professionnelle ou personnelle.",
    therapistsTag: "Réseau Officiel ASTA",
    therapistsTitle: "Thérapeutes RME reconnues à Lugano et en Suisse",
    therapistsSubtitle: "Visitez notre siège central à Lugano ou réservez une séance en ligne par visioconférence.",
    filterAll: "Tous les Centres",
    filterLugano: "Lugano Centre",
    filterOnline: "En Ligne / Suisse",
    bookButton: "Réserver avec",
    reimburseTag: "Couverture d'Assurance",
    reimburseTitle: "Remboursement Assurance Maladie Complémentaire",
    reimburseP1: "Toutes les thérapeutes du réseau ASTA sont reconnues par le RME (Registre de Médecine Empirique) et par l'ASCA.",
    reimburseP2: "Cela garantit le remboursement partiel (généralement de 70% à 90%) via votre assurance maladie complémentaire.",
    reimburseCheck1: "Vérification préalable conseillée auprès de votre assurance complémentaire.",
    reimburseCheck2: "Facture détaillée délivrée à la fin de la séance pour remboursement en ligne.",
    reimburseCheck3: "Aucune prescription médicale obligatoire pour la plupart des caisses-maladie.",
    reimburseStepsTitle: "Comment demander le remboursement",
    reimburseStep1Title: "Réservez votre séance",
    reimburseStep1Desc: "Choisissez une thérapeute RME certifiée ASTA à Lugano ou en ligne.",
    reimburseStep2Title: "Recevez la facture RME",
    reimburseStep2Desc: "À la fin, vous recevrez la note d'honoraires avec numéro RME et ZSR.",
    reimburseStep3Title: "Envoyez à l'assurance",
    reimburseStep3Desc: "Téléchargez la facture sur l'application de votre assurance.",
    reimburseCta: "Vérifier la disponibilité",
    faqTag: "Questions Fréquentes",
    faqTitle: "Tout ce qu'il faut savoir sur le Training Autogène",
    faq1Q: "Le Training Autogène est-il remboursé par les caisses-maladie en Suisse ?",
    faq1A: "Oui, le Training Autogène est une méthode de médecine complémentaire reconnue par le Registre de Médecine Empirique (RME). Les séances suivies auprès des thérapeutes ASTA agréées RME au Tessin (Lugano, Gordevio et Preonzo) peuvent être remboursées par les assurances complémentaires (LCA) couvrant cette méthode. Nous vous recommandons de vérifier votre couverture auprès de votre caisse-maladie.",
    faq2Q: "Faut-il une ordonnance médicale pour le remboursement RME ?",
    faq2A: "Dans la plupart des cas, aucune ordonnance médicale n'est requise pour les thérapies complémentaires reconnues RME, le remboursement dépendant de l'assurance complémentaire. Les conditions variant selon chaque assureur, il est conseillé de vérifier directement auprès de votre caisse-maladie avant de débuter.",
    faq3Q: "Combien de séances sont nécessaires et combien de temps demande la pratique quotidienne ?",
    faq3A: "Le parcours complet comprend généralement 10 séances avec une thérapeute qualifiée pour acquérir la technique. Entre les séances, l'entraînement quotidien à domicile ne prend que 5 à 10 minutes, 2 à 3 fois par jour : c'est la régularité qui rend la détente durable et autonome.",
    faq4Q: "Quelle est la différence entre le Training Autogène, la méditation et l'hypnose ?",
    faq4A: "Créé par le psychiatre J.H. Schultz, le Training Autogène est une technique d'auto-détente psychosomatique structurée autour d'exercices précis (lourdeur, chaleur, respiration). Contrairement à l'hypnose, il n'implique aucune suggestion externe : vous générez vous-même l'état de calme en toute autonomie.",
    faq5Q: "Puis-je pratiquer le Training Autogène si je prends des médicaments ou souffre d'une pathologie ?",
    faq5A: "Le Training Autogène est une approche complémentaire de prévention et de bien-être qui ne remplace pas un suivi médical. En cas de pathologie ou de traitement médicamenteux, il convient d'en parler au préalable avec votre médecin et votre thérapeute.",
    faq6Q: "Où suivre des séances de Training Autogène au Tessin ?",
    faq6A: "Vous pouvez contacter les thérapeutes reconnues RME membres d'ASTA au Tessin : à Lugano (Francesca Betteni), à Gordevio dans le Locarnese (Cristina Bettini) et à Preonzo dans le Bellinzonese (Tamara Ghisletta), en séances individuelles ou en petits groupes.",
    asta: {
      title: "ASTA : qui sommes-nous",
      intro: "L'Association Suisse de Training Autogène (ASTA) a été fondée en 2026, avec siège à Lugano, en tant qu'association à but non lucratif. Elle réunit les professionnels du Training Autogène dans le but d'en promouvoir l'application correcte et de diffuser des informations scientifiquement fondées.",
      goalsTitle: "Nos buts",
      goals: [
        "Diffuser le Training Autogène, son application correcte et ses bienfaits psychophysiques.",
        "Promouvoir des séminaires, des événements et des publications pour les membres et le public.",
        "Favoriser l'échange professionnel avec des espaces de dialogue et d'intervision entre professionnels, dans le respect de la confidentialité et de la déontologie.",
        "Soutenir la supervision, individuelle et de groupe, afin de garantir une application de haute qualité.",
        "Définir des standards et une éthique partagés au Tessin et en Suisse, pour la protection des praticiens et des bénéficiaires.",
        "Collaborer avec les institutions, les organismes de santé, les assureurs et les réseaux professionnels pour la reconnaissance du TA dans la prévention et le bien-être complémentaire.",
        "Dialoguer avec les registres et les caisses-maladie (RME/EMR, ASCA, SNE/EGK) afin de maintenir les exigences de reconnaissance.",
        "Répondre aux besoins de la communauté avec des outils non invasifs et sûrs pour la gestion du stress et des tensions."
      ] as const
    },
    joinAsta: {
      tag: "Adhésion à l'Association",
      title: "Rejoindre ASTA",
      subtitle: "Choisissez la formule adaptée à votre profil et contribuez à la promotion d'un Training Autogène de qualité en Suisse.",
      therapistTitle: "Thérapeutes complémentaires TA RME",
      therapistBadge: "Membre actif",
      therapistDesc: "Vous êtes thérapeute complémentaire TA RME ? Rejoignez l'association pour participer aux supervisions et intervisions, aux événements de formation et à un réseau professionnel qui promeut la qualité et l'éthique.",
      therapistCta: "Demander l'admission",
      supporterTitle: "Soutenir ASTA",
      supporterBadge: "Membre passif",
      supporterDesc: "Souhaitez-vous soutenir le Training Autogène ? Les particuliers et les organisations peuvent soutenir ASTA en tant que membres donateurs (membres passifs).",
      supporterCta: "Devenir membre donateur",
      modalTag: "Demande d'Adhésion ASTA",
      modalTitle: "Rejoindre ASTA",
      modalRecipientLabel: "Destinataire :",
      fieldType: "Type d'adhésion *",
      typeActive: "Membre actif – Thérapeute TA RME",
      typeSupporter: "Membre donateur (membre passif)",
      fieldNameOrg: "Nom et Prénom / Organisation *",
      fieldNameOrgPlaceholder: "ex. Anna Rossi ou Cabinet / Organisation",
      fieldRmeNumber: "Numéro RME / ASCA (optionnel)",
      fieldRmePlaceholder: "ex. RME #123456",
      fieldNotesPlaceholderActive: "Ex. Lieu d'activité, formation en Training Autogène, motivation...",
      fieldNotesPlaceholderSupporter: "Ex. Adhésion individuelle ou organisation, questions sur le soutien à ASTA...",
      submitButton: "Envoyer la Demande d'Adhésion",
      successTitle: "Demande Prête pour l'Envoi !",
      successDesc: "Votre demande est prête à être envoyée à",
      mailtoButton: "Ouvrir l'E-mail Prérempli",
      emailSubjectActive: "Demande d'admission ASTA – Membre actif (Thérapeute TA RME)",
      emailSubjectSupporter: "Demande d'adhésion ASTA – Membre donateur (membre passif)"
    },
    footerDesc: "Association professionnelle de thérapeutes qualifiées en Training Autogène. Siège central à Lugano.",
    footerSedeTitle: "Siège Central",
    footerContactTitle: "Contacts & Info",
    footerHours: "Lun - Ven : 08:30 - 18:30",
    rightsText: "Tous droits réservés.",
    footerLegal: "Mentions Légales",
    footerPrivacy: "Protection des Données",
    footerRme: "Accréditation RME",
    modalBookingTitle: "Réservation de Consultation",
    modalBookingSub: "Demander une consultation initiale",
    modalSuccessTitle: "Demande Envoyée avec Succès !",
    modalSuccessDesc: "Notre secrétariat vous recontactera sous 24 heures ouvrables.",
    fieldName: "Nom et Prénom *",
    fieldEmail: "Email *",
    fieldPhone: "Téléphone *",
    fieldLocation: "Lieu de Préférence",
    fieldNotes: "Remarques (optionnel)",
    fieldConsent: "Je consens au traitement des données personnelles conformément à",
    submitButton: "Confirmer et Envoyer",
    cookieBannerText: "Nous utilisons des cookies essentiels et analytiques pour améliorer l'expérience des services ASTA Lugano.",
    cookieOnlyNec: "Seulement Nécessaires",
    cookieCustom: "Personnaliser",
    cookieAcceptAll: "Tout Accepter",
    privacyModalTitle: "Protection des Données (nLPD & RGPD)",
    tabPolicy: "Politique de Confidentialité",
    tabRights: "Centre de Confidentialité",
    tabCookies: "Politique des Cookies",
    closeBtn: "Fermer"
  },
  de: {
    brandTitle: "ASTA",
    brandSubtitle: "Schweizerischer Verband für Autogenes Training",
    navMetodo: "Die Methode",
    navAudio: "Der Weg",
    navTerapiste: "RME-Therapeutinnen",
    navRimborso: "Krankenkasse",
    navFaq: "FAQ",
    navAbout: "Über uns",
    ctaBook: "Termin Buchen",
    heroBadge: "Einzelne Hauptsitz in Lugano • RME & ASCA anerkannt",
    heroTitle: "Autogenes Training in Lugano für innere Balance und Gelassenheit",
    heroSubtitle: "Vertrauen Sie auf qualifizierte Therapeutinnen in unserem Zentrum in Lugano und online in der ganzen Schweiz. Eine wissenschaftlich bewährte Methode.",
    heroCtaPrimary: "Beratung anfragen",
    heroCtaSecondary: "RME-Therapeutin suchen",
    statRme: "100%",
    statRmeDesc: "Zertifizierte RME-Therapeutinnen",
    statSede: "Lugano",
    statSedeDesc: "Hauptsitz und Online CH",
    statRimborso: "70-90%",
    statRimborsoDesc: "Zusatzversicherungs-Rückvergütung",
    heroImageCaption: "Hauptsitz Lugano • Via Nassa 29",
    heroImageTitle: "Räume für innere Ruhe und Wohlbefinden",
    rmeBadgeText: "RME & ASCA Standards",
    rmeBadgeSub: "Strengste Schweizer Qualitätsstandards",
    methodTag: "Die Wissenschaftliche Methode",
    methodTitle: "Was ist Autogenes Training und wie verändert es Ihr Wohlbefinden",
    methodDesc: "Entwickelt vom Neurologen J.H. Schultz, ist das Autogene Training eine wissenschaftlich fundierte Entspannungsmethode.",
    method1Title: "Körperschwere",
    method1Desc: "Die erste Übung erzeugt ein angenehmes Gefühl tiefster muskulärer Entspannung.",
    method2Title: "Wärmeempfinden",
    method2Desc: "Fördert die periphere Durchblutung und schenkt ein wohliges Gefühl von Wärme.",
    method3Title: "Herzregulierung",
    method3Desc: "Harmonisiert Herzschlag und Blutdruck und beruhigt das Nervensystem.",
    method4Title: "Atem & Geist",
    method4Desc: "Reguliert die Atmung und schenkt tiefe mentale Ruhe.",
    journeyTag: "Der Weg in 4 Phasen",
    journeyTitle: "Wie es im Alltag funktioniert",
    journeySubtitle: "Ein schrittweiser und strukturierter Ansatz, um das Autogene Training in Ihren Alltag zu integrieren.",
    step1Title: "Psychische Konzentration",
    step1Desc: "Sie lernen, Ihre Aufmerksamkeit nach innen zu richten und äussere Reize zu reduzieren.",
    step2Title: "Somatische Entspannung",
    step2Desc: "Durch gezielte Formeln erfährt der Körper Ruhe, Schwere und angenehme Wärme.",
    step3Title: "Tägliches Üben",
    step3Desc: "Wenige Minuten pro Tag zu Hause genügen, um den natürlichen Entspannungsreflex zu festigen.",
    step4Title: "Volle Autonomie",
    step4Desc: "Sie wenden die Technik selbstständig im beruflichen oder privaten Alltag an.",
    therapistsTag: "Offizielles ASTA Netzwerk",
    therapistsTitle: "Aerkannte RME-Therapeutinnen in Lugano und der Schweiz",
    therapistsSubtitle: "Besuchen Sie unseren Hauptsitz in Lugano oder buchen Sie eine Online-Sitzung per Videokonferenz.",
    filterAll: "Alle Zentren",
    filterLugano: "Lugano Zentrum",
    filterOnline: "Online / Schweiz",
    bookButton: "Buchen bei",
    reimburseTag: "Versicherungsschutz",
    reimburseTitle: "Rückvergütung durch die Schweizer Zusatzversicherung",
    reimburseP1: "Alle Therapeutinnen des ASTA-Netzwerks sind vom RME (Erfahrungsmedizinisches Register) und ASCA anerkannt.",
    reimburseP2: "Dies garantiert eine teilweise Rückvergütung (in der Regel 70% bis 90%) über Ihre Krankenkassen-Zusatzversicherung.",
    reimburseCheck1: "Präventive Klärung mit Ihrer Zusatzversicherung wird empfohlen.",
    reimburseCheck2: "Detaillierte Rechnung am Ende der Sitzung für die Online-Rückerstattung.",
    reimburseCheck3: "Für die meisten Zusatzversicherungen ist keine ärztliche Verordnung zwingend.",
    reimburseStepsTitle: "So beantragen Sie die Rückerstattung",
    reimburseStep1Title: "Sitzung buchen",
    reimburseStep1Desc: "Wählen Sie eine zertifizierte RME-Therapeutin in Lugano oder online.",
    reimburseStep2Title: "RME-Rechnung erhalten",
    reimburseStep2Desc: "Sie erhalten die Honorarnote mit RME- und ZSR-Nummer.",
    reimburseStep3Title: "Bei Kasse einreichen",
    reimburseStep3Desc: "Rechnung in der Versicherungs-App hochladen oder per Post senden.",
    reimburseCta: "Verfügbarkeit prüfen",
    faqTag: "Häufig Gestellte Fragen",
    faqTitle: "Alles, was Sie über Autogenes Training wissen müssen",
    faq1Q: "Wird Autogenes Training in der Schweiz von der Krankenkasse vergütet?",
    faq1A: "Ja, Autogenes Training ist eine vom ErfahrungsMedizinischen Register (EMR/RME) anerkannte Methode der Komplementärmedizin. Sitzungen bei EMR-anerkannten ASTA-Therapeutinnen im Tessin (Lugano, Gordevio und Preonzo) werden von den meisten Zusatzversicherungen (VVG) anteilig rückvergütet. Bitte klären Sie die genaue Kostendeckung vorab mit Ihrer Krankenkasse.",
    faq2Q: "Ist für die Rückvergütung eine ärztliche Überweisung erforderlich?",
    faq2A: "In den meisten Fällen ist für EMR-anerkannte Methoden über die Zusatzversicherung keine ärztliche Verordnung nötig. Da die Bedingungen je nach Krankenkasse und Police variieren, empfehlen wir eine kurze Rückfrage bei Ihrem Versicherer vor Beginn des Kurses.",
    faq3Q: "Wie viele Sitzungen umfasst der Kurs und wie viel Zeit braucht das tägliche Üben?",
    faq3A: "Ein Standardkurs umfasst 10 Sitzungen bei einer qualifizierten Therapeutin. Zwischen den Terminen dauert das tägliche Üben zu Hause nur 5 bis 10 Minuten, 2- bis 3-mal täglich. Regelmässiges Training verankert die Entspannungsreaktion dauerhaft im Alltag.",
    faq4Q: "Was ist der Unterschied zwischen Autogenem Training, Meditation und Hypnose?",
    faq4A: "Das vom Psychiater J.H. Schultz entwickelte Autogene Training ist eine strukturierte psychosomatische Selbstentspannungsmethode (Schwere-, Wärme- und Atemübungen). Anders als bei der Hypnose erfolgt keine Fremdsuggestion – Sie lernen, Ruhe und Selbstregulation völlig eigenständig herbeizuführen.",
    faq5Q: "Kann ich Autogenes Training praktizieren, wenn ich Medikamente einnehme oder erkrankt bin?",
    faq5A: "Autogenes Training dient der Prävention und Gesundheitsförderung und ersetzt keine ärztliche Diagnose oder Therapie. Bei bestehenden Erkrankungen oder Medikamenteneinnahme sollten Sie dies vorab mit Ihrem Arzt und der Therapeutin besprechen.",
    faq6Q: "Wo kann ich im Tessin Autogenes Training erlernen?",
    faq6A: "Wenden Sie sich direkt an die EMR-anerkannten ASTA-Therapeutinnen im Tessin: in Lugano (Francesca Betteni), in Gordevio bei Locarno (Cristina Bettini) und in Preonzo bei Bellinzona (Tamara Ghisletta) – für Einzel- oder Kleingruppensitzungen.",
    asta: {
      title: "ASTA: Über uns",
      intro: "Der Schweizerische Verband für Autogenes Training (ASTA) wurde 2026 mit Sitz in Lugano als gemeinnütziger Verein gegründet. Er vereint Fachpersonen des Autogenen Trainings mit dem Ziel, dessen korrekte Anwendung zu fördern und wissenschaftlich fundierte Informationen zu verbreiten.",
      goalsTitle: "Unsere Ziele",
      goals: [
        "Das Autogene Training, seine korrekte Anwendung und seine psychophysischen Vorteile bekannt machen.",
        "Seminare, Veranstaltungen und Publikationen für Mitglieder und die Öffentlichkeit fördern.",
        "Den fachlichen Austausch durch Räume für Dialog und Intervision unter Fachpersonen unter Wahrung von Vertraulichkeit und Berufsethik fördern.",
        "Einzel- und Gruppensupervision unterstützen, um eine qualitativ hochwertige Anwendung zu gewährleisten.",
        "Gemeinsame Standards und Ethikrichtlinien im Tessin und in der Schweiz zum Schutz von Praktizierenden und Klienten definieren.",
        "Mit Institutionen, Gesundheitsorganisationen, Versicherern und Fachnetzwerken für die Anerkennung des AT in Prävention und komplementärem Wohlbefinden zusammenarbeiten.",
        "Mit den Registern und Krankenkassen (EMR/RME, ASCA, SNE/EGK) im Dialog stehen, um die Anerkennungsvoraussetzungen zu sichern.",
        "Auf die Bedürfnisse der Gemeinschaft mit nicht-invasiven und sicheren Methoden zur Bewältigung von Stress und Spannungen eingehen."
      ] as const
    },
    joinAsta: {
      tag: "Verbandsmitgliedschaft",
      title: "ASTA beitreten",
      subtitle: "Wählen Sie die passende Mitgliedschaft und unterstützen Sie die Qualität und Verbreitung des Autogenen Trainings in der Schweiz.",
      therapistTitle: "Komplementärtherapeut:innen AT EMR",
      therapistBadge: "Aktivmitglied",
      therapistDesc: "Sind Sie Komplementärtherapeut:in AT EMR? Treten Sie dem Verband bei, um an Supervisionen, Intervisionen, Weiterbildungen und einem professionellen Netzwerk für Qualität und Ethik teilzunehmen.",
      therapistCta: "Mitgliedschaft beantragen",
      supporterTitle: "ASTA unterstützen",
      supporterBadge: "Passivmitglied",
      supporterDesc: "Möchten Sie das Autogene Training unterstützen? Einzelpersonen und Organisationen können ASTA als Gönnermitglieder (Passivmitglieder) unterstützen.",
      supporterCta: "Gönner werden",
      modalTag: "ASTA Beitrittsgesuch",
      modalTitle: "ASTA beitreten",
      modalRecipientLabel: "Empfänger:",
      fieldType: "Art der Mitgliedschaft *",
      typeActive: "Aktivmitglied – Therapeut:in AT EMR",
      typeSupporter: "Gönnermitglied (Passivmitglied)",
      fieldNameOrg: "Vor- und Nachname / Organisation *",
      fieldNameOrgPlaceholder: "z. B. Anna Rossi oder Praxis / Organisation",
      fieldRmeNumber: "EMR- / ASCA-Nummer (optional)",
      fieldRmePlaceholder: "z. B. EMR #123456",
      fieldNotesPlaceholderActive: "z. B. Praxisstandort, Ausbildung in Autogenem Training, Motivation...",
      fieldNotesPlaceholderSupporter: "z. B. Einzelperson oder Organisation, Fragen zur Unterstützung von ASTA...",
      submitButton: "Beitrittsgesuch absenden",
      successTitle: "Anfrage zum Versand bereit!",
      successDesc: "Ihre Anfrage ist bereit für den Versand an",
      mailtoButton: "Vorausgefüllte E-Mail öffnen",
      emailSubjectActive: "Beitrittsgesuch ASTA – Aktivmitglied (Therapeut:in AT EMR)",
      emailSubjectSupporter: "Beitrittsgesuch ASTA – Gönnermitglied (Passivmitglied)"
    },
    footerDesc: "Berufsverband qualifizierter Therapeutinnen für Autogenes Training. Hauptsitz in Lugano.",
    footerSedeTitle: "Hauptsitz",
    footerContactTitle: "Kontakt & Info",
    footerHours: "Mo - Fr: 08:30 - 18:30",
    rightsText: "Alle Rechte vorbehalten.",
    footerLegal: "Impressum",
    footerPrivacy: "Datenschutz",
    footerRme: "RME-Akkreditierung",
    modalBookingTitle: "Terminanfrage",
    modalBookingSub: "Erstberatung anfragen",
    modalSuccessTitle: "Anfrage Erfolgreich Gesendet!",
    modalSuccessDesc: "Unser Sekretariat meldet sich innerhalb von 24 Arbeitsstunden bei Ihnen.",
    fieldName: "Vor- und Nachname *",
    fieldEmail: "E-Mail *",
    fieldPhone: "Telefon *",
    fieldLocation: "Bevorzugter Ort",
    fieldNotes: "Besondere Anliegen (optional)",
    fieldConsent: "Ich stimme der Verarbeitung der angegebenen personenbezogenen Daten gemäss zu:",
    submitButton: "Bestätigen und Absenden",
    cookieBannerText: "Wir verwenden essenzielle technische Cookies und, nach Einwilligung, analytische Cookies.",
    cookieOnlyNec: "Nur Notwendige",
    cookieCustom: "Anpassen",
    cookieAcceptAll: "Alle Akzeptieren",
    privacyModalTitle: "Datenschutz (nDSG & DSGVO)",
    tabPolicy: "Datenschutzerklärung",
    tabRights: "Datenschutz-Center",
    tabCookies: "Cookie-Richtlinie",
    closeBtn: "Schliessen"
  },
  en: {
    brandTitle: "ASTA",
    brandSubtitle: "Swiss Autogenic Training Association",
    navMetodo: "The Method",
    navAudio: "The Journey",
    navTerapiste: "RME Therapists",
    navRimborso: "Health Insurance",
    navFaq: "FAQ",
    navAbout: "About us",
    ctaBook: "Book Session",
    heroBadge: "Single Office in Lugano • RME & ASCA Recognized",
    heroTitle: "Autogenic Training in Lugano for balance and inner peace",
    heroSubtitle: "Trust qualified therapists at our Lugano headquarters and online throughout Switzerland. A scientifically proven method to reduce stress and improve sleep.",
    heroCtaPrimary: "Book a Consultation",
    heroCtaSecondary: "Find RME Therapist",
    statRme: "100%",
    statRmeDesc: "Certified RME therapists",
    statSede: "Lugano",
    statSedeDesc: "Main office & online CH",
    statRimborso: "70-90%",
    statRimborsoDesc: "Insurance reimbursement",
    heroImageCaption: "Main Office Lugano • Via Nassa 29",
    heroImageTitle: "Spaces dedicated to inner well-being",
    rmeBadgeText: "RME & ASCA Standards",
    rmeBadgeSub: "Rigorous Swiss quality standards",
    methodTag: "The Scientific Method",
    methodTitle: "What is Autogenic Training and how it transforms your well-being",
    methodDesc: "Developed by neurologist J.H. Schultz, Autogenic Training is a scientifically validated self-relaxation technique.",
    method1Title: "Body Heaviness",
    method1Desc: "The first exercise induces a pleasant sense of deep muscle relaxation, dissolving stress.",
    method2Title: "Distensive Warmth",
    method2Desc: "Promotes peripheral vasodilation, providing a pleasant feeling of warmth throughout the body.",
    method3Title: "Cardiac Regulation",
    method3Desc: "Harmonizes heartbeat and blood pressure, reducing sympathetic nervous system overactivation.",
    method4Title: "Breath & Mind",
    method4Desc: "Spontaneously regulates breathing and delivers profound mental calm, ideal against insomnia.",
    journeyTag: "The 4-Step Journey",
    journeyTitle: "How it works in daily life",
    journeySubtitle: "A gradual approach to integrate Autogenic Training into your routine and restore inner calm.",
    step1Title: "Mental Focus",
    step1Desc: "You learn to turn your attention inward, gradually reducing external distractions.",
    step2Title: "Somatic Relaxation",
    step2Desc: "Through specific formulas, the body experiences deep release, heaviness, and warmth.",
    step3Title: "Daily Practice",
    step3Desc: "Just a few minutes a day at home are enough to reinforce the natural calm response.",
    step4Title: "Full Autonomy",
    step4Desc: "You apply the technique independently whenever facing work or personal stress.",
    therapistsTag: "Official ASTA Network",
    therapistsTitle: "RME Recognized Therapists in Lugano and Switzerland",
    therapistsSubtitle: "Visit our central office in Lugano or book an online video session with accredited professionals.",
    filterAll: "All Centers",
    filterLugano: "Lugano Center",
    filterOnline: "Online / Switzerland",
    bookButton: "Book with",
    reimburseTag: "Insurance Coverage",
    reimburseTitle: "Complementary Health Insurance Reimbursement in Switzerland",
    reimburseP1: "All therapists in the ASTA network are recognized by RME (Empirical Medicine Register) and ASCA.",
    reimburseP2: "This guarantees partial reimbursement (typically 70% to 90%) through your complementary health insurance (e.g. Helsana, Swica, CSS).",
    reimburseCheck1: "Prior verification with your complementary insurance policy is recommended.",
    reimburseCheck2: "Detailed invoice issued at the end of the session ready for online refund.",
    reimburseCheck3: "No mandatory medical prescription required for most health funds.",
    reimburseStepsTitle: "How to request reimbursement",
    reimburseStep1Title: "Book your session",
    reimburseStep1Desc: "Choose a certified ASTA RME therapist in Lugano or online.",
    reimburseStep2Title: "Receive RME invoice",
    reimburseStep2Desc: "At the end of treatment, receive your fee note with RME and ZSR numbers.",
    reimburseStep3Title: "Submit to insurance",
    reimburseStep3Desc: "Upload the invoice to your insurance app or mail it.",
    reimburseCta: "Check therapist availability",
    faqTag: "Frequently Asked Questions",
    faqTitle: "Everything you need to know about Autogenic Training",
    faq1Q: "Is Autogenic Training reimbursed by health insurance in Switzerland?",
    faq1A: "Yes, Autogenic Training is a complementary medicine method recognized by the Empirical Medicine Register (RME/EMR). Sessions with RME-certified ASTA therapists in Ticino (Lugano, Gordevio, and Preonzo) are eligible for reimbursement through complementary health insurance plans (LCA) that cover this method. Please verify your specific policy with your insurer beforehand.",
    faq2Q: "Do I need a doctor's referral for RME insurance reimbursement?",
    faq2A: "In most cases, a medical referral is not required for RME-recognized complementary therapies covered under supplementary insurance. However, terms vary depending on your health insurer and deductible, so we recommend checking directly with your provider before starting.",
    faq3Q: "How many sessions are included and how much daily practice is required?",
    faq3A: "The standard training consists of 10 guided sessions with a qualified therapist. Between sessions, daily home practice takes only 5 to 10 minutes, repeated 2 or 3 times a day. Consistency is key to making the relaxation response automatic and lasting.",
    faq4Q: "How does Autogenic Training differ from meditation or hypnosis?",
    faq4A: "Developed by psychiatrist J.H. Schultz, Autogenic Training is a structured psychosomatic self-relaxation method using specific physical and mental formulas (heaviness, warmth, breathing). Unlike hypnosis, it involves no external suggestion—you learn to generate deep calm independently and consciously.",
    faq5Q: "Can I practice Autogenic Training if I take medication or have a medical condition?",
    faq5A: "Autogenic Training is a complementary preventive and wellness method and does not replace medical diagnosis or treatment. If you have an existing health condition or take medication, please consult your doctor and your therapist before starting.",
    faq6Q: "Where can I take Autogenic Training sessions in Ticino?",
    faq6A: "You can contact ASTA's RME-recognized therapists across Ticino: in Lugano (Francesca Betteni), Gordevio near Locarno (Cristina Bettini), and Preonzo near Bellinzona (Tamara Ghisletta), for individual or small-group courses.",
    asta: {
      title: "ASTA: Who We Are",
      intro: "The Swiss Autogenic Training Association (ASTA) was founded in 2026, based in Lugano, as a non-profit association. It brings together Autogenic Training professionals with the aim of promoting its proper application and disseminating scientifically grounded information.",
      goalsTitle: "Our Purposes",
      goals: [
        "Promote Autogenic Training, its proper application, and its psychophysical benefits.",
        "Organize and promote seminars, events, and publications for members and the general public.",
        "Foster professional exchange with dedicated spaces for dialogue and peer intervision, respecting confidentiality and ethics.",
        "Support individual and group supervision to ensure high-quality practice.",
        "Define shared standards and ethics in Ticino and across Switzerland to protect both practitioners and clients.",
        "Collaborate with institutions, healthcare bodies, insurers, and professional networks for the recognition of AT in prevention and complementary well-being.",
        "Maintain dialogue with registries and health insurers (RME/EMR, ASCA, SNE/EGK) to uphold recognition requirements.",
        "Meet community needs with safe, non-invasive tools for managing stress and tension."
      ] as const
    },
    joinAsta: {
      tag: "Association Membership",
      title: "Join ASTA",
      subtitle: "Choose the membership option that fits your profile and help promote high-quality Autogenic Training in Switzerland.",
      therapistTitle: "RME Complementary Therapists AT",
      therapistBadge: "Active member",
      therapistDesc: "Are you an RME-certified Autogenic Training therapist? Join the association to take part in supervision and peer intervision, training events, and a professional network promoting quality and ethics.",
      therapistCta: "Apply for membership",
      supporterTitle: "Support ASTA",
      supporterBadge: "Passive member",
      supporterDesc: "Would you like to support Autogenic Training? Individuals and organizations can support ASTA as supporting members (passive members).",
      supporterCta: "Become a supporter",
      modalTag: "ASTA Membership Application",
      modalTitle: "Join ASTA",
      modalRecipientLabel: "Recipient:",
      fieldType: "Membership type *",
      typeActive: "Active member – RME Therapist AT",
      typeSupporter: "Supporting member (passive member)",
      fieldNameOrg: "Full Name / Organization *",
      fieldNameOrgPlaceholder: "e.g. Anna Rossi or Practice / Organization",
      fieldRmeNumber: "RME / ASCA Number (optional)",
      fieldRmePlaceholder: "e.g. RME #123456",
      fieldNotesPlaceholderActive: "e.g. Practice location, Autogenic Training qualification, motivation...",
      fieldNotesPlaceholderSupporter: "e.g. Individual or organization membership, any questions about supporting ASTA...",
      submitButton: "Send Membership Request",
      successTitle: "Request Ready to Send!",
      successDesc: "Your request is ready to be sent to",
      mailtoButton: "Open Pre-filled Email",
      emailSubjectActive: "ASTA Membership Application – Active Member (RME Therapist AT)",
      emailSubjectSupporter: "ASTA Membership Application – Supporting Member (Passive Member)"
    },
    footerDesc: "Professional association of qualified Autogenic Training therapists. Central office in Lugano and RME & ASCA recognition.",
    footerSedeTitle: "Central Office",
    footerContactTitle: "Contact & Info",
    footerHours: "Mon - Fri: 08:30 - 18:30",
    rightsText: "All rights reserved.",
    footerLegal: "Legal Notice",
    footerPrivacy: "Data Protection",
    footerRme: "RME Accreditation",
    modalBookingTitle: "Session Booking",
    modalBookingSub: "Request initial consultation",
    modalSuccessTitle: "Request Sent Successfully!",
    modalSuccessDesc: "Our secretariat or your chosen therapist will contact you within 24 working hours.",
    fieldName: "Full Name *",
    fieldEmail: "Email *",
    fieldPhone: "Phone *",
    fieldLocation: "Preferred Location",
    fieldNotes: "Notes or Special Requirements (optional)",
    fieldConsent: "I consent to the processing of personal data for booking management, in compliance with the",
    submitButton: "Confirm and Send Request",
    cookieBannerText: "We use essential technical cookies and, upon consent, analytical cookies to improve your experience.",
    cookieOnlyNec: "Only Necessary",
    cookieCustom: "Customize",
    cookieAcceptAll: "Accept All",
    privacyModalTitle: "Data Protection (nFADP & GDPR)",
    tabPolicy: "Privacy Policy",
    tabRights: "Privacy & Rights Center",
    tabCookies: "Cookie Policy",
    closeBtn: "Close"
  }
};
