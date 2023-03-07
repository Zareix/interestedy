/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import { type SubmitHandler, useForm } from "react-hook-form";

import Layout from "~/components/Layout";
import { api } from "../utils/api";

type Inputs = {
  title: string;
  url: string;
  description: string;
};

const Index: NextPage = () => {
  const addNew = api.interestingThings.create.useMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addNew.mutate(data);
  };

  return (
    <Layout>
      <div className="grid place-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="grid">
          <div className="mt-3 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              className="min-w-[30ch] rounded-lg border px-2 py-1 outline-none focus-visible:ring md:min-w-[40ch] "
            />
            {errors.title && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="mt-3 flex flex-col">
            <label className="font-semibold" htmlFor="url">
              Url
            </label>
            <input
              {...register("url", { required: true })}
              className="min-w-[30ch] rounded-lg border px-2 py-1 outline-none focus-visible:ring md:min-w-[40ch]"
            />
            {errors.url && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="mt-3 flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              {...register("description", {})}
              className="min-w-[30ch] rounded-lg border px-2 py-1 outline-none focus-visible:ring md:min-w-[40ch] "
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="ml-auto mt-4 rounded-md border-2 border-green-400 px-2 py-1 hover:border-green-200 hover:bg-green-200"
          >
            Add
          </button>
        </form>
      </div>
      {addNew.isSuccess && (
        <p>Added new interesting thing {getValues("title")}</p>
      )}
    </Layout>
  );
};

export default Index;
