"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const en: Record<string, string> = {
  // Navigation
  "nav.about": "About",
  "nav.ourApproach": "Our Approach",
  "nav.newsInsights": "News & Insights",
  "nav.careers": "Careers",
  "nav.contact": "Contact",

  // Hero
  "hero.title": "Bold Problems. Clear Systems. Lasting Impact.",
  "hero.subtitle": "We help organizations navigate complexity, unlock potential, and create transformative change across Africa and beyond.",
  "hero.cta": "Start a Conversation",

  // Trust bar
  "trust.title": "Trusted by leading organizations",

  // Clients section
  "clients.title": "Who We Serve",
  "clients.subtitle": "We partner with organizations committed to meaningful change",

  // Approach section
  "approach.title": "Our Approach",
  "approach.subtitle": "We blend insight, action, and systems-level clarity",

  // CTA section
  "cta.title": "Ready to tackle your boldest challenges?",
  "cta.subtitle": "Let's explore how we can work together to create lasting impact.",
  "cta.button": "Start a Conversation",

  // Footer
  "footer.tagline": "Insight. Action. Clarity.",
  "footer.copyright": "All rights reserved.",
  "footer.description": "A boutique advisory firm that blends insight, action, and systems-level clarity to solve bold, complex, high-stakes problems.",
  "footer.navigation": "Navigation",
  "footer.connect": "Connect",

  // Africa map
  "map.hint": "Hover to explore",
  "map.projects": "Projects Delivered",
  "map.topSector": "Top Sector",
  "map.partOf": "Part of our impact across:",
  "map.totalProjects": "Total Projects",
  "map.countries": "Countries",
  "map.value": "Value",
  "map.countriesCount": "Countries our projects have covered",

  // Country names
  "country.nigeria": "Nigeria",
  "country.kenya": "Kenya",
  "country.southAfrica": "South Africa",
  "country.ghana": "Ghana",
  "country.egypt": "Egypt",
  "country.morocco": "Morocco",
  "country.senegal": "Senegal",
  "country.coteDivoire": "Côte d'Ivoire",
  "country.drCongo": "DR Congo",
  "country.ethiopia": "Ethiopia",
  "country.uganda": "Uganda",
  "country.tanzania": "Tanzania",
  "country.angola": "Angola",
  "country.mozambique": "Mozambique",
  "country.southSudan": "South Sudan",

  // Sector names
  "sector.financialServices": "Financial Services",
  "sector.digitalInfrastructure": "Digital Infrastructure",
  "sector.agriculture": "Agriculture",
  "sector.healthcare": "Healthcare",

  // Homepage Hero
  "home.hero.title": "We Drive Bold Agendas",
  "home.hero.subtitle": "We help leaders across governments, donors, and large private sector firms move bold agendas from paper to performance.",
  "home.hero.contact": "Contact Us",
  "home.hero.learn": "Learn More",

  // Homepage Partners Section
  "home.partners.title": "How we work with partners",
  "home.partners.subtitle": "We partner with organizations across sectors to deliver transformative outcomes.",
  "home.partners.donors.title": "Donors & Foundations",
  "home.partners.donors.desc": "Seeking to deliver ambitious systems-change transformation programs that drive large-scale impact. We help design, implement, and scale initiatives that create lasting change.",
  "home.partners.corporates.title": "Corporates & Firms",
  "home.partners.corporates.desc": "Launching or scaling new ventures, particularly digitally enabled businesses — irrespective of sector. We provide strategic advisory and hands-on implementation support.",
  "home.partners.investment.title": "PE/Investment Firms",
  "home.partners.investment.desc": "Seeking due diligence or requiring significant performance uplift in portfolio companies. We bring deep sector expertise and operational rigor to drive value creation.",
  "home.partners.government.title": "Government Agencies",
  "home.partners.government.desc": "Driving policy innovation and public sector transformation. We help governments design and implement programs that deliver measurable outcomes for citizens.",
  "home.partners.multilateral.title": "Multilateral Organizations",
  "home.partners.multilateral.desc": "Coordinating complex, multi-stakeholder initiatives across borders. We bring expertise in navigating institutional complexity while maintaining execution focus.",
  "home.partners.ngos.title": "NGOs & Non-Profits",
  "home.partners.ngos.desc": "Supporting non-governmental organizations in scaling impact programs across Africa. We help design sustainable models, strengthen institutional capacity, and maximize reach for lasting social change.",

  // Homepage Impact Section
  "home.impact.title": "Driving meaningful change across Africa",
  "home.impact.subtitle": "Our practitioners have collaborated with global organizations to drive meaningful impact across the continent.",
  "home.impact.projects": "Projects Delivered",
  "home.impact.countries": "Countries",
  "home.impact.value": "Value Created",
  "home.impact.clients": "Client Organizations",

  // Homepage Testimonials
  "home.testimonials.title": "See what sets Augmentum apart",
  "home.testimonials.subtitle": "Hear directly from our clients and practitioners.",
  "home.testimonials.watch": "Watch video",

  // Homepage Trust Bar
  "home.trust.label": "Trusted By",

  // Homepage Insights
  "home.insights.label": "Insights",
  "home.insights.title": "News & Insights",
  "home.insights.viewAll": "View all insights",
  "home.insights.digital.title": "Partnering with Lagos Business School on Digital Financial Inclusion",
  "home.insights.digital.description": "Collaborating with LBS's SIDFS Innovation Lab on a Gates Foundation-funded project testing digital solutions for underserved communities.",
  "home.insights.digital.category": "Financial Inclusion",
  "home.insights.agriculture.title": "Augmentum MD Appointed to MTN Board",
  "home.insights.agriculture.description": "Augmentum Managing Director Topsy Kola-Oyeneyin joins MTN Communications as a board director.",
  "home.insights.agriculture.category": "Leadership",
  "home.insights.healthcare.title": "Leading Nigeria's Financial Inclusion Initiative",
  "home.insights.healthcare.description": "VP Shettima launches a national financial inclusion initiative targeting a $1 trillion economy, led by Augmentum.",
  "home.insights.healthcare.category": "Policy & Impact",

  // Homepage Careers
  "home.careers.label": "Careers",
  "home.careers.title": "Join our team",
  "home.careers.desc": "We're always looking for exceptional talent who want to make a meaningful impact. Join a team of practitioners who've done the work, not just advised on it.",
  "home.careers.cta": "View open positions",
  "home.careers.team": "Team members and practitioners",
  "home.careers.experience": "Years of combined leadership and execution experience",
  "home.careers.mbb": "With experience at MBB and other leading consulting firms",
  "home.careers.flexible": "Flexible team model",

  // Homepage CTA
  "home.cta.label": "Get in Touch",
  "home.cta.title": "Ready to drive your bold agenda?",
  "home.cta.desc": "Whether you're navigating a complex challenge or exploring a bold opportunity, we'd like to hear from you.",
  "home.cta.contact": "Contact Us",
  "home.cta.learn": "Learn More About Us",

  // About Page - Who We Are
  "about.label": "About Us",
  "about.whoWeAre.title": "Who We Are",
  "about.whoWeAre.p1": "Augmentum Advisory is a boutique,",
  "about.whoWeAre.p1Bold": "Africa-rooted advisory firm",
  "about.whoWeAre.p1End": "built to help leaders move bold agendas from",
  "about.whoWeAre.p1Bold2": "paper to performance.",
  "about.whoWeAre.p2": "At our core, Augmentum is about",
  "about.whoWeAre.p2Bold": "moving bold agendas",
  "about.whoWeAre.p2End": "from paper to performance. We exist to help leaders achieve outcomes in contexts where progress depends on aligning multiple actors and navigating complexity.",
  "about.whoWeAre.p3": "We combine",
  "about.whoWeAre.p3Bold1": "strategic insight",
  "about.whoWeAre.p3Mid": "with",
  "about.whoWeAre.p3Bold2": "hands-on delivery,",
  "about.whoWeAre.p3End": "ensuring that ideas are",
  "about.whoWeAre.p3Bold3": "not only credible but executable.",
  "about.whoWeAre.augment": "We do not simply provide advice;",
  "about.whoWeAre.augmentBold": "we augment.",
  "about.whoWeAre.augmentEnd": "We bring clarity in complexity, contextual wisdom, and practitioner-led execution that drives results.",

  // About Page - Our Leadership
  "about.leadership.label": "Leadership",
  "about.leadership.title": "Our Leadership",
  "about.leadership.name": "Topsy Kola-Oyeneyin",
  "about.leadership.role": "Managing Partner",
  "about.leadership.bio1": "Our Managing Partner, Topsy Kola-Oyeneyin, is a practitioner with rare depth across financial systems, national reform, and multi-actor execution.",
  "about.leadership.bio2": "She has led transformation across Africa and the Middle East — including as Head of FirstBank's International Banking operations, Partner and inaugural co-lead of McKinsey's payments and digital finance practice for Africa & the Middle East, and advisor to governments, regulators, and global development partners.",
  "about.leadership.bio3": "She brings strategic fluency, operational depth, regulatory access, and a track record of delivering complex, sector-wide reform and economic transformation programs.",

  // About Page - How We Work
  "about.howWeWork.label": "Our Approach",
  "about.howWeWork.title": "How We Work",
  "about.howWeWork.subtitle": "Our approach is built on five principles that guide every engagement.",
  "about.howWeWork.q.title": "We ask better questions",
  "about.howWeWork.q.desc": "Grounding every problem in first principles and cutting through noise to find what truly matters.",
  "about.howWeWork.clarity.title": "We move fast to clarity",
  "about.howWeWork.clarity.desc": "Synthesising complexity into insight, direction, and action — so leaders can decide and move.",
  "about.howWeWork.execution.title": "We build teams and tools for execution",
  "about.howWeWork.execution.desc": "PMOs, dashboards, operating models, and governance structures that make delivery inevitable.",
  "about.howWeWork.coalitions.title": "We align coalitions",
  "about.howWeWork.coalitions.desc": "Enabling actors across government, private sector, and development partners to move in the same direction with shared purpose.",
  "about.howWeWork.momentum.title": "We drive momentum",
  "about.howWeWork.momentum.desc": "Ensuring ideas convert into actions, actions into results, and results into sustained transformation.",

  // About Page - Where We Work
  "about.whereWeWork.title": "Where we work",
  "about.whereWeWork.subtitle": "Our experience spans sectors, allowing us to bring cross-industry insights to every engagement.",
};

// French translations
const fr: Record<string, string> = {
  // Navigation
  "nav.about": "À Propos",
  "nav.ourApproach": "Notre Approche",
  "nav.newsInsights": "Actualités & Perspectives",
  "nav.careers": "Carrières",
  "nav.contact": "Contact",

  // Hero
  "hero.title": "Défis Ambitieux. Systèmes Clairs. Impact Durable.",
  "hero.subtitle": "Nous aidons les organisations à naviguer la complexité, libérer leur potentiel et créer un changement transformateur en Afrique et au-delà.",
  "hero.cta": "Démarrer une Conversation",

  // Trust bar
  "trust.title": "La confiance des organisations leaders",

  // Clients section
  "clients.title": "Nos Clients",
  "clients.subtitle": "Nous collaborons avec des organisations engagées pour un changement significatif",

  // Approach section
  "approach.title": "Notre Approche",
  "approach.subtitle": "Nous combinons perspicacité, action et clarté systémique",

  // CTA section
  "cta.title": "Prêt à relever vos défis les plus ambitieux?",
  "cta.subtitle": "Explorons ensemble comment créer un impact durable.",
  "cta.button": "Démarrer une Conversation",

  // Footer
  "footer.tagline": "Perspicacité. Action. Clarté.",
  "footer.copyright": "Tous droits réservés.",
  "footer.description": "Un cabinet de conseil boutique qui allie perspicacité, action et clarté systémique pour résoudre des problèmes audacieux, complexes et à fort enjeu.",
  "footer.navigation": "Navigation",
  "footer.connect": "Connexion",

  // Africa map
  "map.hint": "Survolez pour explorer",
  "map.projects": "Projets Livrés",
  "map.topSector": "Secteur Principal",
  "map.partOf": "Faisant partie de notre impact sur:",
  "map.totalProjects": "Projets Totaux",
  "map.countries": "Pays",
  "map.value": "Valeur",
  "map.countriesCount": "Pays couverts par nos projets",

  // Country names
  "country.nigeria": "Nigéria",
  "country.kenya": "Kenya",
  "country.southAfrica": "Afrique du Sud",
  "country.ghana": "Ghana",
  "country.egypt": "Égypte",
  "country.morocco": "Maroc",
  "country.senegal": "Sénégal",
  "country.coteDivoire": "Côte d'Ivoire",
  "country.drCongo": "RD Congo",
  "country.ethiopia": "Éthiopie",
  "country.uganda": "Ouganda",
  "country.tanzania": "Tanzanie",
  "country.angola": "Angola",
  "country.mozambique": "Mozambique",
  "country.southSudan": "Soudan du Sud",

  // Sector names
  "sector.financialServices": "Services Financiers",
  "sector.digitalInfrastructure": "Infrastructure Numérique",
  "sector.agriculture": "Agriculture",
  "sector.healthcare": "Santé",

  // Homepage Hero
  "home.hero.title": "Nous Propulsons des Ambitions Audacieuses",
  "home.hero.subtitle": "Nous aidons les dirigeants des gouvernements, des bailleurs de fonds et des grandes entreprises du secteur privé à transformer leurs ambitions audacieuses en réalisations concrètes.",
  "home.hero.contact": "Contactez-nous",
  "home.hero.learn": "En Savoir Plus",

  // Homepage Partners Section
  "home.partners.title": "Comment nous travaillons avec nos partenaires",
  "home.partners.subtitle": "Nous collaborons avec des organisations de tous secteurs pour produire des résultats transformateurs.",
  "home.partners.donors.title": "Bailleurs de Fonds & Fondations",
  "home.partners.donors.desc": "À la recherche de programmes de transformation systémique ambitieux qui génèrent un impact à grande échelle. Nous aidons à concevoir, mettre en œuvre et développer des initiatives qui créent un changement durable.",
  "home.partners.corporates.title": "Entreprises & Sociétés",
  "home.partners.corporates.desc": "Lancement ou développement de nouvelles entreprises, notamment numériques — quel que soit le secteur. Nous fournissons des conseils stratégiques et un soutien opérationnel concret.",
  "home.partners.investment.title": "Sociétés d'Investissement",
  "home.partners.investment.desc": "À la recherche de due diligence ou nécessitant une amélioration significative des performances des sociétés en portefeuille. Nous apportons une expertise sectorielle approfondie et une rigueur opérationnelle pour créer de la valeur.",
  "home.partners.government.title": "Agences Gouvernementales",
  "home.partners.government.desc": "Conduire l'innovation politique et la transformation du secteur public. Nous aidons les gouvernements à concevoir et mettre en œuvre des programmes qui produisent des résultats mesurables pour les citoyens.",
  "home.partners.multilateral.title": "Organisations Multilatérales",
  "home.partners.multilateral.desc": "Coordination d'initiatives complexes et multi-parties prenantes à travers les frontières. Nous apportons notre expertise dans la navigation de la complexité institutionnelle tout en maintenant le focus sur l'exécution.",
  "home.partners.ngos.title": "ONG & Associations",
  "home.partners.ngos.desc": "Accompagnement des organisations non gouvernementales dans le déploiement de programmes d'impact en Afrique. Nous aidons à concevoir des modèles durables, renforcer les capacités institutionnelles et maximiser la portée pour un changement social durable.",

  // Homepage Impact Section
  "home.impact.title": "Moteur du changement significatif en Afrique",
  "home.impact.subtitle": "Nos praticiens ont collaboré avec des organisations mondiales pour générer un impact significatif sur le continent.",
  "home.impact.projects": "Projets Livrés",
  "home.impact.countries": "Pays",
  "home.impact.value": "Valeur Créée",
  "home.impact.clients": "Organisations Clientes",

  // Homepage Testimonials
  "home.testimonials.title": "Découvrez ce qui distingue Augmentum",
  "home.testimonials.subtitle": "Écoutez directement nos clients et praticiens.",
  "home.testimonials.watch": "Regarder la vidéo",

  // Homepage Trust Bar
  "home.trust.label": "Ils Nous Font Confiance",

  // Homepage Insights
  "home.insights.label": "Perspectives",
  "home.insights.title": "Dernières réflexions",
  "home.insights.viewAll": "Voir toutes les perspectives",
  "home.insights.digital.title": "Partenariat avec Lagos Business School pour l'inclusion financière numérique",
  "home.insights.digital.description": "Collaboration avec le SIDFS Innovation Lab de LBS sur un projet financé par la Fondation Gates testant des solutions numériques pour les communautés mal desservies.",
  "home.insights.digital.category": "Inclusion Financière",
  "home.insights.agriculture.title": "La DG d'Augmentum nommée au conseil de MTN",
  "home.insights.agriculture.description": "La DG d'Augmentum, Topsy Kola-Oyeneyin, rejoint le conseil d'administration de MTN Communications.",
  "home.insights.agriculture.category": "Leadership",
  "home.insights.healthcare.title": "Piloter l'initiative d'inclusion financière du Nigeria",
  "home.insights.healthcare.description": "Le VP Shettima lance une initiative nationale d'inclusion financière visant une économie de 1 000 milliards $, dirigée par Augmentum.",
  "home.insights.healthcare.category": "Politique & Impact",

  // Homepage Careers
  "home.careers.label": "Carrières",
  "home.careers.title": "Rejoignez notre équipe",
  "home.careers.desc": "Nous recherchons toujours des talents exceptionnels qui souhaitent avoir un impact significatif. Rejoignez une équipe de praticiens qui ont fait le travail, pas seulement conseillé.",
  "home.careers.cta": "Voir les postes ouverts",
  "home.careers.team": "Membres d'équipe et praticiens",
  "home.careers.experience": "Années d'expérience combinée en leadership et exécution",
  "home.careers.mbb": "Avec expérience chez MBB et autres cabinets de conseil de premier plan",
  "home.careers.flexible": "Modèle d'équipe flexible",

  // Homepage CTA
  "home.cta.label": "Contactez-Nous",
  "home.cta.title": "Prêt à propulser votre ambition audacieuse?",
  "home.cta.desc": "Que vous naviguiez un défi complexe ou exploriez une opportunité audacieuse, nous aimerions vous entendre.",
  "home.cta.contact": "Contactez-nous",
  "home.cta.learn": "En Savoir Plus Sur Nous",

  // About Page - Who We Are
  "about.label": "À Propos",
  "about.whoWeAre.title": "Qui Nous Sommes",
  "about.whoWeAre.p1": "Augmentum Advisory est un cabinet de conseil boutique,",
  "about.whoWeAre.p1Bold": "ancré en Afrique,",
  "about.whoWeAre.p1End": "conçu pour aider les dirigeants à transformer leurs ambitions audacieuses de la",
  "about.whoWeAre.p1Bold2": "conception à la performance.",
  "about.whoWeAre.p2": "Au cœur de notre mission, Augmentum vise à",
  "about.whoWeAre.p2Bold": "propulser des ambitions audacieuses",
  "about.whoWeAre.p2End": "de la conception à la performance. Nous existons pour aider les dirigeants à atteindre des résultats dans des contextes où le progrès dépend de l'alignement de multiples acteurs et de la navigation dans la complexité.",
  "about.whoWeAre.p3": "Nous combinons",
  "about.whoWeAre.p3Bold1": "vision stratégique",
  "about.whoWeAre.p3Mid": "et",
  "about.whoWeAre.p3Bold2": "exécution opérationnelle,",
  "about.whoWeAre.p3End": "garantissant que les idées sont",
  "about.whoWeAre.p3Bold3": "non seulement crédibles mais exécutables.",
  "about.whoWeAre.augment": "Nous ne fournissons pas simplement des conseils ;",
  "about.whoWeAre.augmentBold": "nous augmentons.",
  "about.whoWeAre.augmentEnd": "Nous apportons de la clarté dans la complexité, une sagesse contextuelle et une exécution menée par des praticiens qui produit des résultats.",

  // About Page - Our Leadership
  "about.leadership.label": "Direction",
  "about.leadership.title": "Notre Direction",
  "about.leadership.name": "Topsy Kola-Oyeneyin",
  "about.leadership.role": "Associée Directrice",
  "about.leadership.bio1": "Notre Associée Directrice, Topsy Kola-Oyeneyin, est une praticienne d'une rare profondeur dans les systèmes financiers, la réforme nationale et l'exécution multi-acteurs.",
  "about.leadership.bio2": "Elle a dirigé des transformations en Afrique et au Moyen-Orient — notamment en tant que Directrice des opérations bancaires internationales de FirstBank, Associée et co-responsable inaugurale de la pratique paiements et finance numérique de McKinsey pour l'Afrique et le Moyen-Orient, et conseillère auprès de gouvernements, régulateurs et partenaires de développement mondiaux.",
  "about.leadership.bio3": "Elle apporte une aisance stratégique, une profondeur opérationnelle, un accès réglementaire et un bilan de réalisations dans des programmes complexes de réforme sectorielle et de transformation économique.",

  // About Page - How We Work
  "about.howWeWork.label": "Notre Approche",
  "about.howWeWork.title": "Comment Nous Travaillons",
  "about.howWeWork.subtitle": "Notre approche repose sur cinq principes qui guident chaque engagement.",
  "about.howWeWork.q.title": "Nous posons les bonnes questions",
  "about.howWeWork.q.desc": "En ancrant chaque problème dans les premiers principes et en éliminant le bruit pour trouver ce qui compte vraiment.",
  "about.howWeWork.clarity.title": "Nous allons vite vers la clarté",
  "about.howWeWork.clarity.desc": "En synthétisant la complexité en perspicacité, direction et action — pour que les dirigeants puissent décider et avancer.",
  "about.howWeWork.execution.title": "Nous construisons des équipes et des outils pour l'exécution",
  "about.howWeWork.execution.desc": "PMO, tableaux de bord, modèles opérationnels et structures de gouvernance qui rendent la livraison inévitable.",
  "about.howWeWork.coalitions.title": "Nous alignons les coalitions",
  "about.howWeWork.coalitions.desc": "En permettant aux acteurs du gouvernement, du secteur privé et des partenaires de développement d'avancer dans la même direction avec un objectif commun.",
  "about.howWeWork.momentum.title": "Nous créons l'élan",
  "about.howWeWork.momentum.desc": "En veillant à ce que les idées se convertissent en actions, les actions en résultats, et les résultats en transformation durable.",

  // About Page - CTA
  "about.whereWeWork.title": "Où nous travaillons",
  "about.whereWeWork.subtitle": "Notre expérience couvre plusieurs secteurs, nous permettant d'apporter des perspectives intersectorielles à chaque mission.",
};

const translations: Record<Language, Record<string, string>> = { en, fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language preference
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguage(saved);
    }
  }, []);

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
