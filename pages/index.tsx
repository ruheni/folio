import { Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const { NEXT_PUBLIC_BASE_PROTOCOL, NEXT_PUBLIC_BASE_URL_PATH } = process.env;

const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 5px;
`;

export async function getStaticProps() {
  const protocol = process.env.NEXT_PUBLIC_BASE_PROTOCOL;
  const urlPath = process.env.NEXT_PUBLIC_BASE_URL_PATH;
  return { props: { protocol, urlPath } };
  // ...
}

export default function Home({ protocol, urlPath }) {
  console.log("protocol: ", protocol);
  console.log("urlPath: ", urlPath);
  const path = `${protocol}demo.${urlPath}/posts`;

  // React.useEffect(() => {
  //   if (NEXT_PUBLIC_BASE_PROTOCOL && NEXT_PUBLIC_BASE_URL_PATH) {
  //     console.log("has variables");
  //     setPath(getPath());
  //   }
  // }, [NEXT_PUBLIC_BASE_PROTOCOL, NEXT_PUBLIC_BASE_URL_PATH]);

  return (
    <Wrapper>
      <p>This is the homepage. You can access this page without logging in.</p>
      <a href={path}>
        {/* <Flex> */}
        <Button colorScheme="blue" variant="solid">
          View Demo Feed
        </Button>
        {/* </Flex> */}
      </a>
    </Wrapper>
  );
}
