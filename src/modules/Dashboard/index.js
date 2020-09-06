import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import InfoCard from '../../components/InfoCard';
// import MembersTable from '../../components/MembersTable';
import Table from '../../components/Table';
import Tag from '../../components/Tag';

import {
  __dashBoardWrapper,
  __pageTitle,
  __memberImg
} from './__styles'

const DashBoardWrapper = createComponent(__dashBoardWrapper);
const PageTitle = createComponent(__pageTitle);
const MemberImg = createComponent(__memberImg);

class Dashboard extends Component<Props> {
  constructor() {
    super();
  //   this.state = {
  //     mockTableData: [{
  //     memberName: "Abhipray Shailendra",
  //     memberId: 1,
  //     memberContact: "8001188151",
  //     memberStatus: "Y",
  //     subscriptionDetails: {
  //       type: "Gym",
  //       duration: "6 month",
  //       endDate: "1st Jan",
  //       score: "8.1",
  //       trainerName: "Vimal G",
  //       attendance: "35",
  //       classLimit: "120",
  //       actions: "Gym",
  //     },
  //   },
  //   {
  //     memberName: "Raj",
  //     memberId: 2,
  //     memberContact: "943142998",
  //     memberStatus: "N",
  //     subscriptionDetails: {
  //       type: "Crossfit",
  //       duration: "3 month",
  //       endDate: "11th Feb",
  //       score: "7.4",
  //       trainerName: "Chidu",
  //       attendance: "52",
  //       classLimit: "120",
  //       actions: "Crossfit",
  //     },
  //   }
  // ]};

    this.state = {
      mockTableData: [{
      memberName: "Abhipray Shailendra",
      memberId: 1,
      memberContact: "8001188151",
      memberStatus: "Y",
      memberImgUrl: "https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg",
      type: "Gym",
      duration: "6 month",
      endDate: "1st Jan",
      score: "8.1",
      trainerName: "Vimal G",
      attendance: "35",
      classLimit: "120",
      trainingType: "Full time",
    },
    {
      memberName: "Raj Ratna",
      memberId: 2,
      memberContact: "943142998",
      memberStatus: "N",
      memberImgUrl: "https://randomuser.me/api/portraits/men/95.jpg",
      type: "Crossfit",
      duration: "3 month",
      endDate: "11th Feb",
      score: "7.4",
      trainerName: "Chidu",
      attendance: "52",
      classLimit: "120",
      trainingType: "Part time",
    },
    {
      memberName: "Akash",
      memberId: 3,
      memberContact: "9973192098",
      memberStatus: "N",
      memberImgUrl: "https://randomuser.me/api/portraits/men/77.jpg",
      type: "Yoga",
      duration: "6 month",
      endDate: "7th May",
      score: "9.4",
      trainerName: "Abhishek",
      attendance: "59",
      classLimit: "150",
      trainingType: "Part time",
    },
    {
      memberName: "Shashwat",
      memberId: 4,
      memberContact: "8003192068",
      memberStatus: "N",
      memberImgUrl: "https://uifaces.co/our-content/donated/2bvuFyb8.jpg",
      type: "Zumba",
      duration: "6 month",
      endDate: "1st May",
      score: "8.4",
      trainerName: "Abhishek",
      attendance: "59",
      classLimit: "150",
      trainingType: "Full time",
    },
    {
      memberName: "Kirti",
      memberId: 5,
      memberContact: "7873192033",
      memberStatus: "N",
      memberImgUrl: "https://uifaces.co/our-content/donated/Te-0H20q.png",
      type: "Zumba",
      duration: "6 month",
      endDate: "1st May",
      score: "8.4",
      trainerName: "Abhishek",
      attendance: "59",
      classLimit: "150",
      trainingType: "Full time",
    }
  ]};
  };

  getColumns = () => {
    return [
      {
        name: (
          <div style={{ marginLeft: "20px" }}>NAME</div>
        ),
        showSortIcon: false,
        key: "name",
        columnWidth: "30%",
        sortedOrder: "",
      },
      {
        name: "PHONE",
        showSortIcon: false,
        key: "phone",
        columnWidth: "",
        sortedOrder: "",
      },
      {
        name: "SUBSCRIPTION",
        showSortIcon: false,
        key: "subscription",
        columnWidth: "",
        sortedOrder: "",
      },
      {
        name: "ACTION",
        showSortIcon: false,
        key: "action",
        columnWidth: "",
        sortedOrder: "",
      },
    ];
  };

  // getAccordionContent = (mockTableData) => {
  //   mockTableData.map(member => {
  //     return (
  //       <Accordion data={member}/>
  //     )
  //   })
  // };

  getRows = (mockTableData) => {
    return mockTableData.map((member) => {
      return [
        {
          key: member.memberId,
          rowWidth: "30%",
          value: (
            <div style={{ display: "flex", alignItems: "center" }}>
              <MemberImg>
                <img src={member.memberImgUrl} alt="Avatar"/>
              </MemberImg>
              {member.memberName}
            </div>
          ),
        },
        {
          key: member.memberId,
          value: member.memberContact
        },
        {
          key: member.memberId,
          value: (
            <Tag tagText={`${member.trainingType}: ${member.duration}`} tagColor="yellow"/>
          )
        },
        {
          key: member.memberId,
          value: member.trainingType
        },
      ];
    });
  };
  

  render() {
    const { mockTableData } = this.state;
    return (
      <DashBoardWrapper>
        {/* <PageTitle>Dashboard</PageTitle> */}

        <InfoCard title={'Marketing'} figure={'Rs. 50,500'} growth={'35.3%'}/>
        <InfoCard title={'Sales'} figure={'Rs. 1,00,500'} growth={'-5.3%'}/>
        <InfoCard title={'Business'} figure={'Rs. 5,500'} growth={'65.3%'}/>

        <Table
          enablePagination={true}
          data={{
            columns: this.getColumns(),
            rows: this.getRows(mockTableData),
            accordionContent: mockTableData
          }}
          defaultAccordionOpen={0}
          totalRecords={mockTableData.length}
          // onPaginationClick={onPaginationClick}
          // currentPage={currentPage + 1}
          // onRowClick={this.onRowClick}
          // onSortIconClick={this.onSortClick}
        />

      </DashBoardWrapper>
    )
  }

}


export default Dashboard;
