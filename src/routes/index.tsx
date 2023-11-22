import { About } from "~/components/about";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Map } from "~/components/map";
import { Whatsapp } from "~/components/whatsapp";

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Map />
      <Footer />
      <Whatsapp />
    </>
  );
});

export const head: DocumentHead = {
  title: "Divina Terra Atibaia",
  meta: [
    {
      name: "description",
      content:
        "A Divina Terra é referência em alimentação saudável. Em nossa loja você encontra uma ampla linha de produtos naturais e suplementos, além de novidades cuidadosamente selecionadas.",
    },
    {
      name: "keywords",
      content:
        "Proteína do colágeno, Collagen protein, Collagen protein pura vida, Collagen protein nutrify, Collagen protein essential, Collagen protein vitafor, Collagen protein equaliv, Whey, Whey protein, Whey protein concentrado, Whey protein isolado, Whey protein hidrolisado, Whey protein isolado e hidrolisado, Whey concentrado dux, Whey isolado dux, Whey 3w dux, Whey isolado e hidrolisado essential, Whey isolado e hidrolisado true source, Whey concentrado pura vida, Proteína vegana, Beef protein, Barra de proteína, Barra de proteína bold, Barra de proteína vegana, Barra de proteína havanna, Barra de proteína + um, Barra de proteína hart´s, Barra de proteína integral medica, Barra de proteína max titanium, Barra de proteína vegana atlhetica, Alfajor proteico rock, Biscoito proteico whey viv, Biscoito proteico, Maca peruana, Golden maca pura vida, Maca negra em cápsula, Maca negra, vermelha e dourada viva regenera, 3 macas, True maca, Palatinose, Palatinose pura vida, Palatinose vitafor, Endurence vitafor, Carbolift essential, Espirulina, Spirulina, Spirulina azul ocean drop, Spirulina azul, Spirulina pura vida, Spirulina vital natus, Spirulina em tablet, Spirulina em cápsula, Spirulina em pó, Colágeno tipo II, Colágeno para articulação, Colágeno para pele e articulação, Colágeno tipo I e II",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
};
