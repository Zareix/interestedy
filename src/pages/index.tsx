import { type NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "~/components/Layout";
import { api } from "~/utils/api";

const Index: NextPage = () => {
  const { push } = useRouter();
  const interestingThings = api.interestingThings.getAll.useQuery();
  const deleteThing = api.interestingThings.delete.useMutation();

  const removeThing = (id: string) => {
    deleteThing
      .mutateAsync(id)
      .then(() => {
        interestingThings.refetch().catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  return (
    <Layout>
      <h1 className="mx-2 text-3xl font-bold">All your interesting things</h1>
      <table className="mt-4 w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Title</th>
            <th className="border px-2 py-1">Url</th>
          </tr>
        </thead>
        <tbody>
          {interestingThings.data?.map((thing) => (
            <tr
              key={thing.id}
              onClick={() => {
                push("/thing/" + thing.id).catch((e) => console.log(e));
              }}
            >
              <td className="px-2 py-1">{thing.title}</td>
              <td className="px-2 py-1">{thing.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Index;
