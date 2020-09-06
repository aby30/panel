import theme from '../common/baseTheme';
console.log(theme)
export const __tableMainWrapper = ({ height }) => ({
	// overflow: 'visible',
	height: height || 'auto',
})

export const __table = () => ({
	minWidth: '100%',
	border: 0,
	overflowX: 'auto',
	whiteSpace: 'nowrap',
	tableLayout: 'fixed',
  // borderCollapse: 'collapse',
  borderCollapse: 'separate',
  borderSpacing: '0 1em',
})

export const __header = () => ({
	textAlign: 'left',
	fontSize: theme.font.size10,
	color: theme.colors.darkGrey5,
	fontStyle: 'normal',
	lineHeight: theme.spaces[16],
	backgroundColor: 'transparent',
	'> th': {
		display: 'inline-block',
	},
})

export const __tableHeader = () => ({
	minWidth: '200px',
	display: 'inline-block',
	padding: theme.spaces[8],
	':first-child': {
		padding: `${theme.spaces[8]} ${theme.spaces[8]} ${theme.spaces[8]} ${
			theme.spaces[20]
		}`,
	},
})

export const __tableHead = () => ({
	display: 'flex',
})

export const __iconContainer = () => ({
	width: '8px',
	marginLeft: theme.spaces[4],
})

export const __tableData = () => ({
	padding: theme.spaces[8],
	borderStyle: 'none !important',
	verticalAlign: 'middle !important',
	display: 'inline-block',
	minWidth: '200px',
	whiteSpace: 'break-spaces',
	wordBreak: 'break-word',
	'> div': {
		display: 'block',
	},
	':first-child': {
		paddingLeft: `${theme.spaces[16]}`,
	},
	':last-child': {
		paddingRight: `${theme.spaces[16]}`,
	},
	':only-child': {
		paddingLeft: `${theme.spaces[16]}`,
	},
})

export const __tableDataContainer = () => ({
  position: 'relative',
	textAlign: 'left',
	border: `1px solid ${theme.colors.lightGrey4} !important`,
	backgroundColor: 'white',
	cursor: 'pointer',
  // height: '62px',
  padding: '0 60px 0 0',
  verticalAlign: 'middle',
	'&:focus': {
		backgroundColor: theme.colors.bmsInfo,
	},
})

export const __circle = ({ theme, size, isInverted }) => ({
	marginRight: '11px',
	width: size || theme.spaces[24],
	height: size || theme.spaces[24],
	lineHeight: size || theme.spaces[24],
	textAlign: 'center',
	color: theme.colors.white,
	fontSize: theme.spaces[16],
	backgroundColor: theme.colors.black,
	borderRadius: '50%',
	'&:focus': {
		backgroundColor: '#F2F5F9',
	},
	extend: [
		{
			condition: isInverted,
			style: {
				backgroundColor: theme.colors.white,
			},
		},
	],
})

export const __paginationContainer = () => ({
	marginTop: theme.spaces[20],
	display: 'flex',
})

export const __rowInfoContainer = () => ({
	marginTop: theme.spaces[4],
	position: 'absolute',
	fontSize: theme.font.size14,
})

export const __pagination = () => ({
	margin: '0 auto',
	display: 'flex',
	cursor: 'pointer',
})

export const __paginationValue = () => ({
	marginRight: theme.spaces[10],
	marginTop: theme.spaces[4],
})

export const __nextIconContainer = () => ({
	width: theme.spaces[12],
	height: theme.spaces[12],
	margin: '0 auto',
})

export const __tableBody = () => ({
	maxHeight: '500px',
	height: 'auto',
	overflowY: 'auto',
	overflowX: 'auto',
	display: 'inherit',
	width: '100%',
})

export const __expandBtnForAccordion = () => ({
  position: 'relative',
  float: 'right',
  right: '10px',
  top: '8px',
  display: 'inline-block',
  padding: '8px 13px',
  borderRadius: '4px',
  border: '1px solid #f1f1f1',
  ':hover': {
    pointer: 'cursor',
    backgroundColor: '#4f4da6',
    color: '#ffffff',
  },
})