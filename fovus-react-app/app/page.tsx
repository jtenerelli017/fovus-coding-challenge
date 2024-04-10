export default function Home() {
  return (
    <div>
      <form>
        <label htmlFor="tinput">Text input: </label>
        <input type="text" id="tinput" name="tinput"></input><br></br><br></br>
        <label htmlFor="finput">File input: </label>
        <input type="file" id="finput" name="finput"></input><br></br><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
