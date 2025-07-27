import { AuthButton } from "@/components/auth-button";
import CreateEventModal from "@/components/create-event-modal";
import UserEvents from "@/components/user-events";

export default function DashboardPage() {

  return (
    <div className="flex flex-col">
      <div className="p-3 border-b flex justify-between items-center">
        <div className="">Dashboard</div>
        <AuthButton />
      </div>

      <div className="p-3">
        <div className="flex justify-between mb-4">
          <div className="text-xl font-bold">Your Events</div>
          <CreateEventModal />
        </div>
          <UserEvents />
      </div>
    </div>
  );
}
