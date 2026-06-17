// ===========================================
// PROJECT DATA - Pas dit bestand aan om je projecten te beheren
// ===========================================

export interface ProjectImage {
  src: string | string[];
  alt: string;
  zoomable?: boolean;
  caption?: string;
  captions?: string[];
  width?: "full" | "half";
  desktopScale?: number;
}

export interface ProjectInfo {
  jaar?: string;
  programma?: string;
  locatie?: string;
  course?: string;
  studietijd?: string;
  cijfer?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  year?: string;
  category?: string;
  subtext?: string[];
  info: ProjectInfo;
  thumbnail: string;
  images: ProjectImage[];
}

// Helper: maak een image expliciet inzoombaar (opt-in)
export const zoomable = (image: ProjectImage): ProjectImage => ({
  ...image,
  zoomable: true,
});

// ===========================================
// JOUW PROJECTEN - Voeg hier je projecten toe
// ===========================================

export const projects: Project[] = [
  {
  id: "1",
    title: "NIEUWE MOLENHOF",
    slug: "nieuwemolenhof",
    description: "Intieme portretten die de stilte en kwetsbaarheid van het menselijk bestaan vastleggen.",
    year: "2024",
    category: "Hbo Afstudeerproject",
    subtext: [
      "Voor mijn afstudeerproject aan de Hogeschool Windesheim heb ik samen met een studiegenoot gewerkt aan het ontwerp van een ouderencomplex. Dit project was opgezet als een schaduwopgave van het architectenbureau waar ik destijds stage liep. De hoofdarchitect van dit bureau begeleidde ons gedurende het proces, wat het project bijzonder leerzaam en praktijkgericht maakte. De centrale ambitie was het tegengaan van eenzaamheid onder ouderen, gecombineerd met een volledig emissieloos gebouw. Vanuit deze uitgangspunten ontwikkelden we de visie “samen oud worden”, waarin collectiviteit en duurzaamheid samenkomen.",
      "Het ontwerp omvat 26 woningen van circa 60 m². Het project is ontwikkeld op basis van een PMC 7-eis (Product-Marktcombinatie), een methodiek waarbij een specifiek type woning wordt afgestemd op een duidelijke doelgroep en marktvraag. Dit zorgde voor een realistisch ontwerpkader, met concrete randvoorwaarden die richting gaven aan het proces. De woningen zijn opgebouwd uit prefab houten modules die per vrachtwagen vervoerd kunnen worden. Deze keuze draagt bij aan een efficiënter bouwproces en beperkt de uitstoot tijdens de realisatie.",
      "In tegenstelling tot mijn ervaring aan de TU Delft lag binnen dit project de nadruk minder op het architectonisch concept als autonoom object, en juist meer op de technische en praktische uitwerking. Het ontwerp moest niet alleen ruimtelijk overtuigen, maar ook uitvoerbaar en bouwkundig consistent zijn. We hebben uiteindelijk een uitgebreide set tekeningen geproduceerd, bestaande uit circa twintig details, doorsneden, aanzichten en plattegronden. Alles is uitgewerkt op een niveau dat geschikt is voor een bouwaanvraag, wat ook een expliciete eis van de opdracht was.",
    ],
    info: {
      jaar: "2023",
      programma: "Levensloopbestendig woongebouw",
      locatie: "Elst",
      course: "Hbo Afstudeerproject",
      studietijd: "30 weken",
      cijfer: "8,0",
    },
    thumbnail: new URL('../../images/molenhof/axomolenhof.webp', import.meta.url).href,
    images: [
      {
        src: new URL('../../images/molenhof/axomolenhof.webp', import.meta.url).href,
        alt: "Molenhof axonometrie",
      },
      {
        src: [
          new URL('../../images/molenhof/1.png', import.meta.url).href,
          new URL('../../images/molenhof/2.png', import.meta.url).href,
          new URL('../../images/molenhof/3.png', import.meta.url).href,
          new URL('../../images/molenhof/4.png', import.meta.url).href,
          new URL('../../images/molenhof/5.png', import.meta.url).href,
          new URL('../../images/molenhof/6.png', import.meta.url).href,
          new URL('../../images/molenhof/7.png', import.meta.url).href,
          new URL('../../images/molenhof/8.png', import.meta.url).href,
          new URL('../../images/molenhof/9.png', import.meta.url).href,
          new URL('../../images/molenhof/10.png', import.meta.url).href,
          new URL('../../images/molenhof/11.png', import.meta.url).href,
          new URL('../../images/molenhof/12.png', import.meta.url).href,
          new URL('../../images/molenhof/13.png', import.meta.url).href,
          new URL('../../images/molenhof/14.png', import.meta.url).href,
          new URL('../../images/molenhof/15.png', import.meta.url).href,
          new URL('../../images/molenhof/16.png', import.meta.url).href,
          new URL('../../images/molenhof/17.png', import.meta.url).href,
          new URL('../../images/molenhof/18.png', import.meta.url).href,
        ],
        alt: "Molenhof beeldenreeks",
        captions: [],
      },
{
        src: [
          new URL('../../images/molenhof/a1.png', import.meta.url).href,
          new URL('../../images/molenhof/a2.png', import.meta.url).href,
          new URL('../../images/molenhof/a3.png', import.meta.url).href,
          new URL('../../images/molenhof/a4.png', import.meta.url).href,

        ],
        alt: "Molenhof beeldenreeks",
        captions: [],
      },
      
      zoomable({
        src: new URL('../../images/molenhof/begane.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),

      zoomable({
        src: new URL('../../images/molenhof/eerste.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),
      
      zoomable({
        src: new URL('../../images/molenhof/gevels.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",

      }),zoomable({
        src: new URL('../../images/molenhof/doorsnedes.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),

      zoomable({
        src: new URL('../../images/molenhof/fragment1.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),

      zoomable({
        src: new URL('../../images/molenhof/fragment2.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),

       {
        src: [
          new URL('../../images/molenhof/d1.png', import.meta.url).href,
          new URL('../../images/molenhof/d2.png', import.meta.url).href,
          new URL('../../images/molenhof/d3.png', import.meta.url).href,
          new URL('../../images/molenhof/d4.png', import.meta.url).href,
          new URL('../../images/molenhof/d5.png', import.meta.url).href,
          new URL('../../images/molenhof/d6.png', import.meta.url).href,
          new URL('../../images/molenhof/d7.png', import.meta.url).href,
          new URL('../../images/molenhof/d8.png', import.meta.url).href,
          new URL('../../images/molenhof/d9.png', import.meta.url).href,
          new URL('../../images/molenhof/d10.png', import.meta.url).href,
        ],
        alt: "Molenhof beeldenreeks",
        captions: [],
      },
      
      {
        src: [
          new URL('../../images/molenhof/render1.webp', import.meta.url).href,
          new URL('../../images/molenhof/render2.webp', import.meta.url).href,
          new URL('../../images/molenhof/render3.webp', import.meta.url).href,
          new URL('../../images/molenhof/render4.webp', import.meta.url).href,
          new URL('../../images/molenhof/render5.webp', import.meta.url).href,
          new URL('../../images/molenhof/render6.webp', import.meta.url).href,
          new URL('../../images/molenhof/render7.webp', import.meta.url).href,
        ],
        alt: "Molenhof renders",
        captions: [
       
        ],

      },
    ],
 
  },
  { id: "2",
    title: "TIMBER TUNES",
    slug: "timbertunes",
    description: "Een serie over de schoonheid van stedelijke architectuur en het contrast tussen oud en nieuw in de moderne stad.",
    year: "2024",
    category: "Premaster",
    subtext: [
      "Tijdens het laatste vak van mijn premaster stond één opgave centraal: het ontwerpen van een poppodium dat niet op zichzelf staat, maar zich verweeft met een bestaande context. In dit geval de voormalige gistfabriek in Delft, een plek met een sterk industrieel karakter en een rijke geschiedenis. De uitdaging lag niet alleen in het creëren van nieuwe architectuur, maar juist in het aangaan van een dialoog met het bestaande.",
      "Het project vroeg om een integrale benadering. Hoe laat je oud en nieuw samenwerken, zonder dat één van de twee zijn identiteit verliest? Hoe ontwerp je een gebouw dat bestand is tegen de intensiteit van harde muziek en grote bezoekersstromen, terwijl comfort en techniek op hoog niveau blijven functioneren? Denk hierbij aan bouwfysische vraagstukken zoals akoestiek, met box-in-box principes, en geavanceerde ventilatieconcepten voor een gezond binnenklimaat.",
      "Binnen deze complexiteit heb ik mijn ontwerp benaderd vanuit drie heldere principes. Duurzaamheid speelde daarin een belangrijke rol. Door waar mogelijk te kiezen voor hout, zowel in constructie als in gevelafwerking, ontstaat een bewuste tegenstelling met de robuuste, industriële baksteen van de bestaande fabriek. Deze materialisatie versterkt de leesbaarheid van oud en nieuw, zonder de samenhang te verliezen.",
    ],
    info: {
      jaar: "2024",
      programma: "Poppodium",
      locatie: "Delft",
      course: "ON6, Premaster",
      studietijd: "7 weken",
      cijfer: "8.0",
    },
 thumbnail: new URL('../../images/timbertunes/timbertunez.webp', import.meta.url).href,
    images: [
      { src: new URL('../../images/timbertunes/timbertunez.webp', import.meta.url).href, alt: "Stadsgezicht" },
      { src: new URL('../../images/timbertunes/ttvisie.png', import.meta.url).href, alt: "Visie", width: "half" },
      { 
        src: [
          new URL('../../images/timbertunes/ttbegane.webp', import.meta.url).href,
          new URL('../../images/timbertunes/tteerste.webp', import.meta.url).href,
        ], 
        alt: "Een carrousel van de begane grond en de eerste verdieping.",
        captions: ["Begane grond", "1e verdieping"],
      },
      {
        src: [
          new URL('../../images/timbertunes/ttklimaatz.png', import.meta.url).href,
          new URL('../../images/timbertunes/ttklimaatw.png', import.meta.url).href,
        ],
        alt: "Klimaat",
        captions: ["Zomer", "Winter"],
      },
      {
        src: [
          new URL('../../images/timbertunes/detail1.png', import.meta.url).href,
          new URL('../../images/timbertunes/detail2.png', import.meta.url).href,
          new URL('../../images/timbertunes/detail3.png', import.meta.url).href,
        ],
        alt: "Details",
        captions: [""],
      },
      zoomable({ src: new URL('../../images/timbertunes/krachtschema.jpg', import.meta.url).href, alt: "Architectuur" }),
      {
        src: [
          new URL('../../images/timbertunes/render1.webp', import.meta.url).href,
          new URL('../../images/timbertunes/render2.jpg', import.meta.url).href,
          new URL('../../images/timbertunes/render3.jpg', import.meta.url).href,
          new URL('../../images/timbertunes/render4.jpg', import.meta.url).href,
          new URL('../../images/timbertunes/render5.jpg', import.meta.url).href,
          new URL('../../images/timbertunes/ttmodel.jpg', import.meta.url).href,
          new URL('../../images/timbertunes/qr.webp', import.meta.url).href,
        ],
        alt: "Renders",
        captions: [],
      },
      
    ],
     },
  { id: "3",
    title: "SLOTERDIJK",
    slug: "sloterdijk",
    description: "Een serie over de schoonheid van stedelijke architectuur en het contrast tussen oud en nieuw in de moderne stad.",
    year: "2025",
    category: "MSc 1",
    subtext: [
      "",
      "Het project vroeg om een integrale benadering. Hoe laat je oud en nieuw samenwerken, zonder dat één van de twee zijn identiteit verliest? Hoe ontwerp je een gebouw dat bestand is tegen de intensiteit van harde muziek en grote bezoekersstromen, terwijl comfort en techniek op hoog niveau blijven functioneren? Denk hierbij aan bouwfysische vraagstukken zoals akoestiek, met box-in-box principes, en geavanceerde ventilatieconcepten voor een gezond binnenklimaat.",
      "Binnen deze complexiteit heb ik mijn ontwerp benaderd vanuit drie heldere principes. Duurzaamheid speelde daarin een belangrijke rol. Door waar mogelijk te kiezen voor hout, zowel in constructie als in gevelafwerking, ontstaat een bewuste tegenstelling met de robuuste, industriële baksteen van de bestaande fabriek. Deze materialisatie versterkt de leesbaarheid van oud en nieuw, zonder de samenhang te verliezen.",
    ],
    info: {
      jaar: "2025",
      programma: "Woongebouw",
      locatie: "Sloterdijk, Amsterdam",
      course: "Fundamentals of housing design",
      studietijd: "18 weken",
      cijfer: "8.0",
    },
    thumbnail: new URL('../../images/sloterdijk/sloterdijkaxo.png', import.meta.url).href,
    images: [
      { src: new URL('../../images/sloterdijk/sloterdijkaxo.png', import.meta.url).href, alt: "Sloterdijk" },
      { src: new URL('../../images/sloterdijk/principles.webp', import.meta.url).href, alt: "Stadsgezicht" },
      { src: new URL('../../images/sloterdijk/dwellingtypes.webp', import.meta.url).href, alt: "Stadsgezicht" },

zoomable({
        src: [
          new URL('../../images/sloterdijk/begane.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/25.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/68.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/911.webp', import.meta.url).href,
        ],
        alt: "Sloterdijk",
        captions: ["Begane grond", "2e - 5e verdieping", "6e - 8e verdieping", "9e - 11e verdieping"],
      }),

zoomable({
        src: [
          new URL('../../images/sloterdijk/gallery.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/corridor.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/maisonette.webp', import.meta.url).href,

        ],
        alt: "Proto 1 t/m 3",
        captions: ["Gallery", "Corridor", "Maisonette"],
      }),     

   { src: new URL('../../images/sloterdijk/klimaat.jpg', import.meta.url).href, alt: "Stadsgezicht" },
      { src: new URL('../../images/sloterdijk/fragment.webp', import.meta.url).href, alt: "Stadsgezicht" },
         
   zoomable({       
        src: [
          new URL('../../images/sloterdijk/detail 1.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/detail 2.webp', import.meta.url).href,
          new URL('../../images/sloterdijk/detail 3.webp', import.meta.url).href,
        ],
        alt: "Sloterdijk",
        captions: ["Detail 1", "Detail 2", "Detail 3"],
      }),

        {
          src: [
            new URL('../../images/sloterdijk/voor.webp', import.meta.url).href,
            new URL('../../images/sloterdijk/achter.webp', import.meta.url).href,
            new URL('../../images/sloterdijk/puntdak.webp', import.meta.url).href,
            new URL('../../images/sloterdijk/totaalmodel.webp', import.meta.url).href,
            new URL('../../images/sloterdijk/fragmentmodel.webp', import.meta.url).href,
          ],
          alt: "Sloterdijk",
          captions: [],
        },
    ],
  },
  {
    id: "4",
    title: "PUBLIC BUILDING",
    slug: "Public Building",
    description: "",
    year: "2025",
    category: "MSc2",
    subtext: [
      "Dit vak bestond uit drie fasen. In de eerste fase ontwikkelden we een prototype, gebaseerd op het kernbegrip resilience (veerkracht). Deze veerkracht richtte zich op de gevolgen van klimaatverandering, zoals het urban hittegolven en het heat island effect, het fenomeen waarbij stedelijke gebieden warmer zijn dan hun omgeving door verharding en gebrek aan groen, evenals extreme neerslag en langdurige droogte.",
      "Voor het ontwerpen van het prototype kregen we één week. In de tweede fase werd dit bouwprototype toegepast op twee verschillende locaties in Amsterdam. De context van deze locaties verschilde sterk, wat de opgave inhoudelijk uitdagend en relevant maakte.",
    ],
    info: {
      jaar: "2025",
      programma: "Publiek gebouw",
      locatie: "Amsterdam",
      course: "Multiplicity and Identity",
      studietijd: "10 weken",
      cijfer: "8,5",
    },
    thumbnail: new URL('../../images/public/def1.webp', import.meta.url).href,
    images: [
          
      { src: new URL('../../images/public/def1.webp', import.meta.url).href, alt: "diagrams" },
       zoomable({
        src: new URL('../../images/public/poster.png', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),
      {
        src: [
          new URL('../../images/public/proto1.jpeg', import.meta.url).href,
          new URL('../../images/public/proto2.jpeg', import.meta.url).href,
          new URL('../../images/public/proto3.jpeg', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: [""],
      },
       { src: new URL('../../images/public/diagram.webp', import.meta.url).href, alt: "diagram" },
 
      {
        src: [
          new URL('../../images/public/begane.webp', import.meta.url).href,
          new URL('../../images/public/eerste.webp', import.meta.url).href,
        ],
        alt: "Begane grond en 1e verdieping",
        captions: ["Begane grond", "Dak"],
      },

      {
        src: [
          new URL('../../images/public/def1.webp', import.meta.url).href,
          new URL('../../images/public/def2.webp', import.meta.url).href,
          new URL('../../images/public/section.webp', import.meta.url).href,
        ],
        alt: "",
        captions: [],
      },
       {
        src: [
          new URL('../../images/public/1.webp', import.meta.url).href,
          new URL('../../images/public/2.webp', import.meta.url).href,
          new URL('../../images/public/3.webp', import.meta.url).href,
        ],
        alt: "",
        captions: [],
      },

      {
        src: [
          new URL('../../images/public/begane1.png', import.meta.url).href,
          new URL('../../images/public/eerste2.png', import.meta.url).href,
        ],
        alt: "",
        captions: [],
      },
       { src: new URL('../../images/public/birdseye.png', import.meta.url).href, alt: "diagram" },
       { src: new URL('../../images/public/axo.png', import.meta.url).href, alt: "diagram" },
       {
        src: [
          new URL('../../images/public/render1.jpg', import.meta.url).href,
          new URL('../../images/public/render2.jpg', import.meta.url).href,
        ],
        alt: "Renders",
        captions: [""],
      },
    ],
  },
  {
    id: "5",
    title: "THESIS VIA ROMA",
    slug: "viaroma",
    description: "Thesis",
    year: "2025",
    category: "MSc3",
    subtext: [
      "Deze historische analyse onderzoekt de transformatie van de Via Roma in Turijn en de manier waarop architectuur en stedenbouw werden ingezet als instrumenten van politieke macht. Door de ontwikkeling van de straat te volgen vanaf de aanleg onder het Huis van Savoye in de zeventiende eeuw tot de grootschalige reconstructie onder het fascistische regime in de jaren dertig, wordt zichtbaar hoe dezelfde stedelijke ruimte verschillende ideologische betekenissen kan dragen.",
      "Het onderzoek laat zien dat de transformatie van Via Roma niet alleen een architectonische of stedenbouwkundige ingreep was, maar ook een middel om identiteit, autoriteit en nationale ambities zichtbaar te maken in de openbare ruimte. Daarmee toont het project hoe architectuur kan functioneren als een krachtig instrument voor politieke representatie en hoe stedelijke ruimtes voortdurend opnieuw worden geïnterpreteerd door opeenvolgende machtsstructuren.",
    ],
    info: {
      jaar: "2025",
      programma: "Abstract",
      locatie: "Turijn, Italië",
      course: "The Travalling Architect",
      studietijd: "10 weken",
      cijfer: "7,5",
    },
    thumbnail: new URL('../../images/thesis/thesis.webp', import.meta.url).href,
    images: [
      { src: new URL('../../images/thesis/thesis.webp', import.meta.url).href , alt: "Abstract 1" },
      {
        src: [
          new URL('../../images/thesis/1.png', import.meta.url).href,
          new URL('../../images/thesis/2-3.png', import.meta.url).href,
          new URL('../../images/thesis/4-5.png', import.meta.url).href,
          new URL('../../images/thesis/6-7.png', import.meta.url).href,
          new URL('../../images/thesis/8-9.png', import.meta.url).href,
          new URL('../../images/thesis/10-11.png', import.meta.url).href,
          new URL('../../images/thesis/12-13.png', import.meta.url).href,
          new URL('../../images/thesis/14-15.png', import.meta.url).href,
          new URL('../../images/thesis/16-17.png', import.meta.url).href,
          new URL('../../images/thesis/18-19.png', import.meta.url).href,
          new URL('../../images/thesis/20.png', import.meta.url).href,
        ],
        alt: "Thesis pagina's 1 t/m 20",
        captions: [
          "",
        ],
      },
    ],
  },

  {
    id: "6",
    title: "GRADUATION TU DELFT",
    slug: "graduation",
    description: "Experimentele fotografie die de grenzen tussen realiteit en abstractie verkent.",
    year: "2023",
    category: "MSc4",
    subtext: [
      
      "Dit afstudeerproject onderzoekt hoe bestaande industriële gebouwen kunnen worden ingezet als basis voor nieuwe woonomgevingen. In plaats van sloop vormt de bestaande fundering, beganegrondvloer en staalconstructie het uitgangspunt voor de ontwikkeling van een circulair wooncomplex in Rotterdam. Door deze structuur te behouden en aan te vullen met lichte, modulaire houtbouw wordt de milieubelasting aanzienlijk verminderd, terwijl tegelijkertijd wordt ingespeeld op de groeiende vraag naar woningen.",
      "Het ontwerp transformeert het voormalige industriële terrein tot een levendige woonomgeving met circa 120 woningen, georganiseerd rondom een collectieve binnentuin en verschillende gedeelde buitenruimtes. De combinatie van structureel hergebruik, circulaire bouwprincipes en flexibele woningtypologieën laat zien hoe bestaande gebouwen kunnen worden aangepast aan veranderende woonbehoeften. Zo ontstaat een toekomstbestendig wooncomplex waarin duurzaamheid, sociale interactie en woonkwaliteit centraal staan.",
      "Hoewel het project is ontwikkeld voor twee gebouwen op één locatie, reikt de ambitie verder dan deze specifieke plek. Het voorgestelde bouwsysteem en de gehanteerde ontwerpprincipes zijn niet locatiegebonden en kunnen worden toegepast op vergelijkbare industriële structuren in Rotterdam en elders. Industriële gebouwen met robuuste draagconstructies komen wereldwijd voor en vormen een grote, vaak onderbenutte bron van bouwmaterialen. Het concept van maximaal hergebruik en demontabel bouwen heeft daarom het potentieel om bij te dragen aan een bredere transitie binnen de bouwsector, waarin gebouwen worden beschouwd als tijdelijke configuraties van materialen die continu opnieuw kunnen worden ingezet. In de toekomst zal deze benadering steeds belangrijker worden om de milieubelasting te verminderen en in te spelen op de toenemende schaarste aan grondstoffen.",

    ],
    info: {
      jaar: "2026",
      programma: "Afstudeerproject",
      locatie: "Rotterdam",
      course: "Ecologies of Inclusion",
      studietijd: "30 weken",
      cijfer: "n.t.b.",
    },
    thumbnail: new URL('../../images/graduation/graduationaxo.opt.small.webp', import.meta.url).href,
    images: [
      { src: new URL('../../images/graduation/graduationaxo.opt.smooth.webp', import.meta.url).href , alt: "Abstract 1" },

{ src: new URL('../../images/graduation/locatie.webp', import.meta.url).href , alt: "Abstract 1", width: "half", caption: "Huidige situatie (voor transformatie)", },
      {
        src: [
          new URL('../../images/graduation/a.webp', import.meta.url).href,
          new URL('../../images/graduation/b.webp', import.meta.url).href,
          new URL('../../images/graduation/c.webp', import.meta.url).href,
          new URL('../../images/graduation/d.webp', import.meta.url).href,
          new URL('../../images/graduation/e.webp', import.meta.url).href,
          new URL('../../images/graduation/f.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: [""],
      },

      zoomable({ 
        src: [
          new URL('../../images/graduation/plg0.webp', import.meta.url).href,
          new URL('../../images/graduation/plg1.webp', import.meta.url).href,
          new URL('../../images/graduation/plg2.webp', import.meta.url).href,
          new URL('../../images/graduation/plg3.webp', import.meta.url).href,
          new URL('../../images/graduation/plg4.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: ["Begane grond", "Eerste verdieping", "Tweede verdieping", "Derde verdieping", "Dakaanzicht"],
      }),      

zoomable({
        src: [
          new URL('../../images/graduation/sec1.webp', import.meta.url).href,
          new URL('../../images/graduation/sec2.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: [""],
      }),     
      
      zoomable({
        src: new URL('../../images/graduation/co2.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),     

{
        src: [
          new URL('../../images/graduation/s1.webp', import.meta.url).href,
          new URL('../../images/graduation/s2.webp', import.meta.url).href,
          new URL('../../images/graduation/s3.webp', import.meta.url).href,
          new URL('../../images/graduation/s4.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: ["Huidige situatie", "Verplaatsing parkeerdek", "Nieuwe situatie", "Nieuwe situatie met optopping"],
      },

{
        src: [
          new URL('../../images/graduation/bt1.webp', import.meta.url).href,
          new URL('../../images/graduation/bt2.webp', import.meta.url).href,
          new URL('../../images/graduation/bt3.webp', import.meta.url).href,
          new URL('../../images/graduation/bt4.webp', import.meta.url).href,
          new URL('../../images/graduation/bt5.webp', import.meta.url).href,
          new URL('../../images/graduation/bt6.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: [""],
      },
            zoomable({
        src: new URL('../../images/graduation/lpvdw.webp', import.meta.url).href,
        alt: "Sloterdijk",
        width: "half",
      }),   

{
        src: [
          new URL('../../images/graduation/c01.webp', import.meta.url).href,
          new URL('../../images/graduation/c05.webp', import.meta.url).href,
          new URL('../../images/graduation/c06.webp', import.meta.url).href,
          new URL('../../images/graduation/c02.webp', import.meta.url).href,
          new URL('../../images/graduation/c03.webp', import.meta.url).href,
          new URL('../../images/graduation/c04.webp', import.meta.url).href,
   
        ],
        alt: "Proto 1 t/m 3",
        captions: ["Casco", "3 kamers", "3 kamers", "3 kamers", "3 kamers", "2 kamers"],
      },

{
        src: [
          new URL('../../images/graduation/c11.webp', import.meta.url).href,
          new URL('../../images/graduation/c12.webp', import.meta.url).href,
          new URL('../../images/graduation/c13.webp', import.meta.url).href,
          new URL('../../images/graduation/c14.webp', import.meta.url).href,
          new URL('../../images/graduation/c15.webp', import.meta.url).href,
          new URL('../../images/graduation/c16.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: ["Casco", "1 slaapkamer", "2 slaapkamers", "3 slaapkamers", "2 slaapkamers", "Rolstoel toegankelijk"],
      },

      {
        src: [
          new URL('../../images/graduation/DEF1.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF2.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF3.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF4.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF5.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF6.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF7.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF8.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF9.webp', import.meta.url).href,
          new URL('../../images/graduation/DEF10.webp', import.meta.url).href,
        ],
        alt: "Proto 1 t/m 3",
        captions: [""],
      },

      {
        src: [
          new URL('../../images/graduation/m1.webp', import.meta.url).href,
          new URL('../../images/graduation/m2.webp', import.meta.url).href,
          new URL('../../images/graduation/m3.webp', import.meta.url).href,
          new URL('../../images/graduation/m4.webp', import.meta.url).href,
          new URL('../../images/graduation/m5.webp', import.meta.url).href,
          new URL('../../images/graduation/m6.webp', import.meta.url).href,
          new URL('../../images/graduation/m7.webp', import.meta.url).href,
          new URL('../../images/graduation/m8.webp', import.meta.url).href,
          new URL('../../images/graduation/m9.webp', import.meta.url).href,

        ],
        alt: "Proto 1 t/m 3",
        captions: [""],
      },

    ],
 
  },
  
];

// ===========================================
// HOVER POSITIES - Pas hier de afbeelding-posities aan voor de homepage
// x: horizontale positie ("10%" = links, "50%" = midden, "90%" = rechts)
// y: verticale positie   ("10%" = boven, "50%" = midden, "90%" = onder)
// size: breedte van de afbeelding (bijv. "30vw", "400px", "50%")
// ===========================================

export interface HoverPosition {
  x: string;    // bijv. "40%", "200px"
  y: string;    // bijv. "50%", "300px"
  size: string; // bijv. "35vw", "400px"
}

export const projectHoverPositions: Record<string, HoverPosition> = {
  // Project ID :  { x (links/rechts), y (boven/onder), size (breedte) }
  "1": { x: "50%",  y: "50%",  size: "70vw" },   // PUBLIC BUILDING
  "2": { x: "50%",  y: "50%",  size: "60vw" },   // THESIS TURIN
  "3": { x: "50%",  y: "50%",  size: "65vw" },   // TIMBER TUNES
  "4": { x: "50%",  y: "50%",  size: "60vw" },   // SLOTERDRIJK
  "5": { x: "50%",  y: "50%",  size: "65vw" },   // GRADUATION TUD
  "6": { x: "50%",  y: "50%",  size: "60vw" },   // VILLA 10A
  "7": { x: "50%",  y: "50%",  size: "38vw" },   // GRADUATION TUD (2)
};

// Standaard positie als project niet in de tabel staat
export const defaultHoverPosition: HoverPosition = {
  x: "50%",
  y: "50%",
  size: "35vw",
};

// Haal hover-positie op voor een project (op basis van ID)
export const getHoverPosition = (projectId: string): HoverPosition => {
  return projectHoverPositions[projectId.trim()] ?? defaultHoverPosition;
};

// Helper functie om een project te vinden op slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Helper functie om volgende/vorige project te krijgen
export const getAdjacentProjects = (currentSlug: string) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
