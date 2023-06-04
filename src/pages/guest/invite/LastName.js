import React, { useEffect } from "react";
import {
  InputRightElement,
  Image,
  Text,
  Box,
  InputGroup,
  Input,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { Pressable } from "react-native";
import { Link, Navigate } from "react-router-dom";
import { validateName } from "../../../helpers/Validations";
import { actionLastname } from "../../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const LastName = () => {
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [lastName, setLastName] = React.useState(user.lastname);
  const [dataValidate, setDataValidate] = React.useState(false);

  let nextRoute = "/invite/email";
  const { prerregistered } = useSelector((store) => store.user);

  if (prerregistered) nextRoute = "/invite/password";

  useEffect(() => {
    lastName && dispatch(actionLastname(lastName));
  }, [lastName, dispatch]);

  if (user.name === "") return <Navigate to="/invite/firstname" />;

  return (
    <Stack>
      <Box width={"100%"} h={"52%"} mt={10}>
        <Text
          fontFamily={"Syne"}
          letterSpacing={2}
          lineHeight={2}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("LastNameGracias")}, {user.name}.
        </Text>

        <Text
          fontFamily={"Syne"}
          letterSpacing={2}
          lineHeight={1.5}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("LastNameCualEs")}
          <span
            style={{
              color: "#282532",
              fontWeight: "800",
              fontFamily: "Syne",
            }}
          >
            {t("LastNameApellido")}
          </span>
          ?
        </Text>
      </Box>

      <Stack w={"100%"}>
        <HStack position={"absolute"} bottom={20} width={"100%"}>
          <Link to={"/invite/firstname"}>
            <Image
              justifyContent={"Stack"}
              w={11}
              h={21}
              marginRight={7}
              src={require("../../../assets/return.png")}
            ></Image>
          </Link>

          <InputGroup>
            <Input
              value={lastName}
              fontFamily={"Syne"}
              paddingX={8}
              borderRadius={20}
              fontSize={"1rem"}
              placeholder={t("LastNameEscribe")}
              bg={"brand.white"}
              height={"3.5rem"}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputRightElement width="3.5rem" height="3.5rem">
              <Pressable
                onPress={() => {
                  if (!validateName(lastName)) {
                    toast.error(t("LastNameApellidos"), {
                      theme: "dark",
                    });
                    setDataValidate(false);
                  } else {
                    setDataValidate(true);
                  }
                }}
              >
                <Image
                  w={23}
                  h={22}
                  src={require("../../../assets/send.png")}
                  alt="send"
                />
              </Pressable>
            </InputRightElement>
          </InputGroup>
          {/* </Stack> */}
        </HStack>
      </Stack>

      {dataValidate && <Navigate to={nextRoute} />}
    </Stack>
  );
};
