export const __headerWrap = () => ({
  position: 'fixed',
  left: '290px;',
  height: '35px',
  padding: '15px',
  backgroundColor: '#ffffff',
  width: 'calc(100% - 320px)',
  zIndex: '1',
  boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px',
})

export const __profilePic = () => ({
  borderRadius: '30px',
  overflow: 'hidden',
  width: '35px',
  height: '35px',
  display: 'inline-block',
  '> img': {
    maxWidth: '100%',
  }
})

export const __headerActions = () => ({
  float: 'right',
  '& > div': {
    marginRight: '30px',
    verticalAlign: 'middle',
  }
})
