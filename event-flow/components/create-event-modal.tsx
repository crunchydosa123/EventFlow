"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client"; // adjust path if needed

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const supabase = createClient();

const CreateEventModal = () => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    maxRegistrations: "",
    location: "",
  });

  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Get user on component mount
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserId(data.user.id);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async () => {
    if (!event.name || !event.date || !event.maxRegistrations || !event.location) {
      console.error("Please fill in all fields.");
      return;
    }

    if (!userId) {
      console.error("User not authenticated.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("Events").insert({
      event_name: event.name,
      event_date: event.date,
      max_registrations: Number(event.maxRegistrations),
      location: event.location,
      created_by: userId,
    });

    if (error) {
      console.error("Failed to create event:", error);
    } else {
      console.log("Event created successfully!");
      setEvent({
        name: "",
        date: "",
        maxRegistrations: "",
        location: "",
      });
    }

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the event details below to create an event.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="event-name">Event Name</Label>
            <Input
              id="event-name"
              placeholder="Enter event name"
              value={event.name}
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="event-date">Date</Label>
            <Input
              id="event-date"
              type="date"
              value={event.date}
              onChange={(e) => setEvent({ ...event, date: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="max-registrations">Max Registrations</Label>
            <Input
              id="max-registrations"
              type="number"
              placeholder="100"
              value={event.maxRegistrations}
              onChange={(e) => setEvent({ ...event, maxRegistrations: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Auditorium, Block A"
              value={event.location}
              onChange={(e) => setEvent({ ...event, location: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={loading || !userId}>
            {loading ? "Creating..." : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventModal;
