import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from 'styles/pages/Home.module.css';
import { CompletedChalanges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';

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
          <CompletedChalanges/>
          <Countdown/>
        </div>

        <div>

        </div>
      </section>
    </div>
  );
}
