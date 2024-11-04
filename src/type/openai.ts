import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const sendMessageToOpenAI = async (message: string) => {
  const prompt = `${message}\n\n단어나 글자 사이사이에 어울리는 이모지 "많이!!!!" 넣어서 화려하게 꾸며 줘. 쉽게 구분할 수 있게 코드 블럭 안에 써 줘.`;

  if (!API_KEY) {
    console.error('OpenAI API 키가 설정되지 않았습니다.');
    return;
  }

  try {
    const openai = new OpenAI({
      apiKey: API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = response.choices[0].message.content;
    const match = content?.match(/```(?:plaintext)?\n([\s\S]*?)```/);

    if (match && match[1]) {
      return match[1].trim();
    } else {
      return content;
    }
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    throw error;
  }
};
