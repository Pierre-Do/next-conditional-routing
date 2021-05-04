import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

export default function TestPage(): JSX.Element {
  const router = useRouter();

  const isOpen = Boolean(router.query?.all?.includes("modal"));

  function handleClose() {
    router.push("/test");
  }

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Link href={`/test/foo`}>
        <Button color="secondary" variant="text">
          Another page
        </Button>
      </Link>
      <Link href={`/test/modal`} shallow scroll={false}>
        <Button color="primary" variant="contained">
          Open Modal
        </Button>
      </Link>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>Some Content</DialogContent>
      </Dialog>
    </Container>
  );
}
