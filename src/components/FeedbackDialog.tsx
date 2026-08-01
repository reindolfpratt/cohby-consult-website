import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FeedbackForm from "@/components/FeedbackForm";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FeedbackDialog({ open, onOpenChange }: FeedbackDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none">
        <FeedbackForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
