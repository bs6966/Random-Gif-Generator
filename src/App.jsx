import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className="  mt-[40px]  text-center bg-white rounded-md text-3xl font-bold  ml-[15px] px-10 py-2 w-11/12">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-[30px] gap-y-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
