import React, { useState, useEffect } from "react";
import { Image, Text, Stack, Box } from "@chakra-ui/react";
import { Link, useParams, Navigate } from "react-router-dom";
import { actionUserId } from "../../../redux/auth/actions";
import { fromMobile } from "../../../redux/auth/actionTypes";
import { useDispatch } from "react-redux";
import { authApi } from "../../../api";
import { useTranslation } from "react-i18next";

export const Invite = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [status, setStatus] = useState("success");
  const [name, setName] = useState(false);

  return (
    <Stack>
      {status === "loading" && (
        <Text
          fontFamily={"Syne"}
          letterSpacing={5}
          lineHeight={1.5}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("InviteLoading")}
        </Text>
      )}
      {status === "error" && (
        <Text
          fontFamily={"Syne"}
          letterSpacing={3}
          lineHeight={1.5}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("InviteText1")}
        </Text>
      )}
      {status === "success" && (
        <>
          <Box width={"100%"} h={"52%"} mt={10}>
            <Text
              fontFamily={"Syne"}
              letterSpacing={2}
              lineHeight={1.5}
              fontWeight={"700"}
              fontSize={13}
            >
              {t("InviteText2")}
              <span
                style={{
                  color: "#282532",
                  fontWeight: "800",
                  fontFamily: "Syne",
                }}
              >
                {name && name.toUpperCase()}
              </span>
              .
            </Text>
            <Text
              fontFamily={"Syne"}
              letterSpacing={2}
              lineHeight={1.5}
              fontWeight={"700"}
              fontSize={13}
              marginTop={6}
            >
              {t("InviteText3")}
            </Text>
          </Box>
          <Box
            alignSelf={"flex-end"}
            position={"absolute"}
            right={5}
            top={"50%"}
          >
            <Link to={"/invite/firstname"}>
              <Image
                w={11}
                h={21}
                src={require("../../../assets/next.png")}
              ></Image>
            </Link>
          </Box>
        </>
      )}
    </Stack>
  );
};
