export const __cardWrapper = () => ({
  display: 'inline-block',
  width: '20%',
  padding: '10px',
  margin: '0 30px 30px 0',
  borderRadius: '6px',
  maxWidth: '240px',
  backgroundColor: '#ffffff',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px, rgba(0, 0, 0, 0.1) 0px 5px 5px',
  transition: 'all 0.15s ease',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#4f4da6',
    color: '#ffffff',
    '& .__title': {
      color: '#ffffff',
    }
  },
})

export const __title = () => ({
  margin: '0 0 10px',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',
  color: '#999999',
})

export const __figure = () => ({
  margin: '0 0 10px',
  fontSize: '18px',
  fontWeight: '600',
})

export const __growth = ({ growthStatus }) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: growthStatus === 'negative' ? 'red' : 'green',
})
