import { ChatMessage } from 'src/type/chat';

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    text: '꾸미고 싶은 텍스트를 입력해 보세요! 아래처럼 예쁘게 만들어 드릴게요. 🌟',
    align: 'left',
  },
  {
    text: '얄미워 너 정말\n왜 저럴까 진짜?\n내가 알던 핑크빛 Romance는\n둥근 풍선 같던데\n우린 좌 우 앞 뒤 뾰족하다구!',
    align: 'right',
  },
  {
    text: '얄미워😤 너🫵 정말😠\n왜 저럴까🤔 진짜⁉️\n내가 알던 💖 핑크빛 🌸 Romance💖는\n둥근 🎈 풍선 🎈 같던데💭\n우린 좌↔️ 우↔️ 앞⬆️ 뒤⬇️ 뾰족하다구!⚔️🌀',
    align: 'left',
  },
];

export const CURSOR_CONFIG = {
  size: 300,
  color: '#b7136b',
  opacity: 0.1,
} as const;
