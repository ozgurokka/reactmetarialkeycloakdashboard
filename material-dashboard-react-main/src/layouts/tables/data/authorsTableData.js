/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Okka (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";


function createData(userId, name, surname, company) {
  return { userId, name, surname, company};
 }
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";


export default function data() {

const [datax, setData] = useState([]);

const config = {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwttoken')}`,
  },
};
  useEffect(() => {
    axios
      .get("http://localhost:8085/user",config )
      .then((res) => {
        setData(res.data);
        console.log("Result:", datax);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const output = datax.map((row) => {
    return (
      {
        author: <Author name={row.name} />,
        function: <Job title={row.company} description="Organization" />,
      }
    );
  })

  return {
    columns: [
      { Header: "Personel", accessor: "author", width: "45%", align: "left" },
      { Header: "Kurum", accessor: "function", align: "left" },
    ],
    rows: datax.map((row) => {
      return (
        {
          author: <Author name={row.name +" " +row.surname} />,
          function: <Job title={row.company} description="Admin" />,
        }
      );
    }),
  };
}
