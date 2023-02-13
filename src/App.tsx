import { Component, createSignal } from "solid-js";

import styles from "./App.module.css";

import one from "./one.svg";
import more from "./more.svg";
import loop from "./loop.svg";

import oneIcon from "./icons/one.svg";
import moreIcon from "./icons/more.svg";
import loopIcon from "./icons/loop.svg";

const motions = [one, more, loop];
const backs = [styles.cyan, styles.white, styles.room];

const App: Component = () => {
  const [visible, setVisible] = createSignal<boolean>(false);
  const [motion, setMotion] = createSignal<number>(0);
  const [back, setBack] = createSignal<number>(0);
  const [label, setLabel] = createSignal<boolean>(true);

  const onBackClick = (x: { currentTarget: HTMLInputElement; }) => {
    setBack(+x.currentTarget.value)
  };
  
  const onMotionClick = (x: { currentTarget: HTMLInputElement; }) => {
    setMotion(+x.currentTarget.value)
  };

  return (
    <>
      <main class={`${styles.main} ${backs[back()]} ${!visible() && styles.nocursor}`} onclick={() => setVisible(x => !x)}>
        <span class={`${styles.label} ${!label() && styles.none}`}>CYAN</span>
        <img src={motions[motion()]} class={styles.core} alt="The animation of Cyan bouncing."/>
      </main>

      <div id="settings" class={`${styles.settings} ${!visible() && styles.none}`}>
        <form class={styles.form}>
          <h2>MOTION</h2>
          <input type="radio" name="motion" value="0" id="m0" onclick={onMotionClick} checked />
          <input type="radio" name="motion" value="1" id="m1" onclick={onMotionClick} />
          <input type="radio" name="motion" value="2" id="m2" onclick={onMotionClick} />
          <div class={styles.labels}>
            <label for="m0"><img src={oneIcon} /></label>
            <label for="m1"><img src={moreIcon} /></label>
            <label for="m2"><img src={loopIcon} /></label>
          </div>

          <hr />

          <h2>BACKGROUND</h2>
          <input type="radio" name="back" value="0" id="b0" onclick={onBackClick} checked />
          <input type="radio" name="back" value="1" id="b1" onclick={onBackClick}/>
          <input type="radio" name="back" value="2" id="b2" onclick={onBackClick}/>     
          <div class={styles.labels}>
            <label for="b0"><div class={styles.cyan} /></label>
            <label for="b1"><div class={styles.white} /></label>
            <label for="b2"><div class={styles.roomx} /></label>
          </div>

          <hr />

          <div class={styles.slide}>
            <span>Show label</span>
            <label for="l">
              <input type="checkbox" id="l" onclick={() => setLabel(x => !x)} checked />
              <div class={styles.slideBar}><div /></div>
            </label>
          </div>

          <hr />

          <p>Made by <a href="https://www.cyan4s.com">CYAN4S</a>.</p>
          <p>Source code at <a href="https://github.com/CYAN4S/bouncyan">GitHub</a>.</p>
        </form>
      </div>
    </>
  );
};

export default App;
