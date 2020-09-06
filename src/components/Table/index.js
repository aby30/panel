import * as React from 'react'
import { createComponent } from 'react-fela'
// import PropTypes from 'prop-types'

// components
import Icon from '../../components/Icon';
import Accordion from '../../components/Accordion';

// icons
// import moneyPlant from 'design-framework/common/icons/arrow-down.svg'
// import Fb from 'design-framework/common/icons/arrow-up.svg'
// import moneyPlant from 'design-framework/common/icons/arrow-right.svg'
// import Fb from 'design-framework/common/icons/arrow-left.svg'
import Fb from '../common/icons/fb.svg';
import moneyPlant from '../common/icons/moneyPlant.svg';

// styles
import {
	__tableMainWrapper,
	__table,
	__header,
	__tableHeader,
	__tableHead,
	__iconContainer,
	__tableData,
	__tableDataContainer,
	__circle,
	__paginationContainer,
	__pagination,
	__paginationValue,
	__rowInfoContainer,
	__nextIconContainer,
  __tableBody,
  __expandBtnForAccordion
} from './__styles'

const TableWrapper = createComponent(__tableMainWrapper, 'div')
const TableContainer = createComponent(__table, 'table')
const Header = createComponent(__header, 'tr')
const TableHeader = createComponent(__tableHeader, 'td')
const TableHead = createComponent(__tableHead, 'div')
const IconContainer = createComponent(__iconContainer, 'div', ['onClick'])
const TableDataContainer = createComponent(__tableDataContainer, 'tr', [
	'onClick',
	'tabIndex',
	'onKeyPress',
])
const TableData = createComponent(__tableData, 'td', ['onClick'])
const Circle = createComponent(__circle, 'div', [
	'onClick',
	'tabIndex',
	'onKeyPress',
])
const PaginationContainer = createComponent(__paginationContainer, 'div')
const Pagination = createComponent(__pagination, 'div', ['onClick'])
const PaginationValue = createComponent(__paginationValue, 'div', ['onClick'])
const RowInfoContainer = createComponent(__rowInfoContainer, 'div')
const NextIconContainer = createComponent(__nextIconContainer, 'div')
const TableBody = createComponent(__tableBody, 'tbody')
const ExpandBtnForAccordion = createComponent(__expandBtnForAccordion, 'div', ['onClick'])

class Table extends React.PureComponent {
	constructor(props) {
		super(props)

		const totalPaginationValues = Math.ceil(
			props.totalRecords / props.recordsPerRow
		)
		const paginationValues = []
		for (let i = 1; i <= totalPaginationValues; i++) {
			paginationValues.push(i)
		}

		this.state = {
			sortedKey: props.defaultSortedKey || '',
			sortedOrder: props.defaultSotedOrder || 'DESC',
			currentPage: props.currentPage || 1,
      paginationValues,
      activeDropdown: {},
    }
  }

  componentDidMount() {
    const { defaultAccordionOpen } = this.props
    this.toggleAccordion(defaultAccordionOpen)
  }

	componentDidUpdate(prevProps) {
		const { totalRecords, recordsPerRow } = this.props
		// updating pagination values
		if (prevProps.totalRecords !== totalRecords) {
			const totalPaginationValues = Math.ceil(
				totalRecords / recordsPerRow
			)
			const paginationValues = []
			for (let i = 1; i <= totalPaginationValues; i++) {
				paginationValues.push(i)
			}

			this.setState({
				paginationValues,
			})
    }
	}

	onSortIconClick = (e, column) => {
		const { sortedKey, sortedOrder } = this.state
		e.preventDefault()

		const orderBy = sortedOrder === 'ASC' ? 'DESC' : 'ASC'

		if (column.key === sortedKey) {
			this.setState({
				sortedOrder: orderBy,
			})
		} else {
			this.setState({
				sortedKey: column.key,
				sortedOrder: orderBy,
			})
		}
		this.props.onSortIconClick(column.key, orderBy)
	}

	getSortedIcon = key => {
		const { sortedOrder, sortedKey } = this.state

		if (key === sortedKey) {
			return sortedOrder === 'ASC' ? Fb : moneyPlant
		}

		return moneyPlant
	}

	setCurrentPage = (e, value) => {
		e.preventDefault()

		this.setState({
			currentPage: parseInt(value, 10),
		})

		this.props.onPaginationClick(value)
	}

	static getDerivedStateFromProps(props, state) {
		const { currentPage } = props

		if (currentPage !== state.currentPage) {
			return {
				currentPage: parseInt(currentPage, 10),
			}
		}
	}

	handleKeyBoardEvent = (e, row, index) => {
    const { onRowClick } = this.props.onRowClick
		if (e.charCode === 13) {
      if (onRowClick)
        onRowClick(e, row, index)
      else
        this.toggleAccordion(index)
		}
  }
  
  toggleAccordion = index => {
    const { activeDropdown } = this.state

    activeDropdown[index] = !activeDropdown[index]
    this.setState(activeDropdown)
  }

	render() {
		const {
			data,
			onRowClick,
			totalRecords,
			enablePagination,
			recordsPerRow,
      height,
		} = this.props
		const { columns, rows, accordionContent } = data
		const { currentPage, paginationValues, activeDropdown } = this.state
		let lastRowValue =
			parseInt(recordsPerRow * (currentPage - 1), 10) + recordsPerRow
		const startingRowValue = parseInt(lastRowValue - recordsPerRow + 1, 10)

		if (lastRowValue > totalRecords) lastRowValue = totalRecords

		const currentPageIndex = paginationValues.indexOf(currentPage)

		// getting initial values for the pagination
		let newPaginationValues = paginationValues
			.slice(currentPageIndex)
			.slice(0, 3)
		if (newPaginationValues.length < 3 && paginationValues.length > 3) {
			// condition when user is on the last page to show the previous paginated values
			newPaginationValues = paginationValues.slice(
				paginationValues.length - 3
			)
		}
		// edge condition to show all the pagination values if its length<3 at all times
		if (paginationValues.length <= 3) {
			newPaginationValues = paginationValues
		}

		return (
			<div>
				<TableWrapper height={height}>
					<TableContainer>
						<TableBody>
							<Header>
								{columns.map(column => (
									<TableHeader
										style={{
											width:
												column.columnWidth || '200px',
										}}
									>
										<TableHead>
											{column.name}
											{column.showSortIcon && (
												<IconContainer
													onClick={e =>
														this.onSortIconClick(
															e,
															column
														)
													}
												>
													<Icon
														glyph={this.getSortedIcon(
															column.key
														)}
													/>
												</IconContainer>
											)}
										</TableHead>
									</TableHeader>
								))}
							</Header>
							{rows.length >= 1 ? (
								rows.map((eachRow, index) => {
                  let showAccordion = activeDropdown[index]
                  return (
                  <>
									<TableDataContainer
										onClick={e => {
											onRowClick(e, eachRow, index)
										}}
										onKeyPress={e =>
											this.handleKeyBoardEvent(
												e,
												eachRow,
												index
											)
										}
                    tabIndex={0}
                    key={`row-${index}`}
									>
										{eachRow.map(row => (
											<TableData
												key={row.key}
												style={{
													width:
														row.rowWidth || '200px',
												}}
											>
												{row.value}
											</TableData>
										))}
                    {accordionContent.length > 0 && 
                      <ExpandBtnForAccordion onClick={() => this.toggleAccordion(index)}>
                        {showAccordion ? '-' : '+'}
                      </ExpandBtnForAccordion>
                    }
									</TableDataContainer>
                  {accordionContent.length > 0 && (
                    <>
                      <Accordion data={accordionContent[index]} showAccordion={showAccordion}/>
                    </>
                    )}
                  </>
								)})
							) : (
								<TableDataContainer colspan={columns.length}>
									<TableData
										style={{
											textAlign: 'center',
											padding: '16px',
											width: '100%',
											margin: '0 auto',
										}}
									>
                    <span>No results found</span>
									</TableData>
								</TableDataContainer>
							)}
						</TableBody>
					</TableContainer>
				</TableWrapper>

				{enablePagination && totalRecords > recordsPerRow && (
					<PaginationContainer>
						<RowInfoContainer>
							{`Showing ${startingRowValue} - ${lastRowValue} of ${totalRecords}`}
						</RowInfoContainer>
						<Pagination>
							{parseInt(currentPage, 10) !== 1 && (
								<Circle
									size="24px"
									style={{ marginTop: '3px' }}
									isInverted
									onClick={e =>
										this.setCurrentPage(e, currentPage - 1)
									}
									tabIndex={0}
									onKeyPress={e =>
										this.setCurrentPage(e, currentPage - 1)
									}
								>
									<NextIconContainer>
										<Icon glyph={Fb} />
									</NextIconContainer>
								</Circle>
							)}
							{newPaginationValues.map(value => {
								if (
									parseInt(value, 10) ===
									parseInt(currentPage, 10)
								) {
									return (
										<Circle
											size="19px"
											style={{
												marginTop: '6px',
											}}
											key={value}
										>
											{value}
										</Circle>
									)
								}

								return (
									<PaginationValue
										style={{ marginTop: '8px' }}
										key={value}
										onClick={e =>
											this.setCurrentPage(e, value)
										}
									>
										{value}
									</PaginationValue>
								)
							})}
							{parseInt(lastRowValue, 10) !==
								parseInt(totalRecords, 10) && (
								<Circle
									size="24px"
									style={{ marginTop: '3px' }}
									isInverted
									onClick={e =>
										this.setCurrentPage(e, currentPage + 1)
									}
									tabIndex={0}
									onKeyPress={e =>
										this.setCurrentPage(e, currentPage + 1)
									}
								>
									<NextIconContainer>
										<Icon glyph={moneyPlant} />
									</NextIconContainer>
								</Circle>
							)}
						</Pagination>
					</PaginationContainer>
				)}
			</div>
		)
	}
}

// Table.propTypes = {
// 	/** Records per row. Defaults to 10 */
// 	recordsPerRow: PropTypes.number,
// 	/** Total Records available. Required to calculate total no of pages */
// 	totalRecords: PropTypes.number,
// 	/** Default Sorted Key. Used in case existing values is already sorted */
// 	defaultSortedKey: PropTypes.string,
// 	/** Sorted Order when default Sorted key is present. Default to DESC */
// 	defaultSotedOrder: PropTypes.string,
// 	/** Current page in which the user is present  */
// 	currentPage: PropTypes.number,
// 	/** List of data. Supports component rendering. */
// 	data: PropTypes.shape({
// 		rows: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				key: PropTypes.string.isRequired,
// 				value: PropTypes.string.isRequired,
// 				rowWidth: PropTypes.string,
// 			})
// 		),
// 		columns: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				key: PropTypes.string.isRequired,
// 				name: PropTypes.string.isRequired,
// 				showSortIcon: PropTypes.bool,
// 				columnWidth: PropTypes.string,
// 				sortedOrder: PropTypes.string,
// 			})
// 		),
// 	}),
// 	/** Enable pagination or not. Defaults to true */
// 	enablePagination: PropTypes.bool,
// 	/** On sort icon click. Passes two values as params. 1. Column key passed in the data 2. orderBY (ASC/DESC) */
// 	onSortIconClick: PropTypes.func,
// 	/** On pagination Click. Passes the value of the page no to be fetched */
// 	onPaginationClick: PropTypes.func,
// 	/** On row click. Passes row data and index of the row  */
// 	onRowClick: PropTypes.func,
// }

Table.defaultProps = {
	totalRecords: 0,
	defaultSortedKey: '',
	defaultSotedOrder: 'DESC',
	currentPage: 1,
	recordsPerRow: 10,
	data: { columns: [], rows: [] },
	enablePagination: true,
	onSortIconClick: () => {},
	onPaginationClick: () => {},
	onRowClick: () => {},
}

export default Table
