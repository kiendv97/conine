"use client";

import { useEffect, useState } from "react";
import "./SplashScreen.css";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Khóa cuộn trang khi Splash Screen đang hiển thị
    document.body.style.overflow = "hidden";

    // Hiển thị Splash Screen trong 2 giây
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) onComplete();
    }, 2000);

    // Sau khi animation scroll up kết thúc (tầm 1s), xóa hẳn component khỏi DOM
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = ""; // Mở lại cuộn trang
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isExiting ? "exit" : ""}`}>
      <div className="splash-logo-container">
        <img src="/images/alive/logo.svg" alt="ALIVE VIETNAM Logo" className="splash-logo" />
      </div>
    </div>
  );
}
