import { type NextPage } from "next";
import { useRouter } from "next/router";
import { YoptaEditor } from "yopta-editor";

import "yopta-editor/dist/index.css";

import { api } from "~/utils/api";
import Layout from "~/components/Layout";
import { useState } from "react";

const Thing: NextPage = () => {
  const { query } = useRouter();
  const interestingThing = api.interestingThings.get.useQuery(query.id);
  const [editorValue, setEditorValue] = useState([]);

  const onChange = (data) => {
    console.log(data);
    setEditorValue(data);
  };

  if (interestingThing.isLoading) return <p>Loading...</p>;

  if (interestingThing.isError) {
    return <p>Something went wrong : {interestingThing.error.message}</p>;
  }

  return (
    <Layout>
      <h1 className="mx-2 text-3xl font-bold">Thing</h1>
      <p>{interestingThing.data?.title}</p>
      {interestingThing.data?.description && (
        <p>{interestingThing.data?.description}</p>
      )}
      <p>
        <a href={interestingThing.data?.url} target="_blank" rel="noreferrer">
          {interestingThing.data?.url}
        </a>
      </p>
      <YoptaEditor value={editorValue} onChange={onChange} />
    </Layout>
  );
};

export default Thing;
