import Image from "next/image";
const img = "/images/page1/hero.png";

export const PageOneHero = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100vw" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <h1>Lorem Ipsum Dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Curabitur blandit
          tempus ardua ridiculus sed magna. Ut enim ad minim veniam, quis
          nostrud exercitation. Quis aute iure reprehenderit in voluptate velit
          esse. Non equidem invideo, miror magis posuere velit aliquet.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Curabitur blandit
          tempus ardua ridiculus sed magna. Lorem ipsum dolor sit amet,
          consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et
          dolore magna aliqua. Curabitur blandit tempus ardua ridiculus sed
          magna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <Image src={img} alt="Page 1 Hero Image" height={400} width={500} />
      </div>
    </div>
  );
};
