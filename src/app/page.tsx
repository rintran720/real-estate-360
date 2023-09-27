"use client";

import Image from "next/image";
import "../styles/demo-page.module.scss";

import classNames from "classnames";
import useDemoKrpano from "../hooks/useDemoKrpano";

const LoadingPage = ({ isFadingout = false }) => {
  const wrapperClasses = classNames("loading-page", {
    "loading-page--fade-out": isFadingout,
  });
  return (
    <div className={wrapperClasses}>
      <div className="hint">Loading...</div>
    </div>
  );
};

export default function Home() {
  const {
    showLoadingPage,
    isLoaded,
    containerRef,
    toggleLockView,
    isLocked,
    toggleHideSpots,
    isHideSpots,
    currentScene,
  } = useDemoKrpano();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {showLoadingPage && <LoadingPage isFadingout={isLoaded} />}

      <div className="demo-page">
        <div ref={containerRef} />
        <div className="menu">
          <a href="#">Back to Home</a>
          <button
            onClick={toggleLockView}
            className={isLocked ? "disable" : ""}
          >
            Toggle Lock View
          </button>
          <button
            onClick={toggleHideSpots}
            className={isHideSpots ? "disable" : ""}
          >
            Toggle Hide Spots
          </button>
          <div className="scene-name">Current Scene Name: {currentScene}</div>
        </div>
        <a
          className="github-link"
          href="https://github.com/shinenic/react-krpano-hooks"
          target="_blank"
        >
          {/* <img src={GithubLogo} alt="github" /> */}
        </a>
      </div>
    </main>
  );
}
