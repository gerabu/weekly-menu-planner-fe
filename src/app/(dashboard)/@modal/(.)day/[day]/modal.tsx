"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Modal({ children }: PropsWithChildren) {
  const router = useRouter();

  function onDismiss(open: boolean) {
    if (!open) router.back();
  }

  return createPortal(
    <Dialog defaultOpen onOpenChange={onDismiss}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{children}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>,
    document.getElementById("modal-root")!
  );
}
