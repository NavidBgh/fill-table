import React from "react";
import type { NextPage } from "next";
import { Card, Container, Table } from "../../components";
import Head from "next/head";
import { useRouter } from "next/router";

const Addresses: NextPage = () => {
  const router = useRouter();
  const query = router.query?.form;

  return (
    <Container>
      <Head>
        <title>Addresses</title>
        <meta name="description" content="Addresses" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Card title={`${query} TABLE`}>
        <Table />
      </Card>
    </Container>
  );
};

export default Addresses;
