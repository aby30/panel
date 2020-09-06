export const __tagWrapper = ({ tagColor }) => ({
  display: 'inline-block',
  width: 'auto',
  padding: '6px 10px',
  margin: '0 10px 0 0',
  borderRadius: '4px',
  textTransform: 'uppercase',
  transition: 'all 0.14s ease',
  fontSize: '12px',
  ':hover': {
    opacity: '0.9',
  },
  extend: [
    {
      condition: tagColor === 'red',
      style: {
        backgroundColor: '#fef3f1',
        color: '#e96848',
      },
    },
    {
      condition: tagColor === 'green',
      style: {
        backgroundColor: '#e6f5ee',
        color: '#388f6c',
      },
    },
    {
      condition: tagColor === 'yellow',
      style: {
        backgroundColor: '#fff9eb',
        color: '#f3be4c',
      },
    },
    {
      condition: tagColor === 'grey',
      style: {
        backgroundColor: '#f0f1f3',
        color: '#a9a9ab',
      },
    },
  ],
})
