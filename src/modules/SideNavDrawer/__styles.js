export const __drawerWrap = () => ({
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '270px',
  padding: '20px 10px',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  overflow: 'auto',
  borderRight: '1px solid #f6f6f6',
  boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)',
})

export const __logo = () => ({
  margin: '0 0 40px',
  textAlign: 'center',
  '> img': {
    width: '150px',
    maxWidth: '100%',
  }
})

export const __navList = () => ({
  padding: '0 10px 0',
})

export const __navListItem = ({ active }) => ({
  '> a': {
    display: 'block',
    padding: '15px',
    color: '#999999',
    backgroundColor: active ? '#fbfbfb' : '#ffffff',
    textDecoration: 'none',
    color: 'inherit',
    ':hover': {
      backgroundColor: '#fbfbfb',
      cursor: 'pointer',
    }
  },
  '& svg': {
    marginRight: '10px',
  }
})
