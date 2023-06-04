import React from "react";
import { Text, Stack, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Error404 = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  localStorage.setItem("tokenInvited", id);
  return (
    <Stack>
      <Box width={"100%"} h={"52%"} mt={10}>
        <Text
          fontFamily={"Syne"}
          letterSpacing={5}
          lineHeight={1.5}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("404error")}
        </Text>
      </Box>
    </Stack>
  );
};
