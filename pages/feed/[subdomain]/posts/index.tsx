import { useRouter } from "next/router";
import PostList from "../../../../components/post-list";
import FeedLayout from "../../../../components/feed-layout";
import { Flex } from "@chakra-ui/react";
import { CreatePost } from "../../../../components/post-controls";

const Posts = () => {
  // router allows access to subdomain like this:
  const router = useRouter();
  const subdomain = router.query.subdomain as string;

  return (
    <FeedLayout>
      <Flex flexDirection="column">
        {Boolean(subdomain) ? (
          <PostList subdomain={subdomain} />
        ) : (
          <div>No feed here 🤷🏻‍♀️</div>
        )}
        <CreatePost />
      </Flex>
    </FeedLayout>
  );
};

export default Posts;
