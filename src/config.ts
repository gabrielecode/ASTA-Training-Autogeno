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

export interface TranslationSchema {
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
}

export const IT_TRANSLATIONS: TranslationSchema = {
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
};

const localeCache: Partial<Record<Lang, TranslationSchema>> = {
  it: IT_TRANSLATIONS,
};

export async function loadLocale(lang: Lang): Promise<TranslationSchema> {
  if (localeCache[lang]) {
    return localeCache[lang]!;
  }
  let loaded: TranslationSchema;
  if (lang === 'fr') {
    loaded = (await import('./locales/fr')).default;
  } else if (lang === 'de') {
    loaded = (await import('./locales/de')).default;
  } else if (lang === 'en') {
    loaded = (await import('./locales/en')).default;
  } else {
    loaded = IT_TRANSLATIONS;
  }
  localeCache[lang] = loaded;
  return loaded;
}

