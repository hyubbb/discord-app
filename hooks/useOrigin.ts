import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 확인
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return origin;
};
