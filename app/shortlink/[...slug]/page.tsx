import React from "react";

const page = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  return (
    <div>
      <h1>Please wait... {slug}</h1>
    </div>
  );
};

export default page;
