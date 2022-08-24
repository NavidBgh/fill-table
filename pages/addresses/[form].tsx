import React from "react";
import type { NextPage } from "next";
import { Card, Container, Table } from "../../components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Addresses: NextPage = () => {
  const router = useRouter();
  const query = router.query?.form;
  const addresses = useSelector((state: any) => state.addresses);

  return (
    <Container>
      <Head>
        <title>Addresses</title>
        <meta name="description" content="Addresses" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Card title={`${query} TABLE`}>
        <Table data={addresses} />
      </Card>
    </Container>
  );
};

export default Addresses;
