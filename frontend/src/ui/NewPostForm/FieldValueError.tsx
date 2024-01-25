interface FieldValueProps {
  error: string;
}

const FieldValueError: React.FC<FieldValueProps> = ({ error }) => {
  return <p className="bg-neutral-600 text-center text-red-300">{error}</p>;
};

export default FieldValueError;
