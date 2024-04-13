import { CreateRoomForm } from "./create-room";

export default function CreateRoomPage() {
  return (
      <div className="container max-auto flex flex-col gap-8 pt-12 pb-4">
          <h1 className="text-4xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
}
