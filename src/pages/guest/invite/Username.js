import React, { useEffect } from "react";
import {
  Stack,
  InputRightElement,
  Image,
  Text,
  InputGroup,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Pressable } from "react-native-web";
import { Link, Navigate } from "react-router-dom";
import { actionUsername } from "../../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "../../../helpers/Validations";
import { toast } from "react-toastify";
import { authApi } from "../../../api";
import { useTranslation } from "react-i18next";

export const Username = () => {
  const { t } = useTranslation();

  const { user } = useSelector((store) => store);
  const [username, serUsername] = React.useState(user.username);
  const [dataValidate, setDataValidate] = React.useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    username && dispatch(actionUsername(username));
  }, [username, dispatch]);

  const checkUsernameUnique = () => {
    authApi
      .checkUsername(username)
      .then((_response) => {
        setDataValidate(true);
      })
      .catch((_error) => {
        setDataValidate(false);
        toast.error(t("UserError"), { theme: "dark" });
      });
  };

  if (user.email === "") return <Navigate to="/invite/email" />;

  return (
    <Stack>
      <Text
        fontFamily={"Syne"}
        letterSpacing={2}
        lineHeight={1.5}
        fontWeight={"700"}
        fontSize={13}
      >
        {t("UsernameGracias")}, {user.name}.
      </Text>
      <Text
        fontFamily={"Syne"}
        letterSpacing={2}
        lineHeight={1.5}
        fontWeight={"700"}
        fontSize={13}
      >
        {t("UsernameAhoracreaun")}
        <span
          style={{
            color: "#282532",
            fontWeight: "800",
          }}
        >
          {t("UsernameUsuario")}
        </span>
        {t("UsernameMAsteGuste")}
      </Text>

      <HStack position={"absolute"} bottom={20} width={"100%"}>
        <Link to={"/invite/email"}>
          <Image
            justifyContent={"center"}
            w={11}
            h={21}
            marginRight={7}
            src={require("../../../assets/return.png")}
          ></Image>
        </Link>

        <InputGroup>
          <Input
            value={username}
            fontFamily={"Syne"}
            paddingX={8}
            borderRadius={20}
            fontSize={"1rem"}
            placeholder={t("usuarioMEnsage")}
            bg={"brand.white"}
            height={"3.5rem"}
            onChange={(e) => serUsername(e.target.value)}
          />
          <InputRightElement width="3.5rem" height="3.5rem">
            <Pressable
              onPress={() => {
                if (validateUser(username)) {
                  checkUsernameUnique();
                } else {
                  setDataValidate(false);
                  toast.error(t("UsernameUser"), {
                    theme: "dark",
                  });
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

      {dataValidate && <Navigate to={"/invite/password"} />}
    </Stack>
  );
};
