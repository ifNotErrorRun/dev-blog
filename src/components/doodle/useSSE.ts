"use client";
import { useEffect, useState } from "react";

export const useSSE = (url : string) => {
  const [eventMessage, setEventMessage] = useState<string>("");
  const [connecting, setConnecting] = useState<boolean>(false);

  useEffect(() => {
    const event = new EventSource(url);
    event.addEventListener("open", () => {
      console.log("connection opened");
      setConnecting(true);
    });
    event.addEventListener("close", () => {
      event.close();
      setConnecting(false);
      console.log("connection closed");
    });
    event.addEventListener("nowDate", async (e) => {
      setEventMessage(e.data);
    });
    event.addEventListener("error", (e) => {
      event.close();
      setEventMessage("Connection failed. Please refresh the page.");
      setConnecting(false);
      console.error("EventSource failed:", e);
    });
    return () => event.close();
  }, []);

  return { connecting, eventMessage };
};
