type ErrorComponentProps = {
  message: string;
  textColor?: string;
  bgColor?: string;
};

const ErrorComponent = ({
  message,
  textColor = "text-red-500",
  bgColor = "bg-bgSecondary/10",
}: ErrorComponentProps) => {
  return (
    <div
      className={`h-32 md:h-64 mt-6 md:mt-0 flex justify-center items-center text-red-500 rounded-lg ${bgColor} ring-1 ring-textPrimary/50`}
    >
      <p className={`text-xs md:text-base font-semibold ${textColor}`}>
        {message}
      </p>
    </div>
  );
};

export default ErrorComponent;
