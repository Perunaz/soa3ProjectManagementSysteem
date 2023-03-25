export interface MessageService {
  sendMessage(name: string, body: string): void;
}