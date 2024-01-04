import React from "react";
import MakeAdminForm from "./MakeAdminForm";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  `;

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  `;
function Admin() {
  return (
    <Box>
      <h1>Admin Interface</h1>
      <AdminContainer>
        <MakeAdminForm />
      </AdminContainer>
    </Box>
  );
}

export default Admin;