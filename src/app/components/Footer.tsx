import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({
  limit,
  skip,
  total,
}: {
  limit: number;
  total: number;
  skip: number;
}) => {
  let content = [];
  const [page, setPage] = useState(1);

  const handlePaginate = (idx: number) => {
    setPage(idx + 1);
  };

  useEffect(() => {
    setPage(Math.floor(skip / limit) + 1);
  }, [skip, limit]);

  for (let i = 0; i < total / limit; i++) {
    content.push(
      <Link
        key={i}
        href={`/?limit=${limit}&skip=${limit * i}`}
        onClick={() => handlePaginate(i)}
        className={`px-4 py-2 w-fit rounded-md text-white mx-2 ${
          page === i + 1
            ? "bg-gray-300 cursor-default"
            : "bg-green-500 cursor-pointer"
        }`}
      >
        {i + 1}
      </Link>
    );
  }
  return content;
};

export default Footer;
