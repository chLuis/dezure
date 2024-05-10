import Conversation from "@/components/Conversation";
import { TRANSCRIPTION_CONVERSATION } from "@/lib/conversation";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between animate-showSlow">
      <Conversation data={TRANSCRIPTION_CONVERSATION}/>
    </main>
  );
}
