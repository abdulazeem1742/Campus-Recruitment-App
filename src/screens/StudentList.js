import React from "react";
import { View, Text, ScrollView } from "react-native";
import StudentData from "../components/StudentData";
function StudentList() {
  return (
    <>
      <ScrollView>
        <StudentData name="Azhar Ahmed" mail="azhar99@gmail.com" department="CE" />
        <StudentData name="Zahid" mail="zahidalir09@gmail.com" department="Cs" />
        <StudentData name="Qadeer" mail="qadeersolangi@gmail.com" department="SE" />
        <StudentData name="Azam" mail="azhar99@gmail.com" department="SE" />
        <StudentData name="Jabbar" mail="rajarjabu@gmail.com" department="Civil" />
        <StudentData name="Waqar" mail="raeeswaqar@gmail.com" department="SE" />
        <StudentData name="Niaz" mail="aliniaz@gmail.com" department="ZOO" />
        <StudentData name="Asim" mail="asim134@gmail.com" department="SE" />
      </ScrollView>
    </>
  );
}

export default StudentList;
