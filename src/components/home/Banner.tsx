import Image from "next/image";

export interface BannerProps {
    id?: string
}

export function Banner(props: BannerProps) {
  return (
    <div id={props.id} 
    className="bg-city-image w-screen h-screen flex flex-col gap-5 items-center justify-center">
      <Image src={"/logo.png"} alt="logo" width={100} height={100} />

      <h1 className="font-bold text-5xl text-accent">
        Bem-vindo(a) à StockCloud!
      </h1>

      <h2 className="text-2xl text-accent">
        A melhor solução para o seu estoque.
      </h2>
    </div>
  );
}