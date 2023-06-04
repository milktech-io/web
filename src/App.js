import "./App.css";
import { Stack, Center, Box, Image } from "@chakra-ui/react";
function App({ children }) {
  return (
    <Stack>
      <Center>
        <div
          style={{
            width: "90%",
            maxWidth: "500px",
            position: "relative",
            height: "100vh",
            paddingTop: "100px",
          }}
        >
          <Box
            alignSelf={"flex-start"}
            marginBottom="2rem"
            display={"flex"}
            flexDir={"row"}
          >
            <Image w={120} src={require("./assets/eon.png")} alt="account" />
          </Box>
          {children}
        </div>
      </Center>
    </Stack>
  );
}

export default App;
