import ButtonUpdate from "../../components/Button";

export default async function TodoId(props: { params: any }) {
  const data = await fetch(`https://dummyjson.com/todos/${props.params.id}`
  ).then((response) => response.json());

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="shadow-md rounded-md p-8">
        <p>{data.title}</p>
        <div className="mt-4"></div>
        <ButtonUpdate isCompleted={data.completed} id={data.id} />
      </div>
    </div>
  );
}
