import React, { useEffect } from "react";
import {
  Stack,
  InputRightElement,
  Image,
  Text,
  Box,
  InputGroup,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Pressable } from "react-native";
import { Link, Navigate } from "react-router-dom";
import { validateEmail } from "../../../helpers/Validations";
import { actionEmail } from "../../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authApi } from "../../../api";
import { useTranslation } from "react-i18next";
export const Email = () => {
  const { user } = useSelector((store) => store);
  const [email, setEmail] = React.useState(user.email);
  const [dataValidate, setDataValidate] = React.useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  useEffect(() => {
    email && dispatch(actionEmail(email));
  }, [email, dispatch]);

  const checkEmailUnique = async () => {
    authApi
      .checkEmail(email)
      .then(() => {
        setDataValidate(true);
      })
      .catch((e) => {
        console.log(e)
        setDataValidate(false);
        toast.error(t("EmailEnUso"), { theme: "dark" });
      });
  };

  if (user.lastname === "") return <Navigate to="/invite/lastname" />;

  return (
    <Stack>
      <Box width={"100%"} h={"52%"} mt={8}>
        <Text
          fontFamily={"Syne"}
          letterSpacing={2}
          lineHeight={1.5}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("EmailGracias")}, {user.name}. {t("EmailAhora")}
          <span
            style={{
              color: "#282532",
              fontWeight: "800",
            }}
          >
            {" e-mail"}
          </span>
          .
        </Text>
      </Box>

      <Stack w={"100%"}>
        <HStack position={"absolute"} bottom={20} width={"100%"}>
          <Link to={"/invite/lastname"}>
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
              value={email}
              fontFamily={"Syne"}
              paddingX={8}
              borderRadius={20}
              fontSize={"1rem"}
              placeholder={t("EmailMensaje")}
              bg={"brand.white"}
              height={"3.5rem"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputRightElement width="3.5rem" height="3.5rem">
              <Pressable
                onPress={async () => {
                  if (!validateEmail(email)) {
                    setDataValidate(false);
                    toast.error(t("EmailPorfor"), {
                      theme: "dark",
                    });
                  } else {
                    checkEmailUnique();
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
        </HStack>
      </Stack>

      {dataValidate && <Navigate to={"/invite/username"} />}
    </Stack>
  );
};
