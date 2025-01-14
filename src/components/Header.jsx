import LOGO_IMG from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={LOGO_IMG} alt="Quiz Logo" />
      <h1>Quiz-Board</h1>
    </header>
  );
}
