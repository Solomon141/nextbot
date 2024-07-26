"use client";

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);
  return (
    <main className="p-4">
      {userData ? (
        <>
        <h1>User Data</h1>
        <ul>
          <li> {userData.id} </li>
          <li> {userData.first_name} </li>
          <li> {userData.last_name} </li>
          <li> {userData.username} </li>
          <li> {userData.language_code} </li>
          <li> {userData.is_premium ? "Premium Account" : "Ordinary Account"} </li>
        </ul>
        </>
      ) : (
        <>
          <p> User Loading .... </p>
        </>
      )}
    </main>
  );
}
