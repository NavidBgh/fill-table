import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Card, Container, FormA } from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const query = useRouter().query;

  return (
    <Container>
      <Head>
        <title>Add Address</title>
        <meta name="description" content="Add Address" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.home__section}>
        <Card title="ADD A">
          <FormA query={query} />
        </Card>
        <Card title="ADD B">FORM B</Card>
        <Card title="ADD C">FORM C</Card>
      </div>
    </Container>
  );
};

export default Home;
