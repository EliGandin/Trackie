interface FieldValueProps {
  error: string;
}

const FieldValueError: React.FC<FieldValueProps> = ({ error }) => {
  return (
    <li className="justify-start text-left text-red-300">&#8226; {error}</li>
  );
};

export default FieldValueError;
