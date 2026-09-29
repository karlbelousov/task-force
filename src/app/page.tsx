import LandingPage from "@/pages/LandingPage";
import { ptsans } from "./fonts";
import "./landing.css";

export default function Home() {
  return (
    <body className={`landing ${ptsans.className}`}>
      <LandingPage />
    </body>
  );
}
