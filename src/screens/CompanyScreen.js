import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import CompanyPost from "../components/CompanyPost";

export default function CompanyScreen() {
  return (
    <>
      <ScrollView>
        <CompanyPost name="BYKEA" />
        <CompanyPost name="SOFTECH" />
        <CompanyPost name="FOOD PANDA" />
        <CompanyPost name="4SLASH" />
        <CompanyPost name="A4 LOGIC SOLUTION" />
        <CompanyPost name="1LINK" />
        <CompanyPost name="10X PEARLS" />
        <CompanyPost name="2BE CREATIVE" />
        <CompanyPost name="7 SKY SOLUTION" />
        <CompanyPost name="99WEBDESIGNS" />
      </ScrollView>
    </>
  );
}
