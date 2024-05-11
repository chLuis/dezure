interface ConversationItem {
  role: string;
  content: string;
  start: number;
  end: number;
}

interface TextTranscriptionProps {
  data: ConversationItem[];
  audio: React.RefObject<HTMLAudioElement>;
}

export default function TextTranscription({ data, audio }: TextTranscriptionProps) {
  
  function saltarPunto(segundos: number) {
    if (audio.current) {
      audio.current.currentTime = segundos;
    }
  }

  return (
    <div className="flex flex-col gap-5 z-10 pt-4 px-2">
      {data.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col group ${
            item.role === "agent"
              ? "items-start text-start"
              : "items-end text-end"
          }`}
        >
          {item.role === "agent" ? (
            <div className="absolute top-[0px] rounded-2xl -left-[10px] w-5 h-5 z-0 bg-neutral-800 group-hover:bg-stone-600 duration-200"></div>
          ) : (
            <div className="absolute top-[0px] rounded-2xl -right-[10px] w-5 h-5 z-0 bg-neutral-700 group-hover:bg-stone-600 duration-200"></div>
          )}
          <div
            onClick={() => saltarPunto(item.start)}
            className={`w-fit px-4 py-1 max-w-[90%] lg:max-w-[60%] z-10 duration-200 cursor-pointer ${
              item.role === "agent"
                ? "rounded-e-md bg-neutral-800 group-hover:bg-stone-600"
                : "rounded-s-md bg-neutral-700 group-hover:bg-stone-600"
            }`}
          >
            <header className="capitalize">
              <h4 className="font-semibold text-xl pb-1">{item.role}</h4>
            </header>
            <p
              className={`text-sm font-light lg:text-base pb-1 ${
                audio?.current
                  ? audio.current?.currentTime >= item.start &&
                    audio.current?.currentTime <= item.end
                    ? "text-orange-300"
                    : "text-white"
                  : null
              }`}
            >
              {item.content}
            </p>
            <div className="flex gap-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
