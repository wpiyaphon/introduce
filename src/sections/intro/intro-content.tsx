import { NAV_HEIGHT } from "@/utils/responsive";
console.log("🚀 ~ NAV_HEIGHT:", NAV_HEIGHT);

export default function IntroContent() {
  return (
    <div
      className={`flex h-[calc(100vh-52px)] max-h-none items-center justify-center text-center`}
    >
      <div className="flex flex-col gap-10">
        <h1 className="whitespace-pre-line text-xl font-bold !leading-tight sm:text-3xl md:text-5xl">
          {"Experienced web developer\nspecializing in ReactJS."}
        </h1>
        <p className="whitespace-pre-line text-lg text-zinc-400">
          {
            "I have a strong foundation in HTML, CSS, and TypeScript, and I am skilled in creating interactive and\nvisually appealing websites"
          }
        </p>
      </div>
    </div>
  );
}
