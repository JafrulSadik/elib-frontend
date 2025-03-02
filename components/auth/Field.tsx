import { motion } from "framer-motion";

type FieldProps = {
  children: React.ReactNode;
  error?: string;
};

const Field = ({ children, error }: FieldProps) => {
  return (
    <div className="flex flex-col py-2">
      {children}
      {!!error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-red-500 text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Field;
