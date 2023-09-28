"use client";

import Image from "next/image";
import "../styles/demo-page.module.scss";

import classNames from "classnames";
import useDemoKrpano from "../hooks/useDemoKrpano";
import { Button } from "antd";
import { LegacyRef } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-full w-full">
        <div className="h-ful w-ful">
          <div ref={containerRef as LegacyRef<HTMLDivElement>} />
        </div>

        <div className="absolute top-0 left-0 w-full h-20 bg-black/50 text-white">
          <a href="#">{"<-Back to Home"}</a>
          <Button
            type="primary"
            onClick={toggleLockView}
            className={isLocked ? "bg-yellow" : "bg-green"}
          >
            Toggle Lock View
          </Button>
          <Button
            type="primary"
            onClick={toggleHideSpots}
            className={isHideSpots ? "bg-yellow" : "bg-green"}
          >
            Toggle Hide Spots
          </Button>
          <div className="scene-name">Current Scene Name: {currentScene}</div>
        </div>
      </div>
    </main>
  );
}
