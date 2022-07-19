import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  IconButton,
  FormControl,
  FormLabel,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { ModifiedNote } from "../ProjectSection";

interface INotesModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  note?: ModifiedNote;
  userId: string;
  projectNumber: string;
  mutate: any;
}

const NotesModal: React.FunctionComponent<INotesModalProps> = ({
  isOpen,
  onOpen,
  onClose,
  note,
  userId,
  projectNumber,
  mutate,
}) => {
  const [openedNote, setOpenedNote] = React.useState<ModifiedNote | {}>(
    note || {}
  );
  const [inputErrors, setInputErrors] = React.useState({
    title: "",
    description: "",
  });
  const [submitting, setSubmitting] = React.useState(false);
  const toast = useToast();
  console.log(openedNote);
  return (
    <>
      <IconButton
        aria-label="Add"
        size="sm"
        icon={<PlusSquareIcon fontSize="1rem" />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={6}>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                onChange={(e) => {
                  setOpenedNote((prev) => ({
                    ...prev,
                    Title: e.target.value,
                  }));
                  if (!e.target.value) {
                    setInputErrors((prev) => ({
                      ...prev,
                      title: "Title cannot be blank.",
                    }));
                  }
                }}
              />
              {inputErrors.title && (
                <FormErrorMessage>{inputErrors.title}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                placeholder="Here is a sample placeholder"
                resize="vertical"
                onChange={(e) => {
                  setOpenedNote((prev) => ({
                    ...prev,
                    Description: e.target.value,
                  }));
                  if (!e.target.value) {
                    setInputErrors((prev) => ({
                      ...prev,
                      description: "Description cannot be blank.",
                    }));
                  } else {
                    setInputErrors((prev) => ({
                      ...prev,
                      description: "",
                    }));
                  }
                }}
              />
              {!!inputErrors.description && (
                <FormErrorMessage>{inputErrors.description}</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {!note && (
              <Button
                colorScheme="blue"
                mr={3}
                isLoading={submitting}
                disabled={submitting}
                onClick={async () => {
                  try {
                    if (
                      (inputErrors.hasOwnProperty("title") &&
                        inputErrors.title) ||
                      (inputErrors.hasOwnProperty("description") &&
                        inputErrors.description)
                    ) {
                      return toast({
                        title: "Invalid inputs",
                        description:
                          "Please enter the correct information before submitting.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                      });
                    }
                    setSubmitting(true);
                    await axios.post(
                      `/api/user/${userId}/projects/${projectNumber}/notes`,
                      {
                        ...openedNote,
                      }
                    );
                    mutate();
                    setSubmitting(false);
                    onClose();
                  } catch (error: any) {
                    setSubmitting(false);
                    toast({
                      title: "Operation failed.",
                      description: error.message,
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                }}
              >
                Add
              </Button>
            )}
            <Button
              variant="ghost"
              onClick={onClose}
              isLoading={submitting}
              disabled={submitting}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default React.memo(NotesModal);
