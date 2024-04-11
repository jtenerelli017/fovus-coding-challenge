import TextInput from "./components/server/TextInput";
import FileInput from "./components/server/FileInput";
import SubmitButton from "./components/server/SubmitButton";

export default function Home() {
  return (
    <main>
      <form>
        <TextInput />
        <FileInput />
        <SubmitButton />
      </form>
    </main>
  );
}
