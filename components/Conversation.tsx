'use client';
import { useRef, useState } from "react";
import Controller from "./Controller";
import TextTranscription from "./TextTranscription";

interface ConversationItem {
  role: string;
  content: string;
  start: number;
  end: number;
}

interface ConversationProps {
  data: ConversationItem[];
}

export default function Conversation({ data }: ConversationProps) {
  
  const dataConversation = data;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);

  function saltarPunto(segundos: number) {
    if (audioRef.current) {
      audioRef.current.currentTime = segundos;
    }
  }

  return (
    <div className="w-full relative bg-neutral-900 px-2 lg:px-4 lg:my-2 max-w-[960px] flex flex-col justify-between items-center min-h-screen gap-2 pt-4 pb-32 overflow-clip">
      <div className="absolute h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
      <Controller audio={audioRef} />
      <TextTranscription data={dataConversation} audio={audioRef} />
      <section>
        <audio
          ref={audioRef}
          id="audio"
          className="fixed bottom-2 left-2 w-48 text-orange-400 hidden"
          controls
          onTimeUpdate={() =>
            setCurrentTime(audioRef.current?.currentTime || 0)
          }
        >
          <source src="/Test Call.wav" type="audio/wav" />
        </audio>
      </section>
    </div>
  );
}
