import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    setLoading(true);
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Invalid email address");
      return;
    }
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
      setLoading(false);
      toast({
        title: "Subscribed!",
        description: "Succesfully subscribed to the daily mess menu.",
      });
    } catch (error: any) {
      setError(error?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subcribe</DialogTitle>
          <DialogDescription>
            Subscribe so that you get notified before every meal.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setError("");
                setEmail(e.target.value);
              }}
              placeholder="name@example.com"
              className="col-span-3"
            />

            <div className="h-1 col-span-3 text-end ml-auto">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={handleSubscribe}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Subscribe;
