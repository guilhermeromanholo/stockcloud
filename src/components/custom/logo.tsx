import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/logo.png"} alt="logo" width="35" height="35"/>
      <span className="text-white font-bold">StockClound</span>
    </div>
  );
}
