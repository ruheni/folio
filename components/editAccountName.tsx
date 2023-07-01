import { EditIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const EditAccountName = ({ id, currentName }) => {
  const [name, setName] = useState(currentName);
  const [isEditing, setIsEditing] = useState(false);

  const onNameEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setName(name);
    console.log("new name for user ", id, " should change to ", name);
    onChangeName().then(({ isFinishedEditing }) => {
      console.log("isFinishedEditing is ", isFinishedEditing);
      setIsEditing(!isFinishedEditing);
    });
  };

  const onChangeName = async () => {
    console.log("updating name to ", name);
    const result = await fetch(`/api/account/${id}`, {
      method: "PUT",
      body: name,
    });
    console.log("result of update call is ", result);
    return { isFinishedEditing: result.status === 200 };
  };

  return (
    <Box minHeight="500px">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
            />
            <FormHelperText>The question is, 🦉 whooo are YOU?</FormHelperText>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      ) : (
        <Text fontSize="md">
          {name}{" "}
          <IconButton
            aria-label="edit"
            variant="ghost"
            color="dimgrey"
            icon={<EditIcon />}
            onClick={onNameEditClick}
          />
        </Text>
      )}
    </Box>
  );
};
