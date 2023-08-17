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
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError(true);
      return;
    }
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
                setError(false);
                setEmail(e.target.value);
              }}
              placeholder="name@example.com"
              className="col-span-3"
            />

            <div className="h-1 col-span-3 text-end ml-auto">
              {error && (
                <p className="text-red-500 text-sm text-center">
                  Please enter a valid email address.
                </p>
              )}
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
