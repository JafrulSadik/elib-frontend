"use client";
import { PaginationType } from "@/types/Book";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "./Pagination";

type Props = {
  pagination?: PaginationType;
};

const PaginationSection = ({ pagination }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageNumber = (props: { selected: number }) => {
    const page = props.selected + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  if (!pagination) return null;

  return <Pagination pagination={pagination} />;
};

export default PaginationSection;
