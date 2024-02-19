import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const Footer = ({
  limit,
  skip,
  total,
}: {
  limit: number;
  total: number;
  skip: number;
}) => {
  const page = useMemo(() => {
    return Math.floor(skip / limit) + 1;
  }, [skip, limit]);

  const totalPages = React.useMemo(() => {
    return total / limit;
  }, [limit, total]);

  const result = React.useCallback(() => {
    let content = [];
    for (let i = 0; i < totalPages; i++) {
      content.push(
        <Link
          key={i}
          href={`/?limit=${limit}&skip=${limit * i}`}
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
  }, [totalPages, limit, page]);

  return result();
};

export default Footer;
