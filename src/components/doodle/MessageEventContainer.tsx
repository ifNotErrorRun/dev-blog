"use client";

import TypographyH3 from "../atom/TypographyH3";
import { useSSE } from "./useSSE";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const MessageEventContainer = () => {
  const currentDateTimeSSE = `${process.env.NEXT_PUBLIC_API_URL}/events`;
  const { connecting, eventMessage } = useSSE(currentDateTimeSSE);

  const refreshPage = () => {
    window.location.reload();
  };

  const title = connecting ? "Current Time" : "Connection closed";

  return (
    <Card className="flex flex-col gap-2 p-6 m-10 w-96">
      <TypographyH3>{title}</TypographyH3>
      <p className="h-10 leading-10 text-wrap">{eventMessage}</p>
      {!connecting && <Button onClick={refreshPage}>Refresh</Button>}
    </Card>
  );
};

export default MessageEventContainer;
