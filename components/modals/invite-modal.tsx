"use client";
import { Check, Copy, RefreshCw } from "lucide-react";

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/useOrigin";
import { useState } from "react";
import axios from "axios";

const InviteModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const origin = useOrigin();
  const { server } = data;
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // open 함수가 실행이 되고 type이 createServer이면 생성한다.
  // navigation-action에서 동작함
  const isModalOpen = isOpen && type === "invite";

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="overflow-hidden bg-white p-0 text-black">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-center text-2xl">
            Invite Friends
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 ">
          <Label className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
            Server invite link
          </Label>
          <div className="mt-2 flex items-center gap-x-2">
            <Input
              className="border-0 bg-zinc-300/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0"
              defaultValue={inviteUrl}
            />
            <Button onClick={onCopy} size="icon">
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button
            variant="link"
            size="sm"
            className="mt-4 text-xs text-zinc-500"
          >
            Generate a new Link
            <RefreshCw className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
