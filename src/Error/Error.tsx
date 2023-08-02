interface IErrorMsg {
  message: string;
}

const Error = ({ message }: IErrorMsg) => {
  return (
    <p className="text-red-500 text-center font-semibold mt-6">
      Error: {message}
    </p>
  );
};

export default Error;
