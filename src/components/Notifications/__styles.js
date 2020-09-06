export const __notificationsWrapper = () => ({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
})

export const __notificationsIcon = () => ({
  color: '#999999',
})

export const __notificationsListWrap = () => ({
  position: 'absolute',
  right: '0px',
  right: '-20px',
  top: '30px',
})
export const __notificationsList = () => ({
  backgroundColor: '#f9f9f9',
  padding: '15px',
  borderRadius: '4px',
  minWidth: '140px',
  fontSize: '13px',
  zIndex: '5',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
})

export const __notificationsListItem = () => ({
  padding: '10px 0',
  ':hover': {
    color: '#4f4da6',
  },
})
