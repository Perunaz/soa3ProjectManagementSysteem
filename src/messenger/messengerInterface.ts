
export interface MessengerInterface {
    notifySprintCreated(): void;
    notifySprintCancelled(): void;
    notifySprintFinished(): void;
    notifyToDoItem(): void;
    notifyDoingItem(): void;
    notifyDoneItem(): void;
  }