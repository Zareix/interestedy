import { type NextPage } from "next";

import Layout from "~/components/Layout";
import { api } from "~/utils/api";

const Index: NextPage = () => {
  const interestingThings = api.interestingThings.getAll.useQuery();

  return (
    <Layout>
      {interestingThings.data && (
        <pre>{JSON.stringify(interestingThings.data, null, 2)}</pre>
      )}
    </Layout>
  );
};

export default Index;
