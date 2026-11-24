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
    ctaBook: "Prenota Colloquio",
    heroBadge: "Sede Unica a Lugano • Riconosciuto RME & ASCA",
    heroTitle: "Training Autogeno a Lugano per ritrovare equilibrio e serenità",
    heroSubtitle: "Affidati a terapiste qualificate nella nostra sede di Lugano e online in tutta la Svizzera. Un metodo scientificamente provato per ridurre ansia, migliorare la qualità del sonno e rigenerare corpo e mente con rimborso cassa malati complementare.",
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
    methodTitle: "Cos'è il Training Autogeno e come trasforma il tuo benessere",
    methodDesc: "Sviluppato dal neurologo e psichiatra Johannes Heinrich Schultz, il Training Autogeno è una tecnica di autorilassamento basata su concentrazione passiva. Permette di modificare volontariamente lo stato di tensione psicofisica.",
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
    therapistsTitle: "Terapiste RME riconosciute a Lugano e in Svizzera",
    therapistsSubtitle: "Visita la nostra sede centrale a Lugano o prenota una seduta online in videoconferenza con professioniste accreditate dalle casse malati.",
    filterAll: "Tutti i Centri",
    filterLugano: "Lugano Centro",
    filterOnline: "Online / Svizzera",
    bookButton: "Prenota con",
    reimburseTag: "Copertura Assicurativa",
    reimburseTitle: "Rimborso Cassa Malati Complementare in Svizzera",
    reimburseP1: "Tutte le terapiste della rete ASTA sono riconosciute dal RME (Registro Medicina Empirica) e da ASCA, enti di controllo svizzeri per le terapie complementari.",
    reimburseP2: "Questo garantisce il rimborso parziale (solitamente dal 70% al 90% del costo della seduta) tramite la propria assicurazione malattie complementare (es. Helsana, Sanitas, Swica, CSS, Concordia, Visana).",
    reimburseCheck1: "Verifica preventiva consigliata con la tua cassa malati per la polizza complementare specifica.",
    reimburseCheck2: "Fattura dettagliata rilasciata a fine seduta pronta per il rimborso online.",
    reimburseCheck3: "Nessuna prescrizione medica obbligatoria per la maggior parte delle casse malati.",
    reimburseStepsTitle: "Come richiedere il rimborso",
    reimburseStep1Title: "Prenota la tua seduta",
    reimburseStep1Desc: "Scegli una terapista RME certificata ASTA a Lugano o online.",
    reimburseStep2Title: "Ricevi la fattura RME",
    reimburseStep2Desc: "A fine trattamento riceverai la nota d'onorario con numero RME e ZSR.",
    reimburseStep3Title: "Invia alla cassa malati",
    reimburseStep3Desc: "Carica la fattura sull'app della tua assicurazione o spediscila per posta.",
    reimburseCta: "Verifica disponibilità terapiste",
    faqTag: "Domande Frequenti",
    faqTitle: "Tutto quello che c'è da sapere sul Training Autogeno",
    faq1Q: "Il Training Autogeno è rimborsato dalla cassa malati in Svizzera?",
    faq1A: "Sì. Tutte le terapiste della nostra sede ASTA a Lugano sono riconosciute RME (Registro Medicina Empirica) e ASCA. Questo significa che i trattamenti di Training Autogeno sono rimborsati dalla maggior parte delle assicurazioni malattia complementari.",
    faq2Q: "Quanto dura un ciclo completo di Training Autogeno?",
    faq2A: "Un ciclo standard si compone di 7 a 10 sedute individuali (o di piccolo gruppo), solitamente a cadenza settimanale. Già dopo le prime 3-4 sedute si avvertono benefici tangibili sulla qualità del sonno e sulla gestione dello stress quotidiano.",
    faq3Q: "Qual è la differenza tra Training Autogeno e meditazione?",
    faq3A: "Il Training Autogeno è un metodo scientificamente validato di autorilassamento focalizzato su esercizi organici codificati (pesantezza, calore, cuore, respiro), ideato dal neurologo J.H. Schultz. È strutturato, rapido da apprendere e produce modificazioni fisiologiche misurabili.",
    faq4Q: "Dove si tengono le sedute?",
    faq4A: "Le nostre terapiste ricevono nella sede centrale di Lugano Centro (Via Nassa 29) e sono disponibili sedute online in videoconferenza per chi risiede in altre zone della Svizzera.",
    footerDesc: "Associazione professionale di terapiste qualificate in Training Autogeno. Sede centrale a Lugano e riconoscimento RME & ASCA per il rimborso cassa malati in tutta la Svizzera.",
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
    faq1Q: "Le Training Autogène est-il remboursé par l'assurance en Suisse ?",
    faq1A: "Oui. Toutes les thérapeutes de notre siège ASTA à Lugano sont reconnues RME et ASCA pour l'assurance complémentaire.",
    faq2Q: "Combien de temps dure un cycle complet ?",
    faq2A: "Un cycle standard se compose de 7 à 10 séances individuelles, généralement hebdomadaires.",
    faq3Q: "Quelle est la différence entre Training Autogène et méditation ?",
    faq3A: "Le Training Autogène est une méthode scientifiquement validée d'autorelaxation conçue par J.H. Schultz.",
    faq4Q: "Où se tiennent les séances ?",
    faq4A: "Nos thérapeutes reçoivent au siège central de Lugano Centre (Via Nassa 29) et proposent des séances en ligne.",
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
    faq1Q: "Wird Autogenes Training von der Krankenkasse in der Schweiz bezahlt?",
    faq1A: "Ja. Alle Therapeutinnen unseres ASTA-Zentrums in Lugano sind RME- und ASCA-anerkannt für Zusatzversicherungen.",
    faq2Q: "Wie lange dauert ein vollständiger Zyklus?",
    faq2A: "Ein Standardzyklus besteht aus 7 bis 10 Einzelsitzungen, üblicherweise wöchentlich.",
    faq3Q: "Was ist der Unterschied zwischen Autogenem Training und Meditation?",
    faq3A: "Autogenes Training ist eine wissenschaftlich validierte Methode der Selbstregulation nach J.H. Schultz.",
    faq4Q: "Wo finden die Sitzungen statt?",
    faq4A: "Unsere Therapeutinnen empfangen im Hauptsitz in Lugano Zentrum (Via Nassa 29) sowie online.",
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
    faq1A: "Yes. All therapists at our ASTA office in Lugano are RME and ASCA recognized for complementary insurance.",
    faq2Q: "How long is a complete cycle of Autogenic Training?",
    faq2A: "A standard cycle consists of 7 to 10 individual sessions, usually weekly.",
    faq3Q: "What is the difference between Autogenic Training and meditation?",
    faq3A: "Autogenic Training is a scientifically validated self-relaxation method focused on codified organic exercises.",
    faq4Q: "Where do sessions take place?",
    faq4A: "Our therapists receive clients at our central office in Lugano Center (Via Nassa 29) and offer online video sessions.",
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
