import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SalesforceForm from "@/components/SalesforceForm";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FormDialog = ({ open, onOpenChange }: FormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-4 bg-gradient-to-r from-primary to-secondary sticky top-0 z-10">
          <DialogTitle className="text-2xl font-heading font-bold text-white">
            Study Abroad — Application Form
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-8 pt-2">
          <SalesforceForm onClose={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
