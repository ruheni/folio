"use client";

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Page from "./page-layout";
import { NavBar } from "./navbar";
// import { useAtom } from "jotai";
import { NAVBAR_HEIGHT } from "../constants";
import { useRouter } from "next/router";
// import * as atoms from "../atoms/user-atoms";
// import { useEffect } from "react";
// import { NextResponse } from "next/server";

export const dynamicParams = true;

type LayoutProps = {
  // params: {
  //   subdomain: string;
  // };
  children: React.ReactNode;
};

const View = styled(Flex)`
  height: 100%;
  width: 100%;
  margin-top: ${NAVBAR_HEIGHT}px;
`;

const FeedLayout = (props: LayoutProps) => {
  const { children } = props;
  //   const pathname = usePathname();
  //   const params = useParams();
  const router = useRouter();

  const subdomain = router.query.subdomain as string;

  const handleClick = async () => {
    fetch(`/api`, {
      method: "POST",
      headers: { "x-subdomain": subdomain },
      body: "1234",
    })
      .then((response: Response) => {
        if (response.status === 200) {
          router.push("/admin");
        }
      })
      .catch((error) => console.error("Unable to post; error: ", error));
  };

  return (
    <>
      <Page>
        <NavBar />
        <View>{children}</View>
      </Page>
    </>
  );
};

export default FeedLayout;
