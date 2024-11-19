const getData = (req) => ({
  metadata: {
    title: "title",
    caconicalUrl: "/",
    abstract: "description",
  },
  header: {},
  homepage: {
    slots: [
      {
        title:
          "<span>Lasciati ispirare</span> dagli allestimenti e trova l’arredo più adatto ai tuoi bisogni.",
        description:
          "Un divano dalle linee moderne e precise, ma allo stesso tempo pulite ed essenziali, capace di inserirsi in ambienti dalle varie connotazioni.",
        theme: "dark",
        background: "#494950",
        image: {
          url: `${req.protocol}://${req.get("host")}/images/editorial/2.png`,
          alt: "alt",
        },
        imageSecondary: {
          url: `${req.protocol}://${req.get("host")}/images/editorial/3.png`,
          alt: "alt",
        },
        ctaLabel: "Lasciati ispirare",
        label: "ALLESTIMENTI D’ISPIRAZIONE",
      },
      {
        title: "Personalizza il tuo prossimo divano. Scegli dimensioni, rivestimenti e finiture.",
        description:
          "Fatti guidare passo passo prenotando un appuntamento in negozio o online.",
        ctaLabel: "CTA Label",
        mediaPosition: "left",
        background: "#ECECF3",
        label: "CONSULENZA PERSONALIZZATA",
        image: {
          url: `${req.protocol}://${req.get("host")}/images/editorial/4.png`,
          alt: "alt",
        },
      },
      {
        title: "<span>Trova il negozio</br> Dondi Salotti</span> più vicino a te, ti aspettiamo.",
        description:
          "",
        ctaLabel: "Trova negozio",
        mediaPosition: "right",
        background: "#494950",
        label: "STORE LOCATOR",
        image: {
          url: `${req.protocol}://${req.get("host")}/images/editorial/5.png`,
          alt: "alt",
        },
      },
    ],
  },
});

module.exports = getData;
