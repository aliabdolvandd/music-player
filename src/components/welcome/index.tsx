import { Button } from "../ui/button";

function Welcome() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-white item-s gap-40 relative">
        <div className=" w-[350px] h-[350px] bg-[var(--color-primary)] absolute top-20 rounded-full blur-3xl z-0 opacity-20 animate-[rotate-left_30s_linear_infinite] "></div>
        <div className="flex justify-center flex-col items-center ">
          <img src="welcome.png" alt="logo" className="max-w-full h-auto" />
          <h1 className="text-4xl font-bold mt-4">TONE PLAY</h1>

          <div className="flex ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A259FF] to-[#FF61D3] font-bold text-xl">
              Listen ,Feel ,Repeat
            </span>
          </div>
        </div>
        <div className="">
          <Button variant="outline" size="xl">
            <span className="font-bold text-white ">Get Start</span>
          </Button>
        </div>
        <div className="  w-[350px] h-[350px] bg-[var(--color-primary)] absolute bottom-15 rounded-full blur-3xl z-0 opacity-20 animate-[rotate-right_30s_linear_infinite]"></div>
      </div>
    </>
  );
}
export default Welcome;
