
export const __accordionWrap = ({ showAccordion }) => ({
    maxWidth: '100%',
    // height: 'auto',
    // overflow: 'auto',
    display: 'none',
    extend: [{
        condition: showAccordion,
        style: {
            display: 'block',
        }
    }]
})

export const __accordion = () => ({
  width: '98%',
  margin: '0px auto 0',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  padding: '20px 15px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 38px, rgba(0, 0, 0, 0.02) 0px 5px 22px',
})

export const __accordionTitle = () => ({
  fontSize: '18px',
  margin: '0 0 20px',
})

export const __accordionHeaderWrap = () => ({
  display: 'flex',
  margin: '0 0 20px',
})

export const __accordionHeader = () => ({
  width: '12%',
  color: '#999',
  textTransform: 'uppercase',
  fontSize: '12px',
  '&:nth-child(1)': {
    width: '15%',
  },
  '&:nth-child(4)': {
    width: '8%',
  },
})

export const __accordionRow = () => ({
  display: 'flex',
  margin: '0 0 20px',
})

export const __accordionRowItem = () => ({
  width: '12%',
  '&:nth-child(1)': {
    width: '15%',
  },
  '&:nth-child(4)': {
    width: '8%',
  },
})
