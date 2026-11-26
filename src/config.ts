/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CONTACT_EMAIL = "info@associazioneta.ch";
export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;
export const ORG_NAME = "Associazione di Training Autogeno Svizzera (ASTA)";
export const ORG_LOCATION = "Sede: Lugano-Pregassona, Ticino";
export const LOGO_SRC = "/assets/aistudio/logo_asta_trainig_5603fac5.jpeg";
export const LOGO_ALT =
  "Logo Associazione di Training Autogeno Svizzera (ASTA) – Rilassa la mente, ritrova il tuo equilibrio";

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_LINKS: readonly NavItem[] = [
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#terapiste", label: "Terapiste" },
  { href: "#cose-il-training-autogeno", label: "Il metodo" },
  { href: "#benefici", label: "Benefici" },
  { href: "#contatti", label: "Contatti" },
];

export interface TherapistFounder {
  name: string;
  details: string;
  rmeUrl?: string;
  placeholderAttr?: string;
}

export const FOUNDER_THERAPISTS: readonly TherapistFounder[] = [
  {
    name: "Cristina Bettini Cerini",
    details: "Gordevio – Segretaria e Tesoriera",
    rmeUrl: "https://emr.ch/it/terapeuta/cristina.bettini.cerini",
  },
  {
    name: "Francesca Betteni",
    details: "Lugano – Presidente",
    rmeUrl: "https://emr.ch/it/terapeuta/francesca.betteni",
  },
  {
    name: "Tamara Ghisletta",
    details: "Preonzo – Vicepresidente",
    rmeUrl: "https://emr.ch/it/terapeuta/tamara.ghisletta",
  },
];

export const PHYSICAL_BENEFITS: readonly string[] = [
  "Recupero delle energie psicofisiche e minore senso di stanchezza",
  "Minori difficoltà ad addormentarsi e miglioramento del sonno",
  "Riduzione degli stati ansiosi",
  "Autoregolazione del ritmo cardiaco e sostegno alla circolazione e alla temperatura corporea",
  "Sostegno alla regolazione della pressione arteriosa e della digestione",
  "Minore percezione delle sensazioni dolorose",
  "Sollievo nei disturbi di origine psicosomatica, come emicranie, gastriti e dermatiti",
];

export const PSYCHIC_BENEFITS: readonly string[] = [
  "Maggiore autocontrollo emotivo di fronte a eventi stressanti, ad esempio nella gestione della rabbia",
  "Potenziamento di concentrazione e memoria, utile anche nella preparazione di esami",
  "Maggiore capacità di introspezione, autocoscienza e consapevolezza di sé",
];

export const ASTA_GOALS: readonly string[] = [
  "Divulgare il Training Autogeno, la sua corretta applicazione e i suoi benefici psicofisici.",
  "Promuovere seminari, eventi e pubblicazioni, per i membri e per il pubblico.",
  "Favorire lo scambio professionale con spazi di confronto e intervisione tra professionisti, nel rispetto di riservatezza e deontologia.",
  "Sostenere la supervisione, individuale e di gruppo, per garantire un’applicazione di alta qualità.",
  "Definire standard ed etica condivisi in Ticino e in Svizzera, a tutela di chi pratica e di chi ne beneficia.",
  "Collaborare con istituzioni, enti sanitari, assicuratori e reti professionali per il riconoscimento del TA nella prevenzione e nel benessere complementare.",
  "Dialogare con i registri e le casse malati (RME/EMR, ASCA, SNE/EGK), per mantenere i requisiti di riconoscimento.",
  "Rispondere ai bisogni della comunità con strumenti non invasivi e sicuri per la gestione di stress e tensioni.",
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "rimborso-cassa-malattia",
    question: "Il TA è rimborsato dalla cassa malattia complementare in Svizzera?",
    answer:
      "Sì, il Training Autogeno è un metodo di medicina complementare riconosciuto dal Registro di Medicina Empirica (RME). Le sedute sono rimborsate dalle assicurazioni complementari (LCA) che includono questo metodo: si consiglia di verificare preventivamente la propria copertura presso la propria cassa malati.",
  },
  {
    id: "prescrizione-medica",
    question: "Serve la prescrizione medica per il rimborso?",
    answer:
      "Nella maggior parte dei casi, per le terapie complementari riconosciute RME non è necessaria una prescrizione medica. Tuttavia, condizioni e franchigie variano in base alla singola copertura: vi invitiamo a chiedere conferma diretta alla sua assicurazione prima di iniziare il percorso.",
  },
  {
    id: "incontri-e-tempo",
    question: "Quanti incontri e quanto tempo richiede l'esercizio quotidiano?",
    answer:
      "Il percorso prevede 10 incontri con una terapista qualificata per apprendere gradualmente le formule del metodo. Tra un incontro e l’altro è raccomandato l'allenamento quotidiano di circa 15-20 minuti: la costanza permette il raggiungimento dello stato desiderato in autonomia.",
  },
  {
    id: "differenze-ipnosi-meditazione",
    question: "Che differenza c’è tra Training Autogeno, ipnosi e meditazione?",
    answer:
      "Ideato dallo psichiatra J.H. Schultz, il Training Autogeno è una tecnica di autodistensione psicosomatica strutturata in esercizi fisici e mentali precisi (pesantezza, calore, respiro). A differenza dell'ipnosi, non prevede suggestioni esterne da parte del terapeuta: è la persona stessa a generare lo stato di calma in piena autonomia e coscienza. A differenza della meditazione, inoltre, non si basa sull'osservazione distaccata dei pensieri o della realtà presente, ma utilizza formule mentali precise per attivare una risposta fisiologica concreta di distensione.",
  },
  {
    id: "farmaci-o-patologie",
    question: "Posso praticare il TA se assumo farmaci o ho una patologia?",
    answer:
      "Il Training Autogeno è un metodo che non sostituisce diagnosi o cure mediche. In presenza di patologie fisiche o psichiche, o se si assumono farmaci, è consigliato parlarne preventivamente con il proprio medico per valutare l'idoneità del percorso.",
  },
];
