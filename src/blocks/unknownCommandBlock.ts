export const unknownCommandBlock = [
  {
    type: 'header',
    text: {
      type: 'plain_text',
      text: '🔎 Comando no encontrado.',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'Perdón, parece que el comando que usaste no está en este canal o el valor que pasaste no es válido.',
    },
  },
]
