/**
 * Peter Wachter Website - Configuratie
 * Centrale databron voor afbeeldingen, hoofdstukken, en metadata
 */

const SITE_CONFIG = {
  title: 'Peter Wachter - Digitaal Monument',
  description: 'Het levensverhaal van Peter Wachter (1905-1945), Amerikaanse soldaat.',
  baseUrl: 'https://ronaldbrekelmans.nl',
  author: 'Ronald Brekelmans',
  
  /* Hoofdstukstructuur - gekoppeld aan mappen */
  chapters: [
    {
      id: 1,
      title: 'Meer dan een naam op een grafsteen',
      subtitle: 'Inleiding en doel van dit project',
      order: 0,
      imageFolder: null,
      content: `
        <p>Peter Wachter was meer dan alleen een naam op een grafsteen. Hij was een zoon, een broer, 
        een vriend, en een Amerikaanse soldaat die stierf in Nordhausen, Duitsland, op 17 april 1945.</p>
        
        <p>Dit project is een poging om Peters verhaal terug te geven aan hem — niet als een statistiek, 
        maar als een volledig menselijk leven met dromen, keuzes, en een tragisch einde.</p>
        
        <p>Door archiefonderzoek, militaire documenten, genealogie, en particuliere correspondentie 
        hebben we Peters levenslijn gereconstrueerd van zijn geboorte in Beieren tot zijn definitieve 
        rustplaats in Margraten.</p>
      `
    },
    {
      id: 2,
      title: 'Een jongen uit Beieren',
      subtitle: 'Jeugd en vroeg leven (1905-1928)',
      order: 1,
      imageFolder: '01-jeugd-beieren',
      content: `
        <p>Peter Wachter werd geboren op 27 december 1905 in Bad Reichenhall, een kuuroord in het 
        zuidoostelijke Beieren, dicht tegen de Oostenrijkse grens. Het dorp was beroemd om zijn 
        zoutmijnen en mineralenbronnen.</p>
        
        <p>Over Peters jeugd is relatief weinig bewaard gebleven. Wat we weten uit Duitse personeelsdocumenten 
        (Personalbogen) geeft een voorzichtige schets: hij groeide op in het interbellum, in een 
        economisch zwakke periode voor Duitsland.</p>
      `
    },
    {
      id: 3,
      title: 'Op weg naar een nieuw leven in Amerika',
      subtitle: 'Emigratie en aankomst (1928-1935)',
      order: 2,
      imageFolder: '02-emigratie-amerika',
      content: `
        <p>Begin jaren 1920 verlieten duizenden Duitse migranten Europa richting Amerika. Ook Peter 
        koos voor dit avontuur. Hij scheepte zich in ergens in Europa en maakte de lange overtocht 
        naar de Verenigde Staten.</p>
        
        <p>Peter vestigde zich in Milwaukee, Wisconsin, een stad met een sterke Duitse diaspora. 
        Milwaukee had al decennia een groeiende Duitse gemeenschap, wat Peters integratie bevorderde.</p>
      `
    },
    {
      id: 4,
      title: 'De keuze voor Amerika',
      subtitle: 'Naturalisatie en burgerschap (1935-1941)',
      order: 3,
      imageFolder: '03-amerika',
      content: `
        <p>In 1935 werd Peter Amerikaans staatsburger. Dit was een bewuste keuze — hij koos definitief 
        voor Amerika en verliet zijn Duitse identiteit officieel achter zich.</p>
        
        <p>Peter werkte in Milwaukee en bouwde een leven op in zijn nieuwe vaderland. Hij had vrienden, 
        misschien familie, en was geïntegreerd in de lokale gemeenschap.</p>
      `
    },
    {
      id: 5,
      title: 'Aan de vooravond van de oorlog',
      subtitle: 'Legerdienst en voorbereiding (1941-1944)',
      order: 4,
      imageFolder: '04-oorlog',
      content: `
        <p>Na de aanval op Pearl Harbor (7 december 1941) veranderde alles. Peter meldde zich aan voor 
        militaire dienst — waarschijnlijk niet veel anders dan veel andere jonge Amerikanen in die tijd.</p>
        
        <p>Hij diende bij de 50th Signal Battalion, een communicatieafdeling van het legerkorp. 
        Zijn rang: Technician 5th Grade (T/5). Als communicatiespecialist was Peter onderdeel van 
        de backoffice van de oorlog — telegrafen, radio's, meldkamers.</p>
      `
    },
    {
      id: 6,
      title: 'Normandië',
      subtitle: 'D-Day en eerste contact (juni 1944)',
      order: 5,
      imageFolder: '05-normandie',
      content: `
        <p>Op 6 juni 1944 landden de geallieerden in Normandië. Peter was onderdeel van deze invasie. 
        Als communicatiespecialist van de 50th Signal Battalion was hij waarschijnlijk niet in de 
        voorste linies, maar wel dicht genoeg bij om de chaos, het lawaai, en de ernst van het moment 
        volledig mee te maken.</p>
        
        <p>De bevrijding van Europa was begonnen.</p>
      `
    },
    {
      id: 7,
      title: 'De Big Red One',
      subtitle: 'Bevrijding van Frankrijk (augustus-september 1944)',
      order: 6,
      imageFolder: '06-frankrijk-belgie',
      content: `
        <p>Na Normandië volgde de bevrijding van Frankrijk. Peter diende bij de 50th Signal Battalion, 
        die onderdeel was van de U.S. First Army. Deze eenheid stond bekend als de "Big Red One" — 
        een veteraan unit uit de Eerste Wereldoorlog.</p>
        
        <p>De vordering was snel maar heftig. Francia werd bevrijd, stad na stad, dorp na dorp.</p>
      `
    },
    {
      id: 8,
      title: 'De Spearhead Division',
      subtitle: 'Belgie en verdere opmars (september-december 1944)',
      order: 7,
      imageFolder: '06-frankrijk-belgie',
      content: `
        <p>De 50th Signal Battalion steunde ook de "Spearhead Division" (2nd Armored Division), 
        een snelle, mobile eenheid die diep het Duitse grondgebied binnendrong.</p>
        
        <p>Het tempo van de bevrijding was opmerkelijk. België werd bevrijd. Het leek erop dat de oorlog 
        snel zou eindigen.</p>
      `
    },
    {
      id: 9,
      title: 'Het Ardennenoffensief',
      subtitle: 'Winterverhaal: december 1944 - januari 1945',
      order: 8,
      imageFolder: '07-ardennen',
      content: `
        <p>Op 16 december 1944 lanceerde Duitsland zijn grootste tegenaanval van de oorlog: het Ardennenoffensief. 
        Dit was een shock voor de geallieerden, die dachten dat de oorlog bijna voorbij was.</p>
        
        <p>Peter en zijn eenheid bevonden zich in het epicentrum. Ze hadden niet alleen met koude en sneeuw 
        te kampen, maar ook met Duitse troepen die verzameld waren voor deze laatste grote poging.</p>
        
        <p>Peter overleefde de Ardennenslag — een van de zwaarste gevechten van de oorlog.</p>
      `
    },
    {
      id: 10,
      title: 'De laatste dagen',
      subtitle: 'Duitsland: maart-april 1945',
      order: 9,
      imageFolder: '08-duitsland',
      content: `
        <p>Na de Ardennen drong de geallieerde leger dieper door in Duitsland. De oorlog in Europa was duidelijk verloren 
        voor Duitsland — de vraag was niet "of", maar "wanneer".</p>
        
        <p>De 50th Signal Battalion vorderde mee. Peter was nu al maanden onder vuur, had Normandië, Frankrijk, België, 
        en de Ardennen overleefd. Maar op 17 april 1945, niet ver van het einde van de oorlog, overleed Peter in Nordhausen.</p>
        
        <p>De officiële oorzaak van zijn dood is niet duidelijk. Mogelijk ziekte, mogelijk verwondingen, mogelijk beide. 
        Hij was 39 jaar oud.</p>
      `
    },
    {
      id: 11,
      title: 'Van Eisenach naar Margraten',
      subtitle: 'Repatriatie en begraving (1945-1949)',
      order: 10,
      imageFolder: '10-margraten',
      content: `
        <p>Peters lichaam werd eerst begraven in Eisenach, Duitsland. Later, na de oorlog, werd het lichaam 
        gerepatrieerd naar de Verenigde Staten. Maar Peters wens — of die van zijn familie — was om in Europa 
        begraven te blijven, op de American Cemetery in Margraten, Nederland.</p>
        
        <p>In 1949 werd Peters lichaam in Margraten begraven, op de Amerikaanse begraafplaats tussen 
        de 8.000+ Amerikaanse militaren die stierven of omkwamen in de bevrijding van Europa.</p>
      `
    },
    {
      id: 12,
      title: 'Lena zoekt antwoorden',
      subtitle: 'Correspondentie en nabestaanden (1945-1950)',
      order: 11,
      imageFolder: '09-lena-klopfer',
      content: `
        <p>Na Peters dood zochten zijn Duitseverwanten — in het bijzonder zijn nicht Lena Klopfer — contact 
        met Amerikaanse familieleden. Deze brieven, geschreven in het Duits en Engels, zijn de meest intieme 
        bronnen die we hebben van Peters leven en erfenis.</p>
        
        <p>Lena's brieven spreken van verdriet, van vragen zonder antwoorden, van families die gescheiden 
        waren door oorlog en oceanen. Ze geven gezicht aan Peters leven — niet zomaar als soldaat, maar als 
        zoon, broer, en familielid die gemist wordt.</p>
      `
    },
    {
      id: 13,
      title: 'De herinnering blijft bestaan',
      subtitle: 'Waarom dit project, waarom nu',
      order: 12,
      imageFolder: null,
      content: `
        <p>"Een mens is pas echt vergeten wanneer zijn naam voor het laatst wordt genoemd."</p>
        
        <p>Dit project is een poging om ervoor te zorgen dat Peter Wachter niet vergeten wordt. Niet alleen 
        zijn naam, maar zijn verhaal — zijn leven, zijn keuzes, zijn strijd, zijn dood, en zijn erfenis.</p>
        
        <p>Dit is waarom we onderzoek doen. Dit is waarom we archieven doorspitten. Dit is waarom we websites 
        bouwen. Opdat de Peter Wachters van deze wereld — en er zijn er duizenden — voor altijd herinnerd 
        zullen worden.</p>
      `
    }
  ],

  /* Galerij-filters */
  galleryFilters: {
    beieren: 'Beieren (1905-1928)',
    amerika: 'Amerika (1928-1941)',
    oorlog: 'Oorlog (1941-1945)',
    lena: 'Correspondentie',
    margraten: 'Margraten (1949+)',
    all: 'Alles'
  },

  /* Afbeeldingssets gekoppeld aan mappen */
  imageSets: {
    '01-jeugd-beieren': {
      filter: 'beieren',
      caption: 'Beieren periode (1905-1928)'
    },
    '02-emigratie-amerika': {
      filter: 'amerika',
      caption: 'Emigratie naar Amerika (1928-1935)'
    },
    '03-amerika': {
      filter: 'amerika',
      caption: 'Amerika periode (1935-1941)'
    },
    '04-oorlog': {
      filter: 'oorlog',
      caption: 'Voorbereiding op oorlog (1941-1944)'
    },
    '05-normandie': {
      filter: 'oorlog',
      caption: 'Normandië en invasie (juni 1944)'
    },
    '06-frankrijk-belgie': {
      filter: 'oorlog',
      caption: 'Frankrijk en België (1944)'
    },
    '07-ardennen': {
      filter: 'oorlog',
      caption: 'Ardennenslag (december 1944 - januari 1945)'
    },
    '08-duitsland': {
      filter: 'oorlog',
      caption: 'Duitsland (maart-april 1945)'
    },
    '09-lena-klopfer': {
      filter: 'lena',
      caption: 'Correspondentie met Lena Klopfer (1945-1950)'
    },
    '10-margraten': {
      filter: 'margraten',
      caption: 'Margraten begraafplaats (1949+)'
    },
    '11-documenten': {
      filter: 'oorlog',
      caption: 'Militaire documenten en onderscheidingen'
    }
  },

  /* Tijdlijn events */
  timelineEvents: [
    { year: 1905, title: 'Geboorte', date: '27 december 1905', location: 'Bad Reichenhall, Beieren' },
    { year: 1928, title: 'Emigratie naar Amerika', date: 'circa 1928', location: 'Milwaukee, Wisconsin' },
    { year: 1935, title: 'Amerikaans staatsburger', date: '1935', location: 'Milwaukee' },
    { year: 1941, title: 'Militaire dienst', date: '1941', location: 'Camp McCoy, Wisconsin' },
    { year: 1944, title: 'D-Day Normandië', date: 'juni 1944', location: 'Normandië, Frankrijk' },
    { year: 1944, title: 'Bevrijding Frankrijk', date: 'augustus 1944', location: 'Frankrijk' },
    { year: 1944, title: 'Ardennenslag', date: 'december 1944 - januari 1945', location: 'België' },
    { year: 1945, title: 'Overlijden in Nordhausen', date: '17 april 1945', location: 'Nordhausen, Duitsland' },
    { year: 1949, title: 'Begraving in Margraten', date: '1949', location: 'American Cemetery Margraten' }
  ]
};

/* Export voor modules */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
