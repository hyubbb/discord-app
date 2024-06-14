"use client";

import { useEffect, useState } from "react";
import CreateServerModal from "@/components/modals/create-server-modal";
import InviteModal from "@/components/modals/invite-modal";

export const ModalProvider = () => {
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};