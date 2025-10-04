"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/lib/redux/features/authSlice";

export default function SessionWatcher() {
  const { data: session } = useSession();

  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.accessToken) {
      dispatch(setAccessToken(session.accessToken));
    }
  }, [session, dispatch]);

  return null; // doesn't render anything, just syncs session to Redux
}
