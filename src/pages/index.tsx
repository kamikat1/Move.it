import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from 'styles/pages/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <head>
        <title>Inicio | Move.it</title>
      </head>
      <ExperienceBar />

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>

        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  );
}
