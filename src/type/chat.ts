export interface ChatMessage {
  text: string;
  align: 'left' | 'right';
}

export interface SendMessagePayload {
  text: string;
  response: string;
}
